import React from 'react'
import styles from "./stylesHeader.module.css";


//Img
import logo from "../../../img/logo.png"
import free from "../../../img/MainPage/free.png"
import avatar from "../../../img/MainPage/avatar.png"


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
          <img className = {styles.img_logo} src={logo} alt='Cyberpoint' />
          <button className={styles.btn_choose}>Выбрать тариф</button>
          <div className={styles.free_div}>
            <img className={styles.free_img} src={free} alt='Free' />   
            <div className={styles.profile_div}>
              <img className={styles.avatar_img} src={avatar} alt='Avatar' />   
              <div className={styles.nick_div}>
                <p className={styles.nick_text}>Ivan BALABEAR </p>
                <div className={styles.info_div}>
                  <p className={styles.info_text}>20 место</p>
                  <p className={styles.info_text}>STANDART зона</p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
  )
}

export default Header