(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"hurray1",(function(){return M})),a.d(r,"sad1",(function(){return W})),a.d(r,"nice1",(function(){return Q})),a.d(r,"thisSucks1",(function(){return R})),a.d(r,"wow1",(function(){return U})),a.d(r,"bestFriends",(function(){return X})),a.d(r,"leavingParty",(function(){return Z}));var n=a(1),o=a.n(n),s=a(0),i=a.n(s),c=a(22),d=a.n(c),u=a(16),p=a(15),l=a(65),v=a.n(l),b=a(66),f=a.n(b),h={stage:"initial"},m=2,g=6,y=10,_=a(67),k=a.n(_);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"reset_game":return{stage:"initial"};case"start_game":return"initial"!==e.stage?e:{stage:"choose_name"};case"set_name":return"choose_name"!==e.stage?e:t.payload?{stage:"choose_weapon",name:t.payload}:e;case"unset_name":return"choose_weapon"!==e.stage?e:{stage:"choose_name"};case"select_weapon":return"choose_weapon"!==e.stage?e:{stage:"choose_boss",player:{name:e.name,weapon:t.payload,vibes:7}};case"unselect_weapon":return"choose_boss"!==e.stage?e:{stage:"choose_weapon",name:e.player.name};case"select_boss":return"choose_boss"!==e.stage?e:{stage:"fight",player:e.player,boss:t.payload};case"change_player_vibes":return"fight"!==e.stage?e:{stage:"fight",player:j(e.player,t.payload),boss:e.boss};case"change_boss_vibes":return"fight"!==e.stage?e:{stage:"fight",player:e.player,boss:j(e.boss,t.payload)};default:return e||h}}function j(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{vibes:k()(e.vibes+t,0,y)})}a(23),a(59);var S=a(68),F=a.n(S);function A(e){return e.vibes===y}function C(e,t){return 0!==e.vibes&&0===t.vibes}function x(e,t){return e.vibes!==y&&t.vibes===y}function E(e,t){return e.vibes>t.vibes}function P(e,t){return e.vibes<t.vibes}var B=a(69),D=a.n(B),G=a(70),N=a.n(G),T=a(71),J=a.n(T),L=a(72),z=a.n(L),K=a(73),V=a.n(K),Y=a(74),q=a.n(Y),H=a(75),I=a.n(H),M={src:D.a,category:"boost_vibes"},W={src:N.a,category:"hurt_vibes"},Q={src:J.a,category:"boost_vibes"},R={src:z.a,category:"hurt_vibes"},U={src:V.a,category:"boost_vibes"},X={src:q.a},Z={src:I.a},$=Object.keys(r).map(e=>r[e]);function ee(e){var t=$.filter(t=>t.category===e);te(F()(t))}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=new Audio(e.src);a.volume=t,a.play()}var ae=e=>{for(var t of $)te(t,0);return t=>a=>{var r=e.getState(),n=t(a),o=e.getState();return"fight"===r.stage&&"fight"===o.stage&&(!function(e,t){return A(t.player)&&x(e.boss,t.boss)||A(t.boss)&&x(e.player,t.player)}(r,o)?!function(e,t){return C(e.player,t.player)||C(e.boss,t.boss)}(r,o)?!function(e,t){return P(e.player,t.player)||P(e.boss,t.boss)}(r,o)?function(e,t){return E(e.player,t.player)||E(e.boss,t.boss)}(r,o)&&ee("hurt_vibes"):ee("boost_vibes"):te(Z):te(X)),n}};function re(){return Object(u.b)()}var ne=a(76),oe=a.n(ne),se=a(34),ie=a.n(se);function ce(e){var{orientation:t,children:a}=e;return o()("div",{className:oe()({[ie.a.root]:!0,[ie.a.vertical]:"vertical"==t})},void 0,a)}ce.defaultProps={orientation:"horizontal"};var de=a(2),ue=a(3);function pe(e){var t=re(),a=()=>t({type:"start_game"});return Object(ue.a)("enter",a),Object(ue.a)("space",a),o()(ce,{},void 0,o()("div",{style:{alignSelf:"center"}},void 0,o()(de.a,{onClick:a},void 0,"Start Game")))}var le=o()("h1",{},void 0,"Enter Your Name");function ve(e){var[t,a]=Object(s.useState)(""),r=re(),n=()=>r(function(e){return{type:"set_name",payload:e}}(t)),i=()=>r({type:"reset_game"});return Object(ue.a)("esc",i),o()(ce,{},void 0,o()("div",{style:{alignSelf:"center"}},void 0,le,o()(de.d,{autoFocus:!0,value:t,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&n(),"Escape"===e.key&&i()}})," ",o()(de.a,{onClick:n},void 0,"Set Name")))}var be=[{name:"Private Slack Channel",attacks:[{header:"Attack 1",description:"Lock down"},{header:"Attack 2",description:"Exclude"},{header:"Attack 3",description:"@-mention"}]},{name:"Inside Joke Stick",attacks:[{header:"Attack 1",description:"Make inside joke"},{header:"Attack 2",description:"Laugh"},{header:"Attack 3",description:"Clown around"}]},{name:"Side Shave",attacks:[{header:"Attack 1",description:"Hair flip"},{header:"Attack 2",description:"Body mod"},{header:"Attack 3",description:"Compliment"}]},{name:"Judgement Gavel",attacks:[{header:"Attack 1",description:"Call for order"},{header:"Attack 2",description:"Pass judgement"},{header:"Attack 3",description:"Overrule objection"}]},{name:"Poi Balls",attacks:[{header:"Attack 1",description:"Spin"},{header:"Attack 2",description:"Dazzle"},{header:"Attack 3",description:"Demonstrate"}]}];function fe(e){var t=re();return Object(ue.a)("esc",()=>t({type:"unset_name"})),o()(ce,{},void 0,o()("div",{style:{alignSelf:"center"}},void 0,o()("h1",{style:{marginBottom:16}},void 0,"Choose Your Weapon"),o()(de.b,{},void 0,be.map(e=>o()("li",{style:{marginBottom:16}},e.name,o()("span",{},void 0,e.name)," ",o()(de.a,{onClick:()=>(e=>{console.trace("selected weapon"),t(function(e){return{type:"select_weapon",payload:e}}(e))})(e)},void 0,"Select"))))))}var he=[{vibes:5,name:"Karen From Marketing",weapon:{name:"Asana",attacks:[{header:"Favorite time of day",description:"On time"},{header:"Favorite TV show",description:"The Bachelor"},{header:"Favorite tool",description:"Shared Google calendar for syncing ClassPass with all her friends"}]}},{vibes:6,name:"Chad From Sales",weapon:{name:"Beer Staff",attacks:[{header:"Favorite gesture",description:"Smile and point"},{header:"Favorite place",description:"Box seats at Giants game"},{header:"Favorite part of self",description:"Perfect hair"}]}},{vibes:7,name:"Levi The CEO",weapon:{name:"Tesla",attacks:[{header:"Favorite meal system",description:"Thistle"},{header:"Favorite personality system",description:"Enneagram"},{header:"Favorite clothes since doing Ayahuasca",description:"Custom heather-gray poncho"}]}}];function me(e){var t=re();return Object(ue.a)("esc",()=>t({type:"unselect_weapon"})),o()(ce,{},void 0,o()("div",{style:{alignSelf:"center"}},void 0,o()("h1",{style:{marginBottom:16}},void 0,"Choose Your Boss"),o()(de.b,{},void 0,he.map(e=>o()("li",{style:{marginBottom:16}},e.name,o()("span",{},void 0,e.name)," ",o()(de.a,{onClick:()=>(e=>t(function(e){return{type:"select_boss",payload:e}}(e)))(e)},void 0,"Select"))))))}a(139);var ge=a(77),ye=a.n(ge);function _e(){return o()("div",{style:{flexGrow:1}})}var ke=a(35),we=a.n(ke);function Oe(e){var{player:t,boss:a}=e,r=re(),n=()=>r({type:"change_player_vibes",payload:-1}),s=()=>r({type:"change_player_vibes",payload:1}),i=()=>r({type:"change_boss_vibes",payload:-1}),c=()=>r({type:"change_boss_vibes",payload:1});return Object(ue.a)("q",n),Object(ue.a)("w",s),Object(ue.a)("[",i),Object(ue.a)("]",c),Object(ue.a)("esc",()=>r({type:"reset_game"})),o()(ce,{},void 0,o()(xe,{fighter:t,boostFn:s,hurtFn:n}),o()(xe,{fighter:a,boostFn:c,hurtFn:i}))}var je=o()("br",{}),Se=o()("br",{}),Fe=o()("br",{}),Ae=o()("br",{}),Ce=o()(_e,{});function xe(e){var{fighter:t,hurtFn:a,boostFn:r}=e;return o()("div",{className:we.a.fighterSection},void 0,o()("h2",{},void 0,"👤 ",t.name),je,o()(Be,{vibes:t.vibes,max:y}),Se,Fe,Ae,o()("h3",{style:{marginBottom:16}},void 0,"🗡️ ",t.weapon.name),o()(de.b,{},void 0,t.weapon.attacks.map(e=>{var{header:t,description:a}=e;return o()("li",{style:{marginBottom:16}},t,o()("strong",{},void 0,t,": "),o()("span",{},void 0,a))})),Ce,o()("div",{className:we.a.buttons},void 0,o()(de.a,{onClick:()=>a()},void 0,"Hurt vibes"),o()(de.a,{onClick:()=>r()},void 0,"Boost vibes")))}var Ee=o()("strong",{},void 0,"Vibe Level:"),Pe=o()("br",{});function Be(e){var{vibes:t,max:a}=e,r=(()=>t<=0?"vibes killed":t<=m?"regretting this experience":t<=g?"having second thoughts":t<y?"vibin'":"out of this world")(),n=(()=>t<=m?{error:!0}:t<=g?{warning:!0}:t<y?{success:!0}:{primary:!0})();return o()("div",{},void 0,o()("div",{},void 0,Ee," ",r),Pe,i.a.createElement(de.c,ye()({value:t,max:a},n)))}var De=o()("div",{},void 0,"Error");function Ge(){return De}var Ne=o()(Ge,{});var Te,Je=function(){var e,t=(e=e=>e,Object(u.c)(e));switch(t.stage){case"initial":return i.a.createElement(pe,t);case"choose_name":return i.a.createElement(ve,t);case"choose_weapon":return i.a.createElement(fe,t);case"choose_boss":return i.a.createElement(me,t);case"fight":return i.a.createElement(Oe,t);default:return t.stage,Ne}},Le=(a(140),Te=Object(p.a)(v.a,ae),Object(p.c)(O,Te));window.store=Le,d.a.render(o()(u.a,{store:Le},void 0,o()(Je,{})),document.getElementById("app"))},34:function(e,t,a){e.exports={root:"root___2n_im",vertical:"vertical___3O9b5"}},35:function(e,t,a){e.exports={fighterSection:"fighterSection___1cKVC",buttons:"buttons___2q_fd"}},69:function(e,t,a){e.exports=a.p+"sounds/4503ffbf5846e7c923f5784d80eefdbf.mp3"},70:function(e,t,a){e.exports=a.p+"sounds/2b307a34a496018e8b15e0019b51f560.mp3"},71:function(e,t,a){e.exports=a.p+"sounds/042b6984c0046a12376d4643010badc2.mp3"},72:function(e,t,a){e.exports=a.p+"sounds/4c85cd22e801b840bb86474d3f2c2a36.mp3"},73:function(e,t,a){e.exports=a.p+"sounds/129cfad7ea9a8a92cb681eff01ca1588.mp3"},74:function(e,t,a){e.exports=a.p+"sounds/6698fca4aa3ac0aed95a2a79438080cf.mp3"},75:function(e,t,a){e.exports=a.p+"sounds/7f7c8d896f74e55de85d2db0234460fd.mp3"}},[[141,1,2]]]);
//# sourceMappingURL=main.6f0053642c87baeec965.js.map