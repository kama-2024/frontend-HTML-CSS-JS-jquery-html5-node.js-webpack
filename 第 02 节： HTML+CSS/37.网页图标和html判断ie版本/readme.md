1、网页图标

   <link rel="icon" href="favicon.ico">

title可能会出现乱码：

 解决办法：
   <meta charset="utf-8"> 

2、html判断ie的版本    

if（假如）布局要在下面写


非IE浏览器：<!--[if !IE]> 除了IE外都会执行 <!if[endif]-->
           <!--[if lt IE 6]><!if[endif]-->
           <!--[if lte IE 9】><!if[endif]-->
           <!--[if gte IE 9】><!if[endif]-->



!  :非IE
lte：小于或等于
lt ：小于
gte：大于或等于
gt ：大于



<noscript>
	xxxxxxxxx
</noscript>
<!--[if lt IE 9]> 小于ie9的话他会执行这一部分内容
     <script type="text/javascript"
     src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/polyfill-ie8-30f98ab294.js"></script>
<![endif]-->
