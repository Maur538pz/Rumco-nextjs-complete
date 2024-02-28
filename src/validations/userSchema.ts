import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(3,{message: 'El nombre deberia tener almenos 3 caracteres'}).max(200),
    lastname: z.string().min(3,{message: 'El apellido deberia tener almenos 3 caracteres'}).max(200),
    email: z.string().email({message: 'Porfavor ingrese un correo valido'}),

    phoneNumber: z.string().min(1,{message: 'Este campo es obligatorio'}),
    message: z.string().max(500, {message: 'Texto muy largo'}).min(10,{message: 'El mensaje es muy corto'})
})