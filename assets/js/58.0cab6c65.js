(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{320:function(e,_,v){"use strict";v.r(_);var t=v(28),r=Object(t.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"restful-api简介和实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api简介和实践"}},[e._v("#")]),e._v(" RESTful API简介和实践")]),e._v(" "),v("h2",{attrs:{id:"restful-api简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api简介"}},[e._v("#")]),e._v(" RESTful API简介")]),e._v(" "),v("h3",{attrs:{id:"_1-什么是restful-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是restful-api"}},[e._v("#")]),e._v(" 1. 什么是RESTful API")]),e._v(" "),v("p",[e._v("首先"),v("code",[e._v("REST")]),e._v("是个单词，"),v("code",[e._v("ful")]),e._v("是形容词，"),v("code",[e._v("API")]),e._v("是软件编程接口，"),v("code",[e._v("RESTful API")]),e._v("就是符合"),v("code",[e._v("REST")]),e._v("架构风格的"),v("code",[e._v("API")])]),e._v(" "),v("h3",{attrs:{id:"_2-restful-api长什么样"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-restful-api长什么样"}},[e._v("#")]),e._v(" 2. RESTful API长什么样")]),e._v(" "),v("p",[e._v("前面我们在"),v("code",[e._v("REST和它的6个限制")]),e._v("这专题中通过统计接口限制讲述了"),v("code",[e._v("RESTful API")]),e._v("应该长什么样子，下面我们会具体的说一下包含的部分：")]),e._v(" "),v("ul",[v("li",[e._v("基本的URI：比如"),v("code",[e._v("https://api.github.com/users")])]),e._v(" "),v("li",[e._v("标准的HTTP方法：比如"),v("code",[e._v("GET")]),e._v(","),v("code",[e._v("POST")]),e._v(","),v("code",[e._v("PUT")]),e._v(","),v("code",[e._v("PATCH")]),e._v(","),v("code",[e._v("DELETE")])]),e._v(" "),v("li",[e._v("传输的数据媒体类型：比如"),v("code",[e._v("JSON")]),e._v(","),v("code",[e._v("XML")])])]),e._v(" "),v("p",[e._v("我们拿"),v("code",[e._v("github")]),e._v("上面仓库的增删改查来说明一下，具体可查看"),v("a",{attrs:{href:"https://developer.github.com/v3/repos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("github接口说明文档"),v("OutboundLink")],1)]),e._v(" "),v("ul",[v("li",[e._v("查看仓库列表： "),v("code",[e._v("GET /user/repos")])]),e._v(" "),v("li",[e._v("创建一个仓库： "),v("code",[e._v("POST /user/repos")]),e._v("(个人)，"),v("code",[e._v("POST /orgs/:org/repos")]),e._v("(组织)")]),e._v(" "),v("li",[e._v("更新一个仓库： "),v("code",[e._v("PATCH /repos/:owner/:repo")]),e._v("（这里的"),v("code",[e._v("PATCH")]),e._v("表示部分更新，一般"),v("code",[e._v("PUT")]),e._v("表示整体替换）")]),e._v(" "),v("li",[e._v("删除一个仓库："),v("code",[e._v("DELETE /repos/:owner/:repo")])]),e._v(" "),v("li",[e._v("转移一个仓库："),v("code",[e._v("POST /repos/:owner/:repo/transfer")]),e._v("(不属于增删改查的特例)")])]),e._v(" "),v("h2",{attrs:{id:"restful-api最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api最佳实践"}},[e._v("#")]),e._v(" RESTful API最佳实践")]),e._v(" "),v("h3",{attrs:{id:"_1-请求设计规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求设计规范"}},[e._v("#")]),e._v(" 1. 请求设计规范")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("URI")]),e._v("使用名词，尽量用复数，比如"),v("code",[e._v("/users")])]),e._v(" "),v("li",[v("code",[e._v("URI")]),e._v("使用嵌套表示关联关系，比如"),v("code",[e._v("/users/12/repos/5")]),e._v("(表示用户"),v("code",[e._v("id")]),e._v("为"),v("code",[e._v("12")]),e._v("的编号为"),v("code",[e._v("5")]),e._v("的仓库)")]),e._v(" "),v("li",[e._v("使用正确的"),v("code",[e._v("HTTP")]),e._v("方法："),v("code",[e._v("GET")]),e._v(","),v("code",[e._v("POST")]),e._v(","),v("code",[e._v("PUT")]),e._v(","),v("code",[e._v("DELETE")])]),e._v(" "),v("li",[e._v("不符合"),v("code",[e._v("CURD")]),e._v("(增删改查)的情况：\n"),v("ul",[v("li",[e._v("（推荐）"),v("code",[e._v("POST")]),e._v("方式 + 动词: 前面在github中的转移仓库就用这种方法（"),v("code",[e._v("POST /repos/:owner/:repo/transfer")]),e._v("）")]),e._v(" "),v("li",[e._v("使用"),v("code",[e._v("action")]),e._v("：在查询字符串中添加"),v("code",[e._v("action=xxx")])]),e._v(" "),v("li",[e._v("设计成子资源")])])])]),e._v(" "),v("h3",{attrs:{id:"_2-响应设计规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应设计规范"}},[e._v("#")]),e._v(" 2. 响应设计规范")]),e._v(" "),v("p",[e._v("下面我们会列举响应的设计规范，并拿github的实际例子来说明一下：")]),e._v(" "),v("ul",[v("li",[e._v("查询: 每一个响应都能被查询，被过滤的，加上限制条件，就只能返回符合这些条件的响应值")]),e._v(" "),v("li",[e._v("分页: 响应信息过多，我们应该添加分页信息，比如第几页，有多少条信息等等")]),e._v(" "),v("li",[e._v("字段过滤: 这个和查询不一样，返回的字段只能是你指定的字段")]),e._v(" "),v("li",[e._v("状态码：比如2开头表示正确，3开头表示重定向，4开头表示错误，5开头表示服务端错误")]),e._v(" "),v("li",[e._v("错误处理：请求是错的，尽量按照规范的，或者通用的格式去返回错误信息")])]),e._v(" "),v("p",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("查询")]),e._v("来讲，比如请求"),v("code",[e._v("'https://api.github.com/users?since=5000'")]),e._v(",如果没有"),v("code",[e._v("since")]),e._v("查询参数，返回的列表是从id为1的用户开始的1万条数据，但是有了"),v("code",[e._v("since")]),e._v("参数，我们就过滤掉了1到5000的数据，返回的数据是从5001开始的后面5000条数据，具体参照"),v("a",{attrs:{href:"https://developer.github.com/v3/users/#parameters-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网说明"),v("OutboundLink")],1)],1),e._v(" "),v("p",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("分页")]),e._v("来讲, 比如请求"),v("code",[e._v("'https://api.github.com/user/repos?page=2&per_page=100'")]),e._v(",通过查询参数中的"),v("code",[e._v("page")]),e._v("来表示页数，通过"),v("code",[e._v("per_page")]),e._v("来表示每页有100条数据，具体参照"),v("a",{attrs:{href:"https://developer.github.com/v3/#pagination",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网说明"),v("OutboundLink")],1)],1),e._v(" "),v("p",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("字段过滤")]),e._v("来讲，"),v("code",[e._v("github")]),e._v("好像没有这个功能，但是我们可以通过比如"),v("code",[e._v("'https://api.github.com/user/les150?fileds=name'")]),e._v("这种方式选择响应的数据中只有"),v("code",[e._v("name")]),e._v("字段")],1),e._v(" "),v("p",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("错误处理")]),e._v("来讲，"),v("code",[e._v("github")]),e._v("是用json类型的数据返回错误信息，具体参照"),v("a",{attrs:{href:"https://developer.github.com/v3/#client-errors",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网说明"),v("OutboundLink")],1)],1),e._v(" "),v("h3",{attrs:{id:"_3-安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-安全"}},[e._v("#")]),e._v(" 3. 安全")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("HTTPS")]),e._v(": 采用"),v("code",[e._v("HTTPS")]),e._v("协议进行数据传输")],1),e._v(" "),v("li",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("用户鉴权")]),e._v(": 用户登录后才能去访问某些接口，防止用户数据泄露，具体参照"),v("a",{attrs:{href:"https://developer.github.com/v3/#authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网说明"),v("OutboundLink")],1)],1),e._v(" "),v("li",[v("font",{attrs:{color:"#3eaf7c"}},[e._v("限流")]),e._v(": 防止故意攻击网址的人不停请求接口，让服务器炸掉，在分层系统中添加限流层,具体参照"),v("a",{attrs:{href:"https://developer.github.com/v3/#rate-limiting",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网说明"),v("OutboundLink")],1)],1)]),e._v(" "),v("h2",{attrs:{id:"开发者友好"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发者友好"}},[e._v("#")]),e._v(" 开发者友好")]),e._v(" "),v("ul",[v("li",[e._v("文档：健全的接口文档说明会让开发者更加友好的使用你的接口")]),e._v(" "),v("li",[e._v("超媒体：善用链接")])])])}),[],!1,null,null,null);_.default=r.exports}}]);