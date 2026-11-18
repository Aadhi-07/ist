function svgToDataUri(svg) {
  const cleaned = svg.replace(/\s+/g, ' ').trim();
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(cleaned);
}

// 1. HERO_BG: "Soft pale-aqua misty gradient with out-of-focus water-droplet bokeh, calm and airy, 16:9, no objects."
const heroBgSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
  <defs>
    <radialGradient id='mist1' cx='78%' cy='15%' r='65%'>
      <stop offset='0%' stop-color='#ffffff' stop-opacity='0.85'/>
      <stop offset='45%' stop-color='#ebf5f7' stop-opacity='0.5'/>
      <stop offset='100%' stop-color='#dcebee' stop-opacity='0'/>
    </radialGradient>
    <radialGradient id='mist2' cx='22%' cy='85%' r='55%'>
      <stop offset='0%' stop-color='#ebf5f7' stop-opacity='0.6'/>
      <stop offset='100%' stop-color='#d0e5ea' stop-opacity='0'/>
    </radialGradient>
    <filter id='bokeh-blur' x='-20%' y='-20%' width='140%' height='140%'>
      <feGaussianBlur stdDeviation='24'/>
    </filter>
  </defs>
  <rect width='1600' height='900' fill='#dcebee'/>
  <rect width='1600' height='900' fill='url(#mist1)'/>
  <rect width='1600' height='900' fill='url(#mist2)'/>
  <g filter='url(#bokeh-blur)' opacity='0.75'>
    <circle cx='240' cy='320' r='110' fill='#ffffff'/>
    <circle cx='460' cy='180' r='75' fill='#bcdfe6'/>
    <circle cx='820' cy='260' r='140' fill='#ffffff'/>
    <circle cx='1160' cy='210' r='90' fill='#cbe4ea'/>
    <circle cx='1390' cy='420' r='130' fill='#ffffff'/>
    <circle cx='360' cy='620' r='95' fill='#b5dbe3'/>
    <circle cx='920' cy='680' r='160' fill='#ffffff'/>
    <circle cx='1240' cy='740' r='115' fill='#c5e6ee'/>
    <circle cx='1510' cy='180' r='95' fill='#ffffff'/>
    <circle cx='680' cy='490' r='85' fill='#ffffff'/>
  </g>
</svg>`;

// 2. S2_BG: "Deep teal and aqua caustic light bokeh, clean and radiant, 16:9."
const s2BgSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
  <defs>
    <linearGradient id='bglight' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#dcebee'/>
      <stop offset='50%' stop-color='#eaf4f6'/>
      <stop offset='100%' stop-color='#d7e8ec'/>
    </linearGradient>
    <radialGradient id='caustic' cx='65%' cy='35%' r='65%'>
      <stop offset='0%' stop-color='#88b3b9' stop-opacity='0.35'/>
      <stop offset='50%' stop-color='#397493' stop-opacity='0.12'/>
      <stop offset='100%' stop-color='#dcebee' stop-opacity='0'/>
    </radialGradient>
    <filter id='s2blur' x='-20%' y='-20%' width='140%' height='140%'>
      <feGaussianBlur stdDeviation='28'/>
    </filter>
  </defs>
  <rect width='1600' height='900' fill='url(#bglight)'/>
  <rect width='1600' height='900' fill='url(#caustic)'/>
  <g filter='url(#s2blur)' opacity='0.6'>
    <circle cx='280' cy='220' r='120' fill='#b5dce3'/>
    <circle cx='540' cy='520' r='90' fill='#cbe9ef'/>
    <circle cx='860' cy='290' r='150' fill='#ffffff'/>
    <circle cx='1200' cy='250' r='125' fill='#a3d1db'/>
    <circle cx='1400' cy='600' r='160' fill='#b8dfe6'/>
    <circle cx='380' cy='780' r='105' fill='#d2edf2'/>
    <circle cx='980' cy='720' r='135' fill='#b1d8e0'/>
  </g>
</svg>`;

