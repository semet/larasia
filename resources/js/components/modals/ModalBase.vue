<template>
    <div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <lr-loader-modal></lr-loader-modal>
                <slot name="modal-content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalBase'
    }

</script>

<style lang="scss" scoped>

</style>
