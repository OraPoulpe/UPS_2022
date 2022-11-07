import React from 'react'
import styles from "./stylesHeader.module.css";


//Img
import logo from "../../../img/logo.png"
import profile from "../../../img/MainPage/profile.png"


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
          <img className = {styles.img_logo} src={logo} alt='Cyberpoint' />
          <button className={styles.btn_choose}>Выбрать тариф</button>
          <img src={profile} alt='Profile' />
        </div>
      </div>
  )
}

export default Header