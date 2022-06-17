import {Link} from 'react-router-dom'
const CardUser=({user})=>{
    return(
        <div>
            <Link to={`/Users/${user.id}`}><h2>{user.name}</h2></Link>
        </div>
    )
}

export default CardUser