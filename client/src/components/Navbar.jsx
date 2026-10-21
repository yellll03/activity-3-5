function Navbar({ view, onChangeView }) {
  const tabClass = (name) =>
    `nav-tab ${
      view === name
        ? "nav-tab-active"
        : ""
    }`;

  return (
    <nav className="site-nav sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <button
          className="text-left"
          onClick={() => onChangeView("gallery")}
          aria-label="Go to gallery"
        >
          <p className="brand-mark font-display text-3xl font-semibold tracking-tight text-[#3b3552]">
            <span>Show<span className="text-[#d9849b]">Case</span></span>
          </p>
          <p className="ml-[1.35rem] text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8399]">
            beauty for your fairytale
          </p>
        </button>

        <div className="nav-switcher">
          <button className={tabClass("gallery")} onClick={() => onChangeView("gallery")}>
            Gallery
          </button>
          <button className={tabClass("manage")} onClick={() => onChangeView("manage")}>
            Manage
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
