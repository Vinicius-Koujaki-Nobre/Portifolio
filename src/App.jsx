import style from './App.module.css'
import { Menu } from './components/menu'

import { cards } from "./assets/mock/cards"

import { useState } from 'react'

function App() {
  const defaultPhoneNumber = "5541999999999"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const{name, email, message} = formData

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZAPZAP, "_blank")
  }

  return (
    <>
      <Menu option01='Sessão 01' option02='Sessão 02' option03='Mapa'/>
      <main>
        <section id='s1' className={style.s1}>
          {cards.map((item,index) => {
            return(
              <div key={index} className={style.card}>
                <h5>{item.text}</h5>
                <img src={item.img} alt={item.text} className={style.perfil} width={200} height={"auto"}/>
                <p>{item.p}</p>
              </div>
            )
          })}
        </section>
        <section id='s2' className={style.s2}>
          <h2>Contato via WhatsApp</h2>
          <br />
            <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
            <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
            <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols={30} rows={10} required></textarea><br /><br />
            <button onClick={handleZap}>Enviar mensagem</button>
        </section>
        <footer>
          <h3>Redes sociais</h3>
          {/* gmail, linkedin, github */}
        </footer>
      </main>
    </>
  )
}

export default App
