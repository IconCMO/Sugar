function ya(a,b,c,d){var e=j;if(a===b)return j;else if(G(b)&&F(a))return t(b).test(a);else if(D(b))return b.apply(c,d);else if(ka(b)&&ja(a)){J(b,function(g){ya(a[g],b[g],c,[a[g],a])||(e=m)});return r.keys(b).length>0&&e}else return T(a)===T(b)}function U(a,b,c,d){return M(b)?a:D(b)?b.apply(c,d||[]):D(a[b])?a[b].call(a):a[b]}
function V(a,b,c,d){var e,g;if(c<0)c=a.length+c;g=isNaN(c)?0:c;for(c=d===j?a.length+g:a.length;g<c;){e=g%a.length;if(e in a){if(b.call(a,a[e],e,a)===m)break}else return za(a,b,g,d);g++}}function za(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(g){return b.call(a,a[g],g,a)});return a}function Aa(a,b,c,d,e){var g,f;V(a,function(i,h,k){if(ya(i,b,k,[i,h,k])){g=i;f=h;return m}},c,d);return e?f:g}
function Ba(a,b){var c=[],d={},e,g;V(a,function(f,i){g=b?U(f,b,a,[f,i,a]):f;e=T(g);if(!(e in d&&(typeof f!=="function"||f===d[e]))){d[e]=g;c.push(f)}});return c}function Ca(a,b,c){var d=[],e={};b.each(function(g){e[T(g)]=g});a.each(function(g){var f=T(g);if((f in e&&(typeof g!=="function"||g===e[f]))!=c){delete e[f];d.push(g)}});return d}function Fa(a,b,c){b=b||Infinity;c=c||0;var d=[];V(a,function(e){if(ca(e)&&c<b)d=d.concat(Fa(e,b,c+1));else d.push(e)});return d}
function Ga(a){var b=[];I(a,function(c){b=b.concat(c)});return b}function Ha(a,b,c,d){var e=c==="max",g=c==="min",f=e?-Infinity:Infinity,i=[];J(a,function(h){var k=a[h];h=U(k,b,a,d?[k,parseInt(h),a]:[]);if(h===f)i.push(k);else if(e&&h>f||g&&h<f){i=[k];f=h}});return i}function Ia(a){if(s[Ja])a=a.toLowerCase();return a.replace(s[Ka],"")}function La(a,b){var c=a.charAt(b);return(s[Ma]||{})[c]||c}function Na(a){var b=s[Oa];return a?b.indexOf(a):l}
var Oa="AlphanumericSortOrder",Ka="AlphanumericSortIgnore",Ja="AlphanumericSortIgnoreCase",Ma="AlphanumericSortEquivalents";H(s,m,m,{create:function(){var a=[];I(arguments,function(b){if(b&&b.callee)b=I(b);a=a.concat(b)});return a}});
H(s,j,m,{find:function(a,b,c){return Aa(this,a,b,c)},findAll:function(a,b,c){var d=[];V(this,function(e,g,f){ya(e,a,f,[e,g,f])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Aa(this,a,b,c,j);return M(a)?-1:a},count:function(a){if(M(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){if(M(a))return this;if(M(b))b=a;for(var c=0;c<=b-a;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return s.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return ma([],this)},unique:function(a){return Ba(this,a)},flatten:function(a){return Fa(this,a)},union:function(){return Ba(this.concat(Ga(arguments)))},intersect:function(){return Ca(this,Ga(arguments),m)},subtract:function(){return Ca(this,Ga(arguments),j)},at:function(){return sa(this,arguments)},first:function(a){if(M(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(M(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(M(a))a=this.length;return this.slice(0,a)},min:function(a){return Ba(Ha(this,a,"min",j))},max:function(a){return Ba(Ha(this,a,"max",j))},least:function(){var a=Fa(Ha(this.groupBy.apply(this,arguments),"length","min"));return a.length===this.length?[]:Ba(a)},most:function(){var a=Fa(Ha(this.groupBy.apply(this,arguments),"length","max"));return a.length===this.length?[]:Ba(a)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,
c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],g=P(this.length/a,void 0,"ceil");O(0,a-1,function(f){f=f*g;var i=d.slice(f,f+g);c&&i.length<g&&O(1,g-i.length,function(){i=i.add(b)});e.push(i)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,g;if(d===0||a===0)return e;if(M(a))a=1;if(M(b))b=l;O(0,P(d/a,void 0,"ceil")-1,function(f){for(g=e.slice(a*f,a*f+a);g.length<a;)g.push(b);
c.push(g)});return c},isEmpty:function(){return this.compact().length==0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var g,f;g=U(d,a,c,[d]);f=U(e,a,c,[e]);if(F(g)&&F(f)){g=g;f=f;var i,h,k,n,o=0,q=0;g=Ia(g);f=Ia(f);do{k=La(g,o);n=La(f,o);i=Na(k);h=Na(n);if(i===-1||h===-1){i=g.charCodeAt(o)||l;h=f.charCodeAt(o)||l}k=k!==g.charAt(o);n=n!==f.charAt(o);if(k!==n&&q===0)q=k-n;o+=1}while(i!=l&&h!=l&&i===h);g=i===h?q:i<h?-1:1}else g=g<f?-1:g>f?1:0;return g*(b?-1:1)});return c},randomize:function(){for(var a=
this.concat(),b,c,d=a.length;d;b=parseInt(x.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a},zip:function(){var a=I(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:l}))})},sample:function(a){var b=[],c=this.clone(),d;if(M(a))a=1;for(;b.length<a;){d=Q(x.random()*(c.length-1));b.push(c[d]);c.removeAt(d);if(c.length==0)break}return arguments.length>0?b:b[0]},each:function(a,b,c){V(this,a,b,c);return this},add:function(a,b){if(!E(w(b))||isNaN(b))b=this.length;
s.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a,b=this;I(arguments,function(c){for(a=0;a<b.length;)if(ya(b[a],c,b,[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];V(this,function(c){if(ca(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=l&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;V(c,function(g,f){e=U(g,a,c,[g,f,c]);d[e]||(d[e]=[]);d[e].push(g)});b&&J(d,b);return d},none:function(){return!this.any.apply(this,
arguments)}});H(s,j,m,{all:s.prototype.every,any:s.prototype.some,insert:s.prototype.add});function Pa(a){if(a&&a.valueOf)a=a.valueOf();return r.keys(a)}function Qa(a,b){K(r,m,m,a,function(c,d){c[d]=function(e,g){var f;f=s.prototype[d].call(Pa(e),function(i){return b?U(e[i],g,e,[i,e[i],e]):ya(e[i],g,e,[i,e[i],e])});if(ca(f))f=f.reduce(function(i,h){i[h]=e[h];return i},{});return f}});ta(a,N)}
H(r,m,m,{map:function(a,b){return Pa(a).reduce(function(c,d){c[d]=U(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=Pa(a).map(function(c){return a[c]});return b.reduce.apply(b,I(arguments).slice(1))}});(function(){K(s,j,function(){var a=arguments;return a.length>0&&!D(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?U(d,c,this,[d,e,this]):ya(d,c,this,[d,e,this])})}})})();
(function(){s[Oa]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};V("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc".split(","),
function(b){var c=b.charAt(0);V(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});s[Ja]=j;s[Ma]=a})();Qa("any,all,none,count,find,findAll,isEmpty");Qa("sum,average,min,max,least,most",j);ta("map,reduce",N);