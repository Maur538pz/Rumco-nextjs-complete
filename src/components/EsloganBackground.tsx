import '@/styles/eslogan.css'
import LogoRumcoHeader from '../../public/icons/logoRumco.svg'

export const EsloganBackground = () => {
  return (
    <>
      <img src="/images/backgroundfixed.webp" alt="edificio en construcion" className='fondo-fixed'/>
      <section className='header-rumco-eslogan'>
        <LogoRumcoHeader className='logo-rumco'/>
          <h1 className='eslogan-title'>Tu hogar perdura en el tiempo y abraza tu historia con cada uno de sus detalles</h1>
      </section>
    </>

  )
} 
