# -*- coding: utf-8 -*-
"""
Gera as páginas do site a partir de src/*.html.
Uso:  python src/build.py   (rodar dentro da pasta Site)
Cada arquivo em src/ é o conteúdo do <main>. Cabeçalho, rodapé,
ícones e metadados vêm daqui, para manter tudo consistente.
"""
import json, os, pathlib, urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
BASE = "https://reabilitaemcasa.com.br/"
WA = "5521997443300"

def wa(msg):
    return "https://wa.me/%s?text=%s" % (WA, urllib.parse.quote(msg))

LINKS = {
    "WA_GERAL": wa("Olá, Andréa! Vim pelo site da Reabilita em Casa e gostaria de conversar."),
    "WA_LOCACAO": wa("Olá! Vim pelo site e gostaria de um orçamento para locação de equipamento."),
    "WA_FISIO": wa("Olá! Vim pelo site e gostaria de saber mais sobre a fisioterapia domiciliar."),
    "WA_ESCOLHA": wa("Olá! Vim pelo site e gostaria de ajuda para escolher o equipamento certo."),
    "TEL": "tel:+5521997443300",
    "IG": "https://www.instagram.com/reabilitaemcasa/",
    "YT": "https://www.youtube.com/@reabilitaemcasaporandreara3225",
    "FB": "https://www.facebook.com/reabilitaemcasa/",
    "EBOOK": "https://reclocacao.com.br/guia-pratico-do-andador/",
    "MAPS": "https://www.google.com/maps/place/?q=place_id:ChIJrwPI5N_dmwARKPaNNAPKhd4",
}

NAV = [
    ("index.html", "Início"),
    ("equipamentos.html", "Equipamentos"),
    ("fisioterapia.html", "Fisioterapia"),
    ("conteudos.html", "Conteúdos"),
    ("contato.html", "Contato"),
    ("andrea-rangel.html", "Andréa Rangel"),
]

PAGES = {
    "index.html": dict(
        title="Reabilita em Casa · Andréa Rangel | Fisioterapia e locação de equipamentos no Rio",
        desc="Locação de cadeiras de rodas, andadores e camas hospitalares com orientação de fisioterapeuta, e fisioterapia domiciliar para a pessoa idosa no Rio de Janeiro. Com Andréa Rangel."),
    "andrea-rangel.html": dict(
        title="Andréa Rangel, fisioterapeuta da pessoa idosa | Reabilita em Casa",
        desc="Há 25 anos Andréa Rangel cuida da mobilidade e da independência da pessoa idosa. Conheça a trajetória, a formação e o que ela acredita."),
    "equipamentos.html": dict(
        title="Locação de equipamentos de reabilitação no Rio | Reabilita em Casa",
        desc="Cadeiras de rodas, andadores, muletas, cadeiras de banho e camas hospitalares para alugar, com orientação de fisioterapeuta, entrega no mesmo dia e demonstração de uso."),
    "fisioterapia.html": dict(
        title="Fisioterapia domiciliar no Rio de Janeiro | Reabilita em Casa",
        desc="Fisioterapia geriátrica, traumato-ortopédica e neurológica em casa. Atendimento individual, avaliação detalhada e plano feito para a sua rotina."),
    "conteudos.html": dict(
        title="Guias de mobilidade: andador, bengala e cadeira de rodas | Reabilita em Casa",
        desc="Orientações práticas de Andréa Rangel para usar andador, bengala e cadeira de rodas com segurança, prevenir quedas e preservar a independência."),
    "contato.html": dict(
        title="Contato | Reabilita em Casa · Recreio dos Bandeirantes, RJ",
        desc="Fale com a Reabilita em Casa pelo WhatsApp (21) 99744-3300. Rua Antônio Batista Bitencourt, 45, sala 203, Recreio dos Bandeirantes, Rio de Janeiro."),
    "404.html": dict(
        title="Página não encontrada | Reabilita em Casa",
        desc="A página procurada não foi encontrada.", noindex=True),
    "links.html": dict(
        title="Andréa Rangel · Links | Reabilita em Casa",
        desc="Guia prático do andador, locação de equipamentos, fisioterapia domiciliar e canais de conteúdo de Andréa Rangel.", bare=True),
}

