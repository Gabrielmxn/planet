import React, {  useState, useEffect} from 'react'
import GrayImg from '../../shared/gray_img'
import Form from './form'
import DescriptionWithLink from '../../shared/description_with_link'
import './style.css'

//Chamando a Api dos planetas
async function satellite(id: string){
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  console.log(data)
  return data;
}
type Planets = {
  name: string;
  id: string;
  img_url: string;
  description: string;
  link: string;
  title_with_underline: string;
  gray: string;
}

type TypeSatellites = {
  name: string;
}


//Criando um component funcional
const Planet = (props: Planets) => {
    //chamando o useState. Criando uma váriavel e um método.
    const [satellites, setSatellites] = useState([{
      name: '',
    }])
    let title;
   if(props.title_with_underline){
      title = props.name
    }else{
      title = props.name
    }
  const addSatellites = (new_satellites: any) => {
    setSatellites([...satellites, ...new_satellites])
  }
  //Atualiza sempre que um novo item é atualizado. Temos que colocar o [] no final para não ficar em loop
  useEffect(() => {
    satellite(props.id).then(satellite => {
      setSatellites(satellite.satellites)
    })
  }, [props.id]);

  return (
    <div id="planet">
      <h4 className='title'>{title}</h4>
      <GrayImg url_img={props.img_url} gray={props.gray}/>
      <DescriptionWithLink texto={props.description} link={props.link}/>
      <ul className='list-satellites'>
        {console.log(satellites)}
      {satellites.map((inx: TypeSatellites, index) => {
        return <li key={index}>{inx.name}</li>
      })}
      </ul>
      <Form satellitesAdd={addSatellites} nome={title}/>
    </div>
  )
}
export default Planet