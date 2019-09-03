<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count1 }}</h2>
  </div>
</template>
<script>
    export default {
        name: 'One',
        data () {
            return {
                msg: 'Hi, I am One Page!',
                count1: this.$store.state.count1
            }
        }
    }
</script>

<style scoped>
</style>
