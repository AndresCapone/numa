import"./modulepreload-polyfill-B5Qt9EMX.js";import{J as u,g as q,p as Q,P as G,A as U,m as H}from"./montarSesion-5O4gN0Km.js";/* empty css                */const V="numa-juegos-armados",K=a=>{const r=a;return typeof r?.id=="string"&&typeof r.mecanica=="string"&&Array.isArray(r.palabras)};function J(){try{const a=JSON.parse(localStorage.getItem(V)??"[]");return Array.isArray(a)?a.filter(K):[]}catch{return[]}}function w(a){try{return localStorage.setItem(V,JSON.stringify(a)),!0}catch{return!1}}function W(a){const r=J(),o=r.findIndex(n=>n.id===a.id);return o>=0?r[o]=a:r.push(a),w(r)}function X(a){return w(J().filter(r=>r.id!==a))}const h="varios",$=[{id:"repite",nombre:"Repite lo que oye",rondas:["repetir"]},{id:"evoca",nombre:"Lo dice mirando el dibujo",rondas:["evocar"]},{id:"repite-y-evoca",nombre:"Primero repite, después solo",rondas:["repetir","evocar"]}],_=Object.keys(u),x=a=>a.replace(/[<>&"]/g,r=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[r]),I=a=>G.filter(u[a].admite),E=(a,r)=>I(a).filter(o=>r===h||r.split("+").includes(o.fonema)),Y=2;function L(a,r){const o=E(a,r);if(r===h)return o.filter(e=>o.filter(c=>c.fonema===e.fonema).indexOf(e)<Y).map(e=>e.id);if(!u[a].pares)return o.map(e=>e.id);const n=r.split("+").map(e=>o.filter(c=>c.fonema===e)),d=Math.min(...n.map(e=>e.length));return n.flatMap(e=>e.slice(0,d)).map(e=>e.id)}function C(a){const r=new Map;for(const e of I(a))r.has(e.fonema)||r.set(e.fonema,e);const o=e=>q(r.get(e)).toUpperCase(),n=u[a].pares;if(n)return n.map(e=>({id:e.join("+"),letra:e.map(o).join(" y ")}));const d=[...r].map(([e,c])=>({id:e,letra:q(c).toUpperCase()}));return d.length>1?[...d,{id:h,letra:"Varios"}]:d}const D=(a,r)=>a.find(o=>o.id===r)?.nombre??r;function P(a){const r=D(u[a.mecanica].personajes,a.personaje);if(a.sonido===h)return`${r}: varios sonidos`;const o=C(a.mecanica).find(n=>n.id===a.sonido)?.letra??a.sonido.toUpperCase();return`${r} con ${o}`}function M(a=_[0]){const r=u[a],o=C(a)[0].id,n={id:null,mecanica:a,personaje:r.personajes[0].id,ambiente:r.ambientes[0].id,sonido:o,palabras:L(a,o),forma:$[0].id,nombre:"",nombrePropio:!1};return n.nombre=P(n),n}function Z(a){const r=(a.rondas??["repetir"]).join();return $.find(o=>o.rondas.join()===r)?.id??$[0].id}function aa(a){const r=u[a.mecanica],o={id:a.id,mecanica:a.mecanica,personaje:a.aspecto?.personaje??r.personajes[0].id,ambiente:a.aspecto?.ambiente??r.ambientes[0].id,sonido:a.fonema,palabras:[...a.palabras],forma:Z(a),nombre:a.nombre,nombrePropio:!0};return o.nombrePropio=a.nombre!==P(o),o}function oa(a,r){const o=u[r],n=(p,v)=>p.some(l=>l.id===v)?v:p[0].id,d=C(r),e=d.some(p=>p.id===a.sonido)?a.sonido:d[0].id,c=E(r,e).map(p=>p.id),g=a.palabras.filter(p=>c.includes(p));return{...a,mecanica:r,personaje:n(o.personajes,a.personaje),ambiente:n(o.ambientes,a.ambiente),sonido:e,palabras:e===a.sonido&&g.length?g:L(r,e),forma:o.modo==="eleccion"?$[0].id:a.forma}}function R(a){return{id:a.id??`armado-${crypto.randomUUID()}`,mecanica:a.mecanica,nombre:a.nombre.trim()||P(a),fonema:a.sonido,palabras:a.palabras,aspecto:{personaje:a.personaje,ambiente:a.ambiente},...u[a.mecanica].modo==="eleccion"?{}:{rondas:$.find(r=>r.id===a.forma)?.rondas??$[0].rondas}}}const A=(a,r,o,n,d="")=>`<button type="button" class="armador-opcion ${d}" data-accion="${a}" data-valor="${r}" aria-pressed="${o}">${n}</button>`;function j(a,r,o=""){return`
    <section class="armador-paso">
      <h2>${a}</h2>
      ${o?`<p class="armador-ayuda">${o}</p>`:""}
      ${r}
    </section>`}function O(a,r,o){return`<div class="armador-chips">${r.map(n=>A(a,n.id,n.id===o,n.nombre)).join("")}</div>`}function ra(a,r,o){const n=u[a.mecanica],d=_.map(l=>{const b=u[l];return A("plantilla",l,l===a.mecanica,`
      <span class="armador-emoji" style="background: ${b.color}">${b.emoji}</span>
      <span class="armador-plantilla-texto"><b>${b.nombre}</b><small>${b.descripcion}</small></span>`,"armador-plantilla")}).join(""),e=C(a.mecanica).map(l=>A("sonido",l.id,l.id===a.sonido,l.letra,l.id===h?"":"armador-letra")).join(""),c=E(a.mecanica,a.sonido).map(l=>A("palabra",l.id,a.palabras.includes(l.id),`<span class="armador-emoji-palabra">${l.emoji}</span>${l.palabra}`,"armador-palabra")).join(""),g=!!n.pares&&new Set(E(a.mecanica,a.sonido).filter(l=>a.palabras.includes(l.id)).map(l=>l.fonema)).size<2,p=a.palabras.length===0||g,v=n.modo!=="eleccion";return`
    <div class="armador-pasos">
      ${j("1. ¿A qué se juega?",`<div class="armador-plantillas">${d}</div>`)}
      ${j("2. ¿Quién juega?",O("personaje",n.personajes,a.personaje))}
      ${j("3. ¿Dónde pasa?",O("ambiente",n.ambientes,a.ambiente))}
      ${j(n.pares?"4. ¿Qué sonidos se comparan?":"4. ¿Qué sonido se practica?",`<div class="armador-chips">${e}</div>`)}
      ${j("5. ¿Con qué palabras?",`<div class="armador-palabras">${c}</div>`,"Tocá una palabra para sacarla o volver a ponerla.")}
      ${v?j("6. ¿Cómo lo dice el nene?",O("forma",$,a.forma),"Mirando el dibujo no suena el modelo antes: si no le sale, llega como ayuda. Elegí palabras con un dibujo que se entienda."):""}
      ${j(`${v?7:6}. ¿Cómo se llama?`,`<input class="armador-nombre" data-rol="nombre" maxlength="60" aria-label="Nombre del juego" value="${x(a.nombre)}" />`)}
      <div class="armador-acciones">
        ${o?`<span class="armador-pregunta">¿Salir sin guardar los cambios?</span>
             <button type="button" class="armador-boton" data-accion="si-salir">Sí, salir</button>
             <button type="button" class="armador-boton armador-principal" data-accion="no-salir">Seguir armando</button>`:`<button type="button" class="armador-boton" data-accion="probar" ${p?"disabled":""}>Probar</button>
             <button type="button" class="armador-boton armador-principal" data-accion="guardar" ${p?"disabled":""}>Guardar</button>
             <button type="button" class="armador-boton armador-discreto" data-accion="volver">Volver</button>`}
      </div>
      ${p?`<p class="armador-aviso">${g?"Elegí palabras de los dos sonidos.":"Elegí al menos una palabra."}</p>`:""}
      ${r?`<p class="armador-aviso" role="alert">${r}</p>`:""}
    </div>`}function ea(a,r){const o=u[a.mecanica],n=D(o.personajes,a.aspecto?.personaje??o.personajes[0].id),d=D(o.ambientes,a.aspecto?.ambiente??o.ambientes[0].id),e=a.palabras.filter(g=>Q(g)).length,c=r?`<span class="armador-pregunta">¿Borrar este juego?</span>
       <button type="button" class="armador-boton" data-accion="si-borrar" data-valor="${a.id}">Sí, borrar</button>
       <button type="button" class="armador-boton" data-accion="no-borrar">No</button>`:`<button type="button" class="armador-boton armador-principal" data-accion="jugar" data-valor="${a.id}" ${e?"":"disabled"}>Jugar</button>
       <button type="button" class="armador-boton" data-accion="cambiar" data-valor="${a.id}">Cambiar</button>
       <button type="button" class="armador-boton armador-discreto" data-accion="borrar" data-valor="${a.id}">Borrar</button>`;return`
    <li class="armador-juego">
      <span class="armador-emoji" style="background: ${o.color}">${o.emoji}</span>
      <div class="armador-juego-texto">
        <b>${x(a.nombre)}</b>
        <small>${n} · ${d} · ${e?`${e} ${e===1?"palabra":"palabras"}`:"le faltan palabras: tocá Cambiar"}</small>
      </div>
      <div class="armador-juego-acciones">${c}</div>
    </li>`}function na(a,r){let o=M(),n=null,d="",e=null,c=!1;const g=()=>e!==null&&JSON.stringify(o)!==e;window.addEventListener("beforeunload",i=>{g()&&i.preventDefault()});const p=i=>{o=i,e=JSON.stringify(i),d="",c=!1,y()},v=(i,t)=>{const s=document.createElement("div");return s.className="armador",s.innerHTML=i,s.addEventListener("click",f=>{const m=f.target.closest("[data-accion]");m&&!m.disabled&&t(m.dataset.accion,m.dataset.valor??"")}),a.replaceChildren(s),s},l=async(i,t)=>{await r.jugar(i),t()};function b(){e=null;const i=J().filter(s=>s.mecanica in u),t=i.length?`<ul class="armador-lista">${i.map(s=>ea(s,s.id===n)).join("")}</ul>`:'<p class="armador-vacio">Todavía no armaste ningún juego. ¡Armá el primero!</p>';v(`
      <header class="armador-cabeza">
        <h1>Mis juegos</h1>
        <button type="button" class="armador-boton armador-principal" data-accion="nuevo">Armar un juego</button>
      </header>
      <p class="armador-preguntas">
        <span>Andrés te dejó preguntas sobre los juegos.</span>
        <a class="armador-boton" href="./preguntas.html">Ver las preguntas</a>
      </p>
      ${t}
      <p class="armador-ayuda">Los juegos quedan guardados solo en este navegador: en otra computadora o tablet no aparecen.</p>
    `,(s,f)=>{const m=i.find(S=>S.id===f);s==="nuevo"?p(M()):s==="jugar"&&m?l(m,b):s==="cambiar"&&m?p(aa(m)):s==="borrar"?(n=f,b()):s==="no-borrar"?(n=null,b()):s==="si-borrar"&&(X(f),n=null,b())})}const k=()=>{o.nombrePropio||(o.nombre=P(o))};function B(i,t){if(i==="plantilla"){if(t===o.mecanica)return;o=oa(o,t)}else if(i==="personaje")o.personaje=t;else if(i==="forma")o.forma=t;else if(i==="ambiente")o.ambiente=t;else if(i==="sonido"){if(t===o.sonido)return;o.sonido=t,o.palabras=L(o.mecanica,t)}else i==="palabra"&&(o.palabras=o.palabras.includes(t)?o.palabras.filter(s=>s!==t):[...o.palabras,t]);k(),d="",c=!1,y()}function y(){const i=v(`
      <header class="armador-cabeza"><h1>${o.id?"Cambiar el juego":"Armar un juego"}</h1></header>
      <div class="armador-editor">
        ${ra(o,d,c)}
        <aside class="armador-vista-lugar" aria-label="Así se ve el juego">
          <p class="armador-ayuda">Así se ve:</p>
          <div class="reproductor armador-vista"><div class="escenario" data-rol="vista"></div></div>
        </aside>
      </div>
    `,(s,f)=>{if(s==="volver")return g()?(c=!0,y()):b();if(s==="si-salir")return b();if(s==="no-salir")return c=!1,y();if(s==="probar")return void l(R(o),y);if(s==="guardar"){const m=R(o);return W(m)?b():(d="No se pudo guardar. Probá de nuevo.",y())}B(s,f)}),t=i.querySelector('[data-rol="nombre"]');t.addEventListener("input",()=>{o.nombre=t.value,o.nombrePropio=t.value.trim()!==""}),z(i.querySelector('[data-rol="vista"]'))}function z(i){const t=document.createElement("div");t.className="lugar-actividad",t.style.setProperty("--factor-animacion","0.4"),i.replaceChildren(t);const{apoyos:s}=U,f=u[o.mecanica].crear(t,s,{personaje:o.personaje,ambiente:o.ambiente}),m=I(o.mecanica).filter(N=>o.palabras.includes(N.id));f.plantearMeta?.(m.length),f.plantearCasas?.(m);const S=$.find(N=>N.id===o.forma)?.rondas[0],F=S==="evocar"||u[o.mecanica].modo==="eleccion"?{...s,palabraEscrita:!1}:s;m[0]&&f.presentar(m[0],F,S)}b()}const sa={id:"nene-prueba",nombre:"Nene de prueba"},T=document.querySelector("#app");async function ta(a){await H(T,{sesionId:a.id,juego:a,nene:sa,acompana:"terapeuta",ajustes:U,sesionesCompletadas:0}).terminada}na(T,{jugar:ta});
