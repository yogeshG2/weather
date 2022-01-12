import axios from 'axios'
export const fetchdata = (inputdata) => {
   return axios.post("https://knowyourclimate.herokuapp.com/weather/fetchdata", inputdata)
}