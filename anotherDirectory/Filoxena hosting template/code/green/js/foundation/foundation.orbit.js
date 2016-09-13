!function(a,b,c,d){"use strict";var e=function(){},f=function(e,f){if(e.hasClass(f.slides_container_class))return this;var j,k,l,m,n,o,p=this,q=e,r=0,s=!1;q.children().first().addClass(f.active_slide_class),p.update_slide_number=function(b){f.slide_number&&(k.find("span:first").text(parseInt(b)+1),k.find("span:last").text(q.children().length)),f.bullets&&(l.children().removeClass(f.bullets_active_class),a(l.children().get(b)).addClass(f.bullets_active_class))},p.build_markup=function(){q.wrap('<div class="'+f.container_class+'"></div>'),j=q.parent(),q.addClass(f.slides_container_class),f.navigation_arrows&&(j.append(a("<a>").addClass(f.prev_class).append("<span>")),j.append(a("<a>").addClass(f.next_class).append("<span>"))),f.timer&&(m=a("<div>").addClass(f.timer_container_class),m.append("<span>"),m.append(a("<div>").addClass(f.timer_progress_class)),m.addClass(f.timer_paused_class),j.append(m)),f.slide_number&&(k=a("<div>").addClass(f.slide_number_class),k.append("<span></span> of <span></span>"),j.append(k)),f.bullets&&(l=a("<ol>").addClass(f.bullets_container_class),j.append(l),q.children().each(function(b){var c=a("<li>").attr("data-orbit-slide",b);l.append(c)})),f.stack_on_small&&j.addClass(f.stack_on_small_class),p.update_slide_number(0)},p._goto=function(b,c){if(b===r)return!1;"object"==typeof o&&o.restart();var d=q.children(),e="next";s=!0,r>b&&(e="prev"),b>=d.length?b=0:0>b&&(b=d.length-1);var g=a(d.get(r)),h=a(d.get(b));g.css("zIndex",2),h.css("zIndex",4).addClass("active"),q.trigger("orbit:before-slide-change"),f.before_slide_change();var i=function(){var a=function(){r=b,s=!1,c===!0&&(o=p.create_timer(),o.start()),p.update_slide_number(r),q.trigger("orbit:after-slide-change",[{slide_number:r,total_slides:d.length}]),f.after_slide_change(r,d.length)};q.height()!=h.height()?q.animate({height:h.height()},250,"linear",a):a()};if(1===d.length)return i(),!1;var j=function(){"next"===e&&n.next(g,h,i),"prev"===e&&n.prev(g,h,i)};h.height()>q.height()?q.animate({height:h.height()},250,"linear",j):j()},p.next=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r+1)},p.prev=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r-1)},p.link_custom=function(b){b.preventDefault();var c=a(this).attr("data-orbit-link");if("string"==typeof c&&""!=(c=a.trim(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index())}},p.link_bullet=function(){var b=a(this).attr("data-orbit-slide");"string"==typeof b&&""!=(b=a.trim(b))&&p._goto(b)},p.timer_callback=function(){p._goto(r+1,!0)},p.compute_dimensions=function(){var b=a(q.children().get(r)),c=b.height();f.variable_height||q.children().each(function(){a(this).height()>c&&(c=a(this).height())}),q.height(c)},p.create_timer=function(){var a=new g(j.find("."+f.timer_container_class),f,p.timer_callback);return a},p.stop_timer=function(){"object"==typeof o&&o.stop()},p.toggle_timer=function(){var a=j.find("."+f.timer_container_class);a.hasClass(f.timer_paused_class)?("undefined"==typeof o&&(o=p.create_timer()),o.start()):"object"==typeof o&&o.stop()},p.init=function(){p.build_markup(),f.timer&&(o=p.create_timer(),o.start()),n=new i(q),"slide"===f.animation&&(n=new h(q)),j.on("click","."+f.next_class,p.next),j.on("click","."+f.prev_class,p.prev),j.on("click","[data-orbit-slide]",p.link_bullet),j.on("click",p.toggle_timer),j.on("touchstart.fndtn.orbit",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};j.data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.orbit",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var b=j.data("swipe-transition");if("undefined"==typeof b&&(b={}),b.delta_x=a.touches[0].pageX-b.start_page_x,"undefined"==typeof b.is_scrolling&&(b.is_scrolling=!!(b.is_scrolling||Math.abs(b.delta_x)<Math.abs(a.touches[0].pageY-b.start_page_y))),!b.is_scrolling&&!b.active){a.preventDefault();var c=b.delta_x<0?r+1:r-1;b.active=!0,p._goto(c)}}}).on("touchend.fndtn.orbit",function(a){j.data("swipe-transition",{}),a.stopPropagation()}).on("mouseenter.fndtn.orbit",function(){f.timer&&f.pause_on_hover&&p.stop_timer()}).on("mouseleave.fndtn.orbit",function(){f.timer&&f.resume_on_mouseout&&o.start()}),a(c).on("click","[data-orbit-link]",p.link_custom),a(b).on("resize",p.compute_dimensions),a(b).on("load",p.compute_dimensions),q.trigger("orbit:ready")},p.init()},g=function(a,b,c){var d,e,f=this,g=b.timer_speed,h=a.find("."+b.timer_progress_class),i=-1;this.update_progress=function(a){var b=h.clone();b.attr("style",""),b.css("width",a+"%"),h.replaceWith(b),h=b},this.restart=function(){clearTimeout(e),a.addClass(b.timer_paused_class),i=-1,f.update_progress(0)},this.start=function(){return a.hasClass(b.timer_paused_class)?(i=-1===i?g:i,a.removeClass(b.timer_paused_class),d=(new Date).getTime(),h.animate({width:"100%"},i,"linear"),e=setTimeout(function(){f.restart(),c()},i),a.trigger("orbit:timer-started"),void 0):!0},this.stop=function(){if(a.hasClass(b.timer_paused_class))return!0;clearTimeout(e),a.addClass(b.timer_paused_class);var c=(new Date).getTime();i-=c-d;var h=100-100*(i/g);f.update_progress(h),a.trigger("orbit:timer-stopped")}},h=function(){var b=400,c=1===a("html[dir=rtl]").length,d=c?"marginRight":"marginLeft";this.next=function(a,c,e){c.animate({margin:"0%"},b,"linear",function(){a.css(d,"100%"),e()})},this.prev=function(a,c,e){c.css(d,"-100%"),c.animate({margin:"0%"},b,"linear",function(){a.css(d,"100%"),e()})}},i=function(){var a=250;this.next=function(b,c,d){c.css({marginLeft:"0%",opacity:"0.01"}),c.animate({opacity:"1"},a,"linear",function(){b.css("marginLeft","100%"),d()})},this.prev=function(b,c,d){c.css({marginLeft:"0%",opacity:"0.01"}),c.animate({opacity:"1"},a,"linear",function(){b.css("marginLeft","100%"),d()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"4.3.1",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,timer:!0,variable_height:!1,before_slide_change:e,after_slide_change:e},init:function(b,c){var d=this;if(Foundation.inherit(d,"data_options"),"object"==typeof c&&a.extend(!0,d.settings,c),a(b).is("[data-orbit]")){var e=a(b),g=d.data_options(e);new f(e,a.extend({},d.settings,g))}a("[data-orbit]",b).each(function(b,c){var e=a(c),g=d.data_options(e);new f(e,a.extend({},d.settings,g))})}}}(Foundation.zj,this,this.document);