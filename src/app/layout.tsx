import type { Metadata } from "next";
import { IBM_Plex_Sans} from 'next/font/google'
import "./globals.css";
import { NotificationsProvider} from '@/context/NotificationsContext'

const ibm_plex_sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','500', '600', '700'] })

export const metadata: Metadata = {
  title: "Rumco Perú Constructores",
  description: `Explora las posibilidades de construcción y remodelación en Rumco.pe, tu socio confiable para proyectos en Perú. Nos especializamos en la reparación de paredes, suelos, construcción de muros y terrazas, destacando por nuestra experiencia en albañilería y servicios de mantenimiento general de construcción. Nuestro equipo de albañiles locales se enorgullece de ofrecer servicios de alta calidad, desde la remodelación de baños y cocinas hasta el cambio de diseño interior.

  En Rumco.pe, no solo nos dedicamos a la construcción y reparación, sino que también nos apasiona el diseño arquitectónico. Transformamos tus ideas en realidad, brindando soluciones estéticas y funcionales para cada proyecto. Además, ofrecemos servicios integrales de remodelación y renovación, donde cada detalle cuenta.
  
  Como expertos en consultoría en construcción, estamos comprometidos a guiar cada paso de tu proyecto, asegurándonos de que se cumplan tus expectativas. No solo construimos estructuras, creamos hogares y espacios que reflejan tu visión única.
  
  Rumco.pe también se destaca en servicios de demolición, llevando a cabo procesos seguros y eficientes para preparar el terreno para tus nuevos proyectos. Confía en nosotros para un enfoque completo en construcción y remodelación, donde la calidad y la excelencia son nuestras principales prioridades.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={ibm_plex_sans.className}>
        <NotificationsProvider>
        {children}
        </NotificationsProvider>
      </body>
    </html>
  );
}
