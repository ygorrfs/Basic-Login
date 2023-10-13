import { Context } from "../context/Context";
import { useContext } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { toggleTheme, getThemeClass } from '../pages/theme/themeFunctions';
import '../styles/style.css';

const Header = () => {
    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        toggleTheme(state.theme.status, dispatch);
    }

    const themeClass = getThemeClass(state.theme.status);

    return (
        <div className={`${themeClass}`}>
            <div className="header">
                <h1 className="title">Título da página</h1>
                <div className="header-button">
                    {state.theme.status === 'light' ? (
                        <button
                            onClick={handleSwitchTheme}
                            className="icon-button"
                        >
                            <FaSun className={`icon ${themeClass}`} />
                        </button>
                    ) : (
                        <button
                            onClick={handleSwitchTheme}
                            className="icon-button"
                        >
                            <FaMoon className={`icon ${themeClass}`} />
                        </button>)}
                </div>
            </div>
        </div>
    )
}

export default Header;
