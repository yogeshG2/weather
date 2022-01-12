import React, { useEffect, useState } from 'react'
import { Button } from '../../Component/Button'
import { Textfield } from '../../Component/Textfield'
import axios from 'axios'
import { styles } from './style'
import { fetchdata } from './api'

export default function Home() {
  const [City, setCity] = useState('')
  const [Weatherdata, setWeatherdata] = useState({ data: {} })
  const [Opendata, setOpendata] = useState(false)
  const [loading, setloading] = useState(false)



  const handlechangecity = (value) => {
    setCity(value)
  }
  const submit = () => {
    setloading(true)
    const inputdata = {
      city: City
    }
    fetchdata(inputdata).then(res => {
      if (res.data.error) {
        setOpendata(false)
        setloading(false)
      }
      else {
        setWeatherdata({ ...Weatherdata, data: res.data })
        setOpendata(true)
        setloading(false)
      }

    })
  }
  return (
    <div>
      <p style={styles.headlabel}>Find a Weather of a city</p>

      <div style={styles.container}>
        <Textfield
          onChange={(e) => handlechangecity(e.target.value)}
        />
        <Button onClick={submit} />
      </div>
      {loading ? <i className='fa fa-spinner fa-spin' style={{ fontSize: 80, marginLeft: '20%' }}></i> :
        Opendata ? <div>
          <p style={styles.haedcontent}>{Weatherdata.data.name}</p>
          <p style={styles.headlabel}>{Weatherdata.data.weather[0].description}</p>
          <p>{Weatherdata.data.main.temp}&deg;C from {Weatherdata.data.main.temp_min} to {Weatherdata.data.main.temp_max}&deg;C,wind {Weatherdata.data.wind.speed} m/s .clouds {Weatherdata.data.clouds.all} %,{Weatherdata.data.main.pressure}hpa</p>
          <p style={styles.headlabel}>Geo Cords [{Weatherdata.data.coord.lat},{Weatherdata.data.coord.lon}]</p>
        </div> : " "

      }

    </div>
  )
}