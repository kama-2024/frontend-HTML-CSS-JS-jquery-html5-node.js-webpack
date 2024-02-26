一、CSS是什么

   层叠样式表（英文全称：Cascading Style Sheelts）

二、CSS可以干什么 
   
   简单来说就是修饰网页 增加样式 使网页变的更好看

三、CSS行内样式
    
    1、行内样式

          格式:
             <div style='background: red;'></div>
                   
    2、嵌入式

        格式：
        <style type="text/css">
  
        div{
            background:red;
        }
        span{
            background:red;
        }
        input{
            background:red;
      }
      </style>

        位置：
        hand中写入    

    3、连接式
       位置： head中写入，不限制次数
       标签：link：定义文档与外资源的关系
       格式：
<link rel="stylesheet" type=”txet/css“ href="">

           ***rel:规定当前文档与被链接文档之间的关系***

    4、导入式

      格式：@import url('style.css')

      a.css
          @import url('b.css')

          b.css








