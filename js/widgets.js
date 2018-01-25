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
          localStorage.removeItem("kanban");
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

  // Init custom colorpicker widget

  $.widget("kanban.colorpicker", {
    options: {
      element: ".box",
      checkmark: "X",
      colors: {
        red: "red",
        blue: "blue",
        green: "green",
        yellow: "yellow"
      },
    },
    _create: function () {

      // Add color buttons
      this.buttons = $(
        `<button class="color" value="` + this.options.colors.red + `" style="background-color:` + this.options.colors.red + `"></button>
      <button class="color" value="`+ this.options.colors.blue + `" style="background-color:` + this.options.colors.blue + `"></button>
      <button class="color" value="`+ this.options.colors.green + `" style="background-color:` + this.options.colors.green + `"></button>
      <button class="color" value="`+ this.options.colors.yellow + `" style="background-color:` + this.options.colors.yellow + `"></button>`
      ).appendTo(this.element);

      var checkmark = this.options.checkmark;
      var element = this.options.element;

      $(".color").on("click", function () {
        maincolor = $(this).val();
        $(element).css("border-color", $(this).val());
        $(".color").removeClass("checked");
        $(".color").text("");
        $(this).addClass("checked");
        $(this).append(checkmark);
      });
    },
    _setOptions(buttons, element, checkmark, colors) {
      this._super(key, value);
    },
    _destroy: function () { },

  });

  $(".colors").colorpicker({
    element: ".add-card",
    checkmark: "<span class='oi oi-check'></span>",
    colors: {
      red: "#F44336",
      blue: "#2196F3",
      green: "#4CAF50",
      yellow: "#FFEB3B"
    }
  });

});

