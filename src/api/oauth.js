import { post } from 'axios'

// Env
const clientId = '7be738e9d4dc4e02a62eaae1aea06648'
const clientSecret = 'qs4Z1IhuuJUIFal7cqL8IcuXFtYRDS4O'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
