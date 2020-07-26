import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KtGn1oCWfpQQmdhtmSWTR18zsp02lJZXbQkB6Kn8kas',
    },
});