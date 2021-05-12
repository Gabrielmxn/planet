import React, { useState} from 'react';
import './style.css'
const initialState = 
  {
    name: ''
  }

type formPlanet = {
  satellitesAdd: (new_satellites: any)  => void;
  nome: string;
}
const Form = (props: formPlanet) => {
  const [fields, setFields] = useState(initialState)
  const handleChange = (event: any) => { setFields(
    {
      ...fields, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event: any) => {
    console.log('estamos no submit')
    props.satellitesAdd([fields])
    event.preventDefault();
    setFields(initialState);
  }
  return(
    <>
      <form id="formSatellites" onSubmit={handleSubmit}>
        <label htmlFor={props.nome}>Nome do satélite</label>
        <input id={props.nome} type="text" name="name" value={fields.name} onChange={handleChange}/>
        <input 
          type="submit" 
          value="Enviar"/>
      </form>
    </>
  )
} 

export default Form;