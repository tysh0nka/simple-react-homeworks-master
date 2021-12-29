import React from 'react'
import Header from './Header'
import RoutesPage from './RoutesPage'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <RoutesPage/>
            </HashRouter>
        </div>
    )
}

export default HW5