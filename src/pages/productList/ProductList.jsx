import "./productList.css"
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useState } from "react";
import { productRows } from "../../dummyData";

export default function ProductList() {

    const [data, setData]  = useState(productRows)
    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id))
      }


      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 ,
            renderCell:(params)=>{
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt="Img" className="productListImg" />
                        {params.row.productName}
                    </div>
                )
              
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
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
                     <Link to={"/product/" + params.row.id}>
                      <button className="productListEdit">Edit</button>
                     </Link>
                    
                    <DeleteOutlineOutlined className="product ListDelete"
                      onClick={()=>handleDelete(params.row.id)}     />
                    </>
                )
            }
          }
        
      ]
  return (

   
      <div className="productList">
       <DataGrid disableRowSelectionOnClick
        rows={data}
        columns={columns}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[8]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  )
}
