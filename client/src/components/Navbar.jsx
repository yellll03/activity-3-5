function Navbar({ view, onChangeView }) {
  const tabClass = (name) =>
    `rounded-full px-5 py-2 text-sm font-medium transition ${
      view === name
        ? "bg-linear-to-r from-rose to-frost text-white shadow-md shadow-rose/30"
        : "text-muted hover:bg-white hover:text-ink"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="font-script text-4xl leading-none text-ink">
            Show<span className="text-rose">Case</span>
          </h1>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            your dream vanity, darling
          </p>
        </div>

        <div className="flex gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-line">
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
