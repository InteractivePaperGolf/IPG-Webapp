<template>
    <main id="game" class="wrapper">
        <ul class="card-stack">
            <div class="perspective">
                <transition name="card" mode="out-in">
                    <li class="card" v-if="showCard">
                        <div class="card__front start" v-if="card.type == 'start'">
                            <img src="../../../static/img/ui/logo.svg" alt="Logo" class="card__logo--start">
                        </div>
                        <div class="card__front" v-else>
                            <div class="card__img" :style="{ backgroundImage: 'url(' + cardImg + ')' }">
                                <div class="card__gradient"></div>
                            </div>
                            <div class="card__content">
                                <div class="card__badge positiv" v-if="card.type == 'positiv'">
                                    <span></span>
                                    <p class="card__type normal">positiv</p>
                                </div>
                                <div class="card__badge neutral" v-if="card.type == 'neutral'">
                                    <span></span>
                                    <p class="card__type normal">neutral</p>
                                </div>
                                <div class="card__badge danger" v-if="card.type == 'negativ'">
                                    <span></span>
                                    <p class="card__type normal">negativ</p>
                                </div>
                                <div class="card__text">
                                    <p class="card__desc italic small">{{ card.desc }}</p>
                                    <p class="card__instruction normal">{{ card.instruction }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card__back">
                            <img src="../../../static/img/ui/logo-mobile.svg" alt="Logo" class="card__logo">
                        </div>
                    </li>
                </transition>
            </div>
            <li class="card card--bg">
                <div class="card__back">
                    <img src="../../../static/img/ui/logo-mobile.svg" alt="Logo" class="card__logo">
                </div>
            </li>
        </ul>

        <div class="btn btn--primary next-btn normal h4" @click="nextCard">
            <span v-show="gameStarted"><icon name="refresh-cw"></icon>Neue Karte</span>
            <span v-show="!gameStarted"><icon name="play"></icon>Spiel starten</span>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        nextCard() {
            this.$store.dispatch('nextCard')
            if(!this.gameStarted) {
                this.gameStarted = true
            }
        }
    },
    computed: {
        card() {
            return this.$store.state.currentCard;
        },
        showCard() {
            return this.$store.state.showCard;
        },
        cardImg() {
            return '../../../static/img/cardImg/' + this.card.img;
        },
        gameStarted() {
            if(this.card.type == 'start') {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>

</style>
