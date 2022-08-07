"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{360:function(a,b,c){c.d(b,{Z:function(){return e}});var d=c(5893);function e(a){var b=a.options,c=a.name,e=a.id,f=a.placeholder,g=void 0===f?"Select one":f,h=a.className,i=a.emptyMessage,j=a.value,k=a.disabled,l=a.onChange;return(0,d.jsxs)("select",{onChange:void 0===l?function(){}:l,value:j,placeholder:g,name:void 0===c?"":c,id:void 0===e?"":e,disabled:void 0!==k&&k,className:"form-select appearance-none\n      block\n      w-full\n      p-2\n      text-base\n      font-normal\n      text-gray-700\n      bg-white bg-clip-padding bg-no-repeat\n      border-2 border-solid border-gray-300\n      rounded-md\n      transition\n      ease-in-out\n      m-0\n      focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none ".concat(void 0===h?"":h),"aria-label":g,children:[(0,d.jsx)("option",{children:void 0===i?"-":i}),(void 0===b?[]:b).map(function(a){return(0,d.jsx)("option",{value:a.value,children:a.label},a.value)})]})}c(7294)},2195:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(5893),e=c(7294),f=c(3587),g=c(3629),h=c(3664);function i(a){var b=a.isOpen,c=a.onClose,i=a.message,j=a.title,k=a.hideSecondaryBtn,l=a.primaryBtnLabel;return(0,d.jsx)(f.u,{appear:!0,show:b,as:e.Fragment,children:(0,d.jsxs)(g.V,{as:"div",className:"relative z-10",onClose:c,children:[(0,d.jsx)(f.u.Child,{as:e.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,d.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,d.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,d.jsx)(f.u.Child,{as:e.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,d.jsxs)(g.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,d.jsx)(g.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:j}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("p",{className:"text-sm text-gray-500",children:i})}),(0,d.jsxs)("div",{className:"mt-4 flex justify-start",children:[(0,d.jsx)(h.Z,{secondary:!0,className:"mr-10",onClick:function(){return c(!0)},children:(void 0===l?"":l)||"Yes"}),!k&&(0,d.jsx)(h.Z,{primary:!0,onClick:function(){return c(!1)},children:"No"})]})]})})})})]})})}},2605:function(a,b,c){c.d(b,{Z:function(){return x}});var d=c(5893),e=c(7294),f=c(2351),g=c(9946),h=c(1363),i=c(4103),j=c(6723),k=c(3784),l=c(3781);let m=(0,e.createContext)(null);function n(){let a=(0,e.useContext)(m);if(null===a){let b=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(b,n),b}return a}let o=(0,f.yV)(function(a,b){let{passive:c=!1,...d}=a,e=n(),h=`headlessui-label-${(0,g.M)()}`,i=(0,k.T)(b);(0,j.e)(()=>e.register(h),[h,e.register]);let l={ref:i,...e.props,id:h};return c&&("onClick"in l&&delete l.onClick,"onClick"in d&&delete d.onClick),(0,f.sY)({ourProps:l,theirProps:d,slot:e.slot||{},defaultTag:"label",name:e.name||"Label"})});var p=c(9516);function q(a){var b;if(a.type)return a.type;let c=null!=(b=a.as)?b:"button";if("string"==typeof c&&"button"===c.toLowerCase())return"button"}var r=c(6045);function s(a,b){return a?a+"["+b+"]":b}function t(a,b,c){if(Array.isArray(c))for(let[d,e]of c.entries())t(a,s(b,d.toString()),e);else c instanceof Date?a.push([b,c.toISOString()]):"boolean"==typeof c?a.push([b,c?"1":"0"]):"string"==typeof c?a.push([b,c]):"number"==typeof c?a.push([b,`${c}`]):null==c?a.push([b,""]):function(a={},b=null,c=[]){for(let[d,e]of Object.entries(a))t(c,s(b,d),e);return c}(c,b,a)}let u=(0,e.createContext)(null);u.displayName="GroupContext";let v=e.Fragment,w=Object.assign((0,f.yV)(function(a,b){let{checked:c,onChange:d,name:m,value:n,...o}=a,p=`headlessui-switch-${(0,g.M)()}`,s=(0,e.useContext)(u),t=(0,e.useRef)(null),v=(0,k.T)(t,b,null===s?null:s.setSwitch),w=(0,l.z)(()=>d(!c)),x=(0,l.z)(a=>{if((0,i.P)(a.currentTarget))return a.preventDefault();a.preventDefault(),w()}),y=(0,l.z)(a=>{a.key===h.R.Space?(a.preventDefault(),w()):a.key===h.R.Enter&&function(a){var b;let c=null!=(b=null==a?void 0:a.form)?b:a.closest("form");if(c){for(let d of c.elements)if("INPUT"===d.tagName&&"submit"===d.type||"BUTTON"===d.tagName&&"submit"===d.type||"INPUT"===d.nodeName&&"image"===d.type){d.click();return}}}(a.currentTarget)}),z=(0,l.z)(a=>a.preventDefault()),A=(0,e.useMemo)(()=>({checked:c}),[c]),B={id:p,ref:v,role:"switch",type:function(a,b){let[c,d]=(0,e.useState)(()=>q(a));return(0,j.e)(()=>{d(q(a))},[a.type,a.as]),(0,j.e)(()=>{c||!b.current||b.current instanceof HTMLButtonElement&&!b.current.hasAttribute("type")&&d("button")},[c,b]),c}(a,t),tabIndex:0,"aria-checked":c,"aria-labelledby":null==s?void 0:s.labelledby,"aria-describedby":null==s?void 0:s.describedby,onClick:x,onKeyUp:y,onKeyPress:z};return e.createElement(e.Fragment,null,null!=m&&c&&e.createElement(r._,{features:r.A.Hidden,...(0,f.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:c,name:m,value:n})}),(0,f.sY)({ourProps:B,theirProps:o,slot:A,defaultTag:"button",name:"Switch"}))}),{Group:function(a){let[b,c]=(0,e.useState)(null),[d,g]=function(){let[a,b]=(0,e.useState)([]);return[a.length>0?a.join(" "):void 0,(0,e.useMemo)(()=>function(a){let c=(0,l.z)(a=>(b(b=>[...b,a]),()=>b(b=>{let c=b.slice(),d=c.indexOf(a);return -1!==d&&c.splice(d,1),c}))),d=(0,e.useMemo)(()=>({register:c,slot:a.slot,name:a.name,props:a.props}),[c,a.slot,a.name,a.props]);return e.createElement(m.Provider,{value:d},a.children)},[b])]}(),[h,i]=(0,p.f)(),j=(0,e.useMemo)(()=>({switch:b,setSwitch:c,labelledby:d,describedby:h}),[b,c,d,h]);return e.createElement(i,{name:"Switch.Description"},e.createElement(g,{name:"Switch.Label",props:{onClick(){b&&(b.click(),b.focus({preventScroll:!0}))}}},e.createElement(u.Provider,{value:j},(0,f.sY)({ourProps:{},theirProps:a,defaultTag:v,name:"Switch.Group"}))))},Label:o,Description:p.d});function x(a){var b=a.isEnabled,c=a.onChange,e=a.className;return(0,d.jsx)("div",{className:void 0===e?"":e,children:(0,d.jsxs)(w,{checked:b,onChange:c,className:"".concat(b?"bg-blue-500":"bg-black","\n          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"),children:[(0,d.jsx)("span",{className:"sr-only",children:"Use setting"}),(0,d.jsx)("span",{"aria-hidden":"true",className:"".concat(b?"translate-x-9":"translate-x-0","\n            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out")})]})})}},9402:function(a,b,c){c.d(b,{Z:function(){return H}});var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(2664),j=c(7462),k=c(5037),l=c(4766),m=c(7400),n=c(1451),o=c(5987),p=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],q=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,d=String(a).toLowerCase(),e=String(c.getOptionValue(b)).toLowerCase(),f=String(c.getOptionLabel(b)).toLowerCase();return e===d||f===d},r={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,b,c,d){return!(!a||b.some(function(b){return q(a,b,d)})||c.some(function(b){return q(a,b,d)}))},getNewOptionData:function(a,b){return{label:b,value:a,__isNew__:!0}}};c(3935);var s=(0,h.forwardRef)(function(a,b){var c,d,e,f,g,i,q,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N=(e=void 0!==(d=(c=(0,l.u)(a)).allowCreateWhileLoading)&&d,f=c.createOptionPosition,g=void 0===f?"last":f,i=c.formatCreateLabel,q=void 0===i?r.formatCreateLabel:i,s=c.isValidNewOption,t=void 0===s?r.isValidNewOption:s,u=c.getNewOptionData,v=void 0===u?r.getNewOptionData:u,w=c.onCreateOption,x=c.options,y=void 0===x?[]:x,z=c.onChange,A=(0,o.Z)(c,p),B=A.getOptionValue,C=void 0===B?k.g:B,D=A.getOptionLabel,E=void 0===D?k.a:D,F=A.inputValue,G=A.isLoading,H=A.isMulti,I=A.value,J=A.name,K=(0,h.useMemo)(function(){return t(F,(0,m.J)(I),y,{getOptionValue:C,getOptionLabel:E})?v(F,q(F)):void 0},[q,v,E,C,F,t,y,I]),L=(0,h.useMemo)(function(){return(e||!G)&&K?"first"===g?[K].concat((0,n.Z)(y)):[].concat((0,n.Z)(y),[K]):y},[e,g,G,K,y]),M=(0,h.useCallback)(function(a,b){if("select-option"!==b.action)return z(a,b);var c=Array.isArray(a)?a:[a];if(c[c.length-1]===K){if(w)w(F);else{var d=v(F,F),e={action:"create-option",name:J,option:d};z((0,m.E)(H,[].concat((0,n.Z)((0,m.J)(I)),[d]),d),e)}return}z(a,b)},[v,F,H,J,K,w,z,I]),(0,m.a)((0,m.a)({},A),{},{options:L,onChange:M}));return h.createElement(k.S,(0,j.Z)({ref:b},N))}),t=c(1163),u=c(2920),v=c(2814),w=c(1436),x=c(9819),y=c(360),z=c(3664),A=c(2605),B=c(2195),C=c(3096),D=c(1833),E=c(7701),F=c(2843);function G(a){var b=a.productCategoriesList,c=a.addProduct,i=a.getProduct,j=a.updateProduct,k=a.deleteProduct,l=(0,t.useRouter)(),m=l.query.id,n=(0,h.useRef)(),o=!!m,p=(0,h.useState)({}),q=p[0],r=p[1],C=(0,h.useState)(""),G=C[0],H=C[1],I=(0,h.useState)(""),J=I[0],K=I[1],L=(0,h.useState)(""),M=L[0],N=L[1],O=(0,h.useState)(""),P=O[0],Q=O[1],R=(0,h.useState)(""),S=R[0],T=R[1],U=(0,h.useState)(""),V=U[0],W=U[1],X=(0,h.useState)(""),Y=X[0],Z=X[1],$=(0,h.useState)(""),_=$[0],aa=$[1],ab=(0,h.useState)(!0),ac=ab[0],ad=ab[1],ae=(0,h.useState)(!1),af=ae[0],ag=ae[1],ah=(0,h.useState)(!1),ai=ah[0],aj=ah[1],ak=(0,h.useState)(""),al=ak[0],am=ak[1],an=(0,h.useState)(""),ao=an[0],ap=an[1],aq=(0,h.useMemo)(function(){return!!ao&&ao.name},[ao]);(0,h.useEffect)(function(){m&&b.length>0&&i({id:m,callback:function(a){var c=a,d=b.find(function(a){return a.id===c.category_id});H(a.name),d&&K(d),N(a.unit),Q(a.rate_per),T(a.rate),W(a.case_content),Z(a.discount),ad(a.is_available),am(a.image_url)}})},[m,b]);var ar=function(a){var b=a.target,c=b.value,g=b.name;switch(g){case"name":H(c);break;case"unit":N(c);break;case"ratePer":Q(c);break;case"rate":T(c);break;case"caseContent":W(c);break;case"discount":Z(c);break;case"stock":aa(c)}r(function(a){return(0,f.Z)((0,e.Z)({},a),(0,d.Z)({},g,!c))})},as=function(a){K(a)},at=function(){if(!G){r(function(a){return(0,f.Z)((0,e.Z)({},a),{name:!0})});return}if(!P){r(function(a){return(0,f.Z)((0,e.Z)({},a),{ratePer:!0})});return}if(!M){r(function(a){return(0,f.Z)((0,e.Z)({},a),{unit:!0})});return}if(!S){r(function(a){return(0,f.Z)((0,e.Z)({},a),{rate:!0})});return}if(!J){r(function(a){return(0,f.Z)((0,e.Z)({},a),{category:!0})});return}if(o){var a=new FormData;a.append("id",m),a.append("name",G),a.append("isAvailable",ac),a.append("ratePer",P),a.append("unit",M),a.append("rate",S),a.append("discount",Y),a.append("isNewCategory",!!J.__isNew__),a.append("categoryId",J.value),a.append("categoryName",J.__isNew__?J.label:void 0),a.append("caseContent",V||""),ao&&(a.append("isUploadFile",!0),a.append("file",ao)),j({payload:a,isRefetchCategories:!!J.__isNew__,callback:function(a){a&&a.success?(u.Am.success("Product updated successfully"),l.push(D.adminProductList)):u.Am.error(a?a.message:"Could not update product")}})}else{var b=new FormData;b.append("id",m),b.append("name",G),b.append("isAvailable",ac),b.append("ratePer",P),b.append("unit",M),b.append("rate",S),b.append("discount",Y&&Y>0?Y:0),b.append("isNewCategory",!!J.__isNew__),b.append("categoryId",J.value),b.append("categoryName",J.__isNew__?J.label:void 0),b.append("caseContent",V||""),ao&&(b.append("isUploadFile",!0),b.append("file",ao)),c({payload:b,isRefetchCategories:!!J.__isNew__,callback:function(a){a&&a.success?(u.Am.success("Product added"),l.push(D.adminProductList)):u.Am.error("Failed to add product")}})}},au=function(){ad(function(a){return!a})},av=function(){ag(!0)},aw=function(a){ag(!1),a&&k({id:m,callback:function(a){a.success?(u.Am.success("Successfully deleted product"),l.push(D.adminProductList)):u.Am.error(a.message)}})},ax=function(){n.current.click()},ay=function(a){var b=a.target.files;b[0].size>E.fileSizeLimit?aj(!0):ap(b[0])};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B.Z,{isOpen:af,onClose:function(a){return aw(a)},title:"Are you sure",message:"Are you sure you want to delete the product?"}),(0,g.jsx)(B.Z,{isOpen:ai,onClose:function(){return aj(!1)},title:"Image too large",message:"Image size should be less than or equalt to 350 kb",hideSecondaryBtn:!0,primaryBtnLabel:"Okay"}),(0,g.jsxs)("div",{className:"p-6 h-full add-edit-product",children:[(0,g.jsxs)("div",{className:"text-lg font-bold mb-3",children:[o?"Edit":"Add"," Product"]}),(0,g.jsxs)("div",{className:"rounded-md p-5 shadow-xl md:w-2/3 md:ml-auto ml-0 w-full",children:[(0,g.jsxs)("div",{className:"flex flex-wrap",children:[(0,g.jsxs)("div",{className:"mb-2 form-ctrl mr-2",children:[(0,g.jsx)("label",{htmlFor:"name",className:"font-medium mb-3 text-gray-600",children:"Name *"}),(0,g.jsx)(x.Z,{type:"text",name:"name",id:"name",className:"w-full",onChange:ar,value:G,placeholder:"Name"}),q.name&&(0,g.jsx)("p",{className:"text-red-600 mt-3",children:"Name is required"})]}),(0,g.jsxs)("div",{className:"mb-2 form-ctrl",children:[(0,g.jsx)("label",{className:"font-medium mb-3 text-gray-600",children:"Category *"}),(0,g.jsx)(s,{isClearable:!0,onChange:as,options:b,value:J}),q.category&&(0,g.jsx)("p",{className:"text-red-600 mt-3",children:"Please select a category"})]})]}),(0,g.jsxs)("div",{className:"flex flex-wrap",children:[(0,g.jsxs)("div",{className:"mb-2 form-ctrl mr-2",children:[(0,g.jsx)("label",{htmlFor:"ratePer",className:"font-medium mb-3 text-gray-600",children:"Rate per *"}),(0,g.jsx)(x.Z,{type:"number",name:"ratePer",id:"ratePer",className:"w-full",onChange:ar,value:P,placeholder:"Rate per"}),q.ratePer&&(0,g.jsx)("p",{className:"text-red-600 mt-3",children:"Rate per is required"})]}),(0,g.jsxs)("div",{className:"mb-2 form-ctrl",children:[(0,g.jsx)("label",{htmlFor:"unit",className:"font-medium mb-3 text-gray-600",children:"Unit *"}),(0,g.jsx)(y.Z,{placeholder:"Unit",onChange:ar,name:"unit",value:M,className:"w-full",id:"unit",options:F.n.CHOICE_LIST}),q.unit&&(0,g.jsx)("p",{className:"text-red-600 mt-3",children:"Unit is required"})]})]}),(0,g.jsxs)("div",{className:"flex flex-wrap",children:[(0,g.jsxs)("div",{className:"mb-2 form-ctrl mr-2",children:[(0,g.jsx)("label",{htmlFor:"rate",className:"font-medium mb-3 text-gray-600",children:"Rate *"}),(0,g.jsx)(x.Z,{type:"number",name:"rate",id:"rate",className:"w-full",onChange:ar,value:S,placeholder:"Rate"}),q.rate&&(0,g.jsx)("p",{className:"text-red-600 mt-3",children:"Rate is required"})]}),(0,g.jsxs)("div",{className:"mb-2 form-ctrl",children:[(0,g.jsx)("label",{htmlFor:"caseContent",className:"font-medium mb-3 text-gray-600",children:"Case content"}),(0,g.jsx)(x.Z,{type:"number",name:"caseContent",id:"caseContent",className:"w-full",onChange:ar,value:V,placeholder:"Case Content"})]})]}),(0,g.jsxs)("div",{className:"flex flex-wrap",children:[(0,g.jsxs)("div",{className:"mb-2 form-ctrl mr-2",children:[(0,g.jsx)("label",{htmlFor:"discount",className:"font-medium mb-3 text-gray-600",children:"Discount"}),(0,g.jsx)(x.Z,{type:"number",name:"discount",id:"discount",className:"w-full",onChange:ar,value:Y,placeholder:"Discount"})]}),(0,g.jsxs)("div",{className:"mb-2 form-ctrl ml-2",children:[(0,g.jsx)("label",{htmlFor:"discount",className:"font-medium mb-3 text-gray-600",children:"Available"}),(0,g.jsx)(A.Z,{isEnabled:ac,onChange:au,className:"mt-2"})]})]}),(0,g.jsx)("div",{className:"flex flex-wrap",children:!o&&(0,g.jsxs)("div",{className:"mb-2 form-ctrl mr-2",children:[(0,g.jsx)("label",{htmlFor:"stock",className:"font-medium mb-3 text-gray-600",children:"Initial stock"}),(0,g.jsx)(x.Z,{type:"number",name:"stock",id:"stock",className:"w-full",onChange:ar,value:_,placeholder:"Stock"})]})}),(0,g.jsxs)("div",{className:"flex flex-wrap items-center",children:[(0,g.jsxs)("div",{className:"mb-2 mr-2",children:[(0,g.jsx)("input",{accept:"image/png, image/gif, image/jpeg",onChange:ay,type:"file",className:"opacity-0 absolute top-0 left-0",ref:n}),(0,g.jsxs)(z.Z,{className:"flex items-center whitespace-nowrap w-fit mt-2",onClick:ax,children:[(0,g.jsx)(v.G,{icon:w.wEO,className:"mr-2"}),(0,g.jsx)("span",{children:"Upload image"})]})]}),aq&&(0,g.jsx)("div",{className:"whitespace-nowrap w-96 overflow-hidden text-ellipsis",children:aq})]}),al&&(0,g.jsx)("img",{src:al,className:"preview-image"}),(0,g.jsxs)("div",{className:"flex justify-between mt-4 items-center",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(z.Z,{onClick:at,className:"mr-3",children:"save"}),(0,g.jsx)(z.Z,{secondary:!0,onClick:function(){return l.push(D.adminProductList)},className:"w-24",children:"cancel"})]}),o&&(0,g.jsx)(v.G,{icon:w.$aW,className:"text-2xl cursor-pointer",onClick:av})]})]})]})]})}var H=function(){var a=(0,i.I0)(),b=(0,i.v9)(function(a){return a.product.productCategoriesList});return(0,g.jsx)(G,{productCategoriesList:b,addProduct:function(b){return a((0,C.ry)(b))},getProduct:function(b){return a((0,C._0)(b))},updateProduct:function(b){return a((0,C.zG)(b))},deleteProduct:function(b){return a((0,C.u0)(b))}})}}}])