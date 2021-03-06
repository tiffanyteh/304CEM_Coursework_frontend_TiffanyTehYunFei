import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Background from './img/background.jpg';
import $ from 'jquery';

//display edit description successfully message
class Edit extends React.Component {

  constructor(props) {

    super(props);
  
  
    this.state = {
  
     temp1: ""

    }
  
   }  

   componentDidMount() {

    this.fetch();
  
   }

   fetch() {
    const queryParams = new URLSearchParams(window.location.search);
    const keyword = encodeURI(queryParams.get('d'));
    const keyword1 = encodeURI(queryParams.get('t'));
    var context = this;
  
    $.ajax({
      
     url: `http://localhost:5000/edit?d=${keyword}&t=${keyword1}`,
  
     method: 'GET',
  
     success: function(response) {
  
      context.setState({
  
          temp1: response.temp1
          
      });
  
     }
  
    });
  
   }

   renderElement(){
    if(this.state.temp1 == null){
      return <div><h4 style={{textAlign:"center"}}>Description Edited</h4>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>;
    }
    else{
      return 0;
    }
 }
  
  render(){
    return (
      <div style={{
        background: `url(${Background})`,  backgroundSize: 'cover'
      }}>
        <div>
         <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="/">News Hub</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Navbar.Brand href="/favourite">Favourites</Navbar.Brand>
              <Nav.Link href="/history">History</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
        </div>
        <br></br><br></br>
        { this.renderElement() }
        <br></br>
        <br></br>
        <br></br> <br></br>
      </div>
    );
  }
  
}
export default Edit;