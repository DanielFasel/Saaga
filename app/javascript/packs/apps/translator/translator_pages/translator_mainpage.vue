<template>

  <!--"page_container" is needed because vuejs can only have one outer element and it's also used to scroll to the top-->
  <div id="page_container">

    <!-- Content of the pages when changing route -->
    <router-view  id="router_content" :style="modalMenuPadding"></router-view>

    <translator-menu></translator-menu>
    <translator-drawer></translator-drawer>
    <translator-settings></translator-settings>
    <translator-help></translator-help>

    <!-- Dark Background for router content, all component trigering the background need to be listed here -->
    <transition name="mask">
      <div id="router_mask" v-show="showMenuDrawer || showSettingsModal || showHelpModal" ></div>
    </transition>

  </div>

</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

import TranslatorSettings from "./translator_helpers/translator_settings/translator_settings.vue"
import TranslatorHelp from "./translator_helpers/translator_help/translator_help.vue"



export default{

  components:{
    "translator-settings": TranslatorSettings,
    "translator-help": TranslatorHelp
  },

  methods:{
    ...mapActions('layout/generalLayout',{
      overflowPaddingAction:'overflowPadding',
      overflowPaddingLiveAction:'overflowPaddingLive'
    }),
    ...mapActions({
      user: 'user',
      fetchlanguages: 'languages'
    }),
    ...mapActions('languageTranslated',{
      languageTranslated: 'languageTranslated',
      defaultLanguageTranslated: 'defaultLanguageTranslated'
    })
  },

  computed:{

    ...mapGetters('layout/modalDrawer',[
      'showMenuDrawer',
      'showSettingsModal',
      'showHelpModal'
    ]),

    ...mapGetters('layout/generalLayout',[
      'overflowPadding',
      'overflowPaddingLive'
    ]),
      ...mapGetters([
        'languages'
      ]),


    // function that adds padding to compensate for the scroll bar disappearing when modals are shown. It avoids the page to "jump".
    modalMenuPadding: function(){
      if (this.showSettingsModal || this.showHelpModal){
        this.overflowPaddingLiveAction(this.overflowPadding)
        }
      else{
        this.overflowPaddingLiveAction(0)
      }
      return{ paddingRight : this.overflowPaddingLive + 'px'}
    }
  },

  created: function(){

    // calculates the width of the scroll bar of any browser
      var inner = document.createElement('p');
      inner.style.width = "100%";
      inner.style.height = "200px";

      var outer = document.createElement('div');
      outer.style.position = "absolute";
      outer.style.top = "0px";
      outer.style.left = "0px";
      outer.style.visibility = "hidden";
      outer.style.width = "200px";
      outer.style.height = "150px";
      outer.style.overflow = "hidden";
      outer.appendChild (inner);

      document.body.appendChild (outer);
      var w1 = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      var w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild (outer);
      // sends the width to vuex
      this.overflowPaddingAction(w1-w2)

  },

  mounted: function(){

    // Have to rethink because it doesn+t get fetched when translator reloads homepage.
    // fetches authorized languages and then fetches hte strings of them, needs cleaning
    this.fetchlanguages().then(response => {
              this.defaultLanguageTranslated("english")
              // Loop through the languages and call an action to fetch it
              for (var i = 0; i < this.languages.length; i++) {
                  this.languageTranslated(this.languages[i]['name'])
              }
          }, error => {
              console.error("Got nothing from server. Prompt user to check internet connection and try again")
          })
          // fetches user info
          this.user()
        }
}

</script>

<style scoped>
#router_content{
  margin-top: 70px;
  min-height: calc(100vh - 70px);
}
</style>
