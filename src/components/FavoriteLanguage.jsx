// src/components/FavoriteLanguage.jsx

import { useState } from 'react';

function FavoriteLanguage({ temas }) {
  // Estado que guarda el tema seleccionado
  const [seleccionado, setSeleccionado] = useState(null);

  // Función que actualiza el tema seleccionado al hacer clic
  const manejarSeleccion = (tema) => {
    setSeleccionado(tema);
  };

  return (
    <section className="temas-container">
      <mark>Selecciona tu tecnología favorita</mark>
      <div className="botones">
        {temas.map((tema, index) => (
          <button
            key={index}
            onClick={() => manejarSeleccion(tema)}
            className={tema === seleccionado ? 'active' : ''}
          >
            {tema}
          </button>
        ))}
      </div>
    </section>
  );
}

export default FavoriteLanguage;
