const lightPaletAlerts = 
{
'success': { icon: 'fa-solid fa-circle-check', corBgIco: '#a6ff80', corTxIco: '#30b44a', corBarld: '#7dd05a' },
'error': { icon: 'fa-solid fa-bomb', corBgIco: '#ff9898', corTxIco: '#d05a5a', corBarld: '#ff6c6c' },
'warning': { icon: 'fa-solid fa-triangle-exclamation', corBgIco: '#FFD080', corTxIco: '#CE8500', corBarld: '#e1a132' },
'info': { icon: 'fa-solid fa-circle-exclamation', corBgIco: '#757676', corTxIco: '#cccccc', corBarld: '#999999'},
'notification': { icon: 'fa-solid fa-bell', corBgIco: '#f7f068', corTxIco: '#bebb00', corBarld: '#b0b529' }
};

function callFlameAlert(type, message) 
{
const $btnAlert = $('.btn-alert');
const $alertContainer = $('<div>', { class: 'alert-card' });

$alertContainer.html(`
  <div class="b-out">
    <div class="b-in">
      <div class="alert">
        <div class="btn-close"><i class="fa-solid fa-xmark"></i></div>
        <div class="msg"><span class="msg-t"></span></div>
        <div class="icon"></div>
        <div class="bar-load"></div>
      </div>
    </div>
  </div>
`);
$('body').append($alertContainer);

const $bxAlert = $('.alert-card');
const $bxBack = $('.btn-close');
const $bxIcon = $('.icon');
const $bxBarL = $('.bar-load');
const $bxMsgA = $('.msg-t');
let last_time_id;

function hideAlert() 
{
  $bxAlert.removeClass('active');
  $btnAlert.prop('disabled', false);
}

function setHideTimeout() 
{
  last_time_id = setTimeout(hideAlert, 4499);
}

if (lightPaletAlerts[type] && message) 
{
  const config = lightPaletAlerts[type];
  $bxIcon.attr('class', `icon ${config.icon}`);
  $bxIcon.css({ 'background-color': config.corBgIco, 'color': config.corTxIco });
  $bxBack.css({ 'background-color': config.corTxIco, 'color': config.corBgIco });
  $bxBarL.css('background-color', config.corBarld);
  $bxMsgA.text(message);
}

$btnAlert.on('click', function() 
{
  $bxAlert.addClass('active');
  $btnAlert.prop('disabled', true);

  clearTimeout(last_time_id);
  setHideTimeout();
});

$bxBack.on('click', function() 
{
  $bxAlert.removeClass('active');
  $btnAlert.prop('disabled', false);
});

setHideTimeout();
}

callFlameAlert('error', 'Nova mensagem');