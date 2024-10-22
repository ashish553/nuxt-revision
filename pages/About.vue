<template>
  <!-- <Tutorial/> -->
  <div class="flex justify-center items-center flex-col mt-8">
    <p class="text-4xl font-light">Here is the list:</p>
    <p class="mt-12">
      <NuxtLink to="/">Go to Home</NuxtLink>
    </p>
    <Tutorial ref="tutorialRef"/>

    <div v-for="photo in this.photosList" :key="photo.id">
      <p class="font-light text-2xl">{{ photo.title }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AboutPage',
  middleware: ['auth'],
  data() {
    return {
    }
  },
  methods: {
  },
  async asyncData(ctx) {
    // console.log(ctx);
    
    async function delayFunc() {
      return new Promise((res,rej)=>{ 
        setTimeout(() => {
          res('heyyy')
        }, 5000);
      })
      // console.log('a',a);
      
    }
    async function fetchData() {
      
      const data = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
      const filterdata = data.slice(0, 10)
      return filterdata
    }
    let filterdata = []
    // const a = await delayFunc()
    // console.log(a);
    
    filterdata = await fetchData()
    // console.log('filterdata', filterdata);
    return {
      photosList: filterdata
    }
  },
  async mounted() {
    console.log(this.$refs.tutorialRef.tutorialData);
    
    // const ao = await this.delayFunc()
    // console.log(ao);
    
    console.log('Hi from client');

  }
}
</script>
