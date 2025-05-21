// components/Opiniones.jsx
import './Opiniones.css';
import { useState } from 'react';
import foto1 from './assets/opiniones/prueba.jpeg';

const Opiniones = [
    {
        nombre: "Juan Pérez",
        foto: foto1,
        estrellas: 5,
        comentario: "Excelente atención. Me ayudaron muchísimo con mi dolor de espalda."
    },
    {
        nombre: "María Gómez",
        foto: foto1,
        estrellas: 4,
        comentario: "Muy buena experiencia. El lugar impecable y la atención personalizada."
    },
    // Agregá 3 más...
];

export default function Opiniones() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % opiniones.length);
    const prev = () => setIndex((index - 1 + opiniones.length) % opiniones.length);

    return (
        <div className="opiniones-container">
            <p className="titulo-comentario">Lo que dicen nuestros pacientes</p>
            <div className="opinion-card">
                <img src={opiniones[index].foto} alt={opiniones[index].nombre} className="avatar" />
                <h3 class="espacio-comentario">{opiniones[index].nombre}</h3>
                <p class="espacio-comentario">{'⭐'.repeat(opiniones[index].estrellas)}</p>
                <p className="comentario">"{opiniones[index].comentario}"</p>
            </div>
            <div className="slider-buttons">
                <button onClick={prev}>⟨</button>
                <button onClick={next}>⟩</button>
            </div>
        </div>
    );
}
