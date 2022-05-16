(this["webpackJsonpvoice-recorder-ts-version"]=this["webpackJsonpvoice-recorder-ts-version"]||[]).push([[0],{106:function(e,t){},142:function(e,t){},167:function(e,t,n){},196:function(e,t){},198:function(e,t){},199:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},261:function(e,t,n){},267:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(39),o=n.n(r),i=(n(261),n(111)),s=n(26),l=n(16);var d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(i.b,{className:"nav-link",to:"/",children:["Home",Object(l.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(l.jsx)(i.b,{className:"nav-link",to:"/search",children:"Admin"})]})},u=n(1),b=n.n(u),j=n(6),m=n(7),p=n(53),f=n(22),O=n(209),h=n(140),v=n(141);n(267);function g(e){var t,n,a=e.recorderState,c=e.handlers,r=a.recordingMinutes,o=a.recordingSeconds,i=a.initRecording,s=c.startRecording,d=c.saveRecording,u=c.cancelRecording;return Object(l.jsxs)("div",{className:"controls-container",children:[Object(l.jsxs)("div",{className:"recorder-display",children:[Object(l.jsxs)("div",{className:"recording-time",children:[i&&Object(l.jsx)("div",{className:"recording-indicator"}),Object(l.jsx)("span",{children:(n=r,n<10?"0".concat(n):"".concat(n))}),Object(l.jsx)("span",{children:":"}),Object(l.jsx)("span",{children:(t=o,t<10?"0".concat(t):"".concat(t))})]}),i&&Object(l.jsx)("div",{className:"cancel-button-container",children:Object(l.jsx)("button",{className:"cancel-button",title:"Cancel recording",onClick:u,children:Object(l.jsx)(h.a,{icon:v.c})})})]}),Object(l.jsx)("div",{className:"start-button-container",children:i?Object(l.jsx)("button",{className:"start-button",title:"Save recording",disabled:0===o,onClick:d,children:Object(l.jsx)(h.a,{icon:v.b,size:"2x"})}):Object(l.jsx)("button",{className:"start-button",title:"Start recording",onClick:s,children:Object(l.jsx)(h.a,{icon:v.a,size:"2x"})})})]})}var x=n(347),S=n(368),w=n(363),N=n(369),y=n(359);function C(){return(C=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:n=e.sent,t((function(e){return Object(p.a)(Object(p.a)({},e),{},{initRecording:!0,mediaStream:n})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var k=n(364),F={recordingMinutes:0,recordingSeconds:0,initRecording:!1,mediaStream:null,mediaRecorder:null,audio:null};function R(){var e=Object(a.useState)(F),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=null;return n.initRecording?e=setInterval((function(){c((function(t){return 5===t.recordingMinutes&&0===t.recordingSeconds?("number"===typeof e&&clearInterval(e),t):t.recordingSeconds>=0&&t.recordingSeconds<59?Object(p.a)(Object(p.a)({},t),{},{recordingSeconds:t.recordingSeconds+1}):59===t.recordingSeconds?Object(p.a)(Object(p.a)({},t),{},{recordingMinutes:t.recordingMinutes+1,recordingSeconds:0}):t}))}),1e3):"number"===typeof e&&clearInterval(e),function(){"number"===typeof e&&clearInterval(e)}})),Object(a.useEffect)((function(){c((function(e){return e.mediaStream?Object(p.a)(Object(p.a)({},e),{},{mediaRecorder:new MediaRecorder(e.mediaStream)}):e}))}),[n.mediaStream]),Object(a.useEffect)((function(){var e=n.mediaRecorder,t=[];return e&&"inactive"===e.state&&(e.start(),e.ondataavailable=function(e){t.push(e.data)},e.onstop=function(){var e=new Blob(t,{type:"audio/ogg; codecs=opus"});t=[];var n=window.name+".ogg",a=new File([e],n,{type:"audio/ogg"}),r=new k.a("https://".concat("namesounds",".blob.core.windows.net/?").concat("?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-06-04T11:04:15Z&st=2022-05-16T03:04:15Z&spr=https&sig=%2FE19l%2Fqu9HXhv4cC4B%2FKipxUWdSEF19J%2FrdKmnyYI%2Fg%3D")).getContainerClient("pref-sounds").getBlockBlobClient(a.name),o={blobHTTPHeaders:{blobContentType:a.type}};r.uploadData(a,o),console.log("recorderState.audio"),console.log(window.name),console.log("recorderState.audio end"),c((function(t){return t.mediaRecorder?Object(p.a)(Object(p.a)({},F),{},{audio:window.URL.createObjectURL(e)}):F}))}),function(){e&&e.stream.getAudioTracks().forEach((function(e){return e.stop()}))}}),[n.mediaRecorder]),{recorderState:n,startRecording:function(){return function(e){return C.apply(this,arguments)}(c)},cancelRecording:function(){return c(F)},saveRecording:function(){var e;"inactive"!==(e=n.mediaRecorder).state&&e.stop()}}}n(167);var T=n(205),I=n.n(T),E=n(206),U=n.n(E),D=n(366),P=n(365),L=n(367),A=n(362),B=n(357);n(190).config();var K="https://namesounds.table.core.windows.net/namesoundtbl",M="?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-06-04T11:04:15Z&st=2022-05-16T03:04:15Z&spr=https&sig=%2FE19l%2Fqu9HXhv4cC4B%2FKipxUWdSEF19J%2FrdKmnyYI%2Fg%3D",H=Object(x.a)((function(){return Object(S.a)({form:{display:"flex",flexDirection:"column"},container:{backgroundColor:"#f2dedc",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:30,textAlign:"center"},title:{margin:"0px 0 20px 0",textAlign:"center"},button:{margin:"20px 0",color:"#fff"},sectionContainer:{margingTop:2,paddingHorizontal:24},sectionTitle:{fontSize:24,fontWeight:500}})}));function z(){var e=R(),t=e.recorderState,n=Object(O.a)(e,["recorderState"]),c=(t.audio,H()),r=Object(a.useState)({dname:"",empid:"",fname:"",lname:"",pname:"",country:"",fileURL:""}),o=Object(f.a)(r,2),i=o[0],s=o[1],d=Object(a.useState)([]),u=Object(f.a)(d,2),h=(u[0],u[1],Object(a.useState)("")),v=Object(f.a)(h,2),x=v[0],S=v[1],C=Object(a.useState)(null),F=Object(f.a)(C,2),T=(F[0],F[1],function(e){s(Object(p.a)(Object(p.a)({},i),{},Object(m.a)({},e.target.id,e.target.value))),window.name=i.empid}),E=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=D.a.fromSubscription("00a6226c69b342d1b527d2df85266637","eastus")).speechSynthesisLanguage=x,n=P.a.fromDefaultSpeakerOutput(),a=new L.a(t,n),c="",c=""==i.pname.trim()?i.fname+" "+i.lname:i.pname,a.speakTextAsync(c,(function(e){return e.audioData}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function z(){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("== Updates and Upsert Entities =="),"namesoundtbl",t=new A.a("".concat(K),"namesoundtbl",new B.a(M)),n={partitionKey:"CTO",rowKey:i.empid,FirstName:i.fname,LastName:i.lname,PreferredName:i.pname,Locale:x,NameSoundUrl:""},e.prev=4,e.next=7,t.createEntity(n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}var Z=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=new k.a("https://".concat("namesounds",".blob.core.windows.net/?").concat(M)),n=t.getContainerClient("pref-sounds"),a=i.empid.toString()+".ogg","tempPref.ogg",n.getBlockBlobClient("tempPref.ogg"),n.getBlockBlobClient(a),console.log(window.name);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:c.sectionContainer,children:[Object(l.jsx)("div",{className:c.title,children:Object(l.jsx)("h1",{children:"My Name Is..."})}),Object(l.jsx)("div",{className:"{classes.form}",children:Object(l.jsxs)("section",{className:"voice-recorder",children:[Object(l.jsx)(w.a,{onChange:T,defaultValue:"CTO",label:"Department Name",id:"dname"}),Object(l.jsx)(w.a,{onChange:T,label:"Employee Id",id:"empid"}),Object(l.jsx)(w.a,{onChange:T,label:"First Name",id:"fname"}),Object(l.jsx)(w.a,{onChange:T,label:"Last Name",id:"lname"}),Object(l.jsx)(w.a,{onChange:T,label:"Preferred Name",id:"pname"}),Object(l.jsx)(w.a,{select:!0,onChange:function(e){S(e.target.value)},id:"locale",label:"Select",variant:"standard",helperText:"Please select your locale",children:[{value:"en-US",label:"English (United States)"},{value:"fr-CA",label:"French (Canada)"},{value:"zh-CN",label:"Chinese (Mandarin, Simplified)"},{value:"nl-NL",label:"Dutch (Netherlands)"},{value:"en-GB",label:"English (United Kingdom)"},{value:"fr-FR",label:"French (France)"},{value:"de-DE",label:"German (Germany)"},{value:"el-GR",label:"Greek (Greece)"},{value:"hi-IN",label:"Hindi (India)"},{value:"ja-JP",label:"Japanese (Japan)"},{value:"pl-PL",label:"Polish (Poland)"},{value:"ru-RU",label:"Russian (Russia)"},{value:"es-US",label:"Spanish (US)"},{value:"ta-IN",label:"Tamil (India)"},{value:"zu-ZA",label:"Zulu (South Africa)"}].map((function(e){return Object(l.jsx)(N.a,{value:e.value,children:e.label},e.value)}))}),Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)(y.a,{startIcon:Object(l.jsx)(I.a,{}),className:"recorder-container",onClick:E,color:"primary",variant:"contained",children:"Suggested Pronunciation"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h4",{children:"Don't like the usual? Record your own..."}),Object(l.jsxs)("div",{className:"recorder-container",children:[Object(l.jsx)("br",{}),Object(l.jsx)(g,{recorderState:t,handlers:n})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)(y.a,{startIcon:Object(l.jsx)(U.a,{}),className:"recorder-container",onClick:Z,color:"primary",variant:"contained",children:"Save Your Preference"})})]})})]})}var J=n(360),Z=n(361),q=n(208),G=n.n(q),W=n(207),Y=n.n(W),X=Object(x.a)((function(){return Object(S.a)({form:{display:"flex",flexDirection:"column"},container:{backgroundColor:"#f2dedc",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:30,textAlign:"center"},title:{margin:"0px 0 20px 0",textAlign:"center"},button:{margin:"20px 0",color:"#fff"},sectionContainer:{margingTop:2,paddingHorizontal:24},sectionTitle:{fontSize:24,fontWeight:500}})})),V="";var Q=function(){var e=X(),t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(f.a)(o,2),s=i[0],d=i[1],u=Object(a.useState)(""),m=Object(f.a)(u,2),p=m[0],O=m[1],h=Object(a.useState)(""),v=Object(f.a)(h,2),g=v[0],x=v[1],S=Object(a.useState)(""),N=Object(f.a)(S,2),C=N[0],k=N[1],F=Object(a.useState)(""),R=Object(f.a)(F,2),T=R[0],I=R[1],E=Object(a.useState)(""),U=Object(f.a)(E,2),K=U[0],M=U[1],H=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"namesoundtbl",t=new A.a("".concat("https://namesounds.table.core.windows.net/"),"namesoundtbl",new B.a("?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-06-04T11:04:15Z&st=2022-05-16T03:04:15Z&spr=https&sig=%2FE19l%2Fqu9HXhv4cC4B%2FKipxUWdSEF19J%2FrdKmnyYI%2Fg%3D")),"Test1",e.next=5,t.getEntity("CTO",K);case 5:n=e.sent,console.log(n.FirstName),r(n.Locale),d(n.partitionKey),O(n.rowKey),x(n.FirstName),k(n.LastName),I(n.PreferredName),V=n.NameSoundUrl,console.log(V);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=D.a.fromSubscription("00a6226c69b342d1b527d2df85266637","eastus")).speechSynthesisLanguage=c,n=P.a.fromDefaultSpeakerOutput(),a=new L.a(t,n),r="",r=""==T.trim()?g+" "+C:T,a.speakTextAsync(r,(function(e){return e.audioData}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V="https://".concat("namesounds",".blob.core.windows.net/").concat("pref-sounds","/").concat(p,".ogg"),t=new Audio(V),e.prev=3,e.next=6,t.play();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),z();case 11:console.log(V),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(0),console.log(e.t1);case 17:case"end":return e.stop()}}),e,null,[[0,14],[3,8]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:e.sectionContainer,children:[Object(l.jsx)("div",{className:e.title,children:Object(l.jsx)("h1",{children:"Search Name Sounds"})}),Object(l.jsx)("div",{className:"{classes.form}",children:Object(l.jsxs)("section",{className:"searchContainer",children:[Object(l.jsx)(w.a,{fullWidth:!0,id:"search",variant:"outlined",onChange:function(e){M(e.target.value)},value:K,InputProps:{endAdornment:Object(l.jsx)(J.a,{children:Object(l.jsx)(Z.a,{})})}}),Object(l.jsx)("br",{}),Object(l.jsx)(y.a,{className:"recorder-container",startIcon:Object(l.jsx)(Y.a,{}),onClick:H,color:"primary",variant:"contained",children:"Search"}),Object(l.jsx)("br",{}),Object(l.jsx)("h6",{children:"Department Name"})," ",Object(l.jsx)(w.a,{onChange:function(e){d(e.target.value)},value:s,id:"dname"}),Object(l.jsx)("h6",{children:"Employee Id"}),Object(l.jsx)(w.a,{onChange:function(e){O(e.target.value)},value:p,id:"empid"}),Object(l.jsx)("h6",{children:"First Name"}),Object(l.jsx)(w.a,{onChange:function(e){x(e.target.value)},value:g,id:"fname"}),Object(l.jsx)("h6",{children:"Last Name"}),Object(l.jsx)(w.a,{onChange:function(e){k(e.target.value)},value:C,id:"lname"}),Object(l.jsx)("h6",{children:"Preferred Name"}),Object(l.jsx)(w.a,{onChange:function(e){I(e.target.value)},value:T,id:"pname"}),Object(l.jsx)("h6",{children:"Locale"}),Object(l.jsx)(w.a,{onChange:function(e){r(e.target.value)},value:c,id:"locale"}),Object(l.jsx)("br",{}),Object(l.jsx)(y.a,{className:"recorder-container",startIcon:Object(l.jsx)(G.a,{}),onClick:q,color:"primary",variant:"contained",children:"Standard Pronunciation"})]})})]})};window.name="test123",o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(z,{})}),Object(l.jsx)(s.a,{path:"/search",element:Object(l.jsx)(Q,{})})]})]})}),document.getElementById("root"))},93:function(e,t){}},[[296,1,2]]]);
//# sourceMappingURL=main.878f7a16.chunk.js.map