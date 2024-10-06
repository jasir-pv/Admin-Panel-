import Chart from "../../components/chart/Chart"
import "./product.css"
import { Link } from "react-router-dom"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material"


export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart  data={productData} dataKey="Sales" title="Sales Perfomence" />
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="./images/Apple Airpod.png" alt="" className="prductInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">6541</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales</span>
                    <span className="productInfoValue">6541</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Active</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In Stock</span>
                    <span className="productInfoValue">No</span>
                </div>     

            </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
            <div className="productFormLeft">
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder="Apple Airpod" />
                <label htmlFor="">In stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="" alt="" className="productUploadImg" />
                    <label htmlFor="file">
                        <Publish/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                    <button className="productButton">Update</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}
