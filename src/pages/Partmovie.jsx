import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
const Partmovie = () => {
    var location=useLocation();

    let specificMovie=location.state.cards;

    console.log(specificMovie);
    let [trailer,setTrailers]=useState("");

    async function getTrailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=1fe4ba70475442225a237aefdf241318`).then(val=>val.json()).then(x=>setTrailers(x.results[0].key))

    }
    console.log(trailer)

    
  return (
    <div>
      <section>
      <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} alt="" style={{height:"100px",width:"100px"}}/>
      <h3>{specificMovie.title}</h3>
      <p>{specificMovie.overview}</p>
      <b>{specificMovie.vote_average}</b>
    
       <br />
     <button onClick={()=>getTrailer(specificMovie.id)} >Play trail</button>
      </section>
      <div>
    {trailer && <YouTube videoId={trailer}  />}
      </div>
    </div>

  )
}

export default Partmovie
