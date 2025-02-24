import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
    const routes = [
        {path: '/admin/adminProduct' , name: '產品列表'},
        {path: '/admin/adminOrder', name: '訂單列表'},
        {path: '/', name: '返回首頁'}
    ]
    return (<div className="container-fluid  ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 bg-primary-subtle ">
            <div className="container">
                <h1 className="">後台</h1>
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

export default AdminLayout;