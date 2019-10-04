import $ from "jquery"
import axios from "axios"

export default {
    create(message) {
        let formData = new FormData();
        formData.append('message', message);

        return axios.post("/api/posts", formData);
    }
    ,
    findAll() {
        return axios.get("/api/posts");
    }

}