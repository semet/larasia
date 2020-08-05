<template>
    <div id="app">

        <router-view></router-view>

        <vue-progress-bar></vue-progress-bar>

    </div>
</template>

<script>
    export default {
        name: "App",

        mounted(){
            this.$Progress.finish()
        },
        created(){
            this.$Progress.start()
            //  hook the progress bar to start before we move router-view
            this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
            })

        }
    }
</script>

<style lang="scss" src="@assets/scss/bootstrap.scss"></style>
<style lang="scss" src="@assets/scss/app.scss"></style>
<style lang="scss" src="@assets/scss/icons.scss"></style>
