// ============================================
// QUESTIONS DATA
// ============================================
const questions = [
  {
    id: 1,
    level: 1,
    levelName: "Nhận biết hình khối cơ bản",
    type: "identify",
    questionText: "Hình vẽ màu tím dưới đây là hình khối nào?",
    shapeVisualId: "cube_standard",
    options: ["Khối lập phương", "Khối hộp chữ nhật", "Khối trụ", "Khối cầu"],
    correctAnswer: "Khối lập phương",
    explanation: "Khối lập phương có 6 mặt phẳng bằng nhau và tất cả các mặt đều là hình vuông.",
    scoreValue: 10
  },
  {
    id: 2,
    level: 1,
    levelName: "Nhận biết hình khối cơ bản",
    type: "identify",
    questionText: "Hình vẽ màu xanh dương dưới đây là hình khối nào?",
    shapeVisualId: "cuboid_standard",
    options: ["Khối lập phương", "Khối hộp chữ nhật", "Khối trụ", "Khối cầu"],
    correctAnswer: "Khối hộp chữ nhật",
    explanation: "Khối hộp chữ nhật có 6 mặt phẳng và các mặt của nó đều có dạng hình chữ nhật.",
    scoreValue: 10
  },
  {
    id: 3,
    level: 1,
    levelName: "Nhận biết hình khối cơ bản",
    type: "identify",
    questionText: "Hình vẽ màu xanh lá cây dưới đây là hình khối nào?",
    shapeVisualId: "cylinder_standard",
    options: ["Khối cầu", "Khối nón", "Khối trụ", "Khối lập phương"],
    correctAnswer: "Khối trụ",
    explanation: "Khối trụ có 2 mặt đáy phẳng hình tròn bằng nhau và mặt xung quanh cong tròn.",
    scoreValue: 10
  },
  {
    id: 4,
    level: 1,
    levelName: "Nhận biết hình khối cơ bản",
    type: "identify",
    questionText: "Hình vẽ tròn trịa màu cam dưới đây là hình khối nào?",
    shapeVisualId: "sphere_standard",
    options: ["Khối cầu", "Khối nón", "Khối trụ", "Khối hộp chữ nhật"],
    correctAnswer: "Khối cầu",
    explanation: "Khối cầu có bề mặt hoàn toàn cong tròn, không có cạnh hay đỉnh, giống như quả bóng.",
    scoreValue: 10
  },
  {
    id: 5,
    level: 2,
    levelName: "Thử thách tinh mắt đếm hình",
    type: "count",
    questionText: "Bé hãy quan sát hình vẽ và đếm xem có bao nhiêu khối lập phương được xếp chồng lên nhau?",
    shapeVisualId: "count_cubes_l_shape",
    options: ["3 khối", "4 khối", "5 khối", "6 khối"],
    correctAnswer: "4 khối",
    explanation: "Hàng dưới có 3 khối lập phương xếp sát nhau và hàng trên có 1 khối xếp chồng lên khối phía bên trái. Tổng cộng có 3 + 1 = 4 khối.",
    scoreValue: 15
  },
  {
    id: 6,
    level: 2,
    levelName: "Thử thách tinh mắt đếm hình",
    type: "count",
    questionText: "Hãy đếm xem có bao nhiêu khối trụ màu xanh lá cây xuất hiện trong bức tranh dưới đây?",
    shapeVisualId: "count_cylinders_mixed",
    options: ["2 khối", "3 khối", "4 khối", "5 khối"],
    correctAnswer: "3 khối",
    explanation: "Bé đếm kỹ nhé: Có 3 khối trụ đứng màu xanh lá cây. Ngoài ra còn có 2 khối hộp chữ nhật màu xanh dương nữa đấy!",
    scoreValue: 15
  },
  {
    id: 7,
    level: 2,
    levelName: "Thử thách tinh mắt đếm hình",
    type: "count",
    questionText: "Bé hãy đếm xem có bao nhiêu khối cầu màu cam trong chiếc rổ đựng này?",
    shapeVisualId: "count_spheres_basket",
    options: ["3 khối", "4 khối", "5 khối", "6 khối"],
    correctAnswer: "5 khối",
    explanation: "Có tất cả 5 khối cầu màu cam: 2 khối ở phía sau và 3 khối ở phía trước bên trong rổ.",
    scoreValue: 15
  },
  {
    id: 8,
    level: 2,
    levelName: "Thử thách tinh mắt đếm hình",
    type: "count",
    questionText: "Ngôi nhà mặt trời trong bức tranh dưới đây chứa bao nhiêu hình tam giác?",
    shapeVisualId: "count_shapes_house",
    options: ["1 hình tam giác", "2 hình tam giác", "3 hình tam giác", "4 hình tam giác"],
    correctAnswer: "1 hình tam giác",
    explanation: "Chỉ có đúng 1 hình tam giác làm mái nhà màu hồng đỏ thôi bé nhé. Thân nhà là hình chữ nhật lớn, cửa ra vào là hình chữ nhật xanh và cửa sổ là hai hình vuông.",
    scoreValue: 15
  },
  {
    id: 9,
    level: 3,
    levelName: "Hình khối trong cuộc sống",
    type: "match",
    questionText: "Quả bóng đá quen thuộc của các bạn nhỏ có dạng hình khối nào?",
    shapeVisualId: "soccer_ball",
    options: ["Khối lập phương", "Khối trụ", "Khối nón", "Khối cầu"],
    correctAnswer: "Khối cầu",
    explanation: "Quả bóng đá tròn trịa có dạng khối cầu để nó có thể dễ dàng lăn đi khắp mọi hướng khi đá.",
    scoreValue: 20
  },
  {
    id: 10,
    level: 3,
    levelName: "Hình khối trong cuộc sống",
    type: "match",
    questionText: "Đồ chơi Rubik kỳ diệu dưới đây có dạng hình khối nào?",
    shapeVisualId: "rubik",
    options: ["Khối lập phương", "Khối hộp chữ nhật", "Khối trụ", "Khối cầu"],
    correctAnswer: "Khối lập phương",
    explanation: "Đồ chơi khối rubik có tất cả 6 mặt phẳng đều là những hình vuông bằng nhau, nên nó có dạng khối lập phương.",
    scoreValue: 20
  },
  {
    id: 11,
    level: 3,
    levelName: "Hình khối trong cuộc sống",
    type: "match",
    questionText: "Lon nước ngọt Coca-Cola mát lạnh này có dạng hình khối nào?",
    shapeVisualId: "soft_drink_can",
    options: ["Khối lập phương", "Khối nón", "Khối trụ", "Khối hộp chữ nhật"],
    correctAnswer: "Khối trụ",
    explanation: "Lon nước ngọt có 2 đáy phẳng hình tròn và thân thon tròn dài, mang hình dáng chuẩn xác của một khối trụ.",
    scoreValue: 20
  },
  {
    id: 12,
    level: 3,
    levelName: "Hình khối trong cuộc sống",
    type: "match",
    questionText: "Chiếc mũ sinh nhật sặc sỡ này có dạng hình khối nào?",
    shapeVisualId: "party_hat",
    options: ["Khối nón", "Khối trụ", "Khối cầu", "Khối hộp chữ nhật"],
    correctAnswer: "Khối nón",
    explanation: "Mũ sinh nhật có đáy phẳng hình tròn và nhọn hoắt dần lên phía đỉnh, đó chính là khối nón.",
    scoreValue: 20
  },
  {
    id: 13,
    level: 4,
    levelName: "Thử thách thông minh",
    type: "logic",
    questionText: "Trong các nhóm hình khối dưới đây, nhóm nào gồm các khối có thể dễ dàng LĂN ĐƯỢC?",
    shapeVisualId: "sphere_standard",
    options: ["Khối lập phương và khối hộp chữ nhật", "Khối cầu và khối trụ", "Chỉ riêng khối lập phương", "Khối hộp chữ nhật và khối nón"],
    correctAnswer: "Khối cầu và khối trụ",
    explanation: "Khối cầu có bề mặt hoàn toàn cong nên có thể lăn được về mọi phía. Khối trụ cũng có mặt xung quanh cong nên khi đặt nằm ngang cũng có thể lăn được.",
    scoreValue: 25
  },
  {
    id: 14,
    level: 4,
    levelName: "Thử thách thông minh",
    type: "logic",
    questionText: "Khi xây dựng hoặc xếp hình đồ chơi, các loại khối nào dễ xếp chồng lên nhau vững chắc nhất mà không bị ngã?",
    shapeVisualId: "stack_puzzles",
    options: ["Khối cầu", "Khối nón", "Khối lập phương và khối hộp chữ nhật", "Không khối nào xếp được cả"],
    correctAnswer: "Khối lập phương và khối hộp chữ nhật",
    explanation: "Khối lập phương và khối hộp chữ nhật có các mặt phẳng làm bệ đỡ vững chắc, giúp chúng có thể chồng lên nhau dễ dàng mà không bị trượt ngã như khối cầu.",
    scoreValue: 25
  },
  {
    id: 15,
    level: 4,
    levelName: "Thử thách thông minh",
    type: "logic",
    questionText: "Nếu bé ghép hai khối lập phương bằng nhau khít sát lại, bé sẽ nhận được một khối mới có dạng hình gì?",
    shapeVisualId: "cube_standard",
    options: ["Một khối cầu lớn", "Một khối hộp chữ nhật", "Một khối lập phương to hơn", "Một khối trụ tròn"],
    correctAnswer: "Một khối hộp chữ nhật",
    explanation: "Khi ghép sát hai khối lập phương, một chiều của khối sẽ dài ra gấp đôi, các chiều còn lại không đổi, tạo thành hình hộp chữ nhật hoàn hảo.",
    scoreValue: 25
  }
];

