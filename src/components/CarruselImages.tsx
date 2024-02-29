'use client'
import { useState, useEffect } from "react"
import '@/styles/carrusel.css'
//let intervalo : NodeJS.Timeout;

export const CarruselImages = () => {
  const array = [
    {index:0, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel1.webp', description: 'construccions de obra'},
    {index:1, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel2.webp', description: 'vista panoramica'},
    {index:2, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel3.webp', description: 'obrero laborando'},]
  const [size, setSize] = useState(2)
  const [index, setIndex] = useState(0)
  const [newSelected, setNewSelected] = useState(true)

  useEffect(() => { 
     let intervalo = setInterval(() => {
      setIndex(prevState => {
        if (prevState >= size) return 0
        return prevState + 1
      })
    },5000)

    return () => clearInterval(intervalo)
  }, [newSelected, size])
  return (
    <div className="main-carrusel">
      <div className="container-carrusel">
        
        {
          array.map( img => <img 
            key={img.index} 
            src={img.url} 
            alt={img.description}
            className={`img ${img.index===index ? 'onfocusimg': ''}`} 
            />)
        }
      </div>
      
      <div className="nav-index-img">
        {array.map( e => {
          const selectIndex = () => {
            setNewSelected(prev => !prev)
            setIndex(e.index)
            
          }
          return <div key={e.index} 
          className={`indexImg ${e.index===index ? 'img-selected': ''}`} onClick={selectIndex}></div>
        })
        }
      </div>
      
    </div>
  )
}



// 'use client'
// import { useState, useEffect } from "react"
// import '@/styles/carrusel.css'
// //let intervalo : NodeJS.Timeout;

// export const CarruselImages = () => {
//   const array = [
//     {index:0, url:'Numero 1'},
//     {index:1, url:'Numero 2'},
//     {index:2, url:'Numero 3'},]
//   const [size, setSize] = useState(2)
//   const [index, setIndex] = useState(0)
//   const [newSelected, setNewSelected] = useState(true)

//   useEffect(() => {
//      let intervalo = setInterval(() => {
//       setIndex(prevState => {
//         if (prevState >= size) return 0
//         return prevState + 1
//       })
//     },5000)

//     return () => clearInterval(intervalo)
//   }, [newSelected, size])
//   return (
//     <div className="main-carrusel">
//       <div className="container">
//         {
//           array.map( e => <div 
//             key={e.index} 
//             className={`img ${e.index===index ? 'onfocusimg': ''}`}></div>)
//         }

//       </div>
//       <div className="nav-index-img">
//         {array.map( e => {
//           const selectIndex = () => {
//             setNewSelected(prev => !prev)
//             setIndex(e.index)
            
//           }
//           return <div key={e.index} 
//           className={`indexImg ${e.index===index ? 'img-selected': ''}`} onClick={selectIndex}></div>
//         })
//         }
//       </div>
//     </div>
//   )
// }
