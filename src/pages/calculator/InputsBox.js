import React, { useState, useEffect, useContext } from "react";
import s from "./Calculator.module.scss";

import { InputValuesContext } from "../../context/inputValuesContext";
import CustomInput from "../../components/customInput/CustomInput";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import CustomTitle from "../../components/customTitle/CustomTitle";
import personIcon from "../../assets/images/icon-person.svg";

let arr = [5,10,15,25,50]

export default function InputsBox() {
  const [selectedTipBox, setSelectedTipBox] = useState(null);
  const [resetTipVal, setResetTipVal] = useState(false);
  const [errorTxt, setErrorTxt] = useState('');
  const {resetValues, setBillPrice, setTipPercent, setNumberOfPeople, setResetValues} = useContext(InputValuesContext);

  const handleSetBillPrice = (val) => {
    setBillPrice(val)
    setResetValues(false)
  }

  const handleTipPercentBox = (val, idx) => {
    setTipPercent(val)
    setSelectedTipBox(idx)
    setResetTipVal(true)
    setResetValues(false)
  };

  const handleTipPercentCustom = (val) => {
    setTipPercent(val)
    setSelectedTipBox(null)
    setResetTipVal(false)
    setResetValues(false)
  };

  const handlesetNumberOfPeople = (val) => {
    if (val === 0) setErrorTxt(`Can't be zero`)
    else setErrorTxt('')
    setNumberOfPeople(val);
    setResetValues(false)
  }

  useEffect(() => {
    if(resetValues)  { setSelectedTipBox(null); setErrorTxt(''); }
  }, [resetValues])

  return (
    <div className={s.inputsBoxWrap}>
      <div className={s.billBox}>
        <CustomTitle title="Bill" />
        <CustomInput
          src={dollarIcon}
          alt="dollar icon"
          place="0"
          resetAllVal={resetValues}
          cb={handleSetBillPrice}
        />
      </div>
      <div className={s.tipsBox}>
        <CustomTitle title="Select Tips %" />
        <div className={s.tips}>
          {arr.map((i, idx) => {
            return (
              <div className={s.tip} key={i}>
                <p className={[s.tipContent, selectedTipBox === idx && s.activeTip].join(' ')} onClick={() => handleTipPercentBox(i, idx)}>
                  {i}%
                </p>
              </div>
            );
          })}
          <div className={s.tip}>
            <CustomInput
              place="custom"
              max='100'
              resetTipVal={resetTipVal}
              resetAllVal={resetValues}
              cb={handleTipPercentCustom}
            />
          </div>
        </div>
      </div>
      <div className={s.peopleBox}>
        <CustomTitle title="Number of People" error={errorTxt} />
        <CustomInput
          src={personIcon}
          alt="person icon"
          addErrorClass={errorTxt}
          place="0"
          resetAllVal={resetValues}
          cb={handlesetNumberOfPeople}
        />
      </div>
    </div>
  );
}
