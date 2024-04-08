"use strict";(self.webpackChunkroky_wang=self.webpackChunkroky_wang||[]).push([[9597],{4993:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(4848),o=n(8453);const i={title:"casdoor provider\u5f00\u53d1"},a=void 0,s={id:"MiddleWare/casdoor_plugins",title:"casdoor provider\u5f00\u53d1",description:"Custom Oauth",source:"@site/docs/MiddleWare/casdoor_plugins.md",sourceDirName:"MiddleWare",slug:"/MiddleWare/casdoor_plugins",permalink:"/docs/MiddleWare/casdoor_plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/wxytjustb/rokywang/tree/main/docs/MiddleWare/casdoor_plugins.md",tags:[],version:"current",frontMatter:{title:"casdoor provider\u5f00\u53d1"},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u6e90IAM\u7cfb\u7edfCasdoor",permalink:"/docs/MiddleWare/casdoor"},next:{title:"Kafka",permalink:"/docs/MiddleWare/kafka"}},d={},l=[{value:"Custom Oauth",id:"custom-oauth",level:3},{value:"\u81ea\u5b9a\u4e49\u624b\u673a\u9a8c\u8bc1\u7801",id:"\u81ea\u5b9a\u4e49\u624b\u673a\u9a8c\u8bc1\u7801",level:3},{value:"\u540c\u6b65\u7528\u6237",id:"\u540c\u6b65\u7528\u6237",level:2}];function c(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"custom-oauth",children:"Custom Oauth"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mermaid",children:'sequenceDiagram\n\tBroswer ->> /oauth/authorize: \n\t/oauth/authorize ->> login.html: \n\tlogin.html ->> "/api/login": \n\t/api/login ->> /oauth/authorize: \n\t\n\t\n\t\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u624b\u673a\u9a8c\u8bc1\u7801",children:"\u81ea\u5b9a\u4e49\u624b\u673a\u9a8c\u8bc1\u7801"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-golang",children:'\t\tcode := context.Request.FormValue("code")\n\t\tphoneNumber := context.Request.FormValue("phoneNumber")\n\n\t\tparts := strings.Split(code, "%!(EXTRA string=")\n\t\tif len(parts) < 2 {\n\t\t\tfmt.Println("\u8f93\u5165\u5b57\u7b26\u4e32\u683c\u5f0f\u4e0d\u6b63\u786e")\n\t\t\treturn\n\t\t}\n\n\t\ttemplateCode := parts[0]\n\t\textraString := strings.TrimSuffix(parts[1], ")")\n\n\t\tfmt.Println("code:", templateCode)\n\t\tfmt.Println("extra_string:", extraString)\n\t\tfmt.Println("phoneNumber:", phoneNumber)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u540c\u6b65\u7528\u6237",children:"\u540c\u6b65\u7528\u6237"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u540c\u6b65\u5668\u540c\u6b65\u73b0\u6709\u7528\u6237"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u5b9a\u65f6\u4efb\u52a1\u540c\u6b65\u7528\u6237\u5c5e\u6027\uff08\u6bcf\u5c0f\u65f6\u540c\u6b65\u5c0f\u5c5e\u6027\uff0c\u6bcf\u5929\u540c\u6b65\u5168\u91cf\u5c5e\u6027\uff09"})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);