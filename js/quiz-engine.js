/* ============================================
   LESSON QUIZ ENGINE — reused by Reading, Vocabulary, Grammar
   Sequential unlock: pass a lesson's quiz at >=70% to unlock the next.
   ============================================ */

function initLessonQuizEngine(sectionKey, LEVELS, contentLabel) {
  const tabsEl = document.querySelector('.level-tabs');
  const panelsContainer = document.querySelector('.level-panels');
  const certSlot = document.querySelector('.cert-slot');
  if (!tabsEl || !panelsContainer) return;

  const PASS_THRESHOLD = 70;
  let sectionProgress = window.LinguaProgress.getSection(sectionKey);

  const iconCheck = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 13 4 4L19 7"/></svg>';
  const iconLock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  function isPassed(lessonId) { return !!sectionProgress[lessonId]?.passed; }

  function renderCard(level, lesson, idx, prevPassed) {
    const lessonId = `${level.id}-${idx + 1}`;
    const passed = isPassed(lessonId);
    const locked = idx > 0 && !prevPassed;
    const score = sectionProgress[lessonId]?.score;

    const card = document.createElement('div');
    card.className = 'card lesson-card' + (passed ? ' quiz-passed' : '') + (locked ? ' is-locked' : '');
    card.dataset.lessonId = lessonId;

    card.innerHTML = `
      <span class="lesson-num">Lesson ${idx + 1}</span>
      <h4>${lesson.title}</h4>
      <p class="lesson-sentence">${lesson.preview || (lesson.body || '').slice(0, 90) + '…'}</p>
      <div class="lesson-footer">
        <span class="lesson-status ${passed ? 'done' : ''}">${passed ? iconCheck + ` Passed · ${score}%` : (locked ? 'Locked' : 'Not started')}</span>
        <button class="play-btn start-lesson-btn" ${locked ? 'disabled' : ''}>${passed ? 'Review' : 'Start'}</button>
      </div>
      ${locked ? `<div class="lock-badge">${iconLock}<span>Complete Lesson ${idx} first</span></div>` : ''}
    `;

    card.querySelector('.start-lesson-btn').addEventListener('click', () => {
      if (!locked) openQuizModal(level, lesson, lessonId, idx);
    });

    return card;
  }

  function renderLevel(level, i) {
    const tab = document.createElement('button');
    tab.className = 'level-tab' + (i === 0 ? ' active' : '');
    tab.textContent = level.name;
    tab.dataset.target = level.id;
    tabsEl.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'level-panel' + (i === 0 ? ' active' : '');
    panel.id = level.id;

    const grid = document.createElement('div');
    grid.className = 'lesson-grid';

    level.lessons.forEach((lesson, idx) => {
      const prevPassed = idx === 0 ? true : isPassed(`${level.id}-${idx}`);
      grid.appendChild(renderCard(level, lesson, idx, prevPassed));
    });

    panel.appendChild(grid);
    panelsContainer.appendChild(panel);
  }

  LEVELS.forEach(renderLevel);

  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.level-tab');
    if (!tab) return;
    tabsEl.querySelectorAll('.level-tab').forEach((t) => t.classList.remove('active'));
    panelsContainer.querySelectorAll('.level-panel').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });

  function reRenderLevel(level) {
    const panel = document.getElementById(level.id);
    const wasActive = panel.classList.contains('active');
    panel.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'lesson-grid';
    level.lessons.forEach((lesson, idx) => {
      const prevPassed = idx === 0 ? true : isPassed(`${level.id}-${idx}`);
      grid.appendChild(renderCard(level, lesson, idx, prevPassed));
    });
    panel.appendChild(grid);
    if (wasActive) panel.classList.add('active');
    checkCertificate();
  }

  /* ---------- Modal ---------- */
  let modalWrap = document.querySelector('.quiz-modal-wrap');
  if (!modalWrap) {
    modalWrap = document.createElement('div');
    modalWrap.className = 'quiz-modal-wrap';
    modalWrap.innerHTML = `
      <div class="backdrop-blur-layer is-visible" style="position:absolute;"></div>
      <div class="quiz-modal"></div>`;
    document.body.appendChild(modalWrap);
  }
  const modalBody = modalWrap.querySelector('.quiz-modal');

  function closeModal() {
    modalWrap.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalWrap.addEventListener('click', (e) => {
    if (e.target === modalWrap || e.target.classList.contains('backdrop-blur-layer')) closeModal();
  });

  function openQuizModal(level, lesson, lessonId, idx) {
    modalBody.innerHTML = `
      <button class="modal-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <span class="feature-tag">${level.name}</span>
      <h3>${lesson.title}</h3>
      <div class="quiz-lesson-body">${lesson.body}</div>
      <form id="quiz-form">
        ${lesson.quiz.map((q, qi) => `
          <div class="quiz-q" data-qi="${qi}">
            <p class="q-text">${qi + 1}. ${q.q}</p>
            ${q.options.map((opt, oi) => `
              <label class="quiz-option">
                <input type="radio" name="q${qi}" value="${oi}">
                ${opt}
              </label>`).join('')}
          </div>`).join('')}
        <button type="submit" class="btn btn-primary" style="width:100%;">Submit Quiz</button>
      </form>
      <div class="quiz-result"></div>
    `;

    modalBody.querySelector('.modal-close').addEventListener('click', closeModal);

    modalBody.querySelector('#quiz-form').addEventListener('submit', (e) => {
      e.preventDefault();
      let correct = 0;

      lesson.quiz.forEach((q, qi) => {
        const selected = modalBody.querySelector(`input[name="q${qi}"]:checked`);
        const qBlock = modalBody.querySelector(`.quiz-q[data-qi="${qi}"]`);
        const opts = qBlock.querySelectorAll('.quiz-option');

        opts[q.answer].classList.add('correct');
        if (selected) {
          const chosenIdx = parseInt(selected.value, 10);
          if (chosenIdx === q.answer) correct++;
          else opts[chosenIdx].classList.add('wrong');
        }
      });

      const score = Math.round((correct / lesson.quiz.length) * 100);
      const { passed } = window.LinguaProgress.submitQuiz(sectionKey, lessonId, score, PASS_THRESHOLD);
      sectionProgress = window.LinguaProgress.getSection(sectionKey);

      const resultEl = modalBody.querySelector('.quiz-result');
      resultEl.classList.add('show', passed ? 'pass' : 'fail');
      resultEl.textContent = passed
        ? `✅ ${score}% — Passed! Next lesson unlocked. +12 XP`
        : `🔁 ${score}% — You need ${PASS_THRESHOLD}% to pass. Try this lesson again.`;

      modalBody.querySelector('#quiz-form button[type="submit"]').style.display = 'none';

      setTimeout(() => {
        closeModal();
        reRenderLevel(level);
        if (passed) window.showToast?.(`Lesson passed! +12 XP 🎉`);
      }, 1600);
    });

    modalWrap.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  /* ---------- Certificate eligibility ---------- */
  function checkCertificate() {
    if (!certSlot) return;
    const totalLessons = LEVELS.reduce((s, l) => s + l.lessons.length, 0);
    const passedCount = Object.values(sectionProgress).filter((l) => l.passed).length;

    if (passedCount >= totalLessons) {
      certSlot.innerHTML = `
        <div class="cert-banner">
          <div>
            <h3>🎓 Congratulations! You completed all ${totalLessons} lessons.</h3>
            <p>Your certificate is ready — download it or share it on WhatsApp.</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary" id="download-cert-btn">Download PDF</button>
            <button class="btn btn-ghost" id="share-cert-btn" style="background:rgba(255,255,255,0.15); border-color:rgba(255,255,255,0.4); color:#fff;">Share via WhatsApp</button>
          </div>
        </div>`;

      document.getElementById('download-cert-btn').addEventListener('click', () => {
        window.LinguaCertificate.generate(sectionKey);
      });
      document.getElementById('share-cert-btn').addEventListener('click', () => {
        window.LinguaCertificate.shareWhatsApp(sectionKey);
      });
    } else {
      certSlot.innerHTML = '';
    }
  }

  checkCertificate();
}
