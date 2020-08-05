<template>
    <div class="vertical-menu">

        <simplebar data-simplebar-auto-hide="true" class="h-100">

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title">Menu</li>

                    <li>
                        <router-link to="/admin" class="waves-effect">
                            <i class="fas fa-home"></i><span class="badge badge-pill badge-success float-right">3</span>
                            <span>Dashboard</span>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/admin/fakultas" class=" waves-effect">
                            <i class="fas fa-building"></i>
                            <span>Fakultas</span>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/admin/staff" class=" waves-effect">
                            <i class="fas fa-user"></i>
                            <span>Manage Staff</span>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/admin/year" class=" waves-effect">
                            <i class="fas fa-calendar"></i>
                            <span>Manage Tahun</span>
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/admin/semester" class=" waves-effect">
                            <i class="fas fa-calendar"></i>
                            <span>Manage Semester</span>
                        </router-link>
                    </li>

                </ul>
            </div>
            <!-- Sidebar -->
        </simplebar>
    </div>
</template>

<script>
    import MetisMenu from 'metismenujs';
    import simplebar from 'simplebar-vue';
    export default {
        name: "Sidebar",

        components: {
            simplebar
        },

        mounted() {
            this.initMetisMenu()
        },

        methods: {
            initMetisMenu(){
                const mm = new MetisMenu('#side-menu', {

                });
            }
        }
    }
</script>

<style scoped>

</style>
