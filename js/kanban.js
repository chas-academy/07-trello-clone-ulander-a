$(document).ready(function () {

    // Define card
    function card(color, text) {
        return `<div class="kanban-card d-flex flex-column" style="background-color:` + color + `">
        <button>
            <span class="oi oi-minus" title="minus" aria-hidden="true"></span>
        </button>
        <p>` + text + `</p>
        </div>`
    }

    // Add new card
    $("input[type=text]").keypress(function (event) {
        if (event.which === 13) {
            let text = $(this).val();
            let color = "peachpuff";
            $(this).val("");
            $(this).next(".list-body").append(
                card(color, text)
            )
        }
    });

    // Delete card
    $(document).on("click", ".kanban-card > button", function () {
        $(this).parent().fadeOut(250, function () {
            $(this).remove();
        });
    });

});

