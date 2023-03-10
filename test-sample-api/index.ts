import express, { Express, Response, Request } from "express"
const cors = require('cors')

const PORT = 8080
const app = express()
app.use(express.json())
app.use(cors('*'))

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Welcome to Test Sample Api nana'
    })
})

app.listen(PORT, () => {
    console.log("Server up and running on port: ", PORT)
})