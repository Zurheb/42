import { useContext } from "react";
import { LocalizationApi } from "../Localization/Localization";


const languageChanger = (en, ru, uz) => {
    const {language,} = useContext(LocalizationApi);
    let text =
        language === "en" ? en
            : language === "ru" ? ru : uz;
    return text;
}

export default languageChanger;