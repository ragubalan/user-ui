import { config } from 'dotenv'
import Userservice from '../services/userservice.js'

config();

const country = new Userservice(process.env.COUNTRY_API_URL)
const user = new Userservice(process.env.API_URL)

export function add (req, res) {
    country.all().then((data) => {
      const countries = data.map((country) => country.name.common);
      res.render('add-user', {countries})
    });
}

export function confirm (req, res) {
  user.create(req.body).then((data) => {
    res.render('confirm-user', {user: data})
  });
}