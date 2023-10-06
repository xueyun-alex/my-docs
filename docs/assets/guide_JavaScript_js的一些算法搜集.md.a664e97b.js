import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.397d0407.js";const F=JSON.parse('{"title":"js的一些算法搜集","description":"","frontmatter":{},"headers":[],"relativePath":"guide/JavaScript/js的一些算法搜集.md","filePath":"guide/JavaScript/js的一些算法搜集.md"}'),p={name:"guide/JavaScript/js的一些算法搜集.md"},o=l(`<h1 id="js的一些算法搜集" tabindex="-1">js的一些算法搜集 <a class="header-anchor" href="#js的一些算法搜集" aria-label="Permalink to &quot;js的一些算法搜集&quot;">​</a></h1><h2 id="一、合并对象数组" tabindex="-1">一、合并对象数组 <a class="header-anchor" href="#一、合并对象数组" aria-label="Permalink to &quot;一、合并对象数组&quot;">​</a></h2><p>把拥有相同id的对象合并，剩余的参数值组成一个数组</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Amy&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Adam&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Sam&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">data.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 查找结果数组中是否已经存在该 id 的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result.</span><span style="color:#B392F0;">findIndex</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> r.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> item.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果不存在，则添加该 id 对应的新对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (index </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    result.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ id: item.id, names: [item.name] });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果已经存在，则将该对象的 name 添加到 names 数组中</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    result[index].names.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//输出结果</span></span>
<span class="line"><span style="color:#6A737D;">// [</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 1, names: [ &#39;John&#39;, &#39;Amy&#39; ] },</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 2, names: [ &#39;Bob&#39; ] },</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 3, names: [ &#39;Adam&#39;, &#39;Sam&#39; ] }</span></span>
<span class="line"><span style="color:#6A737D;">// ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;John&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;Amy&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;Adam&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;Sam&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">data.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 查找结果数组中是否已经存在该 id 的对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">index</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> result.</span><span style="color:#6F42C1;">findIndex</span><span style="color:#24292E;">((</span><span style="color:#E36209;">r</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> r.id </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> item.id);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果不存在，则添加该 id 对应的新对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (index </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    result.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ id: item.id, names: [item.name] });</span></span>
<span class="line"><span style="color:#24292E;">  } </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果已经存在，则将该对象的 name 添加到 names 数组中</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    result[index].names.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.name);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//输出结果</span></span>
<span class="line"><span style="color:#6A737D;">// [</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 1, names: [ &#39;John&#39;, &#39;Amy&#39; ] },</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 2, names: [ &#39;Bob&#39; ] },</span></span>
<span class="line"><span style="color:#6A737D;">//   { id: 3, names: [ &#39;Adam&#39;, &#39;Sam&#39; ] }</span></span>
<span class="line"><span style="color:#6A737D;">// ]</span></span></code></pre></div>`,4),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{F as __pageData,A as default};
