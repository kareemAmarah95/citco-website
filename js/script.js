const activeNavLinks = document.querySelectorAll(".nav-link.navbar-anchor");
const windowPathname = window.location.pathname;
activeNavLinks.forEach((activeNavLink) => {
  const navLinkPathname = new URL(activeNavLink.href).pathname;
  if (windowPathname === navLinkPathname) {
    activeNavLink.classList.add("active");
  }
});
