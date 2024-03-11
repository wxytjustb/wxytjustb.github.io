"use strict";(self.webpackChunkroky_wang=self.webpackChunkroky_wang||[]).push([[3237],{7794:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=l(4848),s=l(8453);const r={},i=void 0,a={id:"CloudNative/helm/helm",title:"helm",description:"\u5b89\u88c5",source:"@site/docs/CloudNative/helm/helm.md",sourceDirName:"CloudNative/helm",slug:"/CloudNative/helm/",permalink:"/en/docs/CloudNative/helm/",draft:!1,unlisted:!1,editUrl:"https://github.com/wxytjustb/rokywang/tree/main/docs/CloudNative/helm/helm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apiserver_extend",permalink:"/en/docs/CloudNative/extend/apiserver_extend"},next:{title:"\u4f7f\u7528Service\u5c06\u96c6\u7fa4\u5916\u670d\u52a1\u5f15\u5165\u96c6\u7fa4\u5185",permalink:"/en/docs/CloudNative/kubernetes/service"}},c={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5feb\u901f\u4f7f\u7528",id:"\u5feb\u901f\u4f7f\u7528",level:3}];function h(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"linux\u4e0b\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="linux"',children:"curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n"})}),"\n",(0,t.jsx)(n.p,{children:"mac\u4e0b\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"brew install helm\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5feb\u901f\u4f7f\u7528",children:"\u5feb\u901f\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u62ff\u9f0e\u9f0e\u5927\u540d\u7684bitnami\u4e3e\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Charts\u4ed3\u5e93\u76f8\u5173"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u6dfb\u52a0\u4e00\u4e2acharts\u4ed3\u5e93\nhelm repo add bitnami https://charts.bitnami.com/bitnami\n# \u66f4\u65b0\u4ed3\u5e93\u5230\u6700\u65b0\u7684\u7248\u672c\nhelm repo upadte\n# \u67e5\u770b\u4ed3\u5e93\u91cc\u6240\u6709\u7684charts\u5217\u8868\nhelm search repo bitnami\n# \u5220\u9664\u4e00\u4e2a\u4ed3\u5e93\nhelm repo remove bitnami\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u4e00\u4e2acharts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u9996\u6b21\u5b89\u88c5\nhelm install bitnami/mysql --generate-name\n\n# \u5347\u7ea7\nhelm upgrade --install bitnami/mysql --generate-name\n\n# \u67e5\u770bcharts\u90e8\u7f72\u60c5\u51b5\nhelm list --namespace namespace\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5378\u8f7d\u5b89\u88c5\u7684charts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm uninstall mysql-xxxx\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>a});var t=l(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);