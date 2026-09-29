// script.js
(function() {
  // ====== Floating hearts ======
  const heartLayer = document.getElementById('heartLayer');
  const heartCount = 35;

  const heartSymbols = ['❤️', '💖', '💗', '💓', '💕', '🌸', '✨', '💘', '💝'];
  const colors = [
    'rgba(255, 150, 200, 0.9)',
    'rgba(255, 120, 180, 0.8)',
    'rgba(255, 180, 210, 0.85)',
    'rgba(255, 100, 160, 0.7)',
    'rgba(255, 200, 220, 0.8)',
    'rgba(255, 80, 140, 0.7)'
  ];

  const rand = (min, max) => Math.random() * (max - min) + min;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.fontSize = rand(0.9, 2.2) + 'rem';
    heart.style.left = rand(0, 100) + '%';
    heart.style.animationDelay = rand(0, 8) + 's';
    heart.style.animationDuration = rand(6, 14) + 's';
    if (Math.random() > 0.6) {
      heart.style.filter = `drop-shadow(0 0 8px rgba(255, 80, 150, 0.8)) blur(0.5px)`;
    }
    heartLayer.appendChild(heart);
  }

  // ====== Sunflower bouquet builder ======
  function buildSunflowers() {
    const container = document.getElementById('sunflowers');
    if (!container || container.dataset.built === 'true') return;
    container.dataset.built = 'true';

    // Configuration for each sunflower: horizontal offset, stem height, delay, head scale
    const sunflowersData = [
      { x: -110, stem: 100, delay: 0.4, scale: 1.1 },
      { x: -60,  stem: 130, delay: 0.2, scale: 0.95 },
      { x: 0,    stem: 155, delay: 0.0, scale: 1.15 },
      { x: 60,   stem: 130, delay: 0.3, scale: 0.95 },
      { x: 110,  stem: 100, delay: 0.5, scale: 1.1 }
    ];

    // Colors for petals variations
    const petalGradients = [
      'linear-gradient(180deg, #ffe066 0%, #ffcc00 50%, #e6a800 100%)',
      'linear-gradient(180deg, #ffe680 0%, #ffcc33 50%, #e6a800 100%)',
      'linear-gradient(180deg, #ffeb99 0%, #ffd633 50%, #e6a800 100%)'
    ];

    sunflowersData.forEach((data) => {
      const flower = document.createElement('div');
      flower.className = 'sunflower';
      flower.style.left = `calc(50% + ${data.x}px)`;
      flower.style.bottom = '30px';
      flower.style.animationDelay = data.delay + 's';
      flower.style.transform = `scale(${data.scale})`;
      flower.style.zIndex = data.x === 0 ? 15 : 10 - Math.abs(data.x) / 60;

      // Flower head wrapper
      const head = document.createElement('div');
      head.className = 'flower-head';

      // Add petals around the head
      const petalCount = 12;
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const angle = (i / petalCount) * 360;
        petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
        petal.style.transformOrigin = '50% 100%';
        // Slight variation in petal size
        const petalScale = 0.9 + Math.random() * 0.25;
        petal.style.transform += ` scale(${petalScale})`;
        // Random gradient variation
        petal.style.background = petalGradients[i % petalGradients.length];
        head.appendChild(petal);
      }

      // Stem
      const stem = document.createElement('div');
      stem.className = 'flower-stem';
      stem.style.height = data.stem + 'px';
      stem.style.width = '6px';

      // Leaves (optional, adds realism)
      const leafLeft = document.createElement('div');
      leafLeft.className = 'leaf left';
      leafLeft.style.bottom = (data.stem * 0.4) + 'px';

      const leafRight = document.createElement('div');
      leafRight.className = 'leaf right';
      leafRight.style.bottom = (data.stem * 0.55) + 'px';

      // Assemble flower: head + stem + leaves
      const flowerBody = document.createElement('div');
      flowerBody.style.position = 'relative';
      flowerBody.style.display = 'flex';
      flowerBody.style.flexDirection = 'column';
      flowerBody.style.alignItems = 'center';

      flowerBody.appendChild(head);
      flowerBody.appendChild(stem);
      flowerBody.appendChild(leafLeft);
      flowerBody.appendChild(leafRight);

      flower.appendChild(flowerBody);
      container.appendChild(flower);
    });
  }

  // ====== Button interactions ======
  const giftBtn = document.getElementById('giftBtn');
  const backBtn = document.getElementById('backBtn');
  const body = document.body;

  giftBtn.addEventListener('click', () => {
    buildSunflowers();
    body.classList.add('revealed');
  });

  backBtn.addEventListener('click', () => {
    body.classList.remove('revealed');
  });

  // Log for confirmation
  console.log('❤️ Love animation loaded for Babi Zoi ❤️');
})();