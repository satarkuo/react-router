import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/admin/adminProduct')
    }

    return (<>
        <h1>登入</h1>
        <button type="button" onClick={handleLogin}>登入</button>
    </>)
}

export default Login;