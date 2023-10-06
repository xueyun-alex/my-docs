import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.397d0407.js";const d=JSON.parse('{"title":"js数组常用方法","description":"","frontmatter":{},"headers":[],"relativePath":"guide/JavaScript/js数组常用方法-.md","filePath":"guide/JavaScript/js数组常用方法-.md"}'),p={name:"guide/JavaScript/js数组常用方法-.md"},o=l(`<h1 id="js数组常用方法" tabindex="-1">js数组常用方法 <a class="header-anchor" href="#js数组常用方法" aria-label="Permalink to &quot;js数组常用方法&quot;">​</a></h1><h2 id="_1-join-数组转字符串" tabindex="-1">1.join() （数组转字符串） <a class="header-anchor" href="#_1-join-数组转字符串" aria-label="Permalink to &quot;1.join() （数组转字符串）&quot;">​</a></h2><p>数组转字符串，方法只接收一个参数：即默认为逗号分隔符（）。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.join()); //1,2,3,4</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.join(&quot;:&quot;)); //1:2:3:4</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); //[1,2,3,4],原数组不变</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.join()); //1,2,3,4</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.join(&quot;:&quot;)); //1:2:3:4</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); //[1,2,3,4],原数组不变</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_2-push-和pop-数组尾操作" tabindex="-1">2.push()和pop()（数组尾操作） <a class="header-anchor" href="#_2-push-和pop-数组尾操作" aria-label="Permalink to &quot;2.push()和pop()（数组尾操作）&quot;">​</a></h2><p>push()：方法可向数组的末尾添加一个或多个元素，并返回新的长度。</p><p>pop()：方法用于删除并返回数组的最后一个元素。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#E1E4E8;">	//push</span></span>
<span class="line"><span style="color:#E1E4E8;">	var push_arr=arr.push(&quot;Tom&quot;,&quot;Sun&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); //[1,2,3,4,&quot;Tom&quot;,&quot;Sun&quot;];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(push_arr); // 6</span></span>
<span class="line"><span style="color:#E1E4E8;">	//pop</span></span>
<span class="line"><span style="color:#E1E4E8;">	var pop_arr=arr.pop();</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); //[1,2,3,4,&quot;Tom&quot;];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(pop_arr); // Sun	</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#24292E;">	//push</span></span>
<span class="line"><span style="color:#24292E;">	var push_arr=arr.push(&quot;Tom&quot;,&quot;Sun&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); //[1,2,3,4,&quot;Tom&quot;,&quot;Sun&quot;];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(push_arr); // 6</span></span>
<span class="line"><span style="color:#24292E;">	//pop</span></span>
<span class="line"><span style="color:#24292E;">	var pop_arr=arr.pop();</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); //[1,2,3,4,&quot;Tom&quot;];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(pop_arr); // Sun	</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_3-shift-和-unshift-数组首操作" tabindex="-1">3.shift() 和 unshift()（数组首操作） <a class="header-anchor" href="#_3-shift-和-unshift-数组首操作" aria-label="Permalink to &quot;3.shift() 和 unshift()（数组首操作）&quot;">​</a></h2><p>shift()：方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。</p><p>unshift()：方法可向数组的开头添加一个或更多元素，并返回新的长度。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#E1E4E8;">	//shift</span></span>
<span class="line"><span style="color:#E1E4E8;">	var shift_arr=arr.shift();</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [2, 3, 4]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(shift_arr); // 1</span></span>
<span class="line"><span style="color:#E1E4E8;">	//unshift</span></span>
<span class="line"><span style="color:#E1E4E8;">	var unshift_arr=arr.unshift(&quot;Tom&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [&quot;Tom&quot;, 2, 3, 4]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(unshift_arr); // 4</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#24292E;">	//shift</span></span>
<span class="line"><span style="color:#24292E;">	var shift_arr=arr.shift();</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [2, 3, 4]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(shift_arr); // 1</span></span>
<span class="line"><span style="color:#24292E;">	//unshift</span></span>
<span class="line"><span style="color:#24292E;">	var unshift_arr=arr.unshift(&quot;Tom&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [&quot;Tom&quot;, 2, 3, 4]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(unshift_arr); // 4</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_4-sort-排序" tabindex="-1">4.sort()（排序） <a class="header-anchor" href="#_4-sort-排序" aria-label="Permalink to &quot;4.sort()（排序）&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.sort()); // [1, 100, 20, 5]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [1, 100, 20, 5] (原数组改变)	</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.sort()); // [1, 100, 20, 5]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [1, 100, 20, 5] (原数组改变)	</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>请注意，上面的代码没有按照数值的大小对数字进行排序，是按照字符编码的顺序进行排序，要实现这一点，就必须使用一个排序函数：<br><strong>升序：</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#E1E4E8;">	function sortNumber(a,b){return a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b};</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); //[1, 5, 20, 100] (原数组改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#24292E;">	function sortNumber(a,b){return a </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> b};</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); //[1, 5, 20, 100] (原数组改变)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>降序：</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#E1E4E8;">	function sortNumber(a,b){return b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a};</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [100, 20, 5, 1] (原数组改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,100,5,20];</span></span>
<span class="line"><span style="color:#24292E;">	function sortNumber(a,b){return b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> a};</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [100, 20, 5, 1] (原数组改变)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_5-reverse-反转数组" tabindex="-1">5.reverse() （反转数组） <a class="header-anchor" href="#_5-reverse-反转数组" aria-label="Permalink to &quot;5.reverse() （反转数组）&quot;">​</a></h2><p>方法用于颠倒数组中元素的顺序。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[12,25,5,20];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.reverse()); // [20, 5, 25, 12]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [20, 5, 25, 12] (原数组改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[12,25,5,20];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.reverse()); // [20, 5, 25, 12]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [20, 5, 25, 12] (原数组改变)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_6-concat-连接两个或多个数组" tabindex="-1">6.concat() （连接两个或多个数组） <a class="header-anchor" href="#_6-concat-连接两个或多个数组" aria-label="Permalink to &quot;6.concat() （连接两个或多个数组）&quot;">​</a></h2><p>concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr2=[11,12,13] </span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrCopy = arr.concat(arr2);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [1, 2, 3, 4] (原数组未改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#24292E;">	var arr2=[11,12,13] </span></span>
<span class="line"><span style="color:#24292E;">	var arrCopy = arr.concat(arr2);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [1, 2, 3, 4] (原数组未改变)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>如果传入的参数是一个二维数组呢？</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr2=[11,[12,13]] </span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrCopy = arr.concat(arr2);	</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr); // [1, 2, 3, 4] (原数组未改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr=[1,2,3,4];</span></span>
<span class="line"><span style="color:#24292E;">	var arr2=[11,[12,13]] </span></span>
<span class="line"><span style="color:#24292E;">	var arrCopy = arr.concat(arr2);	</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr); // [1, 2, 3, 4] (原数组未改变)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>从上面代码中可以看出concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy中。</p><h2 id="_7-slice-数组截取" tabindex="-1">7.slice()（数组截取） <a class="header-anchor" href="#_7-slice-数组截取" aria-label="Permalink to &quot;7.slice()（数组截取）&quot;">​</a></h2><p><strong>arr.slice(start , end);</strong></p><p><strong>start:</strong> 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。</p><p><strong>end:</strong> 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。</p><p><strong>返回值:</strong> 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arr 中的元素。</p><h2 id="_8-splice-数组更新" tabindex="-1">8.splice() （数组更新） <a class="header-anchor" href="#_8-splice-数组更新" aria-label="Permalink to &quot;8.splice() （数组更新）&quot;">​</a></h2><p>splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。（该方法会改变原始数组）</p><p>arr.splice(index , howmany , item1,.....,itemX)</p><p>index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。</p><p>howmany：必需。要删除的项目数量。如果设置为 0，则不会删除项目。</p><p>item1, ..., itemX：可选。向数组添加的新项目。</p><p>返回值：含有被删除的元素的数组，若没有删除元素则返回一个空数组。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr = [&quot;张三&quot;,&quot;李四&quot;,&quot;王五&quot;,&quot;小明&quot;,&quot;小红&quot;];</span></span>
<span class="line"><span style="color:#E1E4E8;">	/**************删除&quot;王五&quot;****************/</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace1 = arr.splice(2,1);	</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace1);  // [&quot;王五&quot;] </span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;李四&quot;, &quot;小明&quot;, &quot;小红&quot;] (原数组改变)</span></span>
<span class="line"><span style="color:#E1E4E8;">	//删除多个</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace2 = arr.splice(1,2);	</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace2);  //  [&quot;李四&quot;, &quot;小明&quot;] </span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;小红&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	/**************添加&quot;小刚&quot;****************/</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace3 = arr.splice(1,0,&quot;小刚&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace3);  // [] (没有删除元素，所以返回的是空数组)</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;小刚&quot;, &quot;小红&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	//添加多个</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace4 = arr.splice(3,0,&quot;刘一&quot;,&quot;陈二&quot;,&quot;赵六&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace4);  // []</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;小刚&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	/**************&quot;王五&quot;替换&quot;小刚&quot;****************/</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace5 = arr.splice(1,1,&quot;王五&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace5);  // [&quot;小刚&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;王五&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	//替换多个</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arrReplace6 = arr.splice(1,4,&quot;李四&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arrReplace6);  // [&quot;王五&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr);  // [&quot;张三&quot;, &quot;李四&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr = [&quot;张三&quot;,&quot;李四&quot;,&quot;王五&quot;,&quot;小明&quot;,&quot;小红&quot;];</span></span>
<span class="line"><span style="color:#24292E;">	/**************删除&quot;王五&quot;****************/</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace1 = arr.splice(2,1);	</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace1);  // [&quot;王五&quot;] </span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;李四&quot;, &quot;小明&quot;, &quot;小红&quot;] (原数组改变)</span></span>
<span class="line"><span style="color:#24292E;">	//删除多个</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace2 = arr.splice(1,2);	</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace2);  //  [&quot;李四&quot;, &quot;小明&quot;] </span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;小红&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	/**************添加&quot;小刚&quot;****************/</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace3 = arr.splice(1,0,&quot;小刚&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace3);  // [] (没有删除元素，所以返回的是空数组)</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;小刚&quot;, &quot;小红&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	//添加多个</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace4 = arr.splice(3,0,&quot;刘一&quot;,&quot;陈二&quot;,&quot;赵六&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace4);  // []</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;小刚&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	/**************&quot;王五&quot;替换&quot;小刚&quot;****************/</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace5 = arr.splice(1,1,&quot;王五&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace5);  // [&quot;小刚&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;王五&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	//替换多个</span></span>
<span class="line"><span style="color:#24292E;">	var arrReplace6 = arr.splice(1,4,&quot;李四&quot;);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arrReplace6);  // [&quot;王五&quot;, &quot;小红&quot;, &quot;刘一&quot;, &quot;陈二&quot;]</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr);  // [&quot;张三&quot;, &quot;李四&quot;, &quot;赵六&quot;]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_2个索引方法-es5" tabindex="-1">2个索引方法(ES5) <a class="header-anchor" href="#_2个索引方法-es5" aria-label="Permalink to &quot;2个索引方法(ES5)&quot;">​</a></h2><p><strong>indexOf()和 lastIndexOf()</strong></p><p>两个方法都返回要查找的项在数组中首次出现的位置，在没找到的情况下返回-1</p><p>indexOf()--------array.indexOf(item,start) （从数组的开头（位置 0）开始向后查找）</p><p>item： 必须。查找的元素。</p><p>start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从array[0]开始检索。</p><p>lastIndexOf()--------array.lastIndexOf(item,start) （从数组的末尾开始向前查找）</p><p>item： 必须。查找的元素。</p><p>start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从 array[array.length-1]开始检索。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr = [1,4,7,10,7,18,7,26];</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.indexOf(7));        // 2</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.lastIndexOf(7));    // 6</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.indexOf(7,4));      // 4</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.lastIndexOf(7,2));  // 2</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(arr.indexOf(5));        // -1		</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr = [1,4,7,10,7,18,7,26];</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.indexOf(7));        // 2</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.lastIndexOf(7));    // 6</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.indexOf(7,4));      // 4</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.lastIndexOf(7,2));  // 2</span></span>
<span class="line"><span style="color:#24292E;">	console.log(arr.indexOf(5));        // -1		</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_5个迭代方法-es5" tabindex="-1">5个迭代方法(ES5) <a class="header-anchor" href="#_5个迭代方法-es5" aria-label="Permalink to &quot;5个迭代方法(ES5)&quot;">​</a></h2><p><strong>forEach()、map()、filter()、some()、every()</strong></p><p>这几个方法语法都一样，都不会改变原数组。</p><p><strong>forEach()：</strong> 对数组进行遍历循环，这个方法没有返回值。jquery()也提供了相应的方法each()方法。</p><p>语法：array.forEach(function(currentValue , index , arr){//do something}, thisValue)</p><p>currentValue : 必需。当前元素</p><p>index： 可选。当前元素的索引值。</p><p>arr : 可选。当前元素所属的数组对象。</p><p>thisValue： 可选。传递给函数的值一般用 &quot;this&quot; 值。如果这个参数为空， &quot;undefined&quot; 会传递给 &quot;this&quot; 值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var Arr = [1,4,7,10];</span></span>
<span class="line"><span style="color:#E1E4E8;">	Arr.forEach(function(currentValue, index, arr){</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(index</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;--&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">currentValue</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;--&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">(arr </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> Arr));		</span></span>
<span class="line"><span style="color:#E1E4E8;">	})</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 输出：</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 0--1--true</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 1--4--true</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 2--7--true</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 3--10--true	</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var Arr = [1,4,7,10];</span></span>
<span class="line"><span style="color:#24292E;">	Arr.forEach(function(currentValue, index, arr){</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(index</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;--&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">currentValue</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;--&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">(arr </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> Arr));		</span></span>
<span class="line"><span style="color:#24292E;">	})</span></span>
<span class="line"><span style="color:#24292E;">	// 输出：</span></span>
<span class="line"><span style="color:#24292E;">	// 0--1--true</span></span>
<span class="line"><span style="color:#24292E;">	// 1--4--true</span></span>
<span class="line"><span style="color:#24292E;">	// 2--7--true</span></span>
<span class="line"><span style="color:#24292E;">	// 3--10--true	</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>map()：</strong> 指“映射”，方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</p><p>语法：array.map(function(currentValue , index , arr){//do something}, thisValue)</p><p>map方法实现数组中每个数求平方：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    var arr = [1,4,8,10];</span></span>
<span class="line"><span style="color:#E1E4E8;">    var arr2 = arr.map(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return currentValue</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">currentValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(arr2);  // [1, 16, 64, 100]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    var arr = [1,4,8,10];</span></span>
<span class="line"><span style="color:#24292E;">    var arr2 = arr.map(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">        return currentValue</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">currentValue;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    console.log(arr2);  // [1, 16, 64, 100]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>filter()：</strong> “过滤”功能，方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。和filter() 方法类似，jquery中有个 grep()方法也用于数组元素过滤筛选。</p><p>语法： array.filter(function(currentValue , index , arr){//do something}, thisValue)</p><p>filter方法实现筛选排除掉所有小于5的元素：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#E1E4E8;">    var result1 = arr.filter(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return currentValue</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(result1);  // [6, 8, 10]</span></span>
<span class="line"><span style="color:#E1E4E8;">    var result2 = arr.filter(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">        return currentValue</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(result2);  // [6, 8, 10]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#24292E;">    var result1 = arr.filter(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">        return currentValue</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    console.log(result1);  // [6, 8, 10]</span></span>
<span class="line"><span style="color:#24292E;">    var result2 = arr.filter(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">        return currentValue</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    console.log(result2);  // [6, 8, 10]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>当我们分别设置item &gt; 5和item &gt; &quot;5&quot;时, 返回的结果是一样的，由此我们可以看出函数支持弱等于（==），不是必须全（===）。</p><p><strong>every()：</strong> 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。</p><p>语法： array.every(function(currentValue , index , arr){//do something}, thisValue)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result1 = arr.every(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return currentValue</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(result1);  // true</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result2 = arr.every(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return currentValue</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(result2);  // false</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#24292E;">	var result1 = arr.every(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">	    return currentValue</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	console.log(result1);  // true</span></span>
<span class="line"><span style="color:#24292E;">	var result2 = arr.every(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">	    return currentValue</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	console.log(result2);  // false</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>some()：</strong> 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。</p><p>语法： array.some(function(currentValue , index , arr){//do something}, thisValue)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result1 = arr.some(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return currentValue</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(result1);  // false</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result2 = arr.some(function(currentValue){</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return currentValue</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(result2);  // true</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr = [1,4,6,8,10];</span></span>
<span class="line"><span style="color:#24292E;">	var result1 = arr.some(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">	    return currentValue</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	console.log(result1);  // false</span></span>
<span class="line"><span style="color:#24292E;">	var result2 = arr.some(function(currentValue){</span></span>
<span class="line"><span style="color:#24292E;">	    return currentValue</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	console.log(result2);  // true</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_2个归并方法-es5" tabindex="-1">2个归并方法(ES5) <a class="header-anchor" href="#_2个归并方法-es5" aria-label="Permalink to &quot;2个归并方法(ES5)&quot;">​</a></h2><p><strong>reduce()、reduceRight()</strong><br> 这两个方法都会迭代数组中的所有项，然后生成一个最终返回值。他们都接收两个参数，第一个参数是每一项调用的函数，函数接受四个参数分别是初始值，当前值，索引值，和当前数组，函数需要返回一个值，这个值会在下一次迭代中作为初始值。第二个参数是迭代初始值，参数可选，如果缺省，初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算。</p><p>reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。</p><p>reduce()语法：arr.reduce(function(total , cur , index , arr){//do something}, initialValue)</p><p>reduceRight()语法：arr.reduceRight(function(total , cur , index , arr){//do something}, initialValue)</p><p>total ：必需。初始值, 或者计算结束后的返回值。</p><p>cur ：必需。当前元素。</p><p>index ：可选。当前元素的索引。</p><p>arr：可选。当前元素所属的数组对象。</p><p>initialValue：可选。传递给函数的初始值。</p><p>下面代码实现数组求和：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	var arr = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result1 = arr.reduce(function(total,cur,index,arr){	</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;total:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">total</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;,cur:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">cur</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;,index:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">index);</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return total</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">cur;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(&quot;结果：&quot;+result1);</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:1,cur:2,index:1</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:3,cur:3,index:2</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:6,cur:4,index:3</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:10,cur:5,index:4</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 结果：15</span></span>
<span class="line"><span style="color:#E1E4E8;">	var result2 = arr.reduce(function(total,cur,index,arr){	</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;total:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">total</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;,cur:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">cur</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;,index:&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">index);</span></span>
<span class="line"><span style="color:#E1E4E8;">	    return total</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">cur;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},10);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.log(&quot;结果：&quot;+result2);</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:10,cur:1,index:0</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:11,cur:2,index:1</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:13,cur:3,index:2</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:16,cur:4,index:3</span></span>
<span class="line"><span style="color:#E1E4E8;">	// total:20,cur:5,index:4</span></span>
<span class="line"><span style="color:#E1E4E8;">	// 结果：25</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	var arr = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#24292E;">	var result1 = arr.reduce(function(total,cur,index,arr){	</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;total:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">total</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;,cur:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">cur</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;,index:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">index);</span></span>
<span class="line"><span style="color:#24292E;">	    return total</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">cur;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	console.log(&quot;结果：&quot;+result1);</span></span>
<span class="line"><span style="color:#24292E;">	// 输出</span></span>
<span class="line"><span style="color:#24292E;">	// total:1,cur:2,index:1</span></span>
<span class="line"><span style="color:#24292E;">	// total:3,cur:3,index:2</span></span>
<span class="line"><span style="color:#24292E;">	// total:6,cur:4,index:3</span></span>
<span class="line"><span style="color:#24292E;">	// total:10,cur:5,index:4</span></span>
<span class="line"><span style="color:#24292E;">	// 结果：15</span></span>
<span class="line"><span style="color:#24292E;">	var result2 = arr.reduce(function(total,cur,index,arr){	</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;total:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">total</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;,cur:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">cur</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;,index:&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">index);</span></span>
<span class="line"><span style="color:#24292E;">	    return total</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">cur;</span></span>
<span class="line"><span style="color:#24292E;">	},10);</span></span>
<span class="line"><span style="color:#24292E;">	console.log(&quot;结果：&quot;+result2);</span></span>
<span class="line"><span style="color:#24292E;">	// 输出</span></span>
<span class="line"><span style="color:#24292E;">	// total:10,cur:1,index:0</span></span>
<span class="line"><span style="color:#24292E;">	// total:11,cur:2,index:1</span></span>
<span class="line"><span style="color:#24292E;">	// total:13,cur:3,index:2</span></span>
<span class="line"><span style="color:#24292E;">	// total:16,cur:4,index:3</span></span>
<span class="line"><span style="color:#24292E;">	// total:20,cur:5,index:4</span></span>
<span class="line"><span style="color:#24292E;">	// 结果：25</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>从上面代码我们可以看出，当我们不给函数传递迭代初始值时初始值 total 为数组第一项，函数从数组第二项开始迭代；若我们给函数传递迭代初始值，则函数从数组第一项开始迭代。</p>`,88),t=[o];function e(r,c,E,i,y,u){return a(),n("div",null,t)}const q=s(p,[["render",e]]);export{d as __pageData,q as default};
