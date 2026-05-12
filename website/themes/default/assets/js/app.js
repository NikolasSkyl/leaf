(function () {
  var navBtn = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', String(open));
    });
  }

  var sidebarBtn = document.getElementById('sidebar-toggle');
  var sidebar = document.getElementById('docs-sidebar');
  var overlay = document.getElementById('sidebar-overlay');

  function closeSidebar() {
    if (!sidebar || !overlay || !sidebarBtn) return;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    sidebarBtn.setAttribute('aria-expanded', 'false');
  }

  if (sidebarBtn && sidebar && overlay) {
    sidebarBtn.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      overlay.classList.toggle('open', open);
      sidebarBtn.setAttribute('aria-expanded', String(open));
    });

    overlay.addEventListener('click', closeSidebar);
    sidebar.addEventListener('click', function (event) {
      if (event.target && event.target.tagName === 'A') closeSidebar();
    });
  }
}());
