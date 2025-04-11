import style from './Contact.module.css'

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { Menu } from './components/menu';

import { useState } from 'react'

function Contact() {

    const position = [-25.3987474, -49.336108]

    const defaultPhoneNumber = "5541987806060"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleZap = () => {
        const { name, email, message } = formData

        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`

        window.open(urlZAPZAP, "_blank")
    }

    return (
        <>

            <main className={style.main}>
                <Menu option01='Voltar a página principal' option02='Mapa' />
                <section className={style.contato}>
                    <h2>Contato via WhatsApp</h2>
                    <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
                    <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
                    <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols={24} rows={10} required></textarea>
                    <button className={style.button} onClick={handleZap}>Enviar mensagem</button>
                </section>
                <h2 className={style.h2}>Mapa</h2>
                <br />
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "auto", minHeight: "900px" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Local onde eu moro. <br /> Pode ser usado como ponto inicial/final de sua pesquisa de distância.
                        </Popup>
                    </Marker>
                </MapContainer>
            </main>

        </>
    )
}

export default Contact