// 3. SPLASH: "Dramatic crown splash of crystal-clear water with fine flying droplets, teal-tinted highlights, isolated on a transparent background."
const splashSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 720' fill='none'>
  <defs>
    <linearGradient id='wGrad1' x1='0%' y1='100%' x2='0%' y2='0%'>
      <stop offset='0%' stop-color='#397493' stop-opacity='0.35'/>
      <stop offset='50%' stop-color='#88b3b9' stop-opacity='0.75'/>
      <stop offset='100%' stop-color='#eaf6f8' stop-opacity='0.95'/>
    </linearGradient>
    <linearGradient id='wGrad2' x1='20%' y1='80%' x2='80%' y2='20%'>
      <stop offset='0%' stop-color='#022731' stop-opacity='0.25'/>
      <stop offset='60%' stop-color='#5ca1b0' stop-opacity='0.65'/>
      <stop offset='100%' stop-color='#ffffff' stop-opacity='0.95'/>
    </linearGradient>
    <linearGradient id='rimLight' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#ffffff' stop-opacity='0.95'/>
      <stop offset='70%' stop-color='#88b3b9' stop-opacity='0.4'/>
      <stop offset='100%' stop-color='#397493' stop-opacity='0.1'/>
    </linearGradient>
  </defs>
  <path d='M160 510 C 230 360, 270 270, 305 240 C 325 220, 345 265, 380 340 C 420 230, 465 190, 495 180 C 515 170, 545 235, 580 320 C 635 220, 690 210, 725 230 C 755 250, 785 350, 850 490 C 740 550, 260 560, 160 510 Z' fill='url(#wGrad1)' opacity='0.65'/>
  <path d='M130 550 C 190 410, 235 295, 265 230 C 280 200, 305 210, 315 255 C 335 340, 360 380, 395 305 C 425 230, 455 145, 485 115 C 505 95, 535 115, 545 170 C 565 275, 595 320, 630 255 C 665 190, 710 200, 740 255 C 775 320, 815 435, 880 550 C 765 615, 245 615, 130 550 Z' fill='url(#wGrad2)'/>
  <path d='M265 230 Q 275 195 285 230 Q 300 285 315 255 M485 115 Q 505 85 520 120 Q 545 180 560 235 M740 255 Q 760 220 775 255' stroke='url(#rimLight)' stroke-width='6' stroke-linecap='round'/>
  <circle cx='275' cy='210' r='15' fill='#ffffff' opacity='0.9'/>
  <circle cx='277' cy='208' r='7' fill='#e3eef0'/>
  <circle cx='505' cy='100' r='19' fill='#ffffff' opacity='0.95'/>
  <circle cx='507' cy='97' r='9' fill='#e3eef0'/>
  <circle cx='750' cy='240' r='16' fill='#ffffff' opacity='0.9'/>
  <circle cx='410' cy='290' r='12' fill='#ffffff' opacity='0.85'/>
  <circle cx='640' cy='240' r='13' fill='#ffffff' opacity='0.85'/>
  <circle cx='225' cy='170' r='10' fill='#cbe4ea'/>
  <circle cx='190' cy='115' r='7' fill='#ffffff'/>
  <circle cx='310' cy='125' r='9' fill='#eaf6f8'/>
  <circle cx='445' cy='65' r='11' fill='#ffffff'/>
  <circle cx='475' cy='30' r='7' fill='#ffffff'/>
  <circle cx='560' cy='55' r='10' fill='#cbe4ea'/>
  <circle cx='605' cy='95' r='8' fill='#ffffff'/>
  <circle cx='700' cy='125' r='12' fill='#eaf6f8'/>
  <circle cx='800' cy='160' r='9' fill='#ffffff'/>
  <circle cx='845' cy='205' r='11' fill='#cbe4ea'/>
  <circle cx='890' cy='300' r='8' fill='#ffffff'/>
  <circle cx='150' cy='285' r='9' fill='#eaf6f8'/>
  <circle cx='110' cy='380' r='10' fill='#cbe4ea'/>
  <ellipse cx='505' cy='575' rx='380' ry='55' fill='none' stroke='url(#rimLight)' stroke-width='4' opacity='0.7'/>
  <ellipse cx='505' cy='590' rx='415' ry='45' fill='none' stroke='url(#rimLight)' stroke-width='2' opacity='0.5'/>
