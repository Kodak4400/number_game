import { firestore } from 'firebase-admin'
import { applicationDefault, initializeApp } from 'firebase-admin/app'
import * as functions from 'firebase-functions'

initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://kodak-287815.firebaseio.com',
})

export const getScore = functions.https.onRequest((request, response) => {
  const ref = firestore().collection('scores')
  ref.get().then(snapshot => {
    response.json(snapshot.docs)
  })
  .catch(error => {
    response.status(500).send(error)
  })
})

export const helloGET = functions.https.onRequest((request, response) => {
  response.send('Hello World!!')
})
