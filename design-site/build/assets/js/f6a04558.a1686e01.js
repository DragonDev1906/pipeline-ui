(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5323],{6032:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(8604),s=["components"],c={},l="CSS & Style Guide",p={unversionedId:"css",id:"css",isDocsHomePage:!1,title:"CSS & Style Guide",description:"Pipeline-UI components are incorporated into a React app via JSX, a language with syntax that resembles familiar html tags (and can include conventional html elements alongside it). However, Pipeline-UI components do not neccesarily have all of the properties of their corresponding html elements (i.e. ` is not exactly equivalent to `). Many of the components are complex and consist of many nested components and elements. Therefore, we recommend setting their properties using their specified React props and Themes. However, there are several ways to use both inline css and css stylesheets, though the resulting styling may not be what is expected.",source:"@site/docs/css.mdx",sourceDirName:".",slug:"/css",permalink:"/docs/css",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/css.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorand Bridge",permalink:"/docs/bridge"},next:{title:"FAQ",permalink:"/docs/docs/faq/"}},u=[{value:"Inline CSS &amp; React",id:"inline-css--react",children:[]},{value:"CSS Stylesheets and React",id:"css-stylesheets-and-react",children:[]},{value:"Why CSS is not recommended",id:"why-css-is-not-recommended",children:[]}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"css--style-guide"},"CSS & Style Guide"),(0,i.kt)("p",null,"Pipeline-UI components are incorporated into a React app via JSX, a language with syntax that resembles familiar html tags (and can include conventional html elements alongside it). However, Pipeline-UI components do not neccesarily have all of the properties of their corresponding html elements (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"<Button>")," is not exactly equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),"). Many of the components are complex and consist of many nested components and elements. Therefore, we recommend setting their properties using their specified React props and Themes. However, there are several ways to use both inline css and css stylesheets, though the resulting styling may not be what is expected. "),(0,i.kt)("h2",{id:"inline-css--react"},"Inline CSS & React"),(0,i.kt)("p",null,"Changing CSS properties inside React component JSX tags is at times slightly different from conventional CSS:"),(0,i.kt)(a.Z,{borderRadius:"20",mdxType:"Button"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button borderRadius="20" />\n')),(0,i.kt)("p",null,'Note: CSS can only be used like this if the CSS property is also a "prop" of the React component. If it is not, it may be incorporated by using the ',(0,i.kt)("inlineCode",{parentName:"p"},"style")," keyword like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button style={{borderRadius: 20}}/>\n")),(0,i.kt)("p",null,"In JSX, curly braces are used to both specify that the value is JavaScript, and to create a JavaScript object. In addition, dashes are not permitted in object names (the keys that come before colons), so the CSS property is camelCased."),(0,i.kt)("h2",{id:"css-stylesheets-and-react"},"CSS Stylesheets and React"),(0,i.kt)("p",null,"To use a stylesheet in React, the stylesheet must first be imported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { Button } from 'pipeline-ui'\nimport styles from './custom.css';\n\nclass App extends Component {\n  render() {\n    // You can use them as regular CSS styles\n    return <Button className={styles.button} />;\n  }\n}\n")),(0,i.kt)("h2",{id:"why-css-is-not-recommended"},"Why CSS is not recommended"),(0,i.kt)("p",null,"The below example graphically illustrates why css is not the preferred way to change the style of a Pipeline-UI component:"),(0,i.kt)(a.Z,{style:{backgroundColor:"red",border:"solid red",borderRadius:20},mdxType:"Button"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button\n    style={{\n      backgroundColor: 'red',\n      border: 'solid red',\n      borderRadius: 20,\n    }}\n  />\n")),(0,i.kt)("p",null,"  In the example, our CSS value for ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor")," is having no visible effect on the Pipeline-Ui component, since the component's background color is actually set by its prop ",(0,i.kt)("inlineCode",{parentName:"p"},"mainColor"),". We can easily change the background color by setting its non-CSS prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Button\n    mainColor=\"red\"\n    style={{\n      backgroundColor: 'blue',\n      border: 'solid red',\n      borderRadius: 20,\n    }}\n  />\n")))}f.isMDXComponent=!0},8120:function(e,t,n){"use strict";n.d(t,{Sn:function(){return m},Rn:function(){return h}});var r=n(7294),o=n(5697),i=n.n(o),a=n(1288),s=n(8836),c=n(8735),l=n(4433);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=(0,s.bU)({prop:"size",key:"buttonSizes"}),d=(0,s.oB)({prop:"mainColor",cssProperty:"--main-color",key:"colors"}),f=(0,s.oB)({prop:"contrastColor",cssProperty:"--contrast-color",key:"colors"}),m=(0,a.ZP)(c.D).withConfig({displayName:"BaseButton__StyledButton",componentId:"sc-1hj5v8i-0"})(["&{-webkit-font-smoothing:antialiased;appearance:none;user-select:none;white-space:nowrap;text-decoration:none;text-align:center;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:",";}&:hover{cursor:pointer;}&:disabled{opacity:0.5;pointer-events:none;}> span.button-text{display:inline-flex;}"," > div > svg,> span.button-text{position:relative;z-index:1;user-select:none;pointer-events:none;}> div > svg{display:block;}> div:first-child > svg{margin-left:-0.5rem;margin-right:.5rem;}> div:last-child > svg{margin-left:.5rem;margin-right:-0.5rem;}> div:first-child:last-child > svg{margin:0;}"," "," "," ",""],(function(e){return e.icononly?"0":e.p}),"",d,f,s.jn,u);m.defaultProps={as:"button"};var h=function(e){var t=e.children,n=e.icon,o=e.iconpos;return n?r.createElement(r.Fragment,null,n&&!o&&r.createElement(l.Z,{name:n}),n&&"left"==o&&r.createElement(l.Z,{name:n}),t&&r.createElement("span",{className:"button-text",children:t}),n&&"right"==o&&r.createElement(l.Z,{name:n})):r.createElement("span",{className:"button-text",children:t})},y=r.forwardRef((function(e,t){return r.createElement(m,p({},e,{ref:t}))}));y.defaultProps={position:"relative",height:"3rem",minWidth:"3rem",px:4,py:0,fontSize:"inherit",fontFamily:"sansSerif",fontWeight:3,lineHeight:1,color:"white",bg:"silver",mainColor:"primary",contrastColor:"white",border:"none"},y.propTypes={theme:i().object,mainColor:i().string,contrastColor:i().string,size:i().oneOf(["small","medium","large"]),icon:i().string,iconpos:i().oneOf(["left","right"]),icononly:i().bool},y.displayName="Button",t.ZP=y},8604:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(8120),o=n(7294),i=n(1288),a=["children","icon","iconpos"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,i.ZP)(r.Sn).withConfig({displayName:"TextButton__StyledTextButton",componentId:"sc-1cs5ytp-0"})(["&{color:var(--main-color);border:none;background:none;box-shadow:none;}&:hover{text-decoration:underline;background:none;box-shadow:none;}&:active{text-decoration:none;}&::before{display:none;}"]),f=o.forwardRef((function(e,t){var n=e.children,i=e.icon,s=e.iconpos,c=u(e,a);return o.createElement(d,p({},c,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:s,children:n}))}));f.defaultProps=c(c({},r.ZP.defaultProps),{},{px:2});var m=f,h=["children","icon","iconpos"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=(0,i.ZP)(r.Sn).withConfig({displayName:"SolidButton__StyledSolidButton",componentId:"sc-16jeih0-0"})(["&{color:var(--contrast-color);"," background:#FFF;z-index:0;transition:all 0.15s ease;}&:hover{text-decoration:inherit;box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&:hover::before{opacity:0.9;}&:active{box-shadow:none;background:#000;}&::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;height:100%;width:100%;background:var(--main-color);pointer-events:none;}"],""),j=o.forwardRef((function(e,t){var n=e.children,i=e.icon,a=e.iconpos,s=O(e,h);return o.createElement(w,v({},s,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:a,children:n}))}));j.defaultProps=b(b({},r.ZP.defaultProps),{},{borderRadius:0,boxShadow:1});var S=j,P=["children","icon","iconpos"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=(0,i.ZP)(w).withConfig({displayName:"OutlineButton__StyledOutlineButton",componentId:"sc-1gcz6sz-0"})(["&{color:var(--main-color);background:transparent;}&:hover{border-color:var(--main-color);}&:hover::before{opacity:0;}&:active{background:#fff;}&:active::before{opacity:0.1;}&::before{opacity:0;}"]),E=o.forwardRef((function(e,t){var n=e.children,i=e.icon,a=e.iconpos,s=B(e,P);return o.createElement(R,N({},s,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:a,children:n}))}));E.defaultProps=x(x({},S.defaultProps),{},{border:1,borderColor:"grey",boxShadow:0});var I,Z=E;(I=S).displayName="Button",I.Outline=Z,I.Outline.displayName="Button.Outline",I.Text=m,I.Text.displayName="Button.Text",I.Base=r.ZP,I.Base.displayName="Button.Base";var D=I},4433:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),a=n(9714),s=n(8735),c=n(7582),l=["name","size"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.forwardRef((function(e,t){var n=e.name,o=e.size,i=u(e,l);return r.createElement(s.Z,p({ref:t},i),r.createElement(a.Z,{name:n,size:o}))}));d.defaultProps={name:"",size:"24px",display:"inline-flex",theme:c.Z},d.propTypes={name:i().string.isRequired,size:i().string,display:i().string,theme:i().object},d.displayName="Icon",t.Z=d}}]);