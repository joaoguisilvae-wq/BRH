const Coment = ({ title, coment, rate }) => {
  return (
    <div id="comentario-container">
      <h3>{title}</h3>
      <p>{coment}</p>
      <p>Nota: {rate}</p>
    </div>
  );
};

export default Coment;
