// 'use client'
// import { SubmitHandler, useForm } from 'react-hook-form'
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

// export const Form = () => {
//   const { register, handleSubmit, formState:{errors}, watch, control} = useForm<Inputs>({
//     resolver: zodResolver(userSchema)
//   })
//   const { addNotification } = useNotifications()


//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     if (data) {
//       console.log(data)
//       return 1
//     }
//     console.log('no hay data es decir hay errores..')
//   }
//   const  addNot = () => {
//     addNotification('error')
//     console.log('raaa')
//   }

//   const onSubmit2 = data => {
//     if (Object.keys(errors).length > 0) {
//       alert('Por favor, corrige los errores en el formulario.');
//     } else {
//       console.log(data);
//       alert('Formulario enviado con éxito.');
//     }
//   };

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit2)}
//     className='form'
//     onError={addNot}
    
//     >
//       <Input 
//       label='Nombres'
//       register={register}
//       name='name'
//       error={Boolean(errors.name)}
//       {...(errors.name && {helperText: `${errors.name.message}`})}
//       />
      
//       <Input
//       label='Apellidos'
//       register={register}
//       name='lastname'
//       error={Boolean(errors.lastname)}
//       {...( errors.lastname && { helperText: `${errors.lastname.message}`})}
//       />


//       <Input
//       label='Correo'
//       register={register}
//       name='email'
//       error={Boolean(errors.email)}
//       {...( errors.email && { helperText: `${errors.email.message}`})}
//       />


//       <Input
//       label='Telefono'
//       register={register}
//       name='phoneNumber'
//       error={Boolean(errors.phoneNumber)}
//       {...( errors.phoneNumber && { helperText: `${errors.phoneNumber.message}`})}
//       />
//       <Input
//       label='Mensaje'
//       register={register}
//       name='message'
//       error={Boolean(errors.message)}
//       {...( errors.message && { helperText: `${errors.message.message}`})}
//       />
//       <button type='submit'>Enviar</button>
//       <div>{JSON.stringify(watch(), null, 2)}</div>
        
//     </form>
//     <button onClick={addNot}>Agregar notificacion</button>
//     </>
//   )
// }