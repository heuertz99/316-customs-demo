/* 316 Customs — shared demo site engine (concept stage). Sample data for review only. */
(function () {
  const M = (k) => 'media/' + k;
  const money = (n) => '$' + (Math.round(n * 100) / 100).toFixed(n % 1 ? 2 : 0);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ICON = {
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>', check: '<path d="M5 12l4 4 10-10"/>', cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>', minus: '<path d="M5 12h14"/>', plus: '<path d="M12 5v14M5 12h14"/>',
    siren: '<path d="M7 18v-6a5 5 0 0 1 10 0v6"/><path d="M5 18h14v3H5z"/><path d="M12 3v2M4.5 6.5l1.4 1.4M19.5 6.5l-1.4 1.4"/>', console: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h3M13 12h3M8 16h3M13 16h3"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>', cable: '<path d="M4 20c4 0 4-8 8-8s4 8 8 8"/><path d="M8 4v4M16 4v4M6 8h4M14 8h4"/>',
    bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/>', brush: '<path d="M14 4l6 6-8 8H6v-6z"/><path d="M10 8l6 6"/>', radio: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5M7 14h4M15 14h2"/>', cam: '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>', truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>', pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>', lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>', search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>', cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>', battery: '<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4"/><path d="M7 10v4M11 10v4"/>'
  };
  const ic = (n, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${n === 'star' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

  /* ---------------- catalog (sample data; real prices marked in comments) ---------------- */
  const P = [
    // Boomboxes — real models & prices from the Oct 2026 flyer
    { id: 'rockville', div: 'boomboxes', cat: 'Boomboxes', name: 'Rockville 220W Beat-Sync Boombox', price: 270, img: 'bb_redblue.jpg', badge: 'Best seller', rating: 4.9, reviews: 38, color: true,
      blurb: '6.5" white or black grille marine speakers with red/blue beat-sync backlights.', specs: [['Speakers', 'Rockville 6.5" marine, 220W + 220W'], ['Lighting', 'Red/blue beat-sync backlights'], ['Power', 'DeWalt or Milwaukee battery adapter'], ['Ports', 'USB-A + USB-C'], ['Protection', 'Low-voltage cut-off'], ['Build time', '7–10 business days']] },
    { id: 'pyle100', div: 'boomboxes', cat: 'Boomboxes', name: 'Pyle 100W Marine Boombox', price: 220, img: 'bb_orange.jpg', rating: 4.8, reviews: 21, color: true,
      blurb: '6.5" white or black grille marine speakers. The do-everything weekend box.', specs: [['Speakers', 'Pyle 6.5" marine, 100W + 100W'], ['Power', 'DeWalt or Milwaukee battery adapter'], ['Ports', 'USB-A + USB-C'], ['Protection', 'Low-voltage cut-off'], ['Build time', '7–10 business days']] },
    { id: 'pyle220', div: 'boomboxes', cat: 'Boomboxes', name: 'Pyle 220W Marine Boombox', price: 255, img: 'bb_tan.jpg', badge: 'New', rating: 5.0, reviews: 14, color: true,
      blurb: '6.5" marine speakers with blue backlight and more headroom.', specs: [['Speakers', 'Pyle 6.5" marine, 220W + 220W'], ['Lighting', 'Blue backlight'], ['Power', 'DeWalt or Milwaukee battery adapter'], ['Ports', 'USB-A + USB-C'], ['Build time', '7–10 business days']] },
    { id: 'boss', div: 'boomboxes', cat: 'Boomboxes', name: 'Boss 220W Blackout Boombox', price: 250, img: 'bb_black.jpg', rating: 4.9, reviews: 17, color: true,
      blurb: '6.5" black grille non-marine speakers in an all-black build.', specs: [['Speakers', 'Boss 6.5" non-marine, 220W + 220W'], ['Power', 'DeWalt or Milwaukee battery adapter'], ['Ports', 'USB-A + USB-C'], ['Protection', 'Low-voltage cut-off'], ['Build time', '7–10 business days']] },
    // Apache case parts — real Etsy listings & prices (photos are stand-ins)
    { id: 'handle', div: 'boomboxes', cat: 'Apache Case Parts', name: 'Custom Handle for Apache 3800–5800', price: 25, img: 'bb_redblue.jpg', rating: 4.9, reviews: 12, blurb: '3D-printed replacement handle in your choice of colors.', specs: [['Fits', 'Apache 3800, 4800, 5800'], ['Material', 'PETG'], ['Colors', 'Red/white/blue, blue, orange, black']] },
    { id: 'latches', div: 'boomboxes', cat: 'Apache Case Parts', name: 'Custom Latch Set for Apache 3800–5800', price: 14, img: 'bb_black.jpg', rating: 4.8, reviews: 9, blurb: 'One set of custom printed latches.', specs: [['Fits', 'Apache 3800–5800'], ['Qty', '1 set']] },
    { id: 'kit', div: 'boomboxes', cat: 'Apache Case Parts', name: 'Case Accessory Kit — Handle, 2 Latches, 2 Lock Covers', price: 40, img: 'bb_orange.jpg', rating: 5.0, reviews: 6, blurb: 'Everything to dress up a DIY speaker box.', specs: [['Includes', 'Handle, 2 latches, 2 lock covers'], ['Fits', 'Apache 3800–5800']] },
    { id: 'kitphone', div: 'boomboxes', cat: 'Apache Case Parts', name: 'Case Accessory Kit + Phone Holder', price: 50, img: 'bb_tan.jpg', rating: 4.9, reviews: 4, blurb: 'The full kit plus a clip-on phone holder.', specs: [['Includes', 'Handle, 2 latches, 2 lock covers, phone holder'], ['Fits', 'Apache 3800–5800']] },
    // 3D printing — real Etsy items + sample items
    { id: 'canholder', div: 'printing', cat: '3D Prints', name: 'Visor Clip Chew Can Holder', price: 14, img: 'canholders.jpg', badge: 'Best seller', rating: 4.9, reviews: 52, blurb: 'Keeps your can from rolling around the cab. Thin-line and flag colors.', specs: [['Mount', 'Visor clip'], ['Colors', 'Thin blue line, thin red line, flag, black']] },
    { id: 'pouch', div: 'printing', cat: 'First Responder', name: 'EMS / FF Glove Pouch with Carabiner Hook', price: 8, img: 'pouches.jpg', rating: 5.0, reviews: 33, blurb: 'Heavy-duty nitrile glove holder for your bag or belt.', specs: [['Holds', 'Standard nitrile gloves'], ['Attach', 'Carabiner hook']] },
    { id: 'wedge', div: 'printing', cat: 'First Responder', name: 'Fire/Rescue Glove Pouch & Door Wedge', price: 10, img: 'pouches.jpg', rating: 4.9, reviews: 15, blurb: 'Glove pouch with built-in door wedge and carabiner loop.', specs: [['Attach', 'Carabiner loop'], ['Bonus', 'Door wedge']] },
    { id: 'emt', div: 'printing', cat: 'First Responder', name: 'EMT Pop-Tab Opener — Star of Life Keychain', price: 7, img: 'pouches.jpg', rating: 4.8, reviews: 11, blurb: 'Blue Star of Life keychain that opens cans.', specs: [['Style', 'Blue Star of Life']] },
    { id: 'nametag', div: 'printing', cat: '3D Prints', name: 'Personalized Name Keychain', price: 12, img: 'nametag.jpg', badge: 'Made to order', rating: 4.8, reviews: 19, personalize: true, blurb: 'Your name on a tractor, excavator, truck or custom shape. (Sample product)', specs: [['Shapes', 'Excavator, tractor, truck, custom'], ['Lead time', '3–5 business days']] },
    { id: 'tray', div: 'printing', cat: '3D Prints', name: 'Custom Drawer Organizer', price: 35, from: true, img: 'tray.jpg', rating: 4.9, reviews: 8, blurb: 'Printed to fit your drawer, toolbox or console. (Sample product)', specs: [['Sizing', 'Made to your measurements'], ['Material', 'PETG']] },
    { id: 'tictac', div: 'printing', cat: '3D Prints', name: 'Tic-Tac-Toe Board Set', price: 16, img: 'tictac.jpg', rating: 4.7, reviews: 7, blurb: 'Board, X’s and O’s — custom text available. (Sample product)', specs: [['Includes', 'Board + 10 pieces']] },
    { id: 'minis', div: 'printing', cat: '3D Prints', name: 'Mini Prop Set — Signs, Cones & Tools', price: 18, img: 'minis.jpg', rating: 4.8, reviews: 5, blurb: 'Tiny stop sign, cones and tools for displays and holiday fun. (Sample product)', specs: [['Pieces', '12']] },
    // Supply — sample items & prices
    { id: 'wire500', div: 'supply', cat: 'Wire', name: 'Primary Wire 16 AWG · 500 ft Spool', price: 64.99, img: 'spools.jpg', rating: 4.9, reviews: 11, blurb: 'Automotive-grade GPT primary wire. (Sample product)', specs: [['Gauge', '16 AWG'], ['Length', '500 ft'], ['Colors', 'Red, yellow, black, white, blue, green']] },
    { id: 'wire100', div: 'supply', cat: 'Wire', name: 'Primary Wire 14 AWG · 100 ft Spool', price: 19.99, img: 'spools.jpg', rating: 4.8, reviews: 9, blurb: 'Automotive-grade GPT primary wire. (Sample product)', specs: [['Gauge', '14 AWG'], ['Length', '100 ft']] },
    { id: 'connkit', div: 'supply', cat: 'Connectors', name: 'Heat-Shrink Connector Kit · 240 pc', price: 34.99, img: 'wires.jpg', badge: 'Installer pick', rating: 4.9, reviews: 22, blurb: 'Butt, ring, spade and quick-disconnect assortment. (Sample product)', specs: [['Pieces', '240'], ['Gauges', '22–10 AWG']] },
    { id: 'butt', div: 'supply', cat: 'Connectors', name: 'Heat-Shrink Butt Connectors · 100 pk', price: 14.99, img: 'wires.jpg', rating: 4.8, reviews: 14, blurb: 'Waterproof solder-seal butt connectors. (Sample product)', specs: [['Pieces', '100'], ['Gauges', '22–10 AWG']] },
    { id: 'relaypanel', div: 'supply', cat: 'Relays & Panels', name: 'Prewired Relay & Fuse Panel · 6 Circuit', price: 89, img: 'fuse.jpg', rating: 4.9, reviews: 6, blurb: '12V panel with labeled circuits for accessory installs. (Sample product)', specs: [['Circuits', '6'], ['Voltage', '12V DC']] },
    { id: 'ledbar', div: 'supply', cat: 'Lighting', name: 'LED Work Light Bar · 22 in', price: 79.99, img: 'gator.jpg', rating: 4.7, reviews: 10, blurb: 'White flood/spot combo for trucks and UTVs. (Sample product)', specs: [['Length', '22 in'], ['Color', 'White']] },
  ];
  const byId = Object.fromEntries(P.map((p) => [p.id, p]));
  const GALLERY = [
    ['sheriff.jpg', 'upfitting', 'Patrol Tahoe', 'Lighting · siren · console · partition'], ['ram.jpg', 'upfitting', 'Ram crew cab', 'Lightbar & warning lights'],
    ['havis.jpg', 'upfitting', 'Console & dock', 'Havis console, control head, radio'], ['fire.jpg', 'upfitting', 'Engine refit', 'Scene lighting & wiring'],
    ['yellow.jpg', 'upfitting', 'Ranch truck', 'Grille guard & lighting'], ['drawers.jpg', 'upfitting', 'Cargo storage', 'Locking drawer system'], ['fuse.jpg', 'upfitting', 'Power distribution', 'Relay & fuse install'],
    ['bb_redblue.jpg', 'boomboxes', 'Rockville beat-sync', 'Black case, RWB handle'], ['bb_orange.jpg', 'boomboxes', 'Pyle 100W', 'Orange case, blue handle'], ['bb_tan.jpg', 'boomboxes', 'Pyle 220W', 'Tan case'], ['lineup_night.jpg', 'boomboxes', 'Lineup', 'This month’s builds'],
    ['minis.jpg', 'printing', 'Mini props', 'Signs, cones & tools'], ['pouches.jpg', 'printing', 'Glove pouches', 'Thin-line colors'], ['nametag.jpg', 'printing', 'Name keychain', 'Personalized'], ['tray.jpg', 'printing', 'Drawer organizer', 'Custom fit'],
    ['spools.jpg', 'supply', 'Primary wire', 'Shop stock'], ['wires.jpg', 'supply', 'Connector kits', 'Heat-shrink assortment'], ['gator.jpg', 'supply', 'LED light bar install', 'UTV'],
  ];

  /* ---------------- cart ---------------- */
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('316demo-cart') || '[]'); } catch (e) { cart = []; }
  const saveCart = () => { try { localStorage.setItem('316demo-cart', JSON.stringify(cart)); } catch (e) {} updateBadges(); };
  const cartCount = () => cart.reduce((a, i) => a + i.qty, 0);
  const cartTotal = () => cart.reduce((a, i) => a + i.qty * i.price, 0);
  function addToCart(item) {
    const found = cart.find((c) => c.key === item.key);
    if (found) found.qty += item.qty || 1; else cart.push({ qty: 1, ...item });
    saveCart(); toast(`${esc(item.name)} added to cart`, '#cart', 'View cart');
  }
  function updateBadges() {
    const n = cartCount();
    document.querySelectorAll('[data-cart-count]').forEach((b) => { b.textContent = n; b.style.display = n ? 'flex' : 'none'; });
    document.querySelectorAll('[data-cart-total]').forEach((b) => { b.textContent = n ? money(cartTotal()) : ''; });
  }
  function toast(msg, href, label) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = `<span>${ic('check', 18)} ${msg}</span>${href ? `<a href="${href}">${label}</a>` : ''}`;
    t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 3200);
  }

  /* ---------------- shared pieces ---------------- */
  const stars = (n = 5, s = 15) => `<span class="pg-stars">${ic('star', s).repeat(n)}</span>`;
  const priceTxt = (p) => (p.from ? 'From ' : '') + money(p.price);
  const card = (p) => `<a class="pg-card" href="#product-${p.id}"><span class="pg-card-img"><img src="${M(p.img)}" alt="${esc(p.name)}" loading="lazy">${p.badge ? `<span class="pg-flag">${p.badge}</span>` : ''}</span><span class="pg-card-cat">${p.cat}</span><span class="pg-card-name">${esc(p.name)}</span><span class="pg-card-row"><b>${priceTxt(p)}</b><span class="pg-rate">${ic('star', 13)} ${p.rating} (${p.reviews})</span></span></a>`;
  const hero = (k, t, sub, img, acts = '', video = '') => `<section class="pg-hero">${video ? `<video src="${M(video)}" autoplay muted loop playsinline poster="${M(img)}"></video>` : `<img src="${M(img)}" alt="">`}<div class="pg-wrap"><nav class="pg-crumbs"><a href="#home">Home</a><span>/</span><span>${k}</span></nav><h1 class="pg-h1">${t}</h1><p class="pg-lead">${sub}</p>${acts ? `<div class="pg-acts">${acts}</div>` : ''}</div></section>`;
  const head = (k, t, p = '', extra = '') => `<div class="pg-head"><div>${k ? `<span class="pg-kicker">${k}</span>` : ''}<h2 class="pg-h2">${t}</h2></div>${p ? `<p>${p}</p>` : ''}${extra}</div>`;
  const btn = (txt, href, kind = 'pri') => `<a class="pg-btn pg-btn-${kind}" href="${href}">${txt}</a>`;
  const field = (id, label, input) => `<div class="pg-f"><label for="${id}">${label}</label>${input}</div>`;
  const demoNote = (t) => `<p class="pg-note">${ic('shield', 16)} ${t}</p>`;

  /* ---------------- builder ---------------- */
  const B = { color: 'black', model: 3, handle: 1, logo: false, qty: 1 };
  const COLORS = [['black', 'Black'], ['tan', 'Tan'], ['orange', 'Orange']];
  const MODELS = [['Pyle 100', '100W + 100W · 6.5" marine', 220], ['Pyle 220', '220W + 220W · blue backlight', 255], ['Boss 220', '220W + 220W · black grille', 250], ['Rockville 220', '220W + 220W · beat-sync RGB', 270]];
  const HANDLES = [['Matching', 'match', 0], ['Red / White / Blue', 'rwb', 15], ['Blue', 'blue', 10], ['Orange', 'orange', 10]];
  const bImg = () => (B.color === 'black' ? (B.model === 3 ? 'bb_redblue.jpg' : 'bb_black.jpg') : B.color === 'tan' ? 'bb_tan.jpg' : 'bb_orange.jpg');
  const bTotal = () => MODELS[B.model][2] + HANDLES[B.handle][2] + (B.logo ? 20 : 0);
  function builderHTML(compact) {
    return `<div class="bld ${compact ? 'bld-compact' : ''}">
      <div class="bld-stage"><span class="bld-chip"><i></i>Built to order in Blunt, SD · ships in 7–10 days</span><img id="bld-img" src="${M(bImg())}" alt="Boombox preview">
        <div class="bld-thumbs">${['bb_black.jpg', 'bb_redblue.jpg', 'bb_tan.jpg', 'bb_orange.jpg'].map((s) => `<img src="${M(s)}" class="${s === bImg() ? 'on' : ''}" alt="">`).join('')}</div>
        <p class="bld-disc">Preview photos show real past builds. Your build is assembled to the options you choose.</p></div>
      <div class="bld-card" aria-label="Boombox builder">
        <span class="bld-k">316 Boomboxes · Builder</span><h1 class="bld-h">Build your boombox.</h1><p class="bld-sub">Rugged case. Marine-grade sound. Tool-battery powered.</p>
        <div class="bld-step"><b>1 · Case color</b><span>${COLORS.find((c) => c[0] === B.color)[1]}</span></div>
        <div class="bld-sw">${COLORS.map(([id, n]) => `<button type="button" data-b="color" data-v="${id}" class="${B.color === id ? 'on' : ''}"><i class="d-${id}"></i>${n}</button>`).join('')}</div>
        <div class="bld-step"><b>2 · Sound package</b><span>${MODELS[B.model][0]}</span></div>
        <div class="bld-models">${MODELS.map(([n, s, p], i) => `<button type="button" data-b="model" data-v="${i}" class="${B.model === i ? 'on' : ''}"><b>${n}</b><small>${s}</small><em>${money(p)}</em></button>`).join('')}</div>
        <div class="bld-step"><b>3 · Handle &amp; extras</b><span>${HANDLES[B.handle][0]}</span></div>
        <div class="bld-handles">${HANDLES.map(([n, k, a], i) => `<button type="button" data-b="handle" data-v="${i}" class="${B.handle === i ? 'on' : ''}"><i class="h-${k}"></i>${n}${a ? ` <small>+$${a}</small>` : ''}</button>`).join('')}<button type="button" data-b="logo" class="${B.logo ? 'on' : ''}">${B.logo ? ic('check', 16) + ' Custom logo decal' : 'Add custom logo decal <small>+$20</small>'}</button></div>
        <div class="bld-total"><div><span class="bld-p">${money(bTotal())}</span><small>or ${money(Math.round(bTotal() * 0.25))} deposit today · balance when it ships</small></div><button type="button" class="pg-btn pg-btn-pri" data-act="add-build">${ic('cart', 18)} Add to cart</button></div>
        <div class="bld-assure"><span>${ic('check', 15)}USB-A + USB-C</span><span>${ic('check', 15)}Low-voltage cut-off</span><span>${ic('check', 15)}DeWalt or Milwaukee</span></div>
      </div></div>`;
  }
  function rerenderBuilders() { document.querySelectorAll('[data-builder]').forEach((el) => { el.innerHTML = builderHTML(el.dataset.builder === 'compact'); }); }

  /* ---------------- pages ---------------- */
  const PAGES = {
    home() { const t = document.getElementById('tpl-home'); return t ? t.innerHTML : ''; },

    upfitting() {
      const svcs = [['siren', 'Emergency lighting', 'Lightbars, perimeter, grille, hideaway and interior lighting.'], ['bolt', 'Sirens & controllers', 'Sirens, speakers and switch/control systems.'], ['console', 'Consoles & mounts', 'Consoles, docks, laptop and radio mounts.'], ['grid', 'Partitions & storage', 'Prisoner partitions, cargo drawers and gun locks.'], ['cable', 'Wiring & harnesses', 'Clean, labeled custom harnesses and power distribution.'], ['radio', 'Radios & antennas', 'Mobile radio and antenna installs.'], ['cam', 'Cameras', 'In-car and body-cam docking hardware.'], ['brush', 'Graphics install', 'Installation of agency-supplied graphics.']];
      const veh = ['Chevy Tahoe PPV', 'Ford PI Utility', 'Ford F-150 PIU', 'Dodge Durango Pursuit', 'Ram 1500 / 2500', 'Chevy Silverado', 'Fire apparatus', 'UTVs & specialty'];
      return hero('Upfitting', 'Emergency vehicle upfitting', 'Complete patrol, fire, EMS and fleet builds — specified, wired and installed in Blunt, South Dakota.', 'sheriff.jpg', btn('Request a fleet quote', '#quote') + btn('View recent builds', '#gallery', 'sec')) +
        `<section class="pg-sec"><div class="pg-wrap">${head('Services', 'What we install', 'From one patrol unit to a full fleet rollout.')}
        <div class="pg-svc">${svcs.map(([i, t, d]) => `<div class="pg-svc-i"><span>${ic(i, 26)}</span><b>${t}</b><p>${d}</p></div>`).join('')}</div></div></section>
        <section class="pg-sec pg-alt"><div class="pg-wrap pg-2col"><div class="pg-mosaic"><span><img src="${M('havis.jpg')}" alt="Console"></span><span><img src="${M('fuse.jpg')}" alt="Wiring"></span><span><img src="${M('drawers.jpg')}" alt="Cargo drawers"></span></div>
        <div>${head('Built right', 'Clean installs that are easy to service.', '')}<ul class="pg-list">${['Every circuit labeled and documented', 'Factory-style routing — no zip-tie spaghetti', 'Bench-tested before and after install', 'Wiring diagram delivered with the vehicle', 'Warranty on workmanship (sample term: 3 years)'].map((x) => `<li>${ic('check', 18)}${x}</li>`).join('')}</ul>
        <div class="pg-chips">${veh.map((v) => `<span>${v}</span>`).join('')}</div></div></div></section>
        <section class="pg-sec"><div class="pg-wrap">${head('For agencies', 'Paperwork made easy', '')}
        <div class="pg-cols3"><div class="pg-box">${ic('doc', 26)}<b>Purchase orders</b><p>Government POs accepted. W-9 on request. Net-30 terms for agencies.</p></div><div class="pg-box">${ic('clock', 26)}<b>Scheduling</b><p>Book install dates around your shift schedule. Fleet rollouts staged to keep units on the road.</p></div><div class="pg-box">${ic('truck', 26)}<b>Drop-off or pickup</b><p>Bring units to our Blunt shop, or ask about transport for multi-vehicle orders.</p></div></div>
        <div class="pg-cta"><div><h3>Have a vehicle spec sheet?</h3><p>Send it over — we’ll quote the full build within one business day.</p></div>${btn('Start a quote', '#quote')}</div></div></section>`;
    },

    boomboxes() {
      const bb = P.filter((p) => p.cat === 'Boomboxes'), parts = P.filter((p) => p.cat === 'Apache Case Parts');
      return hero('Boomboxes', 'Big sound. Rugged case. Built to go.', 'Hand-built Bluetooth boomboxes in hard cases, with marine-grade speakers and tool-battery power.', 'poster_rgb.jpg', btn('Build your own', '#builder') + btn('Shop the lineup', '#lineup', 'sec'), 'hero_rgb.mp4') +
        `<section class="pg-sec" id="lineup"><div class="pg-wrap">${head('The lineup', 'Four builds. Three case colors.', 'Every build includes USB-A + USB-C, an illuminated power switch, low-voltage cut-off, a Bluetooth amplifier and a DeWalt or Milwaukee battery adapter.')}<div class="pg-grid4">${bb.map(card).join('')}</div></div></section>
        <section class="pg-sec pg-alt"><div class="pg-wrap"><div class="pg-cta pg-cta-big"><div><span class="pg-kicker">Make it yours</span><h3>Pick your case, speakers and handle.</h3><p>Build it in 30 seconds and see the price as you go. Pay in full or a 25% deposit.</p></div>${btn('Open the builder', '#builder')}</div></div></section>
        <section class="pg-sec"><div class="pg-wrap">${head('DIY parts', 'Apache case parts', 'Building your own box? Dress up your Apache 3800–5800 case. (Photos are stand-ins.)')}<div class="pg-grid4">${parts.map(card).join('')}</div>
        <p class="pg-fine">Not affiliated with or endorsed by Apache or Harbor Freight Tools.</p></div></section>`;
    },

    builder() { return `<section class="pg-sec pg-builder-page"><div class="pg-wrap" data-builder="full">${builderHTML(false)}</div></section>
      <section class="pg-sec"><div class="pg-wrap pg-cols3">${[['battery', 'Tool-battery power', 'Runs on the DeWalt or Milwaukee batteries you already own.'], ['shield', 'Built to take a beating', 'Hard case, sealed lid, every connection soldered and heat-shrunk.'], ['truck', 'Ships or local pickup', 'Ships nationwide, or pick up at the shop in Blunt, SD.']].map(([i, t, d]) => `<div class="pg-box">${ic(i, 26)}<b>${t}</b><p>${d}</p></div>`).join('')}</div></section>`; },

    printing() {
      const items = P.filter((p) => p.div === 'printing');
      return hero('3D Printing', 'Your idea, printed.', 'Personalized gifts, first-responder gear, replacement parts and bulk agency orders — quoted fast and printed in-house.', 'pposter_printer.jpg', btn('Start a custom order', '#print-custom') + btn('Shop in-stock prints', '#print-shop', 'sec'), 'hero_printer.mp4') +
        `<section class="pg-sec" id="ready"><div class="pg-wrap">${head('Ready to ship', 'Shop printed products', '')}<div class="pg-grid4">${items.map(card).join('')}</div></div></section>
        <section class="pg-sec pg-alt" id="custom"><div class="pg-wrap pg-2col"><div>${head('Custom orders', 'Send us anything.', 'Upload a photo, sketch, logo or design file. We’ll reply with a price and a proof within one business day.')}
        <ol class="pg-steps">${[['Upload', 'Photo, logo, STL, 3MF or STEP file'], ['Quote & proof', 'Price, color options and a preview'], ['Approve & pay', 'Pay in full or a deposit for bulk orders'], ['Printed & shipped', 'Most orders ship in 3–5 business days']].map(([t, d], i) => `<li><span>${i + 1}</span><div><b>${t}</b><p>${d}</p></div></li>`).join('')}</ol></div>
        <form class="pg-form" data-form="print">${uploadBox()}${field('p1', 'Describe your project', '<textarea id="p1" placeholder="Example: 40 glove pouches in our department colors with our logo on the front"></textarea>')}
        <div class="pg-fields2">${field('p2', 'Quantity', '<input id="p2" type="number" min="1" value="1">')}${field('p3', 'Material', '<select id="p3"><option>Not sure — recommend one</option><option>PLA</option><option>PETG</option><option>TPU (flexible)</option></select>')}${field('p4', 'Name', '<input id="p4" required>')}${field('p5', 'Email', '<input id="p5" type="email" required>')}</div>
        <button class="pg-btn pg-btn-pri" type="submit">Request quote ${ic('arrow', 18)}</button></form></div></section>`;
    },

    'print-shop'() {
      return hero('3D Printing', 'In-stock prints', 'Ready-made prints on the shelf now — most orders ship in 1–2 business days.', 'minis.jpg', btn('Need something custom?', '#print-custom') + btn('3D printing overview', '#printing', 'sec')) +
        `<section class="pg-sec"><div class="pg-wrap"><div class="pg-shopbar"><div class="pg-filter">${['All', '3D Prints', 'First Responder'].map((c) => `<button type="button" data-pfilter="${c}" class="${PF.cat === c ? 'on' : ''}">${c}</button>`).join('')}</div></div>
        <div id="pr-grid">${printGrid()}</div>
        <div class="pg-cta"><div><h3>Don’t see it?</h3><p>Send a photo, sketch, logo or STL file and we’ll quote it within one business day.</p></div>${btn('Start a custom order', '#print-custom')}</div></div></section>`;
    },

    'print-custom'() {
      return hero('3D Printing', 'Custom made, start to finish.', 'Personalized gifts, agency gear, replacement parts and bulk runs. Send us your idea and we’ll send back a price and a proof.', 'pposter_printer.jpg', btn('Shop in-stock prints', '#print-shop', 'sec'), 'hero_printer.mp4') +
        `<section class="pg-sec"><div class="pg-wrap pg-2col"><div>${head('Custom orders', 'Send us anything.', 'Upload a photo, sketch, logo or design file. We’ll reply with a price and a proof within one business day.')}
        <ol class="pg-steps">${[['Upload', 'Photo, logo, STL, 3MF or STEP file'], ['Quote & proof', 'Price, color options and a preview'], ['Approve & pay', 'Pay in full or a deposit for bulk orders'], ['Printed & shipped', 'Most orders ship in 3–5 business days']].map(([t, d], i) => `<li><span>${i + 1}</span><div><b>${t}</b><p>${d}</p></div></li>`).join('')}</ol></div>
        <form class="pg-form" data-form="print">${uploadBox()}${field('p1', 'Describe your project', '<textarea id="p1" placeholder="Example: 40 glove pouches in our department colors with our logo on the front"></textarea>')}
        <div class="pg-fields2">${field('p2', 'Quantity', '<input id="p2" type="number" min="1" value="1">')}${field('p3', 'Material', '<select id="p3"><option>Not sure — recommend one</option><option>PLA</option><option>PETG</option><option>TPU (flexible)</option></select>')}${field('p4', 'Name', '<input id="p4" required>')}${field('p5', 'Email', '<input id="p5" type="email" required>')}</div>
        <button class="pg-btn pg-btn-pri" type="submit">Request quote ${ic('arrow', 18)}</button></form></div></section>`;
    },

    supply() {
      return hero('Supply', 'The parts we install with.', 'Wire, connectors, relays and lighting — the same stock we use on every build, shipped to your door.', 'spools.jpg') +
        `<section class="pg-sec"><div class="pg-wrap"><div class="pg-shopbar"><label class="pg-search">${ic('search', 18)}<input id="sup-q" placeholder="Search supply" value="${esc(S.q)}" aria-label="Search supply"></label>
        <div class="pg-filter">${['All', 'Wire', 'Connectors', 'Relays & Panels', 'Lighting'].map((c) => `<button type="button" data-filter="${c}" class="${S.cat === c ? 'on' : ''}">${c}</button>`).join('')}</div>
        <select id="sup-sort" aria-label="Sort"><option value="pop">Most popular</option><option value="lo" ${S.sort === 'lo' ? 'selected' : ''}>Price: low to high</option><option value="hi" ${S.sort === 'hi' ? 'selected' : ''}>Price: high to low</option></select></div>
        <div id="sup-grid">${supplyGrid()}</div>
        <p class="pg-fine">Emergency warning lights are sold for authorized emergency vehicle use only. Check your state’s laws before purchase.</p></div></section>`;
    },

    product(id) {
      const p = byId[id]; if (!p) return PAGES.home();
      const rel = P.filter((x) => x.div === p.div && x.id !== p.id).slice(0, 4);
      const back = p.div === 'boomboxes' ? '#boomboxes' : p.div === 'printing' ? '#print-shop' : '#supply';
      const divName = { boomboxes: 'Boomboxes', printing: '3D Printing', supply: 'Supply' }[p.div];
      return `<section class="pg-sec pg-product"><div class="pg-wrap"><nav class="pg-crumbs pg-crumbs-dark"><a href="#home">Home</a><span>/</span><a href="${back}">${divName}</a><span>/</span><span>${esc(p.name)}</span></nav>
        <div class="pg-pd"><div class="pg-pd-img"><img id="pd-img" src="${M(p.img)}" alt="${esc(p.name)}"></div>
        <div class="pg-pd-info"><span class="pg-kicker">${p.cat}</span><h1 class="pg-pd-h">${esc(p.name)}</h1><div class="pg-pd-rate">${stars(5, 16)} ${p.rating} · ${p.reviews} reviews</div><div class="pg-pd-price">${priceTxt(p)}</div><p>${p.blurb}</p>
        ${p.color ? `<div class="pg-opt"><b>Case color</b><div class="bld-sw">${[['black', 'Black', 'bb_black.jpg'], ['tan', 'Tan', 'bb_tan.jpg'], ['orange', 'Orange', 'bb_orange.jpg']].map(([id2, n, im], i) => `<button type="button" data-pdcolor="${im}" class="${i === 0 ? 'on' : ''}"><i class="d-${id2}"></i>${n}</button>`).join('')}</div></div>` : ''}
        ${p.personalize ? field('pd-text', 'Name or text (up to 12 letters)', '<input id="pd-text" maxlength="12" placeholder="REN">') : ''}
        <div class="pg-buy"><div class="pg-qty"><button type="button" data-qty="-1" aria-label="Less">${ic('minus', 16)}</button><span id="pd-qty">1</span><button type="button" data-qty="1" aria-label="More">${ic('plus', 16)}</button></div><button type="button" class="pg-btn pg-btn-pri" data-act="add-product" data-id="${p.id}">${ic('cart', 18)} Add to cart</button></div>
        ${p.div === 'boomboxes' && p.cat === 'Boomboxes' ? `<a class="pg-link" href="#builder">Want a different handle or a logo? Customize it in the builder ${ic('arrow', 16)}</a>` : ''}
        <ul class="pg-perks"><li>${ic('truck', 18)}Ships nationwide · free local pickup in Blunt, SD</li><li>${ic('lock', 18)}Secure checkout — cards, Apple Pay, Google Pay, PayPal</li></ul>
        <table class="pg-specs">${p.specs.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</table></div></div></div></section>
        <section class="pg-sec pg-alt"><div class="pg-wrap">${head('', 'You might also like')}<div class="pg-grid4">${rel.map(card).join('')}</div></div></section>`;
    },

    cart() {
      if (!cart.length) return `<section class="pg-sec pg-empty"><div class="pg-wrap"><h1 class="pg-h2">Your cart is empty.</h1><p>Start with a boombox, a custom print or some wire.</p><div class="pg-acts">${btn('Build a boombox', '#builder')}${btn('Shop supply', '#supply', 'sec')}</div></div></section>`;
      const sub = cartTotal();
      return `<section class="pg-sec"><div class="pg-wrap"><h1 class="pg-h2" style="margin-bottom:28px">Your cart</h1><div class="pg-cartg"><div class="pg-lines">${cart.map((i, n) => `<div class="pg-line"><img src="${M(i.img)}" alt=""><div><b>${esc(i.name)}</b>${i.opts ? `<small>${esc(i.opts)}</small>` : ''}<div class="pg-qty"><button type="button" data-cq="${n}" data-d="-1" aria-label="Less">${ic('minus', 14)}</button><span>${i.qty}</span><button type="button" data-cq="${n}" data-d="1" aria-label="More">${ic('plus', 14)}</button></div></div><div class="pg-line-r"><b>${money(i.price * i.qty)}</b><button type="button" data-rm="${n}" class="pg-rm">Remove</button></div></div>`).join('')}</div>
        <aside class="pg-sum"><h3>Order summary</h3><div><span>Subtotal</span><b>${money(sub)}</b></div><div><span>Shipping</span><span>${sub >= 150 ? 'Free' : 'Calculated at checkout'}</span></div><div><span>Sales tax</span><span>Calculated at checkout</span></div><div class="pg-sum-t"><span>Total</span><b>${money(sub)}</b></div>
        <a class="pg-btn pg-btn-pri pg-full" href="#checkout">${ic('lock', 18)} Checkout</a><p class="pg-fine">Have a promo code? Add it at checkout.</p></aside></div></div></section>`;
    },

    checkout() {
      if (!cart.length) return PAGES.cart();
      const sub = cartTotal(), custom = cart.some((i) => i.custom);
      return `<section class="pg-sec"><div class="pg-wrap"><h1 class="pg-h2" style="margin-bottom:10px">Checkout</h1>${demoNote('Demo checkout — no card is charged and no order is placed.')}
        <form class="pg-cartg" data-form="checkout"><div class="pg-form pg-form-plain">
        <h3>Contact</h3><div class="pg-fields2">${field('c1', 'Email', '<input id="c1" type="email" required placeholder="you@email.com">')}${field('c2', 'Phone', '<input id="c2" type="tel" placeholder="(605) 000-0000">')}</div>
        <h3>Delivery</h3><div class="pg-radio"><label><input type="radio" name="ship" value="0" checked> <span><b>Local pickup — Blunt, SD</b><small>Free · we’ll text you when it’s ready</small></span></label><label><input type="radio" name="ship" value="14.95"> <span><b>Standard shipping</b><small>$14.95 · 3–6 business days after build</small></span></label><label><input type="radio" name="ship" value="29.95"> <span><b>Expedited shipping</b><small>$29.95 · 2 business days after build</small></span></label></div>
        <div class="pg-fields2">${field('c3', 'Full name', '<input id="c3" required>')}${field('c4', 'Address', '<input id="c4">')}${field('c5', 'City', '<input id="c5">')}${field('c6', 'State / ZIP', '<input id="c6" placeholder="SD 57522">')}</div>
        ${custom ? `<h3>Payment plan</h3><div class="pg-radio"><label><input type="radio" name="plan" value="full" checked> <span><b>Pay in full</b></span></label><label><input type="radio" name="plan" value="dep"> <span><b>Pay 25% deposit today</b><small>Balance is invoiced when your custom build is ready</small></span></label></div>` : ''}
        <h3>Payment</h3><div class="pg-pay"><button type="button" class="on">Card</button><button type="button">Apple Pay</button><button type="button">Google Pay</button><button type="button">PayPal</button></div>
        <div class="pg-fields2">${field('c7', 'Card number', '<input id="c7" inputmode="numeric" placeholder="4242 4242 4242 4242" autocomplete="off">')}${field('c8', 'Expiry / CVC', '<input id="c8" placeholder="MM / YY · CVC" autocomplete="off">')}</div>
        <p class="pg-fine">${ic('lock', 14)} Payments will be processed by a secure provider (e.g., Shopify Payments, Stripe or Square). Card numbers never touch our server.</p></div>
        <aside class="pg-sum"><h3>${cartCount()} item${cartCount() > 1 ? 's' : ''}</h3>${cart.map((i) => `<div><span>${i.qty} × ${esc(i.name)}</span><b>${money(i.qty * i.price)}</b></div>`).join('')}<div><span>Shipping</span><span id="ck-ship">$0</span></div><div><span>Est. tax (6.2%)</span><span id="ck-tax">${money(sub * 0.062)}</span></div><div class="pg-sum-t"><span>Total</span><b id="ck-total">${money(sub * 1.062)}</b></div><div id="ck-due" class="pg-due"></div>
        <button class="pg-btn pg-btn-pri pg-full" type="submit">${ic('lock', 18)} Place order</button></aside></form></div></section>`;
    },

    'order-done'() {
      const n = 'A' + (10480 + Math.floor(Math.random() * 400));
      return `<section class="pg-sec pg-empty"><div class="pg-wrap"><span class="pg-big-check">${ic('check', 40)}</span><h1 class="pg-h2">Thanks — order #316-${n} is in.</h1><p>A confirmation email is on its way. We’ll text you when your order moves to the next step.</p>
        <ol class="pg-track"><li class="on"><b>Order received</b><small>Today</small></li><li><b>In production</b><small>Built in Blunt, SD</small></li><li><b>Quality check</b><small>Sound & wiring tested</small></li><li><b>Shipped / ready for pickup</b><small>Tracking sent by text & email</small></li></ol>
        <div class="pg-acts">${btn('Track an order', '#track', 'sec')}${btn('Keep shopping', '#home')}</div><p class="pg-fine">Demo only — no order was placed.</p></div></section>`;
    },

    quote() {
      return hero('Request a Quote', 'Tell us what you’re building.', 'One form for every division. Attach photos, specs or design files and we’ll reply within one business day.', 'ram.jpg') +
        `<section class="pg-sec"><div class="pg-wrap pg-2col pg-2col-q"><form class="pg-form" data-form="quote"><div class="pg-seg" role="tablist">${['Upfitting', 'Boombox', '3D Print', 'Supply'].map((t, i) => `<button type="button" data-qtab="${i}" class="${Q.tab === i ? 'on' : ''}">${t}</button>`).join('')}</div>
        <div id="q-fields">${quoteFields(Q.tab)}</div>${uploadBox()}
        <div class="pg-fields2">${field('q1', 'Name', '<input id="q1" required>')}${field('q2', 'Email', '<input id="q2" type="email" required>')}${field('q3', 'Phone', '<input id="q3" type="tel">')}${field('q4', 'Best time to reach you', '<select id="q4"><option>Anytime</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select>')}</div>
        <button class="pg-btn pg-btn-pri" type="submit">Send request ${ic('arrow', 18)}</button></form>
        <aside class="pg-side"><div class="pg-box">${ic('phone', 24)}<b>(605) 280-6477</b><p>Call or text the shop</p></div><div class="pg-box">${ic('mail', 24)}<b>316upfitting@gmail.com</b><p>Email specs or POs</p></div><div class="pg-box">${ic('pin', 24)}<b>Blunt, SD 57522</b><p>Shop visits by appointment</p></div>
        <figure class="pg-quote">${stars(5, 15)}<blockquote>“Clear quote, fair price, and the Tahoe came back cleaner than any install we’ve had done.”</blockquote><figcaption>Fleet coordinator · Central SD agency (sample)</figcaption></figure></aside></div></section>`;
    },

    gallery() {
      return hero('Gallery', 'Recent builds', 'A look at vehicles, boomboxes and prints that have come through the shop.', 'lineup_night.jpg') +
        `<section class="pg-sec"><div class="pg-wrap"><div class="pg-filter pg-filter-c">${[['all', 'All'], ['upfitting', 'Upfitting'], ['boomboxes', 'Boomboxes'], ['printing', '3D Printing'], ['supply', 'Supply']].map(([k, t]) => `<button type="button" data-gal="${k}" class="${G.f === k ? 'on' : ''}">${t}</button>`).join('')}</div><div class="pg-gal" id="gal">${galGrid()}</div></div></section>`;
    },

    about() {
      return hero('About 316', 'Built in Blunt. Built to last.', 'A small South Dakota shop doing big-shop work since 2019.', 'gator.jpg') +
        `<section class="pg-sec"><div class="pg-wrap pg-2col"><div>${head('Our story', 'It started with a truck and a roll of wire.', '')}
        <p class="pg-p">316 began in 2019 doing emergency-light and accessory installs out of a shop in Blunt, South Dakota. Word spread through local agencies, and the work grew into complete patrol, fire and fleet upfits.</p>
        <p class="pg-p">Along the way we started building rugged Bluetooth boomboxes, printing custom parts and gear, and stocking the wire and connectors we trust on every install. Today that’s four divisions under one roof — same standard on all of them.</p><p class="pg-fine">Sample story for the concept — to be written with the owner.</p></div>
        <div class="pg-mosaic"><img src="${M('yellow.jpg')}" alt=""><img src="${M('bb_orange.jpg')}" alt=""><img src="${M('minis.jpg')}" alt=""></div></div></section>
        <section class="pg-sec pg-alt"><div class="pg-wrap pg-cols4">${[['2019', 'Founded in Blunt, SD'], ['4', 'Divisions under one roof'], ['350+', 'Vehicles upfitted (sample)'], ['1,000+', 'Boomboxes & prints shipped (sample)']].map(([a, b]) => `<div class="pg-stat"><b>${a}</b><span>${b}</span></div>`).join('')}</div></section>
        <section class="pg-sec"><div class="pg-wrap">${head('What we stand for', 'Do it right. Stand behind it.', '')}<div class="pg-cols3">${[['shield', 'Built to be used hard', 'Patrol cars, job sites, lake weekends — we build for real use.'], ['doc', 'Straight answers', 'Written quotes, clear timelines and no surprise charges.'], ['pin', 'Proudly South Dakota', 'Designed, wired and finished in our Blunt shop.']].map(([i, t, d]) => `<div class="pg-box">${ic(i, 26)}<b>${t}</b><p>${d}</p></div>`).join('')}</div></div></section>`;
    },

    contact() {
      return hero('Contact', 'Let’s talk about your project.', 'Call, text, email or send a message — we usually reply the same day.', 'havis.jpg') +
        `<section class="pg-sec"><div class="pg-wrap pg-2col pg-2col-q"><form class="pg-form" data-form="contact"><div class="pg-fields2">${field('m1', 'Name', '<input id="m1" required>')}${field('m2', 'Email', '<input id="m2" type="email" required>')}</div>${field('m3', 'Topic', '<select id="m3"><option>General question</option><option>Upfitting</option><option>Boombox order</option><option>3D printing</option><option>Supply order</option><option>Order status</option></select>')}${field('m4', 'Message', '<textarea id="m4"></textarea>')}<button class="pg-btn pg-btn-pri" type="submit">Send message ${ic('arrow', 18)}</button></form>
        <aside class="pg-side"><div class="pg-box">${ic('phone', 24)}<b>(605) 280-6477</b><p>Call or text</p></div><div class="pg-box">${ic('mail', 24)}<b>316upfitting@gmail.com</b><p>Email</p></div><div class="pg-box">${ic('pin', 24)}<b>Blunt, SD 57522</b><p>By appointment</p></div><div class="pg-box">${ic('clock', 24)}<b>Mon–Fri 8–5 · Sat by appt.</b><p>Sample hours</p></div></aside></div></section>`;
    },

    track() {
      return `<section class="pg-sec pg-empty"><div class="pg-wrap" style="max-width:720px"><h1 class="pg-h2">Track your order</h1><p>Enter your order number and email to see where your build is.</p>
        <form class="pg-form pg-form-plain" data-form="track"><div class="pg-fields2">${field('t1', 'Order number', '<input id="t1" placeholder="316-A10482" required>')}${field('t2', 'Email', '<input id="t2" type="email" placeholder="you@email.com">')}</div><button class="pg-btn pg-btn-pri" type="submit">Find order</button></form><div id="track-out"></div></div></section>`;
    },
  };

  /* helpers for stateful pages */
  const S = { q: '', cat: 'All', sort: 'pop' };
  function supplyGrid() {
    let list = P.filter((p) => p.div === 'supply' && (S.cat === 'All' || p.cat === S.cat) && p.name.toLowerCase().includes(S.q.toLowerCase()));
    if (S.sort === 'lo') list.sort((a, b) => a.price - b.price); if (S.sort === 'hi') list.sort((a, b) => b.price - a.price);
    return list.length ? `<p class="pg-count">${list.length} products</p><div class="pg-grid4">${list.map(card).join('')}</div>` : `<p class="pg-count">No products match “${esc(S.q)}”.</p>`;
  }
  const PF = { cat: 'All' };
  const printGrid = () => { const list = P.filter((p) => p.div === 'printing' && (PF.cat === 'All' || p.cat === PF.cat)); return `<p class="pg-count">${list.length} in stock</p><div class="pg-grid4">${list.map(card).join('')}</div>`; };
  const G = { f: 'all' };
  const galGrid = () => GALLERY.filter((g) => G.f === 'all' || g[1] === G.f).map(([im, d, t, s]) => `<button type="button" class="pg-gi" data-lb="${im}" data-cap="${esc(t + ' — ' + s)}"><img src="${M(im)}" alt="${esc(t)}" loading="lazy"><span><b>${t}</b>${s}</span></button>`).join('');
  const Q = { tab: 0 };
  function quoteFields(t) {
    if (t === 0) return `<div class="pg-fields2">${field('u1', 'Agency or company', '<input id="u1" placeholder="County Sheriff’s Office">')}${field('u2', 'Number of vehicles', '<select id="u2"><option>1</option><option>2–5</option><option>6–10</option><option>11+</option></select>')}${field('u3', 'Vehicle year', '<input id="u3" placeholder="2025">')}${field('u4', 'Make / model', '<input id="u4" placeholder="Chevrolet Tahoe PPV">')}</div>
      <fieldset class="pg-checks"><legend>Equipment needed</legend>${['Lightbar', 'Perimeter / grille lights', 'Siren & speaker', 'Console & dock', 'Partition', 'Cargo storage', 'Radio install', 'Camera system', 'Graphics install', 'Full patrol package'].map((x) => `<label><input type="checkbox"> ${x}</label>`).join('')}</fieldset>
      <div class="pg-fields2">${field('u5', 'Needed by', '<input id="u5" type="date">')}${field('u6', 'Paying by', '<select id="u6"><option>Purchase order</option><option>Invoice / net-30</option><option>Card</option></select>')}</div>${field('u7', 'Project details', '<textarea id="u7" placeholder="Anything we should know — existing equipment, agency spec sheet, timeline…"></textarea>')}`;
    if (t === 1) return `${field('k1', 'What would you like built?', '<textarea id="k1" placeholder="Case size and color, speaker preference, lighting, logo or lettering…"></textarea>')}<div class="pg-fields2">${field('k2', 'Quantity', '<input id="k2" type="number" value="1" min="1">')}${field('k3', 'Budget', '<select id="k3"><option>Under $300</option><option>$300–$500</option><option>$500+</option></select>')}</div>`;
    if (t === 2) return `${field('r1', 'Describe your print', '<textarea id="r1" placeholder="What is it, how big, what color, how many?"></textarea>')}<div class="pg-fields2">${field('r2', 'Quantity', '<input id="r2" type="number" value="1" min="1">')}${field('r3', 'Material', '<select id="r3"><option>Not sure</option><option>PLA</option><option>PETG</option><option>TPU</option></select>')}</div>`;
    return `${field('s1', 'Parts list', '<textarea id="s1" placeholder="Part numbers, gauges, lengths, quantities…"></textarea>')}<div class="pg-fields2">${field('s2', 'Company', '<input id="s2">')}${field('s3', 'Account type', '<select id="s3"><option>Installer / shop</option><option>Agency / fleet</option><option>Individual</option></select>')}</div>`;
  }
  const uploadBox = () => `<label class="pg-up"><input type="file" multiple data-upload><span>${ic('upload', 26)}<span><b>Attach photos, specs or design files</b><small>JPG, PNG, PDF, STL, 3MF, STEP — click to choose</small></span></span><span class="pg-files"></span></label>`;

  /* ---------------- router ---------------- */
  const app = () => document.getElementById('app');
  function route() {
    const h = (location.hash || '#home').slice(1) || 'home';
    let html;
    if (h.startsWith('product-')) html = PAGES.product(h.slice(8));
    else if (PAGES[h]) html = PAGES[h]();
    else { const el = document.getElementById(h); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; } html = PAGES.home(); }
    const name = h.startsWith('product-') ? 'product' : (PAGES[h] ? h : 'home');
    document.body.dataset.page = name;
    app().innerHTML = html;
    if (name === 'home') { document.querySelectorAll('[data-builder]').forEach((el) => (el.innerHTML = builderHTML(el.dataset.builder === 'compact'))); }
    window.scrollTo(0, 0);
    document.querySelectorAll('[data-route]').forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + name));
    playVideos(); updateBadges(); closeDrawer(); fitImages(); initSlides();
  }
  const FIT_SEL = '.media > div > img, .gal figure > img, .pg-card-img > img, .pg-pd-img > img, .pg-gi > img, .pg-mosaic > span > img';
  function refit(img) { const p = img.parentElement; p.classList.add('fit'); p.style.setProperty('--bg', 'url("' + img.getAttribute('src') + '")'); }
  function fitImages(root) { (root || document).querySelectorAll(FIT_SEL).forEach(refit); }
  function initSlides() {
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-slides]').forEach((el) => {
      const items = [...el.children]; if (items.length < 2) return;
      const ticks = el.parentElement.querySelector('.ticks');
      const dur = +el.dataset.dur || 5000; let i = 0;
      const show = (n) => {
        items.forEach((x, k) => {
          x.classList.toggle('on', k === n);
          if (x.tagName === 'VIDEO') { if (k === n) { try { x.currentTime = 0; } catch (e) {} const p = x.play(); if (p && p.catch) p.catch(() => {}); } else x.pause(); }
        });
        if (ticks) [...ticks.children].forEach((t, k) => t.classList.toggle('on', k === n));
      };
      show(0);
      if (reduce) return;
      const tick = () => { if (!document.body.contains(el)) return; i = (i + 1) % items.length; show(i); setTimeout(tick, dur); };
      setTimeout(tick, dur + (+el.dataset.delay || 0));
    });
  }
  function playVideos() { document.querySelectorAll('video').forEach((v) => { v.muted = true; v.playsInline = true; if (v.closest('[data-slides]') && !v.classList.contains('on')) return; const p = v.play(); if (p && p.catch) p.catch(() => {}); }); }

  /* ---------------- drawer & lightbox ---------------- */
  function openDrawer() {
    let d = document.getElementById('drawer');
    if (!d) { d = document.createElement('div'); d.id = 'drawer'; d.className = 'drawer'; document.body.appendChild(d); }
    d.innerHTML = `<div class="drawer-p" role="dialog" aria-label="Menu"><button type="button" class="drawer-x" data-act="close-drawer" aria-label="Close menu">${ic('x', 24)}</button>
      ${[['home', 'Home'], ['boomboxes', 'Boomboxes'], ['builder', 'Build a Boombox'], ['printing', '3D Printing'], ['print-shop', 'In-stock prints'], ['print-custom', 'Custom prints'], ['supply', 'Supply'], ['upfitting', 'Upfitting'], ['gallery', 'Gallery'], ['about', 'About'], ['contact', 'Contact'], ['track', 'Track an order'], ['cart', 'Cart']].map(([k, t]) => `<a href="#${k}">${t}</a>`).join('')}
      <a class="pg-btn pg-btn-pri" href="#quote">Request a quote</a></div>`;
    d.classList.add('on');
  }
  function closeDrawer() { const d = document.getElementById('drawer'); if (d) d.classList.remove('on'); }
  function lightbox(src, cap) {
    let l = document.getElementById('lb');
    if (!l) { l = document.createElement('div'); l.id = 'lb'; l.className = 'lb'; document.body.appendChild(l); }
    l.innerHTML = `<button type="button" class="lb-x" data-act="close-lb" aria-label="Close">${ic('x', 28)}</button><figure><img src="${M(src)}" alt=""><figcaption>${cap}</figcaption></figure>`;
    l.classList.add('on');
  }

  /* ---------------- events ---------------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button, a, [data-act]'); if (!t) return;
    const d = t.dataset;
    if (d.act === 'drawer' || t.classList.contains('menu-m')) { e.preventDefault(); openDrawer(); return; }
    if (d.act === 'close-drawer') { closeDrawer(); return; }
    if (d.act === 'close-lb' || t.id === 'lb') { document.getElementById('lb').classList.remove('on'); return; }
    if (d.act === 'search') { e.preventDefault(); location.hash = '#supply'; return; }
    if (d.b) {
      if (d.b === 'color') B.color = d.v; if (d.b === 'model') B.model = +d.v; if (d.b === 'handle') B.handle = +d.v; if (d.b === 'logo') B.logo = !B.logo;
      rerenderBuilders(); return;
    }
    if (d.act === 'add-build') {
      addToCart({ key: `build-${B.color}-${B.model}-${B.handle}-${B.logo}`, name: `Custom Boombox — ${MODELS[B.model][0]}`, opts: `${COLORS.find((c) => c[0] === B.color)[1]} case · ${HANDLES[B.handle][0]} handle${B.logo ? ' · logo decal' : ''}`, price: bTotal(), img: bImg(), custom: true });
      return;
    }
    if (d.pdcolor) { const pi = document.getElementById('pd-img'); pi.src = M(d.pdcolor); refit(pi); t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (d.qty) { const q = document.getElementById('pd-qty'); q.textContent = Math.max(1, +q.textContent + +d.qty); return; }
    if (d.act === 'add-product') {
      const p = byId[d.id], qty = +document.getElementById('pd-qty').textContent; const txt = document.getElementById('pd-text');
      const col = document.querySelector('[data-pdcolor].on');
      const opts = [col ? col.textContent.trim() + ' case' : '', txt && txt.value ? 'Text: ' + txt.value : ''].filter(Boolean).join(' · ');
      addToCart({ key: p.id + opts, name: p.name, opts, price: p.price, img: col ? col.dataset.pdcolor : p.img, qty }); return;
    }
    if (d.cq) { const i = cart[+d.cq]; i.qty = Math.max(1, i.qty + +d.d); saveCart(); route(); return; }
    if (d.rm) { cart.splice(+d.rm, 1); saveCart(); route(); return; }
    if (d.filter) { S.cat = d.filter; document.getElementById('sup-grid').innerHTML = supplyGrid(); fitImages(); t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (d.pfilter) { PF.cat = d.pfilter; document.getElementById('pr-grid').innerHTML = printGrid(); fitImages(); t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (d.gal) { G.f = d.gal; document.getElementById('gal').innerHTML = galGrid(); fitImages(); t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (d.lb) { lightbox(d.lb, d.cap); return; }
    if (d.qtab) { Q.tab = +d.qtab; document.getElementById('q-fields').innerHTML = quoteFields(Q.tab); t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (t.closest('.pg-pay') && t.tagName === 'BUTTON') { t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
    if (t.closest('.pg-seg,.seg') && t.tagName === 'BUTTON' && !d.qtab) { t.parentElement.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === t)); return; }
  });
  document.addEventListener('input', (e) => {
    if (e.target.id === 'sup-q') { S.q = e.target.value; document.getElementById('sup-grid').innerHTML = supplyGrid(); fitImages(); }
  });
  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.id === 'sup-sort') { S.sort = t.value; document.getElementById('sup-grid').innerHTML = supplyGrid(); fitImages(); }
    if (t.dataset.upload !== undefined) { const box = t.closest('.pg-up').querySelector('.pg-files'); box.innerHTML = [...t.files].map((f) => `<span>${ic('check', 14)} ${esc(f.name)}</span>`).join(''); }
    if (t.name === 'ship' || t.name === 'plan') updateCheckout();
  });
  function updateCheckout() {
    const ship = +(document.querySelector('input[name=ship]:checked') || { value: 0 }).value, sub = cartTotal(), tax = sub * 0.062, tot = sub + ship + tax;
    document.getElementById('ck-ship').textContent = ship ? money(ship) : 'Free';
    document.getElementById('ck-total').textContent = money(tot);
    const dep = document.querySelector('input[name=plan]:checked');
    document.getElementById('ck-due').innerHTML = dep && dep.value === 'dep' ? `<span>Due today (25% deposit)</span><b>${money(Math.round(tot * 0.25 * 100) / 100)}</b>` : '';
  }
  document.addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target.dataset.form;
    if (f === 'checkout') { cart = []; saveCart(); location.hash = '#order-done'; return; }
    if (f === 'track') { document.getElementById('track-out').innerHTML = `<ol class="pg-track"><li class="on"><b>Order received</b><small>Nov 18</small></li><li class="on"><b>In production</b><small>Rockville build — wiring complete</small></li><li><b>Quality check</b><small>Next</small></li><li><b>Shipped</b><small>Est. Nov 26</small></li></ol><p class="pg-fine">Sample status for the demo.</p>`; return; }
    const ref = (f === 'quote' ? 'Q-' : f === 'print' ? 'P-' : 'M-') + (24100 + Math.floor(Math.random() * 800));
    e.target.innerHTML = `<div class="pg-thanks"><span class="pg-big-check">${ic('check', 36)}</span><h3>Request ${ref} received.</h3><p>Thanks — we’ll reply within one business day. (Demo only — nothing was sent.)</p><a class="pg-btn pg-btn-sec" href="#home">Back to home</a></div>`;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeDrawer(); const l = document.getElementById('lb'); if (l) l.classList.remove('on'); }
    if (e.key === 'Enter' && e.target.matches('[data-search-input]')) { S.q = e.target.value; location.hash = '#supply'; if (location.hash === '#supply') route(); }
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', () => { route(); });
  if (document.readyState !== 'loading') route();
})();
