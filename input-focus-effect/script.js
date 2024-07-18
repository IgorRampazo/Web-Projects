let input = $('#input');
let label = $('.leg');
 
input.focus(()=> {label.addClass('active');});
label.click(()=> 
{
    label.addClass('active');
    input.focus();
});

input.blur((event)=>
{
    if (input.val() != '')
    {event.preventDefault();}
    else
    {label.removeClass('active');}
});