var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('得到 HTTP 路径\n' + path)
  console.log('查询字符串为\n' + query)
  console.log('不含查询字符串的路径为\n' + pathNoQuery)
  if (path == "/style.css") {
    response.setHeader("Content-Type", "text/css; charset=utf-8")
    response.write(`body{background-color: #ddd;}h1{color: red;}`)
    response.end()
  } 
  else if (path == "/main.js") {
    response.setHeader("Content-Type", "text/javascript; charset=utf-8")
    response.write(`alert("这是JS执行的")`)
    response.end()
  }
  else if (path == "/") {
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    let html = fs.readFileSync("./index3.html", "utf8")
    let amount = fs.readFileSync("./db", "utf8")
    html = html.replace("&&&money&&&", amount)
    response.write(html)
    response.statusCode = 200
    response.end()
  }
  else if (path == "/pay") {
    response.setHeader("Content-Type", "text/javascript; charset=utf-8")
    if (Math.random() > 0.5) {
      let amount = fs.readFileSync("./db", "utf8")
      amount -= 1
      fs.writeFileSync("./db", amount, "utf8")
      response.statusCode = 200
      response.write("alert('哈哈哈,成功')")
    } else {
      response.statusCode = 400
      response.write("alert('呵呵呵，失败')")
    }
    response.end()
  }  
  else {
    response.statusCode = 404
    response.end()
  }
  









  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