ICONS = {
    "wa": '<path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.5 21.5l4.9-1.3A9.4 9.4 0 1 0 12 2.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8.6 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.9 1.1 1.6 1.9 2.2.6.4 1 .6 1.3.7.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.1 1.1-.5 1.5-.5.5-1.3.9-2.1.8-1.1-.1-2.6-.6-4.3-2.1-1.6-1.4-2.5-3-2.8-4-.3-1 .1-1.9.4-2.2Z" fill="currentColor"/>',
    "arrow": '<path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    "out": '<path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    "ig": '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>',
    "yt": '<rect x="2.5" y="5" width="19" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/>',
    "fb": '<path d="M14 21v-8h3l.5-3.5H14V7.6c0-1 .3-1.7 1.8-1.7h1.8V2.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.4H7.8V13h2.9v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    "phone": '<path d="M5 3.5h3.2l1.6 4-2 1.3a11 11 0 0 0 7.4 7.4l1.3-2 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16.6 16.6 0 0 1 3.4 5.2 1.6 1.6 0 0 1 5 3.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    "pin": '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/>',
    "clock": '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    "play": '<path d="M7 4.5v15l12.5-7.5L7 4.5Z" fill="currentColor"/>',
    "star": '<path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z" fill="currentColor"/>',
    "plus": '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    "menu": '<path d="M4 8h16M4 16h16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    "close": '<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    "truck": '<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="6.5" cy="17.5" r="1.8" fill="var(--sun-soft,#fff)" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="17.5" r="1.8" fill="var(--sun-soft,#fff)" stroke="currentColor" stroke-width="1.6"/>',
    "bolt": '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    "user": '<circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 20.5c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    "card": '<rect x="2.5" y="5.5" width="19" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 10h19M6.5 15h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    "hand": '<path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-6.5a1.5 1.5 0 0 1 3 0V11m0-5a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 7-6.5 7-2.6 0-4.2-1.3-5.6-3.4L3 13.5a1.5 1.5 0 0 1 2.5-1.6L8 15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    "spark": '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    "shield": '<path d="M12 2.8 4.5 5.6v6c0 4.6 3.2 8 7.5 9.6 4.3-1.6 7.5-5 7.5-9.6v-6L12 2.8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m8.6 12 2.4 2.4 4.4-4.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    "swap": '<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    "home": '<path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 20v-5h4v5" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    "book": '<path d="M4 4.5h6a2 2 0 0 1 2 2V20a1.5 1.5 0 0 0-1.5-1.5H4ZM20 4.5h-6a2 2 0 0 0-2 2V20a1.5 1.5 0 0 1 1.5-1.5H20Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    "wrench": '<path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-2.5-2.5 1-1-4-4-1 1L4 12l8-8 1.5 1.5a4 4 0 0 0 1 1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    "box": '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9ZM3.5 7.5 12 12l8.5-4.5M12 12v9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    "calendar": '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 10h17M8 3v4M16 3v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    "search": '<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m16 16 4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
}

def sprite():
    s = ['<svg width="0" height="0" style="position:absolute" aria-hidden="true">']
    for k, v in ICONS.items():
        s.append('<symbol id="i-%s" viewBox="0 0 24 24">%s</symbol>' % (k, v))
    s.append("</svg>")
    return "".join(s)

def icon(name):
    return '<svg aria-hidden="true"><use href="#i-%s"/></svg>' % name

SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["LocalBusiness", "MedicalBusiness"],
            "@id": BASE + "#empresa",
            "name": "Reabilita em Casa",
            "description": "Locação de equipamentos de reabilitação e mobilidade com orientação de fisioterapeuta, e fisioterapia domiciliar para a pessoa idosa.",
            "url": BASE,
            "logo": BASE + "assets/img/logo.png",
            "image": BASE + "assets/img/andrea-retrato.webp",
            "telephone": "+55 21 99744-3300",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Antônio Batista Bitencourt, 45, sala 203",
                "addressLocality": "Rio de Janeiro",
                "addressRegion": "RJ",
                "postalCode": "22790-250",
                "addressCountry": "BR",
            },
            "geo": {"@type": "GeoCoordinates", "latitude": -23.0097463, "longitude": -43.4454853},
            "openingHoursSpecification": [
                {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00"},
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00"},
            ],
            "paymentAccepted": "Dinheiro, cartão de débito, transferência bancária, Pix",
            "founder": {"@id": BASE + "andrea-rangel.html#andrea"},
            "sameAs": [LINKS["IG"], LINKS["YT"], LINKS["FB"]],
        },
        {
            "@type": "Person",
            "@id": BASE + "andrea-rangel.html#andrea",
            "name": "Andréa Rangel",
            "jobTitle": "Fisioterapeuta",
            "worksFor": {"@id": BASE + "#empresa"},
            "knowsAbout": ["Fisioterapia geriátrica", "Mobilidade da pessoa idosa", "Prevenção de quedas", "Treino de marcha", "Gerontologia"],
            "sameAs": [LINKS["IG"], LINKS["YT"]],
        },
    ],
}

