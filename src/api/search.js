// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Store, donde tenemos almacenado nuestro token
import store from '../store/index'
// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región
import { locales } from '../utils/regions'

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = 'https://'
const host = '.api.blizzard.com/'

function getApiAccount ({ region, account }) {
  const resource = `d3/profile/${account}/`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

export {
  getApiAccount
}
