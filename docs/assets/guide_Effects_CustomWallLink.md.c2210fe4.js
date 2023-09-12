import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.20ab0108.js";const u=JSON.parse('{"title":"CustomWallLink","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Effects/CustomWallLink.md","filePath":"guide/Effects/CustomWallLink.md"}'),p={name:"guide/Effects/CustomWallLink.md"},o=l(`<h1 id="customwalllink" tabindex="-1">CustomWallLink <a class="header-anchor" href="#customwalllink" aria-label="Permalink to &quot;CustomWallLink&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> wallModel</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AddWall</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  wallModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">CustomWallLink</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: wallData,</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometryType: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    image: window.baseUrl </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/resource/demo/images/b2.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    freely: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    direction: </span><span style="color:#9ECBFF;">&#39;+&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#79B8FF;">GC</span><span style="color:#E1E4E8;">.Color.</span><span style="color:#79B8FF;">RED</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: </span><span style="color:#79B8FF;">2000</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> wallModel</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddWall</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  wallModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">CustomWallLink</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#24292E;">    position: wallData,</span></span>
<span class="line"><span style="color:#24292E;">    geometryType: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    image: window.baseUrl </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/resource/demo/images/b2.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    freely: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    direction: </span><span style="color:#032F62;">&#39;+&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    count: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#005CC5;">GC</span><span style="color:#24292E;">.Color.</span><span style="color:#005CC5;">RED</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    duration: </span><span style="color:#005CC5;">2000</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};
