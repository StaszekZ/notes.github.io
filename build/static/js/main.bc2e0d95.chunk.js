(this["webpackJsonpmy-notes-and-todo"]=this["webpackJsonpmy-notes-and-todo"]||[]).push([[0],{54:function(e,n,t){e.exports=t.p+"static/media/logout.4a3642db.svg"},56:function(e,n,t){e.exports=t(79)},61:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(35),i=t.n(o),c=(t(61),t(3)),l=t(2);function u(){var e=Object(c.a)(["\n\n*, *::before, *::after{\n  box-sizing: border-box;\n}\n\nhtml{\n  font-size: 62.5%;\n\n}\n\n\nbody{\n  font-size: 1.6rem;\n  padding: 0;\n  margin: 0;\n  font-family: 'Nunito', sans-serif;\n  background-color: #0f1c21;\n  /* background-color: pink; */\n\n  \n th, td {\n   text-align: center;\n }}\n"]);return u=function(){return e},e}var d=Object(l.b)(u()),s=(t(47),t(26)),m=t(7),h=t(14),f=t(27),p=t(52),b=t(12),g=t(53),E={apiKey:"AIzaSyBJrGkMXNIRPDTV6mwtNuFonE5N3conc58",authDomain:"notes-and-todos-6756c.firebaseapp.com",databaseURL:"https://notes-and-todos-6756c.firebaseio.com",projectId:"notes-and-todos-6756c",storageBucket:"notes-and-todos-6756c.appspot.com",messagingSenderId:"432462096709",appId:"1:432462096709:web:690e4faec4f036d458f62c",measurementId:"G-LL8BYZF9S7"};t.n(g).a.initializeApp(E);var O=E.databaseURL,v={todos:[],isLoading:!1,editID:null,error:null},w=function(){return function(e){fetch("".concat(O,"/todos.json")).then((function(e){return e.json()})).then((function(n){var t=n?Object.keys(n).map((function(e){return Object(b.a)({id:e},n[e])})):[];e(function(e){return{type:"SET_TODOS",payload:e}}(t))}))}},j=function(e){return function(n){fetch("".concat(O,"/todos/.json"),{method:"POST",body:JSON.stringify(e)}).then((function(){n(w())}))}},y=function(e,n){return function(t){fetch("".concat(O,"/todos/").concat(n,".json"),{method:"PUT",body:JSON.stringify(e)}).then((function(){t(w())}))}},x={isModalOpen:!1,createdDate:""},k=function(){return{type:"TOGGLE_MODAL"}},C={notes:[],isLoading:!1,editID:null,error:null},S=function(){return function(e){fetch("".concat(O,"/notes.json")).then((function(e){return e.json()})).then((function(n){var t=n?Object.keys(n).map((function(e){return Object(b.a)({id:e},n[e])})).reverse():[];e(function(e){return{type:"SET_NOTES",payload:e}}(t))}))}},D=Object(f.a)(p.a),T=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d)(D),N=Object(f.c)({todosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_TODOS":return{error:null,isLoading:!1,editID:null,todos:n.payload};case"SET_LOADING":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});default:return e}},modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_MODAL":return{isModalOpen:!e.isModalOpen,createdDate:"".concat((new Date).toLocaleString())};default:return e}},notesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_NOTES":return{error:null,isLoading:!1,editID:null,notes:n.payload};case"SET_LOADING":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});default:return e}}}),L=Object(f.e)(N,T),z=t(11),A=r.a.createContext("todos"),F=function(e){return function(n){return r.a.createElement(A.Consumer,null,(function(t){return r.a.createElement(e,Object.assign({},n,{pageContext:t}))}))}},I=t(28),M=t(29),P=t(31),_=t(30);function R(){var e=Object(c.a)(["\n      height: 100px;\n      box-shadow: -5px 3px 15px rgba(62, 194, 233, 0.3);\n      width: 40%;\n\n      background-color: ",";\n      border: 3px solid ",";\n      "," {\n        background: ",";\n        color: ",";\n        font-size: ",";\n        width: 40%;\n      }\n    "]);return R=function(){return e},e}function U(){var e=Object(c.a)(["\n      width: 40%;\n    "]);return U=function(){return e},e}function G(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  width: 20%;\n  padding: 1rem;\n  height: 50px;\n  background: ",";\n  border-radius: 50px;\n  border: none;\n  color: ",";\n  font-size: 2rem;\n  font-weight: 600;\n  transition: box-shadow 0.3s ease;\n\n  "," {\n    background: ",";\n    color: ",";\n    font-size: ",";\n    width: 50px;\n  }\n  "," {\n    height: 30px;\n    font-size: ",";\n  }\n\n  :hover {\n    box-shadow: 0 10px 20px -15px ",";\n    background: ",";\n    color: ",";\n    text-decoration: none;\n  }\n  ","\n  ","\n"]);return G=function(){return e},e}var V=Object(l.d)(s.b)(G(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.media.phone}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.media.landscape}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.white}),(function(e){return e.modal&&Object(l.c)(U())}),(function(e){return e.homepage&&Object(l.c)(R(),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.media.phone}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.fontSize.xs}))})),J=function(e){var n=e.children,t=e.to,a=e.homepage;return r.a.createElement(V,{homepage:a,to:t},n)},B=t(54),K=t.n(B),W=t(32),Y=t.n(W);function X(){var e=Object(c.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 20px;\n  margin-right: 1%;\n  background-image: url(",");\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 50% 50%;\n  border: 2px solid ",";\n  color: white;\n  background-color: ",";\n  &.active {\n    background-color: white;\n  }\n  "," {\n    width: 30px;\n    height: 30px;\n  }\n"]);return X=function(){return e},e}function Q(){var e=Object(c.a)(["\n  width: 50%;\n  height: inherit;\n  display: inline-flex;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return Q=function(){return e},e}function q(){var e=Object(c.a)(["\n  width: 100%;\n  height: 12vh;\n  position: fixed;\n  top: 0;\n  right: 0%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: ",";\n  border-bottom: 2px solid ",";\n  background: ",";\n  z-index: 2;\n"]);return q=function(){return e},e}var Z=l.d.div(q(),(function(e){return e.isBig?"3em":"1.5em"}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.dark})),$=l.d.div(Q()),H=Object(l.d)(s.b)(X(),(function(e){return e.icon}),(function(e){return e.theme.colors.primary}),(function(e){return e.active?"white":"transparent"}),(function(e){return e.theme.media.landscape})),ee=function(e){Object(P.a)(t,e);var n=Object(_.a)(t);function t(){var e;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={user:null},e.handleSignOutClick=function(){Y.a.auth().signOut()},e}return Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=Y.a.auth().onAuthStateChanged((function(n){e.setState({user:n})}));this.setState({unsubscribe:n})}},{key:"componentWillUnmount",value:function(){this.state.unsubscribe()}},{key:"render",value:function(){return r.a.createElement(Z,null,r.a.createElement($,null,r.a.createElement(J,{to:"/home"},"home"),console.log(this.state.user),r.a.createElement(J,{to:"/todos"},"todos"),r.a.createElement(J,{to:"/notes"},"notes")),this.state.user&&r.a.createElement("h2",{style:{color:"white"}},"welcome ",this.state.user.providerData[0].displayName," "),r.a.createElement(H,{to:"/",icon:K.a,onClick:this.handleSignOutClick}))}}]),t}(r.a.Component),ne={colors:{white:"#ffffff",primary:"#3ec2e9",dark:"#0f1c21",lightDark:"#142a33",blur:"grey"},font:{this:300,regular:400,bold:600},fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"},media:{phone:"@media(max-width: 520px)",tablet:"@media(max-width: 768px)",landscape:"@media(max-width: 736px) and (orientation: landscape) "}},te=t(19),ae=t(8),re=t(15),oe=t(20);function ie(){var e=Object(c.a)(["\n  color: black;\n  background: white;\n  height: 40px;\n  width: 40px;\n  border-radius: 10px;\n  "," {\n    height: 30px;\n    width: 30px;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  width: fit-content;\n"]);return ce=function(){return e},e}function le(){var e=Object(c.a)(["\n      width: 15vw;\n    "]);return le=function(){return e},e}function ue(){var e=Object(c.a)(["\n      width: 10vw;\n    "]);return ue=function(){return e},e}function de(){var e=Object(c.a)(["\n  width: 50%;\n  :hover {\n    color: ",";\n  }\n  ","\n  ","\n"]);return de=function(){return e},e}var se=l.d.td(de(),(function(e){return e.theme.colors.primary}),(function(e){return e.deadline&&Object(l.c)(ue())}),(function(e){return e.created&&Object(l.c)(le())})),me=l.d.td(ce()),he=l.d.button(ie(),(function(e){return e.theme.media.phone})),fe=function(e){var n=e.title,t=e.id,a=e.deadline,o=e.completed,i=e.index,c=e.onEdit,l=e.onDelete,u=e.onCompleteCheck;return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"align-middle"},i+1),r.a.createElement(se,{className:"align-middle"},n),r.a.createElement(se,{deadline:!0,className:"align-middle"},a),r.a.createElement(me,{className:"align-middle"},r.a.createElement(he,{onClick:function(){c(t)}},r.a.createElement(ae.a,{icon:oe.a})),r.a.createElement(he,{onClick:function(){l(t)}},r.a.createElement(ae.a,{icon:oe.d})),r.a.createElement(he,{onClick:function(){u(t,n,a,o)}},o?r.a.createElement(ae.a,{icon:re.a,color:"green"}):r.a.createElement(ae.a,{icon:re.d,color:"red"}))))};function pe(){var e=Object(c.a)(["\n  background-color: lightgray;\n  border: none;\n  border-radius: 20px;\n  width: 100%;\n  padding: 0.5rem 0.5rem;\n  float: left;\n  text-align: center;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 1.2rem;\n  }\n"]);return pe=function(){return e},e}var be=l.d.input(pe()),ge={editTask:y},Ee=Object(h.b)(null,ge)((function(e){var n=e.title,t=e.deadline,o=e.completed,i=e.index,c=e.id,l=e.onSave,u=e.onCompleteCheck,d=Object(a.useState)({title:n,deadline:t,completed:o}),s=Object(z.a)(d,2),m=s[0],h=s[1],f=function(){l(m,c)},p=function(e){"Enter"===e.key&&f()},g=function(e){h(Object(b.a)(Object(b.a)({},m),{},Object(te.a)({},e.target.name,e.target.value)))};return r.a.createElement("tr",{key:c},r.a.createElement("td",{className:"align-middle"},i+1),r.a.createElement("td",{className:"align-middle"},r.a.createElement(be,{name:"title",value:m.title,onChange:g,onKeyDown:p})),r.a.createElement("td",{className:"align-middle"},r.a.createElement(be,{name:"deadline",deadline:!0,value:m.deadline,onChange:g,onKeyDown:p})),r.a.createElement(me,{className:"align-middle"},r.a.createElement(he,{onClick:f},r.a.createElement(ae.a,{icon:oe.c})),r.a.createElement(he,{onClick:function(){console.log("deleted",c)}},r.a.createElement(ae.a,{icon:oe.d})),r.a.createElement(he,{onClick:function(){u(c,Object(b.a)({},m))}},o?r.a.createElement(ae.a,{icon:re.a,color:"green"}):r.a.createElement(ae.a,{icon:re.d,color:"red"}))))}));function Oe(){var e=Object(c.a)(["\n  color: ",";\n"]);return Oe=function(){return e},e}function ve(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 90%;\n  margin-top: auto;\n"]);return ve=function(){return e},e}function we(){var e=Object(c.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return we=function(){return e},e}function je(){var e=Object(c.a)(["\n      width: 90%;\n      height: 70%;\n    "]);return je=function(){return e},e}function ye(){var e=Object(c.a)(["\n  background-color: lightgray;\n  border: none;\n  border-radius: 20px;\n  width: 70%;\n  height: 50%;\n  margin: 1rem auto;\n  float: left;\n  text-align: center;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 1.2rem;\n  }\n  "," {\n    width: 100%;\n  }\n  ","\n"]);return ye=function(){return e},e}function xe(){var e=Object(c.a)(["\n      width: 90%;\n    "]);return xe=function(){return e},e}function ke(){var e=Object(c.a)(["\n  width: 70%;\n  margin: 1rem auto;\n  "," {\n    width: 100%;\n  }\n  ","\n"]);return ke=function(){return e},e}function Ce(){var e=Object(c.a)(["\n  color: white;\n  display: block;\n"]);return Ce=function(){return e},e}var Se=l.d.label(Ce()),De=Object(l.d)(be)(ke(),(function(e){return e.theme.media.phone}),(function(e){return e.notes&&Object(l.c)(xe())})),Te=l.d.textarea(ye(),(function(e){return e.theme.media.phone}),(function(e){return e.notes&&Object(l.c)(je())})),Ne=l.d.form(we()),Le=l.d.div(ve()),ze=l.d.h3(Oe(),(function(e){return e.theme.colors.primary})),Ae=function(e){Object(P.a)(t,e);var n=Object(_.a)(t);function t(){var e;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={title:"",content:"",deadline:"",completed:!1},e.putDataInDatabase=function(){var n=e.props,t=n.addNewNote,a=n.addNewTask,r=n.toggleModalOpen,o=n.pageContext,i=n.created,c=e.state,l=c.title,u=c.content,d=c.deadline,s=c.completed;"todos"===o&&a({title:l,deadline:d,completed:s}),"notes"===o&&t({title:l,content:u,created:i}),r(),e.setState({title:"",content:"",deadline:"",created:""})},e.handleOnAddClick=function(n){if(n.preventDefault(),!e.state.title)return alert("Please add new ".concat("todos"===e.props.pageContext?"task":"note"," or quit!"));e.putDataInDatabase()},e.onEnterSave=function(n){"Enter"===n.key&&e.handleOnAddClick(n)},e.handleOnChange=function(n){e.setState(Object(te.a)({},n.target.name,n.target.value))},e.onQuit=function(){e.props.toggleModalOpen()},e}return Object(M.a)(t,[{key:"render",value:function(){var e=this.props.pageContext;return r.a.createElement(Ne,null,r.a.createElement(Se,{htmlFor:"title"},"Add new ".concat("todos"===e?"task":"note")),r.a.createElement(De,{name:"title",placeholder:"todos"===e?"new task":"note title",value:this.state.title,onChange:this.handleOnChange,onKeyDown:this.onEnterSave}),"notes"===e&&r.a.createElement(Te,{name:"content",placeholder:"note content",value:this.state.content,onChange:this.handleOnChange,onKeyDown:this.onEnterSave}),"todos"===e&&r.a.createElement(De,{name:"deadline",placeholder:"new deadline",value:this.state.deadline,onChange:this.handleOnChange,onKeyDown:this.onEnterSave}),"notes"===e&&r.a.createElement(ze,null,this.props.created),r.a.createElement(Le,null,r.a.createElement(V,{modal:"true",type:"submit",onClick:this.handleOnAddClick},r.a.createElement(ae.a,{icon:re.b})),r.a.createElement(V,{onClick:this.onQuit},r.a.createElement(ae.a,{icon:re.e,color:"red"}))))}}]),t}(a.Component),Fe={addNewTask:j,toggleModalOpen:k,addNewNote:function(e){return function(n){fetch("".concat(O,"/notes/.json"),{method:"POST",body:JSON.stringify(e)}).then((function(){n(S())}))}}},Ie=F(Object(h.b)((function(e){return{created:e.modalReducer.createdDate}}),Fe)(Ae));function Me(){var e=Object(c.a)(["\n  border: 5px solid ",";\n  z-index: 1;\n  position: fixed;\n  display: ",";\n  padding: 2rem;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 50%;\n  width: 50%;\n  background-color: ",";\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transition: transform 0.25s ease-in-out;\n\n  "," {\n    height: 60%;\n    width: 90%;\n  }\n  "," {\n    height: 60%;\n    width: 80%;\n  }\n"]);return Me=function(){return e},e}var Pe=l.d.div(Me(),(function(e){return e.theme.colors.primary}),(function(e){return e.isVisible?"flex":"none"}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),_e=function(e){var n=e.isVisible,t=e.onAdd;return r.a.createElement(Pe,{isVisible:n},r.a.createElement(Ie,{onAdd:t}))};function Re(){var e=Object(c.a)(["\n  background-color: ",";\n  filter: blur(",");\n"]);return Re=function(){return e},e}function Ue(){var e=Object(c.a)(["\n  position: fixed;\n  top: 85vh;\n  left: 85vw;\n  width: 50px;\n  height: 50px;\n  z-index: 2;\n  display: ",";\n"]);return Ue=function(){return e},e}var Ge=Object(l.d)(V)(Ue(),(function(e){return e.button?"flex":"none"})),Ve=l.d.div(Re(),(function(e){return e.theme.colors.dark}),(function(e){return e.isModalOpen&&"5px"})),Je={toggleModalOpen:k},Be=F(Object(h.b)((function(e){return{isModalOpen:e.modalReducer.isModalOpen}}),Je)((function(e){var n=e.children,t=e.onAddFetch,a=e.isModalOpen,o=e.toggleModalOpen,i=e.button;e.pageContext;return r.a.createElement(l.a,{theme:ne,isModalOpen:a},r.a.createElement(Ge,{onClick:function(){o()},button:i},r.a.createElement(ae.a,{icon:re.b})),r.a.createElement(_e,{onAdd:function(){o(),t()},isVisible:a}),r.a.createElement(ee,null),r.a.createElement(Ve,{isModalOpen:a},n))})));function Ke(){var e=Object(c.a)(["\n  color: ",";\n  font-weight: ",";\n  text-align: center;\n  padding: 3rem;\n  margin-bottom: 4rem;\n  position: relative;\n  top: 13vh;\n  /* background-color: red; */\n"]);return Ke=function(){return e},e}function We(){var e=Object(c.a)(["\n  color: ",";\n  font-weight: ",";\n  text-align: center;\n  padding: 1rem;\n\n  "," {\n    font-size: ",";\n  }\n"]);return We=function(){return e},e}var Ye=l.d.h1(We(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.font.bold}),(function(e){return e.theme.media.phone}),(function(e){return e.theme.fontSize.s})),Xe=l.d.h2(Ke(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.font.bold})),Qe=t(36),qe=t(39);function Ze(){var e=Object(c.a)(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  "," {\n    width: 100%;\n  }\n  "," {\n    width: 100%;\n  }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(c.a)(["\n  width: 20%;\n  margin-bottom: 0.5rem;\n"]);return $e=function(){return e},e}function He(){var e=Object(c.a)(["\n  width: 40%;\n  height: 40px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  color: white;\n  background-color: ",";\n  margin-bottom: 0.5rem;\n  margin-right: 0.5rem;\n  "," {\n    ::placeholder {\n      font-size: 1.5rem;\n    }\n  }\n"]);return He=function(){return e},e}var en=l.d.input(He(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.tablet})),nn=Object(l.d)(he)($e()),tn=l.d.div(Ze(),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.media.landscape})),an=F((function(e){var n=e.onTitleFilter,t=e.onDeadlineFilter,a=e.onContentFilter,o=e.titleText,i=e.contentText,c=e.deadlineText,l=e.onClear,u=e.pageContext;return r.a.createElement(tn,null,r.a.createElement(en,{placeholder:"\ud83d\udd0e by title",value:o,onChange:n}),"todos"===u&&r.a.createElement(en,{placeholder:"\ud83d\udd0e by deadline",value:c,onChange:t}),"notes"===u&&r.a.createElement(en,{placeholder:"\ud83d\udd0e by content",value:i,onChange:a}),r.a.createElement(nn,{onClick:l},"Clear"))}));function rn(){var e=Object(c.a)(["\n  color: ",";\n  table-layout: auto;\n"]);return rn=function(){return e},e}function on(){var e=Object(c.a)(["\n  width: 70%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n  top: 13vh;\n\n  "," {\n    width: 95%;\n  }\n  "," {\n    width: 95%;\n  }\n"]);return on=function(){return e},e}var cn=l.d.div(on(),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),ln=Object(l.d)(Qe.a)(rn(),(function(e){return e.theme.colors.white})),un={fetchTodos:function(){return function(e){e({type:"SET_LOADING"}),e(w())}},addNewTask:j,setCompleted:function(e,n,t,a){return function(r){fetch("".concat(O,"/todos/").concat(e,".json"),{method:"PUT",body:JSON.stringify({title:n,deadline:t,completed:!a})}).then((function(){r(w())}))}},deleteTask:function(e){return function(n){fetch("".concat(O,"/todos/").concat(e,".json"),{method:"DELETE"}).then((function(){n(w())}))}},editTask:y},dn=F(Object(h.b)((function(e){return{todos:e.todosReducer.todos,isLoading:e.todosReducer.isLoading,error:e.todosReducer.error}}),un)((function(e){var n=e.isLoading,t=e.fetchTodos,o=e.todos,i=e.deleteTask,c=e.setCompleted,l=e.editTask,u=Object(a.useState)(""),s=Object(z.a)(u,2),m=s[0],h=s[1],f=Object(a.useState)(""),p=Object(z.a)(f,2),b=p[0],g=p[1],E=Object(a.useState)(""),O=Object(z.a)(E,2),v=O[0],w=O[1];Object(a.useEffect)((function(){t()}),[]);var j=function(e,n){l(e,n),h(null)},y=function(e){h(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(Be,{onAddFetch:t,button:"true"},r.a.createElement(cn,null,r.a.createElement(Ye,null,"Todos List"),r.a.createElement(an,{onTitleFilter:function(e){g(e.target.value)},onDeadlineFilter:function(e){w(e.target.value)},titleText:b,deadlineText:v,onClear:function(){g(""),w("")}}),r.a.createElement(ln,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"To Do"),r.a.createElement("th",null,"Deadline"),r.a.createElement("th",null,"Edition"))),r.a.createElement("tbody",null,n?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:12},r.a.createElement(qe.a,{animation:"border"}))):o.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())})).filter((function(e){return e.deadline.toLowerCase().includes(v.toLowerCase())})).map((function(e,n){return m===e.id?r.a.createElement(Ee,{key:e.id,id:e.id,index:n,title:e.title,completed:e.completed,deadline:e.deadline,onSave:j,onDelete:i,onCompleteCheck:c}):r.a.createElement(fe,{key:e.id,id:e.id,index:n,title:e.title,completed:e.completed,deadline:e.deadline,onEdit:y,onDelete:i,onCompleteCheck:c})}))))),!n&&!o.length&&r.a.createElement(Xe,null,"Your todo list is empty! Enter new task! ")))}))),sn=function(e){var n=e.children;return r.a.createElement(l.a,{theme:ne},r.a.createElement(ee,null),n)};function mn(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 90%;\n  height: 50%;\n"]);return mn=function(){return e},e}var hn=l.d.div(mn());function fn(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 50%;\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 2rem;\n\n  transform: translate(-50%, -50%);\n  transition: transform 0.25s ease-in-out;\n  "," {\n    width: 90%;\n  }\n  "," {\n    width: 80%;\n    padding-top: 4rem;\n  }\n"]);return fn=function(){return e},e}var pn=l.d.div(fn(),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),bn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(sn,null,r.a.createElement(pn,null,r.a.createElement("h1",{style:{color:"white"}},"In this app you can store your: "),r.a.createElement(hn,null,r.a.createElement(J,{homepage:"true",to:"/todos"},"todos"),r.a.createElement(J,{homepage:"true",to:"/notes"},"notes")))))},gn=function(e){var n=e.title,t=e.index,a=e.id,o=e.created,i=e.showDetails,c=e.onDelete;return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-middle"},t+1),r.a.createElement(se,{className:"align-middle"},n),r.a.createElement(se,{created:!0,className:"align-middle"},o),r.a.createElement("td",{className:"align-middle"},r.a.createElement(he,{onClick:function(){i(a)}},r.a.createElement(ae.a,{icon:oe.b})),r.a.createElement(he,{onClick:function(){c(a)}},r.a.createElement(ae.a,{icon:oe.d}))))};function En(){var e=Object(c.a)(["\n  align-self: flex-end;\n  padding: 0.5rem;\n  margin-right: 5%;\n"]);return En=function(){return e},e}function On(){var e=Object(c.a)(["\n  width: 90%;\n  height: 70%;\n  background-color: ",";\n  border-radius: 5px;\n  padding: 1rem;\n  overflow: auto;\n  text-align: center;\n"]);return On=function(){return e},e}function vn(){var e=Object(c.a)(["\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  border: 5px solid ",";\n  z-index: 1;\n  padding: 2rem;\n  height: 60vh;\n  width: min(60vw, 80vw);\n  background-color: ",";\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transition: transform 0.25s ease-in-out;\n\n  "," {\n    width: 90%;\n  }\n  "," {\n    width: 80%;\n  }\n"]);return vn=function(){return e},e}var wn=l.d.td(vn(),(function(e){return e.isVisible?"flex":"none"}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),jn=l.d.p(On(),(function(e){return e.theme.colors.lightDark})),yn=l.d.p(En()),xn={editNote:function(e,n){return function(t){fetch("".concat(O,"/notes/").concat(n,".json"),{method:"PUT",body:JSON.stringify(Object(b.a)({},e))}).then((function(){t(S())}))}}},kn=Object(h.b)(null,xn)((function(e){var n=e.isVisible,t=e.content,o=e.onClose,i=e.title,c=e.created,l=e.onDelete,u=e.id,d=e.editNote,s=Object(a.useState)(!1),m=Object(z.a)(s,2),h=m[0],f=m[1],p=Object(a.useState)({content:t,title:i,created:c}),g=Object(z.a)(p,2),E=g[0],O=g[1],v=function(e){O(Object(b.a)(Object(b.a)({},E),{},Object(te.a)({},e.target.name,e.target.value)))};return r.a.createElement("tr",{key:u},r.a.createElement(wn,{isVisible:n},h?r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{notes:!0,onChange:v,value:E.title,name:"title"}),r.a.createElement(Te,{notes:!0,onChange:v,name:"content",value:E.content})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null,E.title),r.a.createElement(jn,null,E.content)),r.a.createElement(yn,null,"Created: ",c),r.a.createElement(Le,null,r.a.createElement(V,{onClick:o},"Close"),h?r.a.createElement(V,{onClick:function(){d(E,u),f(!h)}},"Save"):r.a.createElement(V,{onClick:function(){f(!h)}},"Edit"),r.a.createElement(V,{onClick:function(){l(u)}},"Delete"))))}));function Cn(){var e=Object(c.a)(["\n  width: 70%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n  top: 13vh;\n\n  "," {\n    width: 95%;\n  }\n  "," {\n    width: 95%;\n  }\n"]);return Cn=function(){return e},e}function Sn(){var e=Object(c.a)(["\n  color: ",";\n  table-layout: auto;\n"]);return Sn=function(){return e},e}var Dn=Object(l.d)(Qe.a)(Sn(),(function(e){return e.theme.colors.white})),Tn=l.d.div(Cn(),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),Nn={fetchNotes:function(){return function(e){e({type:"SET_LOADING"}),e(S())}},deleteNote:function(e){return function(n){fetch("".concat(O,"/notes/").concat(e,".json"),{method:"DELETE"}).then((function(){n(S())}))}}},Ln=F(Object(h.b)((function(e){return{notes:e.notesReducer.notes,isLoading:e.notesReducer.isLoading,error:e.notesReducer.error}}),Nn)((function(e){var n=e.fetchNotes,t=e.notes,o=e.isLoading,i=e.deleteNote;Object(a.useEffect)((function(){n()}),[]);var c=Object(a.useState)(""),l=Object(z.a)(c,2),u=l[0],s=l[1],m=Object(a.useState)(!1),h=Object(z.a)(m,2),f=h[0],p=h[1],b=Object(a.useState)(""),g=Object(z.a)(b,2),E=g[0],O=g[1],v=Object(a.useState)(""),w=Object(z.a)(v,2),j=w[0],y=w[1],x=function(e){p(!f),s(e)},k=function(){p(!f),s("")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(Be,{onAddFetch:n,button:"true"},r.a.createElement(Tn,null,r.a.createElement(Ye,null,"My Private Notes"),";",r.a.createElement(an,{onTitleFilter:function(e){O(e.target.value)},onContentFilter:function(e){y(e.target.value)},titleText:E,contentText:j,onClear:function(){O(""),y("")}}),r.a.createElement(Dn,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{key:1},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Edition"))),r.a.createElement("tbody",null,o?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:12},r.a.createElement(qe.a,{animation:"border"}))):t.filter((function(e){return e.title.toLowerCase().includes(E.toLowerCase())})).filter((function(e){return e.content.toLowerCase().includes(j.toLowerCase())})).map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(gn,{key:e.id,title:e.title,created:e.created,id:e.id,index:n,showDetails:x,onDelete:i}),u===e.id&&r.a.createElement(kn,{key:e.created,isVisible:f,onClose:k,content:e.content,id:e.id,title:e.title,created:e.created,onDelete:i}))}))))),!o&&!t.length&&r.a.createElement(Xe,null,"Your note list is empty! Enter a new note! ")))}))),zn=t(55),An=Object(m.g)((function(e){var n=e.children,t=Object(zn.a)(e,["children"]),o=Object(a.useState)("notes"),i=Object(z.a)(o,2),c=i[0],l=i[1],u=t.location.pathname;return Object(a.useEffect)((function(){var e=["todos","notes","home"].filter((function(e){return u.includes(e)})),n=Object(z.a)(e,1)[0];console.log("currentPage",n),l(n)}),[u]),r.a.createElement(A.Provider,{value:c},n)})),Fn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(l.a,{theme:ne},r.a.createElement(Ye,null," The best app for todos an taking notes"),r.a.createElement(Ye,null," You are only one step away from using 'Notes & Todos'"),r.a.createElement(pn,null,r.a.createElement(Ye,null,"Please sign in or sign up to use"),r.a.createElement(hn,null,r.a.createElement(J,{homepage:!0,to:"/signup"},"sign up"),r.a.createElement(J,{homepage:!0,to:"/signin"},"sign in")))))};function In(){var e=Object(c.a)(["\n  align-self: flex-end;\n  margin-top: 2rem;\n  color: ",";\n  "," {\n    margin-top: 1rem;\n  }\n"]);return In=function(){return e},e}function Mn(){var e=Object(c.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  color: white;\n  "," {\n    width: 90%;\n  }\n  "," {\n    width: 70%;\n  }\n"]);return Mn=function(){return e},e}var Pn=l.d.form(Mn(),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.landscape})),_n=Object(l.d)(V)(In(),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.landscape})),Rn=function(e){Object(P.a)(t,e);var n=Object(_.a)(t);function t(){var e;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={email:"",password:"",name:"",redirect:!1},e.handleOnChange=function(n){e.setState(Object(te.a)({},n.target.name,n.target.value)),console.log("change",e.state.email,e.state.password)},e.handleOnSubmit=function(n){n.preventDefault(),e.props.isSignUp?Y.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(n){console.log("dane u\u017cytkownika",n),e.setState({redirect:!0})})).catch((function(e){alert(e.message)})):Y.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(n){return n.user.updateProfile({displayName:e.state.name})})).then((function(){e.setState({redirect:!0})})).catch((function(e){alert(e.message)}))},e}return Object(M.a)(t,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.name,o=e.redirect,i=this.props.isSignUp;return o?r.a.createElement(m.a,{to:"/home"}):r.a.createElement(l.a,{theme:ne},r.a.createElement(Pn,{onSubmit:this.handleOnSubmit},r.a.createElement(Ye,null,"Please ",i?"Sign In":"Sign Up"),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement(be,{name:"name",type:"text",onChange:this.handleOnChange,value:a})),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(be,{name:"email",type:"email",onChange:this.handleOnChange,value:n}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(be,{name:"password",type:"password",onChange:this.handleOnChange,value:t}),r.a.createElement(_n,{as:"button",type:"submit"},r.a.createElement(ae.a,{icon:re.c,size:"lg"}))))}}]),t}(r.a.Component),Un=function(){return r.a.createElement(h.a,{store:L},r.a.createElement(d,null),r.a.createElement(s.a,{basename:"/notes.github.io"},r.a.createElement(An,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:Fn}),r.a.createElement(m.b,{path:"/todos",component:dn}),r.a.createElement(m.b,{path:"/notes",component:Ln}),r.a.createElement(m.b,{path:"/home",component:bn}),r.a.createElement(m.b,{path:"/signin",component:function(){return r.a.createElement(Rn,{isSignUp:!0})}}),r.a.createElement(m.b,{path:"/signup",component:Rn})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Un,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.bc2e0d95.chunk.js.map