/* ============================================
   PROGRESS STORE — LocalStorage-backed user progress
   Shared by Dashboard, Listening, Speaking pages
   ============================================ */

window.LinguaProgress = (function () {
  const KEY = 'linguarise-progress';

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const data = JSON.parse(raw);
        data.sections = data.sections || { reading: {}, vocabulary: {}, grammar: {} };
        return data;
      }
    } catch (e) { /* ignore corrupt data */ }
    return { listening: {}, speaking: {}, sections: { reading: {}, vocabulary: {}, grammar: {} }, xp: 0, streak: 1, lastActive: null };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function bumpStreak(data) {
    const today = new Date().toDateString();
    if (data.lastActive !== today) {
      data.streak = (data.lastActive) ? data.streak + 1 : (data.streak || 1);
      data.lastActive = today;
    }
    return data;
  }

  return {
    get: load,

    markListeningDone(lessonId) {
      const data = bumpStreak(load());
      if (!data.listening[lessonId]) {
        data.listening[lessonId] = 100;
        data.xp += 10;
      }
      save(data);
      return data;
    },

    markSpeakingScore(exId, score) {
      const data = bumpStreak(load());
      const prev = data.speaking[exId] || 0;
      data.speaking[exId] = Math.max(prev, score);
      if (score > prev) data.xp += 8;
      save(data);
      return data;
    },

    /* ---- Generic quiz-gated sections: reading / vocabulary / grammar ---- */
    getSection(sectionKey) {
      return load().sections[sectionKey] || {};
    },

    submitQuiz(sectionKey, lessonId, scorePct, passThreshold = 70) {
      const data = bumpStreak(load());
      const passed = scorePct >= passThreshold;
      const prev = data.sections[sectionKey][lessonId];
      data.sections[sectionKey][lessonId] = {
        score: Math.max(prev?.score || 0, scorePct),
        passed: passed || !!prev?.passed
      };
      if (passed && !prev?.passed) data.xp += 12;
      save(data);
      return { passed, data: data.sections[sectionKey] };
    },

    sectionStats() {
      const data = load();
      const count = (key) => Object.values(data.sections[key] || {}).filter((l) => l.passed).length;
      return {
        reading: count('reading'),
        vocabulary: count('vocabulary'),
        grammar: count('grammar')
      };
    },

    stats(totalListening, totalSpeaking) {
      const data = load();
      const listeningDone = Object.keys(data.listening).length;
      const speakingScores = Object.values(data.speaking);
      const speakingAvg = speakingScores.length
        ? Math.round(speakingScores.reduce((a, b) => a + b, 0) / speakingScores.length)
        : 0;
      return {
        xp: data.xp,
        streak: data.streak || 1,
        listeningDone,
        listeningTotal: totalListening,
        listeningPct: totalListening ? Math.round((listeningDone / totalListening) * 100) : 0,
        speakingAvg,
        speakingDone: speakingScores.length,
        speakingTotal: totalSpeaking
      };
    }
  };
})();
