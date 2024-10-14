import "./productList.css"
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { deleteProducts, getProducts } from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux"

export default function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector ((state=> state.product.products))

    const handleDelete = (id)=>{
        deleteProducts(id,dispatch)
      }


      useEffect(()=>{
        getProducts(dispatch)
      },[dispatch])


      const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 200 ,
            renderCell:(params)=>{
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt="Img" className="productListImg" />
                        {params.row.title}
                    </div>
                )
              
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        
        {
            field: 'price',
            headerName: 'Price ',
            width: 160,
          },
          {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell:(params)=>{
                return(
                     <>
                     <Link to={"/product/" + params.row._id}>
                      <button className="productListEdit">Edit</button>
                     </Link>
                    
                    <DeleteOutlineOutlined className="productListDelete"
                      onClick={()=>handleDelete(params.row._id)}     />
                    </>
                )
            }
          }
        
      ]
  return (

   
      <div className="productList">
       <DataGrid disableRowSelectionOnClick
        rows={products}
        columns={columns}
        getRowId={(row => row._id)}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[8]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  )
}
