import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Felipe Yamamoto Guerreiro</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Welcome to my portfolio, here you will find 
          <br /> some of my projects and a bit about me. 
          <br /> Feel free to get in touch with me.
          </p>
        </div>
        <Link activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-primary">
        Contact Me
      </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}