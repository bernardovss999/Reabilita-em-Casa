/* Reabilita em Casa · interações */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  var WA = "5521997443300";
  function waLink(msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); }
  window.waLink = waLink;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Cabeçalho: some ao descer, volta ao subir, com barra de progresso */
  var header = document.querySelector(".header");
  var float = document.querySelector(".wa-float");
  var footer = document.querySelector(".footer");
  var lastY = window.scrollY, ticking = false;
  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 8);
      var goingDown = y > lastY + 4, goingUp = y < lastY - 4;
      if (goingDown && y > 220 && !document.body.classList.contains("menu-open")) header.classList.add("is-hidden");
      else if (goingUp || y < 220) header.classList.remove("is-hidden");
      var max = document.documentElement.scrollHeight - window.innerHeight;
      header.style.setProperty("--p", max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
    }
    if (float && footer) {
      var nearFooter = footer.getBoundingClientRect().top < window.innerHeight - 40;
      float.classList.toggle("is-hidden", y < 420 || nearFooter || document.body.classList.contains("menu-open"));
    }
    lastY = y;
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* Menu desktop: indicador que desliza entre os itens */
  var nav = document.querySelector(".nav");
  if (nav) {
    var ind = nav.querySelector(".nav-ind");
    var links = nav.querySelectorAll("a");
    var current = nav.querySelector('a[aria-current="page"]');
    var moveTo = function (a) {
      if (!a) { nav.classList.remove("has-ind"); return; }
      var r = a.getBoundingClientRect(), n = nav.getBoundingClientRect();
      ind.style.setProperty("--x", (r.left - n.left) + "px");
      ind.style.setProperty("--w", r.width + "px");
      nav.classList.add("has-ind");
      nav.classList.toggle("on-current", a === current);
    };
    var snap = function (a) {
      ind.style.transition = "none"; moveTo(a); void ind.offsetWidth; ind.style.transition = "";
    };
    links.forEach(function (a) {
      var enter = function () {
        if (a === current) { nav.classList.remove("has-ind"); return; }
        if (!nav.classList.contains("has-ind")) snap(current || a);
        requestAnimationFrame(function () { moveTo(a); });
      };
      a.addEventListener("mouseenter", enter);
      a.addEventListener("focus", enter);
    });
    nav.addEventListener("mouseleave", function () { nav.classList.remove("has-ind"); });
    var place = function () {
      ind.style.transition = "none"; nav.classList.remove("has-ind");
      void ind.offsetWidth; ind.style.transition = "";
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place); else place();
    window.addEventListener("resize", place);
  }

  /* Menu mobile: painel que se abre a partir do botão */
  var drawer = document.getElementById("drawer");
  var burger = document.querySelector("[data-menu]");
  function setMenu(open) {
    if (!drawer || !burger) return;
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("lock", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.querySelectorAll("main, footer, .wa-float, .skip").forEach(function (el) {
      if (open) el.setAttribute("inert", ""); else el.removeAttribute("inert");
    });
    if (header) header.classList.remove("is-hidden");
    if (open) { var first = drawer.querySelector("a"); if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 350); }
    onScroll();
  }
  if (burger) burger.addEventListener("click", function () { setMenu(!drawer.classList.contains("is-open")); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer && drawer.classList.contains("is-open")) { setMenu(false); burger.focus(); }
  });
  window.addEventListener("resize", function () { if (window.innerWidth >= 1040 && drawer && drawer.classList.contains("is-open")) setMenu(false); });

  /* Transição entre páginas: cortina de colunas da marca */
  var curtain = document.querySelector(".pt");
  if (curtain && doc.classList.contains("pt-enter")) {
    setTimeout(function () { doc.classList.remove("pt-enter"); }, 900);
  }
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) doc.classList.remove("pt-leave", "pt-enter");
  });
  document.addEventListener("click", function (e) {
    if (reduce || !curtain || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^(mailto|tel|https?):/i.test(href)) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return; /* âncora na mesma página */
    e.preventDefault();
    var go = function () { location.href = url.href; };
    try { sessionStorage.setItem("rc-pt", "1"); } catch (err) {}
    if (drawer && drawer.classList.contains("is-open")) document.body.classList.remove("lock");
    doc.classList.add("pt-leave");
    setTimeout(go, 520);
  });

  /* Título principal: separa em palavras para subirem de uma máscara */
  document.querySelectorAll("h1.display").forEach(function (h) {
    var k = 0;
    var walk = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var inner = document.createElement("span"); inner.textContent = part;
            inner.style.setProperty("--wi", k++);
            w.appendChild(inner); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) { walk(n); }
      });
    };
    h.setAttribute("aria-label", h.textContent.replace(/\s+/g, " ").trim());
    walk(h);
    h.classList.add("split-words");
  });

  /* Revelação suave */
  var rvs = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var rail = en.target.closest(".rail");
        var group = rail ? rail.querySelectorAll(".rv") : [en.target];
        Array.prototype.forEach.call(group, function (el) { el.classList.add("in"); io.unobserve(el); });
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    rvs.forEach(function (el) { el.classList.add("in"); });
  }

  /* Reels: toca no próprio card */
  document.querySelectorAll(".reel[data-video]").forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (card.classList.contains("is-playing")) return;
      e.preventDefault();
      document.querySelectorAll(".reel.is-playing video").forEach(function (v) { v.pause(); });
      var v = document.createElement("video");
      v.src = card.getAttribute("data-video");
      v.controls = true; v.playsInline = true; v.setAttribute("playsinline", "");
      v.preload = "auto";
      card.appendChild(v);
      card.classList.add("is-playing");
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
  });

  /* Catálogo (página de equipamentos) e prévia (home) */
  var PRODUTOS = window.PRODUTOS || [];
  var byId = function (id) { return PRODUTOS.filter(function (x) { return x.id === id; })[0]; };
  var consultMsg = function (p) { return waLink("Olá! Vim pelo site e gostaria de consultar a disponibilidade de: " + p.nome + (p.marca ? " (" + p.marca + ")" : "") + "."); };
  function cardHTML(p, preview) {
    var tag = p.venda ? '<span class="p-tag sale">Venda</span>' : "";
    var img = '<img src="assets/img/produtos/' + p.id + '.webp" alt="' + p.nome + (p.marca ? " " + p.marca : "") + '" loading="lazy" width="340" height="230">';
    var media = preview
      ? '<a class="p-media" href="equipamentos.html#' + p.id + '" aria-label="Ver ficha: ' + p.nome + '">' + tag + img + '</a>'
      : '<button class="p-media" type="button" data-open="' + p.id + '" aria-label="Ver detalhes: ' + p.nome + '">' + tag + img + '</button>';
    var details = preview
      ? '<a class="btn btn-ghost" href="equipamentos.html#' + p.id + '">Detalhes</a>'
      : '<button class="btn btn-ghost" type="button" data-open="' + p.id + '">Detalhes</button>';
    return '<article class="p-card" data-cat="' + p.cat + '"' + (preview ? "" : ' id="' + p.id + '"') + '>' + media +
      '<div class="p-body">' +
      '<span class="p-brand">' + (p.marca || "Acessório") + '</span>' +
      '<h3>' + p.nome + '</h3><p>' + p.resumo + '</p>' +
      '<div class="chips">' + p.destaques.map(function (d) { return "<span>" + d + "</span>"; }).join("") + '</div>' +
      '<div class="p-actions">' + details +
      '<a class="btn btn-sun" href="' + consultMsg(p) + '" target="_blank" rel="noopener">Consultar</a>' +
      '</div></div></article>';
  }
  function filterButtons(el, cats, counts) {
    el.innerHTML = cats.map(function (c, i) {
      return '<button type="button" data-cat="' + c.id + '" aria-pressed="' + (i === 0) + '">' + c.nome + (counts ? '<sup>' + counts(c.id) + '</sup>' : "") + '</button>';
    }).join("");
  }
  function animateIn(cards) {
    cards.forEach(function (card, k) {
      card.classList.remove("show");
      card.style.setProperty("--i", k);
      void card.offsetWidth;
      card.classList.add("show");
    });
  }

  var grid = document.getElementById("catalogo-grid");
  if (grid && PRODUTOS.length) {
    var filtersEl = document.getElementById("catalogo-filtros");
    grid.innerHTML = PRODUTOS.map(function (p) { return cardHTML(p, false); }).join("");
    var setCat = function (cat) {
      if (!filtersEl) return;
      filtersEl.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x.getAttribute("data-cat") === cat ? "true" : "false"); });
      var shown = [];
      grid.querySelectorAll(".p-card").forEach(function (card) {
        var show = cat === "todos" || card.getAttribute("data-cat") === cat;
        card.hidden = !show;
        if (show) shown.push(card);
      });
      animateIn(shown);
    };
    if (filtersEl && window.CATEGORIAS) {
      filterButtons(filtersEl, window.CATEGORIAS, function (id) {
        return id === "todos" ? PRODUTOS.length : PRODUTOS.filter(function (p) { return p.cat === id; }).length;
      });
      filtersEl.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-cat]");
        if (b) setCat(b.getAttribute("data-cat"));
      });
    }

    var dlg = document.getElementById("produto");
    var openProduct = function (id) {
      var p = byId(id);
      if (!p || !dlg) return;
      dlg.querySelector("[data-p-img]").src = "assets/img/produtos/" + p.id + ".webp";
      dlg.querySelector("[data-p-img]").alt = p.nome;
      dlg.querySelector("[data-p-brand]").textContent = (p.marca || "Acessório") + (p.venda ? " · Venda" : "");
      dlg.querySelector("[data-p-name]").textContent = p.nome;
      dlg.querySelector("[data-p-sum]").textContent = p.resumo;
      dlg.querySelector("[data-p-specs]").innerHTML = p.specs.map(function (s) { return "<li>" + s + "</li>"; }).join("");
      dlg.querySelector("[data-p-wa]").href = consultMsg(p);
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      document.body.classList.add("dlg-open");
    };
    grid.addEventListener("click", function (e) {
      var b = e.target.closest("[data-open]");
      if (b) openProduct(b.getAttribute("data-open"));
    });
    if (dlg) {
      dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
      dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener("close", function () { document.body.classList.remove("dlg-open"); });
    }

    /* Endereço com #categoria filtra; com #produto abre a ficha dele */
    var hash = decodeURIComponent((location.hash || "").replace("#", ""));
    var linked = byId(hash);
    if (linked) {
      setCat(linked.cat);
      var card = document.getElementById(linked.id);
      setTimeout(function () {
        if (card) card.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
        setTimeout(function () { openProduct(linked.id); }, reduce ? 0 : 450);
      }, doc.classList.contains("pt-enter") ? 520 : 120);
    } else if (filtersEl && filtersEl.querySelector('button[data-cat="' + hash + '"]')) {
      setCat(hash);
    }
  }

  var preview = document.getElementById("previa-grid");
  if (preview && PRODUTOS.length) {
    var PREVIA = {
      todos: ["agile", "andador-articulado", "higienizacao-branca", "cama-mr441", "poty", "andador-4-rodas", "banho-big", "disco-giratorio"],
      cadeiras: ["agile", "taipu-j3", "d400", "poty"],
      banho: ["higienizacao-branca", "higienizacao-cinza", "banho-big", "banho-br"],
      marcha: ["andador-articulado", "andador-4-rodas", "andador-3-rodas", "muleta-canadense"],
      camas: ["cama-manual", "cama-mr441", "cama-mr505", "colchao-pneumatico"]
    };
    var pf = document.getElementById("previa-filtros");
    var showPreview = function (cat) {
      preview.innerHTML = (PREVIA[cat] || PREVIA.todos).map(function (id) { return byId(id); }).filter(Boolean)
        .map(function (p) { return cardHTML(p, true); }).join("");
      animateIn(Array.prototype.slice.call(preview.children));
    };
    if (pf && window.CATEGORIAS) {
      filterButtons(pf, window.CATEGORIAS.filter(function (c) { return PREVIA[c.id]; }));
      pf.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-cat]");
        if (!b) return;
        pf.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        showPreview(b.getAttribute("data-cat"));
      });
    }
    showPreview("todos");
  }

  /* Formulário de contato → WhatsApp */
  var form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var assunto = (form.querySelector('input[name="assunto"]:checked') || {}).value || "Atendimento";
      var msg = form.mensagem.value.trim();
      var txt = "Olá! Meu nome é " + (nome || "—") + ". Vim pelo site e gostaria de falar sobre: " + assunto + "." + (msg ? "\n\n" + msg : "");
      window.open(waLink(txt), "_blank", "noopener");
    });
  }

  /* Guias: no celular começam fechados (página mais limpa), exceto o do link */
  if (window.innerWidth < 900) {
    document.querySelectorAll("details.guide[open]").forEach(function (d) {
      if ("#" + d.id !== location.hash) d.removeAttribute("open");
    });
  }
  var hashGuide = location.hash && document.querySelector("details.guide" + location.hash);
  if (hashGuide) hashGuide.setAttribute("open", "");

  /* Página de links: entrada em cascata */
  var linksEl = document.querySelector(".links");
  if (linksEl) requestAnimationFrame(function () { linksEl.classList.add("in"); });

  /* Palco da Andréa: entrada animada, parallax de rolagem e de cursor */
  document.querySelectorAll(".stage").forEach(function (stage) {
    var cut = stage.querySelector(".st-cut");
    var start = function () {
      stage.classList.add("in");
      setTimeout(function () { stage.classList.add("settled"); }, 1700);
    };
    var whenReady = function (cb) {
      if (!cut || cut.complete) return cb();
      cut.addEventListener("load", cb, { once: true });
      cut.addEventListener("error", cb, { once: true });
    };
    if ("IntersectionObserver" in window) {
      var so = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) {
          so.disconnect();
          var delay = doc.classList.contains("pt-enter") ? 260 : 60;
          whenReady(function () { setTimeout(start, delay); });
        }
      }, { threshold: .15 });
      so.observe(stage);
    } else { start(); }
    if (reduce) return;
    var raf = 0;
    var onMove = function () {
      var r = stage.getBoundingClientRect();
      var vis = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
      stage.style.setProperty("--sy", (vis * 18).toFixed(1) + "px");
      stage.style.setProperty("--sy2", (vis * -26).toFixed(1) + "px");
      raf = 0;
    };
    window.addEventListener("scroll", function () { if (!raf) raf = requestAnimationFrame(onMove); }, { passive: true });
    onMove();
    if (finePointer) {
      var host = stage.parentElement;
      host.addEventListener("pointermove", function (e) {
        var r = host.getBoundingClientRect();
        var dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
        stage.style.setProperty("--mx", (dx * 14).toFixed(1) + "px");
        stage.style.setProperty("--my", (dy * 14).toFixed(1) + "px");
      });
      host.addEventListener("pointerleave", function () {
        stage.style.setProperty("--mx", "0px"); stage.style.setProperty("--my", "0px");
      });
    }
  });

  /* Serviços: prévia em quadrado que acompanha o cursor */
  var svcList = document.querySelector(".svc-list");
  if (svcList && finePointer && !reduce) {
    var pv = document.createElement("div");
    pv.className = "svc-preview"; pv.setAttribute("aria-hidden", "true");
    var pvIn = document.createElement("div"); pv.appendChild(pvIn);
    svcList.querySelectorAll(".svc[data-img]").forEach(function (s, i) {
      var im = document.createElement("img");
      im.src = s.getAttribute("data-img"); im.alt = ""; im.loading = "lazy";
      if (s.hasAttribute("data-cut")) im.className = "cut";
      im.setAttribute("data-k", i);
      pvIn.appendChild(im);
      s.setAttribute("data-k", i);
    });
    document.body.appendChild(pv);
    var tx = 0, ty = 0, cx = 0, cy = 0, loop = 0;
    var follow = function () {
      cx += (tx - cx) * .22; cy += (ty - cy) * .22;
      pv.style.setProperty("--cx", cx.toFixed(1) + "px");
      pv.style.setProperty("--cy", cy.toFixed(1) + "px");
      loop = (Math.abs(tx - cx) + Math.abs(ty - cy) > .5) ? requestAnimationFrame(follow) : 0;
    };
    svcList.addEventListener("pointermove", function (e) {
      tx = e.clientX + 170; ty = e.clientY - 10;
      if (!pv.classList.contains("on")) { cx = tx; cy = ty; }
      if (!loop) loop = requestAnimationFrame(follow);
    });
    svcList.querySelectorAll(".svc").forEach(function (s) {
      s.addEventListener("pointerenter", function () {
        var k = s.getAttribute("data-k");
        pv.querySelectorAll("img").forEach(function (im) { im.classList.toggle("show", im.getAttribute("data-k") === k); });
        pv.classList.add("on");
      });
    });
    svcList.addEventListener("pointerleave", function () { pv.classList.remove("on"); });
  }

  /* Carrosséis: setas laterais no celular e no tablet */
  var arrowSvg = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
  document.querySelectorAll(".rail").forEach(function (rail) {
    var wrap = document.createElement("div");
    wrap.className = "rail-wrap";
    rail.parentNode.insertBefore(wrap, rail);
    wrap.appendChild(rail);
    var prev = document.createElement("button"), next = document.createElement("button");
    prev.type = next.type = "button";
    prev.className = "rail-btn prev"; next.className = "rail-btn next";
    prev.setAttribute("aria-label", "Anterior"); next.setAttribute("aria-label", "Próximo");
    prev.innerHTML = next.innerHTML = arrowSvg;
    wrap.appendChild(prev); wrap.appendChild(next);
    var step = function () {
      var first = rail.firstElementChild;
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 12;
      return first ? first.getBoundingClientRect().width + gap : rail.clientWidth * .8;
    };
    var update = function () {
      var max = rail.scrollWidth - rail.clientWidth;
      wrap.classList.toggle("is-scrollable", max > 4);
      prev.disabled = rail.scrollLeft <= 4;
      next.disabled = rail.scrollLeft >= max - 4;
    };
    prev.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" }); });
    rail.addEventListener("scroll", function () { requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  /* Ano no rodapé */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
