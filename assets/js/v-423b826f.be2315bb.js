(self.webpackChunk=self.webpackChunk||[]).push([[727],{6254:function(n,a,s){"use strict";s.r(a),s.d(a,{data:function(){return e}});const e={key:"v-423b826f",path:"/guide/router/permissions.html",title:"权限管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"实现方式",slug:"实现方式",children:[]},{level:2,title:"登陆验证",slug:"登陆验证",children:[]},{level:2,title:"自定义权限配置",slug:"自定义权限配置",children:[]}],filePathRelative:"guide/router/permissions.md",git:{updatedTime:1624858685e3,contributors:[]}}},1912:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return t}});const e=(0,s(6252).uE)('<h1 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h1><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><p>通过获取当前用户的权限去比对路由表，生成当前用户具的权限可访问的路由表，通过 router.addRoutes 动态挂载到 router 上。</p><ul><li>判断页面是否需要登陆状态，需要则跳转到 <code>/user/login</code>。</li><li>本地存储中不存在 <code>token</code> 则跳转到 <code>/user/login</code>。</li><li>如果存在 <code>token</code>，用户信息不存在，自动调用 vuex <code>/system/user/getInfo</code>。</li></ul><h2 id="登陆验证" tabindex="-1"><a class="header-anchor" href="#登陆验证" aria-hidden="true">#</a> 登陆验证</h2><p>需要登陆后才可以访问的页面配置</p><p>在 路由配置 中，<code>meta</code> 属性中定义 <code>auth</code> 属性为 <code>true</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    auth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="自定义权限配置" tabindex="-1"><a class="header-anchor" href="#自定义权限配置" aria-hidden="true">#</a> 自定义权限配置</h2><p>现在路由层面权限的控制代码都在 @/router/permission.ts 中，如果想修改逻辑，直接在适当的判断逻辑中 next() 释放钩子即可。</p>',10);var t={render:function(n,a){return e}}}}]);