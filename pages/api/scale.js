const scale_data = {
    major: {
        parent_mode: 'major',
        mode: 'ionean',
        steps: 'W-W-H-W-W-W-H',
        pent_order: ['1','2','3','0','5','6','0'],
        order: ['1','2','3','4','5','6','7'],
    },
    ionian: {
        parent_mode: 'major',
        mode: 'I',
        pent_order: ['1','2','3','0','5','6','0'],
        order: ['1','2','3','4','5','6','7'],
    },
    minor: {
        parent_mode: 'minor',
        mode: 'aoelian',
        steps: 'W-H-W-W-H-W-W',
        pent_order: ['6','0','1','2','3','0','5'],
        order: ['6','7','1','2','3','4','5'],
    },
    aoelian: {
        parent_mode: 'major',
        mode: 'vi',
        pent_order: ['6','0','1','2','3','0','5'],
        order: ['6','7','1','2','3','4','5'],
    },
    dorian: {
        parent_mode: 'major',
        mode: 'ii',
        pent_order: ['2','3','0','5','6','0','1'],
        order: ['2','3','4','5','6','7','1'],
    },
    phrygian: {
        parent_mode: 'major',
        mode: 'iii',
        pent_order: ['3','0','5','6','0','1','2'],
        order: ['3','4','5','6','7','1','2'],
    },
    lydian: {
        parent_mode: 'major',
        mode: 'IV',
        pent_order: null,
        order: ['4','5','6','7','1','2','3'],
    },
    mixolydian: {
        parent_mode: 'major',
        mode: 'V',
        pent_order: ['5','6','0','1','2','3','0'],
        order: ['5','6','7','1','2','3','1'],
    },
    locrian: {
        parent_mode: 'major',
        mode: 'vii0',
        pent_order: null,
        order: ['7','1','2','3','4','5','6'],
    },
}

export default (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        const {
            body: { scale }
        } = req
        return res.json(scale_data[scale.toLowerCase()])
    } else if (req.method === 'GET') {
        res.statusCode = 200;
        return res.json(scale_data);
    }
}