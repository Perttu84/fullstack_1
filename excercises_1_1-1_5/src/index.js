import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
    )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
    )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa part={props.osat[0].nimi} exercises={props.osat[0].tehtavia}/>
      <Osa part={props.osat[1].nimi} exercises={props.osat[1].tehtavia}/>
      <Osa part={props.osat[2].nimi} exercises={props.osat[2].tehtavia}/>
    </div>
    )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    </div>
    )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  

  return (
    <div>
      <Otsikko name={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)