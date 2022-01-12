import axios from 'axios'
export const fetchdata = (inputdata) => {
   return axios.post("http://localhost:8080/weather/fetchdata", inputdata)
}