$(function(){var t=500,e=500,i=$("#photo"),a=null,n=$("#filters li a"),
r=$("#filterContainer");i.fileReaderJS({on:{load:function(s,o)
{var l,c,f,v,d,h=$("<img>").appendTo(i);i.find("canvas").remove(),n.removeClass("active"),
h.load(function(){l=this.width,f=this.height,l>=t||f>=e?l>f?(d=l/t,c=t,v=f/d):(d=f/e,v=e,c=l/d):
(v=f,c=l),a=$("<canvas>");var i=a[0].getContext("2d");a.attr({width:c,height:v}).css
({marginTop:-v/2,marginLeft:-c/2}),i.drawImage(this,0,0,c,v),h.remove(),r.fadeIn(),n.first().click()}),
  h.attr("src",s.target.result)},beforestart:function(t){return/^image/.test(t.type)}}}),n.click(function(t)
{t.preventDefault();var e=$(this);if(e.is(".active"))return!1;n.removeClass("active"),e.addClass("active");var r=a.clone();
 r[0].getContext("2d").drawImage(a[0],0,0),i.html(r);var s=$.trim(e[0].id);Caman(r[0],function(){s in this&&(this[s](),this.render())})}),
  r.find("ul").on("mousewheel",function(t,e){this.scrollLeft-=50*e,t.preventDefault()})});
