import { KeyObject } from "crypto"

export interface Notification {
    id: string
    type: TypeNotification
    title :string
    text: string
    icon :string
    color: {fill: string, text: string}
}

export type TypeNotification = keyof typeof TemplateNotification
export const TemplateNotification = {
    correction : {
        title: 'Mensaje no enviado',
        text: 'Necesitas llenar correctamente los campos.',
        icon : '/icons/alert.svg',
        color: {fill:'#F4C519', text: '#994706'}
    },
    error: {
        title: 'Mensaje no enviado',
        text: 'Inténtalo en otro momento',
        icon : '/icons/errorNotifi.svg',
        color: {fill:'#D92010', text: '#F0F6FA'}
    },
    send: {
        title: 'Mensaje enviado',
        text: 'Te responderemos a la brevedad. ¡Gracias!',
        icon : '/icons/send.svg',
        color: {fill:'#077D55', text: '#F0F6FA'}
    }
}