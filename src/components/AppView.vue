<template>
    <div id="app-game">
        <div class="navbar__btn" id="navbar-btn" @click="toggleSidebar">
            <icon name="menu"></icon>
        </div>
        <div class="navbar" id="navbar">
            <div class="navbar__wrapper wrapper">
                <img src="../../static/img/ui/logo-mobile.svg" alt="Papergolf Logo" class="navbar__logo navbar__logo--mobile">
                <img src="../../static/img/ui/logo.svg" alt="Papergolf Logo" class="navbar__logo navbar__logo--desktop">
                <nav class="navbar__nav">
                    <ul>
                        <li><router-link class="navbar__link" to="/play"><icon name="play" class="navbar__icon"></icon><span class="navbar__text">Spiel</span></router-link></li>
                        <li><router-link class="navbar__link" to="/play/rules"><icon name="book" class="navbar__icon"></icon><span class="navbar__text">Regeln</span></router-link></li>
                        <li><router-link class="navbar__link" to="/play/board"><icon name="file" class="navbar__icon"></icon><span class="navbar__text">Spielpläne</span></router-link></li>
                        <li><p class="navbar__link" to="home"><icon name="help-circle" class="navbar__icon"></icon><span class="navbar__text">Hilfe</span></p></li>
                    </ul>
                </nav>
                <p class="copyright small">&copy; 2018 by Papergolf.ch</p>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            document.getElementById('navbar').classList.toggle('close');
            document.getElementById('navbar-btn').classList.toggle('close');
        }
    },
    created() {
        this.$store.dispatch('newStack');
    }
}
</script>

<style scoped>

</style>
