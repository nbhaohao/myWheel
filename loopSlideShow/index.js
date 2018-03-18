var AUTO_PLAY_INDEX
var IMGS_LENGTH
var statusObj = {
    "leave": "current enter",
    "enter": "current leave",
    "current": "enter leave",
}
var init = () => {
    AUTO_PLAY_INDEX = 1
    IMGS_LENGTH = $(".images img").length
    $(".images img:nth-child(1)").addClass("current").siblings().addClass("enter")
}

var setImgOneStatus = ($node, state) => {
    return $node.removeClass(statusObj[state]).addClass(state)
}

var hideCurrentImg = (index) => {
    setImgOneStatus($(`.images img:nth-child(${index})`), "leave")
    .one("transitionend", (e) => {
        setImgOneStatus($(e.currentTarget), "enter")
    })
}

var showNextImg = (index) => {
    setImgOneStatus($(`.images img:nth-child(${index})`), "current")
}

var autoPlay = () => {
    setInterval(() => {
        hideCurrentImg(transNumToIndex(AUTO_PLAY_INDEX))
        showNextImg(transNumToIndex(AUTO_PLAY_INDEX + 1))     
        resetAutoIndex()
    }, 3000)
}

var resetAutoIndex = () => {
    if (AUTO_PLAY_INDEX === IMGS_LENGTH) {
        AUTO_PLAY_INDEX = 0
    }
    AUTO_PLAY_INDEX += 1
}

var transNumToIndex = (n) => {
    let value = n % IMGS_LENGTH
    return value === 0 ? IMGS_LENGTH : value
}

var __main = () => {
    init()
    autoPlay()                 
}

__main()






// setTimeout(() => {
//     $(".images img:nth-child(1)").removeClass("current enter").addClass("leave")
//     .one("transitionend", (e) => {
//         $(e.currentTarget).addClass("enter")
//     })
//     $(".images img:nth-child(2)").removeClass("enter leave").addClass("current")
// }, 3000)
// setTimeout(() => {
//     $(".images img:nth-child(2)").removeClass("current enter").addClass("leave")
//     .one("transitionend", (e) => {
//         $(e.currentTarget).addClass("enter")   
//     })             
//     $(".images img:nth-child(3)").removeClass("enter leave").addClass("current")
// }, 6000)
// setTimeout(() => {
//     $(".images img:nth-child(3)").removeClass("current enter").addClass("leave")
//     .one("transitionend", (e) => {
//         $(e.currentTarget).addClass("enter")
//     })
//     $(".images img:nth-child(1)").removeClass("enter leave").addClass("current")
// }, 9000)
// setTimeout(() => {
//     $(".images img:nth-child(1)").removeClass("current enter").addClass("leave")
//     .one("transitionend", (e) => {
//         $(e.currentTarget).addClass("enter")   
//     })             
//     $(".images img:nth-child(2)").removeClass("enter leave").addClass("current")
// }, 12000)    