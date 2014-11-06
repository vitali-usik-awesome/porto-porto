/*
--------------------------------
CSS3 Perspective Carousel
--------------------------------
+ https://github.com/pinceladasdaweb/CSS3-Perspective-Carousel
+ version 1.0
+ Copyright 2013 Pedro Rogerio
+ Licensed under the MIT license

+ Documentation: https://github.com/pinceladasdaweb/CSS3-Perspective-Carousel
*/
var Carousel3 = (function ($) {
    'use strict';
    /*global jQuery*/
    var module = {
        config: function (config) {
            this.target = config.target;
        },
        early: function () {
            var self = this;
            self.target.append('<span class="nav-left3"></span><span class="nav-right3"></span>');
        },
        moveCarousel: function ($el, direction, reverse, callback) {
            var self = this,
                $current = self.target.find('.is-active3'),
                indexActive;

            $el.removeClass(direction);
            $current.removeClass('is-active3').addClass(direction);

            indexActive = $current.siblings('.' + reverse).removeClass(reverse).addClass('is-active3').index();
            indexActive = callback(indexActive, $el) || indexActive;

            if (direction === 'left3') {
                $el.eq(indexActive + 1).addClass(reverse);
            } else {
                $el.eq(indexActive - 1).addClass(reverse);
            }
        },
        events: function () {
            var self = this;

            self.target.on('click', '.nav-left3, .left3', function (e) {
                e.preventDefault();
                self.moveCarousel($('.carousel-wrapper3 li'), 'right3', 'left3', function (cur, $el) {
                    if ((cur - 1) <= 1) {
                        return $el.length - 1;
                    }
                });
            });

            self.target.on('click', '.nav-right3, .right3', function (e) {
                e.preventDefault();
                self.moveCarousel($('.carousel-wrapper3 li'), 'left3', 'right3', function (cur, $el) {
                    if ((cur + 1) >= ($el.length - 1)) {
                        return '0';
                    }
                });
            });

            $(document).keyup(function (e) {
                if (!self.target) {
                    return;
                }

                if(e.which === 39) {
                    $('.nav-right3').trigger('click');
                }

                if(e.which === 37) {
                    $('.nav-left3').trigger('click');
                }
            });
        },
        init: function (config) {
            module.config(config);

            module.early();
            module.events();
        }
    };

    return {
        init: module.init
    };
}(jQuery));




