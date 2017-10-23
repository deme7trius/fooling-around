$(document).ready(function(){
	$(window).on("scroll touchmove", function () {
    $('body').toggleClass('scrl', $(document).scrollTop() > 0);
});
	// $('.tab a').on('click', function(e){
	// 	e.preventDefault();
	// 	$(this).parent().siblings().find('a').removeClass('active');
	// 	$(this).addClass('active');
	// 	if($(this).hasClass('active')){
	// 	$(this).parent().siblings().find('div.textfield').slideUp('slow');
	// 		$(this).next('div.textfield').slideToggle('slow');
	// 	} else {
	// 		$(this).next('div.textfield').hide();
	// 	}
	// });
$(function() {
    
    var $section = $('#section-four');
    
	function showPer(){
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
};
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            showPer();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});
          $('.flexslider').flexslider({
                    animation: "slide",
                    animationLoop: false,
                    itemWidth: 320,
                    itemMargin: 5,
                    minItems: 1,
                    maxItems: 1,
                    slideshowSpeed: 100
              });
//scroll
        var lastId,
    topMenu = $("#site-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+1;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
//paral
var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.addEventListeners()}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind)}destroy(){this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&this.reset()}reset(){requestAnimationFrame(()=>{this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1);let i=(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),s=(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2);return{tiltX:i,tiltY:s,percentageX:100*t,percentageY:100*e}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.transitionTimeout=setTimeout(()=>this.element.style.transition="",this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//end paral
//portfolio
/*!
 jQuery.sdFilterMe v0.1
 (c) 2015 Steve David <http://www.steve-david.com>

 MIT-style license.
 */

;(function($) {

    $.fn.extend({
        sdFilterMe: function(options) {
            if (options && typeof(options) == 'object') {
                options = $.extend({}, $.sdFilterMe.defaults, options);
            }

            if($(this).length == 1) {
                new $.sdFilterMe(this, options);
            }

            return this;
        }
    });

    $.layout = [];

    $.sdFilterMe = function(el, options) {
        var $el = $(el);

        $(window).on('load', function() {

            $el = $.sdFilterMe.buildLayout(el, options);
            $.layout = $.sdFilterMe.storeCoordinates($el);

            $(window).on('resize', function() {
                $.layout = $.sdFilterMe.storeCoordinates($el);
            });

            var $boxes = $el.find('> .sdfm-inner-wrapper');

            // Triggering events


            $(options.filterSelector).css('cursor', 'pointer').on('click', function(e) {
                e.preventDefault();
                $.sdFilterMe.filterBoxes($el, $(this).attr('data-filter'), options);
            });

            $(options.orderSelector).css('cursor', 'pointer').on('click', function(e) {
                e.preventDefault();
                $.sdFilterMe.sortBoxes($boxes, $(this).attr('data-order'), options);
            });

            if(options.hoverEffect) {
                $.sdFilterMe.hoverEffect($el, options);
            }
        });
    };

    $.sdFilterMe.buildLayout = function(el, options) {

        var $el = $(el)
            , $lis = $el.find('> li')
            , widths = []
            , heights = []
            , clones = []
            , maxWidth
            , maxHeight
            , outerWrapperId = 'sdfm-wrapper'
            , $outerWrapper = $('<div />')
                .attr('id', outerWrapperId)
                .css({
                    'vertical-align': 'top',
                    'display': 'block',
                    'margin': 'auto'
                });


        $el.css({
            'list-style-type': 'none'
        }).wrap($outerWrapper);

        $lis.css({
            'display': 'inline-block'
        }).each(function(i) {
            widths[i] = $(this).outerWidth() + options.css.border.width * 2;
            heights[i] = $(this).outerHeight() + options.css.border.width * 2;
            clones[i] = $(this).children().clone();
        });

        maxWidth = Math.max.apply(Math, widths);
        maxHeight = Math.max.apply(Math, heights);

        $wrapper = $('<div />')
            .width(maxWidth)
            .height(maxHeight)
            .css({
                // Setting transitions
                '-webkit-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-moz-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-ms-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-o-transition': 'all ' + options.duration + 'ms ' + options.animation,
                'transition': 'all ' + options.duration + 'ms ' + options.animation,

                // Others properties
                'float': 'left',
                'display': 'inline-block',
                'padding': 0,
                'position': 'relative',
                'border': options.css.border.width + 'px solid ' + options.css.border.color,
                'margin': options.css.margin
            });

        if(options.css.pointer) {
            $wrapper.css('cursor', 'pointer');
        }


        for(var i = 0; i < clones.length; ++i) {
            var title = $lis.eq(i).data('title')
                , link = $lis.eq(i).data('link')
                , order = $lis.eq(i).data('order')
                , $wrapperClone = $wrapper
                    .clone()
                    .attr('data-id', i)
                    .html(clones[i])
                    .attr({
                        'class': 'sdfm-inner-wrapper ' + $lis.eq(i).attr('class')
                    });

            if(typeof(title) !== 'undefined') {
                $.sdFilterMe.addOverlayTitles($wrapperClone, title, options, maxWidth, maxHeight);
            }

            if(typeof(link) !== 'undefined') {
                 $.sdFilterMe.addLink($wrapperClone, link, options);
            }

            if(typeof(order) !== 'undefined') {
                $wrapperClone.attr('data-order', order);
            }

            $lis.eq(i).remove();
            $('#' + outerWrapperId).append($wrapperClone);
        }

        $outerWrapper = $('#' + outerWrapperId);

        $outerWrapper.before($el.clone(true)).find('> .sdfm-inner-wrapper').on('click', function() {
            $('#' + outerWrapperId).prev('ul').trigger('fm.boxClicked', [$(this).index(), $(this).attr('data-order')]);
        });
        $el.remove();

        return $outerWrapper;

    };

    $.sdFilterMe.storeCoordinates = function($el) {

        var layout = {};
        $el.find('> .sdfm-inner-wrapper').each(function(i) {

            layout[i] = {
                origPosX: this.offsetLeft,
                origPosY: this.offsetTop,
                newPosX: this.offsetLeft,
                newPosY: this.offsetTop
            };
        });
        return layout;
    };

    $.sdFilterMe.addOverlayTitles = function($box, title, options, maxWidth, maxHeight) {

        var backgroundColor = options.css.overlay.background;
        $overlay = $('<div />')
            .addClass('sdfm-overlay')
            .css({
                'background-color': 'rgba(' + backgroundColor.r + ', ' + backgroundColor.v + ', ' + backgroundColor.b + ', ' + options.css.overlay.opacity + ')',
                'position': 'absolute',
                'top': 0,

                '-webkit-transition': 'all ' + options.css.overlay.duration + 'ms ' + options.animation,
                '-moz-transition': 'all ' + options.css.overlay.duration + 'ms ' + options.animation,
                '-ms-transition': 'all ' + options.css.overlay.duration + 'ms ' + options.animation,
                '-o-transition': 'all ' + options.css.overlay.duration + 'ms ' + options.animation,
                'transition': 'all ' + options.css.overlay.duration + 'ms ' + options.animation,

                'text-align': 'center',
                'left': 0,
                'width': maxWidth - options.css.border.width * 2,
                'height': maxHeight - options.css.border.width * 2
            });

        $title = $('<span />')
            .css({
                'margin': 'auto',
                'text-transform': 'uppercase',
                'display': 'inline-block',
                'padding': '5px',
                'width': 'auto',
                'height': '50px',
                'top': '50%',
                'margin-top': '25px',
                'color': options.css.overlay.color,
                'font-size': '2em',
                'border': options.css.overlay.border,
                'font-weight': 'bold'
            }).html(title);

        $box.append($overlay.append($title));
    };

    $.sdFilterMe.translateBox = function($box, target, options, hide) {

        if(!$.layout[$box.index()]) {
            console.error('Error: can\'t read value for '+ $box.index() +' in $.layout[].');
            return;
        }

        var i = $box.index()
            , top = $.layout[i].origPosY
            , left = $.layout[i].origPosX
            , origPosX = $.layout[target].origPosX
            , origPosY = $.layout[target].origPosY
            , translateX = origPosX - left
            , translateY = origPosY - top
            , cssValue = 'translate(' + translateX + 'px, ' + translateY + 'px)';

        if(options.sortedOut == 'disappear' && hide === true) {
            cssValue += ' scale(0, 0)';
            $box.addClass('sdfm-box-hidden');
        } else if(options.sortedOut == 'disappear' && hide === false) {
            cssValue += ' scale(1, 1)';
            $box.removeClass('sdfm-box-hidden');
        } else {
            $box.removeClass('sdfm-box-hidden');
        }


        $.sdFilterMe.applyTransform($box, cssValue);

        $.layout[i].newPosX = origPosX;
        $.layout[i].newPosY = origPosY;
    };

    $.sdFilterMe.nothingToShow = function($wrapper, options) {
        $nothingToShow = $('<h3 />')
            .addClass('sdfm-nothing')
            .css({
                'font-size': '4em',
                'color': options.nothingToShow.color,
                'height': '0px',
//                'display': 'none',
                'position': 'relative',
                'margin': 0,
                'transform': 'scale(0,0)',
//                'margin-bottom': '-125px',
                'width': '100%',
                'text-align': 'center',
//                'top': '50px',
                // Setting transitions
                '-webkit-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-moz-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-ms-transition': 'all ' + options.duration + 'ms ' + options.animation,
                '-o-transition': 'all ' + options.duration + 'ms ' + options.animation,
                'transition': 'all ' + options.duration + 'ms ' + options.animation
            }).html(options.nothingToShow.text);

        if(!$wrapper.prev('h3').hasClass('sdfm-nothing')) {
            $wrapper.before($nothingToShow);
        }

        window.setTimeout(function() {
            $.sdFilterMe.applyTransform($nothingToShow, 'scale(1, 1)');
        }, options.duration / 2);
    };

    $.sdFilterMe.filterBoxes = function($el, filter, options) {

        var j = 0
            , $boxes = $el.find('> .sdfm-inner-wrapper')
            , k = $boxes.length - 1
            , nothing = []
            , l = 0;

        $boxes.each(function() {

            if($(this).hasClass(filter) || filter === '*') {

                if(options.sortedOut == 'opacity') {
                    $(this).animate({opacity: 1}, {duration: options.duration});
                }

                $.sdFilterMe.translateBox($(this), j++, options, false);

            } else {

                nothing[l] = true;
                if(options.sortedOut == 'opacity') {
                    $(this).animate({opacity: 0.25}, {duration: options.duration});
                }
                $.sdFilterMe.translateBox($(this), k--, options, true);
                ++l;
            }
        });
        if(nothing.length == $boxes.length) {
            $.sdFilterMe.nothingToShow($el, options);
        } else {
            $.sdFilterMe.applyTransform($el.prev('.sdfm-nothing'), 'scale(0, 0)', options, function() {
                $el.prev('.sdfm-nothing').remove();
            });

        }



    };

    $.sdFilterMe.applyTransform = function($box, value, options, callback) {
        $box.css({
            '-webkit-transform': value,
            '-moz-transform': value,
            '-o-transform': value,
            '-ms-transform': value,
            'transform': value
        });

        if(callback) {
            window.setTimeout(function() {
                callback();
            }, options.duration)
        }
    };

    $.sdFilterMe.hoverEffect = function($el, options) {

        $el.find('> .sdfm-inner-wrapper').hover(function() {

            $(this).find('> .sdfm-overlay').fadeOut(options.css.overlay.duration).css({
                'transform': 'scale(0, 0)'
            });

        }, function() {

            $(this).find('> .sdfm-overlay').fadeIn(options.css.overlay.duration).css({
                'transform': 'scale(1, 1)'
            });

        })
    };

    $.sdFilterMe.addLink = function($box, link, options) {

        $box.on('click', function() {
            document.location = link;
        });

    };

    $.sdFilterMe.sortBoxes = function($boxes, sorting, options) {
        var k = $boxes.length - 1;
        $boxes.each(function(index, elem) {

            if(sorting == 'asc') {
                $.sdFilterMe.translateBox($(elem), $(elem).attr('data-order'), options, false);
            } else if(sorting == 'desc') {
                $.sdFilterMe.translateBox($(elem), k - $(elem).attr('data-order'), options, false);
            }

            $.sdFilterMe.applyTransform($boxes.parent().prev('.sdfm-nothing'), 'scale(0, 0)', options, function() {
                $boxes.parent().prev('.sdfm-nothing').remove();
            });
        });
    };

    $.sdFilterMe.defaults = {
        filterSelector: '.sorter',
        orderSelector: '.orderer',
        duration: 1000,
        animation: 'ease',
        hoverEffect: true,
        sortedOut: 'disappear',
        css: {
            overlay: {
                background: {
                    r: 0,
                    v: 0,
                    b: 0
                },
                duration: 250,
                border: '1px solid white',
                color: 'white',
                opacity: 0.5
            },
            border: {
                width: 10,
                color: '#2A4153'
            },
            margin: 10,
            pointer: true
        },
        nothingToShow: {
            text: 'Nothing to show'
        }
    };

})(jQuery);

jQuery(function($) {
    $('#sort-me').sdFilterMe({
        filterSelector: '.sorter',
        orderSelector: '.orderer',
        duration: 1000,
        animation: 'ease',
        hoverEffect: true,
        sortedOut: 'disappear',
        css: {
            overlay: {
                background: {
                    r: 0,
                    v: 0,
                    b: 0
                },
                duration: 250,
                border: '1px solid white',
                color: 'white',
                opacity: 0.5
            },
            border: {
                width: 10,
                color: '#2A4153'
            },
            margin: 10,
            pointer: true
        },
        nothingToShow: {
            text: 'Nothing to show',
            color: '#ccc'
        }
    }).on('fm.boxClicked', function(e, position, order) {
        console.log('Box position is ' + position);
        console.log('Box sort order is ' + order);
    });
});
//end portfolio
});