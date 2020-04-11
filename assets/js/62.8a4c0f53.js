(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{322:function(_,v,o){"use strict";o.r(v);var e=o(28),t=Object(e.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"session和jwt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#session和jwt"}},[_._v("#")]),_._v(" Session和JWT")]),_._v(" "),o("h2",{attrs:{id:"session简介"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#session简介"}},[_._v("#")]),_._v(" Session简介")]),_._v(" "),o("p",[o("code",[_._v("Session")]),_._v("是一种非常流行的用户认证和授权的方式，在此之前我们先说说什么是用户认证和授权")]),_._v(" "),o("ul",[o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("认证")]),_._v("：简单的说就是让服务器知道你是谁")],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("授权")]),_._v("：就是让服务器知道什么你能干什么你不能干")],1)]),_._v(" "),o("p",[_._v("下面说一下"),o("code",[_._v("Session")]),_._v("的工作原理：\n"),o("img",{attrs:{src:_.$withBase("/session.png"),height:"500px",width:"500px",alt:"session"}})]),_._v(" "),o("ul",[o("li",[_._v("当用户使用用户名和密码登录后，在服务端会生成用户的"),o("code",[_._v("session")]),_._v("数据，并存放在缓存数据库中")]),_._v(" "),o("li",[_._v("然后给客户端响应的时候会通过"),o("code",[_._v("Set-Cookie")]),_._v("这样的头向客户端种植"),o("code",[_._v("cookie")]),_._v("，内容就是"),o("code",[_._v("session")]),_._v("的ID")]),_._v(" "),o("li",[_._v("客户端下一次请求的时候会在"),o("code",[_._v("http")]),_._v("请求头中携带"),o("code",[_._v("Cookie")]),_._v("数据")]),_._v(" "),o("li",[_._v("服务端拿到请求，解析出"),o("code",[_._v("session")]),_._v("的Id，并出缓存数据库当中进行对照，如果有表明你已经登录，正确返回你请求的数据，没有就需要你登录")]),_._v(" "),o("li",[_._v("退出登录要么主动清除客户端中的"),o("code",[_._v("cookie")]),_._v(",服务端如果想强制前端认证，可以清除缓存数据库中的"),o("code",[_._v("session")]),_._v("数据即可")])]),_._v(" "),o("p",[o("code",[_._v("Session")]),_._v("的优势：")]),_._v(" "),o("ul",[o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("相比JWT,最大的优势就在于可以主动清除session,而JWT它的用户信息则以令牌的方式保存在客户端，只要没有过期，就能一直拿着token进行用户授权和认证")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("session保存在服务端，相对比较安全")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("结合cookie使用，较为灵活。兼容性好")])],1)]),_._v(" "),o("p",[o("code",[_._v("Session")]),_._v("的劣势：")]),_._v(" "),o("ul",[o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("cookie + session在跨域场景表现并不好,因为cookie具有不可跨域性，是因为设置cookie的时候不光有sessionID，还有domain变量，表示生效的域名，默认只在这个域名条件下cookie才生效")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("分布式部署，需要做多机共享session机制")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("基于cookie的机制很容易被CSRF")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("查询seesion信息可能会有数据库查询操作")])],1)]),_._v(" "),o("p",[o("code",[_._v("Session")]),_._v("相关概念的介绍")]),_._v(" "),o("ul",[o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("SessionStorage")]),_._v(": 存储在客户端，仅在当前会话下有效，关闭页面或者浏览器就会被清除")],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("LocalStorage")]),_._v("：存储在客户端，除非手动清除，否则永久保存（后面的"),o("code",[_._v("JWT")]),_._v("基本都用"),o("code",[_._v("LocalStorage")]),_._v("来保存令牌）")],1)]),_._v(" "),o("h2",{attrs:{id:"jwt简介"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jwt简介"}},[_._v("#")]),_._v(" JWT简介")]),_._v(" "),o("p",[o("code",[_._v("JWT")]),_._v("的全称为"),o("font",{attrs:{color:"#3eaf7c"}},[_._v("JSON Web Token")]),_._v(",是一个开发的标准（RFC 7519）")],1),_._v(" "),o("p",[_._v("jwt是一种轻量级的、简单的方案。主要思路是后端拿着用户名、密码请求后端，后端验证通过后，返回给前端一个token（包含用户id、过期时间等的json），这个token是个加过密的json字符串。前端把这个字符串放在http请求头（可以跨域，放在cookie就没法跨域），每次请求都带上这个参数，后端就能验证当前用户。")]),_._v(" "),o("h3",{attrs:{id:"_1-jwt的概念："}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-jwt的概念："}},[_._v("#")]),_._v(" 1. JWT的概念：")]),_._v(" "),o("ul",[o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("定义了一种紧凑却独立的方式，可以将各方之间的信息作为JSON对象进行安全传输")])],1),_._v(" "),o("li",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("该信息可以验证和信任，因为是经过数字签名的")])],1)]),_._v(" "),o("h3",{attrs:{id:"_2-jwt的构成："}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-jwt的构成："}},[_._v("#")]),_._v(" 2. JWT的构成：")]),_._v(" "),o("p",[o("code",[_._v("JWT")]),_._v("有三个部分组成，分别如下，但是由于最后被"),o("code",[_._v("base64URL")]),_._v("编码简化了，所以是一段很简介的乱码，我们用不同地颜色表示：")]),_._v(" "),o("p",[o("font",{attrs:{color:"#3eaf7c"}},[_._v("eyhbGciOiAiSFMyNTYiLCAidHlwIjopIkpXVCJ9")]),_._v("."),o("font",{attrs:{color:"#CC99CD"}},[_._v("eyJ1c2vYX2lkIjoiemhhbmdzYW4ifQ")]),_._v("."),o("font",{attrs:{color:"#f08d49"}},[_._v("5EECrcdrr43Rtvtysres9RrER94re")])],1),_._v(" "),o("p",[o("strong",[_._v("1. "),o("font",{attrs:{color:"#3eaf7c"}},[_._v("头部(Header)")])],1),_._v("：")]),_._v(" "),o("p",[_._v("头部的本质是个"),o("code",[_._v("json")]),_._v(",里面有两个字段如下：")]),_._v(" "),o("ul",[o("li",[o("strong",[_._v("typ")]),_._v(": "),o("code",[_._v("token")]),_._v("的类型，或者令牌的类型，这里固定为JWT")]),_._v(" "),o("li",[o("strong",[_._v("alg")]),_._v(": 使用的"),o("code",[_._v("hash")]),_._v("算法，例如"),o("code",[_._v("HMAC")]),_._v(","),o("code",[_._v("SHA256")]),_._v("或者"),o("code",[_._v("RSA")])])]),_._v(" "),o("p",[_._v("我们可以看一下"),o("code",[_._v("Header")]),_._v("编码的前后样子是什么样子的：")]),_._v(" "),o("ul",[o("li",[_._v("编码前："),o("code",[_._v('{"alg":"HS256","typ":"JWT"}')])]),_._v(" "),o("li",[_._v("编码后："),o("code",[_._v("eyhbGciOiAiSFMyNTYiLCAidHlwIjopIkpXVCJ9")])])]),_._v(" "),o("p",[o("strong",[_._v("2. "),o("font",{attrs:{color:"#3eaf7c"}},[_._v("有效载荷(Payload)")])],1),_._v("：")]),_._v(" "),o("p",[_._v("有效载荷的内容：")]),_._v(" "),o("ul",[o("li",[o("code",[_._v("JWT")]),_._v("中的"),o("code",[_._v("Payload")]),_._v("就是真实存储我们需要传递信息的这部分，比如用户ID，用户名等等")]),_._v(" "),o("li",[_._v("另外还包括元数据，如过期时间，发布人等")]),_._v(" "),o("li",[_._v("与"),o("code",[_._v("Header")]),_._v("不同，这里的"),o("code",[_._v("Payload")]),_._v("是可以加密的")])]),_._v(" "),o("p",[_._v("有效载荷的编码前后：")]),_._v(" "),o("ul",[o("li",[_._v("编码前："),o("code",[_._v('{"user_id":"zhangsan"}')])]),_._v(" "),o("li",[_._v("编码后（base64）："),o("code",[_._v("eyJ1c2vYX2lkIjoiemhhbmdzYW4ifQ==")])]),_._v(" "),o("li",[_._v("编码后（base64URL）："),o("code",[_._v("eyJ1c2vYX2lkIjoiemhhbmdzYW4ifQ")])])]),_._v(" "),o("p",[o("strong",[_._v("3. "),o("font",{attrs:{color:"#3eaf7c"}},[_._v("签名(Signature)")])],1),_._v("：")]),_._v(" "),o("p",[_._v("签名的内容：")]),_._v(" "),o("ul",[o("li",[_._v("对"),o("code",[_._v("Header")]),_._v("和"),o("code",[_._v("Payload")]),_._v("部分进行签名")]),_._v(" "),o("li",[_._v("保证"),o("code",[_._v("token")]),_._v("在传输过程中没有被篡改或者破坏")])]),_._v(" "),o("p",[_._v("算法的完整过程：")]),_._v(" "),o("ul",[o("li",[o("code",[_._v('Signature = HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)')])]),_._v(" "),o("li",[_._v("生成的签名依旧需要"),o("code",[_._v("base64URL")]),_._v("编码")])]),_._v(" "),o("h3",{attrs:{id:"_3-jwt的工作原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-jwt的工作原理"}},[_._v("#")]),_._v(" 3. JWT的工作原理")]),_._v(" "),o("img",{attrs:{src:_.$withBase("/jwt.jpg"),alt:"jwt"}}),_._v(" "),o("ul",[o("li",[_._v("首先前端通过用户名和密码进行"),o("code",[_._v("post")]),_._v("请求")]),_._v(" "),o("li",[_._v("然后服务端对用户名和密码核对后，将用户id和其他信息作为有效载荷"),o("code",[_._v("Payload")]),_._v(",然后三个部分的编码加起来形成"),o("code",[_._v("JWT")]),_._v(",类似我们前面三个不同颜色组合的一段乱码.将"),o("code",[_._v("JWT")]),_._v("作为登录成功的返回结果，比如"),o("code",[_._v("token: '...JWT...'")])]),_._v(" "),o("li",[_._v("客户端拿到这个"),o("code",[_._v("token")]),_._v("将其保存在"),o("code",[_._v("SessionStorage")]),_._v("或者"),o("code",[_._v("LocalStorage")]),_._v("当中，前端退出就删除客户端中的这个"),o("code",[_._v("token")]),_._v("即可")]),_._v(" "),o("li",[_._v("客户端下次请求的时候会将"),o("code",[_._v("token")]),_._v("加上"),o("code",[_._v("Bearer")]),_._v("作为"),o("code",[_._v("HTTP")]),_._v("头中"),o("code",[_._v("Authorization")]),_._v("的内容发出去，比如"),o("code",[_._v("Authorization: Bearer...JWT...")])]),_._v(" "),o("li",[_._v("后端检查是否存在，存在则验证"),o("code",[_._v("JWT")]),_._v("字符串的有效性，例如签名是否正确，令牌是否过期等")]),_._v(" "),o("li",[_._v("后端验证通过后，使用"),o("code",[_._v("JWT")]),_._v("当中包含的用户信息并返回正确的结果")])]),_._v(" "),o("h2",{attrs:{id:"jwt对session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jwt对session"}},[_._v("#")]),_._v(" JWT对session")]),_._v(" "),o("h3",{attrs:{id:"_1-可拓展性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-可拓展性"}},[_._v("#")]),_._v(" 1. 可拓展性")]),_._v(" "),o("p",[_._v("随着用户的增加，我们必然要扩展程序，"),o("font",{attrs:{color:"#3eaf7c"}},[_._v("垂直扩展")]),_._v("就是要增加服务器。"),o("font",{attrs:{color:"#3eaf7c"}},[_._v("横向拓展")]),_._v("就是要增强硬件性能，比如磁盘，内存等等。那么如果是"),o("code",[_._v("session")]),_._v("你就必须建议很系统的"),o("code",[_._v("session")]),_._v("存储系统，否则没有办法共享在不同地服务器和线程之间")],1),_._v(" "),o("p",[_._v("而"),o("code",[_._v("JWT")]),_._v("这种身份验证是"),o("font",{attrs:{color:"#CC99CD"}},[_._v("无状态的")]),_._v("，不需要在服务端存储用户信息")],1),_._v(" "),o("h3",{attrs:{id:"_2-安全性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-安全性"}},[_._v("#")]),_._v(" 2. 安全性")]),_._v(" "),o("ul",[o("li",[o("code",[_._v("XSS攻击")]),_._v("，我们需要利用加密和签名这两个关键点")]),_._v(" "),o("li",[o("code",[_._v("CSRF")]),_._v("，我们需要有响应的防范措施")]),_._v(" "),o("li",[o("code",[_._v("中间人攻击")]),_._v("，使用"),o("code",[_._v("HTTPS")]),_._v("协议")])]),_._v(" "),o("h3",{attrs:{id:"_3-restful"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-restful"}},[_._v("#")]),_._v(" 3. RESTful")]),_._v(" "),o("p",[o("code",[_._v("REST")]),_._v("要求软件架构是无状态的，所以"),o("code",[_._v("session")]),_._v("这种在服务端存放状态的显然不能出现在"),o("code",[_._v("RESTful")]),_._v("风格的软件当中，因为违反了六个限制之一")]),_._v(" "),o("h3",{attrs:{id:"_4-性能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能"}},[_._v("#")]),_._v(" 4. 性能")]),_._v(" "),o("p",[_._v("首先"),o("code",[_._v("JWT")]),_._v("的性能和"),o("code",[_._v("Session")]),_._v("各有利弊：")]),_._v(" "),o("ul",[o("li",[_._v("因为"),o("font",{attrs:{color:"#3eaf7c"}},[_._v("在http请求中会携带大量的用户信息，会产生大量的开销，而session只需要一个id")]),_._v("，从"),o("font",{attrs:{color:"#CC99CD"}},[_._v("空间")]),_._v("的角度来说，"),o("code",[_._v("JWT")]),_._v("要弱一些")],1),_._v(" "),o("li",[_._v("但是"),o("font",{attrs:{color:"#3eaf7c"}},[_._v("session用户信息存放在服务端，会有一个查询的过程")]),_._v("，所以从"),o("font",{attrs:{color:"#CC99CD"}},[_._v("时间")]),_._v("的角度讲，"),o("code",[_._v("session")]),_._v("要弱一些")],1)]),_._v(" "),o("h3",{attrs:{id:"_5-时效性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-时效性"}},[_._v("#")]),_._v(" 5.时效性")]),_._v(" "),o("p",[_._v("这方面讲"),o("code",[_._v("JWT")]),_._v("要差一些，因为只能等到过期，而"),o("code",[_._v("session")]),_._v("可以在服务端主动去销毁用户登录的信息")])])}),[],!1,null,null,null);v.default=t.exports}}]);