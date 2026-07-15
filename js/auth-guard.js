/* ============================================
   AUTH GUARD — redirect to login if not authenticated
   Include on every protected page (Dashboard, Profile,
   Listening, Speaking, Reading, Vocabulary, Grammar)
   ============================================ */

(function () {
  if (!window.LinguaAuth || !window.LinguaAuth.isLoggedIn()) {
    const here = window.location.pathname;
    sessionStorage.setItem('linguarise-redirect', here);
    window.location.href = 'login.html';
  }
})();
