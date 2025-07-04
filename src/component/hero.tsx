const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Rishithraj</h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl">
        A passionate video editor & full-stack web developer crafting beautiful and functional experiences.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded transition"
      >
        View My Work
      </a>
    </section>
  )
}

export default Hero
