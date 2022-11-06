import React from "react";
import styles from "./stylesMainPage.module.css";
import { application_data } from "./mock";
import { Application } from "../../Componets/Application/Application";
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

//Soft IMG
import steam from '../../img/soft/steam.png'
import chrome from '../../img/soft/chrome.png'
import ds from '../../img/soft/ds.png'
import faceit from '../../img/soft/faceit.png'
import origin from '../../img/soft/origin.png'
import ts from '../../img/soft/ts.png'
import epic from '../../img/soft/epic.png'
import battle from '../../img/soft/battle.png'


export const MainPage = () => {
  return (
    <div className={styles["main-page-layout"]}>
      <div className={styles.header}>
        <div className={styles["header-content"]}>
          <div>logo</div>
          <div>выбрать тариф</div>
          <div>бемсплатный тариф</div>
        </div>
        <div>иван иванов</div>
      </div>
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
            <div>
              <img src={csgo} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={dota} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={warzone} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={fort} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={league} alt='CsGo' />
              <p className={styles.text_delete}>Убрать из избранного</p>
              <img src={warzone} alt='CsGo' />
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
            <p>История почещений</p>
            <hr className={styles.line}/>
            <div className={styles.day}>
              <p>Пятница</p>
              <p>30.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p>Четверг</p>
              <p>29.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p>Среда</p>
              <p>28.04.2021</p>
            </div>
            <hr/>
            <div className={styles.day}>
              <p>Вторник</p>
              <p>27.04.2021</p>
            </div>
          </div>

          <div>
            <p>Ваш баланс</p>
            <div>
              <p>Ваш баланс</p>
              <p>523 334  KZT</p>
            </div>
            <div>
              <p>Ваш кэшбек</p>
              <p>523 334  KZT</p>
            </div>
            <div>
              <p>Bonus</p>
              <p>523 334  KZT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
