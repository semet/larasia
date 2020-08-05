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
                    <span class="input-group-text" id="start_date"><i class="fas fa-calendar"></i></span>
                </div>
                <date-picker
                    v-model="form.start_date"
                    class="w-75"
                    :placeholder="placeholder.start_date"
                ></date-picker>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="end_date"><i class="fas fa-calendar"></i></span>
                </div>
                <date-picker
                    v-model="form.end_date"
                    class="w-75"
                    :placeholder="placeholder.end_date"
                ></date-picker>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="name"><i class="fas fa-calendar-alt"></i></span>
                </div>
                <input type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Nama Lengkap"
                    aria-describedby="name"
                    v-model="form.name"
                >
            </div>
            <div class="form-check mb-3">
                <div class="row">
                    <div class="col-sm-2">
                        <input class="form-check-input" type="radio" id="active" v-model="form.active" :value="1">
                        <label class="form-check-label" for="active">
                            Aktif
                        </label>
                    </div>
                    <div class="col-sm-3">
                        <input class="form-check-input" type="radio" id="inactive" v-model="form.active" :value="0">
                        <label class="form-check-label" for="inactive">
                            Non-aktif
                        </label>
                    </div>
                </div>
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
    import Datepicker from '@/components/inputs/Datepicker.vue'
    export default {
        name: 'StaffAdd',

        components: {
            'date-picker': Datepicker
        },

        data() {
            return {
                form: {
                    start_date: '',
                    end_date  : '',
                    name      : '',
                    active    : '',
                },
                placeholder: {
                    start_date: 'Tanggal Mulai',
                    end_date  : 'Tanggal Akhir'
                },
                errors: []
            }
        },

        methods: {
            saveData() {
                this.$store.dispatch('app/loadingModal', true)
                axios.post('/api/admin/year/store', {
                    start_date: this.form.start_date,
                    end_date  : this.form.end_date,
                    name      : this.form.name,
                    active    : this.form.active,
                })
                .then(response => {
                    this.$store.dispatch('app/loadingModal', false)
                    if(this.errors.length !== 0){
                        this.errors = []
                    }
                    this.$parent.$parent.$emit('yearAdded')
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

