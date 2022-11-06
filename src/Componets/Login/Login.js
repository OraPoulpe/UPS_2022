import React from 'react'
import styles from './stylesLogin.module.css'

export const Login = () => {
  return (
    <div>
        <div>
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
