import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/admin/adminProduct')
    }

    return (<>
        <div className="container text-center">
            <h3>登入</h3>
            
            <button type="button" 
                className="btn btn-primary"
                onClick={handleLogin}>
                登入
            </button>
        </div>
    </>)
}

export default Login;