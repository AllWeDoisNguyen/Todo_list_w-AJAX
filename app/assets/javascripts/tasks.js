// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready page:load", ready);

function ready() {
	$('#new_task').on('ajax:success', newTask);

	function newTask(event, data) {
		console.log(arguments);
		console.log("this string is here");
	   $('#tasks').append(data);
	   $('#task_name').val('');
	}
}