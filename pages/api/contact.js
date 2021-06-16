var fetch = require("node-fetch");



export default async (req, res, next) => {

    const url = 'http://main-api.terapiyazilim.com:7277/api/WebSite/'+req.query.method;

    const set = fetch(url, {
        method: "post",
        headers: {
            'Panel-Token': 'fOJiOmutPzsZnpL9NyYo',
            'Content-Type': 'application/json',
          },             
        body: req.query.data
    }).then(res => res.json()).then(json => {
        res.json(json);
    })

}