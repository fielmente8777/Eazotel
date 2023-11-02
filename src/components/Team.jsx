import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Team() {
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/createwebsite') {
        window.scroll(0, 0);
        }
    }, [pathname])
    return (
        <>
            <div className="team_main">
                <div className="container">
                    <h1>Our team</h1>
                </div>
            </div>
        </>
    )
}

export default Team
