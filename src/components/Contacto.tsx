
import { ReactNode } from "react"
import '@/styles/contact.css'

interface Props {
  title: string
  children: ReactNode
}

export const Contacto = ({title, children}: Props) => {
  return (
    <div className="contact">
      <h4 className="contact-title">{title}</h4>
      <div className="contact-body">{children}</div>
    </div>
  )
}
