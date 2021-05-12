import './style.css'

type Description = {
  texto: string;
  link: string;
}
const DescriptionWithLink = (props: Description) => {
  if(!props.texto){
    return null;
  }
  if(props.link){ 
    return(
    <>
      <p className='description'>{props.texto}</p>
      <a className='link-planet' href={props.link}>{props.link}</a>
    </>
    )
  }else {
    return(
      <>
        <p>{props.texto}</p>
      </>
    )
  }
}

export default DescriptionWithLink;