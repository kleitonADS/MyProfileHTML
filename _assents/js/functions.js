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
    navigator.serviceWorker.register('js/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);   
    });
  });
}
