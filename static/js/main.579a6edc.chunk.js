(this.webpackJsonpfoodtrack=this.webpackJsonpfoodtrack||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),i=n.n(s),o=(n(24),n(19)),a=n(7),j=n(9),u=n(1),l=function(){var e={borderBottom:"1px solid #77AF9C"};return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"FoodTrack"}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)(j.b,{exact:!0,to:"/",activeStyle:e,children:"Home"}),Object(u.jsx)(j.b,{to:"/yourrecipes",activeStyle:e,children:"Your recipes"}),Object(u.jsx)(j.b,{to:"/login",activeStyle:e,children:"Log in"})]})]})},h=function(e){var t=e.keyIngredient,n=e.onSearch,r=e.onClick,s=Object(c.useState)(""),i=Object(a.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((function(e){return e.json()})).then((function(e){return j(e.meals)})).catch((function(e){return console.warn(e)}))}),[]);return Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault()}(e)},children:[Object(u.jsx)("h1",{children:"Find some tasty flavours:"}),Object(u.jsx)("input",{id:"mainInput",type:"text",value:t,onChange:function(e){return n(e)},placeholder:"What groceries do you have?",autoComplete:"off"}),Object(u.jsx)("div",{className:"countryTags",children:o&&o.map((function(e,t){return Object(u.jsx)("input",{type:"button",value:e.strArea,onClick:function(e){return r(e)}},t)}))})]})},b=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=(t[0],t[1]),r=Object(c.useContext)(x),s=r.recipes,i=(r.handleSelectYourRecipe,function(){n(!0)});return Object(u.jsx)(u.Fragment,{children:s?s.map((function(e){return Object(u.jsxs)("div",{className:"recipe",children:[Object(u.jsx)("img",{src:e.strMealThumb,alt:"MealImg"}),Object(u.jsx)("h2",{children:e.strMeal}),Object(u.jsx)("button",{onClick:i,children:"Check this out!"}),Object(u.jsx)("i",{class:"far fa-heart"})]},e.idMeal)})):Object(u.jsx)("h1",{children:"No ingredients like this"})})},d=function(){return Object(u.jsxs)("div",{className:"results",children:[Object(u.jsx)("h1",{children:"Your results:"}),Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)(b,{})})]})},O=function(){return Object(u.jsx)("div",{className:"your-recipes",children:Object(u.jsx)("h1",{children:"Your recipes:"})})},f=function(){return Object(u.jsxs)("div",{className:"not-found",children:[Object(u.jsx)("h1",{children:"404"}),Object(u.jsx)("h1",{children:"Sorry, we had to take a nap ;)"})]})},p=n(2),x=Object(c.createContext)([]);var m=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),b=i[0],m=i[1],v=Object(c.useState)(""),y=Object(a.a)(v,2),S=y[0],w=y[1],g=Object(c.useState)(null),k=Object(a.a)(g,2),C=(k[0],k[1]);Object(c.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(b)).then((function(e){return e.json()})).then((function(e){return r(e.meals)})).catch((function(e){return console.warn(e)}))}),[b]),Object(c.useEffect)((function(){S&&fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(S)).then((function(e){return e.json()})).then((function(e){r(e.meals)})).catch((function(e){return console.warn(e)}))}),[S]);var N=function(e){fetch("".concat("http://localhost:8000","/db"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return C((function(t){return[].concat(Object(o.a)(t),[e])}))}))};return Object(u.jsx)(x.Provider,{value:{recipes:n,handleSelectYourRecipe:N},children:Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(p.c,{children:[Object(u.jsxs)(p.a,{exact:!0,path:"/",children:[Object(u.jsx)(h,{keyIngredient:b,onSearch:function(e){return function(e){m(e.target.value),w("")}(e)},onClick:function(e){return function(e){w(e.target.value),m("")}(e)}}),Object(u.jsx)(d,{onAdd:N})]}),Object(u.jsx)(p.a,{path:"/yourrecipes",component:O}),Object(u.jsx)(p.a,{component:f})]})})]})})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.579a6edc.chunk.js.map