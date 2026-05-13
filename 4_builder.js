// 4_builder.js
  Document,
  Packer
} = require('docx');

const fs = require('fs');

const {
  contenido
} = require('./3_contenido');

// ─────────────────────────────────────
// DOCUMENTO
// ─────────────────────────────────────

const doc = new Document({

  styles: {
    default: {
      document: {
        run: {
          font: 'Arial',
          size: 20
        }
      }
    }
  },

  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 900,
            right: 900,
            bottom: 900,
            left: 900
          }
        }
      },

      children: contenido
    }
  ]

});

// ─────────────────────────────────────
// EXPORTAR
// ─────────────────────────────────────

Packer.toBuffer(doc)
  .then(buffer => {

    if (!fs.existsSync('./output')) {
      fs.mkdirSync('./output');
    }

    fs.writeFileSync(
      './output/Sesion_Logaritmos_5to_Secundaria.docx',
      buffer
    );

    console.log('✅ Documento generado correctamente');

  })
  .catch(error => {
    console.log(error);
  });
