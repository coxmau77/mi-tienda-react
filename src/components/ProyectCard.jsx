// src/components/ProjectCard.jsx

function ProjectCard({ titulo, descripcion, botonTexto }) {
    // Función que se ejecuta al hacer clic en el botón
    const handleClick = () => {
      console.log(`Explorando: ${titulo}`);
    };
  
    return (
      <article className="project-card">
        <header>
          <h2>{titulo}</h2>
        </header>
  
        <section>
          <p>{descripcion}</p>
        </section>
  
        <footer>
          <button type="button" onClick={handleClick}>
            {botonTexto}
          </button>
        </footer>
      </article>
    );
  }
  
  export default ProjectCard;
  