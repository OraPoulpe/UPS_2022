import React from 'react'
import styles from "./Applications.styles.module.css"

export const Application = (props) => {

  return (
    <div className={styles.application}>
      <img className={styles.img} src={require(`../../img/soft/${props.children}.png`)}></img>
      <div className={styles.name_game}>{props.children}</div>
    </div>
  )
}
