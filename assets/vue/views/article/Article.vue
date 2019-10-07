<template>
    <div>

        <loader v-if="isLoading"></loader>

        <div class="white-box">
            <div class="row">
                <div class="col-md-6">
                    <img width="100%" :src="article.img">
                </div>
                <div class="col-md-6">
                    <h1>{{ article.name }}</h1>
                    <p>{{ article.description }}</p>
                    <p class="text-muted">{{ article.createdAt }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../../components/Loader";
    export default {
        name: 'single-article',
        components: {Loader},
        data() {
            return {
                message: 'je suis un test'
            }
        },
        computed: {
            isLoading() {
                return this.$store.getters["singleArticle/isLoading"];
            },
            hasError() {
                return this.$store.getters["singleArticle/hasError"];
            },
            error() {
                return this.$store.getters["singleArticle/error"];
            },
            article() {
                console.log(this.$store);
                return this.$store.getters["singleArticle/article"];
            },
            hasArticle() {
                return this.$store.getters["singleArticle/hasArticle"];
            }
        },
        created() {
            this.$store.dispatch("singleArticle/findArticleId",this.$route.params.id);
        }
    }
</script>