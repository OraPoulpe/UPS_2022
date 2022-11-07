import React, { useState } from "react";
import styles from "./stylesAuthPage.module.css";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

export const AuthPage = () => {
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

  return (
    <div className={styles.auth_page}>
      <LeftSection />
      <RightSection />
    </div>
  );
};
