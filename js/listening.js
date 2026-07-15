/* ============================================
   LISTENING MODULE — 3 levels × 12 lessons
   Playback via Web Speech API (speechSynthesis)
   Enforced Sequential Unlocking (100% Listen to Unlock Next)
   ============================================ */

const LISTENING_LEVELS = [
  {
    id: 'level1',
    name: 'Level 1 · Beginner',
    lessons: [
      { title: 'Greetings', text: 'Hello, my name is Sarah. Nice to meet you. How are you today?' },
      { title: 'Family', text: 'This is my family. I have one brother and two sisters. My parents live in a small house.' },
      { title: 'Numbers', text: 'One, two, three, four, five. I have five books on my desk.' },
      { title: 'Colors', text: 'The sky is blue. The grass is green. My favorite color is red.' },
      { title: 'Days of the Week', text: 'Today is Monday. Tomorrow is Tuesday. I go to school every weekday.' },
      { title: 'Food', text: 'I like to eat rice and chicken. For breakfast, I usually drink tea with bread.' },
      { title: 'Weather', text: 'It is sunny today. Yesterday it was raining. I hope it does not rain tomorrow.' },
      { title: 'Clothes', text: 'She is wearing a blue dress and white shoes. He is wearing a black jacket.' },
      { title: 'Time', text: 'It is three o\'clock. The meeting starts at four. Please do not be late.' },
      { title: 'Directions', text: 'Go straight, then turn left. The market is next to the school.' },
      { title: 'Shopping', text: 'How much does this cost? I would like to buy two shirts, please.' },
      { title: 'Animals', text: 'The cat is sleeping on the sofa. Dogs are very friendly animals.' }
    ]
  },
  {
    id: 'level2',
    name: 'Level 2 · Intermediate',
    lessons: [
      { title: 'At the Airport', text: 'Excuse me, where is the check-in counter? My flight to London departs in two hours, and I still need to drop off my luggage.' },
      { title: 'Job Interview', text: 'Thank you for coming in today. Can you tell me about a challenge you faced at your last job and how you solved it?' },
      { title: 'Making Plans', text: 'Are you free this weekend? I was thinking we could visit the new museum downtown and grab lunch afterward.' },
      { title: 'Giving Opinions', text: 'In my opinion, remote work has both advantages and disadvantages, depending on the type of job and the person.' },
      { title: 'Health and the Doctor', text: 'I have had a headache for three days, and I am not sure if I should take medicine or just rest more.' },
      { title: 'Renting an Apartment', text: 'The apartment has two bedrooms, one bathroom, and a small balcony. The rent includes water, but not electricity.' },
      { title: 'Ordering at a Restaurant', text: 'Could I see the menu, please? I would like to start with a salad, followed by grilled fish.' },
      { title: 'Describing a City', text: 'The city is known for its old buildings, busy markets, and a river that runs right through the center.' },
      { title: 'Talking About the Past', text: 'When I was younger, I used to live in a village where everyone knew each other quite well.' },
      { title: 'Making Comparisons', text: 'This laptop is faster than my old one, but it is also more expensive and slightly heavier.' },
      { title: 'Phone Conversations', text: 'Hi, is this a good time to talk? I wanted to follow up on the email I sent you yesterday.' },
      { title: 'Discussing Hobbies', text: 'On weekends, I enjoy painting and hiking. It helps me relax after a busy week at work.' }
    ]
  },
  {
    id: 'level3',
    name: 'Level 3 · Advanced',
    lessons: [
      { title: 'Business Negotiations', text: 'Before we finalize the agreement, we need to reconsider the payment terms, as the current proposal places too much risk on our side.' },
      { title: 'Debating Climate Change', text: 'While some argue that individual actions are insufficient without systemic policy change, others believe that consumer behavior can still drive meaningful reform.' },
      { title: 'Analyzing the News', text: 'The report suggests that inflation is easing, though analysts remain cautious given the uncertainty in global supply chains.' },
      { title: 'Academic Presentation', text: 'This study examines the correlation between sleep patterns and cognitive performance across three different age groups.' },
      { title: 'Idioms in Conversation', text: 'I know it is a tough decision, but at the end of the day, you have to trust your instincts and go with your gut feeling.' },
      { title: 'Discussing Technology', text: 'Artificial intelligence is transforming industries at an unprecedented pace, raising both exciting opportunities and serious ethical concerns.' },
      { title: 'Cultural Differences', text: 'What might be considered polite in one culture could be seen as overly formal, or even rude, in another.' },
      { title: 'Persuasive Speech', text: 'If we fail to act now, the consequences will not only affect us, but future generations who had no say in this decision.' },
      { title: 'Job Performance Review', text: 'Overall, your performance this quarter exceeded expectations, particularly in how you managed cross-team communication under pressure.' },
      { title: 'Legal Terminology Basics', text: 'The contract stipulates that either party may terminate the agreement with thirty days written notice, without incurring a penalty.' },
      { title: 'Philosophy Discussion', text: 'Some philosophers argue that free will is an illusion shaped entirely by prior causes, while others defend genuine human agency.' },
      { title: 'Public Speaking Techniques', text: 'A strong opening captures attention immediately, while a clear structure ensures the audience can follow your argument to its conclusion.' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const tabsEl = document.querySelector('.level-tabs');
  const panelsContainer = document.querySelector('.level-panels');
  if (!tabsEl || !panelsContainer) return;

  const iconCheck = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 13 4 4L19 7"/></svg>';
  const iconPlay = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  const iconLock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

  // Abuur liis fidsan oo dhammaan 36-da cashar ah si aan u ogaano isku xigtooda saxda ah
  const allLessonsList = [];
  LISTENING_LEVELS.forEach(level => {
    level.lessons.forEach((lesson, idx) => {
      allLessonsList.push({
        lessonId: `${level.id}-${idx + 1}`,
        title: lesson.title,
        text: lesson.text,
        levelId: level.id
      });
    });
  });

  // Function-ka dhalaya interface-ka casharada
  function renderAllLessons() {
    // Ka hor intaanan dib u dhalin, kaydi tab-ka hadda furan (active) si uusan u dumin
    const activeTab = tabsEl.querySelector('.level-tab.active');
    const activeTabTarget = activeTab ? activeTab.dataset.target : LISTENING_LEVELS[0].id;

    panelsContainer.innerHTML = '';
    const progress = window.LinguaProgress.get();

    LISTENING_LEVELS.forEach((level, i) => {
      const panel = document.createElement('div');
      panel.className = 'level-panel' + (level.id === activeTabTarget ? ' active' : '');
      panel.id = level.id;

      const grid = document.createElement('div');
      grid.className = 'lesson-grid';

      level.lessons.forEach((lesson, idx) => {
        const lessonId = `${level.id}-${idx + 1}`;
        const isDone = !!progress.listening[lessonId];
        
        // Hel booska uu casharkani kaga jiro liiska guud ee 36-da cashar
        const globalIndex = allLessonsList.findIndex(l => l.lessonId === lessonId);
        let isUnlocked = false;

        if (globalIndex === 0) {
          isUnlocked = true; // Casharka 1-aad mar walba waa furan yahay
        } else {
          // Casharada kale waxay furmayaan oo kaliya haddii kii ka horreeyay la dhameeyay
          const prevLessonId = allLessonsList[globalIndex - 1].lessonId;
          if (progress.listening[prevLessonId]) {
            isUnlocked = true;
          }
        }

        const card = document.createElement('div');
        
        if (!isUnlocked) {
          // Haddii uu xiran yahay (Locked)
          card.className = 'card lesson-card is-locked';
          card.innerHTML = `
            <span class="lesson-num">Lesson ${idx + 1}</span>
            <h4>${lesson.title}</h4>
            <p class="lesson-sentence" style="filter: blur(4px); user-select: none;">"${lesson.text}"</p>
            <div class="lesson-footer">
              <span class="lesson-status locked" style="color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                ${iconLock} Locked
              </span>
              <button class="play-btn" disabled style="opacity: 0.5; cursor: not-allowed; display: flex; align-items: center; gap: 6px;">
                ${iconLock} Locked
              </button>
            </div>`;
        } else {
          // Haddii uu furan yahay (Unlocked / Completed)
          card.className = 'card lesson-card' + (isDone ? ' is-done' : '');
          card.innerHTML = `
            <span class="lesson-num">Lesson ${idx + 1}</span>
            <h4>${lesson.title}</h4>
            <p class="lesson-sentence">"${lesson.text}"</p>
            <div class="lesson-footer">
              <span class="lesson-status ${isDone ? 'done' : ''}">${isDone ? iconCheck + ' 100% complete' : 'Not started'}</span>
              <button class="play-btn" data-lesson-id="${lessonId}" data-text="${lesson.text.replace(/"/g, '&quot;')}">
                ${iconPlay} Listen
              </button>
            </div>`;
        }
        grid.appendChild(card);
      });

      panel.appendChild(grid);
      panelsContainer.appendChild(panel);
    });
  }

  // Abuur badhamada Tabs-ka (Kaliya hal jeer ayaa la dhalinayaa bilowgii)
  LISTENING_LEVELS.forEach((level, i) => {
    const tab = document.createElement('button');
    tab.className = 'level-tab' + (i === 0 ? ' active' : '');
    tab.textContent = level.name;
    tab.dataset.target = level.id;
    tabsEl.appendChild(tab);
  });

  // Daaran kowaad ee dhalista bogga
  renderAllLessons();

  // Tab switching click event
  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.level-tab');
    if (!tab) return;
    tabsEl.querySelectorAll('.level-tab').forEach((t) => t.classList.remove('active'));
    panelsContainer.querySelectorAll('.level-panel').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });

  /* ---------- Playback via Web Speech API ---------- */
  const synth = window.speechSynthesis;

  panelsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.play-btn');
    if (!btn || btn.hasAttribute('disabled')) return;

    if (!synth) {
      window.showToast?.('Browser-kaan ma taageerayo cod-ka (Speech API).');
      return;
    }

    synth.cancel();
    const utter = new SpeechSynthesisUtterance(btn.dataset.text);
    utter.lang = 'en-US';
    utter.rate = 0.95;

    document.querySelectorAll('.play-btn').forEach((b) => b.classList.remove('is-playing'));
    btn.classList.add('is-playing');

    // Hubi dhamaadka maqalka (100% complete)
    utter.onend = () => {
      btn.classList.remove('is-playing');
      const lessonId = btn.dataset.lessonId;
      
      // 1. Keydi progress-ka
      window.LinguaProgress.markListeningDone(lessonId);

      // 2. Dib u dhalal dhamaan casharada si uu kan xiga u furmo
      renderAllLessons();

      // 3. Muuji Toast-ka
      window.showToast?.('Waad dhageysatay 100%! +10 XP 🎧');
    };

    synth.speak(utter);
  });
});