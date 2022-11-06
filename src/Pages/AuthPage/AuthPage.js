import React, { useState } from 'react'
import { Login } from '../../Componets/Login/Login'
import { Register } from '../../Componets/Register/Register'
import styles from "./stylesAuthPage.module.css"
import font from '../../index.css'
import add from "../../img/Add.png"
import AltShift from "../../img/AltShift.png"
import russia from '../../img/russia.png'
import usa from '../../img/united-states.png'

export const AuthPage = () => {

    const [formType, setFormType] = useState("login")
    // const [formLogin, setFormLogin] = useState({
    //     login:"",
    //     password:""
    // })

    // const [formRegister, setFormRegister] = useState({
    //     login:"",
    //     password:"",
    //     confirmPassword:"",
    //     fio:"",
    //     phone:"",
    //     email:"",
    // })

    const handleClickLogin=()=>{
        setFormType("login")
    }
    const handleClickRegister=()=>{
        setFormType("register")
    }

    return (
        <div className={styles.auth_layout}>
             <section >   
                {formType==="login" && <Login/>}
                {formType==="register" && <Register/>}
                <div className={styles.checkbox_from}>
                    <input type = 'checkbox'/>
                    <p className={styles.text}>Согласен(а) с правилами посещения комплекса клуба</p>
                </div>
                <div className={styles.checkbox_from}>
                    <input type = 'checkbox'/>
                    <p className={styles.text}>Согласен(а) с политикой обработки персональных данных</p>
                </div>
                <div className={styles.btn_form}>
                    <button className={styles.btn_login  + " "+ styles['font-special']} onClick={()=>handleClickLogin()}>Вход</button>
                    <button className={styles.btn_register + " "+ styles['font-special']} onClick={()=>handleClickRegister()}>Регистрация</button>
                </div>
                <img className={styles.img_add} src={add} alt='Download App' />   
                <p className={styles.text}>Раскладка Клавиатуры</p>
                <div className={styles.chouse_language}>
                    <div className={styles.russia}>
                        <img className={styles.russian_flag} src={russia} alt='Russia' /> 
                    </div>
                    <div className={styles.usa}>
                        <img className={styles.usa_flag} src={usa} alt='United-States' /> 
                    </div>
                </div>
                <div className={styles.alt_shift}>
                    <p className={styles.text}>
                        *Для смены раскладки ввода <br/>
                        языка нажмите комбинацию клавиш
                    </p>
                    <img src={AltShift} alt='Alt+Shift' /> 
                </div>
            </section>
            <section>
                <p className={styles.text_88}>88</p>
            </section>
        </div>
    )
}
