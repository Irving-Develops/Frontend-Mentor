import React, {useContext} from "react"
import {LanguageContext} from "../../Contexts/LanguageContext"
import LanguageData from "../../Data/languageData"


function SetLanguage() {
    const {language, toggleLanguage} = useContext(LanguageContext)

    return (
        <div>
            <label className="mr-5">{LanguageData[language].language}</label>
             <button className="border rounded-sm border-gray-500" onClick={toggleLanguage}>{language}</button>
        </div>
    )
}

export default SetLanguage