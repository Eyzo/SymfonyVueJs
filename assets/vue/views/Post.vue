<template>
    <div>
        <div class="white-box">
            <div class="row">
                <div class="col-md-6">
                    <img src="https://place-hold.it/300x300" alt="image-de-test">
                </div>
                <div class="col-md-6">
                    <p id="text-test">Vous êtes sur le post {{ $route.params.id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data: function () {
            return {
                message: "je suis un test"
            }
        }
    }
</script>

<style lang="scss">
    @import "../style/post/post";
</style>