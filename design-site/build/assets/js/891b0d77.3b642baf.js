(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2828],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,v=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(v,r(r({ref:n},s),{},{components:t})):a.createElement(v,r({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},947:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var a=t(2122),o=t(9756),l=(t(7294),t(3905)),r=["components"],i={},d="Form",u={unversionedId:"Components/Form",id:"Components/Form",isDocsHomePage:!1,title:"Form",description:"The Form component provides a wrapped version of the HTML form element.",source:"@site/docs/Components/Form.mdx",sourceDirName:"Components",slug:"/Components/Form",permalink:"/docs/Components/Form",editUrl:"https://github.com/headline-design/pipeline-ui/docs/Components/Form.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/docs/Components/Flex"},next:{title:"Heading",permalink:"/docs/Components/Heading"}},s=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],p={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"form"},"Form"),(0,l.kt)("p",null,"The Form component provides a wrapped version of the HTML form element.\nNative HTML5 form validation"),(0,l.kt)("p",null,"For native HTML form validation\u2013available in all our supported browsers, the :valid and :invalid pseudo selectors are used to apply validation styles as well as display feedback messages."),(0,l.kt)("p",null,"pipeline scopes the :valid and :invalid styles to parent .was-validated class, usually applied to the Form (you can use the validated prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted)."),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  Box,\n  Form,\n  Input,\n  Select,\n  Field,\n  Button,\n  Text,\n  Checkbox,\n  Radio\n} from "pipeline-ui";\n\nfunction CustomForm() {\n  const [formValidated, setFormValidated] = useState(false);\n  const [validated, setValidated] = useState(false);\n  const [inputValue, setInputValue] = useState("");\n  const [formInputValue, setFormInputValue] = useState("");\n  const [selectValue, setSelectValue] = useState("");\n  const [checkboxValue, setCheckboxValue] = useState(false);\n  const [radioValue, setRadioValue] = useState("");\n\n  const handleInput = e => {\n    setInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleFormInput = e => {\n    setFormInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleSelect = e => {\n    setSelectValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleCheckbox = e => {\n    setCheckboxValue(!checkboxValue);\n    validateInput(e);\n  };\n\n  const handleRadio = e => {\n    setRadioValue(e.target.value);\n    validateInput(e);\n  };\n\n  const validateInput = e => {\n    e.target.parentNode.classList.add("was-validated");\n  };\n\n  const validateForm = () => {\n    // Perform advanced validation here\n    if (\n      inputValue.length > 0 &&\n      selectValue.length > 0 &&\n      checkboxValue === true &&\n      radioValue.length > 0\n    ) {\n      setValidated(true);\n    } else {\n      setValidated(false);\n    }\n  };\n\n  useEffect(() => {\n    validateForm();\n  });\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log("Submitted valid form");\n  };\n\n  return (\n    <Box p={4}>\n      <Box>\n        <Form onSubmit={handleSubmit} validated={formValidated}>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Plain Input" validated={validated} width={1}>\n                <Input\n                  type="text"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleInput}\n                  value={inputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Form Email Input" validated={validated} width={1}>\n                <Form.Input\n                  type="email"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleFormInput}\n                  value={formInputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n          </Flex>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Select Input" validated={validated} width={1}>\n                <Select\n                  options={[\n                    { value: "", label: ""},\n                    { value: "eth", label: "Ethereum" },\n                    { value: "btc", label: "Bitcoin" },\n                    { value: "gno", label: "Gnosis" },\n                    { value: "gnt", label: "Golem" },\n                    { value: "rep", label: "Augur" }\n                  ]}\n                  value={selectValue}\n                  onChange={handleSelect}\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  width={1}\n                />\n              </Field>\n            </Box>\n          </Flex>\n          \n          \n          <Box>\n            <Field label="Checkbox Input" validated={validated}>\n              <Form.Check\n                value={checkboxValue}\n                onChange={handleCheckbox}\n                required // set required attribute to use brower\'s HTML5 input validation\n              />\n            </Field>\n          </Box>\n          <Box>\n            <Field label="Radio Input" validated={validated}>\n              <Radio\n                label="Radio 1"\n                my={2}\n                value={"radio1"}\n                checked={radioValue === "radio1"}\n                onChange={handleRadio}\n                required\n              />\n              <Radio\n                label="Radio 2"\n                my={2}\n                value={"radio2"}\n                checked={radioValue === "radio2"}\n                onChange={handleRadio}\n              />\n              <Radio\n                label="Radio 3"\n                my={2}\n                value={"radio3"}\n                checked={radioValue === "radio3"}\n                onChange={handleRadio}\n              />\n            </Field>\n          </Box>\n          <Box>\n            {/* Use the validated state to update UI */}\n            <Button type="submit" disabled={!validated}>\n              Submit Form\n            </Button>\n          </Box>\n        </Form>\n      </Box>\n      <Card my={4}>\n        <Heading as={"h4"}>Form values</Heading>\n        <Text>Valid form: {validated.toString()}</Text>\n        <Text>Email value: {inputValue}</Text>\n        <Text>Select value: {selectValue}</Text>\n        <Text>Checkbox value: {checkboxValue.toString()}</Text>\n        <Text>Radio value: {radioValue}</Text>\n        <Checkbox\n          label="Toggle Form Validation"\n          value={formValidated}\n          onChange={e => setFormValidated(!formValidated)}\n        />\n        <Text>Form validated: {formValidated.toString()}</Text>\n      </Card>\n    </Box>\n  );\n}\n')),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)("p",null,"validated\nbool\n(optional)\nShows the input validation styles when true by adding he ",(0,l.kt)("inlineCode",{parentName:"p"},".was-validated")," class to the form element.\nDefault value:"),(0,l.kt)("p",null,"false"),(0,l.kt)("p",null,"Styled System Props"),(0,l.kt)("p",null,"Form uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props."))}c.isMDXComponent=!0}}]);