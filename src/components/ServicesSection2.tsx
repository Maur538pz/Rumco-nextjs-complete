import { Description } from "./Description"
import '@/styles/servicesSection2.css'
export const ServicesSection2 = () => {
  return (
    <section className="main-section-2">
      <div className="service-section-container">
        <article className="first-article-services2">
          <img src="https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/end1.webp" alt="ingenieros expertos" className="img-services2"/>
          <Description
          title="Consultoría en construcción"
          text="Te brindamos consultoría experta en construcción, proporcionando asesoramiento estratégico y soluciones personalizadas para proyectos de todo tipo. "
          textHiden="Nuestro equipo te entregará orientación técnica, gestión de riesgos y análisis detallado para garantizar el éxito y la eficiencia en cada etapa del proceso constructivo."
          />
        </article>
        <article className="second-article-services2 ">
          <img src="https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/end2.webp" alt="servicio de demolicion" className="img-services2 hiden-img"/>
          <Description
          title="Servicios de demolición"
          text="Desde evaluaciones de seguridad hasta la ejecución eficiente de demolición controlada, garantizando la gestión adecuada de residuos y la seguridad del sitio. "
          />
        </article>
      </div>
    </section>
  )
}
