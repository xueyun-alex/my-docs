import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.397d0407.js";const p="/my-docs/assets/vuex1.451ab975.png",o="/my-docs/assets/vuex2.f9c741f4.png",e="/my-docs/assets/vuex3.c1e2b528.png",t="/my-docs/assets/vuex4.736a58a3.png",c="/my-docs/assets/vuex5.37268f5e.png",r="/my-docs/assets/vuex6.5df2d392.png",E="/my-docs/assets/vuex7.068a4df4.png",y="/my-docs/assets/vuex8.f7b2ae96.png",i="/my-docs/assets/vuex9.9816ea77.png",b=JSON.parse('{"title":"vue3下的 vuex 安装到使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/vuex.md","filePath":"guide/vue/vuex.md"}'),u={name:"guide/vue/vuex.md"},d=l(`<h1 id="vue3下的-vuex-安装到使用" tabindex="-1">vue3下的 vuex 安装到使用 <a class="header-anchor" href="#vue3下的-vuex-安装到使用" aria-label="Permalink to &quot;vue3下的 vuex 安装到使用&quot;">​</a></h1><h2 id="vuex简介" tabindex="-1">vuex简介 <a class="header-anchor" href="#vuex简介" aria-label="Permalink to &quot;vuex简介&quot;">​</a></h2><p>独立于组件库的状态管理器，项目的公用数据可以保存在这个库（State）中，且支持响应式，但只能由Muntation修改，并不意味着将所有状态都放入store中，组件私有的，其他组件使用不到的，非公共状态，就可以不用放入store中</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// npm 安装</span></span>
<span class="line"><span style="color:#E1E4E8;">npm install vuex@next </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">save</span></span>
<span class="line"><span style="color:#6A737D;">// yarn 安装</span></span>
<span class="line"><span style="color:#E1E4E8;">yarn add vuex@next </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// npm 安装</span></span>
<span class="line"><span style="color:#24292E;">npm install vuex@next </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">save</span></span>
<span class="line"><span style="color:#6A737D;">// yarn 安装</span></span>
<span class="line"><span style="color:#24292E;">yarn add vuex@next </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">save</span></span></code></pre></div><p>以上 命令行 执行安装几秒后 <img src="`+p+'" alt="这是图片" title="Magic Gardens"> 包管理文件出现 vuex 与 其版本号 表示安装已完成</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><h3 id="创建store文件以及main文件引入" tabindex="-1">创建store文件以及main文件引入 <a class="header-anchor" href="#创建store文件以及main文件引入" aria-label="Permalink to &quot;创建store文件以及main文件引入&quot;">​</a></h3><p>创建 store-&gt;index.js文件 并写入如下代码 <img src="'+o+'" alt="这是图片" title="Magic Gardens"> mian.js导入 store 并全局注册 <img src="'+e+`" alt="这是图片" title="Magic Gardens"></p><h2 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-label="Permalink to &quot;State&quot;">​</a></h2><h3 id="state-vuex-中-储存公共数据的方法" tabindex="-1">State : vuex 中 储存公共数据的方法 <a class="header-anchor" href="#state-vuex-中-储存公共数据的方法" aria-label="Permalink to &quot;State : vuex 中 储存公共数据的方法&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 上文创建的 store下的index.js文件中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {createStore} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//共享的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            count:</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> store</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 上文创建的 store下的index.js文件中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {createStore} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createStore</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//共享的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            count:</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> store</span></span></code></pre></div><p>整个项目 所有.vue组件 获取到这个公共数据 的两种方法</p><p><strong>方法一(组合式API)</strong>： store.state.自定义字段名</p><p>在.vue文件中 使用 vuex store state 里的数据</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//任意.vue 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ vuexCount }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref ,onMounted} from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">//从 vuex 引用 useStore </span></span>
<span class="line"><span style="color:#E1E4E8;">import {useStore} from &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">//实体化 useStore() 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">const store = useStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const vuexCount = ref(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(&#39;store.state.count&#39;,store.state.count)</span></span>
<span class="line"><span style="color:#E1E4E8;">onMounted(()=&gt;{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取 vuex store state 里的 count字段的数据 </span></span>
<span class="line"><span style="color:#E1E4E8;">  vuexCount.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> store.state.count </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//任意.vue 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ vuexCount }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref ,onMounted} from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">//从 vuex 引用 useStore </span></span>
<span class="line"><span style="color:#24292E;">import {useStore} from &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">//实体化 useStore() 方法</span></span>
<span class="line"><span style="color:#24292E;">const store = useStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const vuexCount = ref(0)</span></span>
<span class="line"><span style="color:#24292E;">console.log(&#39;store.state.count&#39;,store.state.count)</span></span>
<span class="line"><span style="color:#24292E;">onMounted(()=&gt;{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取 vuex store state 里的 count字段的数据 </span></span>
<span class="line"><span style="color:#24292E;">  vuexCount.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> store.state.count </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>方法二：mapState 辅助函数</strong>（当组件需要获取多个状态，并将这些状态加入计算属性的时候）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;!-- &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ store.state.count }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt; --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ count + count1 + count2 }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 从 vuex 引入 mapState</span></span>
<span class="line"><span style="color:#E1E4E8;">import { mapState } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//在计算属性中 用...拓展多个引入 state中的状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapState</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;count&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;count1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;count2&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;!-- &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ store.state.count }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt; --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ count + count1 + count2 }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 从 vuex 引入 mapState</span></span>
<span class="line"><span style="color:#24292E;">import { mapState } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//在计算属性中 用...拓展多个引入 state中的状态</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapState</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;count&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;count1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;count2&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="gatter" tabindex="-1">Gatter <a class="header-anchor" href="#gatter" aria-label="Permalink to &quot;Gatter&quot;">​</a></h2><h3 id="gatter-对state里的数据进行处理-但不改变state里面的数据" tabindex="-1">Gatter:对state里的数据进行处理，但不改变state里面的数据 <a class="header-anchor" href="#gatter-对state里的数据进行处理-但不改变state里面的数据" aria-label="Permalink to &quot;Gatter:对state里的数据进行处理，但不改变state里面的数据&quot;">​</a></h3><p>在store-&gt;index.js里面注册 getters 处理state数据的方法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//State 共享的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            count1: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            count2: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            countArr: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                    a: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    num: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    done: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    b: </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    num: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    done: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    c: </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    num: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    done: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Getter 对 State中的数据进行处理 但不改变其中的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getters</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">countArrsum</span><span style="color:#E1E4E8;">(state) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.countArr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].num </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> state.countArr[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].num</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">countArrsum1</span><span style="color:#E1E4E8;">(state) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.count1 </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> state.count2</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">countArrsum2</span><span style="color:#E1E4E8;">(state) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.countArr.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">todo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> todo.done)</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//第二个参数可以传入 已有的getters的状态</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">countArrsum3</span><span style="color:#E1E4E8;">(state, getters) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> getters.countArrsum2.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//可以调用时候传入参数（数组下标查询数组特别有用）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">getTodoById</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.countArr[index]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//State 共享的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            count1: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            count2: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            countArr: [{</span></span>
<span class="line"><span style="color:#24292E;">                    a: </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    num: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    done: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    b: </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    num: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    done: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    c: </span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    num: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    done: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Getter 对 State中的数据进行处理 但不改变其中的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getters</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">countArrsum</span><span style="color:#24292E;">(state) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.countArr[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].num </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> state.countArr[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].num</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">countArrsum1</span><span style="color:#24292E;">(state) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.count1 </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> state.count2</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">countArrsum2</span><span style="color:#24292E;">(state) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.countArr.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">todo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> todo.done)</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//第二个参数可以传入 已有的getters的状态</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">countArrsum3</span><span style="color:#24292E;">(state, getters) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> getters.countArrsum2.</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//可以调用时候传入参数（数组下标查询数组特别有用）</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">getTodoById</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.countArr[index]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><p>使用两种方式在任意组建中调用 getters的处理过的数据<br><strong>方法一</strong>：store.getters.getters方法名(传参) <img src="`+t+'" alt="这是图片" title="Magic Gardens"><strong>方法二</strong>：在computed中 使用...mapGetters多个引用 <img src="'+c+`" alt="这是图片" title="Magic Gardens"></p><h2 id="mutation" tabindex="-1">Mutation <a class="header-anchor" href="#mutation" aria-label="Permalink to &quot;Mutation&quot;">​</a></h2><h3 id="mutation-改变state里面数据的唯一方法-只支持同步函数" tabindex="-1">Mutation:改变state里面数据的唯一方法，只支持同步函数 <a class="header-anchor" href="#mutation-改变state里面数据的唯一方法-只支持同步函数" aria-label="Permalink to &quot;Mutation:改变state里面数据的唯一方法，只支持同步函数&quot;">​</a></h3><p>在store-&gt;index.js里面的注册修改state里面数据的方法：mutations</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    createStore</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//State 共享的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            count1: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            count2: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Muntation 修改 state里面数据的唯一方法 只支持同步调用</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 变更状态</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add1</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count1</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//.vue组件调用传入 Number参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add2</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count2 </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//.vue组件调用传入 Object参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add3</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            state.count2 </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> obj.num</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> store</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    createStore</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createStore</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//State 共享的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            count1: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            count2: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Muntation 修改 state里面数据的唯一方法 只支持同步调用</span></span>
<span class="line"><span style="color:#24292E;">    mutations:{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 变更状态</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add1</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            state.count1</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//.vue组件调用传入 Number参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add2</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">,</span><span style="color:#E36209;">num</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            state.count2 </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> num</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//.vue组件调用传入 Object参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add3</span><span style="color:#24292E;">(</span><span style="color:#E36209;">state</span><span style="color:#24292E;">,</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            state.count2 </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> obj.num</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> store</span></span></code></pre></div><p>.vue调用store mutations 里方法的两种方式<br><strong>方式一</strong>：store.commit <img src="`+r+'" alt="这是图片" title="Magic Gardens"><strong>方式二</strong>：mapMutations 引入多个 mutations里面的方法 <img src="'+E+'" alt="这是图片" title="Magic Gardens"></p><h2 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h2><h3 id="action-通过提交mutation实现异步操作修改state里的状态" tabindex="-1">Action:通过提交mutation实现异步操作修改state里的状态 <a class="header-anchor" href="#action-通过提交mutation实现异步操作修改state里的状态" aria-label="Permalink to &quot;Action:通过提交mutation实现异步操作修改state里的状态&quot;">​</a></h3><p>.vue组件里面调用 actions里的两种方法</p><p><strong>方法一</strong>：store.dispatch(&#39;方法名&#39;，传值) <img src="'+y+'" alt="这是图片" title="Magic Gardens"><strong>方法二</strong>：mapActions({组件方法名：‘actions里方法名’})；mapActions（[‘actions里方法名’]） <img src="'+i+'" alt="这是图片" title="Magic Gardens"></p>',32),g=[d];function m(F,h,v,A,x,D){return n(),a("div",null,g)}const B=s(u,[["render",m]]);export{b as __pageData,B as default};
