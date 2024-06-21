import { useContext } from "react";
import { TestApi } from "../TestContext/TestContext";

const ModeChanger = (light,dark) =>{
    const {theme, ToggleTheme} =useContext(TestApi);
    const style = theme === "light" ? light : dark
    return style;
}

export default ModeChanger;