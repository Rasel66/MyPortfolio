const sendEmailController = (req, res)=>{
    try {
        return res.status(200).send({
            success: true,
            message: 'Email sent successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Send email failed',
            error
        })
    }
}


module.exports = {sendEmailController};