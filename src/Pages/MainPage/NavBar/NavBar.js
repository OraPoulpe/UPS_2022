import React from 'react'
import styles from "./stylesNavBar.module.css";

import games from '../../../img/nav_bar/games.png'
import wallet from '../../../img/nav_bar/wallet.png'
import gamepad from '../../../img/nav_bar/gamepad.png'
import bar from '../../../img/nav_bar/bar.png'
// import windows from '../../../img/nav_bar/windows_logo.png'

const NavBar = () => {
  return (
    <nav className={styles.nav_bar}>
        <button className={styles.nav_bar_img_red}>
            <img src={games} alt='Games' />
        </button>
        <div className={styles.triangular_red}/>
        <p className={styles.item_text_red}>ИГРЫ</p>
        <button className={styles.nav_bar_img}>
            <img src={wallet} alt='Wallet' />
        </button>
        <div className={styles.triangular}/>
        <p className={styles.item_text}>Пополнить</p>
        <button className={styles.nav_bar_img}>
            <img src={gamepad} alt='Gamepad' />
        </button>
        <div className={styles.triangular}/>
        <p className={styles.item_text}>Клубные игры</p>
        <button className={styles.nav_bar_img}>
            <img src={bar} alt='Bar' />
        </button>
        <div className={styles.triangular}/>
        <p className={styles.item_text}>БАР</p>
    </nav>
  )
}

export default NavBar