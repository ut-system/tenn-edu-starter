//Development Only: No need to link this JS on the live site

// reGrid v1.0 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

!function(e){e.fn.reGrid=function(r){var t=e.extend({colour:"red",opacity:.08,maxWidth:1100,breaks:[[500,1,16,0],[768,3,10,20],[5e3,6,0,40]]},r);reGridContainer="<div class='reGridContainer' style='position:fixed;top:0;left:0;bottom:0;right:0;display:none;z-index:50000;'><div style='position:relative;max-width:"+t.maxWidth+"px;margin:0 auto;height:100%;'>",reGridStyles="<style type='text/css'>#reGridToggle {position:fixed;bottom:18px;right:18px;display:block;width:36px;height:36px;background:#DDD;border-radius:3px;z-index:50001;cursor:pointer;}#reGridToggle:hover{background:#DaDaDa;} .reGridOn .reGridContainer {display:block !important;}",reGridToggle="<span id='reGridToggle'><svg width='36' height='36'><rect x='10' y='10' width='4' height='16' style='fill:#BBB;stroke:none;' /><rect x='16' y='10' width='4' height='16' style='fill:#BBB;stroke:none;' /><rect x='22' y='10' width='4' height='16' style='fill:#BBB;stroke:none;' /></svg></span>",body=e("body"),c=0;var o=function(){var r=e(window).width();if(r>t.breaks[t.breaks.length-1][0])e.each(t.breaks,function(e,r){body.removeClass("reGrid_"+r[0])}),body.addClass("reGrid_"+t.breaks[t.breaks.length-1][0]);else for(i=0;i<t.breaks.length;i++)if(r<t.breaks[i][0])return e.each(t.breaks,function(e,r){body.removeClass("reGrid_"+r[0])}),body.addClass("reGrid_"+t.breaks[i][0]),!1},d=function(){e.each(t.breaks,function(e,r){reGridStyles+=" .reGrid_"+r[0]+" .reGrid_"+r[0]+" {opacity:"+t.opacity+" !important}";for(var i="<div class='reGrid reGrid_"+r[0]+"' style='position:absolute;top:0;bottom:0;left:"+r[2]+"px;right:"+r[2]+"px;opacity:0;transition:opacity 800ms ease;'>",e=0;e<r[1];e++)colLeftOffset=100/r[1]*e,colWidth=100/r[1],colGutter=r[3]/2,col="<div class='reGridCol' style='position:absolute;left:"+colLeftOffset+"%;top:0px;bottom:0px;width:"+colWidth+"%;'><div style='position:absolute;left:"+colGutter+"px;right:"+colGutter+"px;top:0px;bottom:0px;background-color:"+t.colour+";'></div></div>",i+=col;i+="</div>",reGridContainer+=i}),e("head").append(reGridStyles),body.append(reGridContainer).append(reGridToggle)};return this.each(function(){null!=localStorage.getItem("reGridOn")&&body.addClass("reGridOn"),d(),o(),e(window).resize(function(){clearTimeout(c),c=setTimeout(o,300)}),body.on("click","#reGridToggle",function(){null===localStorage.getItem("reGridOn")?(body.addClass("reGridOn"),localStorage.setItem("reGridOn","1")):"1"===localStorage.getItem("reGridOn")&&(body.removeClass("reGridOn"),localStorage.removeItem("reGridOn"))})})}}(jQuery);

$("body").reGrid({ 
  colour: '#ff8200', 
  opacity: 0.2, 
  maxWidth: 1200,
  breaks: [[400,1,10,0],[599,4,10,20],[799,6,10,20],[999,8,10,20],[1199,10,10,20],[9000,12,2.5,20]] 
});