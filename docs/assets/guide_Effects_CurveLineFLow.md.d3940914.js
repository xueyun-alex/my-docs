import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fc7c6495.js";const d=JSON.parse('{"title":"CurveLineFLow","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Effects/CurveLineFLow.md","filePath":"guide/Effects/CurveLineFLow.md"}'),p={name:"guide/Effects/CurveLineFLow.md"},o=l(`<h1 id="curvelineflow" tabindex="-1">CurveLineFLow <a class="header-anchor" href="#curvelineflow" aria-label="Permalink to &quot;CurveLineFLow&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 发光线条特效 不同的颜色</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">creatFlowLines</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">startPoint</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">121.4727951</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">31.2233641</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">positions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      startPoint,</span></span>
<span class="line"><span style="color:#E1E4E8;">      endPoint: [Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">121.4727951</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">31.2233641</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">glowingLine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">CurveLineFLow</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#E1E4E8;">      positions,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: colors[i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration: </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      angularityFactor: </span><span style="color:#79B8FF;">100000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      numOfSingleLine: </span><span style="color:#79B8FF;">50</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    lines.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(glowingLine)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 发光线条特效 不同的颜色</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">creatFlowLines</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">startPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">121.4727951</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">31.2233641</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">positions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      startPoint,</span></span>
<span class="line"><span style="color:#24292E;">      endPoint: [Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">121.4727951</span><span style="color:#24292E;">, Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">31.2233641</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">glowingLine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">CurveLineFLow</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      sandbox: window.sandbox,</span></span>
<span class="line"><span style="color:#24292E;">      positions,</span></span>
<span class="line"><span style="color:#24292E;">      width: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      color: colors[i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      duration: </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      angularityFactor: </span><span style="color:#005CC5;">100000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      numOfSingleLine: </span><span style="color:#005CC5;">50</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    lines.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(glowingLine)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
