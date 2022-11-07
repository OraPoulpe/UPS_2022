import React from 'react'
import styles from './stylesLogin.module.css'


export const Login = () => {

  // const showBtn = document.querySelector("span i");
  // showBtn.onclick = (()=>{
  // if(passField.type === "password"){
  //   passField.type = "text";
  // }else{
  //   passField.type = "password";
  // }
  // });

  const change_style_password=()=>{
    const password_input = document.getElementById('password_input');
    if (password_input.getAttribute('type') == 'password') {
      password_input.setAttribute('type', 'text');
    } else {
      password_input.setAttribute('type', 'password');
    }
    return false;
  }

  return (
    <div>
        <div>
          <p className={styles.text}>Форма входа пользователя киберспортивного клуба</p>
          <form className={styles.form}>
            <input className={styles.input} type = 'text' placeholder='Логин'/>
            <div className={styles.div_input_password}>
              <input className={styles.input_password} type = 'password'placeholder='Пароль' id='password_input'/>
              <button className={styles.btn_show_password} onClick={()=>change_style_password()} type="button"/>
            </div>
          </form>
        </div>
    </div>
  )
}
