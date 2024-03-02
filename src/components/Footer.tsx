import LogoFacebook from '../../public/icons/logo-facebook.svg'
import LogoInstagram from '../../public/icons/logo-instagram.svg'
import LogoTiktok from '../../public/icons/logo-tiktok.svg'
import LogoLinkedin from '../../public/icons/logo-linkedin.svg'
import LogoRumcoFooter from '../../public/icons/Logo-footer.svg'
import { Contacto } from './Contacto'
import '@/styles/footer.css'

export const Footer = () => {
  return (
    <footer className='container-footer'>
      <section className='footer-main'> 
        <figure>
          <LogoRumcoFooter/>
        </figure>
        <div className='contact-container'>
          <Contacto title='Teléfono'>
            <span>+51 972 301 138</span>
          </Contacto>
          <Contacto title='Redes sociales'>
            <a href="https://www.facebook.com/profile.php?id=61555172884813&mibextid=ZbWKwL" target='_blank'><LogoFacebook className='icon-footer-redes'/></a>
            <a href="https://www.instagram.com/rumco.pe/" target='_blank'><LogoInstagram className='icon-footer-redes'/></a>
            <a href="https://www.tiktok.com/@rumco.pe?_t=8k02wPou6g1&_r=1" target='_blank'><LogoTiktok className='icon-footer-redes'/></a>
            <a href="https://www.linkedin.com/company/rumco-pe/" target='_blank'><LogoLinkedin className='icon-footer-redes'/></a>
          </Contacto>
        </div>
      </section>

    </footer>
  )
}
