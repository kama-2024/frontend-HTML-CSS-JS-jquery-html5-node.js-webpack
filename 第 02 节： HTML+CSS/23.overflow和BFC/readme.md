overflow : 当内容溢出的时候的表现

1.值

    溢出隐藏           ： hidden
    溢出隐藏但是有滚动条： scroll
                         overflow-y: scroll; 纵向
                         overflow-x: scroll; 横向

2.BFC

    overflow 还可以清楚浮动 

    疑问： 为什么overflow：hidden 可以清楚浮动？

    解答:

        1. 了解BFC
            解释：BFC ： 块级格式化上下文
        2.BFC的原则
            如果一个元素具有BFC，那么内部元素在怎么变化，都不会影响到外面的元素    

            如果子元素的浮动造成主元素的塌陷 就是他作用的时候
        3.如何出发BFC呢？
            
            html根元素    
            float不是none
            overflow的值是：auto、scroll、hidden
            display的值是：table-cell......
            position的值不是relative和static