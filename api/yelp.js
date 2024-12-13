import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: API_KEY,
        // donc d'abord les elements de postman tu dois checker avec base et le headers and also Authorization
    },
})