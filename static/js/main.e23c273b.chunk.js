(this["webpackJsonpfigma-maket"]=this["webpackJsonpfigma-maket"]||[]).push([[0],{10:function(e,t,s){e.exports={formControl:"FormsControls_formControl__2-PDo",error:"FormsControls_error__25lZQ",active:"FormsControls_active__1hQBL",textarea:"FormsControls_textarea__3yvER",InputLabelError:"FormsControls_InputLabelError__UOTRv",spanError:"FormsControls_spanError__2RcbI",spanErrorFortextaream:"FormsControls_spanErrorFortextaream__17mdj",container:"FormsControls_container__3HI_i",inputPhoto:"FormsControls_inputPhoto__3eiak",label:"FormsControls_label__1V5I7"}},116:function(e,t,s){},13:function(e,t,s){e.exports={header:"Header_header__yfRMG",headerNoScroll:"Header_headerNoScroll__35gCN",menu:"Header_menu__3QeLd",header_li:"Header_header_li__YGe-W",link1:"Header_link1__32ky0",link2:"Header_link2__NJyf8",link3:"Header_link3__91P7E",link4:"Header_link4__Japn9",link5:"Header_link5__1yl2O",burgerLogo:"Header_burgerLogo__3uIkP",burgerMenu:"Header_burgerMenu__3UDAh"}},14:function(e,t,s){e.exports={users:"Users_users__1pPf_",container_inner:"Users_container_inner__iAoVX",title_h2:"Users_title_h2__2aJ6t",users_container:"Users_users_container__lfemz",usersPreloader:"Users_usersPreloader__16JwV",button:"Users_button__2ie7c",users_item:"Users_users_item__3MRtu",users_container_inner:"Users_users_container_inner__JvxRN",photo:"Users_photo__18-E2",name:"Users_name__3iik7",position:"Users_position__1jkFC"}},15:function(e,t,s){e.exports={container:"App_container__eSJ6i",modalOpen:"App_modalOpen__2Tm91",modalClosed:"App_modalClosed__25kXg"}},244:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(54),i=s.n(r),c=(s(116),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,248)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))}),o=s(11),l=s(9),u=s(38),d=s(17),j=s(7),m=s(19),h=s.n(m),p=s(106).create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1/"}),b=function(e,t){return p.get("users?page=".concat(e,"&count=").concat(t))},_=function(){return p.get("positions")},g=function(){return p.get("token")},x=function(e,t,s,a,n,r){var i=new FormData;return i.append("name",t),i.append("email",s),i.append("phone",a),i.append("position_id",n),i.append("photo",r[0]),p.post("users",i,{headers:{"Content-Type":"multipart/form-data",Token:e.data.token}})},O="SET_USERS",f="GET_USERS",v="SAVE_PHOTO",N="GET_USERS_POSITION",k="NEW_USER",F="IS_FULL_USERS",P="CHANGE_USERS_PAGE",U="TOGGLE_BURGER_MENU",I="TOGGLE_IS_FETCHING",y="TOGGLE_MODAL",M={users:[],positionsId:[],token:[],photo:null,currentPage:1,pageNumber:2,totalUsers:null,usersPage:9,isAllUsers:!1,toggleBurgerMenu:!1,toggleIsFetching:!1,toggleModal:!1},C=function(){return{type:F}},w=function(e){return{type:I,toggleIsFetching:e}},E=function(e){return{type:y,toggleModal:e}},R=function(e){return function(t){t(function(e){return{type:P,page:e}}(e))}},A=function(){return function(e){e({type:U})}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{users:Object(d.a)(t.users),totalPages:t.totalUsers});case f:var s=Object(j.a)({},e);return s.pageNumber++,s.users=[].concat(Object(d.a)(e.users),Object(d.a)(t.users)),s;case v:return Object(j.a)(Object(j.a)({},e),{},{photo:[].concat(Object(d.a)(e.photo),Object(d.a)(t.photo))});case N:return Object(j.a)(Object(j.a)({},e),{},{positionsId:[].concat(Object(d.a)(e.positionsId),Object(d.a)(t.positions))});case k:var a=Object(j.a)({},e);return a.users=[].concat(Object(d.a)(e.users),Object(d.a)(t.users)),a;case F:return Object(j.a)(Object(j.a)({},e),{},{isAllUsers:!0});case P:return Object(j.a)(Object(j.a)({},e),{},{usersPage:t.page});case U:return Object(j.a)(Object(j.a)({},e),{},{toggleBurgerMenu:!e.toggleBurgerMenu});case I:return Object(j.a)(Object(j.a)({},e),{},{toggleIsFetching:t.toggleIsFetching});case y:return Object(j.a)(Object(j.a)({},e),{},{toggleModal:t.toggleModal});default:return e}},L=s(108),B=s(247),T=Object(l.c)({usersPage:S,form:B.a}),z=Object(l.d)(T,Object(l.a)(L.a));window.store=z;var H,G=z,D=s(22),W=s(23),J=s(25),V=s(24),Q=s(26),Y=s.n(Q),q=s(15),X=s.n(q),$=s(73),K=s.n($),Z=s(0),ee=function(e){var t=function(){return void 0!==e.disabled&&!0===e.disabled};return Object(Z.jsx)("div",{className:t()?K.a.disabled:K.a.button,onClick:void 0===e.onClick||t()?function(){}:e.onClick,children:Object(Z.jsx)("a",{children:void 0===e.text?"Sign Up":e.text})})},te=function(e){return Object(Z.jsx)("section",{className:Y.a.about,id:"requirements",children:Object(Z.jsx)("div",{className:X.a.container,children:Object(Z.jsxs)("div",{className:Y.a.container_items,children:[Object(Z.jsx)("div",{className:Y.a.img_item1,children:Object(Z.jsx)("img",{src:"Images/about387x340.png",alt:"table"})}),Object(Z.jsx)("div",{className:Y.a.img_item2,children:Object(Z.jsx)("img",{src:"Images/about328x287.svg",alt:"table"})}),Object(Z.jsx)("div",{className:Y.a.img_item3,children:Object(Z.jsx)("img",{src:"Images/about296x260.svg",alt:"table"})}),Object(Z.jsxs)("div",{className:Y.a.text_item,children:[Object(Z.jsx)("h1",{children:"Let's get acquainted"}),Object(Z.jsx)("h2",{children:"I'm a good front-end developer"}),Object(Z.jsx)("div",{className:Y.a.text,children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(Z.jsx)("div",{className:Y.a.button_text,children:Object(Z.jsx)("div",{className:Y.a.button_text_div,children:Object(Z.jsx)(ee,{})})})]})]})})})},se=s(74),ae=s.n(se),ne=function(e){return Object(Z.jsx)("section",{children:Object(Z.jsx)("div",{className:ae.a.footer,children:Object(Z.jsx)("div",{className:ae.a.title,children:"\xa9 abz.agency specially for the test task"})})})},re=s(13),ie=s.n(re),ce=s(5),oe=s.n(ce),le=function(e){return Object(Z.jsx)("div",{className:oe.a.blur,onClick:function(){return e.toggleBurgerMenu()},children:Object(Z.jsx)("div",{className:oe.a.main,children:Object(Z.jsxs)("nav",{className:oe.a.menu,children:[Object(Z.jsx)("a",{children:Object(Z.jsx)("img",{src:"Images/Logo.png",alt:"logo"})}),Object(Z.jsxs)("ul",{children:[Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,href:"#main",children:"About me"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,href:"#main",children:"Relationships"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,href:"#users",children:"Users"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,href:"#sing up",children:"Sing Up"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Terms and Conditions"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"How it works"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Partnership"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Help"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Level testimonial"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Contact us"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Articles"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Our news"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Testimonials"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Licenses"})}),Object(Z.jsx)("li",{className:oe.a.header_li,children:Object(Z.jsx)("a",{className:oe.a.link,children:"Privacy Policy"})})]})]})})})},ue=function(e){return Object(Z.jsx)("div",{className:e.isMenuOpen?ie.a.headerNoScroll:ie.a.header,children:Object(Z.jsx)("div",{className:X.a.container,children:Object(Z.jsxs)("nav",{className:ie.a.menu,children:[Object(Z.jsx)("a",{children:Object(Z.jsx)("img",{src:"Images/Logo.png",alt:"logo"})}),Object(Z.jsxs)("ul",{children:[Object(Z.jsx)("li",{className:ie.a.header_li,children:Object(Z.jsx)("a",{className:ie.a.link1,href:"#main",children:"About me"})}),Object(Z.jsx)("li",{className:ie.a.header_li,children:Object(Z.jsx)("a",{className:ie.a.link2,href:"#main",children:"Relationships"})}),Object(Z.jsx)("li",{className:ie.a.header_li,children:Object(Z.jsx)("a",{className:ie.a.link3,href:"#requirements",children:"Requirements"})}),Object(Z.jsx)("li",{className:ie.a.header_li,children:Object(Z.jsx)("a",{className:ie.a.link4,href:"#users",children:"Users"})}),Object(Z.jsx)("li",{className:ie.a.header_li,children:Object(Z.jsx)("a",{className:ie.a.link5,href:"#sing up",children:"Sign Up"})})]}),Object(Z.jsx)("div",{className:ie.a.burgerLogo,children:Object(Z.jsx)("a",{onClick:function(){return e.toggleBurgerMenu()},children:Object(Z.jsx)("img",{src:"Images/menu.svg",alt:"menu"})})}),Object(Z.jsx)("div",{className:ie.a.burgerMenu,children:e.isMenuOpen?Object(Z.jsx)(le,{toggleBurgerMenu:e.toggleBurgerMenu}):""})]})})})},de=function(e){Object(J.a)(s,e);var t=Object(V.a)(s);function s(){return Object(D.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&(this.props.isMenuOpen?document.body.className="no-scroll":document.body.className="")}},{key:"render",value:function(){return Object(Z.jsx)(ue,{toggleBurgerMenu:this.props.toggleBurgerMenu,isMenuOpen:this.props.isMenuOpen})}}]),s}(n.a.Component),je=Object(o.b)((function(e){return{isMenuOpen:e.usersPage.toggleBurgerMenu}}),(function(e){return{toggleBurgerMenu:function(){e(A())}}}))(de),me=s(32),he=s.n(me),pe=function(e){return Object(Z.jsx)("section",{className:he.a.main,id:"main",children:Object(Z.jsxs)("div",{className:X.a.container,children:[Object(Z.jsx)("div",{className:he.a.banner,children:Object(Z.jsx)("img",{src:"Images/Banner_photo.jpg",alt:"banner"})}),Object(Z.jsxs)("div",{className:he.a.item,children:[Object(Z.jsx)("h1",{children:"Test assignment for front-end developers"}),Object(Z.jsx)("div",{className:he.a.item_text1,children:"Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers."}),Object(Z.jsx)("div",{className:he.a.item_text2,children:"Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion."}),Object(Z.jsx)("div",{className:he.a.item_button,children:Object(Z.jsx)(ee,{})})]})]})})},be=s(14),_e=s.n(be),ge=s.p+"static/media/Photo-cover.fb98cf13.svg",xe=s.p+"static/media/rolling.7a528569.svg",Oe=function(e){var t=document.querySelector("#userName");return console.log(t),Object(Z.jsx)("section",{className:_e.a.users,id:"users",children:Object(Z.jsx)("div",{className:X.a.container,children:Object(Z.jsxs)("div",{className:_e.a.container_inner,children:[Object(Z.jsx)("h1",{className:_e.a.title,children:"Our cheerful users"}),Object(Z.jsx)("h2",{className:_e.a.title_h2,children:"The best specialists are shown below"}),Object(Z.jsxs)("div",{className:_e.a.users_container,children:[e.isFetching?Object(Z.jsx)("div",{className:_e.a.usersPreloader,children:Object(Z.jsx)("img",{src:xe})}):null,e.users.sort((function(e,t){return e.registration_timestamp>t.registration_timestamp?-1:1})).map((function(e){return Object(Z.jsx)("div",{className:_e.a.users_item,children:Object(Z.jsxs)("div",{className:_e.a.users_container_inner,children:[Object(Z.jsx)("img",{src:"https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"!=e.photo?e.photo:ge,className:_e.a.photo}),Object(Z.jsx)("h2",{className:_e.a.name,id:"userName",children:e.name}),Object(Z.jsxs)("div",{className:_e.a.position,children:[Object(Z.jsx)("div",{className:_e.a.position,children:e.position}),Object(Z.jsx)("div",{className:_e.a.position,children:e.email}),Object(Z.jsx)("div",{className:_e.a.position,children:e.phone})]})]})},e.id)}))]}),Object(Z.jsx)("div",{className:_e.a.button,children:Object(Z.jsx)(ee,{text:"Show more",disabled:e.isFullUsers,onClick:function(){var t=e.pageNumber;e.getUsers(t,e.usersPage)}})})]})})})},fe=function(e){Object(J.a)(s,e);var t=Object(V.a)(s);function s(){return Object(D.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=window.matchMedia("(max-width: 768px)"),s=window.matchMedia("(max-width: 360px)");if(t.matches&&!s.matches)this.props.usersPageOfWidth(6);else if(s.matches&&t.matches)this.props.usersPageOfWidth(3);else{var a=this.props,n=a.currentPage,r=a.usersPage;this.props.setUsers(n,r)}t.addEventListener("change",(function(){if(t.matches&&!s.matches)e.props.usersPageOfWidth(6);else{e.props.usersPageOfWidth(9);var a=e.props,n=a.currentPage,r=a.usersPage;e.props.setUsers(n,r)}})),s.addEventListener("change",(function(){if(t.matches&&s.matches)e.props.usersPageOfWidth(3);else{e.props.usersPageOfWidth(6);var a=e.props,n=a.currentPage,r=a.usersPage;e.props.setUsers(n,r)}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.usersPage!==this.props.usersPage){var s=this.props,a=s.currentPage,n=s.usersPage;this.props.setUsers(a,n)}}},{key:"render",value:function(){return Object(Z.jsx)(Oe,{users:this.props.users,isFullUsers:this.props.isFullUsers,setUsers:this.props.setUsers,isAllUsers:this.props.isAllUsers,getUsers:this.props.getUsers,usersPage:this.props.usersPage,currentPage:this.props.currentPage,pageNumber:this.props.pageNumber,isFetching:this.props.isFetching})}}]),s}(n.a.Component),ve=Object(o.b)((function(e){return{users:e.usersPage.users,isFullUsers:e.usersPage.isAllUsers,usersPage:e.usersPage.usersPage,currentPage:e.usersPage.currentPage,pageNumber:e.usersPage.pageNumber,isFetching:e.usersPage.toggleIsFetching}}),(function(e){return{isAllUsers:function(){e(C())},getUsers:function(t,s){e(function(e,t){return function(){var s=Object(u.a)(h.a.mark((function s(a,n){var r;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,b(e,t);case 2:200===(r=s.sent).status&&e===r.data.total_pages&&a(C()),a((n=r.data.users,{type:f,users:n}));case 5:case"end":return s.stop()}var n}),s)})));return function(e,t){return s.apply(this,arguments)}}()}(t,s))},setUsers:function(t,s){e(function(e,t){return function(){var s=Object(u.a)(h.a.mark((function s(a){var n;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a(w(!0)),s.next=3,b(e,t);case 3:n=s.sent,a(w(!1)),a((r=n.data.users,i=n.data.total_users,{type:O,users:r,totalUsers:i}));case 6:case"end":return s.stop()}var r,i}),s)})));return function(e){return s.apply(this,arguments)}}()}(t,s))},usersPageOfWidth:function(t){e(R(t))}}}))(fe),Ne=ve,ke=s(8),Fe=s.n(ke),Pe=s(246),Ue=s(245),Ie=s(33),ye=s.n(Ie),Me=function(e){return e?void 0:Object(Z.jsx)("div",{className:ye.a.text,children:"Filed is required"})},Ce=function(e){return function(t){return t&&t.length>e?Object(Z.jsx)("div",{className:ye.a.text,children:"Max length is ".concat(e," symbols")}):void 0}},we=function(e){return e?/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(e)?void 0:Object(Z.jsx)("div",{className:ye.a.text,children:"Enter valid email"}):void 0},Ee=function(e){return e?e.match(/(^[\+]{0,1}380([0-9]{9})$)/)?void 0:Object(Z.jsx)("div",{className:ye.a.text,children:"+380"}):void 0},Re=function(e){if(!e)return!0},Ae=function(e){return e&&e[0]&&parseFloat(e[0].size/1048576).toFixed(2)>5?Object(Z.jsx)("div",{className:ye.a.text,children:"Please select image size less than 5 MB"}):void 0},Se=s(109),Le=s(10),Be=s.n(Le),Te=["input","meta"],ze=function(e){var t=e.hasError;return e.isDirty||(t=!1),Object(Z.jsx)("div",{className:Be.a.formControl,children:Object(Z.jsx)("textarea",{defaultValue:e.text,placeholder:"Upload your photo",className:t?Be.a.textarea+" "+Be.a.error:Be.a.textarea})})},He=function(e){var t=e.input,s=e.meta,a=Object(Se.a)(e,Te),n=s.touched&&s.error,r=s.active;return Object(Z.jsx)("div",{className:Be.a.formControl,children:Object(Z.jsxs)("label",{className:n?Be.a.formControl+" "+Be.a.error:r?Be.a.formControl+" "+Be.a.active:Be.a.formControl,children:[Object(Z.jsx)("input",Object(j.a)(Object(j.a)({},t),a)),n?Object(Z.jsx)("span",{className:Be.a.spanError,children:s.error}):""]})})},Ge=function(e){Object(J.a)(s,e);var t=Object(V.a)(s);function s(){var e;Object(D.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).fileInput=n.a.createRef(),e}return Object(W.a)(s,[{key:"render",value:function(){var e,t,s,a=this.props,n=a.input,r=a.dataAllowedFileExtensions,i=this.props.meta.invalid,c=this.props.meta.dirty;c||(i=!1);return Object(Z.jsx)("div",{className:Be.a.formControl,children:Object(Z.jsxs)("div",{className:Be.a.container,children:[Object(Z.jsx)("input",{type:"file",onChange:function(e){e.preventDefault();var t=Object(d.a)(e.target.files);n.onChange(t)},"data-allowed-file-extensions":r,ref:this.fileInput,className:Be.a.inputPhoto,id:"photo"}),Object(Z.jsx)("label",{htmlFor:"photo",className:i?Be.a.label+" "+Be.a.error:Be.a.label,children:"Upload"}),Object(Z.jsx)(ze,{text:null!==(e=null===(t=this.fileInput.current)||void 0===t||null===(s=t.files[0])||void 0===s?void 0:s.name)&&void 0!==e?e:"",hasError:i,meta:this.props.meta,isDirty:c}),i?Object(Z.jsx)("span",{className:Be.a.spanErrorFortextaream,children:this.props.meta.error}):""]})})}}]),s}(n.a.Component),De=Ce(100),We=Ce(60),Je=Ce(13),Ve=(H=2,function(e){return e&&e.length<H?Object(Z.jsx)("div",{className:ye.a.text,children:"Min length is ".concat(H," symbols")}):void 0}),Qe=Object(Ue.a)({form:"registration"})((function(e){return Object(Z.jsx)("div",{children:Object(Z.jsx)("form",{className:Fe.a.form,children:Object(Z.jsxs)("div",{className:Fe.a.formContainer,children:[Object(Z.jsx)("div",{className:Fe.a.fieldName,children:Object(Z.jsx)(Pe.a,{className:Fe.a.inputName,placeholder:"Your name",component:He,name:"name",validate:[Me,We,Ve]})}),Object(Z.jsx)("div",{className:Fe.a.fieldEmail,children:Object(Z.jsx)(Pe.a,{className:Fe.a.inputEmail,placeholder:"Email",component:He,name:"email",validate:[Me,we,De]})}),Object(Z.jsx)("div",{className:Fe.a.fieldPhone,children:Object(Z.jsx)(Pe.a,{className:Fe.a.inputPhone,placeholder:"Phone",component:He,name:"phone",validate:[Me,Ee,Je]})}),Object(Z.jsxs)("div",{className:Fe.a.positionsGroup,children:[Object(Z.jsx)("label",{children:"Select your position"}),Object(Z.jsx)("div",{className:Fe.a.positions,children:e.positionsId.map((function(e){return Object(Z.jsxs)("div",{className:Fe.a.positionsInput,children:[Object(Z.jsx)(Pe.a,{name:"position",component:"input",type:"radio",value:String(e.id),validate:Re,id:e.id,className:Fe.a.inputRadio}),e.name,Object(Z.jsx)("label",{className:Fe.a.labelForInputRadio,htmlFor:e.id})]},e.id)}))})]}),Object(Z.jsx)("div",{children:Object(Z.jsx)(Pe.a,{name:"photo",component:Ge,type:"file",dataAllowedFileExtensions:"jpg png bmp",validate:[Ae,Me]})}),Object(Z.jsx)("div",{className:Fe.a.button,children:Object(Z.jsx)(ee,{onClick:e.handleSubmit,disabled:e.pristine||e.invalid})})]})})})})),Ye=Object(o.b)((function(e){return{formData:e.form}}),null)((function(e){return Object(Z.jsx)("section",{className:Fe.a.regForm,id:"sing up",children:Object(Z.jsxs)("div",{className:X.a.container,children:[Object(Z.jsx)("h1",{children:"Register to get a work"}),Object(Z.jsx)("h2",{children:"Your personal data is stored according to the Privacy Policy"}),Object(Z.jsx)("div",{children:Object(Z.jsx)(Qe,{onSubmit:function(t){e.registrUser(t.name,t.email,t.phone,t.position,t.photo)},positionsId:e.positionsId})}),Object(Z.jsxs)("div",{className:Fe.a.footprint,children:[Object(Z.jsx)("div",{className:Fe.a.footprintImgBig,children:Object(Z.jsx)("img",{src:"Images/Footprint.svg",alt:"Footprint"})}),Object(Z.jsx)("div",{className:Fe.a.footprintImgMid,children:Object(Z.jsx)("img",{src:"Images/Footprint2.svg",alt:"Footprint"})}),Object(Z.jsx)("div",{className:Fe.a.footprintImgLow,children:Object(Z.jsx)("img",{src:"Images/Footprint2.svg",alt:"Footprint"})})]})]})})})),qe=function(e){Object(J.a)(s,e);var t=Object(V.a)(s);function s(){return Object(D.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersPosition()}},{key:"render",value:function(){return Object(Z.jsx)(Ye,{registrUser:this.props.registrUser,positionsId:this.props.positionsId})}}]),s}(n.a.Component),Xe=Object(o.b)((function(e){return{positionsId:e.usersPage.positionsId}}),(function(e){return{registrUser:function(t,s,a,n,r){e(function(e,t,s,a,n){return function(){var r=Object(u.a)(h.a.mark((function r(i){var c,o;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=Number(a),r.next=3,g();case 3:(o=r.sent).data.success&&(x(o,e,t,s,c,n),i(E(!0)));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,s,a,n,r))},getUsersPosition:function(){e(function(){var e=Object(u.a)(h.a.mark((function e(t,s){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:a=e.sent,t((s=a.data.positions,{type:N,positions:s}));case 4:case"end":return e.stop()}var s}),e)})));return function(t,s){return e.apply(this,arguments)}}())}}}))(qe),$e=Xe,Ke=s(39),Ze=s.n(Ke),et=function(e){return Object(Z.jsx)("div",{className:Ze.a.blur,children:Object(Z.jsx)("div",{className:X.a.container,children:Object(Z.jsxs)("div",{className:Ze.a.modal,children:[Object(Z.jsxs)("div",{className:Ze.a.ContainerText,children:[Object(Z.jsx)("h3",{children:"Congratulations"}),Object(Z.jsx)("div",{className:Ze.a.text,children:"You have successfully passed the registration"})]}),Object(Z.jsx)("div",{className:Ze.a.button,children:Object(Z.jsx)(ee,{text:"Great",onClick:function(){return e.toggleModal(!1)}})})]})})})},tt=function(e){Object(J.a)(s,e);var t=Object(V.a)(s);function s(){return Object(D.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"render",value:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(je,{}),Object(Z.jsx)(pe,{}),Object(Z.jsx)(te,{}),Object(Z.jsx)(Ne,{}),Object(Z.jsx)($e,{}),Object(Z.jsx)(ne,{}),Object(Z.jsx)("div",{className:this.props.toggleModalValue?X.a.modalOpen:X.a.modalClosed,children:Object(Z.jsx)(et,{toggleModal:this.props.toggleModal})})]})}}]),s}(n.a.Component),st=Object(o.b)((function(e){return{toggleModalValue:e.usersPage.toggleModal}}),(function(e){return{toggleModal:function(t){e(E(t))}}}))(tt);i.a.render(Object(Z.jsx)(o.a,{store:G,children:Object(Z.jsx)(st,{})}),document.getElementById("root")),c()},26:function(e,t,s){e.exports={about:"About_about__31F2I",container_items:"About_container_items__3xeOA",img_item2:"About_img_item2__3TFpO",img_item3:"About_img_item3__24V1j",text_item:"About_text_item__2dA3N",text:"About_text__1n3Ds",button_text:"About_button_text__kxQNo",button_text_div:"About_button_text_div__U0WdK",img_item1:"About_img_item1__21vLa"}},32:function(e,t,s){e.exports={main:"Main_main__ZApvt",banner:"Main_banner__PYYgZ",item:"Main_item__3bc3n",item_text1:"Main_item_text1__2mj8s",item_text2:"Main_item_text2__2uzrh",item_button:"Main_item_button__3YIF2"}},33:function(e,t,s){e.exports={text:"Validators_text__1V1vU"}},39:function(e,t,s){e.exports={blur:"Modal_blur__21YfP",modal:"Modal_modal__37Nww",ContainerText:"Modal_ContainerText__1smAD",text:"Modal_text__3wybi",button:"Modal_button__1HnJo"}},5:function(e,t,s){e.exports={blur:"BurgerMenu_blur__3ufOV",main:"BurgerMenu_main__3qIB_",header_li:"BurgerMenu_header_li__1toNK",link:"BurgerMenu_link__h_QUG",menu:"BurgerMenu_menu__382di"}},73:function(e,t,s){e.exports={button:"Button_button__30zzF",disabled:"Button_disabled__34bzI"}},74:function(e,t,s){e.exports={footer:"Footer_footer__fIHO2",title:"Footer_title__1Wwtf"}},8:function(e,t,s){e.exports={regForm:"RegForm_regForm__1PJpE",footprint:"RegForm_footprint__bL50q",footprintImgBig:"RegForm_footprintImgBig__3lVzk",footprintImgMid:"RegForm_footprintImgMid__3QmWA",footprintImgLow:"RegForm_footprintImgLow__2llKm",form:"RegForm_form__JOXF-",formContainer:"RegForm_formContainer__1S_kl",fieldEmail:"RegForm_fieldEmail__2NtUI",fieldPhone:"RegForm_fieldPhone__36lc1",inputName:"RegForm_inputName__3jQQd",inputEmail:"RegForm_inputEmail__2QvHh",inputPhone:"RegForm_inputPhone__2WxcX",positionsGroup:"RegForm_positionsGroup__og0zB",positions:"RegForm_positions__2IT_a",positionsInput:"RegForm_positionsInput__2Gss4",inputRadio:"RegForm_inputRadio__1aXLW",labelForInputRadio:"RegForm_labelForInputRadio__3YpIh",button:"RegForm_button__7d6zN"}}},[[244,1,2]]]);
//# sourceMappingURL=main.e23c273b.chunk.js.map