</svg>`;

// 4. PIPES: "Cluster of industrial steel pipes with a red gate-valve handwheel, hanging down from the top edge, wet metal with water beads, cool teal rim light, transparent background."
const pipesSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 840' fill='none'>
  <defs>
    <linearGradient id='pipeSteel' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#2b4149'/>
      <stop offset='25%' stop-color='#698993'/>
      <stop offset='55%' stop-color='#c2d6dc'/>
      <stop offset='75%' stop-color='#74959f'/>
      <stop offset='100%' stop-color='#1a2c32'/>
    </linearGradient>
    <linearGradient id='pipeSteel2' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#1f333a'/>
      <stop offset='30%' stop-color='#5a7a84'/>
      <stop offset='60%' stop-color='#a8c4cc'/>
      <stop offset='85%' stop-color='#45636c'/>
      <stop offset='100%' stop-color='#152327'/>
    </linearGradient>
    <linearGradient id='valveRed' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#e63946'/>
      <stop offset='50%' stop-color='#b71c1c'/>
      <stop offset='100%' stop-color='#5f0909'/>
    </linearGradient>
    <linearGradient id='brassStem' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#8c6b2d'/>
      <stop offset='50%' stop-color='#f3ca65'/>
      <stop offset='100%' stop-color='#6b4e18'/>
    </linearGradient>
  </defs>
  <rect x='360' y='0' width='85' height='450' fill='url(#pipeSteel2)'/>
  <rect x='350' y='145' width='105' height='28' rx='4' fill='#2f454c'/>
  <circle cx='365' cy='159' r='5' fill='#8baab2'/>
  <circle cx='400' cy='159' r='5' fill='#8baab2'/>
  <circle cx='435' cy='159' r='5' fill='#8baab2'/>
  <rect x='170' y='0' width='115' height='640' fill='url(#pipeSteel)'/>
  <rect x='158' y='85' width='139' height='30' rx='4' fill='#3d5760'/>
  <circle cx='175' cy='100' r='5.5' fill='#9fc0c8'/>
  <circle cx='212' cy='100' r='5.5' fill='#9fc0c8'/>
  <circle cx='250' cy='100' r='5.5' fill='#9fc0c8'/>
  <circle cx='280' cy='100' r='5.5' fill='#9fc0c8'/>
  <rect x='158' y='380' width='139' height='30' rx='4' fill='#3d5760'/>
  <circle cx='175' cy='395' r='5.5' fill='#9fc0c8'/>
  <circle cx='212' cy='395' r='5.5' fill='#9fc0c8'/>
  <circle cx='250' cy='395' r='5.5' fill='#9fc0c8'/>
  <circle cx='280' cy='395' r='5.5' fill='#9fc0c8'/>
  <path d='M285 270 L420 270 L420 345 L285 345 Z' fill='url(#pipeSteel)'/>
  <path d='M150 240 L305 240 L295 305 L160 305 Z' fill='#324b53'/>
  <rect x='220' y='160' width='20' height='85' fill='url(#brassStem)'/>
  <rect x='215' y='180' width='30' height='12' rx='2' fill='#d2a65a'/>
  <ellipse cx='230' cy='155' rx='90' ry='34' fill='none' stroke='url(#valveRed)' stroke-width='24'/>
  <line x1='230' y1='155' x2='145' y2='155' stroke='url(#valveRed)' stroke-width='15'/>
  <line x1='230' y1='155' x2='315' y2='155' stroke='url(#valveRed)' stroke-width='15'/>
  <line x1='230' y1='155' x2='185' y2='130' stroke='url(#valveRed)' stroke-width='15'/>
  <line x1='230' y1='155' x2='275' y2='180' stroke='url(#valveRed)' stroke-width='15'/>
  <line x1='230' y1='155' x2='185' y2='180' stroke='url(#valveRed)' stroke-width='15'/>
  <line x1='230' y1='155' x2='275' y2='130' stroke='url(#valveRed)' stroke-width='15'/>
  <circle cx='230' cy='155' r='19' fill='#d2a65a'/>
  <circle cx='230' cy='155' r='9' fill='#6b4e18'/>
  <line x1='172' y1='0' x2='172' y2='640' stroke='#88b3b9' stroke-width='4.5' opacity='0.85'/>
  <line x1='283' y1='0' x2='283' y2='640' stroke='#397493' stroke-width='3.5' opacity='0.6'/>
  <g fill='#eaf6f8' opacity='0.85'>
    <circle cx='190' cy='130' r='4'/>
    <circle cx='193' cy='190' r='5'/>
    <circle cx='188' cy='230' r='3.5'/>
    <circle cx='255' cy='325' r='5'/>
    <circle cx='265' cy='450' r='6'/>
    <circle cx='196' cy='505' r='5.5'/>
    <circle cx='202' cy='550' r='4'/>
  </g>
</svg>`;

