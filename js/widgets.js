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
      default: 0,
      element: ".box",
      checkmark: "X",
      selector: "background-color",
      colors: {
        red: "red",
        blue: "blue",
        green: "green",
        yellow: "yellow"
      },
    },
    _create: function () {

      var colorsArr = $.map(this.options.colors, function(value, index) {
        return [value];
      });
  
      var chkmrk = this.options.checkmark;

      var defaultVal = this.options.default;

      var buttonsArr = [];

      var element = this.options.element;
      var defaultColor = colorsArr[this.options.default];
      var selector = this.options.selector;

      $(element).css(selector, defaultColor);

      for (let i = 0; i < 4; i++) {
        if (i == defaultVal) {
          btn = `<button class="color" value="`+colorsArr[i]+`" style="background-color:`+colorsArr[i]+`">`+chkmrk+`</button>`;
        } else {
          btn = `<button class="color" value="`+colorsArr[i]+`" style="background-color:`+colorsArr[i]+`"></button>`;
        }
        buttonsArr.push(btn);
      }

      var b0 = buttonsArr[0];
      var b1 = buttonsArr[1];
      var b2 = buttonsArr[2];
      var b3 = buttonsArr[3];

      // Add color buttons
      this.add = $(b0+b1+b2+b3).appendTo(this.element);
      
      $(".color").on("click", function () {
        maincolor = $(this).val();
        $(element).css(selector, $(this).val());
        $(".color").removeClass("checked");
        $(".color").text("");
        $(this).addClass("checked");
        $(this).append(chkmrk);
      });
    },
    _setOptions(element, checkmark, colors) {
      this._super(key, value);
    },
    _destroy: function () { },

  });

  $(".colors").colorpicker({
    default: 1,
    element: ".add-card",
    checkmark: "<span class='oi oi-check'></span>",
    selector: "border-color",
    colors: {
      red: "#F44336",
      blue: "#2196F3",
      green: "#4CAF50",
      yellow: "#FFEB3B"
    }
  });

});

