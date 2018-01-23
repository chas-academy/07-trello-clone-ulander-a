$(document).ready(function (){

    $("#addbutton").on("click", function() {
        $(".list-body").append(
            "<div class='todo-item'>Test</div>"
        );
    });

});