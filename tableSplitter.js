function tableSplitter (options) {

    this.options = { //default options
      sourceId:'my-table',
      targetId:'table-splitter',
      isMatrix:false,
      breakPoint:480
    };

    if (options) {
      for (key in options) {
        this.options[key] = options[key];
      }
    }

    this.build = function () {

      var source = jQuery('#'+this.options.sourceId);

      var target = jQuery('#'+this.options.targetId);

      var isMatrix = this.options.isMatrix;

      var header = source.find('tr').eq(0);

      var numCols = jQuery(header).children().length - 1;



      for (var i = isMatrix ? 1 : 0; i <= numCols; i++) {


        var table = jQuery(source).clone();

        table.removeAttr('id');

        table.empty();
        
        target.append(table);

        if (isMatrix) {
          var newHeader = jQuery(header).clone().empty();
          jQuery(newHeader).append(jQuery(header).children().eq(0).clone()); // cella header a volte vuota
          jQuery(newHeader).append(jQuery(header).children().eq(i).clone()); // titolo colonna

          table.append(newHeader);
        }

        var index = isMatrix ? 0 : 1;

        jQuery(source).find('tr').each (function() {

          if (index) {
            var tr = jQuery(this).clone();
            jQuery(tr).empty();
            table.append(tr);

            var td = (jQuery(this).children().eq(0)).clone();
            if (isMatrix) jQuery(tr).append(td);
            td = (jQuery(this).children().eq(i)).clone();
            jQuery(tr).append(td);
          }
          index++;
          
        });

        
      }

      this.showTables();

    };

    this.showTables = function () {

      var breakPoint = this.options.breakPoint;

      var source = jQuery('#'+this.options.sourceId);

      var target = jQuery('#'+this.options.targetId);

      if (jQuery(document).width() < breakPoint) {

        source.hide();
        target.show();

      } else {

        source.show();
        target.hide();
      }
    }

    this.build();

    var _this = this;
      
    jQuery(window).resize(function() {
      _this.showTables();
      //console.log(_this);
    });
  };