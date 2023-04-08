import { useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState("dark");
    const icon = "fa-solid fa-2xl fa-" + (theme === "light" ? "sun" : "moon");
    const toggle = () => setTheme(theme === "light" ? "dark" : "light");

    document.getElementById("root").className = "root theme-" + theme;

    return (
        <div className="header">
            <h1>TODO</h1>
            <i className={icon} onClick={toggle}></i>
        </div>
    );
};

export default Header;
