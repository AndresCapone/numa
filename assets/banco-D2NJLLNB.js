import"./modulepreload-polyfill-B5Qt9EMX.js";import{J as y,P as S,A as z,a as H,p as L,S as O,l as _,m as D,b as J,o as R,s as V}from"./montarSesion-5O4gN0Km.js";function B(a){return a.adulto?a.adulto.decision==="bien":a.automatico?a.automatico.ok:null}function x(a){const t=new Map;for(const e of a){if(e.consigna==="discriminar")continue;const i=B(e);if(i===null)continue;const n=t.get(e.palabraId)??{palabraId:e.palabraId,fonema:e.fonema,total:0,aciertos:0,porcentaje:0};n.total++,i&&n.aciertos++,n.porcentaje=Math.round(n.aciertos/n.total*100),t.set(e.palabraId,n)}return[...t.values()].sort((e,i)=>e.porcentaje-i.porcentaje)}const G=[["presentar","Presentar"],["elegir","Elegir"],["modelo-0","Modelo 1.ª sílaba"],["escuchar","Escuchar"],["escuchando","Habla 🎤"],["reproduciendo","Se escucha 🔊"],["pensando","Pensando"],["veredicto-bien","Veredicto: bien"],["veredicto-mal","Veredicto: mal"],["alentar","Alentar"],["espera-toque","Espera un toque"],["estructura","Estructura"],["neutro","Neutro"],["confirmado","Confirmado"],["otra-vez","Otra vez"],["reiniciar","Reiniciar"],["terminar","Terminar"]],U=3,F=2500;function K(a,t={}){const e=Object.keys(y);a.innerHTML=`
    <div class="vitrina">
      <div class="barra">
        <select data-rol="vitrina-juego">${e.map(o=>`<option value="${o}">${y[o].nombre}</option>`).join("")}</select>
        <select data-rol="vitrina-palabra">${S.map(o=>`<option value="${o.id}">${o.emoji} ${o.palabra}</option>`).join("")}</select>
        <select data-rol="vitrina-personaje" aria-label="Personaje"></select>
        <select data-rol="vitrina-ambiente" aria-label="Ambiente"></select>
        <span class="detalle" data-rol="vitrina-modo"></span>
      </div>
      <div class="vitrina-eventos">${G.map(([o,c])=>`<button data-evento="${o}">${c}</button>`).join("")}</div>
      <p class="detalle" data-rol="vitrina-estado"></p>
      <div class="reproductor vitrina-escena"><div class="escenario" data-rol="vitrina-escenario"></div></div>
    </div>
  `;const i=a.querySelector('[data-rol="vitrina-juego"]'),n=a.querySelector('[data-rol="vitrina-palabra"]'),r=a.querySelector('[data-rol="vitrina-personaje"]'),l=a.querySelector('[data-rol="vitrina-ambiente"]'),m=a.querySelector('[data-rol="vitrina-modo"]'),u=a.querySelector('[data-rol="vitrina-estado"]'),$=a.querySelector('[data-rol="vitrina-escenario"]'),b=z.apoyos;let s,M;const N=()=>L(n.value)??S[0],h=()=>{clearInterval(M),M=void 0},T=o=>o.map(c=>`<option value="${c.id}">${c.nombre}</option>`).join(""),P=()=>{h();const o=i.value,c=y[o],d=H.find(j=>j.mecanica===o)?.palabras[0];d&&(n.value=d),m.textContent=c.modo==="confirmacion"?"valida el adulto":"valida el juez",$.innerHTML="";const p=document.createElement("div");p.className="lugar-actividad",t.factor!==void 0&&p.style.setProperty("--factor-animacion",String(t.factor)),$.append(p),s=c.crear(p,b,{personaje:r.value,ambiente:l.value}),s.plantearMeta?.(U),s.plantearCasas?.(S.filter(j=>j.fonema==="p"||j.fonema==="m")),u.textContent=""},k=o=>{const c=N();switch(o){case"presentar":return s.presentar(c,b);case"elegir":return s.elegir?.(S.filter(d=>d.etiquetas.includes("cuerpo")).slice(0,3));case"modelo-0":return s.modelo(0,!1);case"escuchar":return s.escuchar();case"escuchando":{h();const d=Date.now();M=setInterval(()=>{const p=Date.now()-d;if(p>F)return h();s.escuchando(Math.abs(Math.sin(p/180))*.9)},60);return}case"reproduciendo":return s.reproduciendo();case"pensando":return s.pensando();case"veredicto-bien":return s.veredicto(!0);case"veredicto-mal":return s.veredicto(!1);case"alentar":return s.alentar?.();case"espera-toque":return s.esperaToque?.();case"estructura":for(let d=1;d<c.silabas.length;d++)s.modelo(d,!0);return;case"neutro":return s.neutro();case"confirmado":return s.confirmado();case"otra-vez":return s.otraVez();case"reiniciar":return s.reiniciar();case"terminar":return s.terminar?.()}},I=(o,c)=>{u.textContent=`«${o}» falló: ${c instanceof Error?c.message:String(c)}`};for(const o of a.querySelectorAll("[data-evento]"))o.addEventListener("click",()=>{const c=o.dataset.evento;u.textContent="",h();try{const d=k(c);d instanceof Promise&&d.catch(p=>I(c,p))}catch(d){I(c,d)}});const w=()=>{const o=y[i.value];r.innerHTML=T(o.personajes),l.innerHTML=T(o.ambientes),P()};i.addEventListener("change",w),r.addEventListener("change",P),l.addEventListener("change",P),w()}const E={id:"nene-prueba",nombre:"Nene de prueba"},v=document.querySelector("#app");async function C(){const a=O.map(e=>`<option value="${e.id}">${e.nombre}</option>`).join("");v.innerHTML=`
    <div class="banco">
      <h1>Banco de pruebas</h1>
      <p class="detalle">Juega con <b>${E.nombre}</b>, acompañado por la terapeuta. Todo queda en este navegador. Para armar juegos, <a href="/armar.html">Mis juegos</a>.</p>
      <div class="barra">
        <select data-rol="sesion">${a}</select>
        <button class="principal" data-rol="jugar">Jugar</button>
      </div>
      <details class="progreso" open>
        <summary>Progreso por palabra</summary>
        <div data-rol="progreso"><p class="detalle">Cargando…</p></div>
      </details>
      <details class="progreso" data-rol="medir">
        <summary>Medir el juez con sílabas sueltas</summary>
        <div data-rol="medicion"></div>
      </details>
      <details class="progreso" data-rol="vitrina-seccion">
        <summary>Probar escenas: cada momento de cada juego, sin micrófono</summary>
        <div data-rol="vitrina"></div>
      </details>
    </div>
  `;const t=v.querySelector('[data-rol="vitrina-seccion"]');t.addEventListener("toggle",()=>{const e=v.querySelector('[data-rol="vitrina"]');t.open&&!e.childElementCount&&K(e)}),v.querySelector('[data-rol="jugar"]').addEventListener("click",()=>{if(g)return;const e=v.querySelector('[data-rol="sesion"]').value;Z(e)}),f(),await Y()}const Q=["pelo","panza","pie","pierna"],A=new Map;let g=!1;const q=(a,t)=>`${a}:${t}`;function f(a=""){const t=v.querySelector('[data-rol="medicion"]');if(!t)return;const e=Q.map(r=>L(r)).filter(r=>r!==void 0),i=e.flatMap(r=>["silaba","palabra"].map(l=>{const m=A.get(q(r.id,l))??[],u=l==="silaba"?`decí solo <b>${r.silabas[0]}</b>`:`decí <b>${r.palabra}</b>`,$=m.map(b=>`${b.ok?"✓":"✗"} <code>${X(b.transcripcion||"(nada)")}</code> ${Math.round(b.confianza*100)}%`).join(" · ");return`<tr>
          <td>${u}</td>
          <td><button data-medir="${q(r.id,l)}" ${g?"disabled":""}>Grabar</button></td>
          <td>${$||'<span class="detalle">—</span>'}</td>
        </tr>`})).join(""),n=["silaba","palabra"].map(r=>{const l=e.flatMap(u=>A.get(q(u.id,r))??[]),m=l.filter(u=>u.ok).length;return`${r==="silaba"?"Sílaba sola":"Palabra entera"}: ${m}/${l.length} aceptadas`}).join(" · ");t.innerHTML=`
    <p class="detalle">Grabá cada fila varias veces. El juez exige la sílaba objetivo de la palabra (por ejemplo «pa» en panza). Nada se guarda: al recargar se pierde.</p>
    <table>${i}</table>
    <p><b>${n}</b></p>
    <p class="detalle" data-rol="mensaje-medicion">${a}</p>
  `;for(const r of t.querySelectorAll("[data-medir]"))r.addEventListener("click",()=>{W(r.dataset.medir)})}async function W(a){if(g)return;const[t]=a.split(":"),e=L(t);if(!e)return;g=!0,f("Preparando el micrófono y el reconocedor…");let i="";try{const n=await R(r=>f(`Preparando… ${r}%`));if(!n.hayMicrofono)i=n.aviso??"No hay micrófono.";else{f("Hablá ahora 🎤");const r=await n.recorder.grabar().clip;if(!r)i="No se escuchó nada: no cuenta.";else{f("Evaluando…");const l=await n.juez.evaluar(r,e);if(l.vacio)i=`No se entendió nada (${l.transcripcion||"vacío"}): no cuenta.`;else{const m=A.get(a)??[];m.push({transcripcion:l.transcripcion,ok:l.silabaOk,confianza:l.confianza}),A.set(a,m)}}}}catch(n){i=`El reconocedor falló: ${n instanceof Error?n.message:n}`}await V(),g=!1,f(i)}const X=a=>a.replace(/[<>&]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[t]);async function Y(){const a=v.querySelector('[data-rol="progreso"]');if(!a)return;const t=await J({neneId:E.id}).then(x).catch(()=>[]);a.innerHTML=t.length?`<table>${t.map(e=>`<tr><td>${e.palabraId} <small>/${e.fonema}/</small></td><td>${e.aciertos}/${e.total} · ${e.porcentaje}%</td></tr>`).join("")}</table>`:'<p class="detalle">Todavía no hay intentos guardados.</p>'}async function Z(a){const t=await _({neneId:E.id}).then(i=>i.filter(n=>n.completa).length).catch(()=>0);await D(v,{sesionId:a,nene:E,acompana:"terapeuta",ajustes:z,sesionesCompletadas:t}).terminada,await C()}C();
