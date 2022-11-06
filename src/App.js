import React from "react";
import {Routes,Route,Navigate} from "react-router-dom"
import { AuthPage } from "./Pages/AuthPage/AuthPage";
import { MainPage } from "./Pages/MainPage/MainPage";


export function App(){
    return(
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

        </Routes>
    );
}


