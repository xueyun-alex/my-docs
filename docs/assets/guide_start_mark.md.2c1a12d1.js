import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.fc7c6495.js";const x=JSON.parse('{"title":"Marker","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start/mark.md","filePath":"guide/start/mark.md"}'),l={name:"guide/start/mark.md"},p=t(`<h1 id="marker" tabindex="-1">Marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;Marker&quot;">​</a></h1><p>一句话描述</p><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">marker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> GCMap.</span><span style="color:#B392F0;">Marker</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  sandbox,</span></span>
<span class="line"><span style="color:#E1E4E8;">  position:{lng:</span><span style="color:#79B8FF;">120.80776953</span><span style="color:#E1E4E8;">, lat:</span><span style="color:#79B8FF;">30.72909171</span><span style="color:#E1E4E8;">, alt:</span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">  id:</span><span style="color:#9ECBFF;">&#39;marker&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// (默认值 GUID)</span></span>
<span class="line"><span style="color:#E1E4E8;">  url, </span><span style="color:#6A737D;">// http://xxx.png 或 import xxx from &#39;xxx.jpg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 尺寸</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  offset:[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 偏移第一参数为X方向 第二参数为Y方向，单位px (默认值:[0,0])</span></span>
<span class="line"><span style="color:#E1E4E8;">  distanceDisplayCondition: [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> ,</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 距离显示条件 数组两个项分别为[可见的间隔中的最小距离,可见的间隔中的最大距离]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 制作一个只有当与相机的距离在10米到3000米之间时才可见的图标。 (默认值: [0, 1.5e7])</span></span>
<span class="line"><span style="color:#E1E4E8;">  scaleByDistance: [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 根据相机离此物体的距离来缩放，数组四个项分别为[近距离, 近距离对应缩放, 远距离, 远距离对应缩放]。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 10米及以内缩放值为1；10米到1000米缩放值由1过渡到0.1；1000米以上缩放值为0.1。 (默认值: [0, 1.0, 1</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">marker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> GCMap.</span><span style="color:#6F42C1;">Marker</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  sandbox,</span></span>
<span class="line"><span style="color:#24292E;">  position:{lng:</span><span style="color:#005CC5;">120.80776953</span><span style="color:#24292E;">, lat:</span><span style="color:#005CC5;">30.72909171</span><span style="color:#24292E;">, alt:</span><span style="color:#005CC5;">22</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">  id:</span><span style="color:#032F62;">&#39;marker&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// (默认值 GUID)</span></span>
<span class="line"><span style="color:#24292E;">  url, </span><span style="color:#6A737D;">// http://xxx.png 或 import xxx from &#39;xxx.jpg&#39;</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 尺寸</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  offset:[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 偏移第一参数为X方向 第二参数为Y方向，单位px (默认值:[0,0])</span></span>
<span class="line"><span style="color:#24292E;">  distanceDisplayCondition: [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> ,</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 距离显示条件 数组两个项分别为[可见的间隔中的最小距离,可见的间隔中的最大距离]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 制作一个只有当与相机的距离在10米到3000米之间时才可见的图标。 (默认值: [0, 1.5e7])</span></span>
<span class="line"><span style="color:#24292E;">  scaleByDistance: [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 根据相机离此物体的距离来缩放，数组四个项分别为[近距离, 近距离对应缩放, 远距离, 远距离对应缩放]。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 10米及以内缩放值为1；10米到1000米缩放值由1过渡到0.1；1000米以上缩放值为0.1。 (默认值: [0, 1.0, 1</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="初始化参数" tabindex="-1">初始化参数 <a class="header-anchor" href="#初始化参数" aria-label="Permalink to &quot;初始化参数&quot;">​</a></h2><table><thead><tr><th>名称</th><th>描述</th><th>数据类型</th><th>默认值</th></tr></thead><tbody><tr><td>position</td><td>经纬度高度组成的Object</td><td>Object</td><td>-</td></tr><tr><td>id</td><td>默认值 GUID</td><td>string</td><td>-</td></tr><tr><td>url</td><td>图片地址，<a href="http://xxx.png" target="_blank" rel="noreferrer">http://xxx.png</a> 或 import xxx from &#39;xxx.jpg&#39;</td><td>String</td><td>-</td></tr><tr><td>width</td><td>宽度</td><td>Number</td><td>100</td></tr><tr><td>hight</td><td>高度</td><td>Number</td><td>100</td></tr><tr><td>offset</td><td>偏移第一参数为X方向 第二参数为Y方向，单位px</td><td>Array</td><td>[0,0]</td></tr><tr><td>distanceDisplayCondition</td><td>距离显示条件 数组两个项分别为[可见的间隔中的最小距离,可见的间隔中的最大距离], 制作一个只有当与相机的距离在10米到3000米之间时才可见的图标。</td><td>Array</td><td>[0, 1.5e7]</td></tr><tr><td>scaleByDistance</td><td>根据相机离此物体的距离来缩放，数组四个项分别为[近距离, 近距离对应缩放, 远距离, 远距离对应缩放]。10米及以内缩放值为1；10米到1000米缩放值由1过渡到0.1；1000米以上缩放值为0.1。</td><td>Array</td><td>[10, 1, 1000, 0.1]</td></tr></tbody></table><h2 id="其他属性" tabindex="-1">其他属性 <a class="header-anchor" href="#其他属性" aria-label="Permalink to &quot;其他属性&quot;">​</a></h2><table><thead><tr><th>名称</th><th>描述</th><th>数据类型</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>控制marker的显示隐藏</td><td>Boolean</td><td>true</td></tr><tr><td>position</td><td>lng，alt，lat三个参数传入都是数字类型</td><td>Boolean</td><td>true</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table><thead><tr><th>名称</th><th>描述</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>visible</td><td>控制marker的显示隐藏</td><td>Boolean</td><td>true</td></tr></tbody></table>`,10),o=[p];function e(r,c,d,y,E,i){return a(),n("div",null,o)}const C=s(l,[["render",e]]);export{x as __pageData,C as default};
