<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <img src="../../images/icon.png" alt="" class="header-icon">
            <a class="navbar-brand" href="#"> Marmitoque</a>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/recipes" class="nav-link">Recettes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Se connecter</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>
.header-icon {
    width: 3%;
}
</style>