(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7786],{3919:function(t,e,n){"use strict";function i(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!i(t)}n.d(e,{b:function(){return i},Z:function(){return r}})},4996:function(t,e,n){"use strict";n.d(e,{C:function(){return o},Z:function(){return a}});var i=n(2263),r=n(3919);function o(){var t=(0,i.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,l=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+c:c}(o,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},2227:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=n(4996),l=["components"],s={title:"Getting Started"},u=void 0,c={unversionedId:"getting-started-B",id:"getting-started-B",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to Pipeline UI, a library of standardized React components for the Algorand Ecosystem.",source:"@site/docs/getting-started-B.mdx",sourceDirName:".",slug:"/getting-started-B",permalink:"/docs/getting-started-B",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/getting-started-B.mdx",version:"current",frontMatter:{title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/docs/faq/"},next:{title:"Code-Lite: Our Philosophy",permalink:"/docs/philosophy"}},d=[{value:"Install the library:",id:"install-the-library",children:[]},{value:"Import components into your React project:",id:"import-components-into-your-react-project",children:[]},{value:"Modifying the library:",id:"modifying-the-library",children:[]}],p={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to Pipeline UI, a library of standardized React components for the Algorand Ecosystem."),(0,o.kt)("h3",{id:"install-the-library"},"Install the library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd myNewApp\nnpm install pipeline-ui\n")),(0,o.kt)("h3",{id:"import-components-into-your-react-project"},"Import components into your React project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-ui';\n")),(0,o.kt)("h3",{id:"modifying-the-library"},"Modifying the library:"),(0,o.kt)("p",null,"If you wish to download and modify the library components via source code, run the following code to save it to your user root directory and install its dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/headline-design/pipeline-ui\ncd pipeline-ui\nnpm install\n")),(0,o.kt)("p",null,"You may then edit the components via the index.js file found inside each component folder in the parent folder /src. After saving changes, you must then run the following code from the pipeline-ui parent folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm pack\n")),(0,o.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,a.Z)("/img/pipeline_vectilla_10.svg")}))}m.isMDXComponent=!0}}]);