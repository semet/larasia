<template>
    <div class="card">
        <div class="card-header bg-primary">
            <div class="row">
                <div class="col-md-9">
                    <h5 class="my-0 text-white  mt-2">
                        <i class="fas fa-hospital-user mr-3"></i>
                        Data Staff
                    </h5>
                </div>
                <div class="col-md-3">
                    <div class="float-right">
                        <button class="btn btn-primary waves-effect waves-light" data-toggle="modal"
                            data-target="#modal">
                            <i class="fas fa-plus mr-2"></i> Imput data
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <lr-loader></lr-loader>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <select-fakultas></select-fakultas>
                    </div>
                </div>
                <span class="mt-2">-OR-</span>
                <div class="col-md-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="staff's username">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>N I P</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Active</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(staff, key) in staffs" :key="staff.id">
                            <th scope="row">{{ key+1 }}</th>
                            <td>{{ staff.employee_number }}</td>
                            <td>{{ staff.name }}</td>
                            <td>{{ staff.email }}</td>
                            <td>
                                {{ staff.active }}
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click.prevent="remove(staff.id)">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <lr-modal>
            <template v-slot:modal-content>
                <add-staff></add-staff>
            </template>
        </lr-modal>
    </div>
</template>

<script>
    import StaffAdd from '@/components/admin/StaffAdd.vue';
    import SelectFakultas from '@/components/inputs/SelectFakultas2.vue'
    import {mapGetters} from 'vuex'
    export default {
        name: 'Fakultas',

        components: {
            'add-staff': StaffAdd,
            'select-fakultas': SelectFakultas
        },

        data() {
            return {
                staffs: []
            }
        },

        mounted() {
            this.loadStaff()

            this.$on('staffAdded', () => {
                $('#modal').modal('hide')
                this.$nextTick().then(() => {
                    this.loadStaff()
                })
            })

            this.$on('byFakultasID', (id) =>  {
                this.$nextTick().then(() => {
                    this.loadStaffsByFakultas(id)
                })
            })
        },

        methods: {
            loadStaff() {
                this.$store.dispatch('app/loading', true)
                axios.get('/api/admin/staff')
                .then((response) => {
                    this.staffs = response.data.staffs
                    this.$store.dispatch('app/loading', false)
                }).catch((error) => {

                });
            },

            loadStaffsByFakultas(id){
                this.$store.dispatch('app/loading', true)
                axios.post('/api/admin/staff/byFakultas', {
                    fakultas_id: id
                })
                .then(response => {
                    if(response.data.status == 200){
                        this.staffs = response.data.staffs
                        this.$store.dispatch('app/loading', false)
                    }
                    else{
                        this.$store.dispatch('app/loading', false)
                        this.$swal({
                            text: response.data.message,
                            icon: 'error'
                        })
                    }
                })
            },
            remove(staff) {
                this.$swal({
                    text             : 'Do you want to continue',
                    icon             : 'question',
                    showCancelButton : true,
                    confirmButtonText: 'Delete'
                }).then((result) => {
                    if (result.value) {
                        axios.post('/api/admin/staff/'+staff+'/delete')
                        .then(() => {
                            this.$nextTick().then(() => {
                                this.loadStaff()
                            })
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
