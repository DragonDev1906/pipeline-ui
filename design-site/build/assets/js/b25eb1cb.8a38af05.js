(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7150],{7806:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},BrowserOnlyButton:function(){return m},default:function(){return h}});var o,i=e(2122),r=e(9756),s=(e(7294),e(3905)),l=e(1262),a=["components"],u={},c="AlgoSendButton",p={unversionedId:"Algo Components/AlgoSendButton",id:"Algo Components/AlgoSendButton",isDocsHomePage:!1,title:"AlgoSendButton",description:"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing.",source:"@site/docs/Algo Components/AlgoSendButton.mdx",sourceDirName:"Algo Components",slug:"/Algo Components/AlgoSendButton",permalink:"/docs/Algo Components/AlgoSendButton",editUrl:"https://github.com/headline-design/pipeline-ui/docs/Algo Components/AlgoSendButton.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoButton",permalink:"/docs/Algo Components/AlgoButton"},next:{title:"AsaList",permalink:"/docs/Algo Components/AsaList"}},d=[{value:"Use Example",id:"use-example",children:[]}],m=function(t){return(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(function(){var t=e(273).xh;return(0,s.kt)(t,{mdxType:"AlgoSendButton"})}))},g=(o="AlgoSendButton",{toc:d,BrowserOnlyButton:m});function h(t){var n=t.components,e=(0,r.Z)(t,a);return(0,s.kt)("wrapper",(0,i.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"algosendbutton"},"AlgoSendButton"),(0,s.kt)("p",null,"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing."),(0,s.kt)(m,{mdxType:"BrowserOnlyButton"}),(0,s.kt)("h2",{id:"use-example"},"Use Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import {AlgoButton, AlgoSendButton, Pipeline} from \'pipeline-ui\'\n\nconst myAlgoWallet = Pipeline.init();\n\n<AlgoSendButton\n      asset={"Algorand"} //If ASA, must be a numeric index value\n      recipient={this.state.recipient} //string value\n      amount={this.state.amount} //integer value in micro Algos\n      note={this.state.note} //string value\n      myAddress={this.state.Algaddress} //string value\n      wallet={myAlgoWallet} //reference to an instance of Pipeline.init(); that is called ONCE when the app is initialized\n      context={this}\n      returnTo={"txID"}// string value of state key to return the transaction id\n      />\n')))}h.isMDXComponent=!0}}]);