"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[734],{713:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(294);n.Z.defaults.params={api_key:"ac8fbb226a37f835673d1586bcf6a4c6"},n.Z.defaults.baseURL="https://api.themoviedb.org/3";const s=new class{async getTrending(){const{data:e}=await n.Z.get("trending/movie/day");return e.results}async searchMovies(e){const{data:t}=await n.Z.get("search/movie?".concat(e));return t}async getMovieDetails(e){const{data:t}=await n.Z.get("movie/".concat(e));return t}async getMovieCast(e){const{data:t}=await n.Z.get("movie/".concat(e,"/credits"));return t}async getMovieReviews(e){const{data:t}=await n.Z.get("movie/".concat(e,"/reviews"));return t}}},734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(713),s=a(791),c=a(110),i=a(184);const r=()=>{const[e,t]=(0,s.useState)([]),[a,r]=(0,s.useState)(null),[o,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{l(!0);(async()=>{try{const e=await n.Z.getTrending();t(e)}catch({message:e}){r(e)}finally{l(!1)}})()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Trending today"}),o?(0,i.jsx)("p",{children:"Loading..."}):a?(0,i.jsx)("p",{children:a}):(0,i.jsx)("ul",{children:e.length>0&&e.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(c.Fg,{to:"/movies/".concat(e.id),state:{from:"/"},children:e.title})},e.id)))})]})}},110:(e,t,a)=>{a.d(t,{Fg:()=>d,hX:()=>h,hb:()=>g});var n,s,c,i,r=a(168),o=a(87),l=a(867);l.ZP.div(n||(n=(0,r.Z)(["\n  height: '100vh';\n  display: 'flex';\n  justify-content: 'center';\n  align-items: 'center';\n"])));const d=(0,l.ZP)(o.rU)(s||(s=(0,r.Z)(["\n  color: blue;\n"]))),h=(0,l.ZP)(o.OL)(c||(c=(0,r.Z)(["\n  color: black;\n  &.active {\n    color: red;\n  }\n"]))),g=(0,l.ZP)(d)(i||(i=(0,r.Z)(["\n  display: block;\n"])))}}]);
//# sourceMappingURL=734.7ca65e5b.chunk.js.map