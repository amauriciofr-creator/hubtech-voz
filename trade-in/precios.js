/*
 * HUB TECH STORE · Trade-In · TABLA DE PRECIOS
 * ------------------------------------------------------------
 * Este es el único archivo que hay que tocar para cambiar valores.
 * (También se pueden editar desde la pestaña "Precios" de la app y
 *  luego pulsar "Descargar precios.js" para reemplazar este archivo.)
 *
 * equipos: lo que HUB TECH paga por cada equipo usado (USD).
 *   bueno   = batería >= umbralBateria  (valor completo)
 *   regular = batería <  umbralBateria  (necesita cambio de batería)
 *   Valores iniciales tomados como referencia del mercado (nov 2026).
 *   Ajústalos a tu margen antes de publicarlos.
 *
 * descuentos: lo que se resta en la RECEPCIÓN física en tienda.
 *   tipo "pct"   -> porcentaje del valor de tabla
 *   tipo "usd"   -> monto fijo en dólares
 *   tipo "bloquea" -> no se puede recibir hasta resolverlo
 *
 * nuevos: equipos para "Úsalo como entrada" cuando no hay enlace de stock.
 *   PRECIOS DE EJEMPLO: reemplázalos por los de HUB TECH.
 */
window.HUBTECH_TRADEIN = {
  tienda: {
    nombre: "HUB TECH STORE",
    whatsapp: "593983514789", // ej. "593987654321" (sin + ni espacios). Vacío = oculta los botones
    ciudad: "Ecuador",
    validezDias: 7,
    umbralBateria: 85,
    bonoCliente: 20,       // USD extra si el equipo se compró en HUB TECH (0 = sin bono)
    stockUrl: ""           // opcional: enlace de api-stock.gs (…/exec?k=CLAVE) para usar precios reales
  },

  equipos: [
    { serie: "iPhone 17", modelo: "iPhone 17 Pro Max", capacidad: "512GB",  bueno: 915, regular: 850 },
    { serie: "iPhone 17", modelo: "iPhone 17 Pro Max", capacidad: "256GB",  bueno: 895, regular: 830 },
    { serie: "iPhone 17", modelo: "iPhone 17 Pro",     capacidad: "512GB",  bueno: 885, regular: 820 },
    { serie: "iPhone 17", modelo: "iPhone 17 Pro",     capacidad: "256GB",  bueno: 865, regular: 800 },
    { serie: "iPhone 17", modelo: "iPhone 17",         capacidad: "512GB",  bueno: 715, regular: 650 },
    { serie: "iPhone 17", modelo: "iPhone 17",         capacidad: "256GB",  bueno: 695, regular: 630 },

    { serie: "iPhone 16", modelo: "iPhone 16 Pro Max", capacidad: "256GB+", bueno: 720, regular: 610 },
    { serie: "iPhone 16", modelo: "iPhone 16 Pro",     capacidad: "256GB",  bueno: 645, regular: 550 },
    { serie: "iPhone 16", modelo: "iPhone 16 Pro",     capacidad: "128GB",  bueno: 625, regular: 530 },
    { serie: "iPhone 16", modelo: "iPhone 16",         capacidad: "128GB",  bueno: 525, regular: 450 },

    { serie: "iPhone 15", modelo: "iPhone 15 Pro Max", capacidad: "256GB+", bueno: 535, regular: 425 },
    { serie: "iPhone 15", modelo: "iPhone 15 Pro",     capacidad: "256GB",  bueno: 445, regular: 350 },
    { serie: "iPhone 15", modelo: "iPhone 15 Pro",     capacidad: "128GB",  bueno: 425, regular: 330 },
    { serie: "iPhone 15", modelo: "iPhone 15",         capacidad: "128GB",  bueno: 385, regular: 310 },

    { serie: "iPhone 14", modelo: "iPhone 14 Pro Max", capacidad: "256GB+", bueno: 435, regular: 340 },
    { serie: "iPhone 14", modelo: "iPhone 14 Pro",     capacidad: "1TB",    bueno: 415, regular: 340 },
    { serie: "iPhone 14", modelo: "iPhone 14 Pro",     capacidad: "256GB",  bueno: 375, regular: 300 },
    { serie: "iPhone 14", modelo: "iPhone 14 Pro",     capacidad: "128GB",  bueno: 355, regular: 280 },
    { serie: "iPhone 14", modelo: "iPhone 14",         capacidad: "128GB",  bueno: 275, regular: 200 },

    { serie: "iPhone 13", modelo: "iPhone 13 Pro Max", capacidad: "256GB+", bueno: 370, regular: 330 },
    { serie: "iPhone 13", modelo: "iPhone 13 Pro",     capacidad: "256GB",  bueno: 350, regular: 310 },
    { serie: "iPhone 13", modelo: "iPhone 13 Pro",     capacidad: "128GB",  bueno: 330, regular: 290 },
    { serie: "iPhone 13", modelo: "iPhone 13",         capacidad: "256GB",  bueno: 250, regular: 210 },
    { serie: "iPhone 13", modelo: "iPhone 13",         capacidad: "128GB",  bueno: 230, regular: 190 }
  ],

  descuentos: [
    { id: "icloud",   texto: "Buscar mi iPhone / cuenta iCloud activa",          tipo: "bloquea", valor: 0 },
    { id: "imei",     texto: "IMEI reportado o bloqueado por operadora",         tipo: "bloquea", valor: 0 },
    { id: "pantalla", texto: "Pantalla trizada o con manchas",                   tipo: "pct",     valor: 35 },
    { id: "rayones",  texto: "Rayones visibles en pantalla",                     tipo: "pct",     valor: 5 },
    { id: "carcasa",  texto: "Golpes o rayones fuertes en marco",                tipo: "pct",     valor: 5 },
    { id: "trasero",  texto: "Vidrio trasero roto",                              tipo: "pct",     valor: 15 },
    { id: "faceid",   texto: "Face ID no funciona",                              tipo: "pct",     valor: 30 },
    { id: "camara",   texto: "Alguna cámara falla",                              tipo: "pct",     valor: 15 },
    { id: "pieza",    texto: "Mensaje de pieza desconocida (pantalla o batería)", tipo: "pct",    valor: 10 },
    { id: "audio",    texto: "Falla de audio, micrófono o vibración",            tipo: "usd",     valor: 30 }
  ],

  nuevos: [
    { modelo: "iPhone 17 Pro Max 256GB", precio: 1599, ejemplo: true },
    { modelo: "iPhone 17 Pro 256GB",     precio: 1449, ejemplo: true },
    { modelo: "iPhone 17 256GB",         precio: 1099, ejemplo: true },
    { modelo: "iPhone 16 128GB",         precio: 899,  ejemplo: true }
  ]
};
