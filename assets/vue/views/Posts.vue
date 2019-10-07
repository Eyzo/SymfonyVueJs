<template>
    <div>
        <div class="row col">
            <h1>Posts</h1>
        </div>

        <div class="row col">
            <form>
                <div class="form-row">
                    <div class="col-8">
                        <input v-model="message" type="text" class="form-control">
                    </div>
                    <div class="col-4">
                        <button :disabled="message.length === 0 || isLoading" type="button"
                                class="btn btn-primary" @click="createPost()">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <loader v-if="isLoading"></loader>

        <div v-else-if="hasError" class="row col">
            <div class="alert alert-danger" role="alert">
                {{ error }}
            </div>
        </div>

        <div v-else-if="!hasPosts" class="row col">
            No posts!
        </div>

        <ul v-else class="list-group">
            <li v-for="post in posts" :key="post.id" class="list-group-item">
                <router-link :to="{ name: 'post', params: { id: post.id }}" active-class="active">
                    <post :message="post.message" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Post from "../components/Post";
    import Loader from "../components/Loader";

    export default {
        name: "Posts",
        components: {
            Loader,
            Post
        },
        data() {
            return {
                message: ""
            };
        },
        computed: {
            isLoading() {
                return this.$store.getters["post/isLoading"];
            },
            hasError() {
                return this.$store.getters["post/hasError"];
            },
            error() {
                return this.$store.getters["post/error"];
            },
            hasPosts() {
                return this.$store.getters["post/hasPosts"];
            },
            posts() {
                return this.$store.getters["post/posts"];
            }
        },
        created() {
            this.$store.dispatch("post/findAll");
        },
        methods: {
            async createPost() {
                const result = await this.$store.dispatch("post/create", this.$data.message);
                if (result !== null) {
                    this.$data.message = "";
                }
            }
        }
    };
</script>

