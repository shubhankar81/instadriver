import { Navbar, Nav, Dropdown, DropdownButton }  from 'react-bootstrap';
import logo from '../images/menu.svg';
import instalogo from '../images/logo.svg';

const header = () => {
   return  <Navbar collapseOnSelect expand="lg" >
   <Navbar.Brand href="#home" style={{"margin-left":"8%"}}><img src={instalogo} /></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ">
        
    </Nav>
    <Nav>
        <Nav.Link className="linkheader" href="/jobs">Jobs</Nav.Link>
        <Nav.Link className="linkheader" href="/getsocial">Get Social</Nav.Link>
        <Nav.Link className="linkheader" href="/signin">Sign In</Nav.Link>
        <DropdownButton
            menuAlign="right"
            id="dropdown-menu-align-right"
            title={<span>Menu <img src={logo} /></span>}
            > 
            <Dropdown.Item eventKey="1">Home</Dropdown.Item>
            <Dropdown.Item eventKey="2">About InstaDriver</Dropdown.Item>
            <Dropdown.Item eventKey="3">Verified Search(For Employers & Drivers)</Dropdown.Item>
            <Dropdown.Item eventKey="4">Top Ad Feature(For Drivers)</Dropdown.Item>
            <Dropdown.Item eventKey="5">FAQs</Dropdown.Item>
            <Dropdown.Item eventKey="6">Contact Us</Dropdown.Item>
        </DropdownButton>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
}
export default header;
