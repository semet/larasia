<template>
    <div>
        <select
            class="form-control w-100"
            :class="errorClass"
            :value="value"
            @change="$emit('update', $event.target.value)"
            @blur="clearError"
        >
            <option value="">--select fakultas--</option>
            <option v-for="f in fakultas" :key="f.id" :value="f.id">{{ f.name }}</option>

        </select>
    </div>
</template>

<script>
    export default {
        name: 'SelectFakultas',

        props: ['value'],

        model: {
            prop: 'value',
            event: 'update'
        },
        data() {
            return {
                fakultas: [],
                errorClass: ''
            }
        },

        mounted() {
            this.loadFakultas()

            this.$parent.$on('errorFound', () => {
                this.errorClass = 'is-invalid'
            })
        },

        methods: {
            loadFakultas() {
                this.$store.dispatch('app/loading', true)
                axios.get('/api/admin/fakultas')
                .then((response) => {
                    this.fakultas = response.data.fakultas
                    this.$store.dispatch('app/loading', false)
                }).catch((error) => {

                });
            },
            clearError() {
                this.errorClass = ''
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
