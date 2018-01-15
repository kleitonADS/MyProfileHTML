// Hidden objects
$('#mensage_send').hide();
$('.link-resume').hide();
$('.leftlist').hide();
$('.rightlist').hide();
$('#form-main').hide();
$('.list_tool_feedback').hide();
$('.list_tool_basefe').hide();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
