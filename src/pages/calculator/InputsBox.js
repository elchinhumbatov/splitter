import React from 'react'
import s from './Calculator.module.scss'

import CustomInput from '../../components/customInput/CustomInput'
import dollarIcon from '../../assets/images/icon-dollar.svg'
import CustomTitle from '../../components/customTitle/CustomTitle'
import personIcon from '../../assets/images/icon-person.svg'

let arr = [5, 10, 15, 25, 50];


export default function InputsBox() {
  return (
    <div className={s.inputsBoxWrap}>
      <div className={s.billBox}>
        <CustomTitle title={"Bill"} />
        <CustomInput src={dollarIcon} alt={'dollar icon'} addClass={false} place={'0'} />
      </div>
      <div className={s.tipsBox}>
        <CustomTitle title={"Select Tips %"} />
        <div className={s.tips}>
          {arr.map(i => {
            return (
              <div className={s.tip} key={i}>
                <p className={s.tipContent}>{i}%</p>
              </div>
            )
          })}
          <div className={s.tip}>
            <CustomInput addClass={false} place='custom' />
          </div>
        </div>
      </div>
      <div className={s.peopleBox}>
        <CustomTitle title={"Number of People"} error='some error' />
        <CustomInput src={personIcon} alt={'person icon'} addClass={true} place={'0'} />
      </div>
    </div>
  )
}
