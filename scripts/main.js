!function(){"use strict";var o={classes:{root:".js-content"},init:function(){TweenMax.set(document.querySelector(this.classes.root),{autoAlpha:0,scale:2,transformOrigin:"50% 50%"})},process:function(){TweenMax.to(document.querySelector(this.classes.root),1.5,{autoAlpha:1,scale:1,ease:Power4.easeOut})}},s={classes:{root:".js-button-icon",active:"a-button-icon--active"},visible:function(){$(this.classes.root).fadeIn()},hidden:function(){$(this.classes.root).fadeOut()}};function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var e=function(){var e;new fullpage(".js-main",(t(e={sectionSelector:".horizontal",slideSelector:"section",licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",css3:!0,controlArrows:!1,scrollingSpeed:700,anchors:["page1"]},"css3",!0),t(e,"scrollingSpeed",1e3),t(e,"navigation",!0),t(e,"slidesNavigation",!0),t(e,"controlArrows",!1),t(e,"loopHorizontal",!1),t(e,"afterLoad",function(e,t,i){document.querySelector("body").style.opacity=1,setTimeout(function(){o.process()},200)}),t(e,"onSlideLeave",function(e,t,i,o){480<=window.innerWidth?0===i.index?s.hidden():s.visible():i.index<5?s.hidden():s.visible()}),e)),$(".js-main").on("mousewheel",function(e){e.deltaY<0?fullpage_api.moveSlideRight():fullpage_api.moveSlideLeft()}),$("body").swipe({swipeStatus:function(e,t,i,o,s,n,a,l){"end"==t&&("left"==i&&fullpage_api.moveSlideLeft(),"right"==i&&fullpage_api.moveSlideRight(),"up"==i&&fullpage_api.moveSlideRight(),"down"==i&&fullpage_api.moveSlideLeft())}})},i=480,n=768,a={classes:{root:".js-item-work-btn"},init:function(){this.resize()},resize:function(){window.innerHeight>=n||window.innerWidth>=n?this.changeBorder("25"):window.innerHeight>=i&&window.innerHeight<n||window.innerWidth>=i&&window.innerWidth<n?this.changeBorder("20"):this.changeBorder("15")},changeBorder:function(t){document.querySelectorAll(this.classes.root).forEach(function(e){e.querySelector("rect").setAttributeNS(null,"rx",t)})}},l={classes:{root:".js-slider-works",active:"m-slider-works__item--active"},config:{duration:3e3,currentItem:0},init:function(){var t=this;a.init();var i=document.querySelector(this.classes.root).children,o=i[0].className,s=this.config.currentItem;i[0].className+=" "+this.classes.active,setInterval(function(){var e=s;++s>=i.length&&(s=0),i[e].className=o,i[s].className+=" "+t.classes.active},this.config.duration)}},r=function(i,e){i.style.opacity=0,i.style.display=e||"block",function e(){var t=parseFloat(i.style.opacity);1<(t+=.1)||(i.style.opacity=t,requestAnimationFrame(e))}()},c={classes:{root:".js-modal",form:".js-modal-form",label:".js-modal-label",input:".js-modal-input",blur:".js-main",open:".js-modal-open",close:".js-modal-close",active:"m-modal-window--show",activeBlur:"main--blur"},init:function(){var e=this,t=this,i=document.querySelector(this.classes.root),o=document.querySelector(this.classes.blur),s=document.querySelectorAll(this.classes.open),n=document.querySelector(this.classes.close),a=document.querySelector(this.classes.input);function l(){i.classList.toggle(t.classes.active),o.classList.toggle(t.classes.activeBlur),a.blur()}i.querySelector(this.classes.input).addEventListener("click",function(){this.focus();var e=this.value;this.value="",this.value=e}),s.forEach(function(e){e.addEventListener("click",l)}),n.addEventListener("click",l),window.addEventListener("click",function(e){e.target===i&&l()}),$(document).ready(function(){e.validationForm(e.classes.form),$(e.classes.form).submit(function(e){e.preventDefault(),$(this).valid()&&t.submitForm(this)})})},getCookie:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var i=document.cookie.split(";"),o=0;o<i.length;o++){var s=$.trim(i[o]);if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t},regexpForm:function(){$.validator.addMethod("regex",function(e,t,i){return i.constructor!=RegExp?i=new RegExp(i):i.global&&(i.lastIndex=0),this.optional(t)||i.test(e)},"Please check your input.")},validationForm:function(e){this.regexpForm(),$(e).validate({rules:{email:{required:!0,regex:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/}},messages:{email:{required:"Enter email",regex:"e.g. test@gmail.com"}},onclick:!0,errorClass:"error",validClass:"valid",highlight:function(e,t,i){$(e).parent().children().addClass("error").removeClass(i)},unhighlight:function(e,t,i){$(e).parent().children().removeClass("error").addClass(i)}})},submitForm:function(e){var t=this;$.ajax({url:"/",method:$(e).attr("method"),data:$(this).serialize(),contentType:"application/x-www-form-urlencoded",dataType:"json",headers:{"X-CSRFToken":this.getCookie("csrftoken")},success:function(){t.cleanForm()}}).always(function(){return t.cleanForm()})},cleanForm:function(){var e=this,i=document.querySelector(this.classes.form);i.childNodes.forEach(function(e,t){2<t&&t<i.childNodes.length-2&&t%2!=0&&(e.style.display="none")}),r(i.lastElementChild),setTimeout(function(){document.querySelector(e.classes.blur).classList.toggle(e.classes.activeBlur),document.querySelector(e.classes.root).classList.toggle(e.classes.active)},5e3)}};o.init(),e(),l.init(),c.init(),console.table({siteName:"Perfect application",company:"Yellow Leaf Technologies",Disigner:"Oksana Hovera",FrontEnd_Developer:"Roman Strutynskyi",BackEnd_Developer:"Alex Zakotyanskiy"})}();
