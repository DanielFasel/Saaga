<template>

  <div class="content_container">

    <!-- Available Languages and their stats -->
    <div>
      <!-- Languages the translator has access to -->
      <li v-for="language in languages">
      <button>{{ language["language"]}}</button>
      </li>
    </div>

    <!-- Information Table -->
    <div>
      <!-- Personal info -->
      <div>
        {{user["givenname"]}}
        {{user["familyname"]}}
        {{user["email"]}}
      </div>
      <!-- General Stats of Translations -->
      <div>
        Completed Translations
      </div>
    </div>

  </div>

</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default{


  computed:{
    ...mapGetters([
      'languages',
      'user'
    ])
  }

}
</script>

<style scoped>
.content_container{
  display: flex;
  flex-direction: column;
  color: black;
}
<style>
