function xb(a,b){this.start=ra(a)?a.clone():new t;this.end=ra(b)?b.clone():new t}
x(xb,j,j,{toString:function(){return this.isValid()?this.start.full()+".."+this.end.full():"Invalid DateRange"},isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},contains:function(a){var b=this;return(a.start&&a.end?[a.start,a.end]:[a]).all(function(c){return c>=b.start&&c<=b.end})},every:function(a,b){var c=this.start.clone(),d=[],e,g=0;if(E(a)){e=a.match(/^(\d+)?\s?(\w+?)s?$/i);a=parseInt(e[1]||1);e="add"+H(e[2])+
"s";c[e](0,j)}else e="addMilliseconds";for(;c<=this.end;){d.push(c);b&&b(c,g);c=c.clone()[e](a);g++}return d},union:function(a){return new xb(this.start<a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return new xb(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)}});["Millisecond","Second","Minute","Hour","Day","Week","Month","Year"].each(function(a){xb.prototype["each"+a]=function(b){return this.every(a,b)}});
x(t,m,m,{range:function(a,b){return new xb(a,b)}});