// ============================================
// SOUND CONTROLLER
// ============================================
class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    try {
      this.initContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  playCorrect() {
    if (this.muted) return;
    try {
      this.initContext();
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      osc1.type = 'triangle';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.setValueAtTime(659.25, now + 0.1);
      osc1.frequency.setValueAtTime(783.99, now + 0.2);
      osc2.frequency.setValueAtTime(1046.50, now);
      osc2.frequency.setValueAtTime(1318.51, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.5);
      osc2.stop(now + 0.5);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  playIncorrect() {
    if (this.muted) return;
    try {
      this.initContext();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.3);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  playVictory() {
    if (this.muted) return;
    try {
      this.initContext();
      const now = this.ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      const duration = 0.12;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * duration);
        gain.gain.setValueAtTime(0.15, now + idx * duration);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * duration + duration * 1.5);
        osc.start(now + idx * duration);
        osc.stop(now + idx * duration + duration * 2);
      });
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }
}

const sound = new SoundController();

// ============================================
// SHAPE VISUALIZER SVG
// ============================================
function generateShapeSVG(id) {
  const svgs = {
    cube_standard: `<svg viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A5B4FC" />
          <stop offset="100%" stop-color="#818CF8" />
        </linearGradient>
        <linearGradient id="cubeFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6366F1" />
          <stop offset="100%" stop-color="#4F46E5" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4338CA" />
          <stop offset="100%" stop-color="#312E81" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="60" ry="15" fill="rgba(0,0,0,0.1)" />
      <polygon points="100,40 160,70 100,100 40,70" fill="url(#cubeTop)" stroke="#4F46E5" stroke-width="2" stroke-linejoin="round" />
      <polygon points="40,70 100,100 100,170 40,140" fill="url(#cubeFront)" stroke="#4F46E5" stroke-width="2" stroke-linejoin="round" />
      <polygon points="100,100 160,70 160,140 100,170" fill="url(#cubeRight)" stroke="#312E81" stroke-width="2" stroke-linejoin="round" />
    </svg>`,
    
    cuboid_standard: `<svg viewBox="0 0 220 200" width="220" height="200">
      <defs>
        <linearGradient id="cuboidTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </linearGradient>
        <linearGradient id="cuboidFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="170" rx="80" ry="15" fill="rgba(0,0,0,0.1)" />
      <polygon points="110,45 190,70 110,95 30,70" fill="url(#cuboidTop)" stroke="#0284C7" stroke-width="2" />
      <polygon points="30,70 110,95 110,155 30,130" fill="url(#cuboidFront)" stroke="#0284C7" stroke-width="2" />
      <polygon points="110,95 190,70 190,130 110,155" fill="#075985" stroke="#075985" stroke-width="2" />
    </svg>`,
    
    cylinder_standard: `<svg viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <linearGradient id="cylinderSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="30%" stop-color="#10B981" />
          <stop offset="70%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="165" rx="50" ry="15" fill="rgba(0,0,0,0.1)" />
      <path d="M 50,70 L 50,155 A 50,15 0 0,0 150,155 L 150,70 A 50,15 0 0,1 50,70 Z" fill="url(#cylinderSide)" stroke="#047857" stroke-width="2" />
      <ellipse cx="100" cy="70" rx="50" ry="15" fill="#A7F3D0" stroke="#10B981" stroke-width="2" />
    </svg>`,
    
    sphere_standard: `<svg viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FDBA74" />
          <stop offset="50%" stop-color="#F97316" />
          <stop offset="90%" stop-color="#EA580C" />
          <stop offset="100%" stop-color="#9A3412" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="165" rx="55" ry="15" fill="rgba(0,0,0,0.12)" />
      <circle cx="100" cy="100" r="60" fill="url(#sphereGrad)" stroke="#EA580C" stroke-width="2" />
      <path d="M 45,95 A 55,20 0 0,0 155,95" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
    </svg>`,
    
    count_cubes_l_shape: `<svg viewBox="0 0 220 200" width="220" height="200">
      <ellipse cx="110" cy="170" rx="80" ry="12" fill="rgba(0,0,0,0.1)" />
      <g stroke="#312E81" stroke-width="1.5">
        <polygon points="60,120 100,140 100,180 60,160" fill="#818CF8" />
        <polygon points="100,120 140,140 140,180 100,160" fill="#6366F1" />
        <polygon points="140,120 180,140 180,180 140,160" fill="#4F46E5" />
        <polygon points="60,60 100,80 100,120 60,100" fill="#A5B4FC" />
      </g>
    </svg>`,
    
    count_cylinders_mixed: `<svg viewBox="0 0 240 200" width="240" height="200">
      <ellipse cx="120" cy="170" rx="95" ry="15" fill="rgba(0,0,0,0.1)" />
      <g>
        <ellipse cx="50" cy="140" rx="20" ry="5" fill="rgba(0,0,0,0.1)" />
        <path d="M 30,80 L 30,135 A 20,5 0 0,0 70,135 L 70,80 A 20,5 0 0,1 30,80 Z" fill="#10B981" stroke="#047857" stroke-width="2" />
        <ellipse cx="50" cy="80" rx="20" ry="5" fill="#A7F3D0" stroke="#059669" stroke-width="2" />
        <ellipse cx="140" cy="140" rx="20" ry="5" fill="rgba(0,0,0,0.1)" />
        <path d="M 120,80 L 120,135 A 20,5 0 0,0 160,135 L 160,80 A 20,5 0 0,1 120,80 Z" fill="#10B981" stroke="#047857" stroke-width="2" />
        <ellipse cx="140" cy="80" rx="20" ry="5" fill="#A7F3D0" stroke="#059669" stroke-width="2" />
      </g>
    </svg>`,
    
    count_spheres_basket: `<svg viewBox="0 0 220 200" width="220" height="200">
      <path d="M 40,130 A 70,25 0 0,1 180,130" fill="none" stroke="#94A3B8" stroke-width="3" />
      <circle cx="60" cy="80" r="25" fill="radial-gradient(circle, #FDBA74 20%, #F97316 70%)" stroke="#C2410C" stroke-width="2" />
      <circle cx="120" cy="70" r="23" fill="radial-gradient(circle, #FDBA74 20%, #F97316 70%)" stroke="#C2410C" stroke-width="2" />
      <circle cx="85" cy="110" r="26" fill="radial-gradient(circle, #FDBA74 20%, #F97316 70%)" stroke="#C2410C" stroke-width="2" />
      <circle cx="50" cy="140" r="27" fill="radial-gradient(circle, #FDBA74 20%, #F97316 70%)" stroke="#C2410C" stroke-width="2" />
      <circle cx="130" cy="135" r="27" fill="radial-gradient(circle, #FDBA74 20%, #F97316 70%)" stroke="#C2410C" stroke-width="2" />
      <path d="M 40,130 A 70,25 0 0,0 180,130 C 170,180 50,180 40,130 Z" fill="#64748B" fill-opacity="0.8" stroke="#475569" stroke-width="4" />
    </svg>`,
    
    count_shapes_house: `<svg viewBox="0 0 240 200" width="240" height="200">
      <line x1="20" y1="170" x2="220" y2="170" stroke="#94A3B8" stroke-width="3" />
      <rect x="60" y="90" width="100" height="70" fill="#FEF08A" stroke="#CA8A04" stroke-width="3" />
      <polygon points="50,90 110,40 170,90" fill="#FECACA" stroke="#EF4444" stroke-width="3" />
      <rect x="95" y="120" width="30" height="40" fill="#93C5FD" stroke="#2563EB" stroke-width="2" />
      <rect x="70" y="105" width="18" height="18" fill="#FFF" stroke="#B45309" stroke-width="2" />
      <rect x="132" y="105" width="18" height="18" fill="#FFF" stroke="#B45309" stroke-width="2" />
      <circle cx="190" cy="50" r="18" fill="#FDE047" stroke="#EA580C" stroke-width="2" />
    </svg>`,
    
    soccer_ball: `<svg viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <radialGradient id="ballGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="70%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#475569" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="165" rx="55" ry="12" fill="rgba(0,0,0,0.15)" />
      <circle cx="100" cy="100" r="55" fill="url(#ballGrad)" stroke="#334155" stroke-width="3" />
      <polygon points="100,85 115,96 109,114 91,114 85,96" fill="#1E293B" stroke="#334155" stroke-width="2" />
    </svg>`,
    
    rubik: `<svg viewBox="0 0 200 200" width="200" height="200">
      <g stroke="#1E293B" stroke-width="3">
        <polygon points="100,35 155,62 100,90 45,62" fill="#FBBF24" />
        <polygon points="45,62 100,90 100,158 45,130" fill="#2563EB" />
        <polygon points="100,90 155,62 155,130 100,158" fill="#DC2626" />
      </g>
    </svg>`,
    
    soft_drink_can: `<svg viewBox="0 0 200 200" width="200" height="200">
      <ellipse cx="100" cy="165" rx="42" ry="10" fill="rgba(0,0,0,0.15)" />
      <path d="M 60,150 L 60,158 A 40,10 0 0,0 140,158 L 140,150 Z" fill="#94A3B8" stroke="#475569" stroke-width="1" />
      <path d="M 60,65 L 60,150 A 40,10 0 0,0 140,150 L 140,65 A 40,10 0 0,1 60,65 Z" fill="#EF4444" stroke="#991B1B" stroke-width="1" />
      <text x="100" y="115" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle" font-family="sans-serif">COLA</text>
      <ellipse cx="100" cy="65" rx="40" ry="10" fill="#94A3B8" stroke="#475569" stroke-width="1.5" />
    </svg>`,
    
    party_hat: `<svg viewBox="0 0 200 200" width="200" height="200">
      <ellipse cx="100" cy="165" rx="45" ry="10" fill="rgba(0,0,0,0.1)" />
      <path d="M 100,35 L 145,160 A 45,10 0 0,1 55,160 Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" />
      <circle cx="100" cy="35" r="9" fill="#EF4444" stroke="#DC2626" stroke-width="1" />
    </svg>`,

    stack_puzzles: `<svg viewBox="0 0 200 200" width="200" height="200">
      <ellipse cx="100" cy="170" rx="60" ry="10" fill="rgba(0,0,0,0.08)" />
      <polygon points="60,90 100,110 60,130 20,110" fill="#38BDF8" />
      <polygon points="20,110 60,130 60,170 20,150" fill="#0284C7" />
      <polygon points="60,130 100,110 100,150 60,170" fill="#075985" />
      <ellipse cx="50" cy="140" rx="30" ry="8" fill="rgba(0,0,0,0.15)" />
      <path d="M 20,60 L 20,130 A 30,8 0 0,0 80,130 L 80,60 A 30,8 0 0,1 20,60 Z" fill="#10B981" stroke="#047857" stroke-width="2" />
      <ellipse cx="50" cy="60" rx="30" ry="8" fill="#A7F3D0" stroke="#059669" stroke-width="2" />
    </svg>`
  };

  return svgs[id] || '<svg></svg>';
}

