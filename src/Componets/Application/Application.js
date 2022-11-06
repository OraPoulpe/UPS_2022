import React from 'react'
import styles from "./Applications.styles.module.css"

export const Application = (props) => {


  // const check =

  return (
    <div className={styles.application}>
      
      <div>{props.children}</div>
    </div>
  )
}
