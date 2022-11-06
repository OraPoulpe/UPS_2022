import React from 'react'
import styles from './stylesLogin.module.css'
import logo from "../../img/logo.png"


export const Login = () => {
  return (
    <div>
        <div>
          <img className = {styles.img_logo} src={logo} alt='Cyberpoint' />
          <p className={styles.text}>Форма входа пользователя киберспортивного клуба</p>
          <form className={styles.form}>
            <div>
              <input className={styles.input} type = 'text' placeholder='Логин'/>
            </div>
            <div>
              <input className={styles.input} type = 'password'placeholder='Пароль'/>
            </div>
          </form>
        </div>
    </div>
  )
}
