<template>
    <div class="card">
        <div class="card-header bg-primary">
            <div class="row">
                <div class="col-md-9">
                    <h5 class="my-0 text-white  mt-2">
                        <i class="fas fa-hospital-user mr-3"></i>
                        Data Semester
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
                            <th>Tahun Ajaran</th>
                            <th>Nama</th>
                            <th>Tanggal Mulai</th>
                            <th>Tanggal Akhir</th>
                            <th>Status</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(semester, key) in semesters" :key="semester.id">
                            <th scope="row">{{ key+1 }}</th>
                            <td>{{ semester.year_id }}</td>
                            <td>{{ semester.name }}</td>
                            <td>{{ semester.start_date }}</td>
                            <td>{{ semester.end_date }}</td>
                            <td>
                                {{ semester.active }}
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click.prevent="remove(semester.id)">
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
                <add-semester></add-semester>
            </template>
        </lr-modal>
    </div>
</template>

<script>
    import SemesterAdd from '@/components/admin/SemesterAdd.vue';
    import {mapGetters} from 'vuex'
    export default {
        name: 'Semester',

        components: {
            'add-semester': SemesterAdd
        },

        data() {
            return {
                semesters: []
            }
        },

        mounted() {
            this.loadSemester()

            this.$on('semesterAdded', () => {
                $('#modal').modal('hide')
                this.$nextTick().then(() => {
                    this.loadSemester()
                })
            })
        },

        methods: {
            loadSemester() {
                this.$store.dispatch('app/loading', true)
                axios.get('/api/admin/semester')
                .then((response) => {
                    this.semesters = response.data.data
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
                        axios.post('/api/admin/semester/'+staff+'/delete')
                        .then(() => {
                            this.$nextTick().then(() => {
                                this.loadSemester()
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
