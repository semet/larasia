<template>
    <div>
        <h1>Admin Home</h1>
        {{ admin }}
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: "AdminHome",

        computed: {
            ...mapGetters('admin', {
                admin: 'profileAdmin'
            })
        }
    }
</script>

<style scoped>

</style>
