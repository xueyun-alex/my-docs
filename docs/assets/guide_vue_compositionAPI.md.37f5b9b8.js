import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.397d0407.js";const p="/my-docs/assets/api1.193872fe.png",F=JSON.parse('{"title":"vue3 常用组合式API(Composition API)总结","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/compositionAPI.md","filePath":"guide/vue/compositionAPI.md"}'),o={name:"guide/vue/compositionAPI.md"},e=l(`<h1 id="vue3-常用组合式api-composition-api-总结" tabindex="-1">vue3 常用组合式API(Composition API)总结 <a class="header-anchor" href="#vue3-常用组合式api-composition-api-总结" aria-label="Permalink to &quot;vue3 常用组合式API(Composition API)总结&quot;">​</a></h1><h2 id="_1-setup顶配函数" tabindex="-1">1.setup顶配函数 <a class="header-anchor" href="#_1-setup顶配函数" aria-label="Permalink to &quot;1.setup顶配函数&quot;">​</a></h2><h3 id="_1-1表单文件-vue-组合式api-setup" tabindex="-1">1.1表单文件*.vue 组合式API setup <a class="header-anchor" href="#_1-1表单文件-vue-组合式api-setup" aria-label="Permalink to &quot;1.1表单文件*.vue 组合式API setup&quot;">​</a></h3><p>1.组件中所用到的：数据、方法等等，均要配置在setup中<br> 2.尽量不要与Vue2.x配置混用、如果有重名，setup优先<br> 3.setup 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;sayHellow&quot;&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">num</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const num = 0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(&#39;hellow world&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">function sayHellow() {</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hellow vue3&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;sayHellow&quot;&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">num</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">const num = 0</span></span>
<span class="line"><span style="color:#24292E;">console.log(&#39;hellow world&#39;);</span></span>
<span class="line"><span style="color:#24292E;">function sayHellow() {</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hellow vue3&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_2-import引入js文件函数" tabindex="-1">2.import引入js文件函数 <a class="header-anchor" href="#_2-import引入js文件函数" aria-label="Permalink to &quot;2.import引入js文件函数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//action.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">say</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;say:&#39;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//action.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">say</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;say:&#39;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HellowWorld.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ </span><span style="color:#B392F0;">say</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">) }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { say } from &#39;./action&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">say(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HellowWorld.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;{{ </span><span style="color:#6F42C1;">say</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">) }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { say } from &#39;./action&#39;</span></span>
<span class="line"><span style="color:#24292E;">say(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_3-使用-vue表单文件组件" tabindex="-1">3.使用*.vue表单文件组件 <a class="header-anchor" href="#_3-使用-vue表单文件组件" aria-label="Permalink to &quot;3.使用*.vue表单文件组件&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// action.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;action&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// action.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;action&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">ActionVue</span><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">import ActionVue from &#39;./action.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">ActionVue</span><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">import ActionVue from &#39;./action.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_4-父传子-defineprops-方法" tabindex="-1">4.父传子 defineProps() 方法 <a class="header-anchor" href="#_4-父传子-defineprops-方法" aria-label="Permalink to &quot;4.父传子 defineProps() 方法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">ActionVue</span><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">:actNum=&quot;actNum&quot;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import ActionVue from &#39;./action.vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">const actNum = ref(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">ActionVue</span><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">:actNum=&quot;actNum&quot;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">import ActionVue from &#39;./action.vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">const actNum = ref(0)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ actNum }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const props = defineProps({</span></span>
<span class="line"><span style="color:#E1E4E8;">    actNum: Number</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(&#39;props.actNum&#39;, props.actNum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;{{ actNum }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">const props = defineProps({</span></span>
<span class="line"><span style="color:#24292E;">    actNum: Number</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.log(&#39;props.actNum&#39;, props.actNum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_5-子传父-子组件调用父组件方法-defineemits-方法" tabindex="-1">5.子传父,子组件调用父组件方法 defineEmits()方法 <a class="header-anchor" href="#_5-子传父-子组件调用父组件方法-defineemits-方法" aria-label="Permalink to &quot;5.子传父,子组件调用父组件方法 defineEmits()方法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;actChange(1)&quot;&gt;actChange&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const emits = defineEmits([&#39;handleChange&#39;])</span></span>
<span class="line"><span style="color:#E1E4E8;">function actChange (num) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emits</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;handleChange&#39;</span><span style="color:#E1E4E8;">,num)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;actChange(1)&quot;&gt;actChange&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">const emits = defineEmits([&#39;handleChange&#39;])</span></span>
<span class="line"><span style="color:#24292E;">function actChange (num) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">emits</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;handleChange&#39;</span><span style="color:#24292E;">,num)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">ActionVue</span><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">@handleChange=&quot;actNumAdd&quot;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">function actNumAdd (num) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;actNumAdd&#39;</span><span style="color:#E1E4E8;">, num);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">ActionVue</span><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">@handleChange=&quot;actNumAdd&quot;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">function actNumAdd (num) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;actNumAdd&#39;</span><span style="color:#24292E;">, num);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_6-父组件访问子组件数据和方法-defineexpose" tabindex="-1">6.父组件访问子组件数据和方法，defineExpose() <a class="header-anchor" href="#_6-父组件访问子组件数据和方法-defineexpose" aria-label="Permalink to &quot;6.父组件访问子组件数据和方法，defineExpose()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">function childFn (val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;子组件方法:&#39;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">const childeMeg = &#39;子组件内容&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">defineExpose({</span></span>
<span class="line"><span style="color:#E1E4E8;">    childFn,</span></span>
<span class="line"><span style="color:#E1E4E8;">    childeMeg</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// action.vue (子组件)</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">function childFn (val) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;子组件方法:&#39;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">const childeMeg = &#39;子组件内容&#39;</span></span>
<span class="line"><span style="color:#24292E;">defineExpose({</span></span>
<span class="line"><span style="color:#24292E;">    childFn,</span></span>
<span class="line"><span style="color:#24292E;">    childeMeg</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">ActionVue</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;childeRef&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {onMounted} from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const childeRef = ref()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;childeRef.value.childeMeg&#39;</span><span style="color:#E1E4E8;">, childeRef.value.childeMeg)</span></span>
<span class="line"><span style="color:#E1E4E8;">  childeRef.value.</span><span style="color:#B392F0;">childFn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aaaaaa&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// helloWorld.vue （父组件）</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">ActionVue</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;childeRef&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {onMounted} from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const childeRef = ref()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;childeRef.value.childeMeg&#39;</span><span style="color:#24292E;">, childeRef.value.childeMeg)</span></span>
<span class="line"><span style="color:#24292E;">  childeRef.value.</span><span style="color:#6F42C1;">childFn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;aaaaaa&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_7-顶层await" tabindex="-1">7.顶层await <a class="header-anchor" href="#_7-顶层await" aria-label="Permalink to &quot;7.顶层await&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const post = await fetch(\`/api/post/1\`).then((r) =&gt; r.json())</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">const post = await fetch(\`/api/post/1\`).then((r) =&gt; r.json())</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_8-双向数据绑定-reactive与ref的对比-toref-torefs结合reactive的应用" tabindex="-1">8.双向数据绑定，reactive与ref的对比；toRef, toRefs结合reactive的应用 <a class="header-anchor" href="#_8-双向数据绑定-reactive与ref的对比-toref-torefs结合reactive的应用" aria-label="Permalink to &quot;8.双向数据绑定，reactive与ref的对比；toRef, toRefs结合reactive的应用&quot;">​</a></h2><h3 id="从定义数据角度对比" tabindex="-1">从定义数据角度对比： <a class="header-anchor" href="#从定义数据角度对比" aria-label="Permalink to &quot;从定义数据角度对比：&quot;">​</a></h3><p>ref用来定义： 基本数据类型<br> reactive用来定义： 对象（或数组）类型数据<br> 备注： ref也可以用来定义对象（或数组）类型数据，它内部会自动通过reactive转为代理对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;name2{{ num }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;name2{{ name2 }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;name3{{ name3 }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, reactive, toRef, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">let num = ref(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">let human = reactive({</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">const name2 = toRef(human, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">const name3 = toRefs(human)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;name2{{ num }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;name2{{ name2 }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;name3{{ name3 }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref, reactive, toRef, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">let num = ref(0)</span></span>
<span class="line"><span style="color:#24292E;">let human = reactive({</span></span>
<span class="line"><span style="color:#24292E;">  age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">const name2 = toRef(human, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#24292E;">const name3 = toRefs(human)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_9-computed函数" tabindex="-1">9.computed函数 <a class="header-anchor" href="#_9-computed函数" aria-label="Permalink to &quot;9.computed函数&quot;">​</a></h2><p>computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ person.fullName }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=actNumAdd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&gt;actNumAdd &lt;/button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">import { onMounted } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">let person = ref({</span></span>
<span class="line"><span style="color:#9ECBFF;">  firstName: &#39;aaa&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  lastName: &#39;bbb&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const actNum = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">function actNumAdd () {</span></span>
<span class="line"><span style="color:#9ECBFF;">actNum.value = actNum.value + 1</span></span>
<span class="line"><span style="color:#9ECBFF;">  person.value.fullName = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">    return person.value.firstName + &#39;===&#39; + actNum.value + &#39;&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&lt;style scoped&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;{{ person.fullName }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=actNumAdd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&gt;actNumAdd &lt;/button&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#032F62;">import { onMounted } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">let person = ref({</span></span>
<span class="line"><span style="color:#032F62;">  firstName: &#39;aaa&#39;,</span></span>
<span class="line"><span style="color:#032F62;">  lastName: &#39;bbb&#39;</span></span>
<span class="line"><span style="color:#032F62;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const actNum = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">function actNumAdd () {</span></span>
<span class="line"><span style="color:#032F62;">actNum.value = actNum.value + 1</span></span>
<span class="line"><span style="color:#032F62;">  person.value.fullName = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">    return person.value.firstName + &#39;===&#39; + actNum.value + &#39;&#39;</span></span>
<span class="line"><span style="color:#032F62;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&lt;style scoped&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&lt;/style&gt;</span></span></code></pre></div><h2 id="_10-watch函数" tabindex="-1">10.watch函数 <a class="header-anchor" href="#_10-watch函数" aria-label="Permalink to &quot;10.watch函数&quot;">​</a></h2><p>既要指明监视的属性，也要指明监视的回调</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {  watch } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  let sum  = ref(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">  let msg = ref(&#39;你好啊&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  let person = reactive({</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                job:{</span></span>
<span class="line"><span style="color:#E1E4E8;">                    salary: </span><span style="color:#9ECBFF;">&#39;15k&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> //情况一：监视ref所定义的一个响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">             watch(sum, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                 console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">                 console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">             })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            //情况二：监视ref所定义的多个响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            watch([sum,msg], (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue); </span><span style="color:#6A737D;">//[&#39;sum的newValue&#39;, &#39;msg的newValue&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue); </span><span style="color:#6A737D;">//[&#39;sum的oldValue&#39;, &#39;msg的oldValue&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },{immediate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,deep:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">}) //这里vue3的deep是有点小问题的，可以不用deep，（隐式强制deep）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            //情况三：监视reactive定义的所有响应式数据,</span></span>
<span class="line"><span style="color:#E1E4E8;">            //1.此处无法获取正确的oldValue（newValue与oldValue是一致值）,且目前无法解决</span></span>
<span class="line"><span style="color:#E1E4E8;">            //2.强制开启了深度监视（deep配置无效）</span></span>
<span class="line"><span style="color:#E1E4E8;">            /**</span></span>
<span class="line"><span style="color:#E1E4E8;">            * 受到码友热心评论解释： 此处附上码友的解释供大家参考：</span></span>
<span class="line"><span style="color:#E1E4E8;">            * 1. 当你监听一个响应式对象的时候，这里的newVal和oldVal是一样的，因为他们是同一个对象【引用地址一样】，</span></span>
<span class="line"><span style="color:#E1E4E8;">            *    即使里面的属性值会发生变化，但主体对象引用地址不变。这不是一个bug。要想不一样除非这里把对象都换了</span></span>
<span class="line"><span style="color:#E1E4E8;">            * </span></span>
<span class="line"><span style="color:#E1E4E8;">            * 2. 当你监听一个响应式对象的时候，vue3会隐式的创建一个深层监听，即对象里只要有变化就会被调用。</span></span>
<span class="line"><span style="color:#E1E4E8;">            *    这也解释了你说的deep配置无效，这里是强制的。</span></span>
<span class="line"><span style="color:#E1E4E8;">            */</span></span>
<span class="line"><span style="color:#E1E4E8;">            watch(person, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue); </span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            //情况四：监视reactive对象中某一个属性的值，</span></span>
<span class="line"><span style="color:#E1E4E8;">            //注意： 这里监视某一个属性的时候可以监听到oldValue</span></span>
<span class="line"><span style="color:#E1E4E8;">            watch(()=&gt;person.name, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue);  </span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            //情况五：监视reactive对象中某一些属性的值</span></span>
<span class="line"><span style="color:#E1E4E8;">            watch([()=&gt;person.name,()=&gt;person.age], (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue);  </span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            //特殊情况: 监视reactive响应式数据中深层次的对象，此时deep的配置奏效了</span></span>
<span class="line"><span style="color:#E1E4E8;">            watch(()=&gt;person.job, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;新的值&#39;</span><span style="color:#E1E4E8;">,newValue);  </span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;旧的值&#39;</span><span style="color:#E1E4E8;">,oldValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">            },{deep:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">}) //此时deep有用</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {  watch } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">  let sum  = ref(0)</span></span>
<span class="line"><span style="color:#24292E;">  let msg = ref(&#39;你好啊&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  let person = reactive({</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                job:{</span></span>
<span class="line"><span style="color:#24292E;">                    salary: </span><span style="color:#032F62;">&#39;15k&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> //情况一：监视ref所定义的一个响应式数据</span></span>
<span class="line"><span style="color:#24292E;">             watch(sum, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                 console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue);</span></span>
<span class="line"><span style="color:#24292E;">                 console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue);</span></span>
<span class="line"><span style="color:#24292E;">             })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            //情况二：监视ref所定义的多个响应式数据</span></span>
<span class="line"><span style="color:#24292E;">            watch([sum,msg], (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue); </span><span style="color:#6A737D;">//[&#39;sum的newValue&#39;, &#39;msg的newValue&#39;]</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue); </span><span style="color:#6A737D;">//[&#39;sum的oldValue&#39;, &#39;msg的oldValue&#39;]</span></span>
<span class="line"><span style="color:#24292E;">            },{immediate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,deep:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">}) //这里vue3的deep是有点小问题的，可以不用deep，（隐式强制deep）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            //情况三：监视reactive定义的所有响应式数据,</span></span>
<span class="line"><span style="color:#24292E;">            //1.此处无法获取正确的oldValue（newValue与oldValue是一致值）,且目前无法解决</span></span>
<span class="line"><span style="color:#24292E;">            //2.强制开启了深度监视（deep配置无效）</span></span>
<span class="line"><span style="color:#24292E;">            /**</span></span>
<span class="line"><span style="color:#24292E;">            * 受到码友热心评论解释： 此处附上码友的解释供大家参考：</span></span>
<span class="line"><span style="color:#24292E;">            * 1. 当你监听一个响应式对象的时候，这里的newVal和oldVal是一样的，因为他们是同一个对象【引用地址一样】，</span></span>
<span class="line"><span style="color:#24292E;">            *    即使里面的属性值会发生变化，但主体对象引用地址不变。这不是一个bug。要想不一样除非这里把对象都换了</span></span>
<span class="line"><span style="color:#24292E;">            * </span></span>
<span class="line"><span style="color:#24292E;">            * 2. 当你监听一个响应式对象的时候，vue3会隐式的创建一个深层监听，即对象里只要有变化就会被调用。</span></span>
<span class="line"><span style="color:#24292E;">            *    这也解释了你说的deep配置无效，这里是强制的。</span></span>
<span class="line"><span style="color:#24292E;">            */</span></span>
<span class="line"><span style="color:#24292E;">            watch(person, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue); </span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue);</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            //情况四：监视reactive对象中某一个属性的值，</span></span>
<span class="line"><span style="color:#24292E;">            //注意： 这里监视某一个属性的时候可以监听到oldValue</span></span>
<span class="line"><span style="color:#24292E;">            watch(()=&gt;person.name, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue);  </span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue);</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            //情况五：监视reactive对象中某一些属性的值</span></span>
<span class="line"><span style="color:#24292E;">            watch([()=&gt;person.name,()=&gt;person.age], (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue);  </span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue);</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            //特殊情况: 监视reactive响应式数据中深层次的对象，此时deep的配置奏效了</span></span>
<span class="line"><span style="color:#24292E;">            watch(()=&gt;person.job, (newValue,oldValue)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;新的值&#39;</span><span style="color:#24292E;">,newValue);  </span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;旧的值&#39;</span><span style="color:#24292E;">,oldValue);</span></span>
<span class="line"><span style="color:#24292E;">            },{deep:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">}) //此时deep有用</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_11-watcheffect函数" tabindex="-1">11.watchEffect函数 <a class="header-anchor" href="#_11-watcheffect函数" aria-label="Permalink to &quot;11.watchEffect函数&quot;">​</a></h2><p>不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性</p><p>watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;actNumAdd()&quot;&gt;actNumAdd&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {  watchEffect ,ref } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">let person = ref({</span></span>
<span class="line"><span style="color:#E1E4E8;">  firstName: </span><span style="color:#9ECBFF;">&#39;aaa&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastName: </span><span style="color:#9ECBFF;">&#39;bbb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">const actNum = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function actNumAdd (num) {</span></span>
<span class="line"><span style="color:#E1E4E8;">actNum.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> actNum.value </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">person.value.fullName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> person.value.firstName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;===&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> actNum.value </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let fullName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> person.value.fullName</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;person.value&#39;</span><span style="color:#E1E4E8;">, person.value.fullName);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;watchEffect被调用了&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;actNumAdd()&quot;&gt;actNumAdd&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {  watchEffect ,ref } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">let person = ref({</span></span>
<span class="line"><span style="color:#24292E;">  firstName: </span><span style="color:#032F62;">&#39;aaa&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  lastName: </span><span style="color:#032F62;">&#39;bbb&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">const actNum = ref(0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function actNumAdd (num) {</span></span>
<span class="line"><span style="color:#24292E;">actNum.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> actNum.value </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">person.value.fullName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> person.value.firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;===&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> actNum.value </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  let fullName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> person.value.fullName</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;person.value&#39;</span><span style="color:#24292E;">, person.value.fullName);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;watchEffect被调用了&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_12-生命周期函数" tabindex="-1">12.生命周期函数 <a class="header-anchor" href="#_12-生命周期函数" aria-label="Permalink to &quot;12.生命周期函数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">//通过组合式API的形式去使用生命周期钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">            /**</span></span>
<span class="line"><span style="color:#E1E4E8;">             * beforeCreate 和  created 这两个生命周期钩子就相当于 setup 所以，不需要这两个</span></span>
<span class="line"><span style="color:#E1E4E8;">             * </span></span>
<span class="line"><span style="color:#E1E4E8;">             * beforeMount   ===&gt;  onBeforeMount</span></span>
<span class="line"><span style="color:#E1E4E8;">             * mounted       ===&gt;  onMounted</span></span>
<span class="line"><span style="color:#E1E4E8;">             * beforeUpdate  ===&gt;  onBeforeUpdate</span></span>
<span class="line"><span style="color:#E1E4E8;">             * updated       ===&gt;  onUpdated</span></span>
<span class="line"><span style="color:#E1E4E8;">             * beforeUnmount ===&gt;  onBeforeUnmount</span></span>
<span class="line"><span style="color:#E1E4E8;">             * unmounted     ===&gt;  onUnmounted</span></span>
<span class="line"><span style="color:#E1E4E8;">             */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onBeforeMount&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onMounted&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onBeforeUpdate&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onUpdated&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onBeforeUnmount&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">onUnmounted(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onUnmounted&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">//通过组合式API的形式去使用生命周期钩子</span></span>
<span class="line"><span style="color:#24292E;">            /**</span></span>
<span class="line"><span style="color:#24292E;">             * beforeCreate 和  created 这两个生命周期钩子就相当于 setup 所以，不需要这两个</span></span>
<span class="line"><span style="color:#24292E;">             * </span></span>
<span class="line"><span style="color:#24292E;">             * beforeMount   ===&gt;  onBeforeMount</span></span>
<span class="line"><span style="color:#24292E;">             * mounted       ===&gt;  onMounted</span></span>
<span class="line"><span style="color:#24292E;">             * beforeUpdate  ===&gt;  onBeforeUpdate</span></span>
<span class="line"><span style="color:#24292E;">             * updated       ===&gt;  onUpdated</span></span>
<span class="line"><span style="color:#24292E;">             * beforeUnmount ===&gt;  onBeforeUnmount</span></span>
<span class="line"><span style="color:#24292E;">             * unmounted     ===&gt;  onUnmounted</span></span>
<span class="line"><span style="color:#24292E;">             */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onBeforeMount&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onMounted&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onBeforeUpdate&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onUpdated&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onBeforeUnmount&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">onUnmounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onUnmounted&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_13-自定义hooks函数" tabindex="-1">13.自定义hooks函数 <a class="header-anchor" href="#_13-自定义hooks函数" aria-label="Permalink to &quot;13.自定义hooks函数&quot;">​</a></h2><p><img src="`+p+`" alt="这是图片" title="Magic Gardens"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//usePoint.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">savePoint</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;savePoint&#39;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> savePoint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//usePoint.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">savePoint</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;savePoint&#39;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> val</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> savePoint</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// HelloWorld.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import usePoint from &#39;../hooks/usePoint&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const point = ref(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">point.value = usePoint(6)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(&#39;usePoint(6)&#39;, usePoint(6));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// HelloWorld.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import usePoint from &#39;../hooks/usePoint&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const point = ref(0)</span></span>
<span class="line"><span style="color:#24292E;">point.value = usePoint(6)</span></span>
<span class="line"><span style="color:#24292E;">console.log(&#39;usePoint(6)&#39;, usePoint(6));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,42),t=[e];function c(E,r,y,i,u,d){return n(),a("div",null,t)}const m=s(o,[["render",c]]);export{F as __pageData,m as default};