// ============================================
// GAME STATE & LOGIC
// ============================================
let gameState = {
  screen: 'welcome',
  player: null,
  currentQuestionIndex: 0,
  score: 0,
  totalAnswered: 0,
  correctCount: 0,
  incorrectCount: 0,
  timeSpent: 0,
  userAnswers: {},
  timeLeft: 30,
  selectedAnswer: null,
  isAnswered: false,
  gameHistory: [],
  isMuted: false,
  timerInterval: null,
  totalTimeInterval: null,
  submitStatus: 'idle'
};

// ============================================
// STORAGE MANAGEMENT
// ============================================
function loadFromStorage() {
  const savedHistory = localStorage.getItem('math_game_history');
  if (savedHistory) {
    gameState.gameHistory = JSON.parse(savedHistory);
  }
  const savedMute = localStorage.getItem('math_game_muted');
  if (savedMute) {
    gameState.isMuted = JSON.parse(savedMute);
  }
}

function saveToStorage() {
  localStorage.setItem('math_game_history', JSON.stringify(gameState.gameHistory));
  localStorage.setItem('math_game_muted', JSON.stringify(gameState.isMuted));
}

// ============================================
// SCREEN MANAGEMENT
// ============================================
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const screen = document.getElementById(`${screenName}-screen`);
  if (screen) {
    screen.classList.add('active');
  }
  gameState.screen = screenName;
}

