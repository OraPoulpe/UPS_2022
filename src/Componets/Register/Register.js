import React from 'react'
import styles from './stylesRegister.module.css'
import logo from "../../img/logo.png"


export const Register = () => {
  return (
    <div>
        <div>
          <img className = {styles.img_logo} src={logo} alt='Cyberpoint' />
          <p className={styles.text}>Форма регистрации нового пользователя киберспортивного клуба</p>
          <form className={styles.form}>
            <input className={styles.input} type = 'text' placeholder='Логин'/>
            <input className={styles.input} type = 'text' placeholder='ФИО'/>
            <div>
              <input className={styles.input} type = 'password'placeholder='Пароль'/>
            </div>
            <input className={styles.input} type = 'password' placeholder='Подтверждение пароля'/>
            <input className={styles.input} type = 'tel' placeholder='8 (777) 777 - 77 - 77'/>
            <input className={styles.input} type = 'email' placeholder='Email'/>
          </form>
        </div>
    </div>
  )
}
