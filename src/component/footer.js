import { Col, Row } from 'react-bootstrap'
import footerlogo from '../images/footerlogo.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import { Link } from 'react-router-dom'
const footer = () => {
    return <div className="footer">
            <img src={footerlogo} />
            <Row className="usefullinks">
                <Col sm={3}>
                <ul>
                <h5>Useful Links</h5>
                        <li><Link to="" >About InstaDriver</Link></li>
                        <li><Link to="" >Verified Search(For Employers & Drivers)</Link></li>
                        <li><Link to="">Top Ad Feature(For Drivers)</Link></li>
                    </ul>
                </Col>
                <Col sm={2}>
               
                <ul> <h5>Useful Links</h5>
                        <li><Link to="" >Driver Sign In</Link></li>
                        <li><Link to="" >Driver Sign Up</Link></li>
                        <li><Link to="">Employer Sign In</Link></li>
                        <li><Link to="">Employer Sign Up</Link></li>
                    </ul>
                </Col>
                <Col sm={2}>
               
                <ul><h5>Useful Links</h5>
                        <li><Link to="" >FAQs</Link></li>
                        <li><Link to="" >Contact Us</Link></li>
                        <li><Link to="">Terms & Conditions</Link></li>
                        
                    </ul>
                </Col>
                
                <Col sm={2}>
                <h5>Social Media</h5>
                <ul className="social">
                    <li style={{"marginLeft":"-9px"}}><a href="https://www.facebook.com/instadrivers" target="_blank"><img src={facebook} /></a></li>
                    <li><a href="https://twitter.com/Instadriver1"><img src={twitter} /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"><img src={youtube} /></a></li>
                    <li><a href="https://www.instagram.com/instadriverx/"><img src={instagram} /></a></li>
                </ul>
                </Col>
                <Col sm={3}>
                <h5 >Contact Info</h5>
                <ul className="contact"><li>
                <a href="mailto:saysomething@instadriver.co" >saysomething@instadriver.co</a>
                    </li></ul>
                
                </Col>
            </Row>
        </div>
}
export default footer;