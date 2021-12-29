import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Junior from "./pages/Junior";
import PreJunior from "./pages/PreJunior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function RoutesPage() {
    return (
        <div>
            <Routes>
                <Route path={'/*'} element={<Error404/>} />
                <Route path={'/'} element={<PreJunior />} />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
            </Routes>
        </div>
    )
}

export default RoutesPage
