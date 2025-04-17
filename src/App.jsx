import logo from '/logo.png';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';
import './App.css';
import { useRef, useState } from 'react';

function App() {

    const handleClickCentro = () => {
        // Redirige al enlace de WhatsApp para la Sede Centro
        window.open('https://api.whatsapp.com/send/?phone=5491171076126&text&type=phone_number&app_absent=0', '_blank');
    }

    const handleClickJuramento = () => {
        // Redirige al enlace de WhatsApp para la Sede Juramento
        window.open('https://api.whatsapp.com/send/?phone=5491176237782&text&type=phone_number&app_absent=0', '_blank');
    }

    const galleryRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [foto1, foto2, foto3, foto4];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div>
                <a href="https://puntoquiropractico.com/" target="_blank">
                    <img src={logo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <p className="read-the-docs">
                Comunícate con nosotros por WhatsApp para reservar tu turno o realizar consultas.
            </p>
            <div className="card">
                <button onClick={handleClickCentro} className="button">
                    Sede Centro
                </button>
                <button onClick={handleClickJuramento} className="button">
                    Sede Juramento
                </button>
            </div>
            <p className="read-the-docs">
                Para saber más de Punto Quiropráctico
            </p>
            <div className="card">
                <button onClick={handleClickCentro} className="button">
                    Visita nuestro web
                </button>
            </div>
            <p className="read-the-docs">
                Conocé nuestro espacio
            </p>
            <div className="slider-container">
                <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>

                <div className="slider">
                    <div
                        className="slider-inner"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img
                                    src={image}
                                    alt={`Espacio ${index + 1}`}
                                    className="slide-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
            </div>
            <div className="gallery-container">
                <div className="image-gallery" ref={galleryRef}>
                    <img src={foto1} alt="Espacio 1" className="gallery-image" />
                    <img src={foto2} alt="Espacio 2" className="gallery-image" />
                    <img src={foto3} alt="Espacio 3" className="gallery-image" />
                    <img src={foto4} alt="Espacio 4" className="gallery-image" />
                </div>
            </div>
            <p className="read-the-docs">
                Estamos ubicados en:
            </p>
            <p className="subtitle">
                Sede Centro:
            </p>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.993708372906!2d-58.3767311!3d-34.5963059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb88ff059401%3A0x7faa15544637b9c0!2sPunto%20Quiropractico%20Centro!5e0!3m2!1ses-419!2sar!4v1713381234567!5m2!1ses-419!2sar"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Punto Quiropráctico Centro"
                ></iframe>
            </div>
            <p className="subtitle">
                Sede Juramento:
            </p>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.722037668283!2d-58.45978792401747!3d-34.58611937296145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x109a5717e36433d0!2sPunto%20Quiropractico%20Juramento!5e0!3m2!1ses!2sar!4v1713381234567!5m2!1ses!2sar"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Punto Quiropráctico Juramento"
                ></iframe>
            </div>
        </>
    )
}

export default App
