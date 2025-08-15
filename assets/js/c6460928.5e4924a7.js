"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["820"],{7584:function(e,t,r){r.r(t),r.d(t,{default:()=>k});var i=r(5893),s=r(669),a=r(7294),o=r(2834);let l={title:"title_YosL",subtitle:"subtitle_Am6F",heroExample:"heroExample_PHo7",codeCol:"codeCol_TdhX",previewCol:"previewCol_xazq",arrow:"arrow_lT82",ctaRow:"ctaRow_Bun4",cta:"cta_QB5Y",orScroll:"orScroll_rqFP"},n="mid_Yrf3",d="btn_A8lB";function c({url:e,children:t}){return(0,i.jsx)("div",{className:"browser_eYfU",children:(0,i.jsxs)("div",{className:"window_s3U6",children:[(0,i.jsxs)("div",{className:"titlebar_dC8D",children:[(0,i.jsxs)("div",{className:"titlebarButtons_dR7_",children:[(0,i.jsx)("span",{className:d}),(0,i.jsx)("span",{className:d}),(0,i.jsx)("span",{className:d})]}),(0,i.jsx)("div",{className:"urlBar_zrM7",children:e})]}),(0,i.jsx)("div",{className:"windowContent_ezQF",children:(0,i.jsx)("div",{className:"browserContent_KWJw",children:t})})]})})}let p=`package main

import (
    "log"

    "github.com/gofiber/fiber/v2"
)

func main() {
    app := fiber.New()

    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    log.Fatal(app.Listen(":3000"))
}`;function h(){return(0,i.jsx)("section",{className:l.hero,"data-stripe":!0,children:(0,i.jsxs)("div",{className:n,children:[(0,i.jsxs)("div",{className:"center_t7wP",children:[(0,i.jsxs)("h1",{className:l.title,children:["An Express-inspired web framework",(0,i.jsx)("br",{}),"written in Go."]}),(0,i.jsxs)("p",{className:l.subtitle,children:["Fiber is a Go web framework built on top of Fasthttp, the ",(0,i.jsx)("strong",{children:"fastest"})," HTTP engine for Go. It's designed to ",(0,i.jsx)("strong",{children:"ease"})," development with ",(0,i.jsx)("strong",{children:"performance"})," in mind."]})]}),(0,i.jsxs)("div",{className:l.heroExample,children:[(0,i.jsx)("div",{className:l.codeCol,children:(0,i.jsx)(o.Z,{language:"go",children:p})}),(0,i.jsx)("div",{className:l.arrow,children:"\u2192"}),(0,i.jsx)("div",{className:l.previewCol,children:(0,i.jsx)(c,{url:"http://localhost:3000",children:(0,i.jsx)("pre",{children:"Hello, World!"})})})]}),(0,i.jsxs)("div",{className:l.ctaRow,children:[(0,i.jsx)("a",{className:l.cta,href:"https://docs.gofiber.io/",children:"Get Started \u2192"}),(0,i.jsx)("span",{className:l.orScroll,children:"\u2026or scroll to learn more."})]})]})})}let u="codeCol_C3Df",m="title_bryg",b="desc_pnJh";function f({title:e,description:t,code:r,right:s,layout:a="split",columns:l,reversed:n=!1}){return"full"===a?(0,i.jsxs)("div",{className:"featureFull_YLi2",children:[e&&(0,i.jsx)("h3",{className:m,children:e}),t&&(0,i.jsx)("div",{className:b,children:t}),r&&(0,i.jsx)("div",{className:"fullCode_GeUp",children:(0,i.jsx)(o.Z,{language:"go",children:r})})]}):"pair"===a&&l&&2===l.length?(0,i.jsx)("div",{className:"textPairRow_I6yl",children:l.map((e,t)=>(0,i.jsxs)("div",{className:"textPanel_FvIm",children:[(0,i.jsx)("h3",{className:m,children:e.title}),(0,i.jsx)("div",{className:b,children:e.description})]},t))}):(0,i.jsxs)("div",{className:`featureRow_D4BC ${n?"reverse_ig1t":""}`,children:[(0,i.jsxs)("div",{className:"textCol_OZNc",children:[e&&(0,i.jsx)("h3",{className:m,children:e}),t&&(0,i.jsx)("div",{className:b,children:t})]}),s?(0,i.jsx)("div",{className:u,children:s}):r?(0,i.jsx)("div",{className:u,children:(0,i.jsx)(o.Z,{language:"go",children:r})}):null]})}let g=[{title:"Robust Routing",description:(0,i.jsx)(i.Fragment,{children:"Setting up routes for your application has never been so easy! The Express-like route definitions are easy to understand and work with."}),code:`app.Get("/", func (c *fiber.Ctx) error {
    return c.SendString("GET request")
})

