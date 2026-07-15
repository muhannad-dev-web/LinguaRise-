/* ============================================
   AUTH (DEMO) — LocalStorage-based signup/login
   NOTE: This is a client-side demo only. Passwords are
   stored in plain text in the browser and are NOT secure.
   Replace with real Firebase Authentication for production.
   ============================================ */

window.LinguaAuth = (function () {
  const USERS_KEY = 'linguarise-users';
  const SESSION_KEY = 'linguarise-session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function signup(name, email, password) {
    const users = getUsers();
    const key = email.trim().toLowerCase();
    if (users[key]) return { ok: false, error: 'Email-kan horeba waa la isticmaalay.' };

    users[key] = {
      name: name.trim(),
      email: key,
      password,
      avatar: null,
      level: 'A1',
      createdAt: new Date().toISOString()
    };
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, key);
    return { ok: true };
  }

  function login(email, password) {
    const users = getUsers();
    const key = email.trim().toLowerCase();
    const user = users[key];
    if (!user || user.password !== password) {
      return { ok: false, error: 'Email ama password khalad ah.' };
    }
    localStorage.setItem(SESSION_KEY, key);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
  }

  function currentUser() {
    const key = localStorage.getItem(SESSION_KEY);
    if (!key) return null;
    const users = getUsers();
    return users[key] || null;
  }

  function isLoggedIn() {
    return !!currentUser();
  }

  function updateUser(fields) {
    const key = localStorage.getItem(SESSION_KEY);
    if (!key) return null;
    const users = getUsers();
    if (!users[key]) return null;
    users[key] = { ...users[key], ...fields };
    saveUsers(users);
    return users[key];
  }

  return { signup, login, logout, currentUser, isLoggedIn, updateUser };
})();
