'use client'
import { useId, useEffect } from "react"
import '@/styles/input.css'
import { UseFormRegister } from "react-hook-form"
import { useNotifications } from '@/hooks/useNotifications'
import { Roboto } from 'next/font/google'
const roboto = Roboto({subsets:['latin'], weight: ['400']})



type Inputs = {
  name: string
  lastname: string
  email: string
  phoneNumber: string
  message: string
}
interface Props {
    error?: boolean
    label: string
    helperText?: string
    register: UseFormRegister<Inputs>
    name: keyof Inputs
}

export const Input = (props: Props) => {
  const { error, helperText, label, name, register} = props
  const inputId = useId()
  const { ref, ...rest} = register(name)
  const { addNotification } = useNotifications()

  useEffect(() => {
    if (error) addNotification("correction")
  }, [error])


  const classnameInput = error ? 'input-container ierror' : 'input-container'
  const classnameLabel = error ? 'label lerror' : 'label'
  const classnameField = error ? 'input-field ferror' : 'input-field'

  return (
    // 'container'
    <div className={`${roboto.className} container`}>
      <div className={classnameInput}>
        <input 
        className={classnameField}
        type="text" 
        id={inputId} 
        {...rest} 
        ref={ref}
        required/>
        <label htmlFor={inputId} 
        className={classnameLabel}>
          {label}
        </label>
        {
          error && <img src="/icons/ErrorIcon.svg" alt="Campo llenado incorrectamente"  width={25} height={25} className="iconError"/>
        }
      </div>
      <span className="helperText">{helperText}</span>
    </div> 
  )
}
