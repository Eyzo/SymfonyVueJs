<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                App
            </router-link>
            <button class="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link class="nav-item" tag="li" :to="{ name: 'home' }" active-class="active">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link class="nav-item" tag="li" :to="{ name: 'posts' }" active-class="active">
                        <a class="nav-link">Posts</a>
                    </router-link>
                    <router-link class="nav-item" tag="li" :to="{ name: 'articles' }" active-class="active">
                        <a class="nav-link">Articles</a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <router-view />
    </div>
</template>