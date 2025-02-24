import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/admin/list')
    }

    return (<>
        <h1>Login</h1>
        <button type="button" onClick={handleLogin}>登入</button>
    </>)
}

export default Login;