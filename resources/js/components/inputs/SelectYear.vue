<template>
    <div>
        <select
            class="form-control w-100"
            :class="errorClass"
            :value="value"
            @change="$emit('update', $event.target.value)"
            @input="clearError"
        >
            <option value="">--select tahun--</option>
            <option v-for="year in years" :key="year.id" :value="year.id">{{ year.name }}</option>

        </select>
    </div>
</template>

<script>
    export default {
        name: 'SelectYear',

        props: ['value'],

        model: {
            prop: 'value',
            event: 'update'
        },
        data() {
            return {
                years: [],
                errorClass: ''
            }
        },

        mounted() {
            this.loadYears()

            this.$parent.$on('errorFound', () => {
                this.errorClass = 'is-invalid'
            })
        },

        methods: {
            loadYears() {
                axios.get('/api/admin/year')
                .then((response) => {
                    this.years = response.data.data
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
