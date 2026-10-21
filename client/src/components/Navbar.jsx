function Navbar({ view, onChangeView }) {
  const tabClass = (name) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition ${
      view === name
        ? "bg-[#2f5d50] text-white shadow-sm"
        : "text-[#66736d] hover:bg-[#ebe7de] hover:text-[#26312d]"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-[#e6e0d5] bg-[#f7f4ee]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <button
          className="text-left"
          onClick={() => onChangeView("gallery")}
          aria-label="Go to gallery"
        >
          <p className="font-display text-2xl font-bold tracking-tight text-[#26312d]">
            Show<span className="text-[#c66b4b]">Case</span>
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#89938d]">
            a small product collection
          </p>
        </button>

        <div className="flex gap-1 rounded-xl border border-[#e6e0d5] bg-[#eeeae1] p-1">
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
