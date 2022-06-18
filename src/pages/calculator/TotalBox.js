import React from 'react'
import s from './Calculator.module.scss'

import CustomBtn from '../../components/customBtn/CustomBtn'


export default function TotalBox() {
  return (
    <div className={s.totalBoxWrap}>
      <div className={s.totalValues}>
        <div className={s.amount}>
          <div className={s.txt}>
            <p>Tip Amount</p>
            <small>/ person</small>
          </div>
          <div className={s.value}>
            <p>$0.0</p>
          </div>
        </div>
        <div className={s.amount}>
          <div className={s.txt}>
            <p>Total</p>
            <small>/ person</small>
          </div>
          <div className={s.value}>
            <p>$0.0</p>
          </div>
        </div>
      </div>
      <div className={s.btn}>
        <CustomBtn />
      </div>
    </div>
  )
}
