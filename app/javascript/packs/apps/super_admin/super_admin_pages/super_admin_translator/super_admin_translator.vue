<template>
  <div>
    <h1>Super Admin Translator</h1>

    <section>
      <div v-for="language in languages">
        {{language["name"]}}
        <button v-if="language['validated']" @click="validate(language)">
          Validate
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default{

  computed:{
    ...mapGetters('translator',{
        languages: 'languages'
    })
  },

  methods:{
    ...mapActions('translator',{
      validateLanguage: 'validateLanguage'
    }),

    validate(language){
      this.validateLanguage(language['id'])
    }
  }
}
</script>

<style scoped>
</style>
