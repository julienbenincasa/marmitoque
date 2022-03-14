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
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
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

</style>