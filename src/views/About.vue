<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3 class="font" @click="onClick_all">All url</h3>
    <p class="font" @click="onClick_promise">promise</p>
    <router-link to="/nodeList" class="font">nodeList</router-link>
  </div>
</template>
<script>
export default {
  name:'about',
  data(){
    return{

    }
  },
  methods:{
    onClick_all(){
      this.$router.push('/all');
    },
    onClick_promise(){
      this.$router.push('/promise');
    },
  }
}
</script>

<style lang="scss" scoped>
.font{
  font-size:20px;
  color:red;
  cursor: pointer;
}
</style>
