<template>
    <div>
        <loader v-if="isLoading"></loader>

        <div class="card-deck" v-for="articles in row">
            <div class="card" v-for="article in articles">
                <img :src="article.img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ article.name }}</h5>
                    <p class="card-text">{{ article.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ article.createdAt }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../components/Loader";

    export default {
        name: "Article",
        components: {Loader},
        data() {
            return {
                message: ""
            }
        },
        computed: {
            isLoading() {
                return this.$store.getters["article/isLoading"];
            },
            hasError() {
                return this.$store.getters["article/hasError"];
            },
            getError() {
                return this.$store.getters["article/getError"];
            },
            hasArticle() {
                return this.$store.getters["article/hasArticle"];
            },
            row() {
                if (this.hasArticle) {

                    console.log(_.chunk(this.$store.getters["article/getArticles"],4));

                    return _.chunk(this.$store.getters["article/getArticles"],4);
                } else {
                    return [];
                }
            }
        },
        created() {
            this.$store.dispatch("article/findAll");
        },
    }
</script>