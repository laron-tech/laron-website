import{S as $,i as q,s as x,k as h,a as B,l as b,m as M,h as u,c as D,n as m,b as y,Q as I,B as E,e as C,R as P,G as k,t as L,d as R,f as T,g as S,q as V,r as z,w as N,x as O,y as Q,z as W}from"../../../../chunks/index-ed8f02f0.js";import*as j from"three";import F from"vanta/dist/vanta.globe.min";var G=(n=>(n[n.home=0]="home",n[n.none=1]="none",n))(G||{});function J(n){let t,o,e,a,c;return{c(){t=h("div"),o=B(),e=h("div"),this.h()},l(r){t=b(r,"DIV",{class:!0});var l=M(t);l.forEach(u),o=D(r),e=b(r,"DIV",{class:!0}),M(e).forEach(u),this.h()},h(){m(t,"class","home-section text-gray-100"),m(e,"class","scene w-screen h-screen fixed svelte-1wh6xgs")},m(r,l){y(r,t,l),t.innerHTML=n[0],y(r,o,l),y(r,e,l),a||(c=I(n[1].call(null,e)),a=!0)},p(r,[l]){l&1&&(t.innerHTML=r[0])},i:E,o:E,d(r){r&&u(t),r&&u(o),r&&u(e),a=!1,c()}}}function K(n,t,o){let{content:e}=t,a=c=>{c&&F({el:c,THREE:j,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:2450411,color2:5972406,backgroundColor:0})};return n.$$set=c=>{"content"in c&&o(0,e=c.content)},[e,a]}class U extends ${constructor(t){super(),q(this,t,K,J,x,{content:0})}}function X(n){let t,o;return{c(){t=h("p"),o=V("Template not found")},l(e){t=b(e,"P",{});var a=M(t);o=z(a,"Template not found"),a.forEach(u)},m(e,a){y(e,t,a),k(t,o)},p:E,i:E,o:E,d(e){e&&u(t)}}}function Y(n){let t,o;return t=new U({props:{content:n[0].page}}),{c(){N(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,a){Q(t,e,a),o=!0},p(e,a){const c={};a&1&&(c.content=e[0].page),t.$set(c)},i(e){o||(T(t.$$.fragment,e),o=!0)},o(e){L(t.$$.fragment,e),o=!1},d(e){W(t,e)}}}function Z(n){let t,o,e,a,c,r,l,g,f,d,v,_;document.title=t="Laron | "+n[3];const H=[Y,X],p=[];function A(s,i){return s[1]===G.home?0:1}return f=A(n),d=p[f]=H[f](n),{c(){o=h("meta"),e=h("meta"),a=h("meta"),c=h("meta"),l=h("meta"),g=B(),d.c(),v=C(),this.h()},l(s){const i=P("svelte-wqwt6t",document.head);o=b(i,"META",{name:!0,content:!0}),e=b(i,"META",{name:!0,content:!0}),a=b(i,"META",{name:!0,content:!0}),c=b(i,"META",{name:!0,content:!0}),l=b(i,"META",{name:!0,content:!0}),i.forEach(u),g=D(s),d.l(s),v=C(),this.h()},h(){m(o,"name","description"),m(o,"content",n[2]),m(e,"name","twitter:card"),m(e,"content","summary"),m(a,"name","twitter:site"),m(a,"content","@larontech"),m(c,"name","twitter:title"),m(c,"content",r="Laron | "+n[3]),m(l,"name","twitter:description"),m(l,"content",n[2])},m(s,i){k(document.head,o),k(document.head,e),k(document.head,a),k(document.head,c),k(document.head,l),y(s,g,i),p[f].m(s,i),y(s,v,i),_=!0},p(s,[i]){(!_||i&8)&&t!==(t="Laron | "+s[3])&&(document.title=t),(!_||i&4)&&m(o,"content",s[2]),(!_||i&8&&r!==(r="Laron | "+s[3]))&&m(c,"content",r),(!_||i&4)&&m(l,"content",s[2]);let w=f;f=A(s),f===w?p[f].p(s,i):(S(),L(p[w],1,1,()=>{p[w]=null}),R(),d=p[f],d?d.p(s,i):(d=p[f]=H[f](s),d.c()),T(d,1),d.m(v.parentNode,v))},i(s){_||(T(d),_=!0)},o(s){L(d),_=!1},d(s){u(o),u(e),u(a),u(c),u(l),s&&u(g),p[f].d(s),s&&u(v)}}}function ee(n,t,o){let e,a,c,{data:r}=t;return n.$$set=l=>{"data"in l&&o(0,r=l.data)},n.$$.update=()=>{n.$$.dirty&1&&o(3,e=r.title),n.$$.dirty&1&&o(2,a=r.description),n.$$.dirty&1&&o(1,c=r.template)},[r,c,a,e]}class oe extends ${constructor(t){super(),q(this,t,ee,Z,x,{data:0})}}export{oe as default};