// 5. TANK: "Curved corner of a large steel storage tank with ladder and catwalk, half rusted and half freshly blasted silver, wet surface, cool rim light, transparent background."
const tankSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 880 880' fill='none'>
  <defs>
    <linearGradient id='rustGrad' x1='0%' y1='0%' x2='100%' y2='50%'>
      <stop offset='0%' stop-color='#3d1f11'/>
      <stop offset='40%' stop-color='#663319'/>
      <stop offset='75%' stop-color='#8d4722'/>
      <stop offset='100%' stop-color='#542713'/>
    </linearGradient>
    <linearGradient id='blastedGrad' x1='0%' y1='0%' x2='100%' y2='50%'>
      <stop offset='0%' stop-color='#6b8a93'/>
      <stop offset='35%' stop-color='#b5cdd3'/>
      <stop offset='70%' stop-color='#e6f2f5'/>
      <stop offset='100%' stop-color='#8faab2'/>
    </linearGradient>
    <linearGradient id='tankRim' x1='0%' y1='100%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#397493'/>
      <stop offset='50%' stop-color='#88b3b9'/>
      <stop offset='100%' stop-color='#ffffff'/>
    </linearGradient>
  </defs>
  <path d='M100 880 C190 540, 340 270, 640 125 L880 125 L880 880 Z' fill='url(#rustGrad)'/>
  <path d='M390 880 C455 660, 540 465, 745 330 L880 330 L880 880 Z' fill='url(#blastedGrad)'/>
  <path d='M385 880 Q405 820 395 780 T435 685 T470 600 T530 520 T600 425 T705 355 T755 328' stroke='#dcebee' stroke-width='8' stroke-dasharray='12,6' fill='none' opacity='0.9'/>
  <path d='M150 725 C230 480, 380 270, 705 190' stroke='#24120a' stroke-width='4' fill='none' opacity='0.6'/>
  <path d='M235 540 C320 375, 465 230, 775 170' stroke='#24120a' stroke-width='4' fill='none' opacity='0.5'/>
  <path d='M445 725 C520 570, 620 435, 880 350' stroke='#718f97' stroke-width='4' fill='none' opacity='0.7'/>
  <path d='M600 125 L880 125' stroke='#2a434c' stroke-width='16'/>
  <line x1='640' y1='125' x2='640' y2='45' stroke='#4b6b75' stroke-width='6'/>
  <line x1='720' y1='125' x2='720' y2='45' stroke='#4b6b75' stroke-width='6'/>
  <line x1='800' y1='125' x2='800' y2='45' stroke='#4b6b75' stroke-width='6'/>
  <line x1='620' y1='45' x2='880' y2='45' stroke='#88b3b9' stroke-width='6'/>
  <line x1='620' y1='80' x2='880' y2='80' stroke='#5d7e88' stroke-width='4'/>
  <line x1='670' y1='125' x2='515' y2='880' stroke='#324b53' stroke-width='8'/>
  <line x1='705' y1='125' x2='550' y2='880' stroke='#324b53' stroke-width='8'/>
  <line x1='665' y1='175' x2='700' y2='175' stroke='#88b3b9' stroke-width='5'/>
  <line x1='652' y1='235' x2='687' y2='235' stroke='#88b3b9' stroke-width='5'/>
  <line x1='639' y1='295' x2='674' y2='295' stroke='#88b3b9' stroke-width='5'/>
  <line x1='626' y1='355' x2='661' y2='355' stroke='#88b3b9' stroke-width='5'/>
  <line x1='613' y1='415' x2='648' y2='415' stroke='#88b3b9' stroke-width='5'/>
  <line x1='600' y1='475' x2='635' y2='475' stroke='#88b3b9' stroke-width='5'/>
  <line x1='587' y1='535' x2='622' y2='535' stroke='#88b3b9' stroke-width='5'/>
  <line x1='574' y1='595' x2='609' y2='595' stroke='#88b3b9' stroke-width='5'/>
  <line x1='561' y1='655' x2='596' y2='655' stroke='#88b3b9' stroke-width='5'/>
  <line x1='548' y1='715' x2='583' y2='715' stroke='#88b3b9' stroke-width='5'/>
  <line x1='535' y1='775' x2='570' y2='775' stroke='#88b3b9' stroke-width='5'/>
  <path d='M655 235 C630 220, 630 250, 695 235' stroke='#5d7e88' stroke-width='4' fill='none'/>
  <path d='M629 355 C604 340, 604 370, 669 355' stroke='#5d7e88' stroke-width='4' fill='none'/>
  <path d='M603 475 C578 460, 578 490, 643 475' stroke='#5d7e88' stroke-width='4' fill='none'/>
  <path d='M577 595 C552 580, 552 610, 617 595' stroke='#5d7e88' stroke-width='4' fill='none'/>
  <path d='M551 715 C526 700, 526 730, 591 715' stroke='#5d7e88' stroke-width='4' fill='none'/>
  <path d='M100 880 C190 540, 340 270, 640 125' stroke='url(#tankRim)' stroke-width='8' fill='none'/>
