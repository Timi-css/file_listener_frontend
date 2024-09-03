import { stopWatcher } from '../../../file_listener/src/watchers/fileWatcher'

export default function handler(req, res) {
        if (req.method === 'POST') {
                stopWatcher()
                res.status(200).json({ message: "File watcher stopped" })
        } else {
                res.status(405).end()
        }
}