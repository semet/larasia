<template>
    <div>
        <div class="home-btn d-none d-sm-block">
            <a href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-home-variant h2 text-white"></i></a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div class="px-lg-2">
                    <div class="row no-gutters">
                        <div class="col">
                            <router-link to="/login/admin" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/github.png" alt="Github">
                                <span>GitHub</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="/login/staff" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/bitbucket.png" alt="bitbucket">
                                <span>Bitbucket</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="/dosen/login" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/dribbble.png" alt="dribbble">
                                <span>Dribbble</span>
                            </router-link>
                        </div>
                    </div>

                    <div class="row no-gutters">
                        <div class="col">
                            <router-link to="/mahasiswa/login" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/dropbox.png" alt="dropbox">
                                <span>Dropbox</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/mail_chimp.png" alt="mail_chimp">
                                <span>Mail Chimp</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="" class="dropdown-icon-item">
                                <img src="../../../assets/images/brands/slack.png" alt="slack">
                                <span>Slack</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-4">
                        <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                            <div class="w-100">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <div>
                                            <div class="text-center">
                                                <div>
                                                    <a href="index.html" class="logo"><img src="../../../assets/images/logo-dark.png" height="20" alt="logo"></a>
                                                </div>

                                                <h4 class="font-size-18 mt-4">Welcome Back !</h4>
                                                <p class="text-muted">Sign in to continue to Nazox.</p>
                                            </div>

                                            <div class="p-2 mt-5">

                                                <router-view/>

                                            </div>

                                            <div class="mt-5 text-center">
                                                <p>© 2020 by Laravel Indonesia</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="authentication-bg">
                            <div class="bg-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Auth"
    }
</script>

<style scoped>

</style>
