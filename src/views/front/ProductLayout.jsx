import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const ProductLayout = () => {
    const [list, setList] = useState([]);

    useEffect(()=> {
        getListData();
    },[])

    const getListData = async(page=1) => {
        const url = 'https://ec-course-api.hexschool.io/v2';
        const path = 'satarkuo';
        
        try {
            const res = await axios.get(`${url}/api/${path}/products?page=${page}`)
            setList(res.data.products)
        } catch (error) {
            console.log(error)
        } 
    }

    return (<>
        
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>產品列表</h3>
                    <ul className="navbar-nav">
                        {list.map(item => (
                            <li key={item.title} className="nav-item mb-1">
                                <NavLink to={item.id} className="nav-item text-secondary-emphasis text-decoration-none">
                                    <b>{item.title}</b>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-9">
                    <Outlet context={list}/>
                </div>
            </div>
        </div>
        
    </>)
}

export default ProductLayout;