import { NextResponse } from "next/server";
import { searchEmail_or_Number, sendInfoAdmins, DataSend, saveInformation, changeStateRedirect} from '@/utils/functionsRedirects'

export function GET (request :Request) {
  return NextResponse.json({
    message: 'Hola we ...'
  })
}



export async function POST (request: Request) {
  try {
    const { name, lastname, email, phoneNumber, message} = await request.json()

    const data: DataSend = {
      name,
      lastname,
      email,
      phoneNumber,
      message
    } 
    // * primero comprovamos si ya se registo el numero o el email
    const resultSearch = await searchEmail_or_Number(email, phoneNumber)
  
    if (resultSearch.isSaved) {
        const resultSend = await sendInfoAdmins(data)
        if (resultSend.send) {
          return NextResponse.json(
            {message: 'Email o numero registrado mensaje redirijido correctamente!'},
            {status: 201})
        }
    }
    else {
      const resultSaveInformation = await saveInformation(data)
      if (resultSaveInformation.registered){
        const resultSend = await sendInfoAdmins(data)
        if (resultSend.send && resultSaveInformation.id){
          changeStateRedirect(resultSaveInformation.id)
          return NextResponse.json(
            {message: 'Redireccion Satisfactoria!'},
            {status: 200})
        }
      }
    }
    return NextResponse.json(
      {message : "Algo salio mal... :'("},
    {status: 500})
  } catch (error) {
    return NextResponse.json(
      {message : "Error Fatal"},
      {status: 501})
  }
}