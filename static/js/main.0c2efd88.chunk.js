(this["webpackJsonpi-decision-games"]=this["webpackJsonpi-decision-games"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n,r,o,i,c,l,u,s,p,d,m,b,g=a(0),f=a.n(g),h=a(10),v=a.n(h),O=(a(89),a(37)),j=a(27),k=a(47),y=a(48),C=a(15),E=a.n(C),x=a(24),w=a(54),S=a(17),B=a(18),N=(a(91),a(7)),I={development:"http://localhost:8000",production:"https://api.i-decision-games.com",staging:"https://api.staging.i-decision-games.com"}[Object({NODE_ENV:"production",PUBLIC_URL:"/i-decision-games",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).ENVIRONMENT],_="pokemon",z="pokemon-form",L=a(38),P=function(e,t){return L.get(e,{params:t})},U=function(e,t){return L.post(e,{data:t})},T=function(e,t){return L.put(e,{data:t})},H=(n=function e(){var t=this;Object(j.a)(this,e),this.apiHost=I,this.namespace="routes",this.apiUrl="".concat(this.apiHost,"/").concat(this.namespace),Object(S.a)(this,"loading",r,this),Object(S.a)(this,"list",o,this),Object(S.a)(this,"item",i,this),Object(S.a)(this,"count",c,this),Object(S.a)(this,"pagination",l,this),Object(S.a)(this,"setLoading",u,this),Object(S.a)(this,"setList",s,this),Object(S.a)(this,"setItem",p,this),Object(S.a)(this,"setPagination",d,this),Object(S.a)(this,"setCount",m,this),this.toggleLoading=function(){return t.setLoading(!t.loading)},this.updatePagination=function(e){return t.setPagination(Object(w.a)({},t.pagination,{},e))},this.createItem=function(){var e=Object(x.a)(E.a.mark((function e(a){var n,r,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.data,e.next=3,U(t.apiUrl,n);case 3:r=e.sent,o=r.data,i=void 0===o?{}:o,t.setItem(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getItemApiUrl=function(e){return"".concat(t.apiUrl).concat(e?"/".concat(e):"")},this.updateItem=function(){var e=Object(x.a)(E.a.mark((function e(a){var n,r,o,i,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.id,r=a.data,e.next=3,T(t.getItemApiUrl(n),r);case 3:o=e.sent,i=o.data,c=void 0===i?{}:i,t.setItem(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteItem=function(){var e=Object(x.a)(E.a.mark((function e(a){var n,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i=t.getItemApiUrl(a),L.delete(i);case 2:n=e.sent,r=n.data,o=void 0===r?{}:r,t.setItem(o);case 6:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchItem=function(){var e=Object(x.a)(E.a.mark((function e(a,n){var r,o,i,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.id,o=a.data,n&&t.setLoading(!0),e.next=4,P(t.getItemApiUrl(r),o);case 4:return i=e.sent,c=i.data,l=void 0===c?{}:c,t.setItem(l),t.setLoading(!1),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.fetchList=Object(x.a)(E.a.mark((function e(){var a,n,r,o,i,c,l,u,s=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:{},t.setLoading(!0),e.next=4,P(t.apiUrl,Object(w.a)({},t.pagination,{},a));case 4:return n=e.sent,r=n.data,i=(o=void 0===r?{}:r).count,c=o.list,l=o.results,u=o.total,t.setList(l||c||[]),t.setCount(u||i||0),t.setLoading(!1),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})))},r=Object(B.a)(n.prototype,"loading",[N.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=Object(B.a)(n.prototype,"list",[N.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(B.a)(n.prototype,"item",[N.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),c=Object(B.a)(n.prototype,"count",[N.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l=Object(B.a)(n.prototype,"pagination",[N.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{offset:0,limit:10}}}),u=Object(B.a)(n.prototype,"setLoading",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.loading=t}}}),s=Object(B.a)(n.prototype,"setList",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.list=t}}}),p=Object(B.a)(n.prototype,"setItem",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.item=t}}}),d=Object(B.a)(n.prototype,"setPagination",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.pagination=t}}}),m=Object(B.a)(n.prototype,"setCount",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.count=t}}}),n),A=new(function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).apiHost="https://pokeapi.co/api/v2",e.namespace=_,e.apiUrl="".concat(e.apiHost,"/").concat(e.namespace),e}return a}(H)),F=new(function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).apiHost="https://pokeapi.co/api/v2",e.namespace=z,e.apiUrl="".concat(e.apiHost,"/").concat(e.namespace),e}return a}(H)),M=a(19),W=a(160),D=a(146),R=a(114),K=a(159),J=a(161),V="pokemonStore",Y=a(73),q=function(e,t){return O.b.apply(void 0,Object(Y.a)(t))(Object(O.c)(e))},G=a(70),Q=a.n(G),X=a(71),Z=a.n(X),$=Object(D.a)((function(){return{root:{display:"flex",justifyContent:"center",margin:"40px auto 0",listStyle:"none",padding:"0","& > li":{padding:"0 5px"}},button:{minWidth:"auto"}}})),ee=function(e){var t=e.count,a=e.pagination,n=e.updatePagination,r=a.offset,o=a.limit,i=Object(g.useState)(1),c=Object(M.a)(i,2),l=c[0],u=c[1],s=$(),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Array.from({length:t-e+1}).fill(e).map((function(e,t){return e+t}))}(0,Math.ceil(t/o)-1),d=Math.ceil(t/4),m=4*(l-1),b=4*l;return f.a.createElement("div",null,f.a.createElement("ul",{className:s.root},l>1&&f.a.createElement(R.a,{variant:"outlined",size:"small",color:"secondary",onClick:function(){u(l-1)}},f.a.createElement("img",{src:Q.a,alt:""})),p&&p.filter((function(e){return e>=m&&e<=b})).map((function(e){return f.a.createElement("li",{key:e},f.a.createElement(R.a,{className:s.button,variant:"contained",size:"small",color:"".concat(e===r?"secondary":"primary"),onClick:function(){return n({offset:e})}},e+1))})),f.a.createElement("li",null,d>10*l&&f.a.createElement(R.a,{variant:"outlined",size:"small",color:"secondary",onClick:function(){u(l+1)}},f.a.createElement("img",{src:Z.a,alt:""})))))},te=a(9),ae=a(156),ne=a(158),re=a(157),oe=a(155),ie=a(162),ce=a(52),le=a(150),ue=a(53),se=a(151),pe=a(51),de=a(49),me=a(50),be=a(152),ge=a(153),fe=a(154),he=ce.a,ve=le.a,Oe=ue.a,je=se.a,ke=pe.a,ye=de.a,Ce=me.a,Ee=be.a,xe=ge.a,we=fe.a,Se="bug",Be="grass",Ne="fire",Ie="flying",_e="poison",ze="water",Le="normal",Pe="fighting",Ue="ground",Te="rock",He="ghost",Ae="steel",Fe="electric",Me="psychic",We="ice",De="dragon",Re="dark",Ke="fairy",Je="shadow",Ve="unknown",Ye=(b={},Object(te.a)(b,Se,{backgroundColor:ve[500],hoverBackgroundColor:ve[700]}),Object(te.a)(b,Be,{backgroundColor:Oe[500],hoverBackgroundColor:Oe[700]}),Object(te.a)(b,Ne,{backgroundColor:ke[500],hoverBackgroundColor:ke[700]}),Object(te.a)(b,Ie,{backgroundColor:je[300],hoverBackgroundColor:je[700]}),Object(te.a)(b,_e,{backgroundColor:Oe[300],hoverBackgroundColor:Oe[500]}),Object(te.a)(b,ze,{backgroundColor:he[500],hoverBackgroundColor:he[700]}),Object(te.a)(b,Le,{backgroundColor:he[400],hoverBackgroundColor:he[600]}),Object(te.a)(b,Pe,{backgroundColor:ye[200],hoverBackgroundColor:ye[300]}),Object(te.a)(b,Ue,{backgroundColor:ve[300],hoverBackgroundColor:ve[500]}),Object(te.a)(b,Te,{backgroundColor:Ce[300],hoverBackgroundColor:Ce[500]}),Object(te.a)(b,He,{backgroundColor:ye[200],hoverBackgroundColor:ye[400]}),Object(te.a)(b,Ae,{backgroundColor:ye[600],hoverBackgroundColor:ye[700]}),Object(te.a)(b,Fe,{backgroundColor:he[100],hoverBackgroundColor:he[300]}),Object(te.a)(b,Me,{backgroundColor:je[100],hoverBackgroundColor:je[300]}),Object(te.a)(b,We,{backgroundColor:he[600],hoverBackgroundColor:je[800]}),Object(te.a)(b,De,{backgroundColor:ke[700],hoverBackgroundColor:ke[800]}),Object(te.a)(b,Re,{backgroundColor:Ee[700],hoverBackgroundColor:Ee[800]}),Object(te.a)(b,Ke,{backgroundColor:xe[700],hoverBackgroundColor:xe[800]}),Object(te.a)(b,Je,{backgroundColor:Ee[300],hoverBackgroundColor:Ee[400]}),Object(te.a)(b,Ve,{backgroundColor:we[300],hoverBackgroundColor:we[400]}),b),qe={base_experience:"Base experience",height:"Height",typeNames:"Type",totalMoves:"Total moves",weight:"Weight"},Ge=function(e){var t=e.classes,a=e.label,n=e.value;return f.a.createElement(oe.a,{color:"textSecondary",className:t.infoWrapper},f.a.createElement("span",null,a,": "),f.a.createElement("span",null,n))},Qe=Object(D.a)((function(e){return{paper:{display:"flex",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"5px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",alignItems:"center",justifyContent:"space-evenly"},img:{width:"150px"}}})),Xe=q((function(e){var t=e.name,a=e.baseInfo,n=e.sprite,r=Qe(),o=Object(g.useState)(!1),i=Object(M.a)(o,2),c=i[0],l=i[1],u=function(){return l(!c)},s=f.a.createElement("div",{className:r.paper},f.a.createElement("div",null,f.a.createElement("h2",{id:"simple-modal-title"},"Name: ",t),Object.keys(a).map((function(e){return f.a.createElement(Ge,Object.assign({label:qe[e],value:a[e]},{classes:r,key:e}))}))),f.a.createElement("div",null,f.a.createElement("img",{className:r.img,src:n,alt:t})));return f.a.createElement("div",null,f.a.createElement(R.a,{variant:"contained",onClick:u,type:"button"},"More info"),f.a.createElement(ie.a,{open:c,onClose:u,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s))}),[V]),Ze=a(55),$e=a.n(Ze),et=function(e){var t=e.size;return f.a.createElement("div",{className:"".concat($e.a["lds-dual-ring"]," ").concat(t&&$e.a[t])})},tt=a(74),at=a(4),nt=function(e){var t=e.type,a=Object(tt.a)(e,["type"]),n=Ye[t]||{},r=n.backgroundColor,o=n.hoverBackgroundColor,i=Object(at.a)((function(e){var t=e.palette;return{root:{backgroundColor:r,color:t.getContrastText(r),"&:hover":{backgroundColor:o}}}}))(R.a);return f.a.createElement(i,a)},rt=Object(D.a)((function(e){return{root:Object(te.a)({flex:"0 0 48.333%",margin:"0 0.5% 20px",boxShadow:"0 0 4px black",borderRadius:4},e.breakpoints.down("sm"),{flex:"0 0 100%",margin:"0 0 20px"}),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:20,fontWeight:700,color:"black"}}})),ot=q((function(e){var t=e.pokemonStore,a=e.name,n=e.filter,r=e.setFilter,o=e.filterName,i=rt(),c=Object(g.useState)({}),l=Object(M.a)(c,2),u=l[0],s=l[1],p=Object(g.useState)(!1),d=Object(M.a)(p,2),m=d[0],b=d[1],h=u.base_experience,v=u.height,O=u.moves,j=void 0===O?[]:O,k=u.sprites,y=void 0===k?{}:k,C=u.stats,w=u.types,S=void 0===w?[]:w,B=u.weight,N=y.front_default,I=void 0===N?"":N,_={base_experience:h,height:v,totalMoves:j.length,typeNames:S.map((function(e){return e.type.name})).join(", "),weight:B},z=function(){var e=Object(x.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,t.fetchItem({id:a});case 3:n=e.sent,s(n),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){z()}),[]);var L=S.map((function(e){return e.type.name}));return n&&!L.includes(n)||o&&!a.includes(o)?null:f.a.createElement(g.Fragment,null,f.a.createElement(ae.a,{className:i.root},f.a.createElement(re.a,null,f.a.createElement(oe.a,{className:i.title,color:"textSecondary",gutterBottom:!0},a),f.a.createElement("div",null,m&&f.a.createElement(et,{size:"small"}),f.a.createElement("img",{src:I,alt:""}))),f.a.createElement(ne.a,null,f.a.createElement(Xe,{name:a,stats:C,baseInfo:_,sprite:I}),L.map((function(e){return f.a.createElement(nt,{className:i.margin,variant:"contained",key:e,type:e,onClick:function(){r(e===n?"":e)}},e)})))))}),[V]),it=Object(D.a)((function(){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",margin:"30px auto 0 auto",padding:"20px 10px 0",minHeight:"400px",height:"495px",overflowY:"scroll",background:"lightblue",borderRadius:6,boxShadow:"0 0 20px black"},header:{display:"flex",justifyContent:"space-between",padding:"0 15px"},nav:{display:"flex",alignItems:"center",padding:"10px 0 0 0"},list:{listStyle:"none",paddingLeft:15},searchField:{display:"flex",justifyContent:"center",width:"300px",margin:"20px auto 0","& .MuiInputBase-root ":{"& > input":{display:"block",margin:"0 auto"}}}}})),ct=[10,20,50],lt=q((function(e){var t=e.pokemonStore,a=t.count,n=t.pagination,r=t.list,o=t.loading,i=t.updatePagination,c=it(),l=Object(g.useState)(""),u=Object(M.a)(l,2),s=u[0],p=u[1],d=Object(g.useState)(""),m=Object(M.a)(d,2),b=m[0],h=m[1];return Object(g.useEffect)((function(){t.fetchList()}),[n]),f.a.createElement(f.a.Fragment,null,f.a.createElement("header",{className:c.header},f.a.createElement("h2",null,"Pokemon List"),f.a.createElement("nav",{className:c.nav},f.a.createElement("b",null,"Show:"),f.a.createElement(K.a,{className:c.list,color:"primary",size:"small","aria-label":"outlined primary button group"},ct.map((function(e){return f.a.createElement(R.a,{key:e,color:"".concat(e===n.limit?"secondary":"primary"),onClick:function(){return i({limit:e})}},e)}))))),f.a.createElement(W.a,{className:c.root},o&&f.a.createElement(et,null),!o&&r.map((function(e){var t=e.name;return f.a.createElement(ot,{filter:s,setFilter:p,filterName:b,key:t,name:t})}))),f.a.createElement("footer",null,f.a.createElement(ee,{count:a,pagination:n,updatePagination:i}),f.a.createElement(J.a,{id:"standard-search",label:"Search by name",type:"search",className:c.searchField,onChange:function(e){return h(e.currentTarget.value)}})))}),[V]),ut={pokemonStore:A,pokemonFormStore:F},st=function(){return f.a.createElement(O.a,ut,f.a.createElement(lt,null))};v.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(st,null)),document.getElementById("root"))},55:function(e,t,a){e.exports={"lds-dual-ring":"Preloader_lds-dual-ring__1Fv25",small:"Preloader_small__akuDD"}},70:function(e,t,a){e.exports=a.p+"static/media/prev-arrow.6962a174.svg"},71:function(e,t,a){e.exports=a.p+"static/media/next-arrow.6329c0a6.svg"},84:function(e,t,a){e.exports=a(111)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.0c2efd88.chunk.js.map