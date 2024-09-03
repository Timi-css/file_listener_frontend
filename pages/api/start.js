import { startWatcher } from '../../../../timialabi/file_listener/src/utils/fileValidator'

export default function handler(req, res) {
        if (req.method === 'POST') {
                startWatcher()
                res.status(200).json({ message: "File watcher started" })
        }

}