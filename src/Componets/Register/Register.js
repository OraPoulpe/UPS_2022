import React from 'react'
import styles from './stylesRegister.module.css'


export const Register = () => {

  const change_style_password1=()=>{
    const password_input1 = document.getElementById('password_input1');
    if (password_input1.getAttribute('type') == 'password') {
      password_input1.setAttribute('type', 'text');
    } else {
      password_input1.setAttribute('type', 'password');
    } 
    return false;
  }

  const change_style_password2=()=>{
    const password_input2 = document.getElementById('password_input2');
    if (password_input2.getAttribute('type') == 'password') {
      password_input2.setAttribute('type', 'text');
    } else {
      password_input2.setAttribute('type', 'password');
    } 
    return false;
  }

  return (
    <div>
        <div>
          <p className={styles.text}>Форма регистрации нового пользователя киберспортивного клуба</p>
          <div className={styles.form}>
            <input className={styles.input} type = 'text' placeholder='Логин'/>
            <input className={styles.input} type = 'text' placeholder='ФИО'/>
            <div className={styles.div_input_password}>
              <input className={styles.input_password} type = 'password'placeholder='Пароль' id='password_input1'/>
              <button className={styles.btn_show_password} onClick={()=>change_style_password1()} type="button"/>
            </div>
            <div className={styles.div_input_password}>
              <input className={styles.input_password} type = 'password' placeholder='Подтверждение пароля' id='password_input2'/>
              <button className={styles.btn_show_password} onClick={()=>change_style_password2()} type="button"/>
            </div>
            <input className={styles.input} type = 'tel' placeholder='8 (777) 777 - 77 - 77'/>
            <input className={styles.input} type = 'email' placeholder='Email'/>
          </div>
        </div>
    </div>
  )
}
