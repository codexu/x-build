import{_ as o,o as c,c as i,a as n,b as s,d as a,e as t,r as p}from"./app.47aaf466.js";const d={},l=n("h1",{id:"hooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),s(" Hooks")],-1),r=n("p",null,"Hooks \u662F\u4E00\u4E2A\u57FA\u4E8E Composition API \u7684\u5B9E\u7528\u51FD\u6570\u96C6\u5408\uFF0C\u4F7F\u7528 typescript \u5F00\u53D1\uFF0C\u6709\u7740\u826F\u597D\u7684\u4EE3\u7801\u63D0\u793A\u4F53\u9A8C\u3002",-1),u={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\uFF1F</h2><p>Hooks \u4E2D\u7684\u5927\u591A\u6570\u51FD\u6570\u90FD\u8FD4\u56DE\u4E00\u4E2A refs \u5BF9\u8C61\u6216\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ES6 \u7684\u89E3\u6784\u8BED\u6CD5\u6765\u83B7\u53D6\u4F60\u9700\u8981\u7684\u5185\u5BB9\u3002</p><p>\u4F60\u53EA\u9700\u8981\u5728 <code>@/hooks</code> \u4E2D\u5F15\u5165\u5B83\u5373\u53EF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useDevice <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useDevice&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7528\u6CD5" aria-hidden="true">#</a> \u5BF9\u8C61\u7528\u6CD5</h3><p>\u5982\u679C\u60A8\u66F4\u559C\u6B22\u5C06\u5B83\u4EEC\u7528\u4F5C\u5BF9\u8C61\u5C5E\u6027\u6837\u5F0F\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528reactive(). \u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> device <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE" aria-hidden="true">#</a> \u5EFA\u8BAE</h2>`,8),h={href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener noreferrer"},v=t(`<ul><li>\u4EA4\u4E92\u5F0F\u6587\u6863\u548C\u6F14\u793A</li><li>\u65E0\u7F1D\u8FC1\u79FB\uFF0C\u652F\u6301 Vue 2 \u4E0E Vue 3</li><li>tree shakable</li><li>\u4F7F\u7528 Typescript \u7F16\u5199</li></ul><h2 id="\u5185\u7F6E-hook" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E-hook" aria-hidden="true">#</a> \u5185\u7F6E Hook</h2><h3 id="useclipboard" tabindex="-1"><a class="header-anchor" href="#useclipboard" aria-hidden="true">#</a> useClipboard</h3><p>\u57FA\u4E8E clipboard@2.0.6 \u7684\u6587\u672C\u590D\u5236 vue \u6307\u4EE4\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useClipboard <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useClipboard&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> copyText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>copyText</td><td>\u590D\u5236\u7684\u5185\u5BB9</td><td>(text: string) =&gt; void</td><td>-</td></tr></tbody></table><h3 id="usedevice" tabindex="-1"><a class="header-anchor" href="#usedevice" aria-hidden="true">#</a> useDevice</h3><p>\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F\uFF0C\u53EF\u9488\u5BF9\u4E0D\u540C\u7EC8\u7AEF\u8FDB\u884C\u9002\u914D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useDevice <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useDevice&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>deviceType</td><td>\u5F53\u524D\u8BBE\u5907\u7C7B\u578B</td><td><code>&lt;DeviceType&gt;</code></td><td>-</td></tr><tr><td>deviceOrientation</td><td>\u5F53\u524D\u8BBE\u5907\u5B9A\u4F4D(\u65B9\u5411)</td><td><code>&lt;DeviceOrientation&gt;</code></td><td>-</td></tr><tr><td>deviceOs</td><td>\u64CD\u4F5C\u7CFB\u7EDF</td><td><code>&lt;DeviceOs&gt;</code></td><td>-</td></tr></tbody></table><h3 id="usefullscreen" tabindex="-1"><a class="header-anchor" href="#usefullscreen" aria-hidden="true">#</a> useFullscreen</h3><p>\u7528\u4E8E\u5B9E\u73B0\u6D4F\u89C8\u5668\u5168\u5C4F\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useFullscreen <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useFullscreen&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> 
  screenfullActive<span class="token punctuation">,</span>
  toggleScreenfull<span class="token punctuation">,</span>
  openScreenfull<span class="token punctuation">,</span>
  closeScreenfull
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>screenfullActive</td><td>\u662F\u5426\u5168\u5C4F\u7684\u72B6\u6001</td><td>boolean</td><td>false</td></tr><tr><td>toggleScreenfull</td><td>\u5207\u6362\u5168\u5C4F</td><td>() =&gt; void</td><td>-</td></tr><tr><td>openScreenfull</td><td>\u5F00\u542F\u5168\u5C4F</td><td>() =&gt; void</td><td>-</td></tr><tr><td>closeScreenfull</td><td>\u5173\u95ED\u5168\u5C4F</td><td>() =&gt; void</td><td>-</td></tr></tbody></table>`,14);function b(m,f){const e=p("ExternalLinkIcon");return c(),i("div",null,[l,r,n("blockquote",null,[n("p",null,[s("\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u5047\u8BBE\u60A8\u5DF2\u7ECF\u719F\u6089 "),n("a",u,[s("Vue 3 Composition API"),a(e)]),s(" \u7684\u57FA\u672C\u601D\u60F3\u3002\u5982\u679C\u4F60\u638C\u63E1 React \u53CA React Hooks \u57FA\u7840\u7528\u6CD5\u3002\u90A3\u4E48\u8FD9\u5BF9\u4F60\u6765\u8BF4\u662F\u5341\u5206\u53CB\u597D\u7684\u3002")])]),k,n("p",null,[s("\u4F7F\u7528 "),n("a",h,[s("vueuse"),a(e)]),s("\uFF1A")]),v])}var y=o(d,[["render",b],["__file","hooks.html.vue"]]);export{y as default};