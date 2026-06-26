(function () {
  const mount = document.querySelector("#site-navbar");

  if (!mount) {
    return;
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  const isHome = path === "index.html";
  const isArupadai = path === "arupadai-veedu.html";
  const isPrayer = path === "prayer.html" || path === "kanda-sashti-kavasam.html";

  const activeAttrs = 'class="active" aria-current="page"';
  const navClass = (active) => (active ? activeAttrs : "");

  mount.outerHTML = `
    <header class="site-header">
      <a class="brand" href="index.html#home" aria-label="Your Muruga home">
        <span class="brand-mark">
          <img src="assets/logo.png" alt="" />
        </span>
        <span>
          <strong>Your Muruga</strong>
          <small data-i18n="brandTag">எப்போதும் உன்னோடு!</small>
        </span>
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="header-actions" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="header-actions" id="header-actions">
        <nav class="nav-links" aria-label="Main navigation">
          <a href="index.html#home" ${navClass(isHome)} data-i18n="navHome">முகப்பு</a>
          <a href="arupadai-veedu.html" ${navClass(isArupadai)} data-i18n="navArupadai">ஆறுபடை வீடுகள்</a>
          <a href="prayer.html" ${navClass(isPrayer)} data-i18n="navPrayers">பிரார்த்தனை</a>
        </nav>

        <div class="social-links" aria-label="Social media links">
          <a href="#" aria-label="Facebook" title="Facebook"><span aria-hidden="true">f</span></a>
          <a href="#" aria-label="Instagram" title="Instagram"><span aria-hidden="true">◎</span></a>
          <a href="https://www.youtube.com/@yourmuruga" aria-label="YouTube" target="_blank" rel="noopener" title="YouTube"><span aria-hidden="true">▶</span></a>
        </div>

        <div class="language-picker">
          <button class="language-picker-toggle" type="button" aria-expanded="false" aria-controls="language-options" aria-label="Choose language" title="Choose language">
            <span aria-hidden="true">🌐</span>
          </button>
          <div class="language-options" id="language-options" role="group" aria-label="Language">
            <button class="lang-button" type="button" data-lang="en">EN</button>
            <button class="lang-button active" type="button" data-lang="ta">தமிழ்</button>
          </div>
        </div>
      </div>
    </header>
  `;
})();
