"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[734],{713:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(294);a.Z.defaults.params={api_key:"ac8fbb226a37f835673d1586bcf6a4c6"},a.Z.defaults.baseURL="https://api.themoviedb.org/3";const s=new class{async getTrending(){const{data:e}=await a.Z.get("trending/movie/day");return e.results}async searchMovies(e){const{data:t}=await a.Z.get("search/movie?".concat(e));return t}}},734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(713),s=n(791),c=n(110),r=n(184);const i=()=>{const[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(null),[l,d]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{d(!0);(async()=>{try{const e=await a.Z.getTrending();t(e)}catch({message:e}){i(e)}finally{d(!1)}})()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Trending today"}),l?(0,r.jsx)("p",{children:"Loading..."}):n?(0,r.jsx)("p",{children:n}):(0,r.jsx)("ul",{children:e.length>0&&e.map((e=>(0,r.jsx)("li",{children:(0,r.jsx)(c.Fg,{to:"/movies/".concat(e.id),children:e.title})},e.id)))})]})}},110:(e,t,n)=>{n.d(t,{Fg:()=>d,hX:()=>o});var a,s,c,r=n(168),i=n(87),l=n(867);l.ZP.div(a||(a=(0,r.Z)(["\n  height: '100vh';\n  display: 'flex';\n  justify-content: 'center';\n  align-items: 'center';\n"])));const d=(0,l.ZP)(i.rU)(s||(s=(0,r.Z)(["\n  color: blue;\n"]))),o=(0,l.ZP)(i.OL)(c||(c=(0,r.Z)(["\n  color: black;\n  &.active {\n    color: red;\n  }\n"])))}}]);
//# sourceMappingURL=734.98382ebe.chunk.js.map