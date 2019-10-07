import articleAPI from "../api/article"

const FETCHING_SINGLE_ARTICLE = "FETCHING_SINGLE_ARTICLE",
    FETCHING_SINGLE_ARTICLE_SUCCESS = "FETCHING_SINGLE_ARTICLE_SUCCESS",
    FETCHING_SINGLE_ARTICLE_ERRROR = "FETCHING_SINGLE_ARTICLE_ERRROR";


export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        article: null
    },
    getters: {
        isLoading(state) {
          return state.isLoading;
        },
        hasError(state) {
            return state !== null;
        },
        error(state) {
            return state.error;
        },
        article(state) {
            return state.article;
        },
        hasArticle(state) {
            return state.article.length > 0;
        }
    },
    mutations: {
        [FETCHING_SINGLE_ARTICLE](state) {
          state.isLoading = true;
          state.error = null;
          state.article = null;
        },
        [FETCHING_SINGLE_ARTICLE_SUCCESS](state,data) {
            state.isLoading = false;
            state.error = null;
            state.article = data;
        },
        [FETCHING_SINGLE_ARTICLE_ERRROR](state,error) {
            state.isLoading = false;
            state.error = error;
            state.article = null;
        }
    },
    actions: {
        async findArticleId(store,id) {
            store.commit(FETCHING_SINGLE_ARTICLE);
            try {
                let response = await articleAPI.findId(id);
                store.commit(FETCHING_SINGLE_ARTICLE_SUCCESS,response.data);
                return response.data;
            } catch (error) {
                store.commit(FETCHING_SINGLE_ARTICLE_ERRROR,error);
                return null;
            }
        }
    }
}