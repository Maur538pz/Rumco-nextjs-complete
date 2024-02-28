import '@/styles/servicesSection1.css'
import { Description } from '@/components/Description'

export const ServicesSection1 = () => {
  return (
    <section className='serviceSection'>
        <div className='part1'>
            <h2 className='title'>
                Servicios personalizados
            </h2>
            <div className='cont-part1'>
                <div className='cont-descriptions1'>
                    <Description 
                    title='Construcción' 
                    text='Desde cimientos hasta acabados finales. '
                    textHiden='Te ofrecemos nuestros servicios de alta calidad, cumpliendo plazos y presupuestos, para proyectos residenciales.'/>
                    <Description 
                    title='Mantenimiento general' 
                    text='Nuestro equipo calificado garantiza la eficiencia y durabilidad de cada arreglo, asegurando la funcionalidad y seguridad de tu hogar.'
                    textHiden='Ofrecemos servicios integrales de mantenimiento para hogares, cubriendo desde reparaciones básicas hasta renovaciones mayores. '/>
                </div>
                <img src="https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/2doview1.webp" alt="img1" className='firt-image'/>
            </div>

        </div>
        <div className='part2'>
            <div className='cont-description2'>
                <Description 
                title='Diseño arquitectónico' 
                text='Diseñamos espacios a medida, fusionando creatividad y funcionalidad '
                textHiden='para crear ambientes únicos que se adaptan a tus necesidades específicas.'/>
                <Description 
                title='Remodelación y renovación' 
                text='Transformamos espacios mediante remodelaciones y renovaciones que combinan diseño innovador con calidad constructiva. '
                textHiden='Desde actualizaciones menores hasta cambios completos, nuestro enfoque es revitalizar tu espacio con estilo y eficiencia.'/>
            </div>
            <img src="https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/2doview2.webp" alt="img2" className='second-image'/>

        </div>
    </section>
  )
}