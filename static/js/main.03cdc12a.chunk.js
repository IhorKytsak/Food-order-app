(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1I7NC",control:"Checkout_control__-Dce7",actions:"Checkout_actions__2VL_q",submit:"Checkout_submit__1TwvB",invalid:"Checkout_invalid__2TFmM"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__DOWtz",total:"Cart_total__1XhGT",actions:"Cart_actions__160zx","button--alt":"Cart_button--alt__1yDKH",button:"Cart_button__1R4OH"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2pCYb",summary:"CartItem_summary__3ZRzX",price:"CartItem_price__2xPQm",amount:"CartItem_amount__3MM_A",actions:"CartItem_actions__UZmpb"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__2SUu2",icon:"HeaderCartButton_icon__1PuWM",badge:"HeaderCartButton_badge__1gypb",bump:"HeaderCartButton_bump__3gdCb"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1a_nc",modal:"Modal_modal__SWYEE","slide-down":"Modal_slide-down__3ERPQ"}},function(e,t,n){e.exports={meals:"AvaiableMeals_meals__6v9ra","meals-appear":"AvaiableMeals_meals-appear__tLTpv",mealsLoading:"AvaiableMeals_mealsLoading__2Wn4Q",mealsError:"AvaiableMeals_mealsError__b-lWX"}},function(e,t,n){e.exports={meal:"MealItem_meal__3VaQv",description:"MealItem_description__3ibmm",price:"MealItem_price__3Yiri"}},function(e,t,n){e.exports={header:"Header_header__OcM4Q","main-image":"Header_main-image__2rIm7"}},,,,function(e,t,n){e.exports={card:"Card_card__3HKSM"}},function(e,t,n){e.exports={input:"Input_input__1hjPT"}},function(e,t,n){e.exports={form:"MealItemForm_form__2gFij"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__gh9mM"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(6),l=n(12),d=n(4),u=n(10),m=n.n(u),j=n(13),b=n.n(j),O=n(0),p=function(e){return Object(O.jsx)("div",{className:b.a.backdrop,onClick:e.onClose})},h=function(e){return Object(O.jsx)("div",{className:b.a.modal,children:Object(O.jsx)("div",{className:b.a.content,children:e.children})})},x=document.getElementById("overlays"),f=function(e){return Object(O.jsxs)(i.Fragment,{children:[m.a.createPortal(Object(O.jsx)(p,{onClose:e.onClose}),x),m.a.createPortal(Object(O.jsx)(h,{children:e.children}),x)]})},_=n(5),v=n.n(_),C=s.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),y=n(7),g=n.n(y),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:g.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:g.a.summary,children:[Object(O.jsx)("span",{className:g.a.price,children:t}),Object(O.jsxs)("span",{className:g.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:g.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},A=n(3),k=n.n(A),w=function(e){return""===e.trim()},S=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),u="".concat(k.a.control," ").concat(a.name?"":k.a.invalid),m="".concat(k.a.control," ").concat(a.street?"":k.a.invalid),j="".concat(k.a.control," ").concat(a.postalCode?"":k.a.invalid),b="".concat(k.a.control," ").concat(a.city?"":k.a.invalid);return Object(O.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=d.current.value,u=!w(n),m=!w(a),j=!w(i),b=5===r.trim().length;c({name:u,street:m,city:j,postalCode:b}),u&&m&&j&&b&&e.onConfirm({name:n,street:a,postalCode:r,city:i})},children:[Object(O.jsxs)("div",{className:u,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(O.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(O.jsx)("p",{children:"Please enter a valid name"})]}),Object(O.jsxs)("div",{className:m,children:[Object(O.jsx)("label",{htmlFor:"street",children:"Street"}),Object(O.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(O.jsx)("p",{children:"Please enter a valid street"})]}),Object(O.jsxs)("div",{className:j,children:[Object(O.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(O.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(O.jsx)("p",{children:"Please enter a valid postal code (5 caracters long)"})]}),Object(O.jsxs)("div",{className:b,children:[Object(O.jsx)("label",{htmlFor:"city",children:"City"}),Object(O.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(O.jsx)("p",{children:"Please enter a valid city"})]}),Object(O.jsxs)("div",{className:k.a.actions,children:[Object(O.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(O.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},M=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],u=Object(i.useState)(!1),m=Object(r.a)(u,2),j=m[0],b=m[1],p=Object(i.useState)(!1),h=Object(r.a)(p,2),x=h[0],_=h[1],y=Object(i.useContext)(C),g="$".concat(y.totalAmount.toFixed(2)),A=y.items.length>0,k=function(e){y.removeItem(e)},w=function(e){y.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},M=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://food-react-app-54dd3-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:y.items})}).catch((function(){b(!1),_(!0),y.clearCart()}));case 3:b(!1),_(!0),y.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(O.jsx)("ul",{className:v.a["cart-items"],children:y.items.map((function(e){return Object(O.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:k.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),F=Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{className:v.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),A&&Object(O.jsx)("button",{className:v.a.button,onClick:function(){c(!0)},children:"Order"})]}),E=Object(O.jsxs)(s.a.Fragment,{children:[I,Object(O.jsxs)("div",{className:v.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsx)("span",{children:g})]}),a&&Object(O.jsx)(S,{onConfirm:M,onCancel:e.onCloseCart}),!a&&F]}),R=Object(O.jsx)("p",{children:"Sending order data..."}),H=Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("p",{children:"Successfully sent the order!"}),Object(O.jsx)("div",{className:v.a.actions,children:Object(O.jsx)("button",{className:v.a.button,onClick:e.onCloseCart,children:"Close"})})]});return Object(O.jsxs)(f,{onClose:e.onCloseCart,children:[!j&&!x&&E,j&&R,!j&&x&&H]})},I=n.p+"static/media/meals.2971f633.jpg",F=n(16),E=n.n(F),R=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},H=n(9),P=n.n(H),T=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(C).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(P.a.button," ").concat(a?P.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(O.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(O.jsx)("span",{className:P.a.icon,children:Object(O.jsx)(R,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:P.a.badge,children:o})]})},B=function(e){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsxs)("header",{className:E.a.header,children:[Object(O.jsx)("h1",{children:"YummyMeals"}),Object(O.jsx)(T,{onClick:e.onShowCart})]}),Object(O.jsx)("div",{className:E.a["main-image"],children:Object(O.jsx)("img",{src:I,alt:"Food img"})})]})},D=n(20),z=n.n(D),L=function(e){return Object(O.jsx)("div",{className:z.a.card,children:e.children})},Y=n(14),Q=n.n(Y),V=n(21),W=n.n(V),J=s.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:W.a.input,children:[Object(O.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(d.a)(Object(d.a)({},e.input),{},{ref:t}))]})})),X=n(22),$=n.n(X),q=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(O.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>10?c(!1):e.onAddToCart(a)},children:[Object(O.jsx)(J,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(O.jsx)("button",{children:"+ Add"}),!a&&Object(O.jsx)("p",{children:"Please enter a valid amount (1-10)"})]})},G=n(15),K=n.n(G),U=function(e){var t=Object(i.useContext)(C),n="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:K.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:K.a.description,children:e.description}),Object(O.jsx)("div",{className:K.a.price,children:n})]}),Object(O.jsx)("div",{children:Object(O.jsx)(q,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Z=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],ee=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),d=s[0],u=s[1],m=Object(i.useState)(null),j=Object(r.a)(m,2),b=j[0],p=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,c,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-react-app-54dd3-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),p(e.message)}))}),[]),d)return Object(O.jsx)("section",{className:Q.a.mealsLoading,children:Object(O.jsx)("p",{children:"Loading..."})});if(b)return Object(O.jsxs)("section",{className:Q.a.mealsError,children:[Object(O.jsx)("p",{children:b}),Object(O.jsx)("button",{onClick:function(){a(Z),p(!1)},children:"Add dummy meals!"})]});var h=n.map((function(e){return Object(O.jsx)(U,{id:e.id,name:e.name,price:e.price,description:e.description,children:e.name},e.id)}));return Object(O.jsx)("section",{className:Q.a.meals,children:Object(O.jsx)(L,{children:Object(O.jsx)("ul",{children:h})})})},te=n(23),ne=n.n(te),ae=function(){return Object(O.jsxs)("section",{className:ne.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ce=function(){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(ae,{}),Object(O.jsx)(ee,{})]})},re=n(17),ie={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(re.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(s=Object(re.a)(e.items))[o]=m}return{items:s,totalAmount:u}}return t.type,ie},oe=function(e){var t=Object(i.useReducer)(se,ie),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(O.jsx)(C.Provider,{value:s,children:e.children})};var le=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)(oe,{children:[n&&Object(O.jsx)(M,{onCloseCart:function(){a(!1)}}),Object(O.jsx)(B,{onShowCart:function(){a(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(ce,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(le,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.03cdc12a.chunk.js.map