浮动 ： float

1.left right

2.特性
    
     1.包裹性  （收缩、隔绝：BFC）

     2.破坏性  （会让父元素的高度塌陷）

                不是bug， 【是标准】

3.清除浮动

    方式特别多 :

              不用：多加一个块元素，加入样式 clear:both
              用 ： 需要给父元素加入伪类 affter，样式{
               .g-container:after{
                   content: "";
                   clear: both;
                   display: block;
               }       



************浮动主要是干嘛：实现文字的环绕效果********