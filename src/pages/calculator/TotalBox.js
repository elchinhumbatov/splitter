import React, { useContext, useMemo} from 'react'
import s from './Calculator.module.scss'

import { InputValuesContext } from '../../context/inputValuesContext'
import CustomBtn from '../../components/customBtn/CustomBtn'


export default function TotalBox() {
  const {billPrice, tipPercent, numberOfPeople} = useContext(InputValuesContext);

  const handleCalc = (billPrice, tipPercent, numberOfPeople) => {
    if (!billPrice || !numberOfPeople) return null

    let perPersonBill = billPrice / numberOfPeople;
    let perPersonTip = tipPercent === 0 ? 0 : perPersonBill * tipPercent / 100;
    let total = perPersonBill + perPersonTip;
    
    return { total: total.toFixed(2), perPersonTip: perPersonTip.toFixed(2) }
  }

  let calc = useMemo(() => handleCalc(billPrice, tipPercent, numberOfPeople), [billPrice, tipPercent, numberOfPeople]);

  return (
    <div className={s.totalBoxWrap}>
      <div className={s.totalValues}>
        <div className={s.amount}>
          <div className={s.txt}>
            <p>Tip Amount</p>
            <small>/ person</small>
          </div>
          <div className={s.value}>
            <p>${calc ? calc.perPersonTip : '0.00'}</p>
          </div>
        </div>
        <div className={s.amount}>
          <div className={s.txt}>
            <p>Total</p>
            <small>/ person</small>
          </div>
          <div className={s.value}>
            <p>${calc ? calc.total : '0.00'}</p>
          </div>
        </div>
      </div>
      <div className={s.btn}>
        <CustomBtn />
      </div>
    </div>
  )
}
