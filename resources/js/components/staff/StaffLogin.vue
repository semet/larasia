<template>
    <form class="form-horizontal">

            <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-user-2-line auti-custom-input-icon"></i>
                <label for="email">Email</label>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                    v-model="data.email"
                >
            </div>

            <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-lock-2-line auti-custom-input-icon"></i>
                <label for="userpassword">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="userpassword"
                    placeholder="Enter password"
                    v-model="data.password"
                >
            </div>

            <div class="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlInline"
                    v-model="data.remember"
                >
                <label class="custom-control-label" for="customControlInline">Remember me</label>
            </div>

            <div class="mt-4 text-center">
                <button class="btn btn-primary w-md waves-effect waves-light" @click.prevent="login">Log In</button>
            </div>

            <div class="mt-4 text-center">
                <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
            </div>
        </form>
</template>

<script>
    export default {
        name: "StafLogin",

        data: () => {
            return {
                data: {
                    email: '',
                    password: '',
                    remember: ''
                }
            }
        },

        methods: {
            login() {
                alert('STaff Login')
            }
        },

    }
</script>

<style scoped>

</style>
