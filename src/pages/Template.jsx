import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TemplateHeader from '../components/TemplateHeader'
import TemplateImage from '../components/TemplateImage'
import TemplateFooter from '../components/TemplateFooter'

const Template = () => {

    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/templates') {
            window.scroll(0, 0);
        }
    }, [pathname])

    return (
        <>
            <TemplateHeader />
            <TemplateImage />
            <TemplateFooter />
        </>
    )
}

export default Template