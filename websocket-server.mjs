import WS from 'ws'
import R from 'ramda'
import nanoid from 'nanoid'
/* eslint-disable no-param-reassign, no-magic-numbers */


const freeClients = []

const wss = new WS.Server({ port: 1488 })

wss.on('connection', (client) => {
  client.id = nanoid(16)

  freeClients.push(client)
})

setInterval(() => {
  if (freeClients.length > 1) {
    const odd = freeClients.length % 2 !== 0

    let extra

    if (odd) {
      extra = freeClients.pop()
    }

    const cltPairs = R.aperture(2, freeClients)

    freeClients.length = 0

    if (extra) freeClients.push(extra)

    console.log(extra)

    cltPairs.forEach((pair) => {
      pair.forEach((client) => {
        client.send(JSON.stringify({
          type: 'MATCH',
          payload: {
            ownID: client.id,
          },
        }))
        client.addEventListener('message', (msg) => {
          const { text, senderID } = JSON.parse(msg.data)

          pair.forEach((clt) => {
            clt.send(JSON.stringify({
              type: 'MESSAGE',
              payload: {
                key: nanoid(6),
                text,
                senderID,
                timestamp: Date.now(),
              },
            }))
          })
        })
      })
    })
  }
}, 3000)
