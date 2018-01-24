$(document).ready(function () {
    let color = "#2196F3";
    colorBorder();

    // Render bottom border for input field
    function colorBorder() {
        $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }

    // Define card
    function card(color, text) {
        return `<div class="kanban-card mt-1 d-flex flex-column" style="background-color:` + color + `">
        <div class="d-flex justify-content-between">
            <small class="text-faded">dd - mm - yy</small>
            <button class="deletebutton">
                <span class="oi oi-x"></span>
            </button>
        </div>
            <p>` + text + `</p>
        </div>`
    }

    // Add new card
    $("input[type=text]").keypress(function (event) {
        if (event.which === 13) {
            let text = $(this).val();
            $(this).val("");
            $(this).next(".list-body").append(
                card(color, text)
            )
        }
    });

    // Delete card
    $(document).on("click", ".deletebutton", function () {
        $(this).closest(".kanban-card").fadeOut(250, function () {
            $(this).remove();
        });
    });

    // Toggle input field
    $(".list > header").on("click", "button", function () {
        $(this).children().toggleClass("oi-chevron-top oi-chevron-bottom");
        $("input[type=text]").slideToggle();
    });


    // Toggle chosen color
    $(".color").on("click", function () {
        color = $(this).val();
        $(".oi-check").removeClass("oi-check");
        colorBorder();
        $(this).children().addClass("oi-check");
    });

});

