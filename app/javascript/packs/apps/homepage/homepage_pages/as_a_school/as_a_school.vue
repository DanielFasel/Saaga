<template>
  <div>
    <h1>School</h1>
    Mikä on Lorem Ipsum?
Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.

Miksi käytämme sitä?
On todistettu, että lukijaa häiritsee sivun ulkoasu lukiessaan sivua. Lorem Ipsumin käytön tarkoitus on, että se omaa enemmän-tai-vähemmän normaalimpaa sanojen sijoitusta kuin 'Sisältöä tähän, sisältöä tähän'. Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät nyt Lorem Ipsumia heidän normaalina mallitekstinä. 'Lorem Ipsumia' etsittäessä löytyy monen monta nettisivua, jotka ovat vasta aluillaan. Useita versioita on muodostunut vuosien kuluessa, jotkut vahingossa ja jotkut tarkoituksella (lisätty huumoria ja niin edelleen).


Mistä se tulee?
Vastoin yleistä uskomusta, Lorem Ipsum ei ole vain sattumanvarainen teksti. Sillä on pitkät juuret klassisesta latinalaisesta kirjallisuudesta vuonna 45 eKr alkaen, tehden siitä yli 2000 vuotta vanhan. Richard McClintock, latinalainen professori Hampden-Sydneyn yliopistossa Virginiassa, etsi yhden vaikeaselkoisimmista latinalaisista sanoista, consectetur, Lorem Ipsumin kappaleesta ja etsi lainauksia sanasta klassisessa kirjallisuudessa löytäen varman lähteen. Lorem Ipsum tulee osista 1.10.32 ja 1.10.33 "de Finibus Bonorum et Malorum":ksesta (The Extremes of Good and Evil), jonka teki Cicero vuonna 45 eKr. Tämä kirja on tutkielma etiikasta, joka oli hyvin yleistä Renesanssin aikana. Ensimmäinen Lorem Ipsumin rivi, "Lorem ipsum dolor sit amet..", tulee rivistä joka on osassa 1.10.32.

Normaali palanen Lorem Ipsumia, jota on käytetty 1500-luvulla on toistettu alla niille jotka ovat vain kiinnostuneita. Osiot 1.10.32 ja 1.10.33 "de Finibus Bonorum et Malorum":ksesta, Cicerolta, ovat myös toistettu niiden tarkoissa alkuperäisissä muodoissaan, joita seuraa englantilaiset versiot vuodelta 1914, kääntäjänä H. Rackman.

Mistä minä saan sitä?
On olemassa monta eri versiota Lorem Ipsumin kappaleista, mutta suurin osa on kärsinyt muunnoksista joissain muodoissa, kuten huumorin tai sattumanvaraisesti asetetuin sanoin jotka eivät näytä edes vähän uskottavalta. Jos sinä aiot käyttää kappaletta Lorem Ipsumista, sinun pitää tarkistaa, ettei tekstin seassa ole mitään nolostuttavaa. Kaikki Lorem Ipsum-generaattorit Internetissä tuntuvat toistavan ennalta määriteltyjä palasia tarpeen mukaan, tehden tästä ensimmäisen aidon generaattorin Internetissä. Se käyttää 200 latinalaisen sanan sanakirjaa, johon on yhdistetty kourallinen mallilauseiden rakenteita luoden Lorem Ipsumin, joka näyttää järjelliseltä. Generoitu Lorem Ipsum on siten aina vapaa toistoilta, huumorilta jne.
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default{


  methods: {  ...mapActions([
      'currentPage',
      'menuSide'
    ]),

  },
  created(){

      this.$store.dispatch('currentPage', "As a School")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