// ============================================
// WELCOME SCREEN
// ============================================
function initWelcomeScreen() {
  const nameInput = document.getElementById('player-name');
  const classInput = document.getElementById('player-class');
  const form = document.getElementById('login-form');
  const soundBtn = document.getElementById('toggle-sound-btn');

  // Load saved data
  const savedName = localStorage.getItem('math_game_player_name');
  const savedClass = localStorage.getItem('math_game_player_class');
  if (savedName) nameInput.value = savedName;
  if (savedClass) classInput.value = savedClass;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sound.playClick();

    const name = nameInput.value.trim();
    const playerClass = classInput.value.trim();
    let hasError = false;

    document.getElementById('error-name').textContent = '';
    document.getElementById('error-class').textContent = '';

    if (!name) {
      document.getElementById('error-name').textContent = 'Bé hãy nhập họ và tên của mình nhé!';
      hasError = true;
    } else if (name.length < 2) {
      document.getElementById('error-name').textContent = 'Tên của bé dường như quá ngắn đấy!';
      hasError = true;
    }

    if (!playerClass) {
      document.getElementById('error-class').textContent = 'Bé hãy điền tên lớp học của mình nhé!';
      hasError = true;
    }

    if (hasError) {
      sound.playIncorrect();
      return;
    }

    localStorage.setItem('math_game_player_name', name);
    localStorage.setItem('math_game_player_class', playerClass);

    gameState.player = { name, className: playerClass };
    startGame();
  });

  soundBtn.addEventListener('click', () => {
    gameState.isMuted = sound.toggleMute();
    saveToStorage();
    updateSoundButton();
    sound.playClick();
  });

  updateHistoryTable();
  updateQuickStats();
  updateSoundButton();
}

