(this["webpackJsonpvideo-app"]=this["webpackJsonpvideo-app"]||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(67),a(17)),l=a(18),s=a(21),m=a(20),d=a(50),u=a(115),v=a(77),p=a(33),h=a(102),f=a(52),g=Object(h.a)((function(e){return{header:{textAlign:"center",padding:e.spacing(2)},title:Object(p.a)({fontWeight:300,color:"#f5e0e6"},e.breakpoints.down("xs"),{fontSize:30})}}));var E=function(){var e=g();return r.a.createElement("div",{className:e.header},r.a.createElement(f.a,{variant:"h3",className:e.title},"Discover Twelve Planets"))},b=a(29),j=a(32),O=a(104),y=a(113),w=a(105),k=a(106),N=a(109),C=a(108),x=a(107),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1},e.onImgLoaded=function(){e.setState({loaded:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.video,a=e.openPlayer,n=e.classes,o=this.state.loaded;return r.a.createElement(O.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(w.a,{onClick:function(){return a(t)}},r.a.createElement(k.a,null,!o&&r.a.createElement(x.a,{animation:"wave",variant:"rect",className:n.media}),r.a.createElement(C.a,{component:"img",alt:t.title,height:"300",image:"http://i3.ytimg.com/vi/"+t.video_id+"/maxresdefault.jpg",onLoad:this.onImgLoaded}),r.a.createElement(N.a,{className:n.cardContent},r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)))))}}]),a}(r.a.Component),S=Object(v.a)((function(){return{cardContent:{minHeight:120},media:{height:300,width:"100%",position:"absolute",backgroundColor:"#f5f5f5"}}}))(B),A=a(116),D=a(111),P=a(112),L=a(110),T=a(46);var V=function(e){var t=e.sources;return r.a.createElement("div",null,r.a.createElement(T.a,{sources:t}))},H=Object(h.a)((function(e){return{content:{paddingTop:0},description:{paddingTop:e.spacing(2)}}}));var I=function(e){var t=e.open,a=e.close,o=e.video,i=H();return r.a.createElement(n.Fragment,null,o&&r.a.createElement(A.a,{open:t,onClose:a},r.a.createElement(L.a,null,o.title),r.a.createElement(D.a,{className:i.content},r.a.createElement(V,{sources:o.sources}),r.a.createElement(P.a,{className:i.description},o.description))))},z=Object(h.a)((function(){return{media:{height:300},cardContent:{minHeight:112}}}));var F=function(){for(var e=z(),t=[],a=0;a<6;a++)t.push(r.a.createElement(O.a,{key:a,item:!0,xs:12,sm:6,md:4},r.a.createElement(w.a,null,r.a.createElement(x.a,{animation:"wave",variant:"rect",className:e.media}),r.a.createElement(N.a,{className:e.cardContent},r.a.createElement(x.a,{animation:"wave",height:10,style:{marginBottom:24,marginTop:12},width:"40%"}),r.a.createElement(x.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(x.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(x.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(x.a,{animation:"wave",height:10,width:"80%"})))));return r.a.createElement(n.Fragment,null,t)},J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).closePlayer=function(){n.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{video:void 0})}))},n.handleVideo=n.handleVideo.bind(Object(j.a)(n)),n.state={video:void 0},n}return Object(l.a)(a,[{key:"handleVideo",value:function(e){var t={title:e.title,description:e.description,sources:{type:"video",sources:[{src:e.video_id,provider:"youtube"}]}};this.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{video:t})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data,o=t.loaded,i=this.state.video;return r.a.createElement(y.a,null,r.a.createElement(O.a,{container:!0,className:a.root,spacing:3},!o&&r.a.createElement(F,null),n.map((function(t,a){return r.a.createElement(S,{key:"video-".concat(a),openPlayer:e.handleVideo,video:t})}))),r.a.createElement(I,{open:Boolean(i),close:this.closePlayer,video:i}))}}]),a}(r.a.Component),W=Object(v.a)((function(){return{root:{flexGrow:1}}}))(J),_=a(114),G=a(49),M=a.n(G),R=a(48),q=a.n(R),K=Object(h.a)((function(e){return{footer:{textAlign:"center",padding:e.spacing(2)},title:{color:"#f5e0e6"},button:{marginLeft:e.spacing(1),marginBottom:4,color:"#f5e0e6"},icon:{color:"#f5e0e6",position:"relative",top:4,marginRight:3}}}));var Q=function(){var e=K();return r.a.createElement("div",{className:e.footer},r.a.createElement(q.a,{className:e.icon,fontSize:"small"}),r.a.createElement(f.a,{variant:"inherit",className:e.title},"2020 Anna Wojtunik"),r.a.createElement(_.a,{className:e.button,"aria-label":"github",href:"https://github.com/annawojtunik/video-app"},r.a.createElement(M.a,null)))},U=Object(d.a)(),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={videoData:[],loaded:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://annawojtunik.github.io/video-app/database.json").then((function(e){return e.json()})).then((function(t){return e.setState({videoData:t,loaded:!0})}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.videoData,n=t.loaded;return r.a.createElement("div",{className:e.app},r.a.createElement(u.a,{theme:U},r.a.createElement(E,null),r.a.createElement(W,{data:a,loaded:n}),r.a.createElement(Q,null)))}}]),a}(r.a.Component),Y=Object(v.a)((function(){return{app:{backgroundColor:"#7f7c86",width:"100%",minHeight:"100vh"}}}))(X);i.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.abec16db.chunk.js.map