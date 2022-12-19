import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({film}) => {
    const params = useParams()
    console.log(params)
    console.log(film)
    const el = film.find(film=>film.id===Number(params.id))
  return (
    <div>
        <h3 style={{color:"white"}}>test
        {el.Description}
        </h3>
   <iframe height={400} width={500} src={el.Trailer} frameBorder="0"></iframe>  
   
   </div>

  )
}

export default Description