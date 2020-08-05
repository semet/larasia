<template>
    <div id="layout-wrapper">
        <top-navigation></top-navigation>

        <sidebar-admin v-show="type == 'admin'"></sidebar-admin>

        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0">Starter page</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Utility</a></li>
                                        <li class="breadcrumb-item active">Starter page</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <transition name="slide" mode="out-in">

                     <router-view></router-view>

                    </transition>

                </div> <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <lr-footer></lr-footer>

        </div>
    </div>

</template>

<script>
    import TopNavigation from "./partials/TopNavigation";
    import SidebarAdmin from "./partials/SidebarAdmin";
    import Footer from "./partials/Footer";
    import { mapState } from 'vuex'
    export default {
        name: "Main",

        components: {
            'top-navigation':TopNavigation,
            'sidebar-admin':SidebarAdmin,
            'lr-footer':Footer
        },
        computed: {
            ...mapState({
                type: 'userType'
            })
        }
    }
</script>

<style scoped>
    .slide-enter-active,
    .slide-leave-active{
        transition: opacity 0.2s, transform 0.4s;
    }
    .slide-enter,
    .slide-leave-to{
        opacity: 0;
        transform: translateX(-30%);
    }
    .moveUp-enter-active{
        animation: fadeIn 0.3s ease-in;
    }
    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
    .moveUp-leave-active{
        animation: moveUp 0.4s ease-in;
    }
    @keyframes moveUp {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-400px);
        }
    }
</style>

