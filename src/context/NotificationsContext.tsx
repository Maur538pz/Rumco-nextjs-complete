'use client'
import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'
import { Notification } from '@/interfaces/Notifications'

interface ValuesNotificationContext {
    notifications: Notification[]
    setNotification: Dispatch<SetStateAction<Notification[]>>

}

export const NotificationContext = createContext<ValuesNotificationContext>({} as ValuesNotificationContext)



interface Props {
    children: ReactNode
}
export const NotificationsProvider = ({children}: Props) => {
    const [notifications, setNotification] = useState<Notification[]>([])
  return (
    <NotificationContext.Provider value={{
        notifications,
        setNotification
    }}>
        {children}
    </NotificationContext.Provider>
  )
}