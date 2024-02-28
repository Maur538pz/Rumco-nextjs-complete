import { Inputs } from '@/interfaces/Inputs'
interface Parameters {
  api: string
  data: Inputs
  onSucces?: () => void
  onError?: () => void 
}

export const postRequest = async ({api, data, onSucces, onError}: Parameters) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'applications/json'
      },
      body: JSON.stringify(data)
    })
     const result= await response.json()
     if (response.status === 200 || response.status === 201 ) {
      if (onSucces)onSucces()
     }
     else {
      if (onError) onError()
     }
    return result
  } catch (error) {
    if (onError) onError()
    console.log(error)
  }

}