import { DeleteOutlineOutlined } from "@mui/icons-material";
import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { useState } from "react";
import { userRows } from "../../dummyData";


export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id)=>{
      setData(data.filter((item)=> item.id !== id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 ,
            renderCell:(params)=>{
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="Img" className="userListImg" />
                        {params.row.username}
                    </div>
                )
              
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transacton Value',
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
      


  return (
    <div className="userList">
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