function updateQuickStats() {
  const quickStats = document.getElementById('quick-stats');
  if (gameState.gameHistory.length > 0) {
    quickStats.style.display = 'grid';
    const highestScore = Math.max(...gameState.gameHistory.map(g => g.score));
    document.getElementById('highest-score').textContent = highestScore + 'đ';
    document.getElementById('total-games').textContent = gameState.gameHistory.length + ' lượt';
  }
}

function updateHistoryTable() {
  const tbody = document.getElementById('history-tbody');
  const section = document.getElementById('history-section');
  tbody.innerHTML = '';

  if (gameState.gameHistory.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  gameState.gameHistory.slice(0, 5).forEach((record) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="player-name">${record.name}</td>
      <td>${record.className}</td>
      <td class="score">${record.score}đ</td>
      <td><span class="correct">✓ ${record.correctCount || 0}</span> | <span class="incorrect">✗ ${record.incorrectCount || 0}</span></td>
      <td>${record.timeSpentSeconds} giây</td>
      <td>${record.date}</td>
      <td>
        <span class="status-${record.submitted ? 'sent' : 'pending'}">
          ${record.submitted ? 'Đã gửi Sheet ✓' : 'Chưa gửi'}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================
// GAME SCREEN
// ============================================
function startGame() {
  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.totalAnswered = 0;
  gameState.correctCount = 0;
  gameState.incorrectCount = 0;
  gameState.timeSpent = 0;
  gameState.userAnswers = {};
  gameState.selectedAnswer = null;
  gameState.isAnswered = false;

  showScreen('game');
  
  document.getElementById('game-name').textContent = gameState.player.name;
  document.getElementById('game-class').textContent = gameState.player.className;

  // Start total time tracking
  gameState.totalTimeInterval = setInterval(() => {
    gameState.timeSpent++;
  }, 1000);

  renderQuestion();
  setupGameEvents();
}

function setupGameEvents() {
  document.getElementById('toggle-sound-game').addEventListener('click', () => {
    gameState.isMuted = sound.toggleMute();
    saveToStorage();
    updateSoundButton();
  });

  document.getElementById('btn-early-submit').addEventListener('click', () => {
    if (confirm('Bé có chắc chắn muốn nộp bài sớm không?')) {
      finishGame();
    }
  });
}

function renderQuestion() {
  const q = questions[gameState.currentQuestionIndex];
  gameState.timeLeft = 30;
  gameState.selectedAnswer = null;
  gameState.isAnswered = false;

  // Update header
  document.getElementById('live-score').textContent = gameState.score + 'đ';
  document.getElementById('question-counter').textContent = `${gameState.currentQuestionIndex + 1}/${questions.length}`;
  document.getElementById('level-badge').textContent = q.levelName;

  const progress = ((gameState.currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';

  // Render question
  document.getElementById('question-box').innerHTML = `<h3>${q.questionText}</h3>`;

  // Render shape
  document.getElementById('shape-container').innerHTML = generateShapeSVG(q.shapeVisualId);

  // Render options
  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';
  q.options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
      <span>${option}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(option));
    optionsGrid.appendChild(btn);
  });

  // Hide feedback
  document.getElementById('feedback-box').style.display = 'none';

  // Start timer
  startTimer();
}

function startTimer() {
  if (gameState.timerInterval) clearInterval(gameState.timerInterval);

  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerDisplay();

    if (gameState.timeLeft <= 5) {
      document.getElementById('timer-box').classList.add('warning');
    }

    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timerInterval);
      timeOut();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('timer').textContent = gameState.timeLeft;
}

function selectAnswer(option) {
  if (gameState.isAnswered) return;

  clearInterval(gameState.timerInterval);
  gameState.selectedAnswer = option;
  gameState.isAnswered = true;

  const q = questions[gameState.currentQuestionIndex];
  gameState.userAnswers[q.id] = option;

  const isCorrect = option === q.correctAnswer;

  if (isCorrect) {
    sound.playCorrect();
    gameState.score += q.scoreValue;
    gameState.correctCount++;
  } else {
    sound.playIncorrect();
    gameState.incorrectCount++;
  }

  gameState.totalAnswered++;

  // Update UI
  document.getElementById('live-score').textContent = gameState.score + 'đ';

  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    const btnText = btn.querySelector('span:last-child').textContent;
    if (btnText === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (btnText === option && !isCorrect) {
      btn.classList.add('incorrect');
    } else {
      btn.classList.add('disabled');
    }
  });

  showFeedback(isCorrect, q);
}

