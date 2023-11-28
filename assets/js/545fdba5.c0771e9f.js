"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={slug:"tutorials-updates",title:"New tutorials and updates",authors:"alejandro",tags:["hello","neurosynth"]},s=void 0,i={permalink:"/compose-docs/blog/tutorials-updates",editUrl:"https://github.com/neurostuff/compose-docs/edit/master/blog/2023-11-28-tutorials.md",source:"@site/blog/2023-11-28-tutorials.md",title:"New tutorials and updates",description:"Dear Neurosynth Community,",date:"2023-11-28T00:00:00.000Z",formattedDate:"November 28, 2023",tags:[{label:"hello",permalink:"/compose-docs/blog/tags/hello"},{label:"neurosynth",permalink:"/compose-docs/blog/tags/neurosynth"}],readingTime:1.135,hasTruncateMarker:!1,authors:[{name:"Alejandro de la Vega",title:"Research Scientist",url:"https://github.com/adelavega",imageURL:"https://github.com/adelavega.png",key:"alejandro"}],frontMatter:{slug:"tutorials-updates",title:"New tutorials and updates",authors:"alejandro",tags:["hello","neurosynth"]},nextItem:{title:"Announcing Neurosynth Compose!",permalink:"/compose-docs/blog/announcing-ns-compose"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dear Neurosynth Community,"),(0,r.kt)("p",null,"I'm excited to announce important updates to ",(0,r.kt)("em",{parentName:"p"},"Neurosynth Compose"),": A free and open platform for neuroimaging meta-analysis."),(0,r.kt)("p",null,"First, we have added some easy to follow ",(0,r.kt)("a",{parentName:"p",href:"https://neurostuff.github.io/compose-docs/tutorial"},"tutorials")," to our documentation, making it easy to become familiar with our platform. "),(0,r.kt)("p",null,"The tutorials cover two main uses cases we support: Manual and Automated Meta-analyses. Our platform make gold-standard ",(0,r.kt)("em",{parentName:"p"},"manual")," meta-analyses much easier, by leveraging pre-extracted imaging data\nand streamline user interfaces. Automated meta-analyses are ideal for generating exploratory results rapidly, enabling meta-analysis as part of routine scientific practice.  "),(0,r.kt)("p",null,"We've also made many small but important updates to our platform, including significant performance updates and improvements to the user interface.\n",(0,r.kt)("em",{parentName:"p"},"Neurosynth Compose")," is now more intuitive and easier to use. Give it a try by following our ",(0,r.kt)("a",{parentName:"p",href:"https://neurostuff.github.io/compose-docs/tutorial/manual"},"manual meta-analysis tutorial"),". "),(0,r.kt)("p",null,"We also have some exciting new features in the pipeline that we'll release in early 2024 including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image-based Meta-Analysis (IBMA). Soon, you will be able to use NeuroVault data as inputs for IBMA-- a more powerful and sensitive alternative to Coordinate Based Meta-Analysis."),(0,r.kt)("li",{parentName:"ul"},"Advanced data extraction using Large Language Models (GPT). Early protypes to extract detailed information (such as participant demographics) from neuroimaging articles using LLMs\nhave shown promise. We are working on incorporating these workflows into ",(0,r.kt)("em",{parentName:"li"},"Neurosynth Compose"),", making it even easier to identify relevant studies for meta-analysis.")),(0,r.kt)("p",null,"We look forward to your feedback!"),(0,r.kt)("p",null,"-Alejandro"))}m.isMDXComponent=!0}}]);