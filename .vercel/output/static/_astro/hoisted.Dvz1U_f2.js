import"./hoisted.DlQLsKA2.js";var j=function(){return j=Object.assign||function(t){for(var n,i=1,f=arguments.length;i<f;i++)for(var p in n=arguments[i])Object.prototype.hasOwnProperty.call(n,p)&&(t[p]=n[p]);return t},j.apply(this,arguments)};function ut(t,n,i){for(var f,p=0,a=n.length;p<a;p++)!f&&p in n||(f||(f=Array.prototype.slice.call(n,0,p)),f[p]=n[p]);return t.concat(f||Array.prototype.slice.call(n))}function rt(t){return Array.prototype.slice.call(t)}function et(t,n){var i=Math.floor(t);return i===n||i+1===n?t:n}function at(){return Date.now()}function Z(t,n,i){if(n="data-keen-slider-"+n,i===null)return t.removeAttribute(n);t.setAttribute(n,i||"")}function U(t,n){return n=n||document,typeof t=="function"&&(t=t(n)),Array.isArray(t)?t:typeof t=="string"?rt(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?rt(t):[]}function G(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function J(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function st(){var t=[];return{add:function(n,i,f,p){n.addListener?n.addListener(f):n.addEventListener(i,f,p),t.push([n,i,f,p])},input:function(n,i,f,p){this.add(n,i,function(a){return function(e){e.nativeEvent&&(e=e.nativeEvent);var y=e.changedTouches||[],x=e.targetTouches||[],c=e.detail&&e.detail.x?e.detail:null;return a({id:c?c.identifier?c.identifier:"i":x[0]?x[0]?x[0].identifier:"e":"d",idChanged:c?c.identifier?c.identifier:"i":y[0]?y[0]?y[0].identifier:"e":"d",raw:e,x:c&&c.x?c.x:x[0]?x[0].screenX:c?c.x:e.pageX,y:c&&c.y?c.y:x[0]?x[0].screenY:c?c.y:e.pageY})}}(f),p)},purge:function(){t.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),t=[]}}}function $(t,n,i){return Math.min(Math.max(t,n),i)}function R(t){return(t>0?1:0)-(t<0?1:0)||+t}function ot(t){var n=t.getBoundingClientRect();return{height:et(n.height,t.offsetHeight),width:et(n.width,t.offsetWidth)}}function q(t,n,i,f){var p=t&&t[n];return p==null?i:f&&typeof p=="function"?p():p}function N(t){return Math.round(1e6*t)/1e6}function lt(t){var n,i,f,p,a,e;function y(M){e||(e=M),x(!0);var E=M-e;E>f&&(E=f);var v=p[i];if(v[3]<E)return i++,y(M);var T=v[2],I=v[4],m=v[0],h=v[1]*(0,v[5])(I===0?1:(E-T)/I);if(h&&t.track.to(m+h),E<f)return C();e=null,x(!1),c(null),t.emit("animationEnded")}function x(M){n.active=M}function c(M){n.targetIdx=M}function C(){var M;M=y,a=window.requestAnimationFrame(M)}function S(){var M;M=a,window.cancelAnimationFrame(M),x(!1),c(null),e&&t.emit("animationStopped"),e=null}return n={active:!1,start:function(M){if(S(),t.track.details){var E=0,v=t.track.details.position;i=0,f=0,p=M.map(function(T){var I,m=Number(v),h=(I=T.earlyExit)!==null&&I!==void 0?I:T.duration,l=T.easing,_=T.distance*l(h/T.duration)||0;v+=_;var z=f;return f+=h,E+=_,[m,T.distance,z,f,T.duration,l]}),c(t.track.distToIdx(E)),C(),t.emit("animationStarted")}},stop:S,targetIdx:null}}function ft(t){var n,i,f,p,a,e,y,x,c,C,S,M,E,v,T=1/0,I=[],m=null,h=0;function l(d){W(h+d)}function _(d){var u=z(h+d).abs;return w(u)?u:null}function z(d){var u=Math.floor(Math.abs(N(d/i))),r=N((d%i+i)%i);r===i&&(r=0);var b=R(d),s=y.indexOf(ut([],y).reduce(function(A,D){return Math.abs(D-r)<Math.abs(A-r)?D:A})),k=s;return b<0&&u++,s===e&&(k=0,u+=b>0?1:-1),{abs:k+u*e*b,origin:s,rel:k}}function L(d,u,r){var b;if(u||!F())return o(d,r);if(!w(d))return null;var s=z(r??h),k=s.abs,A=d-s.rel,D=k+A;b=o(D);var H=o(D-e*R(A));return(H!==null&&Math.abs(H)<Math.abs(b)||b===null)&&(b=H),N(b)}function o(d,u){if(u==null&&(u=N(h)),!w(d)||d===null)return null;d=Math.round(d);var r=z(u),b=r.abs,s=r.rel,k=r.origin,A=V(d),D=(u%i+i)%i,H=y[k],X=Math.floor((d-(b-s))/e)*i;return N(H-D-H+y[A]+X+(k===e?i:0))}function w(d){return O(d)===d}function O(d){return $(d,c,C)}function F(){return p.loop}function V(d){return(d%e+e)%e}function W(d){var u;u=d-h,I.push({distance:u,timestamp:at()}),I.length>6&&(I=I.slice(-6)),h=N(d);var r=g().abs;if(r!==m){var b=m!==null;m=r,b&&t.emit("slideChanged")}}function g(d){var u=d?null:function(){if(e){var r=F(),b=r?(h%i+i)%i:h,s=(r?h%i:h)-a[0][2],k=0-(s<0&&r?i-Math.abs(s):s),A=0,D=z(h),H=D.abs,X=D.rel,K=a[X][2],Q=a.map(function(Y,ct){var P=k+A;(P<0-Y[0]||P>1)&&(P+=(Math.abs(P)>i-1&&r?i:0)*R(-P));var tt=ct-X,it=R(tt),B=tt+H;r&&(it===-1&&P>K&&(B+=e),it===1&&P<K&&(B-=e),S!==null&&B<S&&(P+=i),M!==null&&B>M&&(P-=i));var nt=P+Y[0]+Y[1],dt=Math.max(P>=0&&nt<=1?1:nt<0||P>1?0:P<0?Math.min(1,(Y[0]+P)/Y[0]):(1-P)/Y[0],0);return A+=Y[0]+Y[1],{abs:B,distance:p.rtl?-1*P+1-Y[0]:P,portion:dt,size:Y[0]}});return H=O(H),X=V(H),{abs:O(H),length:f,max:v,maxIdx:C,min:E,minIdx:c,position:h,progress:r?b/i:h/f,rel:X,slides:Q,slidesLength:i}}}();return n.details=u,t.emit("detailsChanged"),u}return n={absToRel:V,add:l,details:null,distToIdx:_,idxToDist:L,init:function(d){if(function(){if(p=t.options,a=(p.trackConfig||[]).map(function(s){return[q(s,"size",1),q(s,"spacing",0),q(s,"origin",0)]}),e=a.length){i=N(a.reduce(function(s,k){return s+k[0]+k[1]},0));var r,b=e-1;f=N(i+a[0][2]-a[b][0]-a[b][2]-a[b][1]),y=a.reduce(function(s,k){if(!s)return[0];var A=a[s.length-1],D=s[s.length-1]+(A[0]+A[2])+A[1];return D-=k[2],s[s.length-1]>D&&(D=s[s.length-1]),D=N(D),s.push(D),(!r||r<D)&&(x=s.length-1),r=D,s},null),f===0&&(x=0),y.push(N(i))}}(),!e)return g(!0);var u;(function(){var r=t.options.range,b=t.options.loop;S=c=b?q(b,"min",-1/0):0,M=C=b?q(b,"max",T):x;var s=q(r,"min",null),k=q(r,"max",null);s!==null&&(c=s),k!==null&&(C=k),E=c===-1/0?c:t.track.idxToDist(c||0,!0,0),v=C===T?C:L(C,!0,0),k===null&&(M=C),q(r,"align",!1)&&C!==T&&a[V(C)][2]===0&&(v-=1-a[V(C)][0],C=_(v-h)),E=N(E),v=N(v)})(),u=d,Number(u)===u?l(o(O(d))):g()},to:W,velocity:function(){var d=at(),u=I.reduce(function(r,b){var s=b.distance,k=b.timestamp;return d-k>200||(R(s)!==R(r.distance)&&r.distance&&(r={distance:0,lastTimestamp:0,time:0}),r.time&&(r.distance+=s),r.lastTimestamp&&(r.time+=k-r.lastTimestamp),r.lastTimestamp=k),r},{distance:0,lastTimestamp:0,time:0});return u.distance/u.time||0}}}function pt(t){var n,i,f,p,a,e,y,x;function c(m){return 2*m}function C(m){return $(m,y,x)}function S(m){return 1-Math.pow(1-m,3)}function M(){return f?t.track.velocity():0}function E(){I();var m=t.options.mode==="free-snap",h=t.track,l=M();p=R(l);var _=t.track.details,z=[];if(l||!m){var L=v(l),o=L.dist,w=L.dur;if(w=c(w),o*=p,m){var O=h.idxToDist(h.distToIdx(o),!0);O&&(o=O)}z.push({distance:o,duration:w,easing:S});var F=_.position,V=F+o;if(V<a||V>e){var W=V<a?a-F:e-F,g=0,d=l;if(R(W)===p){var u=Math.min(Math.abs(W)/Math.abs(o),1),r=function(k){return 1-Math.pow(1-k,1/3)}(u)*w;z[0].earlyExit=r,d=l*(1-u)}else z[0].earlyExit=0,g+=W;var b=v(d,100),s=b.dist*p;t.options.rubberband&&(z.push({distance:s,duration:c(b.dur),easing:S}),z.push({distance:-s+g,duration:500,easing:S}))}t.animator.start(z)}else t.moveToIdx(C(_.abs),!0,{duration:500,easing:function(k){return 1+--k*k*k*k*k}})}function v(m,h){h===void 0&&(h=1e3);var l=147e-9+(m=Math.abs(m))/h;return{dist:Math.pow(m,2)/l,dur:m/l}}function T(){var m=t.track.details;m&&(a=m.min,e=m.max,y=m.minIdx,x=m.maxIdx)}function I(){t.animator.stop()}t.on("updated",T),t.on("optionsChanged",T),t.on("created",T),t.on("dragStarted",function(){f=!1,I(),n=i=t.track.details.abs}),t.on("dragChecked",function(){f=!0}),t.on("dragEnded",function(){var m=t.options.mode;m==="snap"&&function(){var h=t.track,l=t.track.details,_=l.position,z=R(M());(_>e||_<a)&&(z=0);var L=n+z;l.slides[h.absToRel(L)].portion===0&&(L-=z),n!==i&&(L=i),R(h.idxToDist(L,!0))!==z&&(L+=z),L=C(L);var o=h.idxToDist(L,!0);t.animator.start([{distance:o,duration:500,easing:function(w){return 1+--w*w*w*w*w}}])}(),m!=="free"&&m!=="free-snap"||E()}),t.on("dragged",function(){i=t.track.details.abs})}function vt(t){var n,i,f,p,a,e,y,x,c,C,S,M,E,v,T,I,m,h,l=st();function _(g){if(e&&x===g.id){var d=w(g);if(c){if(!o(g))return L(g);C=d,c=!1,t.emit("dragChecked")}if(I)return C=d;G(g);var u=function(b){if(m===-1/0&&h===1/0)return b;var s=t.track.details,k=s.length,A=s.position,D=$(b,m-A,h-A);if(k===0)return 0;if(!t.options.rubberband)return D;if(A<=h&&A>=m||A<m&&i>0||A>h&&i<0)return b;var H=(A<m?A-m:A-h)/k,X=p*k,K=Math.abs(H*X),Q=Math.max(0,1-K/a*2);return Q*Q*b}(y(C-d)/p*f);i=R(u);var r=t.track.details.position;(r>m&&r<h||r===m&&i>0||r===h&&i<0)&&J(g),S+=u,!M&&Math.abs(S*p)>5&&(M=!0),t.track.add(u),C=d,t.emit("dragged")}}function z(g){!e&&t.track.details&&t.track.details.length&&(S=0,e=!0,M=!1,c=!0,x=g.id,o(g),C=w(g),t.emit("dragStarted"))}function L(g){e&&x===g.idChanged&&(e=!1,t.emit("dragEnded"))}function o(g){var d=O(),u=d?g.y:g.x,r=d?g.x:g.y,b=E!==void 0&&v!==void 0&&Math.abs(v-r)<=Math.abs(E-u);return E=u,v=r,b}function w(g){return O()?g.y:g.x}function O(){return t.options.vertical}function F(){p=t.size,a=O()?window.innerHeight:window.innerWidth;var g=t.track.details;g&&(m=g.min,h=g.max)}function V(g){M&&(J(g),G(g))}function W(){if(l.purge(),t.options.drag&&!t.options.disabled){var g;g=t.options.dragSpeed||1,y=typeof g=="function"?g:function(u){return u*g},f=t.options.rtl?-1:1,F(),n=t.container,function(){var u="data-keen-slider-clickable";U("[".concat(u,"]:not([").concat(u,"=false])"),n).map(function(r){l.add(r,"dragstart",J),l.add(r,"mousedown",J),l.add(r,"touchstart",J)})}(),l.add(n,"dragstart",function(u){G(u)}),l.add(n,"click",V,{capture:!0}),l.input(n,"ksDragStart",z),l.input(n,"ksDrag",_),l.input(n,"ksDragEnd",L),l.input(n,"mousedown",z),l.input(n,"mousemove",_),l.input(n,"mouseleave",L),l.input(n,"mouseup",L),l.input(n,"touchstart",z,{passive:!0}),l.input(n,"touchmove",_,{passive:!1}),l.input(n,"touchend",L),l.input(n,"touchcancel",L),l.add(window,"wheel",function(u){e&&G(u)});var d="data-keen-slider-scrollable";U("[".concat(d,"]:not([").concat(d,"=false])"),t.container).map(function(u){return function(r){var b;l.input(r,"touchstart",function(s){b=w(s),I=!0,T=!0},{passive:!0}),l.input(r,"touchmove",function(s){var k=O(),A=k?r.scrollHeight-r.clientHeight:r.scrollWidth-r.clientWidth,D=b-w(s),H=k?r.scrollTop:r.scrollLeft,X=k&&r.style.overflowY==="scroll"||!k&&r.style.overflowX==="scroll";if(b=w(s),(D<0&&H>0||D>0&&H<A)&&T&&X)return I=!0;T=!1,G(s),I=!1}),l.input(r,"touchend",function(){I=!1})}(u)})}}t.on("updated",F),t.on("optionsChanged",W),t.on("created",W),t.on("destroyed",l.purge)}function mt(t){var n,i,f=null;function p(E,v,T){t.animator.active?e(E,v,T):requestAnimationFrame(function(){return e(E,v,T)})}function a(){p(!1,!1,i)}function e(E,v,T){var I=0,m=t.size,h=t.track.details;if(h&&n){var l=h.slides;n.forEach(function(_,z){if(E)!f&&v&&x(_,null,T),c(_,null,T);else{if(!l[z])return;var L=l[z].size*m;!f&&v&&x(_,L,T),c(_,l[z].distance*m-I,T),I+=L}})}}function y(E){return t.options.renderMode==="performance"?Math.round(E):E}function x(E,v,T){var I=T?"height":"width";v!==null&&(v=y(v)+"px"),E.style["min-"+I]=v,E.style["max-"+I]=v}function c(E,v,T){if(v!==null){v=y(v);var I=T?v:0;v="translate3d(".concat(T?0:v,"px, ").concat(I,"px, 0)")}E.style.transform=v,E.style["-webkit-transform"]=v}function C(){n&&(e(!0,!0,i),n=null),t.on("detailsChanged",a,!0)}function S(){p(!1,!0,i)}function M(){C(),i=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(f=q(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",a),(n=t.slides).length&&S())}t.on("created",M),t.on("optionsChanged",M),t.on("beforeOptionsChanged",function(){C()}),t.on("updated",S),t.on("destroyed",C)}function ht(t,n){return function(i){var f,p,a,e,y,x=st();function c(o){var w;Z(i.container,"reverse",(w=i.container,window.getComputedStyle(w,null).getPropertyValue("direction")!=="rtl"||o?null:"")),Z(i.container,"v",i.options.vertical&&!o?"":null),Z(i.container,"disabled",i.options.disabled&&!o?"":null)}function C(){S()&&I()}function S(){var o=null;if(e.forEach(function(O){O.matches&&(o=O.__media)}),o===f)return!1;f||i.emit("beforeOptionsChanged"),f=o;var w=o?a.breakpoints[o]:a;return i.options=j(j({},a),w),c(),z(),L(),h(),!0}function M(o){var w=ot(o);return(i.options.vertical?w.height:w.width)/i.size||1}function E(){return i.options.trackConfig.length}function v(o){for(var w in f=!1,a=j(j({},n),o),x.purge(),p=i.size,e=[],a.breakpoints||[]){var O=window.matchMedia(w);O.__media=w,e.push(O),x.add(O,"change",C)}x.add(window,"orientationchange",_),x.add(window,"resize",l),S()}function T(o){i.animator.stop();var w=i.track.details;i.track.init(o??(w?w.abs:0))}function I(o){T(o),i.emit("optionsChanged")}function m(o,w){if(o)return v(o),void I(w);z(),L();var O=E();h(),E()!==O?I(w):T(w),i.emit("updated")}function h(){var o=i.options.slides;if(typeof o=="function")return i.options.trackConfig=o(i.size,i.slides);for(var w=i.slides,O=w.length,F=typeof o=="number"?o:q(o,"number",O,!0),V=[],W=q(o,"perView",1,!0),g=q(o,"spacing",0,!0)/i.size||0,d=W==="auto"?g:g/W,u=q(o,"origin","auto"),r=0,b=0;b<F;b++){var s=W==="auto"?M(w[b]):1/W-g+d,k=u==="center"?.5-s/2:u==="auto"?0:u;V.push({origin:k,size:s,spacing:g}),r+=s}if(r+=g*(F-1),u==="auto"&&!i.options.loop&&W!==1){var A=0;V.map(function(D){var H=r-A;return A+=D.size+g,H>=1||(D.origin=1-H-(r>1?0:1-r)),D})}i.options.trackConfig=V}function l(){z();var o=i.size;i.options.disabled||o===p||(p=o,m())}function _(){l(),setTimeout(l,500),setTimeout(l,2e3)}function z(){var o=ot(i.container);i.size=(i.options.vertical?o.height:o.width)||1}function L(){i.slides=U(i.options.selector,i.container)}i.container=(y=U(t,document)).length?y[0]:null,i.destroy=function(){x.purge(),i.emit("destroyed"),c(!0)},i.prev=function(){i.moveToIdx(i.track.details.abs-1,!0)},i.next=function(){i.moveToIdx(i.track.details.abs+1,!0)},i.update=m,v(i.options)}}var gt=function(t,n,i){try{return function(f,p){var a,e={};return a={emit:function(y){e[y]&&e[y].forEach(function(c){c(a)});var x=a.options&&a.options[y];x&&x(a)},moveToIdx:function(y,x,c){var C=a.track.idxToDist(y,x);if(C){var S=a.options.defaultAnimation;a.animator.start([{distance:C,duration:q(c||S,"duration",500),easing:q(c||S,"easing",function(M){return 1+--M*M*M*M*M})}])}},on:function(y,x,c){c===void 0&&(c=!1),e[y]||(e[y]=[]);var C=e[y].indexOf(x);C>-1?c&&delete e[y][C]:c||e[y].push(x)},options:f},function(){if(a.track=ft(a),a.animator=lt(a),p)for(var y=0,x=p;y<x.length;y++)(0,x[y])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}(n,ut([ht(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),mt,vt,pt],i||[],!0))}catch(f){console.error(f)}};const bt=()=>{const t={duration:3e4,easing:n=>n};new gt("#my-keen-slider",{loop:!0,slides:{perView:5,spacing:0},renderMode:"precision",drag:!1,created(n){n.moveToIdx(5,!0,t)},updated(n){n.moveToIdx(n.track.details.abs+5,!0,t)},animationEnded(n){n.moveToIdx(n.track.details.abs+5,!0,t)}})};document.addEventListener("astro:page-load",bt);
