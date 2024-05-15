import React from 'react'
import {ToggleContainer} from "./ThemeToggle.styles"

export default function ThemeToggle({toggleDarkMode}) {
  return (
    <ToggleContainer>
      <input className="tgl tgl-ios" id="cb2" type="checkbox" onChange={toggleDarkMode}/>
      <label className="tgl-btn" htmlFor="cb2"></label>
    </ToggleContainer>
  )
}
