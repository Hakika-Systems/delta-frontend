import axios from 'axios';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { token } = body;

        const url = "https://api.niche.co.zw/api/types";
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        const response = await axios.get(url, { headers });

        return {
            data: { is_valid: response.status !== 401 },
            message: "",
            success: true
        };
    } catch (error) {
        console.error(error);

        setResponseStatus(event, 500);

        return {
            data: {},
            message: 'A server error has occurred',
            success: false
        };
    }
});
