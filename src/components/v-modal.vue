<template>
  <div class="modal-popup__container">
    <div class="overlay">
      <div class="modal-popup">
        <div class="btn-success" @click="closeModal">✖</div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "v-modal",
        data () {
            return {

            }
        },
        methods: {
            closeModal () {
                this.$emit('close')
            }
        },
    }
</script>

<style lang="scss" scoped>
  .modal-popup__container {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.31);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .overlay {
    position: relative;
    top: 13%;
  }
  .modal-popup {
    width: 350px;
    margin: auto;
    padding: 10px 30px 30px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffffff;
    transition: all 0.2s ease-out;
      &:hover {
        box-shadow:
                3px 3px $main-green-color,
                4px 4px $main-green-color,
                5px 5px $main-green-color,
                6px 6px $main-green-color,
                7px 7px $main-green-color,
                8px 8px $main-green-color,
                9px 9px $main-green-color;
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px);
        transition: all 0.2s ease-out;
      }
  }
  .btn-success {
    width: fit-content;
    margin-left: auto;
    color: $main-text-color;
    font-size: 1.2vw;
    &:hover {
      cursor: pointer;
    }
  }
</style>