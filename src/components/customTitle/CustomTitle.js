import React from 'react'
import s from './CustomTitle.module.scss'

export default function CustomTitle({title, error}) {
  return (
    <div className={s.titleBox}>
      <h3 className={s.title}>{title}</h3>
      <h3 className={s.error}>{error}</h3>
    </div>
  )
}
