import React, {useContext} from "react"
import {LanguageContext} from "../../Contexts/LanguageContext"
import LanguageData from "../../Data/languageData"


export default function SetLanguage() {
    const {language, toggleLanguage} = useContext(LanguageContext)

    return (
        <div>
             <button className="border rounded-sm border-gray-500" onClick={toggleLanguage}>{LanguageData[language].language} {language}</button>
        </div>
    )
}
