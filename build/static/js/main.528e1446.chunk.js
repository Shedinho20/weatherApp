(this["webpackJsonpweather-ap"]=this["webpackJsonpweather-ap"]||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),o=(n(33),n(18)),s=n.n(o),l=n(24),u=n(2),m=n(3),d=n(5),p=n(4),h=(n(35),n(10)),f=n(9),y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={Isopen:!1},e.keyClicked=function(){console.log(e.state.Isopen),e.setState({Isopen:!e.state.Isopen})},e.getStyle=function(){if(e.state.Isopen)return{transform:"translatex(0)"}},e.getStyleLine1=function(){if(e.state.Isopen)return{transform:"rotate(45deg) translate(5px, 5px)"}},e.getStyleLine2=function(){if(e.state.Isopen)return{visibility:"hidden"}},e.getStyleLine3=function(){if(e.state.Isopen)return{zIndex:"3",transform:"rotate(-45deg) translate(5px, -5px)"}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.Timezone;return r.a.createElement("div",{className:"bg-col"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navBox"},r.a.createElement("img",{src:"/images/favicon.ico",alt:"icon",id:"logo"}),r.a.createElement("ul",{className:"navBar"},r.a.createElement(f.b,{to:"/",className:"btn"},r.a.createElement("li",null,"Home")),r.a.createElement(f.b,{to:"/Weekly",className:"btn"},r.a.createElement("li",null,"Weekly")),r.a.createElement("li",{id:"locationNav"},r.a.createElement("button",null,r.a.createElement("img",{src:"/images/Loc.svg",alt:"",id:"locationPin"}),this.props.Location(t)))),r.a.createElement("div",{id:"menu",onClick:function(){return e.keyClicked()}},r.a.createElement("div",{className:"hamBurger line1",style:this.getStyleLine1()}),r.a.createElement("div",{className:"hamBurger line2",style:this.getStyleLine2()}),r.a.createElement("div",{className:"hamBurger line3",style:this.getStyleLine3()}))),r.a.createElement("ul",{id:"menu-BTN",style:this.getStyle()},r.a.createElement(f.b,{to:"/",className:"btn",onClick:function(){return e.keyClicked()}},r.a.createElement("li",null,"Home")),r.a.createElement(f.b,{to:"/Weekly",className:"btn",onClick:function(){return e.keyClicked()}},r.a.createElement("li",null,"Weekly")),r.a.createElement("li",{id:"locationNav"},r.a.createElement("img",{src:"/images/Loc.svg",alt:"",id:"locationPin"}),this.props.Location(t)))))}}]),n}(r.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.current,t=e.feels_like,n=e.temp,a=e.sunset,i=e.sunrise,c=e.dt,o=e.wind_speed,s=this.props.currentWeather,l=s.icon,u=s.main,m=this.props.Timezone;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"homeBanner container"},r.a.createElement("div",{id:"weatherHome"},r.a.createElement("h3",{className:"secColor"},this.props.date(c)),r.a.createElement("h2",null,this.props.Location(m))),r.a.createElement("div",{id:"weatherHome2"},r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,this.props.converter(n),"\xb0C"),r.a.createElement("h4",{className:"secColor"},"FEELS LIKE ",this.props.converter(t),"\xb0C")),r.a.createElement("div",{id:"infoHomeInner1"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(l,"@2x.png"),alt:"icon"}),r.a.createElement("h3",null,u)),r.a.createElement("div",{className:"weatherHome2"},r.a.createElement("div",{id:"infoHomeInner"},r.a.createElement("img",{src:"/images/sunrise.png",alt:"sunrise"}),r.a.createElement("h3",null,"Sunrise")),r.a.createElement("h2",null,this.props.time(i))),r.a.createElement("div",{className:"weatherHome2"},r.a.createElement("div",{id:"infoHomeInner"},r.a.createElement("img",{src:"/images/sunset.png",alt:"sunrise"}),r.a.createElement("h3",null,"Sunset")),r.a.createElement("h2",null,this.props.time(a))),r.a.createElement("div",{className:"weatherHome2"},r.a.createElement("div",{id:"infoHomeInner"},r.a.createElement("img",{src:"/images/wind.png",alt:"sunrise"}),r.a.createElement("h3",null,"Wind")),r.a.createElement("h2",null,this.props.wind_speed(o)," M/S")))))}}]),n}(r.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).converter=function(e){return(e-273).toFixed(0)},e.day=function(e){return new Date(1e3*e).toLocaleString("en-US",{weekday:"short"})},e.dayNum=function(e){return new Date(1e3*e).toLocaleString("en-US",{day:"numeric"})},e.getStyle=function(){if(e.props.info==e.props.day.dt)return{backgroundColor:"#ffc93d"}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.day.temp.max,n=this.props.day.dt,a=this.props.day.weather[0].icon;return r.a.createElement("div",{onClick:function(){return e.props.keyClicked(n)},style:this.getStyle()},r.a.createElement("div",{className:"Box"},r.a.createElement("h3",null,this.day(n),", ",this.dayNum(n)),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:"icon"}),r.a.createElement("h2",null,this.converter(t)," ",r.a.createElement("span",null,"\xb0C"))))}}]),n}(r.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"WeeklyNav"},r.a.createElement(v,{day:this.props.days[0],keyClicked:this.props.keyClicked,info:this.props.info}),r.a.createElement(v,{day:this.props.days[1],keyClicked:this.props.keyClicked,info:this.props.info}),r.a.createElement(v,{day:this.props.days[2],keyClicked:this.props.keyClicked,info:this.props.info}),r.a.createElement(v,{day:this.props.days[3],keyClicked:this.props.keyClicked,info:this.props.info}),r.a.createElement(v,{day:this.props.days[4],keyClicked:this.props.keyClicked,info:this.props.info}))}}]),n}(r.a.Component),k=(r.a.Component,n(27),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={info:""},e.key=function(t){e.setState({info:t})},e.hours=function(){if(null!==e.state.info){var t=new Date(1e3*e.state.info).toLocaleString("en-US",{day:"numeric"});return e.props.Hours.filter((function(e){return t===new Date(1e3*e.dt).toLocaleString("en-US",{day:"numeric"})}))}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.hours();if(console.log(e),0==e.length)return r.a.createElement("div",{className:" weekly"},r.a.createElement(g,{keyClicked:this.key,info:this.state.info,days:this.props.days,converter:this.props.converter,Weekday:this.props.Weekday,wind_speed:this.props.wind_speed}))}}]),n}(r.a.Component)),w=function(){return r.a.createElement("div",{className:"skeleton"},r.a.createElement("div",{className:"skeletonInner"},r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"loader2"})))},b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={days:[],Hours:[],current:[],Timezone:"",currentWeather:[]},e.checkGeo=function(){"geolocation"in navigator&&e.weatherData()},e.weatherData=Object(l.a)(s.a.mark((function t(){var n,a,r,i,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCoordinates();case 2:return n=t.sent,a="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.coords.latitude,"&lon=").concat(n.coords.longitude,"&appid=c4bf502f01ad796b2ae93a93063fccb2"),t.next=6,fetch(a);case 6:return r=t.sent,t.next=9,r.json();case 9:i=t.sent,c=i.daily,o=e.dailyfilter(c),e.weatherDataSeter(i,o);case 13:case"end":return t.stop()}}),t)}))),e.dailyfilter=function(e){var t=[];return e.forEach((function(e){t.length<5&&t.push(e)})),t},e.getCoordinates=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){navigator.geolocation.getCurrentPosition(t,n,e)}))},e.weatherDataSeter=function(t,n){e.setState({days:n}),e.setState({Timezone:t.timezone}),e.setState({Hours:t.hourly}),e.setState({current:t.current}),e.setState({currentWeather:t.current.weather[0]})},e.converter=function(e){return(e-273).toFixed(0)},e.time=function(e){return new Date(1e3*e).toLocaleString("en-US",{hour:"numeric",minute:"numeric"})},e.date=function(e){return new Date(1e3*e).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric"})},e.Weekday=function(e){return new Date(1e3*e).toLocaleString("en-US",{weekday:"long"})},e.wind_speed=function(e){return parseFloat(e).toFixed(1)},e.Location=function(e){var t=e.split(""),n=null;return t.forEach((function(t,a){"/"===t&&(n=e.slice(a+1))})),n},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.checkGeo()}},{key:"render",value:function(){var e=this;return 0===this.state.currentWeather.length?r.a.createElement(w,null):r.a.createElement("div",{className:"App"},r.a.createElement(y,{Location:this.Location,Timezone:this.state.Timezone}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:function(t){return r.a.createElement(E,Object.assign({},t,{current:e.state.current,currentWeather:e.state.currentWeather,Timezone:e.state.Timezone,converter:e.converter,time:e.time,date:e.date,wind_speed:e.wind_speed,Location:e.Location}))}}),r.a.createElement(h.a,{strict:!0,path:"/Weekly",component:function(){return r.a.createElement(k,{days:e.state.days,Hours:e.state.Hours,converter:e.converter,Weekday:e.Weekday,wind_speed:e.wind_speed})}})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(b,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.528e1446.chunk.js.map