app.Get("/:param", func (c *fiber.Ctx) error {
    return c.SendString("param: " + c.Params("param"))
})

app.Post("/", func (c *fiber.Ctx) error {
    return c.SendString("POST request")
})`},{title:"Serve Static Files",description:(0,i.jsx)(i.Fragment,{children:"Serve your static HTML, CSS, and JavaScript files with ease by defining static routes. You can also serve the contents of multiple directories on the same route!"}),code:`app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css

// serve from multiple directories
app.Static("/", "./files")`},{title:"Extreme Performance",layout:"full",description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:"Since Fiber is built on top of Fasthttp, your apps will enjoy unmatching performance! Don't believe us? Here's a benchmark that proves how Fiber shines compared to other frameworks:"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:"/img/benchmark-pipeline.png",alt:"Benchmark graph"})]})},{title:"API-ready",description:(0,i.jsx)(i.Fragment,{children:"Are you building an API server? We've got you covered! Fiber is the perfect choice for building REST APIs in Go. Receiving and sending data is fast and easy!"}),code:`app.Get("/api/posts", func (c *fiber.Ctx) error {
    posts := getPosts() // your logic
    if len(posts) == 0 {
        return c.Status(404).JSON(&fiber.Map{
            "success": false,
            "error":   "There are no posts!",
        })
    }
    return c.JSON(&fiber.Map{
        "success": true,
        "posts":   posts,
    })
})`},{title:"Flexible Middleware Support",description:(0,i.jsxs)(i.Fragment,{children:["Choose from ",(0,i.jsx)("a",{href:"https://docs.gofiber.io/category/-middleware",target:"_blank",rel:"noreferrer",children:"a number of already existing middleware"})," or create your own! Use them to verify and manipulate certain requests in your app before they reach your controller."]}),code:`package main

import "github.com/gofiber/fiber/v2"

func main() {
  app := fiber.New()
  app.Static("/", "./public")
  // app.Static("/", "./public", fiber.Static{Browse: true})
  app.Listen(":3000")
}`},{layout:"pair",columns:[{title:"Low Memory Footprint",description:(0,i.jsx)(i.Fragment,{children:"Fiber's low memory footprint allows you to implement features without worrying too much about how much memory your application will use. This allows you to focus on your application and its business logic, rather than technical particularities."})},{title:"Rapid Programming",description:(0,i.jsx)(i.Fragment,{children:"Take your idea and turn it into reality in no time! Thanks to the well-designed and easy-to-learn API, you can develop your application in record speed (especially if you're coming from an Express.js background)."})}]},{title:"Template Engines",description:(0,i.jsxs)(i.Fragment,{children:["Want to use a different template engine in your Fiber app? Fear no more! Fiber supports multiple template engines, such as Handlebars and Pug, thanks to the ",(0,i.jsx)("a",{href:"https://github.com/gofiber/template",target:"_blank",rel:"noreferrer",children:"template middleware"}),"."]}),code:`package main

