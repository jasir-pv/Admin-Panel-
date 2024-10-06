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
  return (

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 ,
            renderCell:(params)=>{
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="Img" className="productListImg" />
                        {params.row.name}
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
                     <Link to={"/user/" + params.row.id}>
                      <button className="userListEdit">Edit</button>
                     </Link>
                    
                    <DeleteOutlineOutlined className="userListDelete"
                      onClick={()=>handleDelete(params.row.id)}     />
                    </>
                )
            }
          }
        
      ];

    <div className='productList'>
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
