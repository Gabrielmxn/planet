
import './style.css';

type Gray = {
  url_img: string;
  gray: string;
}

const GrayImg = (props: Gray) => {
  return (
    <div className='img'>
      <img className={props.gray ? 'gray-img' : 'color-img'} src={props.url_img} alt=""/>
    </div>
  )
    
}

export default GrayImg