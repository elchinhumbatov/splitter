import React from "react";
import s from "./Calculator.module.scss";
import logo from "../../assets/images/logo.svg";

import InputsBox from "./InputsBox";
import TotalBox from "./TotalBox";

export default function CalculatorContainer() {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.calculatorApp}>
          <InputsBox />
          <TotalBox />
        </div>
      </div>
    </div>
  );
}
