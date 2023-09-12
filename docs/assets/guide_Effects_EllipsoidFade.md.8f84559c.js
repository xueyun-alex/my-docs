import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fc7c6495.js";const _=JSON.parse('{"title":"EllipsoidFade","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Effects/EllipsoidFade.md","filePath":"guide/Effects/EllipsoidFade.md"}'),p={name:"guide/Effects/EllipsoidFade.md"},o=l(`<h1 id="ellipsoidfade" tabindex="-1">EllipsoidFade <a class="header-anchor" href="#ellipsoidfade" aria-label="Permalink to &quot;EllipsoidFade&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 扩散点 圆</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addRadar4</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ellipsoidFade</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">EllipsoidFade</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#E1E4E8;">    position: { lng: </span><span style="color:#79B8FF;">121.566336</span><span style="color:#E1E4E8;">, lat: </span><span style="color:#79B8FF;">31.18555136</span><span style="color:#E1E4E8;">, alt: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    speed: </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  effectArr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(ellipsoidFade)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 扩散点 圆</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addRadar4</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ellipsoidFade</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">EllipsoidFade</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#24292E;">    position: { lng: </span><span style="color:#005CC5;">121.566336</span><span style="color:#24292E;">, lat: </span><span style="color:#005CC5;">31.18555136</span><span style="color:#24292E;">, alt: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    speed: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  effectArr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(ellipsoidFade)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function t(c,r,i,E,d,y){return a(),n("div",null,e)}const f=s(p,[["render",t]]);export{_ as __pageData,f as default};
