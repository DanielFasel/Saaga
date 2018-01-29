<template>
  <div id="hei">
  <div>Loading</div>
  <button @click="fakeFetch">Click after loading is completed</button>
</div>
</template>

<script>

export default{

  methods:{

    fakeFetch: function(){
        this.$router.push({ name: 'homepage' })
    }
}
}
</script>

<style scoped>

</style>
