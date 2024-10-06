import { Publish } from "@mui/icons-material"
import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className="newProduct">
      {/* <h1 className="addProductTitle"> New Product<h1/> */}
      <h1 className="addProductTitle">New Product</h1>
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

  )
}
