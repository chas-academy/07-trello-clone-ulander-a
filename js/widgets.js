$(document).ready(function () {

  // Init Sortable
  $(function () {
    $("#sortable1, #sortable2, #sortable3").sortable({
      connectWith: ".list-body"
    }).disableSelection();
  });

  // Init Dialog
  $(function () {
    $("#dialog-confirm").dialog({
      resizable: false,
      autoOpen: false,
      height: "auto",
      width: 400,
      modal: true,
      dialogClass: "no-close",
      buttons: {
        "Delete all items": function () {
          $(".kanban-card").remove();
          $(this).dialog("close");
        },
        Cancel: function () {
          $(this).dialog("close");
        }
      }
    });
  });

  $(".menu > button").on("click", function() {
    $("#dialog-confirm").dialog("open");
  });

});

