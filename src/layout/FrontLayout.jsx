import { NavLink, Outlet } from "react-router-dom";

const FrontLayout = () => {
    const routes = [
        {path: '/', name: '首頁'},
        {path: '/products', name: '產品列表'},
        {path: '/login', name: '登入'}
    ]

    return (<div className="container-fluid  ">
        <nav className="navbar navbar-expand-lg p-2" 
            style={{
                backgroundColor: '#F7EEE9',
            }}>
            <div className="container">
                <h1 className="">前台</h1>
                <ul className="navbar-nav">
                    {routes.map(route => (
                        <li className="nav-item" key={route.path}>
                            <NavLink to={route.path} className="nav-link">{route.name}</NavLink>
                        </li>
                    ))}
                    
                </ul>
            </div>
            
        </nav>
        <section className="container py-5">
            <Outlet />  
        </section>
        
    </div>)
}

export default FrontLayout;