interface Props {
  color: string
}

export const CloseIcon = ({color}: Props ) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g id="x-close">
<path id="Icon" d="M19.25 6.75L6.75 19.25M6.75 6.75L19.25 19.25" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
  )
}
