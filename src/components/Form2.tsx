'use client'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/validations/userSchema'
import '@/styles/form.css'
import { useNotifications } from '@/hooks/useNotifications'
import { Inputs } from '@/interfaces/Inputs'
import { postRequest } from '@/utils/sendServer'
import { useState } from 'react'
import IconsSendSuccesfully from '../../public/icons/Illustration.svg'

const api = 'http://localhost:3000/api/redirects'



export const Form2 = () => {
  const { register, formState:{errors}, reset, handleSubmit} = useForm<Inputs>({
    resolver: zodResolver(userSchema)
  })
  const { addNotification } = useNotifications()
  const [playAnimation, setPlayAnimation] = useState(false)

  const  addNotifiError = () => {
    addNotification('error')
  }

  const addNotofiSend = () => {
    addNotification('send')
    reset()
    setPlayAnimation((prevState) => !prevState)
  }
 
  const handleSubmit2 = async ( data: Inputs) => {
    setPlayAnimation((prevState) => !prevState)
    //const res = await postRequest({api, data, onSucces: addNotofiSend, onError: addNotifiError})
    //console.log(res)
  }

  const classForm = playAnimation ? 'content-form animation' : 'content-form'
  const classCircle = playAnimation ? 'cont-animation-send_circle animation-circle' : 'cont-animation-send_circle'
  const classIconSendSuccesfully = playAnimation ? 'icon-succesfully icon-animation' : 'icon-succesfully'
  const classTextSendAnimation = playAnimation ? 'cont-animation-send_text text-animation' : 'cont-animation-send_text'
  return (
    <section className='section-form'>
      <div className='cont-animation-send'>
        <div className={classCircle}>
          <IconsSendSuccesfully className={classIconSendSuccesfully}/>
        </div>
        <div className={classTextSendAnimation}>
          <strong className='text-animation-title'>Mensaje enviado</strong>
          <span className='text-animation-p'>Te contactaremos por el correo y el número proporcionados.</span>
        </div>
      </div>
      <div className={classForm}>
        <h2 className='title-form'>Déjanos tus datos y te contactarémos</h2>
        <p className='text-form'>Déjanos tus datos para brindarte mayor información y nos pondremos en contacto contigo, o escribe a nuestro WhatsApp para conversar con nuestro representante.</p>


        <form
          onSubmit={handleSubmit(handleSubmit2)}
          className='form'
          method='POST'
        >
          <div className='firts-inputs'>
          <Input 
          label='Nombres'
          register={register}
          name='name'
          error={Boolean(errors.name)}
          {...(errors.name && {helperText: `${errors.name.message}`})}
          />
          
          <Input
          label='Apellidos'
          register={register}
          name='lastname'
          error={Boolean(errors.lastname)}
          {...( errors.lastname && { helperText: `${errors.lastname.message}`})}
          />


          <Input
          label='Correo'
          register={register}
          name='email'
          error={Boolean(errors.email)}
          {...( errors.email && { helperText: `${errors.email.message}`})}
          />


          <Input
          label='Telefono'
          register={register}
          name='phoneNumber'
          error={Boolean(errors.phoneNumber)}
          {...( errors.phoneNumber && { helperText: `${errors.phoneNumber.message}`})}
          />
          </div>
          <Input
          label='Mensaje'
          register={register}
          name='message'
          error={Boolean(errors.message)}
          {...( errors.message && { helperText: `${errors.message.message}`})}
          />
          <button type='submit' className='buttonSubmit'>Enviar</button>
        </form>
      </div>
    </section>
  )
}







// 'use client'
// import { SubmitHandler, useForm, Form } from 'react-hook-form'
// import { Input } from '@/components/Input'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { userSchema } from '@/validations/userSchema'
// import '@/styles/form.css'
// import { useNotifications } from '@/hooks/useNotifications'

// interface Inputs {
//   name: string
//   lastname: string
//   email: string
//   phoneNumber: string
//   message: string
// }

// export const Form2 = () => {
//   const { register, formState:{errors}, control} = useForm<Inputs>({
//     resolver: zodResolver(userSchema)
//   })
//   const { addNotification } = useNotifications()

//   const  addNotifiError = () => {
//     addNotification('error')
//   }

//   const addNotofiSend = () => {
//     addNotification('send')
//   }

//   return (
//     <section className='section-form'>
//       <div className='content-form'>
//         <h2 className='title-form'>Déjanos tus datos y te contactarémos</h2>
//         <p className='text-form'>Déjanos tus datos para brindarte mayor información y nos pondremos en contacto contigo, o escribe a nuestro WhatsApp para conversar con nuestro representante.</p>
//         <Form 
//           action="http://localhost:3000/api/redirects"
//           onSuccess={addNotofiSend}
//           onError={addNotifiError}
//           control={control}
//           className='form'
//         >
//           <div className='firts-inputs'>
//           <Input 
//           label='Nombres'
//           register={register}
//           name='name'
//           error={Boolean(errors.name)}
//           {...(errors.name && {helperText: `${errors.name.message}`})}
//           />
          
//           <Input
//           label='Apellidos'
//           register={register}
//           name='lastname'
//           error={Boolean(errors.lastname)}
//           {...( errors.lastname && { helperText: `${errors.lastname.message}`})}
//           />


//           <Input
//           label='Correo'
//           register={register}
//           name='email'
//           error={Boolean(errors.email)}
//           {...( errors.email && { helperText: `${errors.email.message}`})}
//           />


//           <Input
//           label='Telefono'
//           register={register}
//           name='phoneNumber'
//           error={Boolean(errors.phoneNumber)}
//           {...( errors.phoneNumber && { helperText: `${errors.phoneNumber.message}`})}
//           />
//           </div>
//           <Input
//           label='Mensaje'
//           register={register}
//           name='message'
//           error={Boolean(errors.message)}
//           {...( errors.message && { helperText: `${errors.message.message}`})}
//           />
//           <button type='submit' className='buttonSubmit'>Enviar</button>
//         </Form>
//       </div>
//     </section>
//   )
// }