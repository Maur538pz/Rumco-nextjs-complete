'use client'
import { useState, useEffect, useRef } from "react"
import '@/styles/carrusel2.css'

interface Image {
  index: number
  url: string
  description: string
}

// const images: Image[] = [
//   { index:0,url: 'https://peru.info/archivos/publicacion/268-imagen-1645152882020.jpg', description: '1'},{
//     index:1,url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIjm_BMHU6o-fjugOflIfVXGGDn0UJSfu_cGbQDRMI84Jyzjsr2cJOnbC9e2ohhmggTBKvky4o1nXy65S0kuNsv42wBvMlFJCY7yZ_Ah3hqXC7MJTT_GHhKEa3cIDsVPYcVJzN1p3gyPo/s1600/paisajes-naturales-en-venezuela.jpg', description: '2'
//   },{
//     index:2,url: 'https://static.vecteezy.com/system/resources/previews/032/499/297/non_2x/aerial-view-of-the-amazonas-jungle-landscape-with-river-bend-generative-ai-free-photo.jpg', description: '3'
//   }]

const images: Image[] = [
  {index:0, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel1.webp', description: 'construccions de obra'},
  {index:1, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel2.webp', description: 'vista panoramica'},
  {index:2, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel3.webp', description: 'obrero laborando'},]

export const CarruselImages2 = () => {
  const [ index, setIndex ] = useState(0)
  const [ valueDirection, setValueDirection ] = useState(-1)
  const [ classSliderFilm, setClassSliderFilm ] = useState('slider-fill')
  // const sizeArray = 3
  const [ toClass] = useState(['slider-fill','to-image2','to-image3'])
  // const [ iteration, setIteration ] = useState(0)
  const refIndex = useRef(index)
  const refDirection = useRef(valueDirection)

  useEffect(() => {
    refIndex.current = index
    refDirection.current= valueDirection
  },[index, valueDirection])

  useEffect(() => {
    const newDir = [0]
    const interval = setInterval(() => {
      
      if (refIndex.current === 0 || refIndex.current ===2) {
        newDir[0] = refDirection.current * -1
        setValueDirection(newDir[0]) 
        
        
        
      }
      

      let moduleIndex = refIndex.current % 3
      const initialClass = toClass.slice(0,(moduleIndex + 1)).reduce((acc, curr) => {
        return `${acc} ${curr}`
      },'')
      setClassSliderFilm(initialClass)
      setIndex(moduleIndex + newDir[0])

    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [toClass])

  return (
    <div className="container-carruse-slider">
      <div className="slider-window">
        <figure className={classSliderFilm}>
          {
            images.map( img => 
            <img 
              key={img.description} 
              src={img.url} 
              alt={img.description}
              className="image-slider-c" 

              style={{ left:`calc(${img.index * 100}% + ${img.index * 10 }px)`}}
            />)
          }
        </figure>

      </div>
      <div className="slider-nav-carrusel2">
        {
          images.map( img => <div className={`dot-index ${img.index===refIndex.current ? 'dot-select':''}`} key={img.description}></div>)
        }

      </div>
      

    </div>
  )
}




// 'use client'
// import { useState, useEffect, useRef } from "react"
// import '@/styles/carrusel2.css'

// interface Image {
//   index: number
//   url: string
//   description: string
// }

// // const images: Image[] = [
// //   { index:0,url: 'https://peru.info/archivos/publicacion/268-imagen-1645152882020.jpg', description: '1'},{
// //     index:1,url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIjm_BMHU6o-fjugOflIfVXGGDn0UJSfu_cGbQDRMI84Jyzjsr2cJOnbC9e2ohhmggTBKvky4o1nXy65S0kuNsv42wBvMlFJCY7yZ_Ah3hqXC7MJTT_GHhKEa3cIDsVPYcVJzN1p3gyPo/s1600/paisajes-naturales-en-venezuela.jpg', description: '2'
// //   },{
// //     index:2,url: 'https://static.vecteezy.com/system/resources/previews/032/499/297/non_2x/aerial-view-of-the-amazonas-jungle-landscape-with-river-bend-generative-ai-free-photo.jpg', description: '3'
// //   }]

// const images: Image[] = [
//   {index:0, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel1.webp', description: 'construccions de obra'},
//   {index:1, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel2.webp', description: 'vista panoramica'},
//   {index:2, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel3.webp', description: 'obrero laborando'},]

// export const CarruselImages2 = () => {
//   const [ index, setIndex ] = useState(0)
//   const [ valueDirection, setValueDirection ] = useState(-1)
//   const [ classSliderFilm, setClassSliderFilm ] = useState('slider-fill')
//   // const sizeArray = 3
//   const [ toClass] = useState(['slider-fill','to-image2','to-image3'])
//   // const [ iteration, setIteration ] = useState(0)
//   const refIndex = useRef(index)
//   const refDirection = useRef(valueDirection)

//   useEffect(() => {
//     refIndex.current = index
//     refDirection.current= valueDirection
//   },[index, valueDirection])

//   useEffect(() => {
//     const newDir = [0]
//     const interval = setInterval(() => {
      
//       if (refIndex.current === 0 || refIndex.current ===2) {
//         newDir[0] = refDirection.current * -1
//         setValueDirection(newDir[0]) 
        
        
        
//       }
      

//       let moduleIndex = refIndex.current % 3
//       const initialClass = toClass.slice(0,(moduleIndex + 1)).reduce((acc, curr) => {
//         return `${acc} ${curr}`
//       },'')
//       setClassSliderFilm(initialClass)
//       setIndex(moduleIndex + newDir[0])

//     }, 3000)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [toClass])

//   return (
//     <div className="container-carruse-slider">
//       <div className="slider-window">
//         <figure className={classSliderFilm}>
//           {
//             images.map( img => 
//             <img 
//               key={img.description} 
//               src={img.url} 
//               alt={img.description}
//               className="image-slider-c" 
//             />)
//           }
//         </figure>

//       </div>
//       <div className="slider-nav-carrusel2">
//         {
//           images.map( img => <div className={`dot-index ${img.index===refIndex.current ? 'dot-select':''}`} key={img.description}></div>)
//         }

//       </div>
      

//     </div>
//   )
// }
