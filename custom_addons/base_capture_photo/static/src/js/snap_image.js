odoo.define('base_capture_photo.snap_image', function (require) {
'use strict';

    require('web.dom_ready');
    var ajax = require('web.ajax');
//    var canvas = $('#canvas1');
//    var context = canvas[0].getContext('2d');
//    context.font = "20px Verdana";
//    context.fillText("Scan & Upload Photo", 15, 80);
    
    var publicWidget = require('web.public.widget');

publicWidget.registry.SnapImage = publicWidget.Widget.extend({
        selector: '.o_snap_image_main_probc',
        events: {
            'change #snap_image': '_onChangeSnapImage',
            'click #submit_snap': '_onClickSubmitSnap',
            'change .subscription_quantity_input_probc': '_onChangeInputQty',
        },
        init: function (parent, options) {
            this._super.apply(this, arguments);
            this.canvas = $('#canvas1');
            this.context = this.canvas[0].getContext('2d');
        },
        start: function(ev){
            this.context.font = "20px Verdana";
            this.context.fillText("Scan & Upload Photo", 15, 80);
        },
        _onChangeSnapImage: function(ev){
            var reader = new FileReader();
            var self = this

            reader.onload = function (e) {
                var dataURL = e.target.result,
                img = new Image();

                img.onload = function() {
                  self.context.drawImage(img, 0, 0, 220, 150);
                  var imageDataURLs = self.canvas[0].toDataURL('image/png');
                  var $input = $(".product_id");
                };
                img.src = dataURL;
            }
            reader.readAsDataURL($(ev.currentTarget)[0].files[0]);
        },
        _onClickSubmitSnap: function(ev){
            var imageDataURLs = this.canvas[0].toDataURL('image/png');
            ajax.jsonRpc("/snap/image", 'call', {
                'res_id': $(".o_snap_image").attr('data-res-id'),  
                'res_model': $(".o_snap_image").attr('data-res-model'),
                'imageDataURLs': imageDataURLs
            }).then(function (data) {
                window.location.reload()
            });
        },
    });
//    $("#snap_image").on("change", function(oe){
//        var reader = new FileReader();

//        reader.onload = function (e) {
//            var dataURL = e.target.result,
//            img = new Image();

//            img.onload = function() {
//              context.drawImage(img, 0, 0, 220, 150);
//              var imageDataURLs = canvas[0].toDataURL('image/png');
//              var $input = $(".product_id");
//            };
//           
//            img.src = dataURL;
//        }
//        reader.readAsDataURL($(this)[0].files[0]);
//    });
//    $("#submit_snap").on("click", function(oe){
//        var imageDataURLs = canvas[0].toDataURL('image/png');
//        ajax.jsonRpc("/snap/image", 'call', {
//            'res_id': $(".o_snap_image").attr('data-res-id'),  
//            'res_model': $(".o_snap_image").attr('data-res-model'),
//            'imageDataURLs': imageDataURLs
//        }).then(function (data) {
//            window.location.reload()
//        });
//    });
    
    
});