function timeOut() {
  gameState.isAnswered = true;
  gameState.incorrectCount++;
  gameState.totalAnswered++;

  const q = questions[gameState.currentQuestionIndex];
  gameState.userAnswers[q.id] = 'Hết giờ';

  sound.playIncorrect();

  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach((btn) => {
    btn.disabled = true;
    btn.classList.add('disabled');
  });

  const correctOption = optionBtns.find(btn => btn.querySelector('span:last-child').textContent === q.correctAnswer);
  if (correctOption) {
    correctOption.classList.remove('disabled');
    correctOption.classList.add('correct');
  }

  showFeedback(false, q, true);
}

function showFeedback(isCorrect, q, isTimeout = false) {
  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.innerHTML = `
    <div class="feedback-header">
      <div class="feedback-icon ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '✓' : isTimeout ? '⏰' : '✗'}
      </div>
      <div class="feedback-content">
        <div class="feedback-title ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? 'Chính xác! Bé giỏi quá! 🎉' : isTimeout ? 'Hết giờ rồi bé ơi! ⏰' : 'Chưa đúng rồi bé ơi! Cố gắng câu sau nhé! 💪'}
        </div>
        <div class="feedback-explanation">
          <strong>Gợi ý kiến thức:</strong> ${q.explanation}
        </div>
        <button class="btn-next-question" onclick="nextQuestion()">
          <span>${gameState.currentQuestionIndex + 1 < questions.length ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `;
  feedbackBox.style.display = 'block';
}

