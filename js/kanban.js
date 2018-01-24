$(document).ready(function () {
    let color = "#2196F3";
    colorBorder();

    // Render bottom border for input field
    function colorBorder() {
        $("input.add-card").css("border-bottom", "2px solid" + color + "");
    }

    // Define card
    function card(color, text) {
        return `<div class="kanban-card mt-2 d-flex flex-column" style="background-color:` + color + `">
        <div class="d-flex">
            <input disabled class="deadline mr-auto"></input>
            <button class="deadlinebutton">
                <span class="oi oi-calendar"></span>
            </button>
            <button class="deletebutton">
                <span class="oi oi-x"></span>
            </button>
        </div>
        <input class="datepicker add-deadline" type="text" placeholder="Add deadline">
            <p>` + text + `</p>
        </div>`
    }


    // Add new card
    $("input.add-card").keypress(function (event) {
        if (event.which === 13) {
            let text = $(this).val();
            $(this).val("");
            $(this).next(".list-body").append(
                card(color, text)
            );
            $(".datepicker").datepicker({
                altField: $(this).siblings().find(".deadline"),
                altFormat: "dd - mm - yy",
            }).on("change", function () {
                $(this).toggle();
            });
            $(".datepicker").hide();
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
        $("input.add-card").slideToggle();
    });


    // Toggle chosen color
    $(".color").on("click", function () {
        color = $(this).val();
        $(".oi-check").removeClass("oi-check");
        colorBorder();
        $(this).children().addClass("oi-check");
    });

    // Toggle deadline-input
    $(".datepicker").hide();
    $(document).on("click", ".deadlinebutton", function () {
        $(this).parent().next(".datepicker").slideToggle();
    });

});

