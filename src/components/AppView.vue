<template>
    <div id="app-game">
        <div class="turn-overlay">
            <img src="../../static/img/ui/turn-phone.svg" alt="Turn Phone">
            <p class="h4 bold positiv">Bitte drehe dein Gerät in den Portrait-Modus.</p>
        </div>
        <div class="navbar__btn" id="navbar-btn" @click="toggleSidebar">
            <icon name="menu"></icon>
        </div>
        <div class="navbar" id="navbar" :class="{ 'navbar--background': $route.path != '/' }">
            <div class="navbar__wrapper wrapper">
                <router-link to="/">
                    <img src="../../static/img/ui/logo-mobile.svg" alt="Papergolf Logo" class="navbar__logo navbar__logo--mobile">
                    <img src="../../static/img/ui/logo.svg" alt="Papergolf Logo" class="navbar__logo navbar__logo--desktop">
                </router-link>
                <nav class="navbar__nav">
                    <ul>
                        <li><router-link class="navbar__link" to="/"><icon name="play" class="navbar__icon"></icon><span class="navbar__text">Spiel</span></router-link></li>
                        <li><router-link class="navbar__link" to="/rules"><icon name="book" class="navbar__icon"></icon><span class="navbar__text">Regeln</span></router-link></li>
                        <li><router-link class="navbar__link" to="/board"><icon name="file" class="navbar__icon"></icon><span class="navbar__text">Spielplan</span></router-link></li>
                        <li><router-link class="navbar__link" to="/help"><icon name="help-circle" class="navbar__icon"></icon><span class="navbar__text">Hilfe</span></router-link></li>
                        <li><a class="navbar__link" href="https://www.buymeacoffee.com/papergolf" target="_blank"><icon name="award" class="navbar__icon"></icon><span class="navbar__text">Supporte uns</span></a></li>
                    </ul>
                </nav>
                <p class="copyright small">&copy; 2018 by <a href="http://papergolf.ch" class="positiv">papergolf.ch</a></p>
            </div>
        </div>
        <div class="content" :class="{ 'scroll': $route.path != '/' }">
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
