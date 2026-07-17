/* ============================================
   APP SIDEBAR — mobile open/close with blurred backdrop
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.app-sidebar');
  
  // Waxaan hubinaynaa in sidebar-ku jiro ka hor inta aynaan wax kale samayn
  if (!sidebar) return; 

  let backdrop = document.querySelector('.backdrop-blur-layer');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop-blur-layer';
    document.body.appendChild(backdrop);
  }

  function openSidebar() {
    sidebar.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  // Isticmaalida Event Delegation si aan u helno badhanka xitaa haddii uu dambeeyo
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.sidebar-toggle-mobile');
    
    if (toggleBtn) {
      e.preventDefault();
      sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
    }
  });

  backdrop.addEventListener('click', closeSidebar);

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });
});