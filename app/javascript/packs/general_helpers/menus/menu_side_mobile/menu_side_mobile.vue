<template >
  <ul class="topbar" :class="{whitebar: currentPage!='Homepage'}" >
    <li v-show="currentPage!='Homepage'">{{currentPage}}</li>
    <li v-if="menuSide==false && notTop"><a href="#" v-scroll-to="'#testelement'">Scroll to Top</a></li>
    <li v-if="menuSide"><a href="#" v-scroll-to="'#testelement'">Scroll to Top</a></li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  data: function(){
    return {
      notTop:false
    }
  },


  methods: {
    ...mapActions([
      'toggleMenuSideMobile'
    ]),
    onClick: function(){
      if (this.menuSide==false) {
        var scroll=window.scrollY
        console.log(scroll)
        window.scrollTo(0, 0)
        var scroll=window.scrollY
        console.log(scroll)


      }
      else{
        this.toggleMenuSideMobile()
      }
    },
    pressTop: function(){
      if (this.menuSide==false && window.scrollY<140) {
        this.notTop=false
      }
      else {
        this.notTop=true
      }
    }
  },
  computed: {
    ...mapGetters([
      'menuSide',
      'currentPage'
    ])
  },
  created: function() {
    window.addEventListener('scroll', this.pressTop);

  },
  destroyed: function() {
    window.removeEventListener('scroll', this.pressTop);
  }
}
</script>

<style scoped>
.topbar{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.whitebar li+li{
    border-top: 1px solid white
}

</style>
