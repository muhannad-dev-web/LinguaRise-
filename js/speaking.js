/* ============================================
    SPEAKING MODULE — Example (TTS) + Check (Speech Recognition)
    ============================================ */

const SPEAKING_LEVELS = [
  {
    id: 'slevel1',
    name: 'Level 1 · Beginner',
    exercises: [
      'Hello.',
      'Good morning.',
      'How are you?',
      'My name is Ahmed.',
      'Nice to meet you.',
      'Where are you from?',
      'I need some help.',
      'What time is it now?',
      'I would like a cup of coffee.',
      'Where is the nearest bus stop?',
      'Can you show me the way to the hotel?',
      'Thank you very much for your kind assistance.'
    ]
  },
  {
    id: 'slevel2',
    name: 'Level 2 · Intermediate',
    exercises: [
      'Could you please repeat that more slowly?',
      'I have been living here for three years.',
      'What do you think about this new learning idea?',
      'I am really looking forward to the upcoming weekend.',
      'Could you tell me how to reach the city center?',
      'It is important to practice speaking English every single day.',
      'I am trying my best to improve my communication skills quickly.',
      'We should arrange a meeting to discuss this matter further tomorrow.',
      'If you have any questions, please do not hesitate to ask me.',
      'Learning a new language opens up many incredible opportunities for your career.',
      'I completely agree with your perspective on this educational topic we discussed.',
      'We need to find an effective solution to this technical problem as soon as possible.'
    ]
  },
  {
    id: 'slevel3',
    name: 'Level 3 · Advanced',
    exercises: [
      'Despite the immense challenges, we managed to finish the project exactly on time.',
      'I would highly appreciate it if you could clarify your specific point a bit further.',
      'The complex negotiations are expected to successfully conclude by the very end of this week.',
      'In hindsight, we definitely should have considered the potential risks much more carefully than we did.',
      'To be successful, one must constantly adapt to ever-changing environments and embrace modern technological advancements.',
      'It is widely believed that consistent immersion is the most effective methodology for mastering a foreign language fluently.',
      'We must take into consideration all the contributing economic factors before finalizing this critical long-term financial decision.',
      'The comprehensive study clearly demonstrates a direct correlation between regular physical exercise and enhanced cognitive performance over time.',
      'Under no circumstances should we underestimate the profound impact of global climate change on biodiversity and future generations.',
      'She eloquently articulated her innovative vision for the future of digital education during the international conference yesterday afternoon.',
      'Achieving fluency requires not only memorizing extensive vocabulary but also understanding the subtle cultural nuances embedded within the language.',
      'In order to foster a collaborative work environment, managers must actively encourage transparent communication and mutual respect among all team members.'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const tabsEl = document.querySelector('.speak-tabs');
  const panelsContainer = document.querySelector('.speak-panels');
  if (!tabsEl || !panelsContainer) return;

  const totalExercises = SPEAKING_LEVELS.reduce((sum, lvl) => sum + lvl.exercises.length, 0);
  const progress = window.LinguaProgress.get();

  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  const synth = window.speechSynthesis;

  // Samaynta liis toosan oo dhammaan casharrada ah si loo ogaado kan ka horreeya
  const allExercisesFlat = [];
  SPEAKING_LEVELS.forEach((level) => {
    level.exercises.forEach((phrase, idx) => {
      allExercisesFlat.push({
        exId: `${level.id}-${idx + 1}`,
        phrase: phrase
      });
    });
  });

  SPEAKING_LEVELS.forEach((level, i) => {
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

    level.exercises.forEach((phrase, idx) => {
      const exId = `${level.id}-${idx + 1}`;
      const prevScore = progress.speaking[exId] || 0;

      // Raadi casharkii ka horreeyay kan hadda la joogo
      const currentFlatIdx = allExercisesFlat.findIndex(e => e.exId === exId);
      let isLocked = false;
      
      if (currentFlatIdx > 0) {
        const prevExercise = allExercisesFlat[currentFlatIdx - 1];
        const prevExerciseScore = progress.speaking[prevExercise.exId] || 0;
        // Haddii casharkii ka horreeyay score-kiisu ka yar yahay 100%, kani waa xirmayaa
        if (prevExerciseScore < 100) {
          isLocked = true;
        }
      }

      const card = document.createElement('div');
      card.className = `card speak-card ${isLocked ? 'lesson-locked' : ''}`;
      if (isLocked) {
        card.style.opacity = "0.5";
      }

      card.innerHTML = `
        <span class="lesson-num">Exercise ${idx + 1}${prevScore ? ` · Best: ${prevScore}%` : ''}</span>
        <p class="speak-phrase" style="font-size: 1.1rem; line-height: 1.5; margin: var(--space-3) 0;">"${phrase}"</p>
        <div class="speak-actions">
          <button class="btn btn-ghost btn-example" data-text="${phrase.replace(/"/g, '&quot;')}">
            🔊 Example
          </button>
          <button class="btn btn-primary btn-mic" 
                  data-ex-id="${exId}" 
                  data-phrase="${phrase.replace(/"/g, '&quot;')}"
                  ${isLocked ? 'disabled style="background-color: var(--border-color); color: var(--text-muted); cursor: not-allowed;"' : ''}>
            ${isLocked ? '🔒 Locked' : '🎙️ Check'}
          </button>
        </div>
        <div class="speak-feedback" style="margin-top: 10px; font-weight: 500;"></div>`;
      grid.appendChild(card);
    });

    panel.appendChild(grid);
    panelsContainer.appendChild(panel);
  });

  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.level-tab');
    if (!tab) return;
    tabsEl.querySelectorAll('.level-tab').forEach((t) => t.classList.remove('active'));
    panelsContainer.querySelectorAll('.level-panel').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });

  /* ---------- Example: TTS playback (🔊 Example) ---------- */
  panelsContainer.addEventListener('click', (e) => {
    const exBtn = e.target.closest('.btn-example');
    if (exBtn && synth) {
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(exBtn.dataset.text);
      utter.lang = 'en-US';
      utter.rate = 0.85; // Wax yar ayaa loo dhameeyay si uu ardaygu u fahmo
      synth.speak(utter);
    }
  });

  /* ---------- Check: Speech Recognition ---------- */
  function similarity(a, b) {
    const clean = (s) => s.toLowerCase().replace(/[^a-z\s]/g, '').trim().split(/\s+/);
    const wa = clean(a);
    const wb = clean(b);
    const setB = new Set(wb);
    const matches = wa.filter((w) => setB.has(w)).length;
    return Math.round((matches / wa.length) * 100);
  }

  panelsContainer.addEventListener('click', (e) => {
    const micBtn = e.target.closest('.btn-mic');
    if (!micBtn || micBtn.hasAttribute('disabled')) return;

    if (!SpeechRecognitionAPI) {
      window.showToast?.('Browser-kaan ma taageerayo Speech Recognition. Isticmaal Chrome.');
      return;
    }

    const card = micBtn.closest('.speak-card');
    const feedback = card.querySelector('.speak-feedback');
    const phrase = micBtn.dataset.phrase;
    const exId = micBtn.dataset.exId;

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    micBtn.classList.add('is-listening');
    micBtn.textContent = '🎙️ Listening…';
    feedback.className = 'speak-feedback';
    feedback.textContent = '';

    recognition.onresult = (event) => {
      const said = event.results[0][0].transcript;
      const score = similarity(phrase, said);

      window.LinguaProgress.markSpeakingScore(exId, score);

      feedback.className = 'speak-feedback show';
      if (score === 100) {
        feedback.style.color = "var(--color-success, #28a745)";
        feedback.textContent = `✅ "${said}" — 100% match. Perfect! Next lesson unlocked.`;
        
        // Hadda fur casharka ku xiga maadaama 100% la helay
        const currentFlatIdx = allExercisesFlat.findIndex(e => e.exId === exId);
        if (currentFlatIdx !== -1 && currentFlatIdx + 1 < allExercisesFlat.length) {
          const nextExercise = allExercisesFlat[currentFlatIdx + 1];
          const nextMicBtn = panelsContainer.querySelector(`[data-ex-id="${nextExercise.exId}"]`);
          if (nextMicBtn) {
            nextMicBtn.removeAttribute('disabled');
            nextMicBtn.style.backgroundColor = '';
            nextMicBtn.style.color = '';
            nextMicBtn.style.cursor = 'pointer';
            nextMicBtn.textContent = '🎙️ Check';
            const nextCard = nextMicBtn.closest('.speak-card');
            if (nextCard) {
              nextCard.classList.remove('lesson-locked');
              nextCard.style.opacity = "1";
            }
          }
        }
      } else {
        feedback.style.color = "var(--color-error, #dc3545)";
        feedback.textContent = `🔁 "${said}" — ${score}% match. You need exactly 100% to pass.`;
      }

      const label = card.querySelector('.lesson-num');
      const base = `Exercise ${label.textContent.match(/\d+/)[0]}`;
      const currentProgress = window.LinguaProgress.get();
      const bestScore = currentProgress.speaking[exId] || score;
      label.textContent = `${base} · Best: ${bestScore}%`;
    };

    recognition.onerror = () => {
      feedback.className = 'speak-feedback show';
      feedback.style.color = "#dc3545";
      feedback.textContent = 'Could not hear you clearly. Please try again.';
    };

    recognition.onend = () => {
      micBtn.classList.remove('is-listening');
      if (!micBtn.hasAttribute('disabled')) {
        micBtn.textContent = '🎙️ Check';
      }
    };

    recognition.start();
  });
});