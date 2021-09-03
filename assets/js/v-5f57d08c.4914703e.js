"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4029],{8326:function(e,a,n){n.r(a),n.d(a,{data:function(){return l}});const l={key:"v-5f57d08c",path:"/guide/overview/quickstart.html",title:"快速上手",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装 CLI",slug:"安装-cli",children:[{level:3,title:"准备",slug:"准备",children:[]},{level:3,title:"安装",slug:"安装",children:[]}]},{level:2,title:"创建项目",slug:"创建项目",children:[{level:3,title:"命令",slug:"命令",children:[]},{level:3,title:"安装依赖",slug:"安装依赖",children:[]},{level:3,title:"NPM Script",slug:"npm-script",children:[]}]}],filePathRelative:"guide/overview/quickstart.md",git:{updatedTime:1630636067e3,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},862:function(e,a,n){n.r(a),n.d(a,{default:function(){return G}});var l=n(6252);const t=(0,l.uE)('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><p>本节将介绍如何在全局环境安装 X-BUILD 和通过命令行快速的生成项目。</p><h2 id="安装-cli" tabindex="-1"><a class="header-anchor" href="#安装-cli" aria-hidden="true">#</a> 安装 CLI</h2><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3>',4),s=(0,l.Uk)("需要在本地安装 "),i={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("node.js"),c=(0,l.Uk)(" 和 "),r={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("git"),h=(0,l.Uk)("。"),o=(0,l._)("li",null,"（可选）全局安装 vue-cli@4.5，本项目基于 vue-cli@4.5 构建，理论上支持所有功能。",-1),p=(0,l._)("h3",{id:"安装",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,l.Uk)(" 安装")],-1),_=(0,l._)("p",null,[(0,l.Uk)("我们推荐使用 npm 的方式进行"),(0,l._)("strong",null,"全局"),(0,l.Uk)("安装：")],-1),g=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"install"),(0,l.Uk)(" x-build@next -g\n")])])],-1),m=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"yarn"),(0,l.Uk)(" global "),(0,l._)("span",{class:"token function"},"add"),(0,l.Uk)(" x-build@next\n")])])],-1),k=(0,l._)("p",null,"mac、linux 用户需要权限增加 sudo。",-1),f=(0,l._)("p",null,"使用方式类似于 @vue/cli，提供了终端里的 x-build 或 x（简写）命令。",-1),b=(0,l._)("h2",{id:"创建项目",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),(0,l.Uk)(" 创建项目")],-1),v=(0,l._)("h3",{id:"命令",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#命令","aria-hidden":"true"},"#"),(0,l.Uk)(" 命令")],-1),x=(0,l._)("p",null,"通过以下指令创建一个新项目：",-1),U=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l.Uk)("x-build create "),(0,l._)("span",{class:"token punctuation"},"["),(0,l.Uk)("name"),(0,l._)("span",{class:"token punctuation"},"]"),(0,l.Uk)("\n")])])],-1),w=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l.Uk)("x create "),(0,l._)("span",{class:"token punctuation"},"["),(0,l.Uk)("name"),(0,l._)("span",{class:"token punctuation"},"]"),(0,l.Uk)("\n")])])],-1),W=(0,l.uE)('<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><ul><li>输入命令后，模板文件会自动创建名字为[name] 的文件夹，并将模板文件复制到此文件夹内。</li><li>自动初始化 Git。</li><li>依赖会自动安装，会跟你你所安装的包管理工具按优先级选择：</li></ul><p>优先级：yarn &gt; npm</p><div class="custom-container warning"><p class="custom-container-title">提示</p><p>强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。</p></div><h3 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> NPM Script</h3><p>根据安装后的相关提示，输入相关命令以继续：</p>',6),y=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run dev\n")])])],-1),S=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run build:test\n")])])],-1),C=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run build\n")])])],-1),L=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run analyzer\n")])])],-1),q=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run lint\n")])])],-1),E=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run stylelint\n")])])],-1),I=(0,l._)("div",{class:"custom-container warning"},[(0,l._)("p",{class:"custom-container-title"},"提示"),(0,l._)("p",null,"通常情况下 ESLint 与 Stylelint 没必要单独执行，husky 提供的 git commit 钩子会在你提交代码时对你缓存区里的代码做校验，这会节省你很多的时间。")],-1);var G={render:function(e,a){const n=(0,l.up)("OutboundLink"),G=(0,l.up)("CodeGroupItem"),P=(0,l.up)("CodeGroup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,(0,l._)("ul",null,[(0,l._)("li",null,[s,(0,l._)("a",i,[u,(0,l.Wm)(n)]),c,(0,l._)("a",r,[d,(0,l.Wm)(n)]),h]),o]),p,_,(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{title:"npm"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(G,{title:"yarn"},{default:(0,l.w5)((()=>[m])),_:1})])),_:1}),k,f,b,v,x,(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{title:"命令"},{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(G,{title:"缩写"},{default:(0,l.w5)((()=>[w])),_:1})])),_:1}),W,(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{title:"开发环境"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(G,{title:"测试环境"},{default:(0,l.w5)((()=>[S])),_:1}),(0,l.Wm)(G,{title:"正式环境"},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)(G,{title:"包分析工具"},{default:(0,l.w5)((()=>[L])),_:1}),(0,l.Wm)(G,{title:"ESLint"},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(G,{title:"Stylelint"},{default:(0,l.w5)((()=>[E])),_:1})])),_:1}),I],64)}}}}]);