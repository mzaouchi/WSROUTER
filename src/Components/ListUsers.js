import CardUser from "./CardUser"

const ListUsers=({users})=>{
    return(
        <div>
            {
                users.map(user => <CardUser key={user.id} user={user}/>)
            }
        </div>
    )
}

export default ListUsers