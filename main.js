(function () {
  var STR = {
    es: {
      title: "isma · @ismajrz",
      title404: "404 · isma",
      description: "isma (@ismajrz). construyo apps, bots y las ideas que se quedan en la cabeza. comparto el proceso mientras aprendo.",
      skip: "saltar al contenido",
      photoAlt: "foto de isma",
      langLabel: "idioma",
      bio1: "construyo apps, bots y las ideas que se quedan en la cabeza.",
      bio2: "comparto el proceso mientras aprendo.",
      chip1: "2 servidores de roleplay montados desde cero",
      chip2: "apps para mac e iphone",
      chip3: "webs para pequeños negocios",
      workTitle: "lo que he hecho",
      work1t: "servidores de roleplay",
      work1d: "varios servidores de roleplay y varios scripts en lua",
      work2t: "apps varias para macos e ios",
      work2d: "desarrollo con xcode.",
      work3t: "webs para pequeños negocios",
      work3d: "páginas sencillas y directas.",
      work4t: "investigaciones osint",
      work4d: "a partir de correos, teléfonos y nombres de usuario.",
      work5t: "redes en packet tracer",
      work5d: "ipv4, ipv6 y routing, montadas y probadas.",
      projectsTitle: "proyectos",
      private: "privado",
      projBot: "bot en python que filtra ofertas de tecnología, viajes y videojuegos y las envía por discord.",
      projZuky: "panel personal de vida",
      nowTitle: "ahora",
      now1t: "construyendo",
      now1d: "algo que compartiré pronto.",
      now2t: "estudiando",
      now2d: "dam, desarrollo de aplicaciones multiplataforma.",
      stackTitle: "stack",
      networks: "redes",
      findTitle: "dónde encontrarme",
      xHint: "donde cuento el proceso",
      ghHint: "lo que voy publicando",
      newTab: "se abre en otra pestaña",
      contactTitle: "contacto",
      ctaPurpose: "para colaboraciones, trabajo o propuestas",
      ctaAction: "escribir",
      ctaButton: "escríbeme",
      missing: "esta página no existe.",
      backHome: "volver al inicio"
    },
    en: {
      title: "isma · @ismajrz",
      title404: "404 · isma",
      description: "isma (@ismajrz). i build apps, bots and the ideas that stay in my head. i share the process while i learn.",
      skip: "skip to content",
      photoAlt: "photo of isma",
      langLabel: "language",
      bio1: "i build apps, bots and the ideas that stay in my head.",
      bio2: "i share the process while i learn.",
      chip1: "2 roleplay servers built from scratch",
      chip2: "apps for mac and iphone",
      chip3: "sites for small businesses",
      workTitle: "what i've done",
      work1t: "roleplay servers",
      work1d: "several roleplay servers and several scripts in lua",
      work2t: "various apps for macos and ios",
      work2d: "development with xcode.",
      work3t: "websites for small businesses",
      work3d: "simple, straightforward pages.",
      work4t: "osint investigations",
      work4d: "from emails, phone numbers and usernames.",
      work5t: "networks in packet tracer",
      work5d: "ipv4, ipv6 and routing, built and tested.",
      projectsTitle: "projects",
      private: "private",
      projBot: "a python bot that filters offers in tech, travel and video games and sends them through discord.",
      projZuky: "personal life dashboard",
      nowTitle: "now",
      now1t: "building",
      now1d: "something i'll share soon.",
      now2t: "studying",
      now2d: "dam, multiplatform application development.",
      stackTitle: "stack",
      networks: "networks",
      findTitle: "where to find me",
      xHint: "where i talk about the process",
      ghHint: "what i publish",
      newTab: "opens in a new tab",
      contactTitle: "contact",
      ctaPurpose: "for collaborations, work or proposals",
      ctaAction: "write",
      ctaButton: "write me",
      missing: "this page doesn't exist.",
      backHome: "back home"
    }
  };

  var KEY = "isma-lang";

  function stored() {
    try {
      return localStorage.getItem(KEY) === "en" ? "en" : "es";
    } catch (e) {
      return "es";
    }
  }

  function apply(lang) {
    var dict = STR[lang] || STR.es;
    var page = document.body.getAttribute("data-page");
    document.documentElement.lang = lang;
    document.title = page === "404" ? dict.title404 : dict.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", page === "404" ? dict.missing : dict.description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-alt")];
      if (value != null) el.alt = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });

  apply(stored());
})();
