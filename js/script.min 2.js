$(window).on("load",function(){$(".preloader").fadeOut(100)}),function(e){'use strict';e("#searchOpen").on("click",function(){e(".search-wrapper").addClass("open")}),e("#searchClose").on("click",function(){e(".search-wrapper").removeClass("open")});const t=e(".featured-post-slider");t.slick({infinite:!0,vertical:!0,verticalSwiping:!0,arrows:!1,dots:!0,responsive:[{breakpoint:600,settings:{vertical:!1,verticalSwiping:!1}}]}),t.on("wheel",function(t){t.preventDefault(),t.originalEvent.deltaY>0?e(this).slick("slickNext"):e(this).slick("slickPrev")}),e(".venobox").venobox()}(jQuery)