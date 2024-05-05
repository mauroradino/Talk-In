import "./Preguntas.css";

const Preguntas = () => {
  return (
    <div className="divPreguntas">
      <details className="detail1">
        <summary>¿Qué es Talk-In?</summary>
        <p className="texto">
          Talk-In es una aplicación web en la cual estudiantes de idioma de todo
          el mundo pueden practicar su escritura y a la vez conocer personas.
        </p>
      </details>
      <details className="detail2">
        <summary>¿Hay que descargar una app para usar Talk-In?</summary>
        <p className="texto">
          No, al ser una aplicación web no es necesario descargar nada para
          aprender con Talk-In
        </p>
      </details>
      <details className="detail3">
        <summary>¿Tengo que pagar algo para usar Talk-In?</summary>
        <p className="texto">No, Talk-In es totalmente grátis!</p>
      </details>
      <details className="detail4">
        <summary>¿A qué publico esta orientado Talk-In?</summary>
        <p className="texto">
          Talk-In está orientado a estudiantes de idioma de todo el mundo, que
          quieran prácticar escritura con natívos
        </p>
      </details>
    </div>
  );
};

export default Preguntas;
