import React, {useState, useEffect} from "react";
import s from "./CustomInput.module.scss";

export default function CustomInput({ resetTipVal, resetAllVal, src, alt, place, addErrorClass, max, cb }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let val = +e.target.value;
    if (max && val > max) { val = max }
    setValue(val)
    cb(val)
  }

  useEffect(() => {
    if (resetTipVal || resetAllVal) setValue('')
  }, [resetTipVal, resetAllVal]);


  return (
    <div className={s.inputWrap}>
      {src && <img src={src} alt={alt} />}
      <input
        type="number"
        inputMode="decimal"
        placeholder={place}
        value={value}
        min='0'
        max={max}
        onChange={handleChange}
        className={[s.input, addErrorClass && s.error].join(" ")}
        style={{ paddingLeft: src && "20px" }}
      />
    </div>
  );
}
