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
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-building"></i></span>
                </div>
                <input type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Nama Fakultas"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    v-model="form.name"
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
    export default {
        name: 'FakultasAdd',

        data() {
            return {
                form: {
                    name: ''
                },
                errors: []
            }
        },

        methods: {
            saveData() {
                this.$store.dispatch('app/loadingModal', true)
                axios.post('/api/admin/fakultas/store', {
                    name: this.form.name
                })
                .then(response => {
                    this.$store.dispatch('app/loadingModal', false)
                    if(this.errors.length !== 0){
                        this.errors = []
                    }
                    this.$parent.$parent.$emit('fakultasAdded')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    this.$store.dispatch('app/loadingModal', false)
                    this.$toastr.Add({
                        title: "Save data failed",
                        msg: error.response.data.message,
                        position: "toast-bottom-full-width",
                        type: "error",
                    })
                } )
                .finally(() => {
                    this.form.name = ''
                })
            }
        }
    }

</script>

