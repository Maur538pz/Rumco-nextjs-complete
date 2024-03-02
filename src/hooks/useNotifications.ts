'use client'
import { useContext } from 'react'
import { NotificationContext } from '@/context/NotificationsContext'
import { TypeNotification , Notification, TemplateNotification} from '@/interfaces/Notifications'

export const useNotifications = () => {
    const { notifications, setNotification } = useContext(NotificationContext )
    //const context = useContext(NotificationContext)
    //if (!context) throw new Error('Este componente no puede aceder al contexto del useNotifications')

    const addNotification = (type: TypeNotification) => {
      const ifSameTypeExists = notifications.some( noti => noti.type === type)
      if (ifSameTypeExists) {return}
      const newNotification: Notification  = {
        id: crypto.randomUUID(),
        type: type,
        title: TemplateNotification[type].title,
        text: TemplateNotification[type].text,
        icon: TemplateNotification[type].icon,
        color: TemplateNotification[type].color
      }
      setNotification(prevState => [...prevState,newNotification])
      setTimeout(() => {
        clearNotifications()
      }, 5000)

    }

    const deleteNotification = (id: string) => {
      const newNotifications = notifications.filter( notifi => notifi.id !== id)
      setNotification(newNotifications)
    }

    const clearNotifications = () => {
      setNotification([])
    }
 
  return {
    notifications,
    addNotification,
    quitarNotificacion: clearNotifications

  }
}