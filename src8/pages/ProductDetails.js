import { useParams } from "react-router"

const ProductDetail = () =>{
    const params = useParams()
    console.log(params)
    return <div><h1>
        this is product details of param
    </h1>
    <h1>{params.productid}</h1>
    </div>
}

export default ProductDetail;