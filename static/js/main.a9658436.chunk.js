(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/pizza.67184173.jpg"},26:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){e.exports=a.p+"static/media/sp1.37895532.png"},44:function(e,t,a){e.exports=a.p+"static/media/sp5.e0cb7010.png"},45:function(e,t,a){e.exports=a.p+"static/media/sp2.870e5658.png"},46:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(10),c=a.n(i),r=(a(31),a(32),a(16),a(12)),o=a(13),s=a(15),m=a(14),u=(a(33),a(11)),d=a(47),p=a(48),g=a(49),E=a(50),h=a(51),f=a(52),v=a(53),b=a(54),x=a(62),O=a(55),N=a(56),k=a(57),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isOpen:!1,isModalOpen:!1},n.toggle=n.toggle.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{id:"navbar",color:"",light:!0,expand:"sm"},l.a.createElement(p.a,{className:" text-white",href:"/"},"reactstrap"),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(v.a,{className:" text-white",href:"/components/"},"Components")),l.a.createElement(f.a,null,l.a.createElement(v.a,{className:" text-white",href:"https://github.com/reactstrap/reactstrap"},"GitHub"))),l.a.createElement(b.a,{outline:!0,onClick:this.toggleModal,color:"secondary"},"Login"))),l.a.createElement(x.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(O.a,{toggle:this.toggleModal},"Modal title"),l.a.createElement(N.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement(k.a,null,l.a.createElement(b.a,{color:"primary",onClick:this.toggleModal},"Do Something")," ",l.a.createElement(b.a,{color:"secondary",onClick:this.toggleModal},"Cancel"))))}}]),a}(n.Component);var j=function(e){return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-5"},l.a.createElement("h3",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"}),"Home"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"}),"About"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"}),"Contact"))),l.a.createElement("div",{className:"col-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),"+852 1234 5678",l.a.createElement("br",null),"+852 8765 4321",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))))))},w=a(17),C=(a(43),a(44),a(45),[{src:"/vickysumit/Nikhil_Website/public/assets/images/sp1.png",altText:"S1",caption:"Slide 1"},{src:"/Nikhil_Website/public/assets/images/sp2.png",altText:"S 2",caption:"Slide 2"},{src:"vickysumit/Nikhil_Website/public/assets/images/sp5.png",altText:"Sl 3",caption:"Slide 3"}]),M=a(23),S=a.n(M),H=a(24),T=a(58),W=a(59),q=a(60),z=a(61),B=function(e){var t=Object(n.useState)(0),a=Object(w.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(w.a)(r,2),s=o[0],m=o[1],u=function(){if(!s){var e=i===C.length-1?0:i+1;c(e)}},d=function(){if(!s){var e=0===i?C.length-1:i-1;c(e)}},p=C.map((function(e){return l.a.createElement(H.a,{onExiting:function(){return m(!0)},onExited:function(){return m(!1)},key:e.src},l.a.createElement("img",{src:e.src,alt:e.altText,width:"300",height:"300",id:"imagec",className:""}),l.a.createElement(T.a,{captionText:e.caption,captionHeader:e.caption}))}));return l.a.createElement(W.a,{activeIndex:i,next:u,previous:d},l.a.createElement(q.a,{className:"",items:C,activeIndex:i,onClickHandler:function(e){s||c(e)}}),p,l.a.createElement(z.a,{className:"text-primary",direction:"prev",directionText:"Previous",onClickHandler:d}),l.a.createElement(z.a,{direction:"next",directionText:"Next",onClickHandler:u}))};var G=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col bg-secondary"},l.a.createElement(B,null))),l.a.createElement("div",{className:"row"},l.a.createElement("img",{src:S.a,alt:"pizza"}))))},I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(G,null),l.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a9658436.chunk.js.map