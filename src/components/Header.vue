<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/recipes" class="nav-link">Recipes</router-link>
                </li>
                <div v-if="!authenticated">
                    <li class="nav-item" >
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                </div>
                <div class="d-flex" v-else-if="authenticated">
                    <li class="nav-item" >
                        <p class="nav-link">Hello {{ userPseudo }} !</p>
                    </li>
                    <li class="nav-item" >
                        <!--<router-link to="/login" class="nav-link">Login</router-link>-->
                        <a href='#' class="nav-link">Logout</a>
                    </li>
                </div>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "header",
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            userPseudo: 'auth/userPseudo'
        })
    }
}
</script>

<style scoped>
li > p {
    margin-bottom: 0;
}
</style>