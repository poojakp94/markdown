(this.webpackJsonpmarkdown=this.webpackJsonpmarkdown||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),i=t.n(r),s=(t(9),t(1));t(10);function c(){return{width:window.innerWidth}}var l=function(){var e=Object(a.useState)("\n# Welcome to my React Markdown Previewer!\n---\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>` , between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n"),n=Object(s.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],u=l[1],m=Object(a.useState)(!1),f=Object(s.a)(m,2),h=f[0],w=f[1],p=function(){var e=Object(a.useState)(c()),n=Object(s.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){o(c())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().width;return Object(a.useEffect)((function(){document.getElementById("preview").innerHTML=window.marked(t)}),[t]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",{style:{color:"white"}},"Markdown Previewer"),o.a.createElement("div",{style:{height:d?"100vh":"400px",width:p<768?"300px":d?"100%":"500px",marginBottom:d?"0px":"50px",display:h?"none":"flex",flexDirection:"column",boxShadow:"1px 1px 15px 1px #333"}},o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("p",null,"Editor"),o.a.createElement("i",{className:d?"fa fa-compress":"fa fa-arrows-alt",style:{transform:"rotate(45deg)"},onClick:function(){u(!d)}})),o.a.createElement("textarea",{id:"editor",value:t,onChange:function(e){e.preventDefault(),r(e.target.value)}})),o.a.createElement("div",{style:{minHeight:"200px",width:p<768?"350px":h?"100%":"800px",display:d?"none":"flex",flexDirection:"column",boxShadow:"1px 1px 15px 1px #333"}},o.a.createElement("nav",{className:"nav-bar"},o.a.createElement("p",null,"Preview"),o.a.createElement("i",{className:h?"fa fa-compress":"fa fa-arrows-alt",style:{transform:"rotate(45deg)"},onClick:function(){w(!h)}})),o.a.createElement("div",{id:"preview"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1c9542ea.chunk.js.map