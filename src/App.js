import React from 'react'
import Getmovies from './pages/Getmovies.jsx';
import Partmovie from './pages/Partmovie.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Getmovies/>}/>
      <Route path="/partmovie" element={<Partmovie/>}/>

    </Routes>
    </BrowserRouter>
  )
}
export default App






















// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Card from 'react-bootstrap/Card';
// const Movie = () => {
//     let[data,setdata]=useState([])
//     let[search,setsearch]=useState("")
//         // key:"4010f125677ceb848cba3ea144e40c8c",    url:"https://api.themoviedb.org/3/trending/movie/day?api_key=4010f125677ceb848cba3ea144e40c8c&language=en-US"
//     useEffect(()=>{
//         let api=fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4010f125677ceb848cba3ea144e40c8c&language=en-US")
//         api.then(x=>x.json()).then(val=>{
//             setdata(val.results)
//         }).catch((e)=>console.log(e) )
//     },[])
//     function movieSearch(){
//         fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4010f125677ceb848cba3ea144e40c8c`).then(x=>x.json()).then(res=>setdata(res.results)).catch(console.log("api is not working"))
//     }
//     // console.log(data);
    
//   return (
//     <div>
//         {/* navbar */}
//         <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               value={search}
//               onChange={(e)=>setsearch(e.target.value)}
//             />
//             <Button variant="outline-success" onClick={movieSearch}>Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     {/* caurousel */}
//         <Carousel>
//       {data.map((x,y)=>{
//         return(
//             <div key={y}>
//             <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} alt='img'/>
//             <p className="legend">{x.title}</p>
//             <p>{x.vote_average}</p>
//             <p>{x.overview}</p>
//         </div>
//         )
//       })}
//      </Carousel>
//      {/* cards */}
//     <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
//     {
//         data.map(cards=>{
//             return(
//                 <>
//                 <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
//       <Card.Body>
//         <Card.Title>{cards.title}</Card.Title>
//         <Card.Text>
//          {cards.overview}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//                 </>
//             )
//         })
//      }
//     </section>
//     </div>
//   )
// }

// export default Movie













































// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useEffect, useState } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Card from 'react-bootstrap/Card';



// function App() {
//   let[state,setstate]=useState([]);
//   let[search,setsearch]=useState("")
//   useEffect(()=>{
//     fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=1fe4ba70475442225a237aefdf241318&language=en-US").then(res=>res.json())
//     .then(res1=>setstate(res1.results));
//   },[])
//   function moviesearch(){
//         fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1fe4ba70475442225a237aefdf241318`)
//         .then(x=>x.json()).then(res=>setstate(res.results))
//   }
//   // console.log(state);
  
  
//   return (
//      <>
//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container fluid>
//       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//           <Nav.Link href="#action1">Home</Nav.Link>
//           <Nav.Link href="#action2">Link</Nav.Link>
//           <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action4">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">
//               Something else here
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#" disabled>
//             Link
//           </Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//             onChange={(e)=>setsearch(e.target.value)}
//           />
//           <Button variant="outline-success" onClick={moviesearch}> Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   {/* // caurosel */}
//   <Carousel>
//    {state.map(x=>{
//     return(
    
//       <div>
//           <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}  alt=""/>
//           <div className="legend">
//           <p >{x.title}</p>
//           <p >{x.overview}</p>
//           <b>{x.vote_average}</b>

//           </div>
//       </div>
//     )
//   })}
//   </Carousel>
//   {/* card creation */}

//   <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
//     {state.map(cards=>{
//             return(
//                 <>
//                 <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
//               <Card.Body>
//                    <Card.Title>{cards.title}</Card.Title>
//                    <Card.Text>
//                   {cards.overview}
//                    </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//               </Card.Body>
//     </Card>
//                 </>
//             )
//         })
//      }
//     </section>
  
   
//   </>
//   );
// }

// export default App;
