const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const toIco = require('to-ico');

async function convertSvgToIco() {
  try {
    // SVG 파일 읽기
    const svgPath = path.join(__dirname, '../public/favicon.svg');
    const outputPathPng = path.join(__dirname, '../public/favicon.png');
    const outputPathIco = path.join(__dirname, '../public/favicon.ico');
    const appleTouchIconPath = path.join(__dirname, '../public/apple-icon.png');
    
    // SVG 내용 읽기
    const svg = fs.readFileSync(svgPath, 'utf8');
    
    // SVG를 PNG로 변환
    const resvg = new Resvg(svg, {
      background: 'rgba(0, 0, 0, 0)',
      fitTo: {
        mode: 'width',
        value: 32
      }
    });
    
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    
    // 32x32 PNG 저장
    fs.writeFileSync(outputPathPng, pngBuffer);
    
    // 특정 크기로 리사이징하여 ICO 생성에 사용할 PNG 파일들 만들기
    const sizes = [16, 32, 48];
    const pngFiles = await Promise.all(
      sizes.map(async (size) => {
        const resizedPng = await sharp(pngBuffer)
          .resize(size, size)
          .toBuffer();
        return resizedPng;
      })
    );
    
    // PNG 파일들을 ICO로 변환
    const icoBuffer = await toIco(pngFiles);
    fs.writeFileSync(outputPathIco, icoBuffer);
    
    // Apple Touch Icon 생성 (180x180)
    const appleTouchIcon = await sharp(pngBuffer)
      .resize(180, 180)
      .toBuffer();
    fs.writeFileSync(appleTouchIconPath, appleTouchIcon);
    
    console.log('아이콘이 성공적으로 생성되었습니다:');
    console.log('- favicon.ico');
    console.log('- apple-icon.png');
  } catch (error) {
    console.error('아이콘 생성 중 오류 발생:', error);
  }
}

convertSvgToIco(); 