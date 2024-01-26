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
            Bem vindos ao meu portfólio, aqui vocês vão encontrar 
            <br /> alguns dos meus projetos e um pouco sobre mim.
            <br /> Fiquem a vontade para entrar em contato comigo.
          </p>
        </div>
        <Link activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-primary">
      Fale comigo
      </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}