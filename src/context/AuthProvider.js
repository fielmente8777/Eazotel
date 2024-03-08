import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const baseUrl1 = "http://127.0.0.1:5000"
    const baseUrl = "https://api.eazotel.com"
    const baseUrl1 = "https://nexon.eazotel.com"
    const [auth, setAuth] = useState(false);
    const [webCards, setWebCards] = useState([{}])
    const [step, Setstep] = useState(0)
    const [clientWebsite, setClientWebsite] = useState("");
    const [clientengine, setClientengine] = useState("");
    const [clientDashboard, setClientDashboard] = useState("")
    const [clientDashboardUserName, setClientDashboardUserName] = useState("")
    const [clientDashboardPassword, setClientDashboardPassword] = useState("")
    const [haveDashboardPassword, setHaveDashboardPassword] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [showpop, setShowpop] = useState(false);
    const [submitFrom, setSubmitForm] = useState(false);
    const [load, setLoad] = useState(false)

    return (
        <AuthContext.Provider value={{baseUrl,baseUrl1,
            auth, setAuth, step, Setstep, webCards, setWebCards, clientWebsite,
            setClientWebsite, clientDashboardUserName, setClientDashboardUserName, clientDashboardPassword, setClientDashboardPassword,
            clientDashboard, setClientDashboard, haveDashboardPassword, setHaveDashboardPassword, modalShow, setModalShow, showpop, setShowpop, submitFrom, setSubmitForm
            ,load,setLoad,clientengine,setClientengine}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;  