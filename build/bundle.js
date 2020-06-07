var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function u(){return h(" ")}function d(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.data!==t&&(e.data=t)}let f;function w(e){f=e}function g(e){(function(){if(!f)throw new Error("Function called outside component initialization");return f})().$$.on_mount.push(e)}const y=[],b=[],v=[],L=[],R=Promise.resolve();let k=!1;function $(e){v.push(e)}let U=!1;const C=new Set;function x(){if(!U){U=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];w(t),T(t.$$)}for(y.length=0;b.length;)b.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];C.has(t)||(C.add(t),t())}v.length=0}while(y.length);for(;L.length;)L.pop()();k=!1,U=!1,C.clear()}}function T(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const M=new Set;let _;function P(e,t){e&&e.i&&(M.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(M.has(e))return;M.add(e),_.c.push(()=>{M.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function S(e){e&&e.c()}function H(e,n,o){const{fragment:a,on_mount:r,on_destroy:s,after_update:c}=e.$$;a&&a.m(n,o),$(()=>{const n=r.map(t).filter(l);s?s.push(...n):i(n),e.$$.on_mount=[]}),c.forEach($)}function G(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(e,t){-1===e.$$.dirty[0]&&(y.push(e),k||(k=!0,R.then(x)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,l,o,a,r,c,h=[-1]){const u=f;w(t);const d=l.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:h};let m=!1;if(p.ctx=o?o(t,d,(e,n,...i)=>{const l=i.length?i[0]:n;return p.ctx&&r(p.ctx[e],p.ctx[e]=l)&&(p.bound[e]&&p.bound[e](l),m&&I(t,e)),n}):[],p.update(),m=!0,i(p.before_update),p.fragment=!!a&&a(p.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);p.fragment&&p.fragment.l(e),e.forEach(s)}else p.fragment&&p.fragment.c();l.intro&&P(t.$$.fragment),H(t,l.target,l.anchor),x()}w(u)}class A{$destroy(){G(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function O(t){let n,i,l,o,d,f,w,g,y,b,v,L,R,k,$,U,C,x;return{c(){n=c("main"),i=c("h1"),l=h(t[0]),o=u(),d=c("h4"),d.innerHTML='\n    Building a game in\n    <a href="https://flutter.dev/">#flutter</a>\n    without any libraries or frameworks\n  ',f=u(),w=c("iframe"),y=u(),b=c("p"),v=c("a"),L=h("Follow on Twitch"),R=h("\n    |\n    "),k=c("a"),$=h("Subscribe on YouTube"),U=h("\n    |\n    "),C=c("a"),x=h("Follow on Twitter"),p(w,"title","YouTube"),p(w,"class","center"),p(w,"width",t[5]),p(w,"height",t[6]),w.src!==(g=t[1])&&p(w,"src",g),p(w,"frameborder","0"),p(w,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture"),w.allowFullscreen=!0,p(v,"href",t[3]),p(v,"target","_blank"),p(k,"href",t[2]),p(k,"target","_blank"),p(C,"href",t[4]),p(C,"target","_blank")},m(e,t){r(e,n,t),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(n,y),a(n,b),a(b,v),a(v,L),a(b,R),a(b,k),a(k,$),a(b,U),a(b,C),a(C,x)},p(e,[t]){1&t&&m(l,e[0]),32&t&&p(w,"width",e[5]),64&t&&p(w,"height",e[6]),2&t&&w.src!==(g=e[1])&&p(w,"src",g),8&t&&p(v,"href",e[3]),4&t&&p(k,"href",e[2]),16&t&&p(C,"href",e[4])},i:e,o:e,d(e){e&&s(n)}}}function q(e,t,n){let i,l,{title:o}=t,{embedPlaylist:a}=t,{subChannelURL:r}=t,{twitchChannelURL:s}=t,{twitterURL:c}=t,{windowWidth:h}=t;return e.$set=e=>{"title"in e&&n(0,o=e.title),"embedPlaylist"in e&&n(1,a=e.embedPlaylist),"subChannelURL"in e&&n(2,r=e.subChannelURL),"twitchChannelURL"in e&&n(3,s=e.twitchChannelURL),"twitterURL"in e&&n(4,c=e.twitterURL),"windowWidth"in e&&n(7,h=e.windowWidth)},e.$$.update=()=>{128&e.$$.dirty&&n(5,i=Math.min(.66*h,560)),32&e.$$.dirty&&n(6,l=i/1.77)},[o,a,r,s,c,i,l,h]}class E extends A{constructor(e){super(),z(this,e,q,O,o,{title:0,embedPlaylist:1,subChannelURL:2,twitchChannelURL:3,twitterURL:4,windowWidth:7})}}function F(t){let n,i,l,o,d,f,w,g,y,b,v,L,R,k,$,U,C,x,T,M,_,P,W,S,H,G;return{c(){n=c("main"),i=c("h1"),l=h(t[1]),o=u(),d=c("h2"),d.textContent="Source and Releases",f=u(),w=c("p"),g=c("a"),y=h("Latest Release"),b=u(),v=c("span"),v.textContent="now with multi player support and a beautiful universe!",L=u(),R=c("p"),k=c("a"),$=h("Source on Github"),U=u(),C=c("h2"),C.textContent="Play the Web Version",x=u(),T=c("p"),T.textContent="Keep in mind that the native applications performs much better",M=u(),_=c("iframe"),W=u(),S=c("p"),H=c("a"),G=h("Full Screen"),p(g,"href",t[3]),p(g,"target","_blank"),p(v,"class","italic svelte-10b9e0n"),p(k,"href",t[4]),p(k,"target","_blank"),p(_,"title","game"),p(_,"class","center"),p(_,"width",t[5]),p(_,"height",t[6]),_.src!==(P=t[2])&&p(_,"src",P),p(_,"frameborder","0"),p(_,"allow","accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture"),_.allowFullscreen=!0,p(H,"href",t[2]),p(H,"target","_blank")},m(e,s){r(e,n,s),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(w,g),a(g,y),a(w,b),a(w,v),a(n,L),a(n,R),a(R,k),a(k,$),a(n,U),a(n,C),a(n,x),a(n,T),a(n,M),a(n,_),t[8](_),a(n,W),a(n,S),a(S,H),a(H,G)},p(e,[t]){2&t&&m(l,e[1]),8&t&&p(g,"href",e[3]),16&t&&p(k,"href",e[4]),32&t&&p(_,"width",e[5]),64&t&&p(_,"height",e[6]),4&t&&_.src!==(P=e[2])&&p(_,"src",P),4&t&&p(H,"href",e[2])},i:e,o:e,d(e){e&&s(n),t[8](null)}}}function N(e,t,n){let i,l,{title:o}=t,{gameWebURL:a}=t,{latestReleaseURL:r}=t,{githubSourceURL:s}=t,{iframe:c=null}=t,{windowWidth:h}=t;return g(()=>c.focus()),e.$set=e=>{"title"in e&&n(1,o=e.title),"gameWebURL"in e&&n(2,a=e.gameWebURL),"latestReleaseURL"in e&&n(3,r=e.latestReleaseURL),"githubSourceURL"in e&&n(4,s=e.githubSourceURL),"iframe"in e&&n(0,c=e.iframe),"windowWidth"in e&&n(7,h=e.windowWidth)},e.$$.update=()=>{128&e.$$.dirty&&n(5,i=Math.min(.66*h,560)),32&e.$$.dirty&&n(6,l=i/1.77)},[c,o,a,r,s,i,l,h,function(e){b[e?"unshift":"push"](()=>{n(0,c=e)})}]}class D extends A{constructor(e){super(),z(this,e,N,F,o,{title:1,gameWebURL:2,latestReleaseURL:3,githubSourceURL:4,iframe:0,windowWidth:7})}}function j(t){let n,i,l,o,d,f,w,g,y,b,v,L,R;return{c(){n=c("main"),i=c("h1"),l=h(t[0]),o=u(),d=c("h2"),d.textContent="Watch live on Twitch",f=u(),w=c("div"),g=u(),y=c("a"),b=h("Twitch Channel"),v=h("\n  |\n  "),L=c("a"),R=h("YouTube Playlist"),p(w,"id","twitch-embed"),p(y,"href",t[1]),p(y,"target","_blank"),p(L,"href",t[2]),p(L,"target","_blank")},m(e,t){r(e,n,t),a(n,i),a(i,l),a(n,o),a(n,d),a(n,f),a(n,w),a(n,g),a(n,y),a(y,b),a(n,v),a(n,L),a(L,R)},p(e,[t]){1&t&&m(l,e[0]),2&t&&p(y,"href",e[1]),4&t&&p(L,"href",e[2])},i:e,o:e,d(e){e&&s(n)}}}function B(e,t,n){let i,l,o,{title:a}=t,{twitchChannelURL:r}=t,{twitchChannel:s}=t,{youtubePlaylistURL:c}=t,{windowWidth:h}=t;return g(()=>new window.Twitch.Embed("twitch-embed",{width:i,height:l,layout:o,channel:s})),e.$set=e=>{"title"in e&&n(0,a=e.title),"twitchChannelURL"in e&&n(1,r=e.twitchChannelURL),"twitchChannel"in e&&n(3,s=e.twitchChannel),"youtubePlaylistURL"in e&&n(2,c=e.youtubePlaylistURL),"windowWidth"in e&&n(4,h=e.windowWidth)},e.$$.update=()=>{16&e.$$.dirty&&n(5,i=Math.min(.66*h,1400)),32&e.$$.dirty&&(l=i/1.77),32&e.$$.dirty&&(o=i>900?"video-with-chat":"video")},[a,r,c,s,h]}class V extends A{constructor(e){super(),z(this,e,B,j,o,{title:0,twitchChannelURL:1,twitchChannel:3,youtubePlaylistURL:2,windowWidth:4})}}function J(t){let n,i,l,o,d,m,f,w,g,y,b,v,L,R,k,$,U,C,x,T,M,_,P,W,S,H,G,I,z,A,O,q,E,F,N,D,j,B,V,J,Y,K,X,Q,Z,ee,te,ne,ie,le,oe,ae,re,se,ce,he,ue,de,pe,me,fe,we,ge,ye,be,ve,Le;return{c(){n=c("h1"),i=c("a"),l=h("Multiplayer Client-Server Architecture"),o=u(),d=c("p"),d.innerHTML="<code>Saturday, April 4, 2020</code>",m=u(),f=c("h2"),f.textContent="Terms",w=u(),g=c("h3"),g.textContent="Latency aka RTT aka Ping",y=u(),b=c("ul"),b.innerHTML="<li>round trip time is the time for a client message to result in a received server message</li> \n<li>the larger the RTT is, the larger is the latency</li>",v=u(),L=c("h4"),L.textContent="Jitter",R=u(),k=c("ul"),k.innerHTML="<li>the rate of change in the RTT</li>",$=u(),U=c("h3"),U.textContent="Authorative Server",C=u(),x=c("ul"),x.innerHTML="<li>game happens in server under our control</li> \n<li>clients just send inputs and render world as simulated by the server</li>",T=u(),M=c("h3"),M.textContent="Lockstep",_=u(),P=c("ul"),P.innerHTML="<li>client waits for server messages before updating or rendering anything</li> \n<li>used in Doom, worked well over LAN, but was unplayable over the internet</li>",W=u(),S=c("h2"),S.textContent="Server Time Step",H=u(),G=c("ul"),G.innerHTML="<li>goal is to decouple server updates from client command frequency</li> \n<li>queue player inputs without any processing (game loop does not run yet)</li> \n<li>instead game loop runs at much lower frequency i.e. every 100ms (time step)</li> \n<li>applies all queued player inputs<ul><li>to make physics more realistic they may be applied at smaller time deltas</li></ul></li> \n<li>then we take snapshot of resulting game state and broadcast to clients</li> \n<li>in order for client to successfully predict other entities in between updates it needs to\nhave sufficient info, in our game that means knowing the players + bullets velocity vectors</li>",I=u(),z=c("h3"),z.textContent="Prediction",A=u(),O=c("ul"),O.innerHTML='<li>predict local player and other entities from last given state<ul><li>in our game that means applying entity velocity onto last known entity\nposition considering time delta</li></ul></li> \n<li>when we get server state we&#39;ll <em>correct</em> our prediction</li> \n<li>best done via shared game simulation code<ul><li>in our game controller code is shared, so we are golden</li></ul></li> \n<li>the more deterministic our game is the better the result</li> \n<li>use message IDs to be able to replay commands that server hasn&#39;t received yet <a href="https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html#server-reconciliation">see</a></li>',q=u(),E=c("h3"),E.textContent="Dead Reckoning",F=u(),N=c("ul"),N.innerHTML="<li>using client side prediction we may result in a slightly different game\nstate than server arrived at </li> \n<li>once we receive an update from the server and it doesn&#39;t match our state, we\ncorrect our assumptions</li> \n<li>falls down when game state is less predictable as that means we&#39;d correct\nour state all the time leading to lots of jumps, i.e. if player direction\nchanges frequently</li>",D=u(),j=c("h3"),j.textContent="Smoothing",B=u(),V=c("ul"),V.innerHTML="<li>correcting client position to position sent by server in one step may lead to jumps</li> \n<li>instead we can correct position slowly over time to make it look <em>smoother</em></li> \n<li>if interpolation work properly smoothing is not required as we know ahead of time where the\nentity will be</li>",J=u(),Y=c("h3"),Y.textContent="Interpolation",K=u(),X=c("ul"),X.innerHTML="<li>on the client show all entities except the player we control in the past</li> \n<li>buffer server game state messages and replay positions of other players delayed<ul><li>usually two packets behind</li></ul></li> \n<li>as a result we see ourselves in the present but everyone else in the past</li> \n<li>as this adds more lag to the opponents it makes lag compensation more importantXC</li> \n<li>adds client complexity</li>",Q=u(),Z=c("h3"),Z.textContent="Lag Compensation",ee=u(),te=c("ul"),te.innerHTML="<li>due to network lag and interpolation we&#39;re aiming at opponent&#39;s past positions</li> \n<li>to fix the server does the following<ul><li>reconstructs the world as we saw it when we fired shot (takes step back in time)</li> \n<li>this means all entities are moved back to where they were in that past</li> \n<li>then processes our action and determines result of shot as it would have happened in the\npast</li> \n<li>then moves game state back to present and sends snapshot - note that if present state is affected by outcome of player action applied in the past that needs to be applied to that present game state</li></ul></li> \n<li>adds server complexity</li>",ne=u(),ie=c("h2"),ie.textContent="Resources",le=u(),oe=c("ul"),oe.innerHTML='<li><a href="https://www.gabrielgambetta.com/client-server-game-architecture.html">Fast-Paced Multiplayer four parts</a></li> \n<li><a href="https://www.gamasutra.com/blogs/MarkMennell/20140929/226628/Making_FastPaced_Multiplayer_Networked_Games_is_Hard.php">Making Fast-Paced Multiplayer Networked Games is Hard</a></li>',ae=u(),re=c("h3"),re.textContent="Valve",se=u(),ce=c("ul"),ce.innerHTML='<li><a href="https://developer.valvesoftware.com/wiki/Prediction">Prediction</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Interpolation">Interpolation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Lag_compensation">Lag Compensation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization">Interpolation / Latency\nCompensation</a></li> \n<li><a href="https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking">Source Multiplayer\nNetworking</a></li>',he=u(),ue=c("h3"),ue.textContent="IT Hare on Software",de=u(),pe=c("ul"),pe.innerHTML='<li><a href="http://ithare.com/chapter-ii-game-entities-and-interactions-from-upcoming-book-development-and-deployment-of-mmog/">Game Entities and Interactions</a></li> \n<li><a href="http://ithare.com/chapter-iii-on-cheating-p2p-and-non-authoritative-servers-from-dd-of-mmog-book/">On Cheating, P2P, and non-Authoritative Servers</a></li> \n<li><a href="Http://ithare.com/mmog-rtt-input-lag-and-how-to-mitigate-them/">MMOG. RTT, Input Lag, and How to Mitigate Them</a></li> \n<li><a href="http://ithare.com/mmog-world-states-and-reducing-traffic/">MMOG: World States and Reducing Traffic</a></li> \n<li><a href="http://ithare.com/mmog-point-to-point-communications-and-non-blocking-rpcs/">MMOG. Point-to-Point Communications and non-blocking RPCs</a></li>',me=u(),fe=c("h3"),fe.textContent="Gaffer On Games",we=u(),ge=c("ul"),ge.innerHTML='<li><a href="https://gafferongames.com/post/deterministic_lockstep/">Deterministic Lockstep</a></li> \n<li><a href="https://gafferongames.com/post/state_synchronization/">State Synchronization</a></li> \n<li><a href="https://gafferongames.com/post/snapshot_interpolation/">Snapshot Interpolation</a></li>',ye=u(),be=c("h3"),be.textContent="Unreal",ve=u(),Le=c("ul"),Le.innerHTML='<li><a href="https://docs.unrealengine.com/udk/Three/NetworkingOverview.html">Unreal Engine 2: Unreal Networking\nArchitecture</a></li> \n<li><a href="https://docs.unrealengine.com/en-US/Gameplay/Networking/Overview/index.html">Unreal Engine 4: Networking Overview</a></li>',p(i,"href",t[0]),p(d,"class","right")},m(e,t){r(e,n,t),a(n,i),a(i,l),r(e,o,t),r(e,d,t),r(e,m,t),r(e,f,t),r(e,w,t),r(e,g,t),r(e,y,t),r(e,b,t),r(e,v,t),r(e,L,t),r(e,R,t),r(e,k,t),r(e,$,t),r(e,U,t),r(e,C,t),r(e,x,t),r(e,T,t),r(e,M,t),r(e,_,t),r(e,P,t),r(e,W,t),r(e,S,t),r(e,H,t),r(e,G,t),r(e,I,t),r(e,z,t),r(e,A,t),r(e,O,t),r(e,q,t),r(e,E,t),r(e,F,t),r(e,N,t),r(e,D,t),r(e,j,t),r(e,B,t),r(e,V,t),r(e,J,t),r(e,Y,t),r(e,K,t),r(e,X,t),r(e,Q,t),r(e,Z,t),r(e,ee,t),r(e,te,t),r(e,ne,t),r(e,ie,t),r(e,le,t),r(e,oe,t),r(e,ae,t),r(e,re,t),r(e,se,t),r(e,ce,t),r(e,he,t),r(e,ue,t),r(e,de,t),r(e,pe,t),r(e,me,t),r(e,fe,t),r(e,we,t),r(e,ge,t),r(e,ye,t),r(e,be,t),r(e,ve,t),r(e,Le,t)},p(e,[t]){1&t&&p(i,"href",e[0])},i:e,o:e,d(e){e&&s(n),e&&s(o),e&&s(d),e&&s(m),e&&s(f),e&&s(w),e&&s(g),e&&s(y),e&&s(b),e&&s(v),e&&s(L),e&&s(R),e&&s(k),e&&s($),e&&s(U),e&&s(C),e&&s(x),e&&s(T),e&&s(M),e&&s(_),e&&s(P),e&&s(W),e&&s(S),e&&s(H),e&&s(G),e&&s(I),e&&s(z),e&&s(A),e&&s(O),e&&s(q),e&&s(E),e&&s(F),e&&s(N),e&&s(D),e&&s(j),e&&s(B),e&&s(V),e&&s(J),e&&s(Y),e&&s(K),e&&s(X),e&&s(Q),e&&s(Z),e&&s(ee),e&&s(te),e&&s(ne),e&&s(ie),e&&s(le),e&&s(oe),e&&s(ae),e&&s(re),e&&s(se),e&&s(ce),e&&s(he),e&&s(ue),e&&s(de),e&&s(pe),e&&s(me),e&&s(fe),e&&s(we),e&&s(ge),e&&s(ye),e&&s(be),e&&s(ve),e&&s(Le)}}}function Y(e,t,n){let{link:i}=t;return e.$set=e=>{"link"in e&&n(0,i=e.link)},[i]}class K extends A{constructor(e){super(),z(this,e,Y,J,o,{link:0})}}function X(t){let n,i,l,o,d,m,f,w,g,y,b,v,L,R,k,$,U,C,x,T,M,_,P,W,S;return{c(){n=c("h1"),i=c("a"),l=h("Appling Multiplayer Strategies to Our Game"),o=u(),d=c("p"),d.innerHTML="<code>Saturday, April 4, 2020</code>",m=u(),f=c("h2"),f.textContent="Main Strategy Used",w=u(),g=c("ul"),g.innerHTML="<li>authoritative server sending updates every 100ms</li> \n<li>client updates are limited to 10/second</li> \n<li>client side prediction is used to exrapolate opponent&#39;s position from previous position and\ntheir velocity</li> \n<li>other players and bullets are predicted on the client from previous position and velocity<ul><li>same controllers as on server are used which allows us to predict collisions client side as\nwell</li></ul></li> \n<li>use dead reckoning to correct client predictions, both for opponents and bullets as well as\nour own player</li>",y=u(),b=c("h2"),b.textContent="Limiting Player Inputs",v=u(),L=c("ul"),L.innerHTML="<li>require 100ms between each shot<ul><li>instead of sending a key press we send <code>bulletCreated(angle)</code></li></ul></li> \n<li>require 100ms between each thrust<ul><li>instead of sending key press we send <code>appliedThrust(anger)</code></li> \n<li>server then calculates velocity</li></ul></li> \n<li>instead of sending rotation input we send <code>updatedAngle(angle)</code></li> \n<li>change of player angle happens in real time but is reported to the server at a 100ms interval\neven if no other client action occured</li>",R=u(),k=c("h2"),k.textContent="Server Processing of Player Inputs",$=u(),U=c("ul"),U.innerHTML="<li>delay execution of action until server tick<ul><li>in the worst case bullet is trailing client side prediction by 100ms</li></ul></li> \n<li>find way to align client input ticks to server ticks</li>",C=u(),x=c("h2"),x.textContent="To be seen",T=u(),M=c("ul"),M.innerHTML="<li>test how well dead reckoning works for our game and try the following if we end up with lots\nof player position jumps</li> \n<li>apply smooting to correct position slowly over time</li> \n<li>if nothing else works look into interpolation</li>",_=u(),P=c("h2"),P.textContent="Smaller Packets",W=u(),S=c("ul"),S.innerHTML="<li>if packets get too large we can omit bullet positions<ul><li>instead rely on client prediction to show bullets in flight</li> \n<li>use server to report created bullets <code>createBullet(bulletID, position, velocity)</code><ul><li>after that client predicts positions</li></ul></li> \n<li>and exploded bullets<ul><li><code>explodedBullet(bulletID, position)</code></li></ul></li></ul></li> \n<li>alternative is to limit amount of bullets / ammo available</li>",p(i,"href",t[0]),p(d,"class","right")},m(e,t){r(e,n,t),a(n,i),a(i,l),r(e,o,t),r(e,d,t),r(e,m,t),r(e,f,t),r(e,w,t),r(e,g,t),r(e,y,t),r(e,b,t),r(e,v,t),r(e,L,t),r(e,R,t),r(e,k,t),r(e,$,t),r(e,U,t),r(e,C,t),r(e,x,t),r(e,T,t),r(e,M,t),r(e,_,t),r(e,P,t),r(e,W,t),r(e,S,t)},p(e,[t]){1&t&&p(i,"href",e[0])},i:e,o:e,d(e){e&&s(n),e&&s(o),e&&s(d),e&&s(m),e&&s(f),e&&s(w),e&&s(g),e&&s(y),e&&s(b),e&&s(v),e&&s(L),e&&s(R),e&&s(k),e&&s($),e&&s(U),e&&s(C),e&&s(x),e&&s(T),e&&s(M),e&&s(_),e&&s(P),e&&s(W),e&&s(S)}}}function Q(e,t,n){let{link:i}=t;return e.$set=e=>{"link"in e&&n(0,i=e.link)},[i]}class Z extends A{constructor(e){super(),z(this,e,Q,X,o,{link:0})}}function ee(t){let n,i,l,o,d,m,f,w,g,y,b,v,L,R,k,$,U,C,x,T,M,_,P,W,S,H,G,I,z,A,O,q;return{c(){n=c("h1"),i=c("a"),l=h("What's left to go to "),o=c("em"),o.textContent='"Production"',d=u(),m=c("p"),m.innerHTML="<code>Friday, May 8, 2020</code>",f=u(),w=c("p"),w.textContent="The game is basically finished at this point. We demonstrated that it is possible to build\nMultiplayer games like this with Flutter.",g=u(),y=c("p"),y.textContent="We also learned that making the server authoritative adds a lot of complexity. Not that it\nisn't solvable, but not worrying about cheaters makes the life of us developers a lot easier ;)",b=u(),v=c("p"),v.innerHTML="Below I&#39;m listing known issues that would need to be considered/fixed before the game as is\nwould be ready to go to <em>&quot;production&quot;</em> to be played by people all over the world.",L=u(),R=c("p"),R.textContent="The video series doesn't include these fixes as it ends here as its purpose was merely to get\npeople excited about building games in general and to demonstrate that Flutter is a viable and\nalso fun technology to do so.",k=u(),$=c("p"),$.textContent="If you're inspired you may continue building the game or build your own.",U=u(),C=c("p"),C.textContent="If you do the former you can start attacking issues listed below and/or refactor the code to\nnot require an authoritative server and get an idea how much easier things become as a result.",x=u(),T=c("p"),T.textContent="Happy Hacking!",M=u(),_=c("h2"),_.textContent="Client Side",P=u(),W=c("ul"),W.innerHTML='<li><p>sync player position smoothly</p> \n<ul><li>when position differs from server sent position don&#39;t jump to it immediately</li> \n<li>instead adjust players velocity so that it converges towards the server position</li> \n<li>over time server and client positions should either sync up or at least they don&#39;t go\nfurther out of sync event though we don&#39;t force correct with a jump</li></ul></li> \n<li><p>client networking</p> \n<ul><li>when client disconnects i.e. I&#39;m in a tunnel it needs to be able to reconnect</li> \n<li>this requires some logic to detect disconnects and have a reconnect strategy, i.e. <a href="https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern">circuit breaker</a> to prevent it trying to reconnect indefinitely</li> \n<li>if reconnection fails tell the client that game is over or similar</li></ul></li>',S=u(),H=c("h2"),H.textContent="Server Side",G=u(),I=c("ul"),I.innerHTML="<li><p>Clean up Games</p> \n<ul><li>as of now games that finished never get collected</li> \n<li>first we need a way to detect if a game is over<ul><li>when only one player is alive</li> \n<li>it is nice to show player still floating around even when game is over</li> \n<li>how long do we give all players to restart game before we collect it</li> \n<li>what if all players disconnect?</li> \n<li>how long can a player be disconnected until it is disqualified and declared dead?</li></ul></li></ul></li> \n<li><p>Server needs to handle client reconnecting</p> \n<ul><li>when client provides game + client ids we reconnect the update streams</li></ul></li> \n<li><p>Make Server resilient</p> \n<ul><li>what happens if server crashes?</li> \n<li>need to have a way to detect that and have it restarted</li> \n<li>this can be handled by tools like systemd or load balancers</li></ul></li> \n<li><p>How do sticky sessions work when we have multiple servers</p> \n<ul><li>only need to fix this once we have certain success and lots of concurrent players</li> \n<li>once we have multiple servers need to figure out how to propagate RPC streams</li> \n<li>which load balancers support those + http2</li></ul></li> \n<li><p>deploy server(s)</p> \n<ul><li>where can we deploy dart servers?</li></ul></li>",z=u(),A=c("h2"),A.textContent="Added Features",O=u(),q=c("ul"),q.innerHTML="<li><p>Pickups</p> \n<ul><li>have health packets to allow players to pickup and increase their health balance</li> \n<li>other pickups could increase player score</li></ul></li> \n<li><p>Black Holes</p> \n<ul><li>draw players in to make things more interesting</li></ul></li> \n<li><p>Visualize Thrust + Bullet State</p> \n<ul><li>players can only apply thrust and shoot at certain intervals</li> \n<li>it would be nice to visualize the time left until we can do either</li> \n<li>it could look similar to the health bar</li></ul></li>",p(i,"href",t[0]),p(m,"class","right")},m(e,t){r(e,n,t),a(n,i),a(i,l),a(i,o),r(e,d,t),r(e,m,t),r(e,f,t),r(e,w,t),r(e,g,t),r(e,y,t),r(e,b,t),r(e,v,t),r(e,L,t),r(e,R,t),r(e,k,t),r(e,$,t),r(e,U,t),r(e,C,t),r(e,x,t),r(e,T,t),r(e,M,t),r(e,_,t),r(e,P,t),r(e,W,t),r(e,S,t),r(e,H,t),r(e,G,t),r(e,I,t),r(e,z,t),r(e,A,t),r(e,O,t),r(e,q,t)},p(e,[t]){1&t&&p(i,"href",e[0])},i:e,o:e,d(e){e&&s(n),e&&s(d),e&&s(m),e&&s(f),e&&s(w),e&&s(g),e&&s(y),e&&s(b),e&&s(v),e&&s(L),e&&s(R),e&&s(k),e&&s($),e&&s(U),e&&s(C),e&&s(x),e&&s(T),e&&s(M),e&&s(_),e&&s(P),e&&s(W),e&&s(S),e&&s(H),e&&s(G),e&&s(I),e&&s(z),e&&s(A),e&&s(O),e&&s(q)}}}function te(e,t,n){let{link:i}=t;return e.$set=e=>{"link"in e&&n(0,i=e.link)},[i]}class ne extends A{constructor(e){super(),z(this,e,te,ee,o,{link:0})}}function ie(t){let n,i,l,o,h,d,m,f,w;const g=new ne({props:{link:"#"+ae}}),y=new Z({props:{link:"#"+le}}),b=new K({props:{link:"#"+oe}});return{c(){n=c("main"),i=c("article"),S(g.$$.fragment),l=u(),o=c("article"),S(y.$$.fragment),h=u(),d=c("p"),m=u(),f=c("article"),S(b.$$.fragment),p(i,"id",ae),p(i,"class","svelte-12amb70"),p(o,"id",le),p(o,"class","svelte-12amb70"),p(d,"class","separator svelte-12amb70"),p(f,"id",oe),p(f,"class","svelte-12amb70")},m(e,t){r(e,n,t),a(n,i),H(g,i,null),a(n,l),a(n,o),H(y,o,null),a(n,h),a(n,d),a(n,m),a(n,f),H(b,f,null),w=!0},p:e,i(e){w||(P(g.$$.fragment,e),P(y.$$.fragment,e),P(b.$$.fragment,e),w=!0)},o(e){W(g.$$.fragment,e),W(y.$$.fragment,e),W(b.$$.fragment,e),w=!1},d(e){e&&s(n),G(g),G(y),G(b)}}}const le="devlog-applying-strategies",oe="devlog-multiplayer-architecture",ae="devlog-batufo-todos";class re extends A{constructor(e){super(),z(this,e,null,ie,o,{})}}function se(t){let n;const i=new re({});return{c(){S(i.$$.fragment)},m(e,t){H(i,e,t),n=!0},p:e,i(e){n||(P(i.$$.fragment,e),n=!0)},o(e){W(i.$$.fragment,e),n=!1},d(e){G(i,e)}}}function ce(e){let t;const n=new V({props:{title:e[1],twitchChannelURL:e[6],twitchChannel:e[5],youtubePlaylistURL:e[9],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),64&t&&(i.twitchChannelURL=e[6]),32&t&&(i.twitchChannel=e[5]),512&t&&(i.youtubePlaylistURL=e[9]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function he(e){let t;const n=new D({props:{title:e[1],gameWebURL:e[4],latestReleaseURL:e[7],githubSourceURL:e[12],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),16&t&&(i.gameWebURL=e[4]),128&t&&(i.latestReleaseURL=e[7]),4096&t&&(i.githubSourceURL=e[12]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function ue(e){let t;const n=new E({props:{title:e[1],embedPlaylist:e[2],subChannelURL:e[3],gameWebURL:e[4],twitterURL:e[8],twitchChannelURL:e[6],latestReleaseURL:e[7],windowWidth:e[17]}});return{c(){S(n.$$.fragment)},m(e,i){H(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.title=e[1]),4&t&&(i.embedPlaylist=e[2]),8&t&&(i.subChannelURL=e[3]),16&t&&(i.gameWebURL=e[4]),256&t&&(i.twitterURL=e[8]),64&t&&(i.twitchChannelURL=e[6]),128&t&&(i.latestReleaseURL=e[7]),131072&t&&(i.windowWidth=e[17]),n.$set(i)},i(e){t||(P(n.$$.fragment,e),t=!0)},o(e){W(n.$$.fragment,e),t=!1},d(e){G(n,e)}}}function de(e){let t,n,l,o,m,f,w,g,y,b,v,L,R,k,$,U,C,x,T,M,S,H,G,I;const z=[ue,he,ce,se],A=[];function O(e,t){return e[0].currentRoute===e[10].home?0:e[0].currentRoute===e[10].game?1:e[0].currentRoute===e[10].watch?2:(1025&t&&(M=!(e[0].currentRoute!==e[10].devlog&&!e[22]())),M?3:-1)}return~(S=O(e,-1))&&(H=A[S]=z[S](e)),{c(){t=c("main"),n=c("nav"),l=c("a"),o=h("Home"),f=u(),w=c("a"),g=h("Game"),b=u(),v=c("a"),L=h("Watch"),k=u(),$=c("a"),U=h("Devlog"),x=u(),T=c("div"),H&&H.c(),p(l,"href",m=e[11]+e[10].home.hash),p(l,"class",e[13]),p(w,"href",y=e[11]+e[10].game.hash),p(w,"class",e[14]),p(v,"href",R=e[11]+e[10].watch.hash),p(v,"class",e[15]),p($,"href",C=e[11]+e[10].devlog.hash),p($,"class",e[16]),p(n,"class","svelte-1719mcr")},m(s,c,h){r(s,t,c),a(t,n),a(n,l),a(l,o),a(n,f),a(n,w),a(w,g),a(n,b),a(n,v),a(v,L),a(n,k),a(n,$),a($,U),a(t,x),a(t,T),~S&&A[S].m(T,null),G=!0,h&&i(I),I=[d(l,"click",e[18]),d(w,"click",e[19]),d(v,"click",e[20]),d($,"click",e[21])]},p(e,[t]){(!G||3072&t&&m!==(m=e[11]+e[10].home.hash))&&p(l,"href",m),(!G||8192&t)&&p(l,"class",e[13]),(!G||3072&t&&y!==(y=e[11]+e[10].game.hash))&&p(w,"href",y),(!G||16384&t)&&p(w,"class",e[14]),(!G||3072&t&&R!==(R=e[11]+e[10].watch.hash))&&p(v,"href",R),(!G||32768&t)&&p(v,"class",e[15]),(!G||3072&t&&C!==(C=e[11]+e[10].devlog.hash))&&p($,"href",C),(!G||65536&t)&&p($,"class",e[16]);let n=S;S=O(e,t),S===n?~S&&A[S].p(e,t):(H&&(_={r:0,c:[],p:_},W(A[n],1,1,()=>{A[n]=null}),_.r||i(_.c),_=_.p),~S?(H=A[S],H||(H=A[S]=z[S](e),H.c()),P(H,1),H.m(T,null)):H=null)},i(e){G||(P(H),G=!0)},o(e){W(H),G=!1},d(e){e&&s(t),~S&&A[S].d(),i(I)}}}function pe(e,t,n){let{title:i}=t,{embedPlaylist:l}=t,{subChannelURL:o}=t,{gameWebURL:a}=t,{twitchChannel:r}=t,{twitchChannelURL:s}=t,{latestReleaseURL:c}=t,{twitterURL:h}=t,{youtubePlaylistURL:u}=t,{state:d}=t,{routes:p}=t,{rootURL:m}=t,{githubSourceURL:f}=t;const w=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=()=>window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,y=()=>location.hash.startsWith(p.devlog.hash);let b,v,L,R,k,$;return window.onresize=()=>{n(17,k=w()),$=g()},e.$set=e=>{"title"in e&&n(1,i=e.title),"embedPlaylist"in e&&n(2,l=e.embedPlaylist),"subChannelURL"in e&&n(3,o=e.subChannelURL),"gameWebURL"in e&&n(4,a=e.gameWebURL),"twitchChannel"in e&&n(5,r=e.twitchChannel),"twitchChannelURL"in e&&n(6,s=e.twitchChannelURL),"latestReleaseURL"in e&&n(7,c=e.latestReleaseURL),"twitterURL"in e&&n(8,h=e.twitterURL),"youtubePlaylistURL"in e&&n(9,u=e.youtubePlaylistURL),"state"in e&&n(0,d=e.state),"routes"in e&&n(10,p=e.routes),"rootURL"in e&&n(11,m=e.rootURL),"githubSourceURL"in e&&n(12,f=e.githubSourceURL)},e.$$.update=()=>{1025&e.$$.dirty&&n(13,b=d.currentRoute===p.home?"underline":""),1025&e.$$.dirty&&n(14,v=d.currentRoute===p.game?"underline":""),1025&e.$$.dirty&&n(15,L=d.currentRoute===p.watch?"underline":"")},n(16,R=y()?"underline":""),n(17,k=w()),$=g(),[d,i,l,o,a,r,s,c,h,u,p,m,f,b,v,L,R,k,()=>{n(0,d.currentRoute=p.home,d),n(0,d)},()=>{n(0,d.currentRoute=p.game,d),n(0,d)},()=>{n(0,d.currentRoute=p.watch,d),n(0,d)},()=>{n(0,d.currentRoute=p.devlog,d),n(0,d)},y]}var me={version:"v0.0.3",url:"https://github.com/thlorenz/batufo/releases/tag/v0.0.3"};const fe={home:{id:"home",hash:""},game:{id:"game",hash:"#game"},watch:{id:"watch",hash:"#watch"},devlog:{id:"devlog",hash:"#devlog"}},we=location.hash,ge=we===fe.game.hash?fe.game:we===fe.watch.hash?fe.watch:location.hash.startsWith(fe.devlog.hash)?fe.devlog:fe.home,ye=location.href.includes("localhost")?"/":"https://thlorenz.github.io/batufo/";return new class extends A{constructor(e){super(),z(this,e,pe,de,o,{title:1,embedPlaylist:2,subChannelURL:3,gameWebURL:4,twitchChannel:5,twitchChannelURL:6,latestReleaseURL:7,twitterURL:8,youtubePlaylistURL:9,state:0,routes:10,rootURL:11,githubSourceURL:12})}}({target:document.body,props:{title:"2D Multiplayer Flutter Game",embedVideo:"https://www.youtube.com/embed/xTcO6lPMUaA",embedPlaylist:"https://www.youtube.com/embed/videoseries?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G",subChannelURL:"https://www.youtube.com/user/thlorenz10?sub_confirmation=1",gameWebURL:"https://thlorenz.github.io/batufo/webgame",latestReleaseURL:me.url,githubSourceURL:"https://github.com/thlorenz/batufo",youtubePlaylistURL:"https://www.youtube.com/watch?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G&v=xTcO6lPMUaA",twitchChannel:"thlorenz",twitchChannelURL:"https://www.twitch.tv/thlorenz",twitterURL:"https://twitter.com/thlorenz",routes:fe,state:{currentRoute:ge},rootURL:ye}})}();
//# sourceMappingURL=bundle.js.map
