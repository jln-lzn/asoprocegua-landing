import axios from 'axios'

const sendEmailInstance = axios.create({
  baseURL: 'https://api.sendinblue.com/',
  timeout: 6000,
  headers: { 'api-key': process.env.NEXT_PUBLIC_SENDING_BLUE_KEY },
})

export default async function sendEmailSB(templateId, sendTo, data) {
  console.log('NEXT_PUBLIC_SENDING_BLUE_KEY', process.env.NEXT_PUBLIC_SENDING_BLUE_KEY)

  return await sendEmailInstance.post('v3/smtp/email', {
    templateId: templateId,
    to: sendTo.map((email) => {
      return { email }
    }),
    params: data,
  })
}