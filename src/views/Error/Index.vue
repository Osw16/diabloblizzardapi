<template>
 <div class="error-page m-5">
   <hr class="my-5">
   <div v-if="err">
     <h1 class="my-5">Error <span v-if="err.status">{{ err.status}}</span></h1>
     <div v-if="err.routeParams">
       <h2>Query Params:</h2>
       <ul class="list-unstyled">
         <li v-for="(val,key) in err.routeParams" :key="key">
           👉{{key.toUpperCase()}}: <span class="lead text-muted">{{val}}</span>
         </li>
       </ul>
      <hr class="my-5">
     </div>
     <div v-if="err.message">
       <p class="lead">{{err.message}}</p>
     </div>
     <div v-if="err.data">
       <ul class="list-unstyled">
         <li v-for="(val,key) in err.data" :key="key">
           {{key.toUpperCase()}}: <span class="lead text-muted">{{val}}</span>
         </li>
       </ul>
     </div>

   </div>
  <div v-else>
    <h1 class="my-5">Error Page</h1>
    <p class="lead">What are you doing here?🤔</p>
  </div>

 </div>
</template>

<script>
import { mapState } from 'vuex'
import setError from '@/mixins/setError'
export default {
  name: 'ErrorView',
  mixins: [setError],
  computed: {
    ...mapState('error', {
      err: 'error'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setApiErr(null)
    next()
  }
}
</script>
