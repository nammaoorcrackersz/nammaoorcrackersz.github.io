(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{9794:function(e,a,r){Promise.resolve().then(r.bind(r,9346))},4016:function(e,a,r){"use strict";var t=r(7437);let i=(0,r(2265).forwardRef)(function(e,a){let{onClick:r=()=>{},className:i="",primary:c=!1,secondary:n=!1,children:s}=e,l="boxed-btn";return c?l="boxed-btn":n&&(l="bordered-btn"),(0,t.jsx)("button",{ref:a,onClick:r,className:"".concat(l," ").concat(i||""),children:s})});a.Z=i},2432:function(e,a,r){"use strict";r.d(a,{Z:function(){return p}});var t,i,c=r(7437),n=r(4016);(t=i||(i={}))[t.PKT=1]="PKT",t[t.PCS=2]="PCS",t[t.BOX=3]="BOX",t[t.UNIT=4]="UNIT",t[t.BAG=5]="BAG",t[t.OTHER=6]="OTHER";let s={1:"Pkt",2:"Pcs",3:"Box",4:"Unit",5:"Bag",6:"Others"};var l=r(2120),d=r(6648),u=r(3770),o=r(1809),g=r(5079),m=r(150),f=r(6463),b=r(2265);function p(e){let{products:a}=e,r=(0,u.TL)(),t=(0,f.useRouter)(),i=(0,b.useRef)({}),p=(e,a)=>{i.current[a._id].contains(e.target)||t.push(l.Z.singleProduct.replace(":id",a._id))},h=(e,a)=>{i.current[a._id]=e};return(0,c.jsx)("div",{className:"row",children:a.map(e=>(0,c.jsx)("div",{onClick:a=>p(a,e),className:"col-lg-4 col-md-6 text-center",children:(0,c.jsxs)("div",{className:"single-product-item",children:[(0,c.jsx)("div",{className:"product-image",children:(0,c.jsx)(d.default,{src:"/products/".concat(e.imageUrl),alt:"",width:261,height:261})}),(0,c.jsx)("h3",{children:e.name}),(0,c.jsxs)("p",{className:"product-price",children:[(0,c.jsxs)("span",{children:["Per ",s[e.unit]]})," Rs. ",e.rate]}),(0,c.jsx)(n.Z,{ref:a=>h(a,e),primary:!0,onClick:()=>{r((0,m.dm)(e._id))},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.default,{icon:g.sq$}),(0,c.jsx)("span",{className:"btn-label",children:"Add to Cart"})]})})]})},e.name))})}},1809:function(e,a,r){"use strict";r.d(a,{default:function(){return c}});var t=r(7437),i=r(6920);function c(e){let{onClick:a=()=>{},icon:r}=e;return(0,t.jsx)("i",{onClick:()=>a(),children:(0,t.jsx)(i.G,{icon:r})})}},9346:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return l}});var t=r(7437),i=r(2265),c=r(8835),n=r(2432),s=r(8416);function l(){let[e,a]=(0,i.useState)([]),[r,l]=(0,i.useState)("all"),[d,u]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=[];c.forEach(a=>{e.includes(a.category)||e.push(a.category)}),a(e),u((0,s.d)(c))},[]);let o=e=>{l(e),"all"!==e?u(c.filter(a=>a.category===e)):u((0,s.d)(c))};return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"breadcrumb-section breadcrumb-bg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-8 offset-lg-2 text-center",children:(0,t.jsxs)("div",{className:"breadcrumb-text",children:[(0,t.jsx)("p",{children:"Happy Diwali Sale"}),(0,t.jsx)("h1",{children:"Shop"})]})})})})}),(0,t.jsx)("div",{className:"product-section mt-150 mb-150",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"product-filters",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{onClick:()=>o("all"),className:"".concat("all"===r?"active":""),children:"All"}),e.map(e=>(0,t.jsx)("li",{onClick:()=>o(e),className:"".concat(e===r?"active":""),children:e},e))]})})})}),(0,t.jsx)(n.Z,{products:d})]})})]})}},2120:function(e,a){"use strict";a.Z={home:"/",shop:"/shop",contact:"/contact",checkout:"/checkout",singleProduct:"/product/:id"}},3770:function(e,a,r){"use strict";r.d(a,{CG:function(){return c},TL:function(){return i}});var t=r(1444);let i=t.I0.withTypes(),c=t.v9.withTypes();t.oR.withTypes()},150:function(e,a,r){"use strict";r.d(a,{Cn:function(){return o},MU:function(){return u},dm:function(){return d},fc:function(){return g}});var t=r(9753),i=r(8416),c=r(3580);let n=(0,t.oM)({name:"user",initialState:{name:null,email:null,address:null,phone:null,cart:[]},reducers:{setUserDetails:(e,a)=>{let r=a.payload?a.payload:{};e.name=r.name,e.email=r.email,e.address=r.address,e.phone=r.phone},setCart:(e,a)=>{let r=Array.isArray(a.payload)?a.payload:[];e.cart=r},setItem:(e,a)=>{let{key:r,value:t}=a.payload;e[r]=t}}}),{setUserDetails:s,setCart:l}=n.actions,d=(e,a)=>async(r,t)=>{try{let i=t(),n=JSON.parse(JSON.stringify(i.user.cart)),s=!1,d=1,u=n.findIndex(a=>a.productId===e&&(d=a.qty,s=!0,!0));Array.isArray(n)?s?s&&(n[u].qty=d+1,r(l(n))):(n.push({productId:e,qty:a||1}),r(l(n))):r(l([{productId:e,qty:a||1}])),c.Am.success("Added Item to cart")}catch(e){console.log(e)}},u=(e,a)=>async(r,t)=>{try{let c=t(),n=(0,i.d)(c.user.cart),s=n.findIndex(a=>a.productId===e);if(s<0)return;n[s].qty=a,r(l(n))}catch(e){console.log(e)}},o=e=>async(a,r)=>{try{let t=r().user.cart.filter(a=>a.productId!==e);a(l(t)),c.Am.warn("Removed Item from cart")}catch(e){console.log(e)}},g=e=>async(a,r)=>{try{console.log(e),c.Am.success("Order placed successfully")}catch(e){console.log(e)}};a.ZP=n.reducer},8416:function(e,a,r){"use strict";function t(e){return e?JSON.parse(JSON.stringify(e)):e}r.d(a,{d:function(){return t}})},8835:function(e){"use strict";e.exports=JSON.parse('[{"_id":"7300060a-b887-4905-b9a8-44f70b247e66","name":"2 Lakshmi","rate":9,"isEnabled":true,"imageUrl":"1.jpg","category":"Single Round Crackers","unit":1},{"_id":"48383a06-9647-4fce-a3cb-9e040f83e1d8","name":"2 3/4 Kuruvi","rate":275,"isEnabled":true,"imageUrl":"2.png","category":"Single Round Crackers","unit":1},{"_id":"cc0e4706-026d-4b42-9c74-8045ebb0cf17","name":"1/2 Lakshmi","rate":275,"isEnabled":true,"imageUrl":"3.png","category":"Single Round Crackers","unit":1},{"_id":"331772a2-e0db-4c22-b7e4-426d6df206cd","name":"4 Lakshmi","rate":275,"isEnabled":true,"imageUrl":"4.jpeg","category":"Single Round Crackers","unit":3},{"_id":"ffa8b182-884a-4389-9777-d389f6e0049f","name":"4 Deluxe Lakshmi","rate":49,"isEnabled":true,"imageUrl":"5.jpeg","category":"Single Round Crackers","unit":3},{"_id":"cda4f59d-63e5-4945-a76d-6cf7c703dbe1","name":"4 Hulk / Chotta Bheem","rate":76,"isEnabled":true,"imageUrl":"6.png","category":"Single Round Crackers","unit":1},{"_id":"d5398cbe-eaff-4716-805d-09ad33cafab7","name":"4 Super Mega Deluxe Jumbo","rate":85,"isEnabled":true,"imageUrl":"7.jpeg","category":"Single Round Crackers","unit":1},{"_id":"faf452ea-b4cb-4ce8-badc-8ccb3f113f05","name":"4 Gold Lakshmi","rate":70,"isEnabled":true,"imageUrl":"8.webp","category":"Single Round Crackers","unit":1},{"_id":"de8f1f46-d737-4d11-a9a1-58f062fd44ce","name":"2 Sound","rate":67,"isEnabled":true,"imageUrl":"9.jpeg","category":"Single Round Crackers","unit":1},{"_id":"5c51c6dd-ee4e-4907-8a9e-1ca7097d2364","name":"3 Sound","rate":67,"isEnabled":true,"imageUrl":"9.jpeg","category":"Single Round Crackers","unit":1},{"_id":"279b8cb1-5526-4657-b873-f8c256cf4214","name":"10 Chorsa","rate":20,"isEnabled":true,"imageUrl":"9.jpeg","category":"Chorsa Crackers","unit":1},{"_id":"7b02e80d-84ae-41c3-a3a5-cd7f56bcd6d4","name":"28 Chorsa","rate":28,"isEnabled":true,"imageUrl":"9.jpeg","category":"Chorsa Crackers","unit":1},{"_id":"907adf62-7aeb-41df-8145-a4999f70ce7e","name":"56 Chorsa","rate":56,"isEnabled":true,"imageUrl":"9.jpeg","category":"Chorsa Crackers","unit":1},{"_id":"a0abc446-35fb-4291-9085-323ca7fef5f6","name":"28 Goa Crackers","rate":45,"isEnabled":true,"imageUrl":"9.jpeg","category":"Goa Crackers","unit":1},{"_id":"b743c85e-56fa-45b4-a2b4-8c702548822d","name":"56 Goa Crackers","rate":90,"isEnabled":true,"imageUrl":"9.jpeg","category":"Goa Crackers","unit":1},{"_id":"491f2c52-ad22-4f6b-959d-bb222177aa07","name":"Red Bijilli (50 Pcs)","rate":45,"isEnabled":true,"imageUrl":"9.jpeg","category":"Bijili Crackers","unit":5},{"_id":"0e7625f7-95f8-4cb5-ba8c-99a62527e166","name":"Stripped Bijilli (50 Pcs)","rate":55,"isEnabled":true,"imageUrl":"9.jpeg","category":"Bijili Crackers","unit":5},{"_id":"cf7fb1c5-3fe7-4437-8f48-ac5569e084c1","name":"Red Bijilli (100 Pcs)","rate":76,"isEnabled":true,"imageUrl":"9.jpeg","category":"Bijili Crackers","unit":5},{"_id":"7afef3b4-20e3-4fb0-9e86-e93727038505","name":"Stripped Bijilli (100 Pcs)","rate":83,"isEnabled":true,"imageUrl":"9.jpeg","category":"Bijili Crackers","unit":5},{"_id":"e35e3c29-7037-46ac-9e5b-302ff71ae93e","name":"Gold Bijilli (100 Pcs)","rate":91,"isEnabled":true,"imageUrl":"9.jpeg","category":"Bijili Crackers","unit":5},{"_id":"732f1801-4f61-4d04-bd8f-46a7d659a429","name":"100 Wala","rate":97,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"55449e97-e928-47cc-99f9-23021079b419","name":"200 Wala","rate":193,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"87ef0045-85c2-4c51-8f1b-0d13d29309b6","name":"300 Wala","rate":294,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"42dbe5e3-cc8f-4e8b-80aa-cf1846c929d3","name":"600 Wala","rate":495,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"bcb32d50-1ef0-494b-b00b-0a9c57f31e78","name":"Magic Colour Wala","rate":385,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"a39e5643-3b5b-4629-83a0-290242113d2b","name":"1000 Wala","rate":690,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3},{"_id":"39e4f7e7-2b42-4654-a8f9-6872ba4ae01c","name":"2000 Wala","rate":1380,"isEnabled":true,"imageUrl":"9.jpeg","category":"Festival Garland","unit":3}]')}},function(e){e.O(0,[676,34,920,648,971,23,744],function(){return e(e.s=9794)}),_N_E=e.O()}]);