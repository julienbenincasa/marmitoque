<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <img src="../../images/icon.png" alt="" class="header-icon">
            <router-link to="/home" class="navbar-brand" href="#"> Marmitoque</router-link>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/recipes" class="nav-link">Recettes</router-link>
                </li>
                <div v-if="authenticated">
                    <li class="nav-item" >
                        <router-link to="/newRecipe" class="nav-link">Créer une recette</router-link>
                    </li>
                </div>
                <div v-if="!authenticated">
                    <li class="nav-item" >
                        <router-link to="/login" class="nav-link">Se connecter</router-link>
                    </li>
                </div>
                <div class="d-flex" v-else-if="authenticated">
                    <li class="nav-item" >
                        <router-link to="/my-recipes" class="nav-link">Mes recettes</router-link>
                    </li>
                    <li class="nav-item" >
                        <p class="nav-link">Bonjour {{ userPseudo }} !</p>
                    </li>
                    <li class="nav-item" >
                        <!--<router-link to="/login" class="nav-link">Login</router-link>-->
                        <a href='#' class="nav-link">Se deconnecter</a>
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
.header-icon {
    width: 3%;
}
</style>