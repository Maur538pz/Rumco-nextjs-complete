import '@/styles/description.css'

interface Props {
    title: string
    text : string
    textHiden?: string
}
export const Description = ( { title, text, textHiden } : Props) => {
  return (
    <article className='article'>
        <h3 className='title-description'>{title}</h3>
        <p className='parrado'>{text}<span className='text-hiden'>{textHiden}</span></p>
    </article>
  )
}
