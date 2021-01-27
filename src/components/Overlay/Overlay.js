import React from 'react'
import cls from './Overlay.module.scss'

const Overlay = ({ clear }) => <div className={cls.overlay} onClick={clear}></div>

export default Overlay