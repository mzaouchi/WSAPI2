const CardUser=({user})=>{
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
        </div>
    )
}

export default CardUser;