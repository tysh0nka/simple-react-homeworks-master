import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'

type HeaderPropsType = {}

function Header(props: HeaderPropsType) {

    return (
        <div className='selectBlock'>
            <SelectTitle title={'Меню'}/>
        </div>
    )
}


type SelectTitleType = {
    title: string
}

function SelectTitle(props: SelectTitleType) {

    const [collapsed, setCollapsed] = useState(true)

    return (<div className={'navigation'}
                 tabIndex={0}>
            <div className={'navHeader'}>
                <h3 style={{cursor: "pointer"}}
                    onClick={() => setCollapsed(!collapsed)}
                >{props.title}</h3>
                {!collapsed && <SelectBody/>}
            </div>
        </div>
    )
}

function SelectBody() {
    return (
        <div className={'navLinks'}>
            <span><NavLink to={'/pre-junior'}>pre-junior</NavLink></span>
            <span><NavLink to={'/junior'}>junior</NavLink></span>
            <span><NavLink to={'/junior-plus'}>junior-plus</NavLink></span>
        </div>)
}



export default Header
