<template>
    <div>
        <date-picker
            :value="value"
            :config="options"
            :placeholder="placeholder"
            @dp-change="$emit('update', $event.target.value)"
            @input="clearError"
            class="form-control"
            :class="errorClass"
        ></date-picker>
    </div>
</template>

<script>
    // Import required dependencies
    import 'bootstrap/dist/css/bootstrap.css';

    // Import this component
    import datePicker from 'vue-bootstrap-datetimepicker';

    // Import date picker css
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    export default {
        name: 'Datepicker',

        components: {
            'date-picker': datePicker
        },

        props: ['value', 'placeholder'],

        model: {
            prop: 'value',
            event: 'update'
        },
        data() {
            return {
                date: new Date(),
                options: {
                    format: 'YYYY-MM-DD',
                    useCurrent: false,
                },
                errorClass: ''
            }
        },

        mounted() {
            this.$parent.$on('errorFound', () => {
                this.errorClass = 'is-invalid'
            })
        },

        methods: {
            clearError() {
                this.errorClass = ''
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
