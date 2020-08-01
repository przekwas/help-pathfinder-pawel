(this["webpackJsonpgame-fml"]=this["webpackJsonpgame-fml"]||[]).push([[0],{15:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=n(2),l=n(5),u=n(3),s=n(4),d=function(t){for(var e,n=t.rows,r=t.cols,a=[],c=Math.floor(Math.random()*r),o=0;o<n;o++){var i=Array(r).fill(1),l=Math.random();if(l<.33?e=-1:l>.33&&l<.66?e=0:l>.66&&l<.99&&(e=1),0===o)i[c]=0,a.push(i);else{if((c+=e)>r-1)c+=Math.random()>.55?-1:-2;else if(c<0){c+=Math.random()>.55?1:2}i[c]=0,a.push(i)}}return console.log(a),a},m={incorrect:0,correct:0,gameRow:0,disabled:!1,grid:d({rows:10,cols:10})},b=function(t,e){switch(e.type){case"RIGHT":return Object(u.a)(Object(u.a)({},t),{},{correct:t.correct+1,gameRow:t.gameRow+1});case"WRONG":return Object(u.a)(Object(u.a)({},t),{},{incorrect:t.incorrect+1});case"GRID_CHANGE":return Object(u.a)(Object(u.a)({},t),{},{grid:d({rows:e.payload.rows,cols:e.payload.cols})});case"DISABLE":return Object(u.a)(Object(u.a)({},t),{},{disabled:!0});default:return t}},f=n(1);function p(){var t=Object(i.a)(["\n    body {\n        background-color: ",";\n        color: ",";\n        min-height: 100vh;\n\t    display: flex;\n\t    flex-direction: column;\n\t    align-items: center;\n\t    justify-content: flex-start;\n\t    font-family: Arial, Helvetica, sans-serif;\n        transition: 0.2s linear;\n    }\n"]);return p=function(){return t},t}var h=Object(f.b)(p(),(function(t){return t.theme.body}),(function(t){return t.theme.text})),g={body:"#edf2f7",text:"#1a202c",border:"#1a202c"},w={body:"#1a202c",text:"#edf2f7",border:"#f7fafc"},x=n(14);function O(){var t=Object(i.a)(["\n\tborder: 1.5px solid black;\n\tborder-radius: 5px;\n\tbox-sizing: border-box;\n\theight: 25px;\n\twidth: 25px;\n\tmargin: 0px 3px;\n\t@media (min-width: 768px) {\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tmargin: 0px 2px;\n\t}\n\t","\n\t","\n"]);return O=function(){return t},t}var j=f.c.div(O(),(function(t){switch(t.hitOrMiss){case null:return"background-color: #2b6cb0;";case"right":return"background-color: #2f855a !important;";case"wrong":return"background-color: #9b2c2c !important;"}}),(function(t){return t.rowDim&&"background-color: #4a5568;"})),v=function(t){var e=t.tile,n=t.rowDim,c=t.setRowDim,o=t.gameRow,i=t.whichRow,l=t.dispatch,u=Object(r.useState)(null),d=Object(s.a)(u,2),m=d[0],b=d[1],f=Object(r.useState)(!1),p=Object(s.a)(f,2),h=p[0],g=p[1];return a.a.createElement(j,{hitOrMiss:m,rowDim:n,onClick:function(t){h||n||o!==i||(0===Number(t.target.id)?(b("right"),c(!0),l({type:"RIGHT"}),l({type:"DISABLE"})):(b("wrong"),l({type:"WRONG"}),l({type:"DISABLE"})),g(!0))},id:e})};function E(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 5px 10px;\n\t","\n"]);return E=function(){return t},t}var y=f.c.div(E(),(function(t){return t.gameRow===t.whichRow&&"\n\tbackground-color: #4fd1c5;\n\tborder: 1px solid #234e52;\n\tborder-radius: 5px;\n"})),R=function(t){var e=t.tiles,n=t.gameRow,c=t.whichRow,o=Object(x.a)(t,["tiles","gameRow","whichRow"]),i=Object(r.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1];return a.a.createElement(y,{gameRow:n,whichRow:c},e.map((function(t,e){return a.a.createElement(v,Object.assign({key:"col-".concat(e),tile:t,rowDim:u,gameRow:n,whichRow:c,setRowDim:d},o))})))};function k(){var t=Object(i.a)(["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\t&:checked + "," {\n\t\tbackground: #2f855a;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n"]);return k=function(){return t},t}function D(){var t=Object(i.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #718096;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #edf2f7;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"]);return D=function(){return t},t}function G(){var t=Object(i.a)(["\n\tposition: relative;\n"]);return G=function(){return t},t}var S=f.c.div(G()),C=f.c.label(D()),I=f.c.input(k(),C),M=function(t){var e=t.isOn,n=t.handleToggle;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,a.a.createElement(I,{id:"checkbox",type:"checkbox",checked:e,onChange:n}),a.a.createElement(C,{htmlFor:"checkbox"})))};function A(){var t=Object(i.a)(["\n\tcolor: #9b2c2c;\n"]);return A=function(){return t},t}function T(){var t=Object(i.a)(["\n\tcolor: #2f855a;\n"]);return T=function(){return t},t}function N(){var t=Object(i.a)(["\n\tmargin: 0 0 10px 0;\n\tfont-weight: 900;\n"]);return N=function(){return t},t}function B(){var t=Object(i.a)(["\n\tmargin: 0 0 10px 0;\n"]);return B=function(){return t},t}function H(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 10px;\n"]);return H=function(){return t},t}function W(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return W=function(){return t},t}function L(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid;\n\tborder-color: ",";\n\tmargin-bottom: 10px;\n\tmin-width: 50vw;\n"]);return L=function(){return t},t}var F=f.c.div(L(),(function(t){return t.theme.border})),z=f.c.div(W()),J=f.c.div(H()),_=f.c.small(B()),$=f.c.small(N()),q=f.c.span(T()),K=f.c.span(A()),P=function(){var t=Object(r.useReducer)(b,m),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)({rows:10,cols:10}),i=Object(s.a)(o,2),d=i[0],p=i[1],x=Object(r.useState)(!1),O=Object(s.a)(x,2),j=O[0],v=O[1],E=function(t){t.persist(),p((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.target.name,Number(t.target.value)))}))};return Object(r.useLayoutEffect)((function(){c({type:"GRID_CHANGE",payload:d})}),[d]),a.a.createElement(f.a,{theme:j?w:g},a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(F,null,a.a.createElement(z,null,a.a.createElement(J,null,n.disabled?a.a.createElement($,null,d.rows," rows"):a.a.createElement(_,null,d.rows," / 20 rows"),a.a.createElement("input",{disabled:n.disabled,type:"range",name:"rows",value:d.rows,onChange:E,min:"5",max:"20"})),a.a.createElement(J,null,a.a.createElement(_,null,j?"dark":"light"),a.a.createElement(M,{isOn:j,handleToggle:function(){return v(!j)}})),a.a.createElement(J,null,n.disabled?a.a.createElement($,null,d.cols," cols"):a.a.createElement(_,null,d.cols," / 20 cols"),a.a.createElement("input",{disabled:n.disabled,type:"range",name:"cols",value:d.cols,onChange:E,min:"5",max:"20"}))),a.a.createElement(z,null,a.a.createElement("h5",null,"Total Correct: ",a.a.createElement(q,null,n.correct)),a.a.createElement("h5",null,"Total Guesses: ",n.correct+n.incorrect),a.a.createElement("h5",null,"Total Wrong: ",a.a.createElement(K,null,n.incorrect)))),n.grid.slice(0,d.rows).map((function(t,e){return a.a.createElement(R,{key:"row-".concat(e),whichRow:e,colCount:d.cols,gameRow:n.gameRow,tiles:t,dispatch:c})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b10aaa4d.chunk.js.map