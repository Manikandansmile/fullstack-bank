import {
  API_URL
} from '../_constants/api.constants'
import userAuthHeader from '../_helpers/userAuthHeader'

const transactionServices = {
  transferMoney,
  getTransLogs,
}

function handleResponse(res) {
  if (!res.ok) {
    if (res.status === 400) {
      return Promise.reject('Invalid login')
    }
  }
  return res.json()
}

function transferMoney(value, fromId, toId) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userAuthHeader().token
    },
    body: JSON.stringify({ value, fromId, toId })
  }

  return fetch(`${API_URL}/api/transferMoney`, request)
    .then(handleResponse)
    .then((res) => {
      console.log('SERVICE')
      console.log(res)
      return res
    })
}

function getTransLogs() {
  const request = {
    TYPE: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userAuthHeader().token
    }
  }

  return fetch(`${API_URL}/api/getTransLogs`, request)
    .then(handleResponse)
    .then((res) => {
      return res
    })
}

export default transactionServices