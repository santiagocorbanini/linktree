// components/Opiniones.jsx
import './Opiniones.css';
import { useState } from 'react';
import foto1 from './../comentarios/1.png';
import foto2 from './../comentarios/2.png';
import foto3 from './../comentarios/3.png';
import foto4 from './../comentarios/4.png';
import foto5 from './../comentarios/5.png';
import foto5 from './../comentarios/6.png';

const opiniones = [
    {
        nombre: "Mariano Castro",
        foto: foto1,
        estrellas: 5,
        comentario: "Excelente lugar con excelentes profesionales. Siempre bien predispuestos en caso de algún inconveniente. En mi caso tuve que reprogramar varias fechas de mis sesiones y nunca tuvieron problemas! 100% recomendable!"
    },
    {
        nombre: "Mailen Haddad",
        foto: foto2,
        estrellas: 5,
        comentario: "La atencion de todo el equipo es excelente!! Me atiendo con Facu y es super atento, profesional y se nota que ama lo que hace! Estoy hace un mes y algo haciendome este tratamiento y se me fueron los mareos, vertigo, dolor de lumbar y cervical. Feliz de haber encontrado este lugar! Recomendado!!!"
    },
    {
        nombre: "Micaela Mondino",
        foto: foto3,
        estrellas: 5,
        comentario: "Los chicos de Punto Quiropráctico se destacan por su amabilidad y ser excelentes profesionales. Puntualmente César, quien es mi quiropráctico hace años y me ayudó muchísimo con mis problemas de espalda: primero a identificarlos mediante estudios y luego con un plan de acción específico para abordar los mismos. Los recomiendo siempre!"
    },
    {
        nombre: "James n",
        foto: foto4,
        estrellas: 5,
        comentario: "He tenido quiropráctica en 20 países y la técnica de César realmente me impresionó. Los ajustes de su cuello fueron increíblemente precisos, uno de los mejores que he tenido. Tenía un dolor lumbar grave debido a una lesión en Argentina y sus ajustes precisos y precisos me brindaron un alivio casi inmediato. Gracias a su trabajo ya no necesito tomar analgésicos. ¡Lo recomiendo mucho!"
    },
    {
        nombre: "Azulejito",
        foto: foto5,
        estrellas: 5,
        comentario: "Me atiendo desde hace 3 meses con César. Acudo a cada sesión con total confianza y siento realmente que mi tratamiento es el adecuado. Hoy llevé a mi hermana a su primer sesión y la amorosidad y paciencia con que la atendió me conmovieron mucho y admiré más aún su profesionalismo. Tan agradecida, César!!!"
    },
    {
        nombre: "Scott Winslow",
        foto: foto6,
        estrellas: 5,
        comentario: `Soy de los Estados Unidos y he sido presidente de un hospital por más de 50 años. Tengo una amplia experiencia con todos los niveles de médicos y fui el primero en permitir quiroprácticos en el personal médico de un hospital en el estado de Illinois.

        He conocido a muchos quiroprácticos. He usado servicios quiroprácticos muchas veces en mi vida.
        
        César Solis es un excelente practicante en mi opinión. Está bien entrenado y es muy fácil de hablar. Su eficiente evaluación y tratamiento me dio alivio instantáneo.
        
        Cosas que me contó sobre la estructura de mi cuerpo me han contado antes por quiroprácticos que conocía y confiaba en el EUU. Esto demuestra su excelente conocimiento y entrenamiento.
        
        Recomiendo a Cesar Solis altamente.`
    }
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
