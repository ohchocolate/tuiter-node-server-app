import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.time = "now";
    newTuit.image = "https://user-images.githubusercontent.com/48724314/201955458-6a2082c9-6727-45ed-adf6-065c8fae83be.jpeg";
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    // const tuitId = req.params.uid;
    // const tuit = tuit.find(t => t._id === tuitId);
    // change tuits -> tuit
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);//return OK
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params['tid'];
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
};
