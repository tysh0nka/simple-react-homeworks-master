import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const color = () => {
        if (props.affair.priority === "high") return s.high
        else if (props.affair.priority === 'middle') return s.middle
        else return s.low
    }

    return (
        <div className={s.affair}>
            <span className={s.text1}> {props.affair.name} </span>
            <span className={`${s.text2} + ${color()}`}>{props.affair.priority}</span>

            <button onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
