import { Context } from "@/app/context/Context";
import { useContext } from "react";
import { getThemeClass, toggleTheme } from "../theme/themeFunctions";
import { Link } from "react-router-dom";
import Signup from "../register";

const Login = () => {
    const { state, dispatch } = useContext(Context);

    const themeClass = getThemeClass(state.theme.status);

    return (
        <div className={`login-page ${themeClass}`}>
            <div className="login-container">
                <div className="login-content">
                    <label>Login</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        className={`form-control ${themeClass}`}
                    />
                </div>
                <div className="login-content">
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className={`form-control ${themeClass}`}
                    />
                </div>
                <button className="login-button">Login</button>
                <div className="login-content">
                    <label>Ainda não tem cadastro?</label>
                    <Link to="/signup" className="login-button">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;