import React from "react";
import styles from "./stylesMainPage.module.css";
import { application_data } from "./mock";
import { Application } from "../../Componets/Application/Application";
import Header from "./Header/Header";

import games from '../../img/nav_bar/games.png'
import wallet from '../../img/nav_bar/wallet.png'
import sale from '../../img/nav_bar/sale.png'
import bar from '../../img/nav_bar/bar.png'
import windows from '../../img/nav_bar/windows_logo.png'

//Games IMG
import csgo from '../../img/games/csgo.png'
import dota from '../../img/games/dota.png'
import fort from '../../img/games/fort.png'
import league from '../../img/games/league.png'
import warzone from '../../img/games/warzone.png' 

import computer from '../../img/computer.png'
import tarif from '../../img/tarif.png'
import exit from '../../img/exit.png'
import restart from '../../img/restart.png'





export const MainPage = () => {
  return (
    <div className={styles["main-page-layout"]}>
      <Header/>
      <div className={styles["main-page-content"]}>
        <div className={styles["left-sidebar"]}>
          <div className={styles["left-sidebar-left"]}>
            <div>
              <img src={games} alt='Games' />
              <img src={wallet} alt='Add' />
              <img src={sale} alt='Sale' />
              <img src={bar} alt='Bar' />
            </div>
            {/* <img src={windows} alt='Games' /> */}
          </div>
          <div className={styles["left-sidebar-right"]}>
            <p className={styles.text_fevorites}>Избранное</p>
            <div className={styles.favorites_list}>
              <img src={csgo} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={dota} alt='dota' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={warzone} alt='warzone' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={fort} alt='fort' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={league} alt='league' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={warzone} alt='warzone' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={warzone} alt='warzone' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={league} alt='league' />
              <p className={styles.text_delete}>Убрать из избранного</p>
            </div>
          </div>
        </div>
        <div className={styles["center-block"]}>
          <div>хлебные крошки</div>
          <div className={styles["main-page-applications"]}>
            {application_data.map((item) => {
              return <Application>{item}</Application>;
            })}
          </div>
        </div>
        <div className={styles["right-sidebar"]}>
          <div className={styles.history}>
            <p className={styles.text3}>История почещений</p>
            <hr className={styles.line1}/>
            <div className={styles.day}>
              <p className={styles.day_text1}>Пятница</p>
              <p className={styles.day_text2}>30.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p className={styles.day_text1}>Четверг</p>
              <p className={styles.day_text2}>29.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p className={styles.day_text1}>Среда</p>
              <p className={styles.day_text2}>28.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p className={styles.day_text1}>Вторник</p>
              <p className={styles.day_text2}>27.04.2021</p>
            </div>
          </div>

          <div className={styles.wallet}>
            <p className={styles.text3}>Ваш баланс</p>
            <div className={styles.balans}>
              <p className={styles.balans_text1}>Ваш баланс</p>
              <p className={styles.balans_text2}>523 334  KZT</p>
            </div>
            <div className={styles.balans}>
              <p className={styles.balans_text1}>Ваш кэшбек</p>
              <p className={styles.balans_text2}>523 334  KZT</p>
            </div>
            <div className={styles.balans}>
              <p className={styles.balans_text1}>Bonus</p>
              <p className={styles.balans_text2}>523 334  KZT</p>
            </div>
          </div>

          <div className={styles.div_tarif}>
            <img src={tarif} alt='tarif' />
          </div>

          <div className={styles.div_tarif}>
            <img src={computer} alt='computer' />
          </div>

          <div>
            <img src={exit} alt='exit' />
            <img src={restart} alt='restart' />
          </div>
        </div>
      </div>
    </div>
  );
};
