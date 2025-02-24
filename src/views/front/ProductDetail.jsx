import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";


const url = 'https://ec-course-api.hexschool.io/v2';
const path = 'satarkuo';

const ProductDetail = () => {
    const {id} = useParams();
    const [singleData, setSingleData] = useState({});
    const [qtySelect, setQtySelect] = useState(1); //加入購物車：產品數量
    const defaultColor = {
        colorName: '',
        colorCode: ''
    }
    const [selectedColor,setSelectedColor] = useState(defaultColor); //加入購物車：產品顏色
    const [isScreenLoading, setIsScreenLoading] = useState(false); //全螢幕Loading


    useEffect(()=> {
        getProductData();
    },[id])

    const getProductData = async() => {
        setIsScreenLoading(true)
        try {
            const res = await axios.get(`${url}/api/${path}/product/${id}`)
            setSingleData(res.data.product)
        } catch (error) {
            console.log(error)
        } finally {
            setIsScreenLoading(false)
        }
    }

    // 加入購物車、直接購買
    const addCardItem = async(product_id, qty, color) => {
        if (selectedColor.colorName === '') {
            alert('請先選擇顏色')
            return
        }

        const data = {product_id, qty:Number(qty), color};
        try {
            await axios.post(`${url}/api/${path}/cart`, {data});
            alert('產品已加入購物車')
            
        } catch (error) {
            console.log(error)
        } finally {
            setSelectedColor(defaultColor)
            setQtySelect(1)
        }
    }
    

    return (<>
        <section className="productDetail mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="coverImg">
                            <img
                                src={singleData.imageUrl}
                                alt={singleData.title}
                                className="w-100 img-fluid rounded-3 mb-3"
                            />
                        </div>
                        <div className="row row-cols-3 mb-5 g-3">
                            {singleData?.imagesUrl?.map((img,index) => (
                                <div className="col" key={index}>
                                    {img &&
                                        <img
                                            src={img}
                                            alt={singleData.title}
                                            className="w-100 img-fluid rounded-3"
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1 className="h4">{singleData.title}</h1>
                        <p className="text-body-tertiary">{singleData.description}</p>
                        <p className="mb-4">
                            <span className="h5 text-primary">$ {singleData.price}</span>
                            <del className="text-body-tertiary ms-3">$ {singleData.origin_price}</del>
                        </p>
                        <div className='mb-3 d-flex'>
                            <div className='form-label mb-0 d-flex align-items-center' style={{'width':'60px'}}>顏色</div>
                            {singleData?.color?.map((color,index) => {
                                return(<div className='form-check ps-0 me-3 checkedStyle' key={color.colorName}>
                                    <input type='radio' id={`color-${index+1}`}
                                        value={color.colorName} name='color' 
                                        className='form-check-input d-none'
                                        onChange={() => setSelectedColor({colorName: color.colorName, colorCode: color.colorCode})}
                                        checked={color.colorName === selectedColor.colorName}
                                        />
                                    <label className='form-check-label' htmlFor={`color-${index+1}`}>
                                        <div className="d-flex flex-column">
                                            <span className="colorSquare" style={{'backgroundColor': color.colorCode }}></span>
                                            <small className="text-secondary">{color.colorName}</small>
                                        </div>
                                    </label>
                                </div>)
                            })}
                        </div>
                        
                        <div className="input-group align-items-center mb-4">
                            <label htmlFor="qtySelect" style={{'width':'60px'}}>數量</label>
                            <select
                                value={qtySelect}
                                onChange={(e) => setQtySelect(e.target.value)}
                                id="qtySelect"
                                className="form-select d-inline-block rounded-3"
                                style={{'width':'240px', 'flex':'none'}}
                                >
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <option key={index} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="btn-group d-flex" style={{'width':'300px'}}>
                            <button type="button" 
                                className="btn btn-primary flex-fill d-flex align-items-center justify-content-center gap-2"
                                onClick={() => addCardItem(singleData.id, qtySelect, selectedColor)}>
                                加入購物車
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-content" aria-selected="true">產品說明</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-notice-tab" data-bs-toggle="pill" data-bs-target="#pills-notice" type="button" role="tab" aria-controls="pills-notice" aria-selected="false">注意事項</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-spec-tab" data-bs-toggle="pill" data-bs-target="#pills-spec" type="button" role="tab" aria-controls="pills-spec" aria-selected="false">產品規格</button>
                    </li>
                </ul>
                <div className="tab-content contentBox mb-3" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-content" role="tabpanel" aria-labelledby="pills-content-tab">
                        {/* 將內容直接渲染為HTML，注意：若資料來自外部並不安全，建議增加使用 dompurify 以避免XSS攻擊*/}
                        <div dangerouslySetInnerHTML={{ __html: singleData.content }} />
                    </div>
                    <div className="tab-pane fade" id="pills-notice" role="tabpanel" aria-labelledby="pills-notice-tab">
                        <div dangerouslySetInnerHTML={{ __html: singleData.notice }} />
                    </div>
                    <div className="tab-pane fade" id="pills-spec" role="tabpanel" aria-labelledby="pills-spec-tab">
                        <table className="table specTable">
                            <tbody>
                                <tr>
                                    <th>材質</th>
                                    <td>{singleData.material}</td>
                                </tr>
                                <tr>
                                    <th>尺寸</th>
                                    <td>{singleData.size}</td>
                                </tr>
                                <tr>
                                    <th>顏色</th>
                                    <td>
                                        {singleData?.color?.map((color, index) => (
                                            <span key={index}>{color.colorName} {index+1 === singleData.color.length ? '' : '、' }</span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <th>產地</th>
                                    <td>{singleData.origin}</td>
                                </tr>
                                <tr>
                                    <th>保固</th>
                                    <td>{singleData.warranty}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </section>
        {isScreenLoading && (
            <div
            className="d-flex justify-content-center align-items-center"
            style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(230,146,112,0.7)",
            zIndex: 1999,
            }}>
            <ReactLoading type="spin" color="#fff" width="4rem" height="4rem" />
            </div>
        )}
    </>
    )
}

export default ProductDetail;