def head(page, meta):
    canonical = BASE + ("" if page == "index.html" else page)
    extra = ""
    hero = {"index.html": ("andrea-hero-sm.webp 680w, assets/img/andrea-hero.webp 1131w", "(min-width: 900px) 55vw, 110vw"),
            "andrea-rangel.html": ("andrea-vestido-sm.webp 620w, assets/img/andrea-vestido.webp 1068w", "(min-width: 900px) 50vw, 110vw")}.get(page)
    if hero:
        extra += '<link rel="preload" as="image" imagesrcset="assets/img/%s" imagesizes="%s" fetchpriority="high">\n' % hero
    if page == "index.html":
        extra += '<script type="application/ld+json">%s</script>' % json.dumps(SCHEMA, ensure_ascii=False)
    robots = (chr(10) + '<meta name="robots" content="noindex">') if meta.get("noindex") else ""
    return f"""<!doctype html>
<html lang="pt-BR" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{meta['title']}</title>
<meta name="description" content="{meta['desc']}">
<link rel="canonical" href="{canonical}">{robots}
<meta name="theme-color" content="#FFF9EF">
<meta name="color-scheme" content="only light">
<meta name="supported-color-schemes" content="light only">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Reabilita em Casa">
<meta property="og:title" content="{meta['title']}">
<meta property="og:description" content="{meta['desc']}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{BASE}assets/img/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=block">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=block" rel="stylesheet">
<link rel="stylesheet" href="assets/css/site.css?v=1792126775">
<script>try{{if(sessionStorage.getItem("rc-pt")){{document.documentElement.classList.add("pt-enter");sessionStorage.removeItem("rc-pt")}}}}catch(e){{}}</script>
{extra}
</head>"""

def header(page):
    items = "".join(
        '<li><a href="%s"%s>%s</a></li>' % (href, ' aria-current="page"' if href == page else "", label)
        for href, label in NAV)
    ditems = "".join(
        '<li style="--k:%d"><a href="%s"%s><span class="dn">0%d</span><span class="dl">%s</span>%s</a></li>' % (i, href, ' aria-current="page"' if href == page else "", i + 1, label, icon('arrow'))
        for i, (href, label) in enumerate(NAV))
    return f"""<a class="skip" href="#conteudo">Pular para o conteúdo</a>
<header class="header">
  <div class="wrap header-in">
    <a class="brand" href="index.html" aria-label="Reabilita em Casa, página inicial"><img src="assets/img/logo.png" alt="Reabilita em Casa" width="720" height="242"></a>
    <nav class="nav" aria-label="Principal"><span class="nav-ind" aria-hidden="true"></span><ul>{items}</ul></nav>
    <a class="btn btn-sm header-cta" href="{LINKS['WA_GERAL']}" target="_blank" rel="noopener">{icon('wa')}Fale com a Andréa</a>
    <button class="burger" type="button" data-menu aria-controls="drawer" aria-expanded="false" aria-label="Abrir menu"><span></span><span></span></button>
  </div>
  <span class="progress" aria-hidden="true"></span>
</header>
<div class="drawer" id="drawer" aria-hidden="true">
  <nav class="drawer-nav" aria-label="Menu"><ul>{ditems}</ul></nav>
  <div class="drawer-foot">
    <a class="btn btn-sun" href="{LINKS['WA_GERAL']}" target="_blank" rel="noopener">{icon('wa')}Conversar pelo WhatsApp</a>
    <div class="drawer-meta">
      <span>(21) 99744-3300<br>Recreio dos Bandeirantes, RJ</span>
      <span class="drawer-social"><a href="{LINKS['IG']}" target="_blank" rel="noopener" aria-label="Instagram">{icon('ig')}</a><a href="{LINKS['YT']}" target="_blank" rel="noopener" aria-label="YouTube">{icon('yt')}</a></span>
    </div>
  </div>
</div>"""

