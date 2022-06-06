const jwt = require('jsonwebtoken');
import { regex } from '../../../utils/data'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email = '', password = '' } = req.body
      const errors = []
      if (!regex.email.test(email)) {
        errors.push('Wrong mail format')
      }
      if (!regex.password.test(password)) {
        errors.push('Wrong password format')
      }
      if (errors.length) {
        res.status(422).json({ error: errors })
      }
      jwt.sign(email, 'secret_key', (err, token) => {
        if (err) {
          res.status(400).send({ msg: 'Error' })
        } else {
          res.send({ msg: 'success', token: token })
        }
      })
    } catch (err) {
      console.log('err', err)
      res.status(500).json({ error: 'failed to load data' })
    }
  } else {
    res.status(404).json({ error: 'Page not found' })
  }
}
