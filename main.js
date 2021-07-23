const inputText = $('input');
const addButton = $('.add');
const removeButton = $('.remove-completed');
const editButton = $('.edit-task');
const removeAllbutton = $('.remove-all');

addButton.on('click', function () {

    const box = $("<div class='boxes'></div>");
    const newTasktext = inputText.val();
    const newTaskdiv = $("<input type='checkbox' name='task-checkbox' class='task'>");
    const label = $("<label for='task-checkbox' class='label'></label>").text(newTasktext);

    box.css({
        'height': '50px',
        'display': 'flex',
        'align-items': 'center',
        'border': '1px solid lightgrey',
        'margin-left': '40px',
        'width': '80%',
        'padding-top': '9px'

    });

    newTaskdiv.css({
        'height': '30px',
        'line-height': '30px',
        'width': '30px',
        'margin-left': '20px',
    });

    label.css({
        'margin': '20px',
        'font-size': '20px'
    });

    $('body').append(box);
    $(box).append(newTaskdiv, label);
});

removeButton.on('click', function () {

    $('body').find('.task:checked').closest('.boxes').remove();

});

editButton.on('click', function () {
    
    $('body').find('.task:checked').closest('.boxes').remove();
    const box = $("<div class='boxes'></div>");
    const newTasktext = inputText.val();
    const newTaskdiv = $("<input type='checkbox' name='task-checkbox' class='task'>");
    const label = $("<label for='task-checkbox' class='label'></label>").text(newTasktext);

    box.css({
        'height': '50px',
        'display': 'flex',
        'align-items': 'center',
        'border': '1px solid lightgrey',
        'margin-left': '40px',
        'width': '80%',
        'padding-top': '9px'

    });

    newTaskdiv.css({
        'height': '30px',
        'line-height': '30px',
        'width': '30px',
        'margin-left': '20px',
    });

    label.css({
        'margin': '20px',
        'font-size': '20px'
    });

    $('body').append(box);
    $(box).append(newTaskdiv, label);
    
    
});


removeAllbutton.on('click', function () {
    
    if (confirm("Are you sure you would like delete all tasks?")) {
        $('.boxes').remove();
    } 
});

