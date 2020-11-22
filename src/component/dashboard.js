import React from 'react'
import message from '../images/message.svg';
import location from '../images/location.svg';
import filter from '../images/filter.svg';
import ocean from '../images/ocean-waves.png';
import oceanwhite from '../images/ocean-waves-white.png';
import drivers from '../images/drivers.svg';
import employees from '../images/employees.svg';
import aboutus from '../images/aboutus.svg';
import topadd from '../images/topadd.svg';
import verify from '../images/verify.svg';
import { Container, Alert, Row, Col, Form, InputGroup, FormControl, Button, Nav, CardGroup, Card, Modal, } from 'react-bootstrap'
import CardDetail from '../subcomponent/carddetails';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state={
            divflag : 0,
            divEmpData : [
                { "title" : "Search Drivers", "text" : "Visit Instadriver platform, select the driver category you want, choose the location of the driver and you can either select all drivers or verified drivers and press search button."},
                { "title" : "Call Driver", "text" : "After hitting search button, you will see summarised profiles of the drivers with their contacts. Click view profile, to read the full profile. Access the contact number and call the driver."},
                { "title" : "Hire Drivers", "text" : "On the call, discuss the job opportunity, terms and conditions, or arrange a meetup to discuss further and if you are both a perfect fit, proceed to hire that driver. As simple as that."},
            ],
            divDriverData : [
                { "title" : "Post Profile", "text" : "As a driver, all you need to do is to create an account with Instadriver, go to your profile page and update your profile. Once you post your profile, employers will be able to find you."},
                { "title":"Employers find you and call you", "text" : "Employers normally come to Instadriver to find and hire drivers. Employers will be able to view your profile, and if they are impressed, they will call you and you instantly get a driving job."},
                { "title" : "And you get hired", "text" : "Instadriver is the best and reliable platform for drivers to get hired. When it comes to looking for drivers, employers only know of Instadriver. Leverage Instadriver to get a good job."},
            ],
            divDetail:[],
            show : false
        }
    }
    linkClick = (prm) => {
        
        let { divflag, divEmpData, divDriverData, divDetail } = this.state;
        if(divflag != prm){
            divflag = prm
        }
        divDetail = divflag == 0 ? divEmpData : divDriverData;
        this.setState({
            divflag,
            divDetail
        })
    }
    componentDidMount(){
        let { divDetail, divEmpData } = this.state;
        this.setState({
            divDetail : divEmpData
        })
    }
    changeShow = () => {
        let { show } =  this.state;
        this.setState({ show : true })
    }
    changeClose = () => {
        let {show} = this.state;
        this.setState({
            show : false
        })
    }
    render(){
        let { divflag, divDetail, show } = this.state;
        return(
            <div>
                <div className="headeremail"><p><img src={message} /> saysomething@instadriver.co</p></div>
                <div className="headerMain">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="filterBox">
                                
                                    <h4>Find and Hire A Driver. Its Free and No Login Requirement</h4>
                                    <Form.Group as={Col} style={{"paddingTop":"2rem"}} >
                                    <Form.Control className="formSelect" as="select" defaultValue="Choose...">
                                        <option>Select Category</option>
                                        <option value="1">Personal Driver</option>
                                        <option value="2">Public Commuter Driver (e.g. Bus, Ambulance)</option>
                                        <option value="3">Ride-Sharing Driver e.g Uber, Taxify</option>
                                        <option value="4">School Bus Driver</option>
                                        <option value="5">Truck Driver</option>
                                        <option value="6">Forklift Driver</option>
                                        <option value="7">On-Demand Driver</option>
                                    </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                    <InputGroup className="custominput mb-2 mr-sm-2">
                                        <FormControl style={{"height":"3rem", "borderRadius":"1px"}} id="inlineFormInputGroupUsername2" placeholder="Enter a location" />
                                        <InputGroup.Append>
                                        <InputGroup.Text><img style={{"height":"1rem"}} src={location} /></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Control className="formSelect" as="select" defaultValue="Choose...">
                                            <option value="">Select Search Type</option>
                                            <option value="all">Search All Drivers</option>
                                            <option value="Y">Search Verified Drivers</option>
                                    </Form.Control>
                                    </Form.Group>
                                    <Row >
                                        <Col sm={3}><img style={{"cursor":"pointer"}} onClick={() => this.changeShow()} className="lightimg" src={filter} /></Col>
                                        <Col sm={9}><Button variant="warning">Search</Button></Col>
                                    </Row>
                                
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                </div>
                <div>
                    <Container className="maincontainer">
                            <div><h4><b>How it works</b></h4></div>
                            <img src={ocean} /><br/>
                            <Row className="navcontent">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item className="navemp">
                                    <Nav.Link onClick={(e) => this.linkClick(0)} className={divflag == 0 ? "active" : "" }>For Employers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="navemp">
                                    <Nav.Link onClick={(e) => this.linkClick(1)} className={divflag == 1 ? "active" : "" }>For Drivers</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Row>
                            <Row style={{"maxHeight":"26rem"}}>
                            <CardDetail className="cardDetail" data={divDetail} />
                            </Row>
                    </Container>
                    <Container fluid className="fluidmargin" >
                <Row>
                    <Col className="employers" sm={6}><Card>
                    <Card.Img variant="top" src={employees} height="100" width="70" />
                    <Card.Body>
                        <Card.Title><h4><b>Employers!</b></h4></Card.Title>
                        <img  src={ocean}      />
                        <Card.Text>
                        You don’t have to waste money posting vacancy Ads. Stop posting vacancy ads on whatsapp groups and on social media. Stop making desperate hires because you have few choices. Stop nagging your friends to find you a driver. Get your driver from Instadriver and it is free. At Instadriver, you have a long list to choose a competent driver. Go to search bar, select the driver category you want, choose the location of the driver and press search button. Pick the driver you want. It is that simple and instantaneous.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col className="drivers" sm={6}><Card>
                    <Card.Img variant="top" src={drivers} height="100" width="70" />
                    <Card.Body>
                        <Card.Title><h4><b>Drivers!</b></h4></Card.Title>
                        <img src={oceanwhite}  />
                        <Card.Text>
                        This is a platform to get employed faster and effortlessly. It is not fun staying unemployed. You don’t have to toil asking your relatives, friends and acquaintances to find you a job. Get a job instantly. Just post your profile on Instadriver and employers will find you instantaneously. You can increase your visibility and increase the odds of getting hired by using the Verified Feature and the Top Add Feature. To create your profile for free, click here. This is how millennials and Gen Z find employment.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                </Row>
            </Container>
            <Container className="footerDetail" fluid>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={aboutus} height="80" width="50" />
                    <Card.Body>
                        <Card.Title><h5><Link to="/aboutus">About us</Link></h5></Card.Title>
                        
                        <Card.Text>
                        Learn how useful Instadriver is to both the employer and drivers
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={verify} height="80" width="50" />
                    <Card.Body>
                        <Card.Title><h5><Link to="/search">Verified Search</Link></h5></Card.Title>
                        
                        <Card.Text>
                        Learn how employers can cut the curve and save a lot by using verified search
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <Card.Img variant="top" src={topadd} height="80" width="50" />
                    <Card.Body>
                        <Card.Title><h5><Link to="/topad">Top Ad Feature</Link></h5></Card.Title>
                        
                        <Card.Text>
                        See how top ad feature can increase the odds of a driver getting hired
                        </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </Container>
            <Container>
                <div className="footerTitle">
                    <h4><b>Driver Profiles posted on Instadriver</b></h4>
                </div>
            <Row><Col sm={2}></Col><Col sm={8}>
                <CardGroup>
                <Card >
                    <Card.Body className="register">
                    <Card.Title><h1><b>190</b></h1></Card.Title>
                        <Card.Text>
                       <h5> Free Driver Profiles</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body className="verified">
                        <Card.Title><h1><b>7</b></h1></Card.Title>
                        <Card.Text>
                        <h5>Verified Driver Profiles</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
                </Col><Col sm={2}></Col></Row>
            </Container>
                </div>
                <Modal
                    show={show}
                    onHide={() => this.changeClose()}
                    dialogClassName="modal-90w"
                    aria-labelledby="example"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example">
                        Filter
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Select currency used in your country</Form.Label>
                            <Form.Control style={{"width":"66%"}} as="select" defaultValue="Select Currency">
                            <option value="">Select Currency</option>
                            <option value="AFN">Afghan Afghani</option><option value="ALL">Albanian Lek</option><option value="DZD">Algerian Dinar</option><option value="EUR">Andorra Euro</option><option value="AOA">Angolan Kwanza</option><option value="XCD">East Caribbean Dolla</option><option value="XCD">East Caribbean Dolla</option><option value="ARS">Argentine Peso</option><option value="AMD">Armenian Dram</option><option value="AWG">Aruban Florin</option><option value="AUD">Australian Dollar</option><option value="EUR">Austria Euro</option><option value="AZN">Azerbaijani Manat</option><option value="BHD">Bahraini Dinar</option><option value="BDT">Bangladeshi Taka</option><option value="BBD">Barbadian Dollar</option><option value="BYR">Belarusian Ruble</option><option value="EUR">Belgium Euro</option><option value="BZD">Belize Dollar</option><option value="XOF">West African CFA Fra</option><option value="BMD">Bermudian Dollar</option><option value="BTN">Bhutanese Ngultrum</option><option value="BWP">Botswana Pula</option><option value="BRL">Brazilian Real</option><option value="BGN">Bulgarian Lev</option><option value="XOF">West African CFA Fra</option><option value="BIF">Burundian Franc</option><option value="KHR">Cambodian Riel</option><option value="XAF">Central African CFA </option><option value="CAD">Canadian Dollar</option><option value="CVE">Cape Verdean Escudo</option><option value="KYD">Cayman Islands Dolla</option><option value="XAF">Central African CFA </option><option value="CLP">Chilean Peso</option><option value="CNY">Chinese Yuan</option><option value="COP">Colombian Peso</option><option value="KMF">Comorian Franc</option><option value="NZD">New Zealand Dollar</option><option value="CRC">Costa Rican Colón</option><option value="XOF">West African CFA Fra</option><option value="HRK">Croatian Kuna</option><option value="CUC">Cuban Convertible Pe</option><option value="EUR">Cyprus Euro</option><option value="CZK">Czech Koruna</option><option value="DKK">Danish Krone</option><option value="DJF">Djiboutian Franc</option><option value="XCD">East Caribbean Dolla</option><option value="DOP">Dominican Peso</option><option value="USD">United States Dollar</option><option value="EGP">Egyptian Pound</option><option value="USD">United States Dollar</option><option value="XAF">Central African CFA </option><option value="ERN">Eritrean Nakfa</option><option value="EUR">Estonia Euro</option><option value="ETB">Ethiopian Birr</option><option value="DKK">Danish Krone</option><option value="FJD">Fijian Dollar</option><option value="EUR">Finland Euro</option><option value="EUR">France Euro</option><option value="XPF">CFP Franc</option><option value="XAF">Central African CFA </option><option value="GEL">Georgian Lari</option><option value="EUR">Germany Euro</option><option value="GHS">Ghana Cedi</option><option value="GIP">Gibraltar Pound</option><option value="EUR">Greece Euro</option><option value="XCD">East Caribbean Dolla</option><option value="GTQ">Guatemalan Quetzal</option><option value="GBP">British Pound</option><option value="GNF">Guinean Franc</option><option value="XOF">West African CFA Fra</option><option value="GYD">Guyanese Dollar</option><option value="HTG">Haitian Gourde</option><option value="HNL">Honduran Lempira</option><option value="HKD">Hong Kong Dollar</option><option value="HUF">Hungarian Forint</option><option value="ISK">Icelandic Króna</option><option value="INR" selected="true">Indian Rupee</option><option value="IDR">Indonesian Rupiah</option><option value="IQD">Iraqi Dinar</option><option value="EUR">Ireland Euro</option><option value="GBP">British Pound</option><option value="ILS">Israeli New Shekel</option><option value="EUR">Italy Euro</option><option value="JMD">Jamaican Dollar</option><option value="JPY">Japanese Yen</option><option value="GBP">British Pound</option><option value="JOD">Jordanian Dinar</option><option value="KZT">Kazakhstani Tenge</option><option value="KES">Kenyan Shilling</option><option value="AUD">Australian Dollar</option><option value="KWD">Kuwaiti Dinar</option><option value="KGS">Kyrgyzstani Som</option><option value="LAK">Lao Kip</option><option value="EUR">Latvia Euro</option><option value="LBP">Lebanese Pound</option><option value="LSL">Lesotho Loti</option><option value="LRD">Liberian Dollar</option><option value="CHF">Swiss Franc</option><option value="EUR">Lithuania Euro</option><option value="EUR">Luxembourg Euro</option><option value="MGA">Malagasy Ariary</option><option value="MWK">Malawian Kwacha</option><option value="MYR">Malaysian Ringgit</option><option value="MVR">Maldivian Rufiyaa</option><option value="XOF">West African CFA Fra</option><option value="EUR">Malta Euro</option><option value="USD">United States Dollar</option><option value="MRO">Mauritanian Ouguiya</option><option value="MUR">Mauritian Rupee</option><option value="MXN">Mexican Peso</option><option value="MDL">Moldovan Leu</option><option value="EUR">Monaco Euro</option><option value="MNT">Mongolian Tögrög</option><option value="EUR">Montenegro Euro</option><option value="XCD">East Caribbean Dolla</option><option value="MAD">Moroccan Dirham</option><option value="MZN">Mozambican Metical</option><option value="MMK">Burmese Kyat</option><option value="NAD">Namibian Dollar</option><option value="AUD">Australian Dollar</option><option value="NPR">Nepalese Rupee</option><option value="EUR">Netherlands Euro</option><option value="XPF">CFP Franc</option><option value="NZD">New Zealand Dollar</option><option value="NIO">Nicaraguan Córdoba</option><option value="XOF">West African CFA Fra</option><option value="NGN">Nigerian Naira</option><option value="NZD">New Zealand Dollar</option><option value="NOK">Norwegian Krone</option><option value="OMR">Omani Rial</option><option value="PKR">Pakistani Rupee</option><option value="PAB">Panamanian Balboa</option><option value="PGK">Papua New Guinean Ki</option><option value="PYG">Paraguayan Guaraní</option><option value="PEN">Peruvian Nuevo Sol</option><option value="PHP">Philippine Peso</option><option value="PLN">Polish Z?oty</option><option value="EUR">Portugal Euro</option><option value="QAR">Qatari Riyal</option><option value="RON">Romanian Leu</option><option value="RUB">Russian Ruble</option><option value="RWF">Rwandan Franc</option><option value="XCD">East Caribbean Dolla</option><option value="WST">Samoan</option><option value="EUR">San Marino Euro</option><option value="SAR">Saudi Riyal</option><option value="XOF">West African CFA Fra</option><option value="RSD">Serbian Dinar</option><option value="SCR">Seychellois Rupee</option><option value="SLL">Sierra Leonean Leone</option><option value="BND">Brunei Dollar</option><option value="EUR">Slovakia Euro</option><option value="EUR">Slovenia Euro</option><option value="SBD">Solomon Islands Doll</option><option value="SOS">Somali Shilling</option><option value="ZAR">South African Rand</option><option value="EUR">Spain Euro</option><option value="LKR">Sri Lankan Rupee</option><option value="SDG">Sudanese Pound</option><option value="SRD">Surinamese Dollar</option><option value="SZL">Swazi Lilangeni</option><option value="SEK">Swedish Krona</option><option value="CHF">Swiss Franc</option><option value="TWD">New Taiwan Dollar</option><option value="TJS">Tajikistani Somoni</option><option value="THB">Thai Baht</option><option value="XOF">West African CFA Fra</option><option value="TOP">Tongan Pa?anga</option><option value="TTD">Trinidad And Tobago </option><option value="TND">Tunisian Dinar</option><option value="TRY">Turkish Lira</option><option value="TMT">Turkmenistan Manat</option><option value="AUD">Australian Dollar</option><option value="UGX">Ugandan Shilling</option><option value="UAH">Ukrainian Hryvnia</option><option value="AED">United Arab Emirates</option><option value="GBP">British Pound</option><option value="USD">United States Dollar</option><option value="UYU">Uruguayan Peso</option><option value="UZS">Uzbekistani Som</option><option value="VUV">Vanuatu Vatu</option><option value="VND">Vietnamese ??ng</option><option value="XPF">CFP Franc</option><option value="YER">Yemeni Rial</option><option value="ZMW">Zambian Kwacha</option><option value="BWP">Botswana Pula</option>
                       
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formMin">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control placeholder="Minimum" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formMax">
                            <Form.Label>&nbsp;</Form.Label>
                            <Form.Control placeholder="Maximum" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control  as="select" defaultValue="Select ">
                            <option value="">Select </option>
                            <option value="male">Male </option>
                            <option value="female">Female </option>
                            </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formyears">
                            <Form.Label>Years since driving Licence was issued</Form.Label>
                            <InputGroup className="custominput mb-2 mr-sm-2">
                            <Form.Control placeholder="At least" />
                            <InputGroup.Append>
                                        <InputGroup.Text>Years</InputGroup.Text>
                                        </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formexp">
                            <Form.Label>Driving<br/> experience</Form.Label>
                            <InputGroup>
                            <Form.Control placeholder="At least" />
                            <InputGroup.Append>
                                    <InputGroup.Text>Years</InputGroup.Text>
                                    </InputGroup.Append>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Alert  variant="success">
                        You may consider editing your filters or watering down your filters for fast search. Otherwise, go with the selected filters.
                        </Alert>
                        
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="apply" variant="primary" type="submit" > 
                            Apply
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Dashboard;