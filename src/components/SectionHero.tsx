import '@/styles/sectionHero.css'
import { CarruselImages2 } from '@/components/CarruselImages2'
import { CarruselImages } from '@/components/CarruselImages'

export const SectionHero = () => {
  return (
  <div className='hero-contain-main'>
    <section className="card">
      <div className="cont-text">
        <p className="text">Nuestro equipo de expertos se encarga minuciosamente de cada detalle para garantizar la perfección en tu proyecto. <span className='aditionalText'>Calidad en cada paso, para un resultado que superará tus expectativas.</span></p>
        <button className="button-hero-section"><a href="#formulario" className='a-button-hero-section'>Contáctanos</a></button>
      </div>
      <div className='cont-carrusel-hero'>
        <CarruselImages2/>
        {/* <CarruselImages/> */}
      </div>
    </section>
  </div>
  )
}



// import '@/styles/sectionHero.css'
// import { CarruselImages } from './CarruselImages'

// export const SectionHero = () => {
//   return (
//   <div className='hero-contain-main'>
//     <section className="card">
//       <div className="cont-text">
//         <p className="text">Nuestro equipo de expertos se encarga minuciosamente de cada detalle para garantizar la perfección en tu proyecto. <span className='aditionalText'>Calidad en cada paso, para un resultado que superará tus expectativas.</span></p>
//         <button className="button">Contáctanos</button>
//       </div>
//       <div className='img'>
//         <div className='img-carrusel'></div>
//         <nav></nav>
//       </div>
//     </section>
//   </div>
//   )
// }
