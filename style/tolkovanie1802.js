rE();oH();kK();oT();function rE(){var iQ=document.getElementById('bible'),qQ=iQ.childNodes[2],yK=document.getElementById('books'),xK=document.getElementById('chapter'),mH=document.getElementById('chapters'),uH='active',kT,tH=mH.childNodes.length-1,rB=parseInt(location.pathname.slice(-3,-1)),qH,aN,jN=document.body.offsetWidth;kT=document.createElement('span');kT.innerHTML='&times;';zH(qQ,function(){pK(qQ,yK);});var cH=yH('up',tB),kE=yH('down',wB);yK.appendChild(kE);var qN;if(jN<343){qN=4;qH=12;}else if(jN<641){qN=5;qH=30;}else if(jN<825){qN=8;qH=48;}else if(jN<905){qN=9;qH=54;}else{qN=10;qH=50;}if(tH>qH&&tH<=qH+qN){qH+=qN;}aN=(qN-(tH%qN))%qN;if(tH>qN&&tH!=qH){var span;for(var i=0;i<aN;i++){span=document.createElement('span');span.className='a';mH.appendChild(span);}if(tH>qH){for(var i=qH+1;i<=tH+aN;i++){mH.childNodes[i].className='h';}if(jN<=799){mH.style.paddingBottom='48px';}else{mH.style.paddingBottom='44px';}var fE=yH('up',bB),pB=yH('down',cB);mH.appendChild(pB);}}zH(xK,function(){pK(xK,mH);});zH(iQ,function(e){if(e.stopPropagation){e.stopPropagation();}},'dblclick');var video=document.getElementById('video');if(video&&video.canPlayType&&video.canPlayType('video/mp4')==''){video.parentNode.insertBefore(video.removeChild(video.firstChild),video.nextSibling);}function jB(){if(document.body.offsetWidth<=640){return 1;}return 2;}function eB(dN){var last,list=mH.childNodes;for(var i=1;i<list.length;i++){if(list[i].tagName=='A'&&list[i].className!='h'){last=i;}}var gE;if(dN){gE=Math.min(last+1,tH+aN-qH+1)}else if(last==tH){gE=Math.max(last+aN-qH*2+1,1)}else{gE=Math.max(last-qH*2+1,1)}last=gE+qH-1;for(var i=1;i<=tH+aN;i++){if(gE<=i&&i<=last){if(i!=rB){if(list[i].tagName==='A'){list[i].className='';}else{list[i].className='a';}}else{list[i].className=uH;}}else{list[i].className='h';}}return last;}function tE(e){if(e.className==uH){e.className='';}else{e.className=uH;}}function pK(rQ,list,uQ){if(uQ!==false){uQ=true;}if(rQ.lastChild.nodeType==1){rQ.removeChild(kT);rQ.className='';list.className='';}else if(uQ){if(kT.parentNode){pK(xK,mH,false);}rQ.appendChild(kT);rQ.className=uH;list.className=uH;}}function cB(){if(mH.firstChild.childNodes.length==1){mH.firstChild.appendChild(fE);}var last=eB(pB);if(last>=tH){mH.removeChild(pB);}}function bB(){var last=eB(null);if(last-qH==0){mH.firstChild.removeChild(fE);}if(mH.lastChild.tagName!=='DIV'){mH.appendChild(pB);}}function yH(vQ,func){var a=document.createElement('div');a.className='arrow-'+vQ;zH(a,func);return a;}function wB(){if(yK.firstChild.childNodes.length==1){yK.firstChild.appendChild(cH);}var cols=jB(),rN=eN(yK.childNodes)[0];rN.className='';for(var i=0;i<cols;i++){rN=rN.nextSibling;}rN.className="active";for(var i=0;i<cols;i++){rN=rN.nextSibling;}if(!rN||rN.tagName!=='UL'){yK.removeChild(kE);}}function tB(){var cols=jB(),rN=eN(yK.childNodes)[0];rN.className='';for(var i=0;i<cols;i++){rN=rN.previousSibling;}rN.className="active";if(rN.previousSibling.tagName!=='UL'){yK.firstChild.removeChild(cH);}if(yK.lastChild.tagName!=='DIV'){yK.appendChild(kE);}}function eN(e){for(var i=0;i<e.length;i++){if(e[i].className==uH){return[e[i],i];}}return[null,-1];}}function oH(){var bms=[],ul=null,bmID=document.getElementById('bookmarks'),dT=bmID.firstChild,info=null,rQ=null,lQ=null,hQ=[],uN=-1,tN=0,dH=0,nT=null,lT=true,zB=false,rH=40,vH,dir='tolkovanie-biblii',body=document.body,books=['',['bitie','Бытие'],['ishod','Исход'],['levit','Левит'],['chisla','Числа'],['vtorozakonie','Второзаконие'],['iisus-navin','Иисус Навин'],['sudey','Судей'],['ruf','Руфь'],['1-tsarstv','1 Царств'],['2-tsarstv','2 Царств'],['3-tsarstv','3 Царств'],['4-tsarstv','4 Царств'],['1-paralipomenon','1 Паралипоменон'],['2-paralipomenon','2 Паралипоменон'],['ezdra','Ездры'],['neemiya','Неемии'],['esfir','Есфирь'],['iov','Иова'],['psaltir','Псалтырь'],['pritchi','Притчи'],['ekklesiast','Екклесиаст'],['pesnya-pesney','Песни Песней'],['isaiya','Исаии'],['ieremiya','Иеремии'],['plach-ieremii','Плач Иеремии'],['iezekiil','Иезекииля'],['daniil','Даниила'],['osiya','Осии'],['ioil','Иоиля'],['amos','Амоса'],['avdiy','Авдия'],['iona','Ионы'],['mihey','Михея'],['naum','Наума'],['avakum','Аввакума'],['sofoniya','Софонии'],['aggey','Аггея'],['zahariya','Захарии'],['malahiya','Малахии'],['evangelie-matfeya','Матфея'],['evangelie-marka','Марка'],['evangelie-luki','Луки'],['evangelie-ioanna','Иоанна'],['deyanie','Деяния'],['iakova','Иакова'],['1-petra','1 Петра'],['2-petra','2 Петра'],['1-ioanna','1 Иоанна'],['2-ioanna','2 Иоанна'],['3-ioanna','3 Иоанна'],['iudi','Иуды'],['rimlyanam','Римлянам'],['1-korinfyanam','1 Коринфянам'],['2-korinfyanam','2 Коринфянам'],['galatam','Галатам'],['efesyanam','Ефесянам'],['filippiytsam','Филиппийцам'],['kolossyanam','Колоссянам'],['1-fessalonikiytsam','1 Фессалоникийцам'],['2-fessalonikiytsam','2 Фессалоникийцам'],['1-timofeyu','1 Тимофею'],['2-timofeyu','2 Тимофею'],['titu','Титу'],['filimonu','Филимону'],['evreyam','Евреям'],['otkrovenie','Откровение']];hQ=qB(location.pathname);var div=document.createElement('div');div.innerHTML='о закладках';bmID.appendChild(div);zH(div,oB);if(navigator.cookieEnabled){zB=true;lK();}if(uN>=0){var i=2;if(bms[uN].length>3){i=3;}for(;i<bms[uN].length;i++){xH(bms[uN][i]);}if(scrollTo){uB(uE,window,bms[uN][2]-100,1000);}if(bms[uN].length>3&&bms[uN][2]>bms[uN][3]){bms[uN][2]=bms[uN][3];tK(bms);}}zH(document.getElementById('main'),qE,'dblclick');function lK(){var c=document.cookie.split(';',1)[0].split('=');if(c[0][0]==' '){c[0]=c[0].substring(1);}if(c[0]=='bookmarks'){bms=sE(c[1]);}else if(c[0]=='bookmark'){try{bms=xB(JSON.parse(c[1]));}catch(err){document.cookie='bookmark=0;max-age=0;path=/';}}if(bms.length>0){uN=oN(hQ);wE();}}function oB(){if(!info){info=document.createElement('div');info.id='b-info';info.innerHTML='<span>&times;</span>Чтоб добавить закладку,<br>нужно два раза кликнуть на выбранный вами текст на любой странице Толкования. Можно добавлять несколько закладок на ту же страницу.<br><br>Закладки сохраняются в файлах cookie в вашем браузере. Если вы удалите cookie,то закладки удалятся тоже.';zH(info.firstChild,kB);}if(info.parentNode!==bmID){bmID.appendChild(info);}vH=setTimeout(kB,30000);}function kB(){if(this&&this.tagName=='SPAN'){clearTimeout(vH);}if(info.parentNode===bmID){bmID.removeChild(info);}}function xB(bms){var aT=[],b,pos;for(var item in bms){if(item!='length'){b=qB(item);pos=bms[item].position[1];if(!isNaN(pos)){pos=Math.max(Math.min(Math.floor(pos*1.25)+100,body.offsetHeight-100),pos);aT.push([b[0],b[1],pos]);}}}document.cookie='bookmark=0;max-age=0;path=/';tK(aT);return aT;}function lB(hT){var e=lE(hT);if(e){if(e.previousSibling&&e.previousSibling.nodeName=='A'){fB(e);}else if(e.nodeName=='A'){lH(e,hT);}else if(e.parentNode.nodeName=='A'){lH(e.parentNode,hT);}}}function wE(){var iT='';if(bms.length>0){if(!ul){ul=document.createElement('ul');ul.id='b-list';zH(ul,lB);}if(ul.nextSibling!==bmID){bmID.parentNode.insertBefore(ul,bmID);bmID.removeChild(dT);}var vN,url,name,wN,span,jT,lN;for(var i=0;i<bms.length;i++){vN='';url='/'+dir+'/';name='Толкование Библии';if(bms[i][0]>0){url+=books[bms[i][0]][0]+'/';name=books[bms[i][0]][1];}wN='';span='';if(bms[i][1]>0){if(bms[i][1]<10){url+='0';}url+=bms[i][1]+'/';wN+=bms[i][1];if(bms[i][0]==19){name='Псалом '+bms[i][1];wN='';}else{wN+=' гл';}}if(bms[i][0]==hQ[0]&&bms[i][1]==hQ[1]){url='#';vN=' class="active"';}var j=2;if(bms[i].length>3){j=3;}for(;j<bms[i].length;j++){if(wN!==''){span='<span>'+wN+'</span>';}lN='';if(j>2){jT=j-2;lN=' ('+jT+')';}iT+='<li'+vN+'><a href="'+url+'" title="Толкование на '+name+' '+wN+'">'+name+span+lN+'</a><span>&times;</span></li>';}}}else if(ul.nextSibling===bmID){ul.parentNode.removeChild(ul);bmID.insertBefore(dT,bmID.firstChild);}ul.innerHTML=iT;}function uE(pos){scrollTo(0,pos);}function xH(pos){if(!mN(pos)){var nT=document.createElement('div');nT.className='b-point';body.appendChild(nT);nT.style.top=pos+'px';zH(nT,function(){dK(nT);},'touchstart');zH(nT,function(){dK(nT);},'mouseover');}}function dK(nT){if(nT.parentNode===body){setTimeout(function(){body.removeChild(nT);},500);vB(nT);}}function qE(hT){if(!navigator.cookieEnabled){bK('Чтобы добавлять закладки,нужно включить cookie в браузере',10);return;}if(!zB){lK();zB=true;}if(hT.pageY){tN=hT.pageY;}else if(hT.clientY){var bQ=window.pageYoffset||document.documentElement.scrollTop||500;tN=hT.clientY+bQ;}else{tN=700;}tN-=rH;sK(tN);rQ.innerHTML='Добавить закладку';rQ.style.color='';}function vB(nT){dH=parseInt(nT.style.top.slice(0,-2));sK(dH-20);rQ.innerHTML='Удалить закладку';rQ.style.color="#ff4b33";}function sK(y){if(!rQ){rQ=document.createElement('div');rQ.id='b-button';zH(rQ,fK);}bH();body.appendChild(rQ);zH(body,bH);var bQ=window.pageYoffset||document.documentElement.scrollTop||y;y-=60;if(y<bQ){y+=60+rH*2+10;}rQ.style.top=y+'px';}function bH(){if(rQ.parentNode===body){iE(body,bH,'click');body.removeChild(rQ);}}function fK(){if(rQ.innerHTML=='Удалить закладку'){if(uN>=0&&bms[uN]){var pN=pT(bms[uN],dH);if(pN>=2){oE(uN,pN);}}}else{gK();}}function gK(){if(uN>=0){if(bms[uN].length==3){bms[uN].push(bms[uN][2]);}for(var i=3;i<bms[uN].length;i++){if(tN<bms[uN][i]){break;}}bms[uN].splice(i,0,tN);bms[uN][2]=bms[uN][3];}else{uN=bms.push([hQ[0],hQ[1],tN])-1;}wE();xH(tN);bK('Закладка добавлена',5);tK(bms);}function fB(span){var vK=oN(qB(span.previousSibling.href)),jH=aE(span.previousSibling);if(vK>=0){if(vK==uN){var nT=mN(bms[vK][jH]);if(nT){body.removeChild(nT);}}oE(vK,jH);}}function oE(index,pN){if(lT){lT=false;if(bms[index].length==3){bms.splice(index,1);if(index==uN){uN=-1;}else if(index<uN){uN-=1;}}else{bms[index].splice(pN,1);if(bms[index].length==4){bms[index].splice(2,1);}else{bms[index][2]=bms[index][3];}}wE();bK('Закладка удалена',5);tK(bms);lT=true;}}function lH(a,hT){var pN=aE(a);if(a.parentNode.className==''){if(pN>2){var index=oN(qB(a.href));if(index>=0){bms[index][2]=bms[index][pN];tK(bms);}}}else if(uN>=0&&pN>=2){var pos=bms[uN][pN];if(scrollTo){uB(uE,window,pos-100,1000);}xH(pos);if(hT.preventDefault){hT.preventDefault();}}}function tK(bms){if(bms.length>0){document.cookie='bookmarks='+yE(bms)+';max-age=31536000;path=/'+dir;}else{document.cookie='bookmarks=0;max-age=0;path=/'+dir;}}function bK(text,time){if(!lQ){lQ=document.createElement('div');lQ.id='b-message';}if(lQ.parentNode!==body){body.appendChild(lQ);}lQ.innerHTML=text;setTimeout(function(){if(lQ.parentNode===body){body.removeChild(lQ);}},time*1000);}function qB(url){var book=0,fQ=0,sN=url.split('/');for(var i=1;i<sN.length;i++){if(sN[i]!=''&&sN[i]!=dir){if(isNaN(sN[i])){for(var j=1;j<books.length;j++){if(books[j][0]==sN[i]){book=j;break;}}}else{fQ=parseInt(sN[i])}}}return[book,fQ];}function oN(bm){for(var i=0;i<bms.length;i++){if(bms[i][0]==bm[0]&&bms[i][1]==bm[1]){return i;}}return-1;}function pT(bm,pos){for(var i=bm.length-1;i>=2;i--){if(bm[i]==pos){return i;}}}function aE(a){var m=a.innerHTML.match(/[^0-9][0-9]+.$/);if(m&&m.length>0){return parseInt(m[0].slice(1,-1))+2;}return 2;}function mN(pos){var e;for(var i=5;i<body.childNodes.length;i++){e=body.childNodes[i];if(e.className=='b-point'&&e.style.top==pos+'px'){return e;}}return null;}function yE(b){var s='[';for(var i=0;i<b.length;i++){s+='[';for(var j=0;j<b[i].length;j++){s+=b[i][j];if(j<b[i].length-1){s+=',';}}s+=']';if(i<b.length-1){s+=',';}}return s+']';}function sE(s){if(s.slice(0,2)=='[['&&s.slice(-2)==']]'){var b=s.slice(2,-2).split('],[');for(var i=0;i<b.length;i++){b[i]=b[i].split(',');if(b[i].length==3||b[i].length>=5){for(var j=0;j<b[i].length;j++){b[i][j]=parseInt(b[i][j]);if(isNaN(b[i][j])||b[i][j]<0){return[];}}}else{return[];}}return b;}return[];}}function uB(func,gQ,yN,uK){var raf=getR()||function(func){setTimeout(func,67);},jK,t=null,xN=true;if(gQ===window){jK=window.pageYOffset||document.documentElement.scrollTop;}else{jK=gQ.scrollTop;}var gT=(yN-jK)/uK;gT=gT.toFixed(2);if(jK>yN){xN=false;}raf(kN);function kN(hN){if(!hN)hN=new Date().getTime();if(!t)t=jK-Math.round(gT*hN);var fT=t+Math.round(gT*hN);if((xN&&fT<yN)||(!xN&&fT>yN)){func(fT,gQ);raf(kN);}else{func(yN,gQ);}}}function zH(e,func,type){if(e){if(!type){type='click';}if(e.addEventListener){e.addEventListener(type,func,false);}else if(e.attachEvent){e.attachEvent('on'+type,func);}else if(e['on'+type]){e['on'+type]=func;}}}function iE(e,func,type){if(e){if(e.removeEventListener){e.removeEventListener(type,func,false);}else if(e.detachEvent){e.detachEvent('on'+type,func);}else if(e['on'+type]){e['on'+type]=null;}}}function lE(e){if(e){if(e.target){return e.target;}if(e.srcElement){return e.srcElement;}}return null;}function kK(){var d=['vk','od','ma','fb'];for(var i=0;i<4;i++){document.getElementById(d[i]).onclick=n;}function n(){var w=document.body.clientWidth-20;var h=document.body.clientHeight-20;if(w>600&&h>500){w=600;h=500;}open(this.href,'_blank','width='+w+',height='+h+',scrollbars');return false;}}function oT(){if(document.body.offsetWidth>640&&(!window.getComputedStyle||window.getComputedStyle(document.getElementById('header')).backgroundRepeat=='repeat')){e=document.createElement('link');e.rel='stylesheet';e.type='text/css';e.href='/style/otveti-ie8-1802.css';document.body.appendChild(e);}}