const { Router } = require('express')
const { sendEmail } = require('../utils/sendMail')

const router = Router()

router.get('/mail', (req, res) => {
    sendEmail()
    res.send('mail sent')
})


module.exports = router