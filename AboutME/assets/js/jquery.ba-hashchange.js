/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,e){var g="hashchange",a=document,c,f=$.event.special,b=a.documentMode,h="on"+g in i&&(b===undefined||b>7);function d(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[g]=function(j){return j?this.bind(g,j):this.trigger(g)};$.fn[g].delay=50;f[g]=$.extend(f[g],{setup:function(){if(h){return false}$(c.start)},teardown:function(){if(h){return false}$(c.stop)}});c=(function(){var o={},p,m=d(),j=function(q){return q},l=j,k=j;o.start=function(){p||n()};o.stop=function(){p&&clearTimeout(p);p=undefined};function n(){var q=d(),r=k(m);if(q!==m){l(m=q,r);$(i).trigger(g)}else{if(r!==m){location.href=location.href.replace(/#.*/,"")+r}}p=setTimeout(n,$.fn[g].delay)}(e&&!isNaN(e)&&e<9)&&!h&&(function(){var q,r;o.start=function(){if(!q){r=$.fn[g].src;r=r&&r+d();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(d());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;a.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=a.title}}catch(s){}}}};o.stop=j;k=function(){return d(q.location.href)};l=function(t,u){var v=q.document,s=$.fn[g].domain;if(t!==u){v.title=a.title;v.open();s&&v.write('<script>document.domain="'+s+'"</script>');v.close();q.location.hash=t}}})();return o})()})(jQuery,this);