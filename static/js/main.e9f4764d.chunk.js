(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n,c=s(6),o=s.n(c),r=s(5),i=s(7),a=s(8),l=s(2),u=(s(13),s(14),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function d(e,t){var s=t.sortType,c=t.isReversed,o=Object(a.a)(e);return s===n.ALPHABET&&o.sort((function(e,t){return e.localeCompare(t)})),s===n.LENGTH&&o.sort((function(e,t){return e.length-t.length})),console.log(s,c),!1===c?o:o.reverse()}!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(){var e=Object(l.useState)({sortType:n.NONE,isReversed:!1}),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info\n          ".concat(s.sortType===n.ALPHABET?"":"is-light"),onClick:function(){c({sortType:n.ALPHABET,isReversed:s.isReversed})},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success\n            ".concat(s.sortType===n.LENGTH?"":"is-light"),onClick:function(){c({sortType:n.LENGTH,isReversed:s.isReversed})},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning\n            ".concat(s.isReversed?"":"is-light"),onClick:function(){c((function(e){return Object(r.a)(Object(r.a)({},e),{},{isReversed:!e.isReversed})}))},children:"Reverse"}),(!0===s.isReversed||s.sortType!==n.NONE)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:d(b,s).map((function(e){return Object(u.jsx)("li",{"data-cy":"Good",children:e})}))})})]})};o.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e9f4764d.chunk.js.map