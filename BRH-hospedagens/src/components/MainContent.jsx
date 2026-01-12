import "./MainContent.css";

import Coment from "./Coment";
import { Button } from "./button";

const MainContent = () => {
  return (
    <div>
      <section id="principal" className="content">
        <div id="nome-empresa-container">
          <h1>BRH</h1>
          <p>
            <span>Brasil Hospedagens</span> a melhor forma de se hospedar no
            brasil
          </p>
        </div>
        <div id="agendar-container">
          <button id="agendar-btn">Agende já sua hospedagem</button>
          <div id="agendar-form" className="hide">
            <h2>Agende já sua hospendagem</h2>
            <form></form>
          </div>
        </div>
      </section>

      <section id="conheca-nos" className="content">
        <h2>Sobre nós</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
          assumenda, accusamus inventore enim saepe dicta magni. Porro qui
          voluptatum et ducimus quod illo consectetur aut. Nesciunt est officiis
          repudiandae.
        </p>
      </section>

      <section id="instalacoes" className="content">
        <h2>Nossas instalações</h2>
        <ol>
          <li>São paulo</li>
          <li>Rio de janeiro</li>
          <li>Brasília</li>
          <li>Bahia</li>
          <li>Rio garnde do sul</li>
        </ol>
      </section>

      <section id="avaliacoes" className="content">
        <h2>Comentarios</h2>
        <Coment />
        <Button id="coment-btn" text="Fazer comentario" />
      </section>

      <section id="contato" className="content">
        <h2>contate-nos</h2>
        <div id="contato-container">
          <ul>
            <li>numero</li>
            <li>insta</li>
            <li>youtube</li>
            <li>X</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
