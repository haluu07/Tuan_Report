/**
 * ==============================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - SUBTLE 3D AMBIENT BACKGROUND SCENE
 * Không gian 3D WebGL nền tinh tế, sang trọng (Constellation & Energy Nodes)
 * - Nằm chìm phía sau nền Hero (không che banner hay nội dung)
 * - Các nút tọa độ trắc địa & hạ tầng 3D kết nối bằng các tia sáng mảnh
 * - Tương tác Parallax mượt mà theo con trỏ chuột
 * ==============================================================================
 */

export function initHero3DScene() {
  const canvas = document.getElementById('hero3dCanvas');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  // Kiểm tra Three.js đã sẵn sàng
  if (typeof THREE === 'undefined') {
    console.warn('[ThreeJS] Thư viện Three.js chưa sẵn sàng.');
    return;
  }

  // 1. Khởi tạo Scene, Camera, Renderer
  const scene = new THREE.Scene();

  let width = heroSection.clientWidth || window.innerWidth;
  let height = heroSection.clientHeight || 700;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.z = 400;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 2. Hệ thống mạng lưới tọa độ trắc địa 3D (Constellation Mesh & Particles)
  const particleCount = 120;
  const maxDistance = 110;

  const particlesData = [];
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Bảng màu công nghệ: Xanh Navy (#13448f), Cyan (#0284c7) và Xanh Lá (#16a34a)
  const colorPalette = [
    new THREE.Color(0x13448f),
    new THREE.Color(0x0284c7),
    new THREE.Color(0x16a34a),
    new THREE.Color(0x22c55e)
  ];

  const r = 450;
  const rHalf = r / 2;

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * r - rHalf;
    const y = Math.random() * (r * 0.7) - (rHalf * 0.7);
    const z = Math.random() * (r * 0.6) - (rHalf * 0.6);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // Vận tốc trôi nhẹ nhàng
    particlesData.push({
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.45,
        (Math.random() - 0.5) * 0.45,
        (Math.random() - 0.5) * 0.35
      ),
      numConnections: 0
    });

    const chosenColor = colorPalette[i % colorPalette.length];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  // Geometry các hạt điểm nút
  const pointGeo = new THREE.BufferGeometry();
  pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  pointGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pointMat = new THREE.PointsMaterial({
    size: 4.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.NormalBlending
  });

  const pointCloud = new THREE.Points(pointGeo, pointMat);
  scene.add(pointCloud);

  // Geometry các tia nối liên kết mạng lưới (Constellation lines)
  const maxLines = particleCount * particleCount;
  const linePositions = new Float32Array(maxLines * 3);
  const lineColors = new Float32Array(maxLines * 3);

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.NormalBlending
  });

  const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(linesMesh);

  // 3. Hai quả cầu hình học đa diện mờ đại diện quy hoạch & năng lượng
  const geoIco = new THREE.IcosahedronGeometry(45, 1);
  const matIco = new THREE.MeshBasicMaterial({
    color: 0x13448f,
    wireframe: true,
    transparent: true,
    opacity: 0.12
  });
  const meshIco = new THREE.Mesh(geoIco, matIco);
  meshIco.position.set(180, 50, -80);
  scene.add(meshIco);

  const geoOct = new THREE.OctahedronGeometry(32, 0);
  const matOct = new THREE.MeshBasicMaterial({
    color: 0x16a34a,
    wireframe: true,
    transparent: true,
    opacity: 0.14
  });
  const meshOct = new THREE.Mesh(geoOct, matOct);
  meshOct.position.set(-200, -60, -60);
  scene.add(meshOct);

  // 4. Parallax mượt mà theo chuyển động chuột
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  function onPointerMove(e) {
    const rect = heroSection.getBoundingClientRect();
    if (e.clientY < rect.top || e.clientY > rect.bottom) return;

    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
    mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 60;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // 5. Vòng lặp Animation & tối ưu hiệu năng
  let isVisible = true;
  let animId = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animId) animate();
    });
  }, { threshold: 0.05 });

  observer.observe(heroSection);

  function animate() {
    if (!isVisible) {
      animId = null;
      return;
    }
    animId = requestAnimationFrame(animate);

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) {
      particlesData[i].numConnections = 0;
    }

    // Cập nhật vị trí các hạt
    for (let i = 0; i < particleCount; i++) {
      const data = particlesData[i];

      positions[i * 3] += data.velocity.x;
      positions[i * 3 + 1] += data.velocity.y;
      positions[i * 3 + 2] += data.velocity.z;

      // Nảy lại khi chạm biên
      if (positions[i * 3] < -rHalf || positions[i * 3] > rHalf) data.velocity.x = -data.velocity.x;
      if (positions[i * 3 + 1] < -rHalf * 0.7 || positions[i * 3 + 1] > rHalf * 0.7) data.velocity.y = -data.velocity.y;
      if (positions[i * 3 + 2] < -rHalf * 0.6 || positions[i * 3 + 2] > rHalf * 0.6) data.velocity.z = -data.velocity.z;

      // Nối các hạt gần nhau
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          particlesData[i].numConnections++;
          particlesData[j].numConnections++;

          const alpha = 1.0 - dist / maxDistance;

          linePositions[vertexpos++] = positions[i * 3];
          linePositions[vertexpos++] = positions[i * 3 + 1];
          linePositions[vertexpos++] = positions[i * 3 + 2];

          linePositions[vertexpos++] = positions[j * 3];
          linePositions[vertexpos++] = positions[j * 3 + 1];
          linePositions[vertexpos++] = positions[j * 3 + 2];

          lineColors[colorpos++] = 0.1;
          lineColors[colorpos++] = 0.45;
          lineColors[colorpos++] = 0.8;

          lineColors[colorpos++] = 0.15;
          lineColors[colorpos++] = 0.7;
          lineColors[colorpos++] = 0.4;

          numConnected++;
        }
      }
    }

    linesMesh.geometry.setDrawRange(0, numConnected * 2);
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;
    pointCloud.geometry.attributes.position.needsUpdate = true;

    // Xoay nhẹ hai khối hình học
    meshIco.rotation.y += 0.003;
    meshIco.rotation.x += 0.002;
    meshOct.rotation.y -= 0.004;
    meshOct.rotation.z += 0.002;

    // Camera Lerp theo chuột
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX;
    camera.position.y = targetY;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

  // 6. Xử lý Resize cửa sổ
  function handleResize() {
    width = heroSection.clientWidth || window.innerWidth;
    height = heroSection.clientHeight || 700;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', handleResize, { passive: true });
}
