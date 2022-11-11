import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    // The axis.post() function embeds the tuit parameter
    // in the body of the HTTP request and then POSTs it to TUITS_API.
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
