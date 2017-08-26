<template>
  <div>
    <homepage-main-menu></homepage-main-menu>
    <div id="homepagecontent">

      <div id="card1_background" class="card_background">
      <div class="cards" id="card1">
        <article id="article1">
          <h2>Flipped Classroom</h2>
          <p>
            The flipped classroom is a modern educational concept that revoles around a simple yet clever idea: the theory part is taught at home, with the help of videos, text, etc, and the homework is done in the classroom.
            This frees the teachers from traditional lectures and gives them more time to focus on the individual needs of each student.<br>
            Saaga is developed to allow an easy  and efficient implementation of this concept.
          </p>
          <button>Learn More</button>
        </article>
        <img src="../../images/homepages/homepage_illustrations/flippedclassroom.png" alt="Flipped Classroom">

      </div>
    </div>

    <div id="card2_background" class="card_background">
      <div class="cards" id="card2">
        <article id="article2">
          <h2>Accessibility</h2>
          <p>
            Theachers have the possibility to share their lessons with the other users of the platform (under a ... license). These lessons are then categorized according tothe national teaching program.<br>
            This system gives students the possibility to follow lessons unavailable in their school in a chronological and coherent manner. A "frequently asked question" module is also attached to each lesson so that questions students have may be answered faster.
          </p>
          <button>Learn More</button>
          </article>
            <img src="../../images/homepages/homepage_illustrations/accessibility.png" alt="Accessibility">
      </div>
    </div>

    <div id="card3_background" class="card_background">
      <div class="cards" id="card3">
        <article id="article3">
          <h2>Intelligent Feedback</h2>
          <p>The feedback provided by the platform gives the teacher an overview of the class. The system analyses where the students encounter difficulties and displays the information in a user-friendly way. This gives the teacher a fast and in depth understanding of the problems faced by the students and the class. This feedback also helps to improve the course itself.</p>
          <button>Learn More</button>
        </article>
          <img src="../../images/homepages/homepage_illustrations/intelligentfeedback.png" alt="Intelligent Feedback">
      </div>
    </div>

    <div id="card4_background" class="card_background">
      <div class="cards" id="card4">
        <article id="article4">
          <h2>Collaboration</h2>
          <p>
            The platform gives the possibility for teachers to use and edit the same lesson. This makes collaboration between them easier and more efficient. In addition all licensed lessons are shareable globally. This enables collaboration with collegues across the world.<br>
            Group work for students is also made easier with shared editing rights of files between the groupe's members.
          </p>
          <button>Learn More</button>
        </article>
          <img src="../../images/homepages/homepage_illustrations/connection.png" alt="Collaboration">
      </div>
    </div>

    <div id="card5_background" class="card_background">
      <div class="cards" id="card5">
        <article id="article5">
          <h2>Student Centered</h2>
          <p>The flipped classroom concept combined with the intelligent feedback allows a more student centered education. With the help of the course material available on the platform the students can learn at their own pace. The teacher can then give more individual support to those who need it most.</p>
        </article>
          <img src="../../images/homepages/homepage_illustrations/studentcentered.png" alt="Student Centered">
      </div>
    </div>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
#homepagecontent{
  display: flex;
  flex-direction: column;

  }
  article{
    max-width: 500px;
  }

  img {
      max-width: 100%;
      height: auto;
      max-height: 500px;
      width: auto\9; /* ie8 */
  }

.cards{
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  max-height: 500px;
  padding: 3em;
}

.card_background{
  display: flex;
  justify-content: center;

  overflow: hidden;
}

#card1{
  flex-direction: row;
  background: rgb(255, 237, 135);
}
#card1_background{
  background: rgb(255, 237, 135);
  clip-path: polygon(
  0 0,
  100% 0,
  100% calc(100% - 6vw),
  0 100%
);
}
#article1{
  color: rgb(86,84,196);
}

#card2{
  flex-direction: row;
  background: rgb(201, 208, 265);
  }


#card2_background{
  background: rgb(201, 208, 265);
  clip-path: polygon(
  0 6vw,
  100% 0,
  100% calc(100% - 6vw),
  0 100%
);
margin-top: -6vw;
}
#article2{
  color: rgb(78,79,212);
}

#card3{
  flex-direction: row-reverse;
  background: rgb(255,226,182);

}
#card3_background{
  background: rgb(255,226,182);
  clip-path: polygon(
  0 6vw,
  100% 0,
  100% 100%,
  0 calc(100% - 6vw)

);
margin-top: -6vw;
}
#article3{
  color: rgb(86,82,202);
}

#card4{
  flex-direction: row;
  background: rgb(255, 237, 135);
}
#card4_background{
  background: rgb(255, 237, 135);
  clip-path: polygon(
  0 0,
  100% 6vw,
  100% calc(100% - 6vw),
  0 100%
);
margin-top: -6vw;
}
#article4{
  color: rgb(86,84,196);
}

#card5{
  flex-direction: row-reverse;
  background: rgb(201, 208, 265);

}
#card5_background{
  background: rgb(201, 208, 265);
  clip-path: polygon(
  0 6vw,
  100% 0,
  100% calc(100% - 6vw),
  0 100%
);
margin-top: -6vw;
}
#article5{
  color: rgb(78,79,212);
}

</style>