</svg>`;

// 6. PROPELLER: "Bronze ship propeller, glistening wet, three-quarter view, teal rim light, transparent background."
const propSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 820 820' fill='none'>
  <defs>
    <linearGradient id='bronze1' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#f5d98b'/>
      <stop offset='30%' stop-color='#d2a65a'/>
      <stop offset='65%' stop-color='#8c6226'/>
      <stop offset='100%' stop-color='#452e0f'/>
    </linearGradient>
    <linearGradient id='bronze2' x1='100%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#fae29f'/>
      <stop offset='40%' stop-color='#be8f45'/>
      <stop offset='80%' stop-color='#6d4a19'/>
      <stop offset='100%' stop-color='#342008'/>
    </linearGradient>
    <linearGradient id='bronzeDark' x1='0%' y1='0%' x2='0%' y2='100%'>
      <stop offset='0%' stop-color='#a67832'/>
      <stop offset='50%' stop-color='#664516'/>
      <stop offset='100%' stop-color='#2b1b06'/>
    </linearGradient>
    <linearGradient id='propRim' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#ffffff'/>
      <stop offset='50%' stop-color='#88b3b9'/>
      <stop offset='100%' stop-color='#397493'/>
    </linearGradient>
  </defs>
  <path d='M380 440 C270 530, 170 590, 150 690 C140 740, 210 770, 270 750 C350 720, 400 570, 420 470 Z' fill='url(#bronzeDark)'/>
  <path d='M450 380 C530 270, 610 170, 680 150 C740 130, 760 190, 740 250 C700 340, 570 410, 470 420 Z' fill='url(#bronze2)'/>
  <path d='M390 380 C290 290, 200 200, 200 130 C200 70, 280 60, 350 90 C450 140, 460 280, 430 370 Z' fill='url(#bronze1)'/>
  <path d='M200 130 C200 70, 280 60, 350 90 C410 120, 440 210, 430 350' stroke='url(#propRim)' stroke-width='5.5' fill='none'/>
  <path d='M440 440 C500 560, 570 680, 650 720 C720 750, 760 690, 750 620 C730 510, 590 440, 470 420 Z' fill='url(#bronze1)'/>
  <path d='M470 420 C590 440, 730 510, 750 620 C760 690, 720 750, 650 720' stroke='url(#propRim)' stroke-width='6.5' fill='none'/>
  <ellipse cx='425' cy='415' rx='78' ry='62' fill='url(#bronze2)' transform='rotate(-15 425 415)'/>
  <ellipse cx='420' cy='410' rx='52' ry='42' fill='url(#bronze1)' transform='rotate(-15 420 410)'/>
  <ellipse cx='415' cy='405' rx='30' ry='24' fill='#fae29f' transform='rotate(-15 415 405)' opacity='0.9'/>
  <circle cx='330' cy='150' r='5' fill='#ffffff' opacity='0.85'/>
  <circle cx='260' cy='120' r='4' fill='#ffffff' opacity='0.9'/>
  <circle cx='590' cy='630' r='6' fill='#ffffff' opacity='0.85'/>
  <circle cx='650' cy='660' r='5.5' fill='#ffffff' opacity='0.9'/>
  <circle cx='400' cy='395' r='6' fill='#ffffff' opacity='0.95'/>
</svg>`;

export const HERO_BG = svgToDataUri(heroBgSvg);
export const SPLASH = svgToDataUri(splashSvg);
export const PIPES = svgToDataUri(pipesSvg);
export const S2_BG = svgToDataUri(s2BgSvg);
export const TANK = svgToDataUri(tankSvg);
export const PROPELLER = svgToDataUri(propSvg);

export const EMAIL = 'info@istsb.com';
export const PHONE = '+604 - 501 7073';
export const ADDRESS = 'Lot 1024 (2), Juru, 14100 Simpang Ampat, Penang, Malaysia';

export const PHOTOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `https://www.istsb.com/sliders/${n}.jpg`);
