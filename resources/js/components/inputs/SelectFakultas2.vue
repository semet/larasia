<template>
    <select class="form-control"
        :value="value"
        @input="$emit('update', $event.target.value)"
        @change="staffByFakultas($event)"
    >
        <option value="">--select fakultas--</option>
        <option v-for="fak in fakultas" :key="fak.id" :value="fak.id">{{ fak.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'SelectFakultas2',

        data() {
            return {
                fakultas: [],
            }
        },
        props: ["value"],

        model: {
            prop: "value",
            event: "update"
        },
        mounted: function() {

            axios.get('/api/admin/fakultas')
            .then(response => {
                this.fakultas = response.data.fakultas
            });
        },
        methods: {
            staffByFakultas(event) {
                this.$parent.$emit('byFakultasID', event.target.value)
            }
        }
    }

</script>
