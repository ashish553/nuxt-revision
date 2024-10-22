<template>
  <!-- <Tutorial/> -->
   <div class="flex justify-center items-center flex-col mt-8">
    <p class="text-4xl font-light">Homepage</p>
    <p class="mt-12">
      <NuxtLink to="/about">Go to About Us</NuxtLink>
    </p>
    <!-- <input @input="debouncedFunc(search)" type="text" v-model="search" placeholder="Search"/> -->
   </div>
</template>

<script>
// import debounce from '../utils/debounce';
export default {
  name: 'IndexPage',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    fetchData(){
      console.log('Fetched...');
    },
    // debouncedFunc: debounce(()=>{
    //   this.fetchData
    // },300)
  },
  mounted() {
    console.log('hey index');
    // fetch('/api/getJSON').then(data=>{
    //   data.json().then(console.log)
    // })
    
  }
}
</script>
