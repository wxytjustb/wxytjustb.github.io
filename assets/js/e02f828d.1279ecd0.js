"use strict";(self.webpackChunkroky_wang=self.webpackChunkroky_wang||[]).push([[822],{994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(4848),i=t(8453);const s={},r=void 0,o={id:"AIGC/langchain/quick-study",title:"quick-study",description:"langchain\u5305\u542b\u4ee5\u4e0b4\u4e2a\u7ec4\u4ef6",source:"@site/docs/AIGC/langchain/quick-study.md",sourceDirName:"AIGC/langchain",slug:"/AIGC/langchain/quick-study",permalink:"/docs/AIGC/langchain/quick-study",draft:!1,unlisted:!1,editUrl:"https://github.com/wxytjustb/rokywang/tree/main/docs/AIGC/langchain/quick-study.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gradio",permalink:"/docs/AIGC/gradio"},next:{title:"robot",permalink:"/docs/AIGC/robot"}},c={},l=[{value:"quickstart",id:"quickstart",level:2},{value:"LLM Chain",id:"llm-chain",level:3},{value:"Retrieval Chain",id:"retrieval-chain",level:3},{value:"Conversation Retrieval Chain",id:"conversation-retrieval-chain",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"langchain\u5305\u542b\u4ee5\u4e0b4\u4e2a\u7ec4\u4ef6"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"LangChain Libraries"}),": The Python and JavaScript libraries. Contains interfaces and integrations for a myriad of components, a basic run time for combining these components into chains and agents, and off-the-shelf implementations of chains and agents."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/templates",children:"LangChain Templates"})}),": A collection of easily deployable reference architectures for a wide variety of tasks."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/langserve",children:"LangServe"})}),": A library for deploying LangChain chains as a REST API."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/langsmith",children:"LangSmith"})}),": A developer platform that lets you debug, test, evaluate, and monitor chains built on any LLM framework and seamlessly integrates with LangChain."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"quickstart",children:"quickstart"}),"\n",(0,a.jsx)(n.h3,{id:"llm-chain",children:"LLM Chain"}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_openai import ChatOpenAI\nllm = ChatOpenAI()\nllm.invoke("how can langsmith help with testing?")\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u52a0\u4e0aLLM Chain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.prompts import ChatPromptTemplate\nprompt = ChatPromptTemplate.from_messages([\n    ("system", "You are world class technical documentation writer."),\n    ("user", "{input}")\n])\nchain = prompt | llm\nchain.invoke({"input": "how can langsmith help with testing?"})\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u52a0\u4e0a\u4e00\u4e2aOutput Parser"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.output_parsers import StrOutputParser\noutput_parser = StrOutputParser()\nchain = prompt | llm | output_parser\nchain.invoke({"input": "how can langsmith help with testing?"})\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u7ed3\u679c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"'Langsmith can help with testing in several ways:\\n\\n1. Test case generation: Langsmith can automatically generate test cases based on the specifications and requirements of the system. It uses techniques such as constraint solving and model checking to generate test inputs that cover different scenarios and edge cases.\\n\\n2. Test automation: Langsmith can automate the execution of test cases, reducing the manual effort required for testing. It can interact with the system under test, simulate user actions, and verify the expected behavior of the system.\\n\\n3. Test coverage analysis: Langsmith can analyze the coverage of test cases to identify areas of the system that have not been adequately tested. It can highlight code branches, conditions, or functionality that has not been exercised by the existing test suite, helping testers prioritize their efforts.\\n\\n4. Regression testing: Langsmith can automatically re-run previously executed test cases to ensure that changes to the system do not introduce new bugs or regressions. It can help in quickly identifying if any existing functionality has been affected by recent changes.\\n\\n5. Bug detection: Langsmith can analyze the system under test to identify potential bugs, violations of coding standards, or security vulnerabilities. It can perform static analysis on the codebase, identify potential issues, and provide recommendations for improvement.\\n\\nOverall, Langsmith provides automated and intelligent testing capabilities that can improve the efficiency and effectiveness of the testing process. It can help testers in generating test cases, automating test execution, analyzing coverage, and identifying bugs, ultimately leading to better quality software.'\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0a\u4ee3\u7801\u8fd0\u884c\u65f6\uff0c\u53d1\u73b0\u6570\u636e\u4e0d\u662f\u5f88\u51c6\u786e\u3002LLM\u901a\u5e38\u57fa\u4e8e\u67d0\u4e00\u4e2a\u5386\u53f2\u65f6\u95f4\u7684\u6570\u636e\u6765\u8fdb\u884c\u8bad\u7ec3\uff0c\u65e0\u6cd5\u83b7\u53d6\u6700\u65b0\u7684\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.p,{children:"langchain\u901a\u8fc7Retrieval\u6765\u63d0\u4f9b\u989d\u5916\u7684\u5185\u5bb9\u7ed9LLM\uff0c\u4ece\u800c\u63d0\u5347LLM\u56de\u7b54\u7684\u51c6\u786e\u6027"}),"\n",(0,a.jsx)(n.h3,{id:"retrieval-chain",children:"Retrieval Chain"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u5c06\u4ece\u68c0\u7d22\u5668\u4e2d\u67e5\u627e\u76f8\u5173\u6587\u6863\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u4f20\u5165\u63d0\u793a\u4e2d\u3002\u68c0\u7d22\u5668\u53ef\u4ee5\u7531\u4efb\u4f55\u4e1c\u897f\u652f\u6301 - SQL\u8868\u683c\uff0c\u4e92\u8054\u7f51\u7b49 - \u4f46\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u586b\u5145\u4e00\u4e2a\u5411\u91cf\u5b58\u50a8\u5e76\u4f7f\u7528\u5b83\u4f5c\u4e3a\u68c0\u7d22\u5668"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pip install beautifulsoup4\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_community.document_loaders import WebBaseLoader\nloader = WebBaseLoader("https://docs.smith.langchain.com/overview")\n\ndocs = loader.load()\n'})}),"\n",(0,a.jsx)(n.p,{children:"docs\u91cc\u5305\u542b\u4e86\u7f51\u9875\u91cc\u7684\u5185\u5bb9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[Document(page_content='\\n\\n\\n\\n\\nLangSmith Overview and User Guide | \ud83e\udd9c\ufe0f\ud83d\udee0\ufe0f LangSmith\\n\\n\\n\\n\\n\\nSkip to main content\ud83e\udd9c\ufe0f\ud83d\udee0\ufe0f LangSmith DocsPython...', 'language': 'en'})]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u52a0\u8f7dopenai\u7684embeddings\u6a21\u578b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_openai import OpenAIEmbeddings\nembeddings = OpenAIEmbeddings()\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u4e2a\u5d4c\u5165\u6a21\u578b\u5c06\u6587\u6863\u8f93\u5165\u5230\u4e00\u4e2a\u5411\u91cf\u5b58\u50a8\u4e2d\uff0c\u4f7f\u7528\u672c\u5730\u5411\u91cf\u5b58\u50a8 FAISS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pip install faiss-cpu\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6784\u5efa\u7d22\u5f15\uff0c\u5c06\u6587\u6863\u6570\u636e\u4fdd\u5b58\u5728\u5411\u91cf\u6570\u636e\u5e93\u91cc"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain_community.vectorstores import FAISS\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\n\ntext_splitter = RecursiveCharacterTextSplitter()\ndocuments = text_splitter.split_documents(docs)\nvector = FAISS.from_documents(documents, embeddings)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u68c0\u7d22\u94fe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain.chains.combine_documents import create_stuff_documents_chain\n\nprompt = ChatPromptTemplate.from_template("""Answer the following question based only on the provided context:\n\n<context>\n{context}\n</context>\n\nQuestion: {input}""")\n\ndocument_chain = create_stuff_documents_chain(llm, prompt)\n'})}),"\n",(0,a.jsx)(n.p,{children:'create_stuff_documents_chain\u4f1a\u9a8c\u8bc1prompt\uff0c\u5fc5\u987b\u5f97\u5305\u542b "context"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'DOCUMENTS_KEY = "context"\nDEFAULT_DOCUMENT_PROMPT = PromptTemplate.from_template("{page_content}")\n\n\ndef _validate_prompt(prompt: BasePromptTemplate) -> None:\n    if DOCUMENTS_KEY not in prompt.input_variables:\n        raise ValueError(\n            f"Prompt must accept {DOCUMENTS_KEY} as an input variable. Received prompt "\n            f"with input variables: {prompt.input_variables}"\n        )\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6d4b\u8bd5\u4e00\u4e0bdocument_chain\uff0c\u76f4\u63a5\u4f20\u5165\u4e00\u4e2a\u6307\u5b9a\u7684context\u5185\u5bb9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.documents import Document\ndocument_chain.invoke({\n    "input": "how can langsmith help with testing?",\n    "context": [Document(page_content="langsmith can let you visualize test results")]\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0a\u5e76\u6ca1\u6709\u7528\u5230\u5411\u91cf\u6570\u636e\u5e93\u7684\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2aretriever\u94fe\uff0c\u8fd9\u4e2a\u94fe\u5c06\u63a5\u6536\u4e00\u4e2a\u4f20\u5165\u7684\u95ee\u9898\uff0c\u67e5\u627e\u76f8\u5173\u7684\u6587\u6863\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u6587\u6863\u8fde\u540c\u539f\u59cb\u95ee\u9898\u4e00\u8d77\u4f20\u9012\u7ed9LLM\uff0c\u5e76\u8981\u6c42\u5b83\u56de\u7b54\u539f\u59cb\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from langchain.chains import create_retrieval_chain\n\nretriever = vector.as_retriever()\nretrieval_chain = create_retrieval_chain(retriever, document_chain)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8c03\u7528retrieval_chain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'response = retrieval_chain.invoke({"input": "how can langsmith help with testing?"})\nprint(response["answer"])\n'})}),"\n",(0,a.jsx)(n.h3,{id:"conversation-retrieval-chain",children:"Conversation Retrieval Chain"}),"\n",(0,a.jsx)(n.p,{children:"Agent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain.tools.retriever import create_retriever_tool\n\nretriever_tool = create_retriever_tool(\n    retriever,\n    "langsmith_search",\n    "Search for information about LangSmith. For any questions about LangSmith, you must use this tool!",\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u642d\u5efa\u4e00\u4e2a\u673a\u5668\u4eba"}),"\n",(0,a.jsx)(n.p,{children:"\u68c0\u7d22\u5668"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);