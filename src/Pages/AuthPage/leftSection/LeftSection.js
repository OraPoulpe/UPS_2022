import React, { useState } from 'react'
import { Login } from '../../../Componets/Login/Login'
import { Register } from '../../../Componets/Register/Register'

//Styles
import styles from './stylesLeftSection.module.css'
import font from '../../../index.css'

//Img
import add from "../../../img/Add.png"
import AltShift from "../../../img/AltShift.png"
import russia from '../../../img/russia.png'
import usa from '../../../img/united-states.png'
import logo from '../../../img/logo.png'

//Левая секция страницы авторизации
const LeftSection = () => {

  const [formType, setFormType] = useState("login")

  const handleClickLogin=()=>{
    setFormType("login")
  }
  const handleClickRegister=()=>{
    setFormType("register")
  }

  return (
    <div>   
      <img className = {styles.img_logo} src={logo} alt='Cyberpoint' />
      {formType==="login" && <Login/>}
      {formType==="register" && <Register/>}
      <div className={styles.checkbox_div}>
          <input type = 'checkbox'/>
          <p className={styles.text}>Согласен(а) с правилами посещения комплекса клуба</p>
      </div>
      <div className={styles.checkbox_div}>
          <input type = 'checkbox'/>
          <p className={styles.text}>Согласен(а) с политикой обработки персональных данных</p>
      </div>
      <div className={styles.btn_div}>
          <button className={styles.btn_login} onClick={()=>handleClickLogin()}>Вход</button>
          <button className={styles.btn_register} onClick={()=>handleClickRegister()}>Регистрация</button>
      </div>
      <img className={styles.img_add} src={add} alt='Download App' />   
      <p className={styles.text}>Раскладка Клавиатуры</p>
      <div className={styles.chouse_language}>
          <div className={styles.div_russia}>
              <img className={styles.russian_flag} src={russia} alt='Russia' /> 
          </div>
          <div className={styles.div_usa}>
              <img className={styles.usa_flag} src={usa} alt='United-States' /> 
          </div>
      </div>
      <div className={styles.alt_shift}>
          <p className={styles.text}>
              *Для смены раскладки ввода <br/>
              языка нажмите комбинацию клавиш
          </p>
          <img className={styles.img_alt_shift} src={AltShift} alt='Alt+Shift' /> 
      </div>
  </div>
  )
}

export default LeftSection