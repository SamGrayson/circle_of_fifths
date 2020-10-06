import { Mode, Note } from "@tonaljs/tonal";

export default (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        const {
            body: { key }
        } = req
        return res.json(Mode.get("major").intervals.map(Note.transposeFrom(key)));
    }
}
