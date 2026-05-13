const { Document, Packer } = require("docx");
const fs = require("fs");

const {
  infoTable,
  propTable,
  estrategiasTable,
  momentosTable,
  firmasTable,
  MAIN,
  TEAL,
  h2,
  sp,
  mkBorder
} = require("./3_contenido");

// ─────────────────────────────────────────────
// DOCUMENTO PRINCIPAL
// ─────────────────────────────────────────────
const doc = new Document({
  sections: [
    {
      properties: {},
      children: [

        // PORTADA
        h2("SESIÓN DE APRENDIZAJE N° 01-UA7", MAIN),

        sp(40, 40),

        // DATOS
        h2("I. DATOS INFORMATIVOS", MAIN),
        infoTable,

        sp(80, 80),

        // PROPÓSITOS
        h2("II. PROPÓSITOS DE APRENDIZAJE", MAIN),
        propTable,

        sp(80, 80),

        // ESTRATEGIAS
        h2("III. ESTRATEGIAS DIDÁCTICAS", TEAL),
        estrategiasTable,

        sp(80, 80),

        // MOMENTOS
        h2("IV. MOMENTOS DE LA SESIÓN", MAIN),
        momentosTable,

        sp(100, 100),

        // FIRMAS
        firmasTable,
      ],
    },
  ],
});

// ─────────────────────────────────────────────
// GENERAR WORD
// ─────────────────────────────────────────────
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(
    "Sesion_Logaritmos_5to_Secundaria.docx",
    buffer
  );

  console.log("Documento generado correctamente");
});
