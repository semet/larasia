<template>
    <div class="card">
        <div class="card-header bg-primary">
            <div class="row">
                <div class="col-md-9">
                    <h5 class="my-0 text-white  mt-2">
                        <i class="fas fa-building mr-3"></i>
                        Daftar Fakultas
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
                            <th>Nama Fakultas</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(fak, key) in fakultas" :key="fak.id">
                            <th scope="row">{{ key+1 }}</th>
                            <td>{{ fak.name }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click.prevent="remove(fak.id)">
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
                <add-fakultas></add-fakultas>
            </template>
        </lr-modal>
    </div>
</template>

<script>
    import FakultasAdd from '@/components/admin/FakultasAdd.vue';
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: 'Fakultas',

        components: {
            'add-fakultas': FakultasAdd
        },

        data() {
            return {
                fakultas: []
            }
        },

        mounted() {
            this.loadFakultas()

            this.$on('fakultasAdded', () => {
                $('#modal').modal('hide')
                this.$nextTick().then(() => {
                    this.loadFakultas()
                })
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
            remove(fakultas) {
                this.$swal({
                    text             : 'Do you want to continue',
                    icon             : 'question',
                    showCancelButton : true,
                    confirmButtonText: 'Delete'
                }).then((result) => {
                    if (result.value) {
                        axios.post('/api/admin/fakultas/'+fakultas+'/delete')
                        .then(() => {
                            this.$nextTick().then(() => {
                                this.loadFakultas()
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
