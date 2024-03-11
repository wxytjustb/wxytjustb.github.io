"use strict";(self.webpackChunkroky_wang=self.webpackChunkroky_wang||[]).push([[3302],{265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=a(4848),s=a(8453);const c={title:"Elasticsearch"},r=void 0,i={id:"Database/elasticsearch",title:"Elasticsearch",description:"Elasticsearch \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u57fa\u4e8e Lucene \u7684\u641c\u7d22\u5f15\u64ce\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u6587\u641c\u7d22\u5f15\u64ce\uff0c\u5177\u6709 HTTP web \u63a5\u53e3\u548c\u65e0\u6a21\u5f0f\u7684 JSON \u6587\u6863\u3002Elasticsearch \u662f\u7528 Java \u5f00\u53d1\u7684\uff0c\u662f\u5f53\u524d\u6d41\u884c\u7684\u4f01\u4e1a\u7ea7\u641c\u7d22\u5f15\u64ce\u3002\u8bbe\u8ba1\u7528\u4e8e\u4e91\u8ba1\u7b97\u4e2d\uff0c\u80fd\u591f\u8fbe\u5230\u5b9e\u65f6\u641c\u7d22\uff0c\u7a33\u5b9a\u3001\u53ef\u9760\u3001\u5feb\u901f\u3001\u5b89\u88c5\u4f7f\u7528\u65b9\u4fbf\u3002",source:"@site/docs/Database/elasticsearch.md",sourceDirName:"Database",slug:"/Database/elasticsearch",permalink:"/en/docs/Database/elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/wxytjustb/rokywang/tree/main/docs/Database/elasticsearch.md",tags:[],version:"current",frontMatter:{title:"Elasticsearch"},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/en/docs/category/database"},next:{title:"CloudNative\u4e91\u539f\u751f",permalink:"/en/docs/category/cloudnative\u4e91\u539f\u751f"}},o={},l=[];function d(e){const t={a:"a",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Elasticsearch \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u57fa\u4e8e Lucene \u7684\u641c\u7d22\u5f15\u64ce\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u6587\u641c\u7d22\u5f15\u64ce\uff0c\u5177\u6709 HTTP web \u63a5\u53e3\u548c\u65e0\u6a21\u5f0f\u7684 JSON \u6587\u6863\u3002Elasticsearch \u662f\u7528 Java \u5f00\u53d1\u7684\uff0c\u662f\u5f53\u524d\u6d41\u884c\u7684\u4f01\u4e1a\u7ea7\u641c\u7d22\u5f15\u64ce\u3002\u8bbe\u8ba1\u7528\u4e8e\u4e91\u8ba1\u7b97\u4e2d\uff0c\u80fd\u591f\u8fbe\u5230\u5b9e\u65f6\u641c\u7d22\uff0c\u7a33\u5b9a\u3001\u53ef\u9760\u3001\u5feb\u901f\u3001\u5b89\u88c5\u4f7f\u7528\u65b9\u4fbf\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4e3b\u8981\u529f\u80fd\u5305\u62ec\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u5206\u5e03\u5f0f\u641c\u7d22\uff1a\u4f60\u53ef\u4ee5\u5728\u591a\u4e2a\u670d\u52a1\u5668\u4e0a\u5b58\u50a8\u6570\u636e\uff0cElasticsearch \u4f1a\u81ea\u52a8\u5904\u7406\u6570\u636e\u7684\u5206\u7247\u548c\u590d\u5236\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5168\u6587\u641c\u7d22\uff1aElasticsearch \u4f7f\u7528 Lucene \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u5168\u6587\u641c\u7d22\u80fd\u529b\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5b9e\u65f6\u641c\u7d22\uff1aElasticsearch \u53ef\u4ee5\u5728\u6570\u636e\u88ab\u6dfb\u52a0\u6216\u4fee\u6539\u540e\u51e0\u79d2\u5185\u8fdb\u884c\u641c\u7d22\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u591a\u79df\u6237\uff1a\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a Elasticsearch \u96c6\u7fa4\u4e2d\u5b58\u50a8\u591a\u4e2a\u7d22\u5f15\uff0c\u6bcf\u4e2a\u7d22\u5f15\u90fd\u6709\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u95f4\u3002"}),"\n",(0,n.jsx)(t.li,{children:"API\uff1aElasticsearch \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684 RESTful API\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b API \u6765\u521b\u5efa\u3001\u5220\u9664\u3001\u66f4\u65b0\u3001\u67e5\u8be2\u7d22\u5f15\uff0c\u4ee5\u53ca\u6267\u884c\u8bb8\u591a\u5176\u4ed6\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u5728 Elasticsearch \u4e2d\uff0c\u5b57\u6bb5\u7c7b\u578b\uff08Field Types\uff09\u88ab\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u4e3b\u8981\u7c7b\u522b\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u6838\u5fc3\u6570\u636e\u7c7b\u578b\uff08Core data types\uff09\uff1a\u5305\u62ec text\u3001keyword\u3001numeric\uff08\u5982 integer\u3001float\uff09\u3001date\u3001boolean\u3001binary \u7b49\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u590d\u5408\u6570\u636e\u7c7b\u578b\uff08Complex data types\uff09\uff1a\u5305\u62ec object\uff08\u7528\u4e8e\u5355\u4e2a JSON \u5bf9\u8c61\uff09\u548c nested\uff08\u7528\u4e8e JSON \u6570\u7ec4\uff09\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5730\u7406\u6570\u636e\u7c7b\u578b\uff08Geo data types\uff09\uff1a\u5305\u62ec geo_point\uff08\u7528\u4e8e\u7ecf\u7eac\u5ea6\u5750\u6807\uff09\u548c geo_shape\uff08\u7528\u4e8e\u590d\u6742\u5f62\u72b6\uff09\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u7279\u6b8a\u6570\u636e\u7c7b\u578b\uff08Specialized data types\uff09\uff1a\u5305\u62ec IP\u3001range\uff08\u5982 integer_range\u3001date_range\uff09\u3001completion\uff08\u7528\u4e8e\u81ea\u52a8\u5b8c\u6210\u5efa\u8bae\uff09\u7b49\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u6570\u7ec4\u6570\u636e\u7c7b\u578b\uff08Array data types\uff09\uff1a\u4efb\u4f55\u7c7b\u578b\u7684\u5b57\u6bb5\u90fd\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u503c\uff0c\u4f46\u6570\u7ec4\u5fc5\u987b\u662f\u540c\u4e00\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528kafka\u8fdb\u884c\u6570\u636e\u540c\u6b65"}),"\n",(0,n.jsx)(t.p,{children:"Elasticsearch Sink Connector \u662f Confluent \u5f00\u53d1\u7684\u4e00\u4e2a Kafka Connect \u63d2\u4ef6\uff0c\u7528\u4e8e\u5c06\u6570\u636e\u4ece Kafka \u6d41\u5f0f\u4f20\u8f93\u5230 Elasticsearch\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.confluent.io/kafka-connectors/elasticsearch/current/configuration_options.html#elasticsearch-overview-config",children:"https://docs.confluent.io/kafka-connectors/elasticsearch/current/configuration_options.html#elasticsearch-overview-config"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(6540);const s={},c=n.createContext(s);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);