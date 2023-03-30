import React, {createContext, useEffect, useState} from "react";
import Cookies from "js-cookie"


export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(Cookies.get("language"));

    useEffect(() => {
        if(!Cookies.get("language")){
            Cookies.set("language", "en", { expires: 365 })
        }
    }, [])

    const toggleLanguage = () => {
        console.log(Cookies.get("language"))
        if(language === "en") {
            setLanguage("es")
            Cookies.remove("language")
            Cookies.set("language", "es", { expires: 365 })
        }else {
            setLanguage("en")
            Cookies.remove("language")
            Cookies.set("language", "en", { expires: 365 })
        }
    }
    if(language){
        return (
            <LanguageContext.Provider value={{language, toggleLanguage}}>
                {children}
            </LanguageContext.Provider>
        )
    }
}

