$(document).ready(function (){

    $("#addbutton").on("click", function() {
        $(this).parent().next(".list-body").append(
            "<div class='todo-item'>Test</div>"
        );
    });

});