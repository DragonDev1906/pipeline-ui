"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3466],{888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var l=n(2122),i=n(9756),a=(n(7294),n(3905)),d=n(6086),s=["components"],o={},r="Pipeline Class",p={unversionedId:"pipeline",id:"pipeline",isDocsHomePage:!1,title:"Pipeline Class",description:"Pipeline is a custom class to sign transactions with MyAlgo Connect, check balances and send transactions (via AlgoExplorer).",source:"@site/docs/pipeline.mdx",sourceDirName:".",slug:"/pipeline",permalink:"/docs/pipeline",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/pipeline.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code-Lite: Our Philosophy",permalink:"/docs/philosophy"},next:{title:"Why Pipeline?",permalink:"/docs/start"}},u=[{value:"Use Example",id:"use-example",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Arguments",id:"arguments",children:[{value:"Pipeline.balance()",id:"pipelinebalance",children:[]},{value:"Pipeline.connect()",id:"pipelineconnect",children:[]},{value:"Pipeline.send()",id:"pipelinesend",children:[]}]}],c={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipeline-class"},"Pipeline Class"),(0,a.kt)("p",null,"Pipeline is a custom class to sign transactions with MyAlgo Connect, check balances and send transactions (via AlgoExplorer). "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We recommend using this class only for more advanced users who do not wish to use the Algo Components with hard-coded onClick functions. "))),(0,a.kt)("p",null,"Note: For faster loading, the codesandbox example below imports the Pipeline class from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pipeline-ui-2/pipeline"),". If you have installed ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline-ui"),", the class is bundled with it and can be imported like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Pipeline } from 'pipeline-ui';\n")),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.connect"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.send")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.balance")," are 'asyc' functions. They initally return a promise, so to get the returned data, the ",(0,a.kt)("inlineCode",{parentName:"p"},".then(data => doSomeThingwithData)")," notation must be used when calling them (if the returned data is needed.)"),(0,a.kt)("h2",{id:"use-example"},"Use Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/github/headline-design/Pipeline/tree/main/example?codemirror=1&fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"600px",title:"example",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The above example will send 1 micro Algo to the Headline Dev Team test account. We recommend changing the value ",(0,a.kt)("inlineCode",{parentName:"p"},"const recipient")," (currently on line 5) to your preferred testing addressing before sending a transaction. "))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)(d.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Method"),(0,a.kt)("th",null,"Returns"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.init()"),(0,a.kt)("td",null,"new instance of MyAlgo"),(0,a.kt)("td",null,"Must be called once before connect or send methods")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.balance()"),(0,a.kt)("td",null,'string (balance + "Algos")'),(0,a.kt)("td",null,"Takes input string address. Pipeline.init not neccesary for use.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.connect()"),(0,a.kt)("td",null,"string (address)"),(0,a.kt)("td",null,"Generates pop-up to sign in. Must be called before Pipeline.send")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.send()"),(0,a.kt)("td",null,"string (transaction id) "),(0,a.kt)("td",null,"Can only be called after Pipeline.init and Pipeline.connect.")))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"pipelinebalance"},"Pipeline.balance()"),(0,a.kt)(d.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"address"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Algorand address")))),(0,a.kt)("h3",{id:"pipelineconnect"},"Pipeline.connect()"),(0,a.kt)(d.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"wallet"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null,"instance of Pipeline.init() that is called once in app")))),(0,a.kt)("h3",{id:"pipelinesend"},"Pipeline.send()"),(0,a.kt)(d.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"address"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"recipient's Algorand address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"amt"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"amount to send in microAlgos")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"myNote"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"note")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sendingAddress"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"senders's Algorand address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wallet"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null,"instance of Pipeline.init() that is called once in app")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"index"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"0 = Algorand, otherwise asset index number")))))}k.isMDXComponent=!0}}]);