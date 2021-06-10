var fetch = require("node-fetch");



export default async (req, res, next) => {

    const url = 'http://178.18.206.120:1001/form/contact';

    const set = fetch(url, {
        method: "post",
        body: req.query.data
    }).then(res => res.json()).then(json => {
        res.json(json);
    })

}