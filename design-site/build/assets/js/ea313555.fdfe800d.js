(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7937],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6264:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],s={title:"FAQ",section:"Guides",slug:"/docs/faq/",order:20},l="Frequently asked questions",d={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Do I need to add algosdk and/or @randlabs/myalgo-connect as dependencies to my apps?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/docs/faq/",permalink:"/docs/docs/faq/",editUrl:"https://github.com/headline-design/pipeline-ui/docs/faq.mdx",version:"current",frontMatter:{title:"FAQ",section:"Guides",slug:"/docs/faq/",order:20},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/docs/docs/demo/"},next:{title:"Getting Started",permalink:"/docs/getting-started-B"}},c=[{value:"Do I need to add algosdk and/or @randlabs/myalgo-connect as dependencies to my apps?",id:"do-i-need-to-add-algosdk-andor-randlabsmyalgo-connect-as-dependencies-to-my-apps",children:[]},{value:"Can I customize Pipeline UI components?",id:"can-i-customize-pipeline-ui-components",children:[]},{value:"Can I use Pipeline UI to create Algorand widgets for my website?",id:"can-i-use-pipeline-ui-to-create-algorand-widgets-for-my-website",children:[]},{value:"Does Pipeline UI give me out-of-the-box Algorand transaction capability?",id:"does-pipeline-ui-give-me-out-of-the-box-algorand-transaction-capability",children:[]},{value:"I don&#39;t need standard components. Is there a lite version of Pipeline?",id:"i-dont-need-standard-components-is-there-a-lite-version-of-pipeline",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"do-i-need-to-add-algosdk-andor-randlabsmyalgo-connect-as-dependencies-to-my-apps"},"Do I need to add algosdk and/or @randlabs/myalgo-connect as dependencies to my apps?"),(0,i.kt)("p",null,"No! Their functions are hard-coded into Pipeline UI components."),(0,i.kt)("h2",{id:"can-i-customize-pipeline-ui-components"},"Can I customize Pipeline UI components?"),(0,i.kt)("p",null,"To a certain degree. Part of the function of Pipeline UI is to provide standardized components that are readily recognizeable. For most components, you can easily change certain props like size and color themes. Algorand-specific components have hard-coded onClick event handlers that you cannot change. On the other hand, if you really want to, you can overide default styles with inline css, stylesheets or library modification."),(0,i.kt)("h2",{id:"can-i-use-pipeline-ui-to-create-algorand-widgets-for-my-website"},"Can I use Pipeline UI to create Algorand widgets for my website?"),(0,i.kt)("p",null,"Yes! Pipeline expedites and simplifies the process of incorporating Algorand into existing web frameworks. After building your React app, simply deploy it with Vercel, FireBase or AWS and place its URL in an iFrame:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},' <iframe src="pipeline-express-react.vercel.app" height="550" width="350" ></iframe>\n')),(0,i.kt)("h2",{id:"does-pipeline-ui-give-me-out-of-the-box-algorand-transaction-capability"},"Does Pipeline UI give me out-of-the-box Algorand transaction capability?"),(0,i.kt)("p",null,"Yes, but we highly recommend that you obtain your own API key and server url and replace these before building and deploying your app. If you are using the full version of Pipeline UI, these values can be found in the node_modules folder for your app under @pipeline-ui-2/pipeline/dist/index.js. If using Pipeline Express, they can be found in node_modules/pipeline-express-react/dist/index.js."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const algodToken = { 'X-API-Key': 'dmONugeHOX2DC8nDb3v8m6Bo9cI3WHbW6Ntt4QCZ' };\nconst algodServer = \"https://mainnet-algorand.api.purestake.io/ps2\";\nconst algodPort = \"\";\n")),(0,i.kt)("h2",{id:"i-dont-need-standard-components-is-there-a-lite-version-of-pipeline"},"I don't need standard components. Is there a lite version of Pipeline?"),(0,i.kt)("p",null,"Yes! We created Pipeliness Express to get your React Apps connect to Algorand in seconds! For more info, check out:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/headline-design/pipeline-express-react"},"Pipeline Express on Github")))}u.isMDXComponent=!0}}]);