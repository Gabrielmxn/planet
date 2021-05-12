import React, { useState, useEffect} from 'react'
import Planet from './planet/index'
import Form from './form/';

async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  console.log(response)
  let data = await response.json()
  console.log(data)
  return data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TypePlanets = {
  name: string;
  id: string;
  img_url: string;
  description: string;
  link: string;
  gray: string;
  title_with_underline: string;

}

const Planets = () => {
  const [planets, setPlanets] = useState([])
  useEffect(() => {
    getPlanets().then(result => {
     setPlanets(result.planets)
    })
  }, [])

  const addPlanet = (new_planet: []) => {
    setPlanets([...planets, ...new_planet])
    console.log(new_planet);
  }
  //removendo o ultimo elemento do array

    return (
      <div>
        <h4 className="titulo">Planet Liste</h4>
        <Form addPlanet={addPlanet}/>
        {planets.map((resultado: TypePlanets, index) => {
            return <Planet key={index}
            name={resultado.name}
            id={resultado.id}
            description={resultado.description}
            link={resultado.link}
            gray="awdasds"
            title_with_underline="dawdawd0"
            img_url={resultado.img_url}
            />
        })
        }
      </div>
    )
}
export default Planets