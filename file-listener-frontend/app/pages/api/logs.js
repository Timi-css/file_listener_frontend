import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
        const logFilePath = path.join(process.env.WATCH_FOLDER, 'app.log')

        fs.readFile(logFilePath, 'utf8', (err, data) => {
                if (err) {
                        res.status(500).json({ message: 'Error reading log file' })
                } else {
                        res.status(200).json({ log: data })
                }
        })
}