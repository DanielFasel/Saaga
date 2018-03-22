<template>

<alert-window>
  <div slot="body">

  You have completed the translations for the {{selected['language']['name']}} language.
  Do you want to validate and send it for confirmation? If you chose to validate but regret your choice you will have to ask a SuperAdmin to open it again
  <button @click="cancel()">Cancel</button>
  <button @click="validate()">Validate the Language</button>

</div>
</alert-window>

</template>



<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

import AlertWindow from "../../../../../general_helpers/modal_window/alert_window.vue"

export default {

  components: {
    "alert-window": AlertWindow,
  },
  computed:{
    ...mapGetters([
      'selected',
      'languages'
    ])
  },

  methods: {
    ...mapActions('layout/modalDrawer',{
      toggleValidationAlert: 'toggleValidationAlert'
    }),
    ...mapActions('languageTranslated',{
      validateLanguage: 'validateLanguage'
    }),
    cancel(){
      this.toggleValidationAlert()
    },
    validate(){

      var languageIndex = this.selected['language']['index']
      var languageId = this.languages[languageIndex]['id']
      this.toggleValidationAlert()
      this.validateLanguage(languageId)
      //this.validateLanguage(// Language Id)
      // if language reroute to home other wise to site selection with same language selected
    },

  }
}

</script>


<style scoped>


</style>
