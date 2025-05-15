export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full shadow z-50 border-b border-white/10 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-300">
          <h1 className="text-xl font-bold text-center md:text-left transition-all duration-300">MUSIC DATABASE</h1>
          <form action="/search.html" method="GET" className="w-full">
            <input
              type="text"
              name="q"
              placeholder="Search..."
              className="placeholder-gray-400 bg-white w-full px-6 py-3 rounded-full shadow-sm focus:outline-none text-lg transition-all duration-300"
            />
          </form>
        </div>
      </header>
    )
}