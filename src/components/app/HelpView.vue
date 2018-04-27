<template>
    <main id="help">
        <div class="wrapper wrapper--small">
            <h1 class="site-title">Hilfe</h1>
            <p>Du hast Fragen, Feedback, etc? <br> <span class="h4 positiv bold">Dann nur her damit!</span></p>
            <h2>Kontaktformular</h2>
            <form name="contact" method="POST" class="form" netlify>
                <div class="form__group">
                    <p class="form__label">An:</p>
                    <a href="mailto:contact@papergolf.ch" class="form__input">contact@papergolf.ch</a>
                </div>
                <div class="form__group">
                    <label for="email" class="form__label">Email:</label>
                    <input name="email" type="email" placeholder="Deine Email-Adresse" class="form__input" required>
                </div>
                <div class="form__group">
                    <label for="subject" class="form__label">Betreff:</label>
                    <input name="subject" type="text" placeholder="Betreff der Nachricht" class="form__input" required>
                </div>
                <div class="form__group">
                    <label for="message" class="form__label">Nachricht:</label>
                    <textarea name="message" placeholder="Deine Nachricht" class="form__input" required></textarea>
                </div>
                <div class="form__group">
                    <input type="submit" value="Abschicken" class="btn btn--primary">
                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