def footer():
    return f"""<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="assets/img/logo-branco.png" alt="Reabilita em Casa" width="720" height="242" loading="lazy">
        <p>Equipamentos de mobilidade e fisioterapia domiciliar, com o olhar clínico de quem há 25 anos cuida da independência da pessoa idosa.</p>
        <div class="socials">
          <a href="{LINKS['IG']}" target="_blank" rel="noopener" aria-label="Instagram">{icon('ig')}</a>
          <a href="{LINKS['YT']}" target="_blank" rel="noopener" aria-label="YouTube">{icon('yt')}</a>
          <a href="{LINKS['FB']}" target="_blank" rel="noopener" aria-label="Facebook">{icon('fb')}</a>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h2 class="f-h">Navegue</h2>
          <ul>
            <li><a href="equipamentos.html">Equipamentos</a></li>
            <li><a href="fisioterapia.html">Fisioterapia</a></li>
            <li><a href="conteudos.html">Conteúdos</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="andrea-rangel.html">Andréa Rangel</a></li>
            <li><a href="links.html">Links</a></li>
          </ul>
        </div>
        <div>
          <h2 class="f-h">Atendimento</h2>
          <ul>
            <li><a href="{LINKS['WA_GERAL']}" target="_blank" rel="noopener">(21) 99744-3300</a></li>
            <li>Ter. a sex., 9h às 18h</li>
            <li>Sáb., 9h às 13h</li>
          </ul>
        </div>
        <div>
          <h2 class="f-h">Endereço</h2>
          <ul>
            <li><a href="{LINKS['MAPS']}" target="_blank" rel="noopener">Rua Antônio Batista Bitencourt, 45, sala 203<br>Recreio dos Bandeirantes<br>Rio de Janeiro, RJ</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> Reabilita em Casa · A2 Comércio e Locação de Equipamentos Ltda · CNPJ 39.962.083/0001-35</span>
      <span>Conteúdo educativo. Não substitui a avaliação de um profissional de saúde.</span>
    </div>
  </div>
</footer>
<a class="wa-float is-hidden" href="{LINKS['WA_GERAL']}" target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp">{icon('wa')}</a>"""

CURTAIN = '<div class="pt" aria-hidden="true"><i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i><i style="--k:3"></i><i style="--k:4"></i><img src="assets/img/pomba.png" alt="" width="145" height="133"></div>'

def render(page, meta, body):
    for k, v in LINKS.items():
        body = body.replace("{{%s}}" % k, v)
    import re
    body = re.sub(r"\{\{i:([a-z]+)\}\}", lambda m: icon(m.group(1)), body)
    body = re.sub(r"<img(?![^>]*\bdecoding=)", '<img decoding="async"', body)
    scripts = '<script src="assets/js/site.js?v=1792126775" defer></script>'
    if page in ("equipamentos.html", "index.html"):
        scripts = '<script src="assets/js/produtos.js?v=1792126775" defer></script>\n' + scripts
    if meta.get("bare"):
        return f"""{head(page, meta)}
<body class="links-page">
{sprite()}
{body}
{CURTAIN}
{scripts}
</body>
</html>
"""
    return f"""{head(page, meta)}
<body>
{sprite()}
{header(page)}
<main id="conteudo">
{body}
</main>
{footer()}
{CURTAIN}
{scripts}
</body>
</html>
"""

if __name__ == "__main__":
    for page, meta in PAGES.items():
        src = SRC / page
        if not src.exists():
            print("faltando:", src.name); continue
        out = render(page, meta, src.read_text(encoding="utf-8"))
        (ROOT / page).write_text(out, encoding="utf-8")
        print("ok", page, len(out) // 1024, "KB")
