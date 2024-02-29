import { z } from 'zod'

export const userSchema = z.object({
    name: z.string()
    .min(1, { message: 'Este campo es requerido'})
    .min(3, { message: 'El nombre deberia tener almenos 3 caracteres'})
    .max(50, { message: 'El nombre es demasiado largo..'}),

    lastname: z.string()
    .min(1, { message: 'Este campo es requerido'})
    .min(3, { message: 'El apellido deberia tener almenos 5 caracteres'})
    .max(80, { message: 'El apellido es demasiado largo..'}),

    email: z.string()
    .min(1, { message: 'Este campo es requerido'})
    .min(10, { message: 'El email es demasiado corto...'})
    .email({ message: 'Porfavor ingrese un correo valido'}),

    phoneNumber: z.string()
    .min(1, { message: 'Este campo es requerido'})
    .refine( val => !isNaN(Number(val)), { message: 'Introduzca solo numeros porfavor'})
    .refine( val => val.length === 9, { message: 'El numero debe contener 9 digitos'}),
    message: z.string()
    .min(1, { message: 'Este campo es requerido'})
    .min(10,{ message: 'El mensaje es muy corto'})
    .max(500, { message: 'Texto muy largo'})
})