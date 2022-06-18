import React from 'react'
import s from './CustomInput.module.scss'


export default function CustomInput({src, alt, place, addClass}) {
  return (
    <div className={s.inputWrap}>
      {src && <img src={src} alt={alt} />}
      <input type='text' inputMode='decimal' placeholder={place} className={[s.input, addClass && s.error].join(' ')} style={{paddingLeft: src && '20px'}} />
    </div>
  )
}