const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const { Resvg } = require('@resvg/resvg-js');

async function convertSvgToPng() {
  try {
    // SVG 파일 읽기
    const svgPath = path.join(__dirname, '../public/images/autorise-og-image.svg');
    const outputPath = path.join(__dirname, '../public/images/autorise-og-image.png');
    
    const svg = fs.readFileSync(svgPath, 'utf8');
    
    // SVG를 PNG로 변환
    const resvg = new Resvg(svg, {
      background: 'rgba(0, 0, 0, 0)',
      fitTo: {
        mode: 'width',
        value: 1200
      }
    });
    
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    
    // 파일 저장
    fs.writeFileSync(outputPath, pngBuffer);
    
    console.log('OG 이미지가 성공적으로 생성되었습니다:', outputPath);
  } catch (error) {
    console.error('OG 이미지 생성 중 오류 발생:', error);
  }
}

convertSvgToPng(); 