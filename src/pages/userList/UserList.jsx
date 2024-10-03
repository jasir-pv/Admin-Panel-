import { DeleteOutlineOutlined } from "@mui/icons-material";
import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';


export default function UserList() {

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
                    <button className="userListEdit">Edit</button>
                    <DeleteOutlineOutlined className="userListDelete" />
                    </>
                )
            }
          }
        
      ];
      
      const rows = [
        { id: 1, username: 'Snow', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 2, username: 'Lannister', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 3, username: 'Lannister', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 4, username: 'Stark', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 5, username: 'Targaryen', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00"  },
        { id: 6, username: 'Melisandre', avatar: "https://avatars.githubusercontent.com/u/106402545?v=4", email: "jasir@gmail.com", status:"active", transaction:"$120.00"  },
        { id: 7, username: 'Clifford', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 8, username: 'Frances', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
        { id: 9, username: 'Roxie', avatar: 'https://avatars.githubusercontent.com/u/106402545?v=4', email: "jasir@gmail.com", status:"active", transaction:"$120.00" },
      ];

  return (
    <div className="userList">
       <DataGrid disableRowSelectionOnClick
        rows={rows}
        columns={columns}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    
    </div>
  )
}
