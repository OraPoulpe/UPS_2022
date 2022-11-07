import React from 'react'

//Styles
import styles from './stylesRightSection.module.css'
import font from '../../../index.css'

//Img
import img_88 from '../../../img/88.png'

//Правая секция страницы авторизации
const RightSection = () => {
  return (
    <section className={styles.section_right}>
        <img className={styles.img_88} src={img_88} alt='88' /> 
        <div className={styles.div_under}>
            <div className={styles.div_zone}>
                <p className={styles.text_zone}>вы находитесь в зоне</p>
            </div>
            <div className={styles.div_standart}>
                <p className={styles.text_standart}>standart</p>
            </div>
        </div>
    </section>
  )
}

export default RightSection