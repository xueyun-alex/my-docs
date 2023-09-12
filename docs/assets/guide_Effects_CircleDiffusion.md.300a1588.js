import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fc7c6495.js";const C=JSON.parse('{"title":"CircleDiffusion","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Effects/CircleDiffusion.md","filePath":"guide/Effects/CircleDiffusion.md"}'),p={name:"guide/Effects/CircleDiffusion.md"},o=l(`<h1 id="circlediffusion" tabindex="-1">CircleDiffusion <a class="header-anchor" href="#circlediffusion" aria-label="Permalink to &quot;CircleDiffusion&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 圆扩散</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addRadar1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">circleDiffusion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">CircleDiffusion</span><span style="color:#E1E4E8;">(viewer)</span></span>
<span class="line"><span style="color:#E1E4E8;">  circleDiffusion.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lng: </span><span style="color:#79B8FF;">121.518048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lat: </span><span style="color:#79B8FF;">31.201541</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alt: </span><span style="color:#79B8FF;">10.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(167, 234, 161, 1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    radius: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isAnimation: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  circleDiffusion.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      lng: </span><span style="color:#79B8FF;">121.525168</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lat: </span><span style="color:#79B8FF;">31.176639</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alt: </span><span style="color:#79B8FF;">10.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(47, 82, 241,1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    radius: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    border: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 圆扩散</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addRadar1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">circleDiffusion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">CircleDiffusion</span><span style="color:#24292E;">(viewer)</span></span>
<span class="line"><span style="color:#24292E;">  circleDiffusion.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    position: {</span></span>
<span class="line"><span style="color:#24292E;">      lng: </span><span style="color:#005CC5;">121.518048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lat: </span><span style="color:#005CC5;">31.201541</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      alt: </span><span style="color:#005CC5;">10.0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(167, 234, 161, 1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    radius: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    duration: </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isAnimation: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  circleDiffusion.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    position: {</span></span>
<span class="line"><span style="color:#24292E;">      lng: </span><span style="color:#005CC5;">121.525168</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lat: </span><span style="color:#005CC5;">31.176639</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      alt: </span><span style="color:#005CC5;">10.0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(47, 82, 241,1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    radius: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    duration: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    border: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,i,y,d){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{C as __pageData,F as default};
