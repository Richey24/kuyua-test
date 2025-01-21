export const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371 * 1000;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};


export const customTextPlugin = {
    id: 'customText',
    beforeDraw(chart: any) {
      const { width, height, ctx } = chart;
      ctx.save();
  
      const text = 'Overall Location status';
      const fontSize = 1;
      ctx.font = `${fontSize}em Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
  
      const x = width / 2;
      const y = height / 2;
  
      // Split text into lines
      const maxWidth = width * 0.1; // Adjust max width as needed
      const lines = wrapText(ctx, text, maxWidth);
  
      // Draw each line
      const lineHeight = Number(fontSize) * 16; // Adjust line height
      const startY = y - (lines.length - 1) * (lineHeight / 2); // Center vertically
      lines.forEach((line, index) => {
        ctx.fillText(line, x, startY + index * lineHeight);
      });
  
      ctx.restore();
    },
  };
  
  // Function to split text into lines
  function wrapText(ctx: any, text: any, maxWidth: any) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
  
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  