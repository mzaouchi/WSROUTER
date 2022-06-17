import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const NavUser=()=>{
    return(
  
        //  <ul>
        //         <Link to='/'><li>Home</li></Link>
        //         <Link to='/Users'><li>Users</li></Link>
        //         <Link to='/Contact'><li>Contact</li></Link>
        //     </ul>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Users' >Users</Nav.Link>
            <Nav.Link as={Link} to='/Contact' >Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
  
           
    )
}

export default NavUser