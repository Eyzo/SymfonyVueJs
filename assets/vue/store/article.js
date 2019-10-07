import articleAPI from "../api/article"

const FETCHING_ARTICLE = "FETCHING_ARTICLE",
    FETCHING_ARTICLE_SUCCESS = "FETCHING_ARTICLE_SUCCESS",
    FETCHING_ARTICLE_ERROR = "FETCHING_ARTICLE_ERROR";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        articles: []
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        getError(state) {
          return state.error
        },
        hasError(state) {
            //return state.error.length !== null;
        },
        hasArticle(state) {
            return state.articles.length > 0
        },
        getArticles(state) {
            return state.articles;
        }
    },
    mutations: {
        [FETCHING_ARTICLE](state) {
            state.isLoading = true;
            state.error = null;
            state.articles = [];
        },
        [FETCHING_ARTICLE_SUCCESS](state,articles) {
            state.isLoading = false;
            state.error = null;
            state.articles = articles;
        },
        [FETCHING_ARTICLE_ERROR](state,error) {
            state.isLoading = false;
            state.error = error;
            state.articles = [];
        }
    },
    actions: {
        async findAll(store) {
            store.commit(FETCHING_ARTICLE);
            try {
                let response = await articleAPI.findAll();
                store.commit(FETCHING_ARTICLE_SUCCESS, response.data);
                return response.data;
            } catch (error) {
                store.commit(FETCHING_ARTICLE_ERROR, error);
                return null;
            }
        },
    }
}