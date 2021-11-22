import CardUser from "../CardUser/CardUser"

const ListUsers=({users})=>{
    return(
        <div>
            {
                users.map(user=><CardUser user={user}/>)
            }
        </div>
    )
}

export default ListUsers
