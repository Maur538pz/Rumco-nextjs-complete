import { transporter} from '@/libs/nodemailer'
import { prisma } from '@/libs/prisma'

const admins = ['jhualpal@unsa.edu.pe']


export interface DataSend {
  name: string
  lastname: string
  email: string
  phoneNumber: string
  message: string
}
export async function sendInfoAdmins (data: DataSend) {
  try {
    const res= await transporter.sendMail({
      from: `Nose we 👻<${process.env.AUTH_USER_GMAIL}>`,
      to:`${admins[0]}`,
      subject: 'Prueva de envio',
      text: `${JSON.stringify(data)}`
    })
    return {send: true, status:200}
  } catch (error) {
    return {send: false, status: 500}
  }
}


export async function searchEmail_or_Number (email: string, phoneNumber: string){
  const res = await prisma.infoRedirect.findFirst({
    where: {
      OR: [
        {email},
        {phoneNumber}
      ]
    }
  })
  console.log('respuesta de coincidencias en la db...')
  console.log(res)
  if (res?.registerdAt) {
    return {id: res.id, isSaved: true}
  }
  return {isSaved: false}
  
}

export async function changeStateRedirect (id: number) {
  const res = await prisma.infoRedirect.update({
    where: {
      id
    },
    data: {
      redirect:true
    }
  })
  console.log('-----------------------UPDATE-REDIRECT--------------')
  console.log(res)
}

export async function saveInformation (data: DataSend) {
  try {
    const queryResult = await prisma.infoRedirect.create({
      data: {
        ...data
      }
    })
    return {
      registered: true ,
      id: queryResult.id
    }
  } catch (error) {
    return {registered: false}
  }
}