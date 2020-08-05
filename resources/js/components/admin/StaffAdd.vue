<template>
    <form>

        <div class="modal-header">
            <h5 class="modal-title mt-0" id="myModalLabel">Modal Heading</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-building"></i></span>
                </div>
                <select-fakultas v-model="form.fakultas_id"></select-fakultas>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="employee_number"><i class="fas fa-sort-numeric-down-alt"></i></span>
                </div>
                <input type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.employee_number }"
                    placeholder="Nomor Induk Pegawai"
                    aria-describedby="Employee Number"
                    v-model="form.employee_number"
                >
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="name"><i class="fas fa-user"></i></span>
                </div>
                <input type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Nama Lengkap"
                    aria-describedby="name"
                    v-model="form.name"
                >
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="email"><i class="fas fa-envelope"></i></span>
                </div>
                <input type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    placeholder="Email"
                    aria-describedby="email"
                    v-model="form.email"
                >
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-light waves-effect" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click.prevent="saveData">Save
                changes</button>
        </div>
    </form>
</template>

<script>
    import SelectFakultas from '@/components/inputs/SelectFakultas.vue'
    export default {
        name: 'StaffAdd',

        components: {
            'select-fakultas': SelectFakultas
        },

        data() {
            return {
                form: {
                    fakultas_id    : '',
                    employee_number: '',
                    name           : '',
                    email          : ''
                },
                errors: []
            }
        },

        methods: {
            saveData() {
                this.$store.dispatch('app/loadingModal', true)
                axios.post('/api/admin/staff/store', {
                    fakultas_id    : this.form.fakultas_id,
                    employee_number: this.form.employee_number,
                    name           : this.form.name,
                    email          : this.form.email,

                })
                .then(response => {
                    this.$store.dispatch('app/loadingModal', false)
                    if(this.errors.length !== 0){
                        this.errors = []
                    }
                    this.$parent.$parent.$emit('staffAdded')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    this.$store.dispatch('app/loadingModal', false)
                    this.$emit('errorFound')
                    this.$toastr.Add({
                        title: "Save data failed",
                        msg: error.response.data.message,
                        position: "toast-bottom-full-width",
                        type: "error",
                    })
                } )
                .finally(() => {
                    let data = this.form
                        Object.keys(data).map(function(key, index){
                        return data[key]= ''
                    })
                })
            }
        }
    }

</script>

