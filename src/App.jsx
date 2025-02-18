import logo from '/logo.png'
import './App.css'

function App() {

    const handleClickCentro = () => {
        // Redirige al enlace de WhatsApp para la Sede Centro
        window.open('https://api.whatsapp.com/send/?phone=5491171076126&text&type=phone_number&app_absent=0', '_blank');
    }

    const handleClickJuramento = () => {
        // Redirige al enlace de WhatsApp para la Sede Juramento
        window.open('https://api.whatsapp.com/send/?phone=5491176237782&text&type=phone_number&app_absent=0', '_blank');
    }

    return (
        <>
            <div>
                <a href="https://puntoquiropractico.com/" target="_blank">
                    <img src={logo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <p className="read-the-docs">
                Contáctenos por Whatsapp para reservar tu turno o hacer consultas.
            </p>
            <div className="card">
                <button onClick={handleClickCentro} className="button">
                    Sede Centro
                </button>
                <button onClick={handleClickJuramento} className="button">
                    Sede Juramento
                </button>
            </div>
        </>
    )
}

export default App
