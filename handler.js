const { uploadProcessData, getTheData } = require("./lib/firebase")

async function handler(req, method) {
    try {
        if (method === "GET") {
            const path = req.path

            const testUrl = `https://i.ibb.co/X4WbthN/comphoto-824023566.jpg`

            if (path === '/test-upload') {
                await uploadProcessData()
                return 'Succss'
            }

            if (path === '/test-get') {
                const data = await getTheData()
                return JSON.stringify(data)
            }
        }

        const { body } = req

        if (body && body.message) {
            const messObj = body.message
            console.log({ messObj })
        }
    } catch (error) {

    }
}

module.exports = { handler }