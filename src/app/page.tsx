import { SectionHero } from '@/components/SectionHero'
import { ServicesSection1 } from '@/components/ServicesSection1'
import { ServicesSection2 } from '@/components/ServicesSection2'
import { Notifications} from '@/components/Notifications'
import { Form2 } from '@/components/Form2';
import { Footer } from '@/components/Footer';
import { EsloganBackground } from '@/components/EsloganBackground'
export default function Home() {
  return (
    <main>
      <Notifications/>
      <EsloganBackground/>
      <SectionHero/>
      <ServicesSection1/>
      <ServicesSection2/>
      <Form2/>
      <Footer/>
    </main>
  );
}
