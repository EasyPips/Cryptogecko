import user from "../assets/image-avatar.png";

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 px-4 text-center">
      <h3 className="text-3xl font-bold text-emerald-400 mb-8">About Me</h3>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <img
          src={user}
          alt="emmmanuel"
          className="rounded-full w-48 h-48 object-cover"
        />
        <div className="text-left">
          <p className="mb-4">
          I’m a highly organized and solutions-driven individual with a strong
            desire to explore new talents and seize opportunities. I take pride
            in delivering quality service to the best of my ability and draw
            inspiration from creativity and curiosity. Rather than just
            generating ideas, I’m driven by a deep need to bring them to life.
            My passion for coding and my vision for personal growth fuel my
            journey. I'm committed to developing expertise across various
            fields, and I believe my thirst for knowledge and determination to
            act on what I learn will quickly shape me into the best developer I
            can be.
          </p>
          <button className="bg-emerald-400 text-white px-4 py-2 rounded font-semibold">
  View Resume
</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
