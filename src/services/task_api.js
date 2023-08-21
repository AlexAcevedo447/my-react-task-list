import axios from 'axios';
export function TasksAPI(obj) {
    let service = class {
        static instance;
        #token;
        #baseurl;
        constructor() {
            this.#token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiZW1haWwiOiJwZXBpdG9AcGVyZXouY29tIiwidXNlcm5hbWUiOiJQZXBpdG9QZXJlejEyMyIsInBhc3N3b3JkIjoiJDJhJDA4JERSU2hTYUx3cGpJVFpDLzJReE1aQ2V6UkQyV2d3YzVNTDdaSVJpZUUxZTRrYXAzV2pVRy82IiwiaWF0IjoxNjg5ODEyNjIzfQ.XW6tqsVlj9dI6SNoiT9X_KxoT2eEA-999851MCeH5j8`;
            this.#baseurl = `http://127.0.0.1:3200`
            if (!service.instance) service.instance = this;
            else return service.instance;
            console.log(service.instance)
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
    console.log(TasksAPI)
    if (!obj instanceof Window || !obj instanceof Document || typeof obj !== 'undefined') return service;
    else return {};
}