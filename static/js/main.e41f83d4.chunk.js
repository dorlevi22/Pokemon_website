(this.webpackJsonpPokemon_website=this.webpackJsonpPokemon_website||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Logo.e1b54715.png"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);var s=a(1),c=a(2),l=a(4),m=a(3);a(15);String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};for(var p=function(e){var t=e.name,a=e.id,n=e.types,o=e.image,i=e.onCardClick,s=n.map((function(e){return e.type.name.capitalize()}));return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",id:"card",onClick:function(){return i(a)}},r.a.createElement("div",null,r.a.createElement("h2",null,t.capitalize()),r.a.createElement("img",{src:o,alt:"picture",height:"200",width:"200"}),r.a.createElement("p",null,a),r.a.createElement("p",null,"Types: ",s.join(", "))))},u=[],h=1;h<=150;)u.push("https://pokeres.bastionbot.org/images/pokemon/"+h+".png"),h++;var d=function(e){var t=e.pokemons,a=e.onCardClick;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,image:u[t[n].id-1],name:t[n].name,types:t[n].types,onCardClick:a})})))},g=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search pokemons",onChange:t}))},E=(a(16),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),a}(n.Component)),f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},k=a(7),b=a.n(k),C=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"logo",src:b.a,height:"200",width:"500"}))};a(17);String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var v=function(e){var t=e.pokemon,a=e.onCardClick,n=e.image,o=t.types.map((function(e){return e.type.name.capitalize()})),i=t.abilities.map((function(e){return e.ability.name.capitalize()}));return r.a.createElement("div",{className:"InfoCard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-40",onClick:function(){return a()}},r.a.createElement("div",null,r.a.createElement("h2",{className:"f1"},t.name.capitalize()),r.a.createElement("img",{src:n,alt:"picture",height:"200",width:"200"}),r.a.createElement("p",null,"#Pokedex: ",t.id),r.a.createElement("p",null,"Types: ",o.join(", ")),r.a.createElement("p",null,"Height: ",t.height),r.a.createElement("p",null,"Weight: ",t.weight),r.a.createElement("p",null,"Abilities: ",i.join(", ")),r.a.createElement("p",null,"Base experience: ",t.base_experience),r.a.createElement("p",{className:"b underline"},"Stats:"),r.a.createElement("p",null,"HP: ",t.stats[0].base_stat),r.a.createElement("p",null,"ATTACK: ",t.stats[1].base_stat),r.a.createElement("p",null,"DEFENCE: ",t.stats[2].base_stat),r.a.createElement("p",null,"SPECIAL-ATTACK: ",t.stats[3].base_stat),r.a.createElement("p",null,"SPECIAL-DEFENCE: ",t.stats[4].base_stat),r.a.createElement("p",null,"SPEED: ",t.stats[5].base_stat)))},w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onCardClick=function(t){"home"===e.state.page?(e.setState({page:"card"}),e.setState({pokemon_to_show:t})):(e.setState({page:"home"}),e.setState({pokemon_to_show:0}))},e.state={pokemons:[],searchfield:"",page:"home",pokemon_to_show:0,pokemons_img:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){for(var e=[],t=[],a=[],n=1;n<=150;)e.push("https://pokeapi.co/api/v2/pokemon/"+n+"/"),a.push("https://pokeres.bastionbot.org/images/pokemon/"+n+".png"),n++;this.setState({pokemons_img:a}),Promise.all(e.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){e.map((function(e){return t.push(e)}))})),this.state.pokemons=t}},{key:"render",value:function(){var e=this,t=this.state.pokemons.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return"home"===this.state.page?r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(d,{pokemons:t,onCardClick:this.onCardClick})))):r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(v,{pokemon:this.state.pokemons[this.state.pokemon_to_show-1],onCardClick:this.onCardClick,image:this.state.pokemons_img[this.state.pokemon_to_show-1]}))}}]),a}(n.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e41f83d4.chunk.js.map