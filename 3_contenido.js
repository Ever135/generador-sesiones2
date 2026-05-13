const {

  p([
    tx('2³ = 8  ↔  log₂8 = 3', {
      bold: true,
      color: TEAL,
      size: 24
    })
  ]),

  bul('Producto'),
  bul('Cociente'),
  bul('Potencia'),
  bul('Cambio de base'),

  h3('Aplicaciones reales', PURP, '🌎'),

  bul('Escala Richter'),
  bul('Decibeles'),
  bul('pH'),
  bul('Crecimiento poblacional'),

  h3('Trabajo colaborativo', GREEN, '🤝'),

  bul('Equipos de 4 estudiantes'),
  bul('Gamificación con puntajes'),
  bul('Resolución de retos'),

  sp(100, 60),

  h2('IV. CIERRE'),

  h3('Evaluación formativa', PURP, '📊'),

  bul('Conversión potencia ↔ logaritmo'),
  bul('Aplicación de propiedades'),
  bul('Resolución de problema contextualizado'),

  h3('Metacognición', GREEN, '🪞'),

  bul('3 cosas aprendidas'),
  bul('2 conexiones'),
  bul('1 duda'),

  sp(120, 80),

  p([
    tx('Firma del estudiante practicante', {
      bold: true
    })
  ], {
    align: AlignmentType.CENTER
  }),

  sp(160, 40),

  p([
    tx('__________________________________')
  ], {
    align: AlignmentType.CENTER
  })

];

module.exports = {
  contenido
};
