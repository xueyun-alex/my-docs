import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.397d0407.js";const g=JSON.parse('{"title":"css的一些代码收集","description":"","frontmatter":{},"headers":[],"relativePath":"guide/css/css的一些代码收集.md","filePath":"guide/css/css的一些代码收集.md"}'),p={name:"guide/css/css的一些代码收集.md"},o=l(`<h1 id="css的一些代码收集" tabindex="-1">css的一些代码收集 <a class="header-anchor" href="#css的一些代码收集" aria-label="Permalink to &quot;css的一些代码收集&quot;">​</a></h1><h2 id="css中文字太多自动显示省略号" tabindex="-1">CSS中文字太多自动显示省略号 <a class="header-anchor" href="#css中文字太多自动显示省略号" aria-label="Permalink to &quot;CSS中文字太多自动显示省略号&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!</span><span style="color:#79B8FF;">DOCTYPE</span><span style="color:#E1E4E8;"> html</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;省略号&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        .box1{</span></span>
<span class="line"><span style="color:#E1E4E8;">            height: 40px;</span></span>
<span class="line"><span style="color:#E1E4E8;">            width: 100px;</span></span>
<span class="line"><span style="color:#E1E4E8;">            background</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">color:aqua;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第一步：规定只能在一行显示 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            white</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">space: nowrap;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第二部：多出的部分隐藏 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第三步：加上省略号 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            text</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">overflow: ellipsis;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        .box2{</span></span>
<span class="line"><span style="color:#E1E4E8;">            height: 40px;</span></span>
<span class="line"><span style="color:#E1E4E8;">            width: 100px;</span></span>
<span class="line"><span style="color:#E1E4E8;">            background</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">color:</span><span style="color:#B392F0;">rgb</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">92</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">138</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">138</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第一步：弹性伸缩盒子模型展示 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            display: </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">webkit</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">box;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 限制在一个块元素显示的文本的行数 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">webkit</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">line</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">clamp: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 设置或检索伸缩盒子对象的子元素的排列方式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">webkit</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">box</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">orient: vertical;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第二部：多出的部分隐藏 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* 第三步：加上省略号 */</span></span>
<span class="line"><span style="color:#E1E4E8;">            text</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">overflow: ellipsis;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    单行省略号</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;box1&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        我啥也不想说，此处省略一万字</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    多行省略号(具体行数自定义)</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;box2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        我啥也不想说，此处省略一万字</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!</span><span style="color:#005CC5;">DOCTYPE</span><span style="color:#24292E;"> html</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;省略号&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        .box1{</span></span>
<span class="line"><span style="color:#24292E;">            height: 40px;</span></span>
<span class="line"><span style="color:#24292E;">            width: 100px;</span></span>
<span class="line"><span style="color:#24292E;">            background</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">color:aqua;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第一步：规定只能在一行显示 */</span></span>
<span class="line"><span style="color:#24292E;">            white</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">space: nowrap;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第二部：多出的部分隐藏 */</span></span>
<span class="line"><span style="color:#24292E;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第三步：加上省略号 */</span></span>
<span class="line"><span style="color:#24292E;">            text</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">overflow: ellipsis;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        .box2{</span></span>
<span class="line"><span style="color:#24292E;">            height: 40px;</span></span>
<span class="line"><span style="color:#24292E;">            width: 100px;</span></span>
<span class="line"><span style="color:#24292E;">            background</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">color:</span><span style="color:#6F42C1;">rgb</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">92</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">138</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">138</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第一步：弹性伸缩盒子模型展示 */</span></span>
<span class="line"><span style="color:#24292E;">            display: </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">webkit</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">box;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 限制在一个块元素显示的文本的行数 */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">webkit</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">line</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">clamp: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 设置或检索伸缩盒子对象的子元素的排列方式 */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">webkit</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">box</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">orient: vertical;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第二部：多出的部分隐藏 */</span></span>
<span class="line"><span style="color:#24292E;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* 第三步：加上省略号 */</span></span>
<span class="line"><span style="color:#24292E;">            text</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">overflow: ellipsis;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    单行省略号</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;box1&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        我啥也不想说，此处省略一万字</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">hr</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    多行省略号(具体行数自定义)</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;box2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        我啥也不想说，此处省略一万字</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),e=[o];function t(c,E,r,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{g as __pageData,A as default};