function nextQuestion() {
  sound.playClick();
  if (gameState.currentQuestionIndex + 1 < questions.length) {
    gameState.currentQuestionIndex++;
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(gameState.timerInterval);
  clearInterval(gameState.totalTimeInterval);

  // Save record
  const dateStr = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const record = {
    id: `record_${Date.now()}`,
    name: gameState.player.name,
    className: gameState.player.className,
    score: gameState.score,
    totalQuestions: gameState.totalAnswered,
    correctCount: gameState.correctCount,
    incorrectCount: gameState.incorrectCount,
    timeSpentSeconds: gameState.timeSpent,
    date: dateStr,
    submitted: false,
    answers: gameState.userAnswers
  };

  gameState.gameHistory.unshift(record);
  saveToStorage();

  showResultScreen();
}

// ============================================
// RESULT SCREEN
// ============================================
function showResultScreen() {
  showScreen('result');

  document.getElementById('result-name').textContent = gameState.player.name;
  document.getElementById('result-class').textContent = gameState.player.className;
  document.getElementById('final-score').textContent = gameState.score;
  document.getElementById('final-correct').textContent = gameState.correctCount;
  document.getElementById('final-incorrect').textContent = gameState.incorrectCount;
  document.getElementById('final-time').textContent = gameState.timeSpent;

  // Set achievement
  setAchievementBadge();

  // Setup buttons
  document.getElementById('btn-submit-sheet').addEventListener('click', submitToSheet, { once: true });
  document.getElementById('btn-restart').addEventListener('click', () => {
    sound.playClick();
    showScreen('welcome');
    initWelcomeScreen();
  }, { once: true });

  document.getElementById('btn-toggle-review').addEventListener('click', () => {
    const reviewContent = document.getElementById('review-content');
    const isOpen = reviewContent.style.display !== 'none';
    reviewContent.style.display = isOpen ? 'none' : 'block';
    document.getElementById('btn-toggle-review').classList.toggle('open');
    sound.playClick();
  });

  renderReview();
}

function setAchievementBadge() {
  let badgeName = "Tập Sự Thông Thái";
  let badgeColor = "from-slate-400 to-slate-500 text-slate-800 bg-slate-50";
  let badgeEmoji = "📜";
  let description = "Bé đã có cố gắng rất nhiều! Hãy ôn tập lại các khối và chơi lại để đạt điểm cao hơn nhé!";

  if (gameState.score >= 240) {
    badgeName = "Trạng Nguyên Toán Học";
    badgeColor = "from-yellow-400 to-amber-500 text-amber-900 bg-amber-50";
    badgeEmoji = "👑";
    description = "Tuyệt đỉnh xuất sắc! Bé đã trả lời đúng hết các câu hỏi khó!";
  } else if (gameState.score >= 180) {
    badgeName = "Nhà Khảo Cổ Hình Học";
    badgeColor = "from-sky-400 to-indigo-500 text-indigo-900 bg-indigo-50";
    badgeEmoji = "🕵️‍♂️";
    description = "Bé học hình siêu giỏi! Gần như tất cả câu hỏi đều không làm khó được tư duy của bé!";
  } else if (gameState.score >= 100) {
    badgeName = "Hiệp Sĩ Hình Khối";
    badgeColor = "from-emerald-400 to-teal-500 text-emerald-900 bg-emerald-50";
    badgeEmoji = "🛡️";
    description = "Chúc mừng Hiệp Sĩ! Bé nhận biết các khối rất tốt!";
  }

  document.getElementById('achievement-badge').innerHTML = `${badgeEmoji} ${badgeName}`;
  document.getElementById('achievement-badge').className = `achievement-badge bg-gradient-to-r ${badgeColor}`;
  document.getElementById('achievement-description').textContent = description;
}

function renderReview() {
  const reviewContent = document.getElementById('review-content');
  reviewContent.innerHTML = '';

  questions.forEach((q, idx) => {
    const studentAnswer = gameState.userAnswers[q.id] || 'Chưa trả lời';
    const isCorrect = studentAnswer === q.correctAnswer;

    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <div class="review-question">
        <span class="question-number">${idx + 1}</span>
        <div class="question-text">${q.questionText}</div>
      </div>
      <div class="review-meta">
        <span>Cấp độ: <strong>${q.levelName}</strong></span>
        <span>Điểm số: <strong>+${q.scoreValue}đ</strong></span>
      </div>
      <div class="review-answers">
        <div class="answer-box correct">✓ Đúng: <strong>${q.correctAnswer}</strong></div>
        <div class="answer-box ${isCorrect ? 'correct' : studentAnswer === 'Hết giờ' || studentAnswer === 'Chưa trả lời' ? 'timeout' : 'incorrect'}">
          ${isCorrect ? '✓' : '✗'} Bé chọn: <strong>${studentAnswer}</strong>
        </div>
      </div>
      <div class="explanation-text"><strong>Giải thích:</strong> ${q.explanation}</div>
    `;
    reviewContent.appendChild(item);
  });
}

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHN7IiEhJJmGLjkkA9Eej5eQ8Q5Ai98S934gJkLryr3FVLcItTS73bFq19oVwYkA9KZw/exec";

async function submitToSheet() {
  const btn = document.getElementById('btn-submit-sheet');
  btn.disabled = true;

  const submitFeedback = document.getElementById('submit-feedback');
  submitFeedback.className = 'submit-feedback';
  submitFeedback.style.display = 'block';

  try {
    const now = new Date();
    const dateStr = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const bodyObj = {
      name: gameState.player.name,
      className: gameState.player.className,
      score: gameState.score,
      totalQuestions: gameState.totalAnswered,
      correctCount: gameState.correctCount,
      incorrectCount: gameState.incorrectCount,
      timeSpentSeconds: gameState.timeSpent,
      date: dateStr
    };

    questions.forEach((q, index) => {
      const studentAnswer = gameState.userAnswers[q.id] || 'Chưa trả lời';
      bodyObj[`Question_${index + 1}`] = q.questionText;
      bodyObj[`Correct_${index + 1}`] = q.correctAnswer;
      bodyObj[`Student_${index + 1}`] = studentAnswer;
      bodyObj[`Result_${index + 1}`] = studentAnswer === q.correctAnswer ? 'Đúng' : 'Sai';
    });

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    });

    sound.playVictory();
    submitFeedback.classList.add('success');
    submitFeedback.innerHTML = '✓ Điểm số đã được ghi nhận vào Google Sheets thành công!';
    
    // Mark record as submitted
    const lastRecord = gameState.gameHistory[0];
    if (lastRecord) {
      lastRecord.submitted = true;
      saveToStorage();
    }

    updateHistoryTable();

  } catch (e) {
    console.error('Submit failed', e);
    sound.playIncorrect();
    submitFeedback.classList.add('error');
    submitFeedback.innerHTML = '❌ Không thể kết nối tới Google Sheet. Bé hãy thử lại nhé!';
    btn.disabled = false;
  }
}

function updateSoundButton() {
  const soundBtns = document.querySelectorAll('.sound-btn, .sound-btn-game');
  soundBtns.forEach(btn => {
    btn.innerHTML = gameState.isMuted ? 
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>' :
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a7 7 0 0 1 0 9.9"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  showScreen('welcome');
  initWelcomeScreen();
});
