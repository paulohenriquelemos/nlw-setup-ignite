import WebPush from 'web-push'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

// esse método abaixo serve para mostrar e pegar o publicKey e privateKey
// console.log(WebPush.generateVAPIDKeys())

const publicKey =
  'BJLQlj0ZXqCZTeRkfNK5i-oa89B_qzG_jd3w238gxpK7lzF1PFZH7rQobFLKXPA3KYtmCxfwF1Z-nTbMbrfmpHw'
const privateKey = '94NzH5hoFCDbhot60AF0fzGmm7DooGMimKole0Q6xXs'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationsRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Hello do Back-end')
    }, 5000)

    return reply.status(201).send()
  })
}
