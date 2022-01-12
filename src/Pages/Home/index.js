import React, { useEffect, useState } from 'react'
import { Button } from '../../Component/Button'
import { Textfield } from '../../Component/Textfield'
import axios from 'axios'
import { styles } from './style'
import { fetchdata } from './api'
import { Loader } from '../../Component/Loader'

export default function Home() {
  const [City, setCity] = useState('')
  const [Weatherdata, setWeatherdata] = useState({ data: {} })
  const [Opendata, setOpendata] = useState(false)
  const [loading, setloading] = useState(false)
  const [errorcontent, seterrorcontent] = useState(false)




  const handlechangecity = (value) => {
    setCity(value)
  }
  const submit = () => {
    setloading(true)
    seterrorcontent(false)
    const inputdata = {
      city: City
    }
    fetchdata(inputdata).then(res => {
      if (res.data.error) {
        setOpendata(false)
        setloading(false)
        seterrorcontent(true)
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
      <div>
      {loading ?<div style={styles.loadingposition}><Loader fontSize = {80} /></div>  :
        Opendata ? <div>
          <p style={styles.haedcontent}>{Weatherdata.data.name}</p>
          <p style={styles.headlabel}>{Weatherdata.data.weather[0].description}</p>
          <p>{Weatherdata.data.main.temp}&deg;C from {Weatherdata.data.main.temp_min} to {Weatherdata.data.main.temp_max}&deg;C,wind {Weatherdata.data.wind.speed} m/s .clouds {Weatherdata.data.clouds.all} %,{Weatherdata.data.main.pressure}hpa</p>
          <p style={styles.headlabel}>Geo Cords [{Weatherdata.data.coord.lat},{Weatherdata.data.coord.lon}]</p>
        </div> :errorcontent ? <p style={{marginLeft:"5%",width:'50%',textAlign:'center'}}>No Data Found</p>: " "

      }
      </div>
    

    </div>
  )
}