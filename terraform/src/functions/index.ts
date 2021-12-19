import * as functions from 'firebase-functions'
import { initApp } from './init'

initApp

export const helloGET = functions.https.onRequest((request, response) => {
  response.send('Hello World!!')
})
