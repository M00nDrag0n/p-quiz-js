$(document).ready(function(){
  $("form#personalitySurvey").submit(function(event){
    event.preventDefault();
    $("#mood-responses").show();
    $("input:checkbox[name=moodSurvey]:checked").each(function(){
      var currentMood = $(this).val();
        $("#mood-responses").append(currentMood + "<br>");
    });
    $("#stress-responses").show();
    $("input:checkbox[name=stressSurvey]:checked").each(function(){
      var currentstress = $(this).val();
      $("#stress-responses").append(currentstress + "<br>");
    });
    $("#personalitySurvey").hide();
  });
});
