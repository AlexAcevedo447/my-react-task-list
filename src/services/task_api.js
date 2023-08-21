import axios from 'axios';
export class TaskAPI {
    static instance;
    #token;
    #baseurl;
    constructor() {
        this.#token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiZW1haWwiOiJwZXBpdG9AcGVyZXouY29tIiwidXNlcm5hbWUiOiJQZXBpdG9QZXJlejEyMyIsInBhc3N3b3JkIjoiJDJhJDA4JERSU2hTYUx3cGpJVFpDLzJReE1aQ2V6UkQyV2d3YzVNTDdaSVJpZUUxZTRrYXAzV2pVRy82IiwiaWF0IjoxNjg5ODEyNjIzfQ.XW6tqsVlj9dI6SNoiT9X_KxoT2eEA-999851MCeH5j8`;
        this.#baseurl = `http://127.0.0.1:3200`
        if (!TaskAPI.instance) TaskAPI.instance = this;
        else return TaskAPI.instance;
        console.log(TaskAPI.instance)
    }
    async getTasks() {
        try {
            const response = await axios.get(`${this.#baseurl}/tasks`, {
                headers: {
                    "Authorization": this.#token
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}