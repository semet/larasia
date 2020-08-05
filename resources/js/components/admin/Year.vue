<template>
    <div class="card">
        <div class="card-header bg-primary">
            <div class="row">
                <div class="col-md-9">
                    <h5 class="my-0 text-white  mt-2">
                        <i class="fas fa-hospital-user mr-3"></i>
                        Data Tahun Ajaran
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
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tanggal Mulai</th>
                            <th>Tanggal Akhir</th>
                            <th>Nama</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(year, key) in years" :key="year.id">
                            <th scope="row">{{ key+1 }}</th>
                            <td>{{ year.start_date }}</td>
                            <td>{{ year.end_date }}</td>
                            <td>{{ year.name }}</td>
                            <td>
                                {{ year.active }}
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click.prevent="remove(year.id)">
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
                <add-year></add-year>
            </template>
        </lr-modal>
    </div>
</template>

<script>
    import YearAdd from '@/components/admin/YearAdd.vue';
    import {mapGetters} from 'vuex'
    export default {
        name: 'Fakultas',

        components: {
            'add-year': YearAdd
        },

        data() {
            return {
                years: []
            }
        },

        mounted() {
            this.loadYears()

            this.$on('yearAdded', () => {
                $('#modal').modal('hide')
                this.$nextTick().then(() => {
                    this.loadYears()
                })
            })
        },

        methods: {
            loadYears() {
                this.$store.dispatch('app/loading', true)
                axios.get('/api/admin/year')
                .then((response) => {
                    this.years = response.data.data
                    this.$store.dispatch('app/loading', false)
                }).catch((error) => {

                });
            },

            remove(year) {
                this.$swal({
                    text             : 'Do you want to continue',
                    icon             : 'question',
                    showCancelButton : true,
                    confirmButtonText: 'Delete'
                }).then((result) => {
                    if (result.value) {
                        axios.post('/api/admin/year/'+staff+'/delete')
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
