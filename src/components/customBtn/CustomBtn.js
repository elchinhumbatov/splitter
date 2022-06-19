import React, { useState, useContext, useEffect } from 'react'
import { InputValuesContext } from '../../context/inputValuesContext'
import s from './CustomBtn.module.scss'


export default function CustomBtn() {
  const [disabled, setDisabled] = useState(true)
  const {billPrice, tipPercent, numberOfPeople, setBillPrice, setTipPercent, setNumberOfPeople, setResetValues} = useContext(InputValuesContext);
  
  const handleReset = () => {
    setBillPrice('')
    setTipPercent('')
    setNumberOfPeople('')
    setResetValues(true);
    setDisabled(true)
  }

  useEffect(() => {
    if(billPrice || tipPercent || numberOfPeople) setDisabled(false);
  }, [billPrice, tipPercent, numberOfPeople])

  return (
    <button className={s.btn} onClick={handleReset} disabled={disabled}>Reset</button>
  )
}
