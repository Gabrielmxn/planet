import React, { useState} from 'react';
import "./style.css"
const initialState = {
  name: '',
  description: '',
  link: '',
  img_url: ''
}
const Form = (props) => {
  const [fields, setFields] = useState(initialState)
  const handleChange = event => { setFields(
    {
      ...fields, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }


  const handleSubmit = event => {
    props.addPlanet([fields])
    event.preventDefault();
    setFields(initialState);
    console.log(fields)
  }
  return(
    <>
      <form id="formPlanet" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" name="description" value={fields.description} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="link">link</label>
          <input id="link" type="text" name="link" value={fields.link} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="img_url">img_url</label>
          <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleChange}/>
        </div>
        <br/>
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
} 

export default Form;