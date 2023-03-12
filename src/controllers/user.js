import { config } from 'dotenv'
import Userservice from '../services/userservice.js'

config();

const country = new Userservice(process.env.COUNTRY_API_URL)

export function add (req, res) {
    country.all().then((data) => {
      const countries = data.map((country) => country.name.common);
      res.render('add-user', {countries})
    });
}