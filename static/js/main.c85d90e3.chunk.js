(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{55:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(28),i=s.n(c),r=s(17),o=s.n(r),l=s(29),j=s(11),m=s(12),d=s(14),u=s(13),v=s(30),h=s.n(v),b=s(8),p=(s(55),s(1));var O=function(e){var t=e.id,s=e.title,a=e.year,n=e.summary,c=e.poster,i=e.genres;return Object(p.jsx)("div",{className:"movie",children:Object(p.jsxs)(b.b,{to:{pathname:"/detail/".concat(t),state:{year:a,title:s,summary:n,poster:c,genres:i}},children:[Object(p.jsx)("img",{src:c,alt:s,title:s}),Object(p.jsxs)("div",{className:"movie_data",children:[Object(p.jsx)("h3",{className:"movie_title",children:s}),Object(p.jsx)("h5",{className:"movie_year",children:a}),Object(p.jsx)("p",{className:"movie_genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres_genres",children:e},t)}))}),Object(p.jsxs)("h5",{className:"movie_summary",children:[n.slice(0,140),"..."]})]})]})})},x=(s(65),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(j.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={is_loading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,is_loading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.is_loading,s=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("h1",{className:"loader_text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:s.map((function(e){return Object(p.jsx)(O,{id:e.id,year:e.year,poster:e.medium_cover_image,title:e.title,genres:e.genres,summary:e.summary},e.id)}))})})}}]),s}(n.a.Component));s(66);var y=function(e){return console.log(e),Object(p.jsx)("div",{className:"movie_about",children:Object(p.jsx)("h1",{children:"\uc601\ud654\ub9ac\uc2a4\ud2b8\ub9cc\ub4e4\uae30 \ube60\uc789"})})},f=(s(67),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log(t.state),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(p.jsxs)("div",{className:"movie_data",children:[Object(p.jsx)("h3",{className:"movie_title",children:e.state.title}),Object(p.jsx)("h5",{className:"movie_year",children:e.state.year}),Object(p.jsx)("p",{className:"movie_genres",children:e.state.genre}),Object(p.jsx)("h5",{className:"movie_summary",children:e.state.summary})]})]}):null}}]),s}(n.a.Component));s(68);var g=function(){return Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)(b.b,{to:"/",children:"Home"}),Object(p.jsx)(b.b,{to:"/about",children:"About"})]})},_=s(2);var N=function(){return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(_.a,{exact:!0,path:"/",component:x}),Object(p.jsx)(_.a,{exact:!0,path:"/about",component:y}),Object(p.jsx)(_.a,{exact:!0,path:"/detail/:id",component:f})]})};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c85d90e3.chunk.js.map