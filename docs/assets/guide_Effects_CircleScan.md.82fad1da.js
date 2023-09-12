import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fc7c6495.js";const _=JSON.parse('{"title":"CircleScan","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Effects/CircleScan.md","filePath":"guide/Effects/CircleScan.md"}'),p={name:"guide/Effects/CircleScan.md"},o=l(`<h1 id="circlescan" tabindex="-1">CircleScan <a class="header-anchor" href="#circlescan" aria-label="Permalink to &quot;CircleScan&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 圆形雷达扫描</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addRadar3</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">circleScan</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">CircleScan</span><span style="color:#E1E4E8;">(viewer)</span></span>
<span class="line"><span style="color:#E1E4E8;">  circleScan.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lng: </span><span style="color:#79B8FF;">121.598048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lat: </span><span style="color:#79B8FF;">31.218541</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alt: </span><span style="color:#79B8FF;">10.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(37, 72, 164, 1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    radius: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: </span><span style="color:#79B8FF;">2000</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 圆形雷达扫描</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addRadar3</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">circleScan</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">CircleScan</span><span style="color:#24292E;">(viewer)</span></span>
<span class="line"><span style="color:#24292E;">  circleScan.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    position: {</span></span>
<span class="line"><span style="color:#24292E;">      lng: </span><span style="color:#005CC5;">121.598048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lat: </span><span style="color:#005CC5;">31.218541</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      alt: </span><span style="color:#005CC5;">10.0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(37, 72, 164, 1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    radius: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    duration: </span><span style="color:#005CC5;">2000</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{_ as __pageData,F as default};
