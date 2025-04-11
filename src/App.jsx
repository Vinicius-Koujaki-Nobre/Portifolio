import style from './App.module.css'
import { Menu } from './components/menu'

import { cards } from "./assets/mock/cards"
import { profile } from './assets/mock/profile'


function App() {
  
  return (
    <>
      <Menu option01='Sessão 01' option02='Sessão 02' option03='Mande uma mensagem'/>
      <main>
        <section id='s1' className={style.s1}>
        {profile.map((item,index = 0) => {
            return(
              <div key={index} className={style.card}>
                <h5>{item.text}</h5><br />
                <img src={item.img} alt={item.text} className={style.perfil} width={"auto"} height={150}/>
                <br /><br />
                <p>{item.p}</p>
              </div>
            )
          })}
        </section>
        <section id='s2' className={style.s2}>
          <h3 className={style.h3}>Alguns projetos pessoais</h3>
        {cards.map((item,index = 0) => {
            return(
              <div key={index} className={style.card}>
                <h5>{item.text}</h5><br />
                <img src={item.img} alt={item.text} className={style.perfil} width={"auto"} height={150}/>
                <br /><br />
                <p>{item.p}</p>
              </div>
            )
          })}
          <h3 className={style.h3}>Veja outros projetos meus em:</h3>
          <a href="https://github.com/Vinicius-Koujaki-Nobre" target="_blank">a</a>
        </section>
        <footer className={style.footer}>
          <a target='_blank' href='https://mail.google.com/mail/u/0/?fs=1&to=vina.santos06@gmail.com&tf=cm'><img width="50px" height="auto" src="./assets/images/gmail.png" alt="Gmail" /></a>
        </footer>
      </main>
    </>
  )
}

export default App