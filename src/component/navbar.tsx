const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-400">Rishithraj</h1>
      <ul className="hidden md:flex gap-6 text-sm uppercase">
        <li><a href="#hero" className="hover:text-indigo-400">Home</a></li>
        <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
