"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[618],{713:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(294);s.Z.defaults.params={api_key:"ac8fbb226a37f835673d1586bcf6a4c6"},s.Z.defaults.baseURL="https://api.themoviedb.org/3";const a=new class{async getTrending(){const{data:e}=await s.Z.get("trending/movie/day");return e.results}async searchMovies(e){const{data:t}=await s.Z.get("search/movie?".concat(e));return t}async getMovieDetails(e){const{data:t}=await s.Z.get("movie/".concat(e));return t}async getMovieCast(e){const{data:t}=await s.Z.get("movie/".concat(e,"/credits"));return t}async getMovieReviews(e){const{data:t}=await s.Z.get("movie/".concat(e,"/reviews"));return t}}},868:(e,t,n)=>{n.d(t,{Z:()=>a});const{useState:s}=n(791),a=()=>{const[e,t]=s(!1),[n,a]=s(null);return{isLoading:e,setIsLoading:t,error:n,setError:a}}},618:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(713),a=n(868),r=n(791),i=n(689),c=n(110),o=n(184);const l=()=>{var e;const{movieId:t}=(0,i.UO)(),{isLoading:n,setIsLoading:l,error:d,setError:h}=(0,a.Z)(),[v,g]=(0,r.useState)(null),{state:u}=(0,i.TH)();(0,r.useEffect)((()=>{(async()=>{l(!0),h(null);try{const e=await s.Z.getMovieDetails(t);g(e)}catch({message:e}){h(e)}finally{l(!1)}})()}),[t,h,l]);const{poster_path:p,overview:m,title:w,release_date:j,genres:x,vote_average:Z}=null!==v&&void 0!==v?v:{},f=null===j||void 0===j?void 0:j.split("-")[0],b=null===(e=10*Z)||void 0===e?void 0:e.toFixed(0),{from:y}=null!==u&&void 0!==u?u:{};return(0,o.jsxs)("div",{children:[y&&(0,o.jsx)(c.hb,{to:y,children:"<- Back"}),n?(0,o.jsx)("p",{children:"Loading..."}):d?(0,o.jsx)("p",{children:d}):v&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{height:500,weight:500,src:p?"https://image.tmdb.org/t/p/w500/".concat(p):"https://i.imgur.com/jtwlswk.png",alt:m}),(0,o.jsx)("h2",{children:"".concat(w," (").concat(f,")")}),(0,o.jsxs)("p",{children:["User score: ",b,"%"]}),(0,o.jsx)("h3",{children:"Overwiew"}),(0,o.jsx)("p",{children:m}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("div",{children:x.map((e=>{let{id:t,name:n}=e;return(0,o.jsx)("span",{children:n},t)}))}),(0,o.jsx)("span",{children:"Additional information:"}),(0,o.jsx)(c.Fg,{to:"cast",children:"Cast"}),(0,o.jsx)(c.Fg,{to:"reviews",children:"Reviews"})]}),(0,o.jsx)(i.j3,{})]})}},110:(e,t,n)=>{n.d(t,{Fg:()=>d,hX:()=>h,hb:()=>v});var s,a,r,i,c=n(168),o=n(87),l=n(867);l.ZP.div(s||(s=(0,c.Z)(["\n  height: '100vh';\n  display: 'flex';\n  justify-content: 'center';\n  align-items: 'center';\n"])));const d=(0,l.ZP)(o.rU)(a||(a=(0,c.Z)(["\n  color: blue;\n"]))),h=(0,l.ZP)(o.OL)(r||(r=(0,c.Z)(["\n  color: black;\n  &.active {\n    color: red;\n  }\n"]))),v=(0,l.ZP)(d)(i||(i=(0,c.Z)(["\n  display: block;\n"])))}}]);
//# sourceMappingURL=618.054f6fdb.chunk.js.map