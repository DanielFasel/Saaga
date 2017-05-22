<template>

  <div class="content_container" id="homeworks_content">
  	<student-game></student-game>
  	<div>Month/Weeks</div>
  	<student-calendar-months></student-calendar-months>
  	<student-calendar-weeks></student-calendar-weeks>
  	<student-calendar-days></student-calendar-days>
  </div>

</template>



<script>

	import StudentGame from "../student_helpers/student_game/student_game.vue"
	import StudentCalendarMonths from "../student_helpers/student_calendars/student_calendar_months/student_calendar_months.vue"
	import StudentCalendarWeeks from "../student_helpers/student_calendars/student_calendar_weeks/student_calendar_weeks.vue"
	import StudentCalendarDays from "../student_helpers/student_calendars/student_calendar_days/student_calendar_days.vue"

	export default {

		components: {
			"student-game": StudentGame,
			"student-calendar-months": StudentCalendarMonths,
			"student-calendar-weeks": StudentCalendarWeeks,
			"student-calendar-days": StudentCalendarDays
		},

 		data: function () {
    		return {
      			message: ""
    		}
  		}
	}

</script>



<style>
	#homeworks_content{
		display: flex;
		flex-direction: column;
	}
</style>
