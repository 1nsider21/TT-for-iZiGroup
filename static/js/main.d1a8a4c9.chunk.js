(this.webpackJsonptt_for_izi_group=this.webpackJsonptt_for_izi_group||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(5),o=n.n(c),u=n(3),i=n.n(u),d=n(4),l=n(6),j=n(7),p=n(8),h=n(10),m=n(9),b=(n(18),function(e){var t="https://randomuser.me/api/?results=".concat(e);return fetch(t).then((function(e){return e.json()})).then((function(e){return e.results}))}),f=n(11),O=(n(19),n(20),function(e){var t=e.name.first,n=e.email,s=e.picture.large,a=e.phone;return Object(r.jsxs)("div",{className:"user__item",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:s,alt:t})}),Object(r.jsx)("p",{children:t}),Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:n})]})}),v=function(e){var t=e.randomUsers,n=e.query;return Object(r.jsx)("div",{className:"users",children:t.filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())||e.phone.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(r.jsx)(O,Object(f.a)({},e),e.login.uuid)}))})};v.defaultProps={randomUsers:[]};var x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).loadRandomUsers=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,r.setState({randomUsers:[].concat(Object(d.a)(r.state.randomUsers),Object(d.a)(n))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleAddButtonClick=function(){var e=+r.addUsersInput.current.value;e<=0||""===e||r.loadRandomUsers(e),r.addUsersInput.current.value=""},r.addUsersInput=a.a.createRef(),r.state={randomUsers:[],query:""},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.loadRandomUsers(10)}},{key:"render",value:function(){var e=this,t=this.state,n=t.randomUsers,s=t.query;return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{children:"Random user genarator"}),Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)("input",{type:"text",className:"search-input",placeholder:"Search users",onChange:function(t){e.setState({query:t.target.value})}}),Object(r.jsxs)("div",{className:"add-group",children:[Object(r.jsx)("input",{type:"number",className:"add-input",placeholder:"Add users",ref:this.addUsersInput}),Object(r.jsx)("button",{type:"button",className:"add-button",onClick:this.handleAddButtonClick,children:"Add users"})]})]})]}),Object(r.jsx)(v,{randomUsers:n,query:s})]})}}]),n}(a.a.Component);n(21);o.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d1a8a4c9.chunk.js.map