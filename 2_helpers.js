// 2_helpers.js
function infoRow(label, value, bg1 = 'EDF0F9', bg2 = 'FFFFFF') {

  const lCell = new TableCell({
    borders: borders('AAAAAA', 2),
    width: {
      size: 2600,
      type: WidthType.DXA
    },
    shading: {
      fill: bg1,
      type: ShadingType.CLEAR
    },
    margins: {
      top: 70,
      bottom: 70,
      left: 110,
      right: 110
    },
    children: [
      p([
        tx(label, {
          bold: true,
          color: MAIN
        })
      ])
    ]
  });

  const vCell = new TableCell({
    borders: borders('AAAAAA', 2),
    width: {
      size: 6760,
      type: WidthType.DXA
    },
    shading: {
      fill: bg2,
      type: ShadingType.CLEAR
    },
    margins: {
      top: 70,
      bottom: 70,
      left: 110,
      right: 110
    },
    children: Array.isArray(value)
      ? value
      : [p(value)]
  });

  return new TableRow({
    children: [lCell, vCell]
  });
}

module.exports = {
  mkBorder,
  borders,
  tx,
  p,
  h2,
  h3,
  bul,
  sp,
  mixed,
  highlight,
  hCell,
  dCell,
  infoRow
};
