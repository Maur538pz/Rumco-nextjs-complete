'use client'
import { useNotifications } from '@/hooks/useNotifications'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import '@/styles/notifications.css'
import { Notification } from '@/interfaces/Notifications'

export const Notifications = () => {
  const { notifications, quitarNotificacion } = useNotifications()
  const [ parent ] = useAutoAnimate()
  const notificationsReducers = notifications.reduce((acc : Notification[], curr) => {
    if (!acc.some(n => n.type === curr.type)) {
      acc.push(curr)
    }
    return acc
  }, [])
  return (
    <div className='container-notifications'>
      <ul ref={parent}>
        {
          notificationsReducers.map(notifi => 
          <li key={notifi.id}
          className='notification'  
          style={{backgroundColor: `${notifi.color.fill}`}}>
            <div className='cont-prin'>
              <img src={notifi.icon} alt="icono notificacion" width={25} height={25}/>
              <div>
                <strong style={{color: `${notifi.color.text}`}}>{notifi.title}</strong>
                <p style={{color: `${notifi.color.text}`}}>{notifi.text}</p>
              </div>
            </div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='closeIcon' onClick={quitarNotificacion}>
              <g id="x-close">
              <path id="Icon" d="M19.25 6.75L6.75 19.25M6.75 6.75L19.25 19.25" stroke={notifi.color.text} strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </li>)
        }
      </ul>
    </div>
  )
}