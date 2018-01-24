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

  // Open dialog on button-press
  $("#trash").on("click", function () {
    $("#dialog-confirm").dialog("open");
  });

  // Init tabs
  $(function () {
    $("#tabs").tabs({
      collapsible: true,
      active: false
    });
  });

  // Init Datepicker
  $(function () {
    $(".datepicker").datepicker({
      altField: $(this).find(".deadline"),
      altFormat: "dd - mm - yy",
    }).on("change", function () {
      $(this).toggle();
    });
  });

});

// $.widget("custom.save", {
//   _create: function () {
//     this.element
//       .addClass("save")
//       .text(progress);
//   }
  
// });

// let state = $(document);
// let jsonState = JSON.stringify(state);
