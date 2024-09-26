
import hero from "../src/images/hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={hero} alt="Hero section" className="hero-img" />{" "}
      
        <div className="name">
          <h1 className="typewriter">Hi, I am Shanideval</h1>
          <h1 className="fade-in">Hi, I am a Full-stack Developer</h1>
        </div>
        <p>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more <br /> interactive
          with web animations.
        </p>
        
      </div>

      
    </>
  );
};

export default Hero;
