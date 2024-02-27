选择器的权重


  !important > 行内 > id > class > 标签 > 通配  

二、如何计算

   !important         :  无穷大
   行内               :  1000	
   class |属性|伪类   :  10
   标签               :  1
   * (通配)           :  0

        .o-div与div中间无论是什么都代表他俩是加起来的
        
        .o-div div{
            background:blue;
        }


可以累加但是不能跨级（不能超过上级的数值即使累加的再多也不能超过一个上级的量）

例子：
    .g-container div =====》   class + 标签 = 11

    div #gPic        =====》   标签 + id =101
    
   选择器相同(或者计算值相等)的情况下 后者覆盖前者