var Carousel2 = (function ($) {
    'use strict';
    /*global jQuery*/
    var module = {
        config: function (config) {
            this.target = config.target;
        },
        early: function () {
            var self = this;
            self.target.append('<span class="nav-left2"></span><span class="nav-right2"></span>');
        },
        moveCarousel: function ($el, direction, reverse, callback) {
            var self = this,
                $current = self.target.find('.is-active2'),
                indexActive;

            $el.removeClass(direction);
            $current.removeClass('is-active2').addClass(direction);

            indexActive = $current.siblings('.' + reverse).removeClass(reverse).addClass('is-active2').index();
            indexActive = callback(indexActive, $el) || indexActive;

            if (direction === 'left2') {
                $el.eq(indexActive + 1).addClass(reverse);
            } else {
                $el.eq(indexActive - 1).addClass(reverse);
            }
        },
        events: function () {
            var self = this;

            self.target.on('click', '.nav-left2, .left2', function (e) {
                e.preventDefault();
                self.moveCarousel($('.carousel-wrapper2 li'), 'right2', 'left2', function (cur, $el) {
                    if ((cur - 1) <= 1) {
                        return $el.length - 1;
                    }
                });
            });

            self.target.on('click', '.nav-right2, .right2', function (e) {
                e.preventDefault();
                self.moveCarousel($('.carousel-wrapper2 li'), 'left2', 'right2', function (cur, $el) {
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
                    $('.nav-right2').trigger('click');
                }

                if(e.which === 37) {
                    $('.nav-left2').trigger('click');
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