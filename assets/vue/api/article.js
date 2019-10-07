import axios from "axios"

export default {
    findAll() {
        return axios.get("/api/articles");
    },
    findId(id) {
        return axios.get(`/api/article/${id}`);
    }
}