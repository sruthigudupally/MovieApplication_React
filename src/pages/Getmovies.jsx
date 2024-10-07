import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';



function Getmovies() {
  let[state,setstate]=useState([]);
  let[search,setsearch]=useState("")
  let navigate = useNavigate();
  
  
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=1fe4ba70475442225a237aefdf241318&language=en-US").then(res=>res.json())
    .then(res1=>setstate(res1.results));
  },[])
  function moviesearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1fe4ba70475442225a237aefdf241318`)
        .then(x=>x.json()).then(res=>setstate(res.results))
  }
  // console.log(state);
  
  
  return (
     <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setsearch(e.target.value)}
          />
          <Button variant="outline-success" onClick={moviesearch}> Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {/* // caurosel */}
  <Carousel>
   {state.map((x,y)=>{
    return(
    
      <div key={y} >
          <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}  alt=""/>
          
          <p >{x.title}</p>
          <p >{x.overview}</p>
          <b>{x.vote_average}</b>

          
      </div>
    )
  })}
  </Carousel>
  {/* card creation */}

  <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
    {state.map(cards=>{
            return(
                <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
              <Card.Body>
                   <Card.Title>{cards.title}</Card.Title>
                   <Card.Text>
                  {cards.overview}
                   </Card.Text>
              <Button  onClick={()=>navigate("/partmovie",{state:{cards}})}>more details</Button>
            
              </Card.Body>
    </Card>
                </>
            )
        })
     }
    </section> 
  
   
  </>
  );
}

export default Getmovies;
