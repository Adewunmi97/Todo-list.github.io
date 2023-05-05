// delete function for a single list item

function deleteMe(me) {
    let thisCheck = $(me).parents(".list_items").find(".check_me");
    if ($(me).parents(".list_items").length == 1) {
        $('.del_container').removeClass('open');
    }
    if (thisCheck.prop("checked") == true) {
        $(me).parents(".list_items").remove()
    } else {
        $('.error').text('Kindly complete the task!').addClass('open');
        setTimeout(function () {
            $('.error').removeClass('open')
        }, 2000)
    }
}

// show trash can for a single list item checked

function showDelete(me) {
    let trash = $(me).parents(".list_items").find(".trash");
    if ($(me).prop("checked")) {
        trash.addClass('show');
    } else {
        trash.removeClass('show');
    }
}

// show trash container for all list items checked

$('.check_box').click(function () {
    if ($(this).prop("checked")) {
        $(".tasks").find(".check_me").prop({ checked: true })
        showDelete($(".tasks").find(".check_me"))
    } else {
        $(".tasks").find(".check_me").prop({ checked: false })
        showDelete($(".tasks").find(".check_me"))
    }
})

// delete button function for all items checked

$('.delete').click(function () {
    if ($('.check_box').prop("checked") == true) {
        $('.list_items').each((i, el) => {
            if ($(el).find(".check_me").prop("checked")) {
                $(el).remove()
            }
        });
        $('.check_box').prop({ checked: false });
        if ($('.list_items').length == 0) {
            $('.del_container').removeClass('open');
        }
    }
})

// input message into dom function

$('.send').click(function () {
    if ($('.input_task').val().length != 0) {
        $('.del_container').addClass('open');
        let list_item = (`<li class="list_items"><span class="check_text"><input type="checkbox" onclick="showDelete(this)" value="" id="" class="check_me"><p>${$('.input_task').val()}</p></span><span class="trash" onclick="deleteMe(this)"><i class="fas fa-trash"></i></span></li>`);
        $('.tasks').append(list_item);
        $('.input_task').val("");
    } else {
        $('.error').text('Please input a task!').addClass('open')
        setTimeout(function () {
            $('.error').removeClass('open')
        }, 2000)
    }
});

