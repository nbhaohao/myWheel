!function() {
    var codeTest = `/* 大家好， 
    * 今天我准备使用 CSS 制作一个 "飞天小魔女" 
    * 我们先准备画布 */
    .show {
        background: linear-gradient(to left, #00c6ff , #0072ff);
    }
    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(0.6, 0.6);
    }
    /* 这是整体 */
    .body {
        position: relative;
        height: 260px;
        width: 300px;
    }
    /* 这是头部 */
    .head {
        height: 260px;
        width: 300px;
        border-radius: 48%;
        background: #FCDDC9;
        border: 10px solid #000;
        position: absolute;
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
    }
    /* 这是笑脸 */
    .smile {
        position: absolute;
        height: 80px;
        width: 60px;
        border-radius: 50%;
        left: 50%;
        margin-left: -30px;
        bottom: 8px;
        border-bottom: 8px solid #000;
    }
    /* 这是头发部分 */
    .hair::before, .hair::after, .hair_overlay {
        content: "";
        position: absolute;
        height: 100px;
        width: 350px;
        background: yellow;
        border-radius: 50%;
        top: -20px;
        z-index: 2;
        border-bottom: 10px solid #000;
    }
    .hair::before, .hair_overlay {
        left: -100px;
        transform: rotate(-20deg);
    }
    .hair_overlay {
        border-bottom: 0;
        z-index: 3;
    }      
    .hair:after {
        right: -100px;
        transform: rotate(20deg);
    }     
    /* 这是眼睛部分 */
    .eye {
        z-index: 1;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #000;
        height: 150px;
        width: 160px;
        background: #fff;
        position: absolute;
        top: 50px;
    }     
    .left_eye {
        left: -20px;
    }
    .right_eye {
        right: -20px;
    }    
    .blue {
        background: #3EABCC;
        height: 140px;
        width: 140px;
        position: absolute;
        bottom: 0;
        z-index: 1;
        border-radius: 50%;
    }     
    .left_eye .blue {
        right: -10px;
    }
    .right_eye .blue {
        left: -10px;
    }    
    .black {
        background: #000;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 15px;
        z-index: 1;
        border-radius: 50%;
    }  
    .left_eye .black {
        right: 12px;
    }
    .right_eye .black {
        left: 12px;
    }   
    .left_eye .black:after, .right_eye .black:after {
        content:"";
        height: 40px;
        width: 40px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
    }  
    /* 这是身体部分 */
    .stomach {
        height: 130px;
        width: 100px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
        z-index: -1;
        margin-top: 10px;
    }     
    .stomach:before {
        height: 0;
        width: 80px;
        display: block;
        left: -30px;
        border-bottom: 140px solid #000;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        content:"";
        position: absolute;
    }      
    .stomach > span:nth-child(1) {
        position: relative;
        height: 0;
        width: 60px;
        display: block;
        border-bottom: 40px solid #3EABCC;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: 20px;
        left: 10px;            
    } 
    .stomach > span:nth-child(2) {
        position: relative;
        height: 0;
        width: 90px;
        display: block;
        border-bottom: 40px solid #3EABCC;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: 40px;
        left: -5px;
    }     
    /* 这是腿部 */
    .legs {
        position: absolute;
        left: 50%;
        display: flex;
        transform: translateX(-50%);
        top: 100%;
        margin-top: 10px;
    }     
    .legs span {
        height: 70px;
        display: block;
        width: 30px;
        background: #fff;
        border: 10px solid #000;
        border-bottom-width: 20px;
        border-top: 0;
        border-radius: 0 0 30px 30px;
        position: relative;
    }   
    .legs span:after {
        content:"";
        position: absolute;
        height: 5px;
        background: #000;
        width: 100%;
        bottom: 10px;
    }    
    /* 这是手臂 */
    .hands:before, .hands:after {
        content:"";
        position: absolute;
        background: #FCDDC9;
        height: 100px;
        width: 30px;
        border: 10px solid #000;
        top: 0px;
        border-radius: 0 0 60px 60px;
        z-index: -1;            
    }
    .hands:before {
        left: -40px;
        transform: rotate(25deg);    
        transform-origin: top right;        
    }
    .hands:after {
        right: -40px;
        transform: rotate(-25deg);   
        transform-origin: top left;         
    }      
    /* 这是辫子 */
    .pony:before, .pony:after {
        content:"";
        width: 120px;
        height: 100px;
        border-radius: 100%;
        background: yellow;
        border: 10px solid #000;
        position: absolute;
        top: 0;
        z-index: 10;
    }  
    .pony:before {
        border-top-left-radius: 0;
        left: 100%;
        transform: translateX(-14px) rotate(200deg);
    }
    .pony:after {
        border-top-right-radius: 0;
        right: 100%;
        transform: translateX(14px) rotate(-200deg);
    }     
    /* 完成啦，最后我们加上动画，希望你喜欢 */
    `
    var styleText2 = `
    .hands:before {
        animation: handLeft 2s linear alternate 0s infinite;
    }
    .hands:after {
        animation: handRight 2s linear alternate 0s infinite;
    }
    .hands:before, .hands:after {
        top: 2px;
    }
    .wrapper {
        animation: jump 2s linear alternate 0s infinite;
    }          
    `
    var speedValue = 10
    var intervalEventId 
    var wrapperDiv = document.querySelector(".code")
    var div = wrapperDiv.querySelector("pre")
    var style = document.querySelector("#styleTag")    
    function writeCodeAndCss(prevText, text, callFn) {
        var n = 1
        intervalEventId = setTimeout(function intervalFn() {
            if (n > text.length) {
                callFn(prevText)
            } else {
                div.innerHTML = prevText +  Prism.highlight(text.substring(0, n), Prism.languages.css, 'css')
                style.innerHTML = prevText + text.substring(0, n)
                wrapperDiv.scrollTop = wrapperDiv.scrollHeight
                n += 1
                intervalEventId = setTimeout(intervalFn, speedValue)
            }
        }, speedValue)
    }
    $(".toolsBtn .icon").on("click", function(e) {
        $(e.currentTarget).parent().toggleClass("active")
    })
    function startAnimation() {
        writeCodeAndCss("", codeTest, function(prevText) {
            document.querySelector("#styleTag").insertAdjacentHTML("beforeend", styleText2)
        })
    }
    function showResult() {
        clearTimeout(intervalEventId)
        $(div).html(Prism.highlight(codeTest, Prism.languages.css, 'css'))
        $(style).html(codeTest + styleText2)
        wrapperDiv.scrollTop = wrapperDiv.scrollHeight
    }
    
    function restartAnimation() {
        clearTimeout(intervalEventId)
        $(div).html("")
        $(style).html("")
        wrapperDiv.scrollTop = 0
        startAnimation()
    }
    $("[data-speed]").on("click", function(e) {
        var $self = $(e.currentTarget)
        $self.addClass("activeBtn").siblings().removeClass("activeBtn")
        speedValue = Number($self.attr("data-speed"))
    })
    $("#restartBtn").on("click", function(e) {
        restartAnimation()
    })
    $("#endBtn").on("click", function(e) {
        showResult()
    })
    startAnimation()
}.call()