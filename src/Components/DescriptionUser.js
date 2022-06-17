import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const DescriptionUser=({users})=>{
    const {id} = useParams()
    const founded = users.find(user => user.id == id )
    const navigate = useNavigate()
    

    return(
        <div>
            <h2>{founded.name}</h2>
            <h3>{founded.age}</h3>
            <h4>{founded.id}</h4>
            <button onClick={()=>navigate('/')}>Home</button>

        </div>
        
        
    )
}

export default DescriptionUser