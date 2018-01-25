$(document).ready(function () {

    // Load local storage for kanban-app
    let savedCards = JSON.parse(localStorage.getItem("kanban"));

    // Check if there was a saved board state
    if (savedCards === null) {
        // Create an empty array for that the save function can use
        var cards = [];
    } else {
        // Populate the lists with their corresponding saved cards
        for (let i = 0; i < savedCards.length; i++) {
            populateBoard(savedCards[i]);
        }
    }

    function populateBoard(savedCard) {
        // console.log(savedCard);
        let color = savedCard.color.substring(17, 35);
        let list = savedCard.parent;
        let text = savedCard.text;

        if (list === "todo") {
            $("#todo").find(".list-body").append(card(color, text));
        } else if (list === "doing") {
            $("#doing").find(".list-body").append(card(color, text));
        } else if (list === "done") {
            $("#done").find(".list-body").append(card(color, text));
        }
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
            let color = $(".checked").css("background-color");
            $(this).val("");
            $(this).next(".list-body").append(
                card(color, text)
            );
            // Add datepicker
            $(".datepicker").datepicker({
                altField: "",
                altFormat: "dd - mm - yy",
            }).on("change", function () {
                $(this).datepicker("option", "altField", $(this).siblings().find(".deadline"));
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

    // Toggle deadline-input
    $(".datepicker").hide();
    $(document).on("click", ".deadlinebutton", function () {
        $(this).parent().next(".datepicker").slideToggle();
    });

    $("#save").on("click", function () {
        cards = [];
        for (let i = 0; i < $(".kanban-card").length; i++) {
            // cardDeadline = $(".kanban-card")[i].find("input"); broken
            cardParent = $(".kanban-card")[i].closest(".list").id;
            cardColor = $(".kanban-card")[i]["attributes"][1].value;
            cardText = $(".kanban-card")[i]["innerText"];

            let cardToSave = {
                parent: cardParent,
                // deadline: cardDeadline,
                color: cardColor,
                text: cardText
            }

            cards.push(cardToSave);
        }
        
        localStorage.removeItem("kanban");
        window.localStorage.setItem("kanban", JSON.stringify(cards));
    });

});