import (
    "log"

    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    app := fiber.New(fiber.Config{
        Views: html.New("./views", ".html"),
    })

    app.Get("/", func(c *fiber.Ctx) error {
      return c.Render("index", fiber.Map{
         "Title": "Hello, World!",
      })
    })

    log.Fatal(app.Listen(":3000"))
}`},{title:"WebSocket Support",description:(0,i.jsxs)(i.Fragment,{children:["Use the power of ",(0,i.jsx)("b",{children:"WebSockets"})," in your Fiber app! Build fast interactive user experiences with performance and scalability guaranteed."]}),code:`app.Get("/ws", websocket.New(func(c *websocket.Conn) {
  // Websocket logic
  for {
    mtype, msg, err := c.ReadMessage()
    if err != nil {
      break
    }
    log.Printf("Read: %s", msg)

    err = c.WriteMessage(mtype, msg)
    if err != nil {
      break
    }
  }
  log.Println("Error:", err)
}))`},{title:"Rate Limiter",description:(0,i.jsx)(i.Fragment,{children:"With Fiber, limiting repeated requests to public APIs and endpoints is very simple. No more abusive requests!"}),code:`package main

import (
    "log"
    "time"

    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/limiter"
)

func main() {
  app := fiber.New()

  // 3 requests per 10 seconds max
  app.Use(limiter.New(limiter.Config{
      Expiration: 10 * time.Second,
      Max:        3,
  }))

  // ...

  log.Fatal(app.Listen(":3000"))
}`}];function x(){return(0,i.jsx)("section",{className:"features_bbVg",children:(0,i.jsx)("div",{className:"bands_qHQC",children:g.map((e,t)=>(0,i.jsx)("div",{className:"band_WmUZ","data-stripe":!0,children:(0,i.jsx)("div",{className:`${n} midWide_MWbu`,children:(0,i.jsx)(f,{...e,reversed:t%2==1})})},e.title??t))})})}var w=JSON.parse('[{"url":"https://dev.to/koddr/go-fiber-by-examples-working-with-middlewares-and-boilerplates-3p0m","website":"dev.to","title":"\u{1F4D6} Go Fiber by Examples: Working with middlewares and boilerplates","author":"Vic Sh\xf3stak","date":"september 13, 2021"},{"url":"https://dev.to/koddr/go-fiber-by-examples-testing-the-application-1ldf","website":"dev.to","title":"\u{1F4D6} Go Fiber by Examples: Testing the application","author":"Vic Sh\xf3stak","date":"august 30, 2021"},{"url":"https://dev.to/koddr/go-fiber-by-examples-delving-into-built-in-functions-1p3k","website":"dev.to","title":"\u{1F4D6} Go Fiber by Examples: Delving into built-in functions","author":"Vic Sh\xf3stak","date":"august 24, 2021"},{"url":"https://dev.to/koddr/go-fiber-by-examples-how-can-the-fiber-web-framework-be-useful-487a","website":"dev.to","title":"\u{1F4D6} Go Fiber by Examples: How can the Fiber Web Framework be useful?","author":"Vic Sh\xf3stak","date":"august 16, 2021"},{"url":"https://dev.to/koddr/build-a-restful-api-on-go-fiber-postgresql-jwt-and-swagger-docs-in-isolated-docker-containers-475j","website":"dev.to","title":"\u{1F4D6} Build a RESTful API on Go: Fiber, PostgreSQL, JWT and Swagger docs in isolated Docker containers","author":"Vic Sh\xf3stak","date":"march 22, 2021"},{"url":"https://dev.to/fenny/getting-started-with-fiber-36b6","website":"dev.to","title":"Getting started with Fiber \u26A1","author":"Fenny \u{1F525}","date":"june 10, 2020"},{"url":"https://blog.logrocket.com/express-style-api-go-fiber/","website":"logrocket.com","title":"Building an Express-style API in Go with Fiber","author":"Alexander Nnakwue","date":"june 10, 2020"},{"url":"https://dev.to/koddr/fiber-v1-9-5-how-to-improve-performance-by-817-and-stay-fast-flexible-and-friendly-2dp6","website":"dev.to","title":"Fiber v1.9.6 \u{1F525} How to improve performance by 817% and stay fast, flexible and friendly?","author":"Vic Sh\xf3stak","date":"May 12, 2020"},{"url":"https://blog.yongweilun.me/create-a-travel-list-app-with-go-fiber-angular-mongodb-and-google-cloud-secret-manager-ck9fgxy0p061pcss1xt1ubu8t","website":"yongweilun.me","title":"\u{1F30E} Create a travel list app with Go, Fiber, Angular, MongoDB and Google Cloud Secret Manager","author":"Wei Lun","date":"April 25, 2020"},{"url":"https://tutorialedge.net/golang/basic-rest-api-go-fiber/","website":"tutorialedge.net","title":"Building a Basic REST API in Go using Fiber","author":"Elliot Forbes","date":"April 23, 2020"},{"url":"https://dev.to/jozsefsallai/creating-fast-apis-in-go-using-fiber-59m9","website":"dev.to","title":"Creating Fast APIs In Go Using Fiber","author":"J\xf3zsef Sallai","date":"April 7, 2020"},{"url":"https://dev.to/koddr/are-sure-what-your-lovely-web-framework-running-so-fast-2jl1","website":"dev.to","title":"Is switching from Express to Fiber worth it? \u{1F914}","author":"Vic Sh\xf3stak","date":"April 1, 2020"},{"url":"https://dev.to/koddr/fiber-v1-8-what-s-new-updated-and-re-thinked-339h","website":"dev.to","title":"\u{1F680} Fiber v1.8. What\'s new, updated and re-thinked?","author":"Vic Sh\xf3stak","date":"March 3, 2020"},{"url":"https://dev.to/koddr/fiber-v2-is-out-now-what-s-new-and-is-he-still-fast-flexible-and-friendly-3ipf","website":"dev.to","title":"Fiber released v1.7! \u{1F389} What\'s new and is it still fast, flexible and friendly?","author":"Vic Sh\xf3stak","date":"February 21, 2020"},{"url":"https://dev.to/koddr/welcome-to-fiber-an-express-js-styled-fastest-web-framework-written-with-on-golang-497","website":"dev.to","title":"Welcome to Fiber \u2014 an Express.js styled web framework written in Go with \u2764\uFE0F","author":"Vic Sh\xf3stak","date":"February 3, 2020"}]');function v(){return(0,i.jsx)("section",{className:"mediaSection_VL1A","data-stripe":!0,children:(0,i.jsx)("div",{className:"band_R1Dq",children:(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("h2",{className:"heading_yt1u",children:"Media"}),(0,i.jsx)("div",{className:"list_TWgJ",children:w.map(e=>{let t=[e.author,e.date,e.website||function(e,t){try{return new URL(e).hostname.replace(/^www\./,"")}catch{return(void 0)??""}}(e.url)].filter(Boolean).join(" \u2022 ");return(0,i.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"item_QTEL",children:[(0,i.jsxs)("div",{className:"text_QM79",children:[(0,i.jsx)("div",{className:"title_pUjA",children:e.title}),t&&(0,i.jsx)("div",{className:"meta_yLFB",children:t})]}),(0,i.jsx)("span",{className:"arrow_y4gE","aria-hidden":!0,children:"\u2192"})]},e.url)})})]})})})}function j(){return(0,i.jsx)("section",{"data-stripe":!0,children:(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:"supportCols_xn5z",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Help & Support"}),(0,i.jsxs)("p",{children:["Join our community on ",(0,i.jsx)("strong",{children:"Discord"})," \u2014 ask questions, share, help others."]})]}),(0,i.jsx)("div",{className:"discordIframeWrap_Esrd",children:(0,i.jsx)("iframe",{src:"https://discordapp.com/widget?id=704680098577514527&theme=dark",width:"350",height:"300",frameBorder:0,title:"Discord"})})]})})})}var y=r(4819);function k(){return(0,a.useEffect)(()=>{let e=()=>{Array.from(document.querySelectorAll("[data-stripe]")).forEach((e,t)=>{e.classList.toggle("stripe-even",t%2==0),e.classList.toggle("stripe-odd",t%2==1)})},t=new MutationObserver(e);return t.observe(document.body,{childList:!0,subtree:!0}),e(),()=>t.disconnect()},[]),(0,i.jsxs)(s.Z,{title:"Fiber",description:"An Express-inspired web framework written in Go.",wrapperClassName:"fiber-home",children:[(0,i.jsx)(y.Z,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://gofiber.io/"})}),(0,i.jsx)(h,{}),(0,i.jsx)(x,{}),(0,i.jsx)(j,{}),(0,i.jsx)(v,{})]})}}}]);