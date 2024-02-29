
'use client'
import { useId, useEffect } from "react"
import '@/styles/inputTextArea.css'
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

export const InputTextArea = (props: Props) => {
  const { error, helperText, label, name, register} = props
  const inputId = useId()
  const { ref, ...rest} = register(name)
  const { addNotification } = useNotifications()

  useEffect(() => {
    if (error) addNotification("correction")
  }, [error])


  // const classnameInput = error ? 'input-container ierror' : 'input-container'
   const classnameInput = 'textarea-container'

  const classnameLabel = error ? 'label-textarea lerror-inpt' : 'label-textarea'
  const classnameField = error ? 'textarea-field ferror-inpt' : 'textarea-field'

  return (
    // 'container'
    <div className={`${roboto.className} container-textarea`}>
      <div className={classnameInput}>
        {/* <input 
        className={classnameField}
        type="text" 
        id={inputId} 
        {...rest} 
        ref={ref}
        required/> */}
        <textarea 
        cols={2} 
        rows={20} 
        className={classnameField}
        id={inputId}
        {...rest} 
        ref={ref}
        required
        ></textarea>


        <label htmlFor={inputId} 
        className={classnameLabel}>
          {label}
        </label>

        {
          error && <img src="/icons/ErrorIcon.svg" alt="Campo llenado incorrectamente"  width={25} height={25} className="iconError-textarea"/>
        }
      </div>
      <span className="helperText">{helperText}</span>
    </div> 
  )
}
