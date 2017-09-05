<template >
  <ul class="topbar" @click="onClick">
    <li>{{currentPage}}</li>
    <li v-if="menuSide==false">Press to go to the top</li>
    <li v-if="menuSide">Press to jump to a chapter</li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {


  methods: {
    ...mapActions([
      'toggleMenuSideMobile'
    ]),
    onClick: function(){
      if (this.menuSide==false) {
        window.scrollTo(0, 0)
      }
      else{
        this.toggleMenuSideMobile()
      }
    }
  },
  computed: {

    ...mapGetters([
      'menuSide',
      'currentPage'
    ])
  },
}
</script>

<style scoped>
.topbar{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topbar li+li{
    border-top: 1px solid white
}

</style>
