!function() {
  var text1 = `/* 你好，我叫张子浩
 * 现在这个网页什么都没有，
 * 我准备现写一些 CSS 代码，然后让它生效。
 * 首先我给所有元素加上 transition 属性用于过渡
 * 这样不会显得页面变化得太奇怪。 */
    
    * {
        transition: all 1s;
    }

/* 现在我们需要改变 body 的颜色，
 * 也加上 padding */

    body {
        background-color: #efefef;
        padding: 16px;
    }
      
/* 为我们的内容加上样式 */
    
    .main {
        border: 1px solid #a5a5a5;
        border-radius: 12px;
        padding: 16px;
        background-color: #ececec;
    }

/* 看，我们的 CSS 都生效了，是不是很神奇？ 
 * 哦，我忘记了这些 CSS 代码在你这边没有语法高亮，
 * 这太糟糕了，不过别担心，我马上帮你写样式 */

    .token.property {
        color: #905;
    }

    .token.selector {
        color: #690;
    }

    .token.punctuation {
        color: #999;
    }

/* 希望在你那边看上去效果会好一些。
 * 现在我会新建一张纸，
 * 因为我想向你展示一些我的个人信息。
 * 新的 div 已经被创建 */
    `
    
    var text2 = `
    .paper {
        width: 54%;
        margin-left: 16px;
        background-color: white;
        padding:16px;
    }
    .main {
        width: 46%;
    }
    
    #div-i-content {
        display: flex;
    }
    `
    
    var mdText = `
# 自我介绍
我叫张子浩，通过自学学习了前端知识，
目前正在寻找初级前端开发的岗位。
    
# 联系方式
1. 邮箱： nbhaohao@163.com
2. 个人博客：[blog] 
3. github: [github]
4. 在线简历： [resume]
    
    
[github]: https://github.com/nbhaohao
[resume]: https://nbhaohao.github.io/myResume/index.html
[blog]: https://nbhaohao.github.io
## 谢谢观看。
    `
    var main = document.querySelector(".main")
    var mainStyleTag = document.querySelector("#style-i-mainStyle")    
    function writeCssAndHTML(prevContent, text, callback) {
        var z = 0
        var id2 = setInterval(function() {
            z++   
            main.innerHTML = prevContent + Prism.highlight(text.substr(0, z), Prism.languages.css, 'css');
            mainStyleTag.innerHTML += text[z - 1]
            document.documentElement.scrollTop = document.documentElement.scrollHeight
            if (z >= text.length) {
                clearInterval(id2)
                callback(main.innerHTML)
            }
        }, 80)
    }
    function createNewPaper(preContent, callback) {
        var newPaper = document.createElement("pre")
        newPaper.className = "paper markdown-body"
        var contentDiv = document.querySelector("#div-i-content")
        contentDiv.appendChild(newPaper)
        callback(preContent)
    }

    function writeMarkDown() {
        var prePaper = document.querySelector(".paper")
        var z = 1
        var id2 = setInterval(function() {
            prePaper.innerHTML = mdText.substr(0, z)
            z++        
            if (z >= mdText.length) {
                clearInterval(id2)
                prePaper.innerHTML = marked(mdText)
            }
        }, 80)      
    }    

    function scrollToTop(callback) {
        var allHeight = document.documentElement.scrollTop
        var q = allHeight
        var id3 = setInterval(function() {
            q = q - 50
            document.documentElement.scrollTop = q
            if (q <= 0) {
                clearInterval(id3)
                callback()
            }
        }, 25)
    }

    writeCssAndHTML("", text1, function(prevContent) {
        createNewPaper(prevContent, function(prevContent2) {
            writeCssAndHTML(prevContent2, text2, function() {
                scrollToTop(writeMarkDown)
            })
        })
    })
}.call()
