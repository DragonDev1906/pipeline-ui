(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7150],{7806:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return m},BrowserOnlyButton:function(){return c},toc:function(){return k},default:function(){return h}});var l,o=e(2122),i=e(9756),r=(e(7294),e(3905)),s=e(1262),u=e(6086),d=["components"],a={},p="AlgoSendButton",m={unversionedId:"Algo Components/AlgoSendButton",id:"Algo Components/AlgoSendButton",isDocsHomePage:!1,title:"AlgoSendButton",description:"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction.",source:"@site/docs/Algo Components/AlgoSendButton.mdx",sourceDirName:"Algo Components",slug:"/Algo Components/AlgoSendButton",permalink:"/docs/Algo Components/AlgoSendButton",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Algo Components/AlgoSendButton.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoFetch",permalink:"/docs/Algo Components/AlgoFetch"},next:{title:"AsaList",permalink:"/docs/Algo Components/AsaList"}},c=function(t){return(0,r.kt)(s.Z,{mdxType:"BrowserOnly"},(function(){var t=e(140).xh;return(0,r.kt)(t,{mdxType:"AlgoSendButton"})}))},k=[{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[]}]}],g=(l="AlgoSendButton",{BrowserOnlyButton:c,toc:k});function h(t){var n=t.components,e=(0,i.Z)(t,d);return(0,r.kt)("wrapper",(0,o.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algosendbutton"},"AlgoSendButton"),(0,r.kt)("p",null,"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The rendered AlgoSend button below is nonfunctional. To see it in action, check out the ",(0,r.kt)("a",{parentName:"p",href:"../Demos/transaction"},"Transaction Demo!")))),(0,r.kt)("p",null,"Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing."),(0,r.kt)(c,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("h2",{id:"use-example"},"Use Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-ui'\n\nconst myAlgoWallet = Pipeline.init();\n\n<AlgoSendButton\n      index={this.state.index}\n      recipient={this.state.recipient}\n      amount={this.state.amount}\n      note={this.state.note}\n      myAddress={this.state.Algaddress}\n      wallet={myAlgoWallet} \n      context={this}\n      returnTo={\"txID\"}\n      />\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(u.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"index"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"If Algorand, must be 0. If ASA, must be numeric index value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"recipient"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Address of recipient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"amount"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"amount to send in micro Algos")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"note"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'"note"'),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"myAddress"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Address of sender")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"wallet"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null,"reference to an instance of Pipeline.init(); that is called ONCE when the app is initialized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"context"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Recommended value: this")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"returnTo"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string value of state key to return the transaction id")))))}h.isMDXComponent=!0}}]);