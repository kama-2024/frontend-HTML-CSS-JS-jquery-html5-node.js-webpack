1.背景色 : background-color

    background:red;


2.背景图 ： background-image

    background:url('xxx.png')


    a.规定如何重复背景图像

           background-repeat-x    : 横向	
                      repeat-y    : 纵向
                      no-reapat   : 不重复    
可以简化直接放在图片名字的后面
     background:url('style.png') no-repeat;

    b.背景图的起始位置
     left   right top         x    y
        background-position: 100% 100%                        
        background-position: x y
        background-position: center 
    例子： background-position： right 【默认值：cente】
    *****只设置了X方向 ，Y默认为center

也可以简化直接放在图片名字后面 
   background:url('style.png') no-repeat center;

   图像的起始位置时：0，0.剧中50%，右下角10%，100%

   c.规定背景图尺寸

      background-size： 关键字、百分比、数字

            1、关键字
                 图片大于盒子尺寸====>缩小  [contain]
                 图片小于盒子尺寸====>放大  [cover]  失真
            2、百分比 ： x  y 

            *****只设置了x方向，系统会自动算y值 【按照比例算】





