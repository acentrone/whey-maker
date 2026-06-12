// Whey Maker — high-fidelity imagery components
// Pure CSS+SVG art so the design reads as finished, not placeholder.
// Each component takes minimal props and renders intentional imagery.

// ─────────────────────────────────────────────────────────────
// AthletePortrait — silhouette + skin-tone illustration of an athlete.
// `scale` controls overall size (used to show before/after weight gain).
// `mode` = 'before' (lean) | 'after' (filled out)
// ─────────────────────────────────────────────────────────────
function AthletePortrait({mode='before', tone='warm', sport='football', label}) {
  // Tone palettes — drive bg gradient + figure color
  const tones = {
    warm: { bg: 'linear-gradient(160deg, #f7d9b4 0%, #c98c5d 100%)', figure: '#3a2418', shirt: '#1a1814' },
    cool: { bg: 'linear-gradient(160deg, #c8d6e6 0%, #5b6f8a 100%)', figure: '#2a2418', shirt: '#1a1814' },
    desert: { bg: 'linear-gradient(160deg, #e8c8a6 0%, #8b5a3c 100%)', figure: '#2a1c15', shirt: '#0e0d0b' },
    gym: { bg: 'linear-gradient(160deg, #2a2824 0%, #0e0d0b 100%)', figure: '#f0d4b0', shirt: '#00c6e0' },
  };
  const t = tones[tone] || tones.warm;
  // Body proportions
  const lean = mode === 'before';
  const torsoW = lean ? 38 : 56;
  const armW = lean ? 9 : 16;
  const shoulderW = lean ? 50 : 72;
  const neckW = lean ? 14 : 18;
  return (
    <div style={{position:'absolute',inset:0,background:t.bg,overflow:'hidden'}}>
      {/* Studio light spill */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:'60%',background:'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.35), transparent 60%)'}}/>
      {/* Floor shadow */}
      <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:'70%',height:24,background:'radial-gradient(ellipse, rgba(0,0,0,0.35), transparent 70%)'}}/>
      <svg viewBox="0 0 100 140" preserveAspectRatio="xMidYMax meet" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
        {/* legs */}
        <path d={`M${50-torsoW/3} 100 L${50-torsoW/3 - 2} 140 L${50-torsoW/8} 140 L${50-2} 100 Z`} fill={t.shirt}/>
        <path d={`M${50+torsoW/3} 100 L${50+torsoW/3 + 2} 140 L${50+torsoW/8} 140 L${50+2} 100 Z`} fill={t.shirt}/>
        {/* arms */}
        <path d={`M${50-shoulderW/2} 64 Q${50-shoulderW/2-armW/2} 80 ${50-shoulderW/2.4} 102 L${50-shoulderW/2.4 + armW} 102 Q${50-shoulderW/2+armW/2} 80 ${50-shoulderW/2+armW} 64 Z`} fill={t.figure}/>
        <path d={`M${50+shoulderW/2} 64 Q${50+shoulderW/2+armW/2} 80 ${50+shoulderW/2.4} 102 L${50+shoulderW/2.4 - armW} 102 Q${50+shoulderW/2-armW/2} 80 ${50+shoulderW/2-armW} 64 Z`} fill={t.figure}/>
        {/* torso */}
        <path d={`M${50-shoulderW/2 + 2} 62 Q${50-torsoW/2} 80 ${50-torsoW/2 + 1} 102 L${50+torsoW/2 - 1} 102 Q${50+torsoW/2} 80 ${50+shoulderW/2 - 2} 62 Z`} fill={t.figure}/>
        {/* shirt overlay */}
        <path d={`M${50-shoulderW/2 + 4} 64 Q${50-torsoW/2 + 2} 82 ${50-torsoW/2 + 2} 100 L${50+torsoW/2 - 2} 100 Q${50+torsoW/2 - 2} 82 ${50+shoulderW/2 - 4} 64 Q${50+neckW/2 + 1} 62 50 64 Q${50-neckW/2 - 1} 62 ${50-shoulderW/2 + 4} 64 Z`} fill={t.shirt}/>
        {/* neck */}
        <rect x={50-neckW/2} y={52} width={neckW} height={14} fill={t.figure}/>
        {/* head */}
        <ellipse cx="50" cy="42" rx="13" ry="15" fill={t.figure}/>
        {/* hair cap */}
        <path d="M37 38 Q37 28 50 27 Q63 28 63 38 Q63 36 60 36 Q57 33 50 33 Q43 33 40 36 Q37 36 37 38 Z" fill="#1a0e08" opacity="0.85"/>
      </svg>
      {label && <div style={{position:'absolute',bottom:8,left:0,right:0,textAlign:'center',fontSize:9,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.2em',color:'rgba(255,255,255,0.7)',textTransform:'uppercase'}}>{label}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Avatar — initials in a gradient circle (used for review cards)
// ─────────────────────────────────────────────────────────────
function Avatar({name, size=36}) {
  const palettes = [
    ['#00c6e0','#ffc4d6'], ['#00c6e0','#c5f1f7'], ['#ffd400','#fff3a0'],
    ['#2a6fdb','#a8c2f0'], ['#1f8a3a','#9adfb0'], ['#d97757','#f5cbb5'],
  ];
  const initials = name.split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase();
  const idx = name.charCodeAt(0) % palettes.length;
  const [a, b] = palettes[idx];
  return (
    <div style={{
      width:size,height:size,borderRadius:'50%',
      background:`linear-gradient(135deg, ${a}, ${b})`,
      display:'flex',alignItems:'center',justifyContent:'center',
      color:'#fff',fontWeight:700,fontSize:size*0.4,
      flexShrink:0,fontFamily:"Impact, 'Haettenschweiler', 'Arial Narrow Bold', 'Barlow Condensed', sans-serif",letterSpacing:'0.02em',
      boxShadow:'inset 0 -2px 0 rgba(0,0,0,0.1)'
    }}>{initials}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// PhotoCard — intentional gradient still life with subject label.
// Replaces .ph striped placeholders. Variant drives palette + glyph.
// ─────────────────────────────────────────────────────────────
function PhotoCard({variant='neutral', label, children, style={}, glyph}) {
  const variants = {
    neutral: { bg: 'linear-gradient(160deg, #e8e2d3 0%, #c4bda9 100%)', accent: '#0e0e10' },
    studio: { bg: 'linear-gradient(160deg, #fafafa 0%, #d4d0c4 100%)', accent: '#0e0e10' },
    kitchen: { bg: 'linear-gradient(160deg, #f7e8c8 0%, #c4a878 100%)', accent: '#5a3e1f' },
    oats: { bg: 'linear-gradient(160deg, #f4e4c1 0%, #b89668 100%)', accent: '#3e2818' },
    gym: { bg: 'linear-gradient(160deg, #2a2824 0%, #0e0d0b 100%)', accent: '#00c6e0' },
    pour: { bg: 'linear-gradient(160deg, #fff1d9 0%, #d4956b 100%)', accent: '#1a1814' },
    label: { bg: 'linear-gradient(160deg, #f7d9e8 0%, #00c6e0 100%)', accent: '#0e0e10' },
    sky: { bg: 'linear-gradient(160deg, #c5f1f7 0%, #00a8c0 100%)', accent: '#0e0e10' },
  };
  const v = variants[variant] || variants.neutral;
  return (
    <div style={{
      position:'relative',overflow:'hidden',borderRadius:10,
      background:v.bg,
      ...style
    }}>
      {/* light spill */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:'70%',background:'radial-gradient(ellipse at 30% 10%, rgba(255,255,255,0.4), transparent 65%)',pointerEvents:'none'}}/>
      {children}
      {glyph && <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',color:v.accent,opacity:0.92}}>{glyph}</div>}
      {label && <div style={{position:'absolute',bottom:10,left:12,fontSize:10,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.15em',color:v.accent,textTransform:'uppercase',opacity:0.7}}>{label}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// IngredientStill — single-ingredient still life with custom SVG glyph.
// Maps ingredient name → glyph + palette.
// ─────────────────────────────────────────────────────────────
function IngredientStill({kind, size=70}) {
  const renderers = {
    whey: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #f4e4c1 0%, #d4ac6e 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="60%" height="60%" viewBox="0 0 40 40">
          {/* milk glass */}
          <path d="M10 8 L30 8 L28 34 Q28 36 26 36 L14 36 Q12 36 12 34 Z" fill="#fdfaf2" stroke="#0e0e10" strokeWidth="1.2"/>
          <path d="M11 12 L29 12" stroke="#0e0e10" strokeWidth="0.6" opacity="0.3"/>
          <ellipse cx="20" cy="9" rx="10" ry="2.5" fill="#fdfaf2" stroke="#0e0e10" strokeWidth="1.2"/>
        </svg>
      </div>
    ),
    cluster: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #fff1d9 0%, #e8b06a 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="65%" height="65%" viewBox="0 0 40 40">
          {/* branched molecule */}
          {[[20,20],[12,14],[28,14],[12,28],[28,28],[6,8],[34,8],[6,34],[34,34]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r={i===0?4:2.5} fill="#0e0e10"/>
          ))}
          {[[20,20,12,14],[20,20,28,14],[20,20,12,28],[20,20,28,28],[12,14,6,8],[28,14,34,8],[12,28,6,34],[28,28,34,34]].map((l,i)=>(
            <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#0e0e10" strokeWidth="1.2"/>
          ))}
        </svg>
      </div>
    ),
    sweetpotato: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #ffd4a8 0%, #c97a3c 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="70%" height="70%" viewBox="0 0 40 40">
          <ellipse cx="20" cy="22" rx="13" ry="9" transform="rotate(-15 20 22)" fill="#a85a20" stroke="#0e0e10" strokeWidth="1.2"/>
          <ellipse cx="20" cy="20" rx="13" ry="9" transform="rotate(-15 20 20)" fill="#d97c40" stroke="#0e0e10" strokeWidth="1.2"/>
          {/* leaf */}
          <path d="M28 12 Q30 8 34 9 Q35 13 31 14 Z" fill="#3a6628" stroke="#0e0e10" strokeWidth="1"/>
        </svg>
      </div>
    ),
    casein: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #f0e4d4 0%, #a89070 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="62%" height="62%" viewBox="0 0 40 40">
          {/* slow-drip vessel */}
          <path d="M14 6 L26 6 L25 16 Q33 22 28 32 Q22 38 12 32 Q7 22 15 16 Z" fill="#fdfaf2" stroke="#0e0e10" strokeWidth="1.2"/>
          <circle cx="20" cy="26" r="3" fill="#e8d8b8"/>
          <circle cx="16" cy="22" r="1.5" fill="#e8d8b8"/>
        </svg>
      </div>
    ),
    collagen: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #f5d4c4 0%, #b85a3c 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="68%" height="68%" viewBox="0 0 40 40">
          {/* triple helix */}
          <path d="M10 8 Q20 16 30 8 M10 16 Q20 24 30 16 M10 24 Q20 32 30 24" fill="none" stroke="#0e0e10" strokeWidth="1.5"/>
          <path d="M10 12 Q20 4 30 12 M10 20 Q20 12 30 20 M10 28 Q20 20 30 28" fill="none" stroke="#0e0e10" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      </div>
    ),
    cocoa: () => (
      <div style={{position:'relative',width:'100%',height:'100%',background:'linear-gradient(160deg, #d4a878 0%, #5a3018 100%)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="70%" height="70%" viewBox="0 0 40 40">
          {/* cocoa pod */}
          <ellipse cx="20" cy="22" rx="9" ry="13" fill="#7a3a14" stroke="#0e0e10" strokeWidth="1.2"/>
          <path d="M20 9 Q21 13 20 22 Q19 32 20 35" stroke="#0e0e10" strokeWidth="0.8" fill="none" opacity="0.4"/>
          <path d="M14 14 Q15 22 14 30 M26 14 Q25 22 26 30" stroke="#0e0e10" strokeWidth="0.6" fill="none" opacity="0.3"/>
          {/* leaf */}
          <path d="M22 8 Q26 4 30 6 Q28 11 23 11 Z" fill="#3a6628" stroke="#0e0e10" strokeWidth="0.8"/>
        </svg>
      </div>
    ),
  };
  const Render = renderers[kind] || renderers.whey;
  return (
    <div style={{width:size,height:size,borderRadius:size*0.18,overflow:'hidden',position:'relative',border:'1px solid rgba(0,0,0,0.08)'}}>
      <Render/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FounderPortrait — silhouette of a person in a gym
// ─────────────────────────────────────────────────────────────
function FounderPortrait() {
  return (
    <div style={{position:'absolute',inset:0,background:'linear-gradient(160deg, #2a2824 0%, #0e0d0b 70%)',overflow:'hidden'}}>
      {/* warm rim light */}
      <div style={{position:'absolute',top:0,right:0,width:'70%',height:'90%',background:'radial-gradient(ellipse at 80% 20%, rgba(255,180,80,0.25), transparent 60%)'}}/>
      {/* gym floor */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'30%',background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))'}}/>
      {/* dumbbell silhouette in background */}
      <div style={{position:'absolute',bottom:'18%',right:'8%',opacity:0.3}}>
        <svg width="60" height="22" viewBox="0 0 60 22"><rect x="2" y="6" width="6" height="10" fill="#1a1814"/><rect x="52" y="6" width="6" height="10" fill="#1a1814"/><rect x="8" y="9" width="44" height="4" fill="#1a1814"/></svg>
      </div>
      <svg viewBox="0 0 100 160" preserveAspectRatio="xMidYMax meet" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
        {/* shoulders + chest */}
        <path d="M28 80 Q26 100 25 160 L75 160 Q74 100 72 80 Q70 70 50 70 Q30 70 28 80 Z" fill="#1a1814"/>
        {/* shirt detail */}
        <path d="M44 70 L50 78 L56 70" fill="none" stroke="#00c6e0" strokeWidth="1.5"/>
        {/* neck */}
        <rect x="44" y="60" width="12" height="14" fill="#d4a878"/>
        {/* head */}
        <ellipse cx="50" cy="48" rx="14" ry="17" fill="#d4a878"/>
        {/* hair */}
        <path d="M36 44 Q36 30 50 28 Q64 30 64 44 Q64 42 60 42 Q57 38 50 38 Q43 38 40 42 Q36 42 36 44 Z" fill="#1a0e08"/>
        {/* beard hint */}
        <path d="M42 56 Q50 62 58 56 Q58 60 50 62 Q42 60 42 56 Z" fill="#1a0e08" opacity="0.7"/>
        {/* eye sockets / glasses hint */}
        <ellipse cx="44" cy="48" rx="3.5" ry="2.5" fill="#0e0d0b" opacity="0.5"/>
        <ellipse cx="56" cy="48" rx="3.5" ry="2.5" fill="#0e0d0b" opacity="0.5"/>
      </svg>
      {/* pink accent — like the bag */}
      <div style={{position:'absolute',top:24,left:24,fontFamily:'Caveat, cursive',fontSize:18,color:'#00c6e0',transform:'rotate(-4deg)'}}>Jordan</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LifestyleShake — stylized shake in motion
// ─────────────────────────────────────────────────────────────
function LifestyleShake() {
  return (
    <div style={{position:'absolute',inset:0,background:'linear-gradient(160deg, #ffd4e4 0%, #00c6e0 60%, #c4144d 100%)',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:'60%',background:'radial-gradient(ellipse at 40% 10%, rgba(255,255,255,0.4), transparent 65%)'}}/>
      <svg viewBox="0 0 200 200" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} preserveAspectRatio="xMidYMid meet">
        {/* shaker */}
        <rect x="78" y="50" width="44" height="100" rx="4" fill="#0e0e10"/>
        <rect x="74" y="44" width="52" height="14" rx="3" fill="#0e0e10"/>
        <rect x="86" y="38" width="28" height="10" rx="2" fill="#00c6e0"/>
        {/* liquid line */}
        <rect x="82" y="80" width="36" height="66" fill="#fdfaf2" opacity="0.95"/>
        {/* highlight */}
        <rect x="84" y="82" width="4" height="62" fill="#ffffff" opacity="0.7"/>
        {/* logo on shaker */}
        <text x="100" y="118" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="800" fontSize="9" fill="#00c6e0" letterSpacing="0.05em">WHEY</text>
        <text x="100" y="128" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="800" fontSize="9" fill="#00c6e0" letterSpacing="0.05em">MAKER</text>
        {/* steam / motion drops */}
        <circle cx="56" cy="40" r="3" fill="#fff" opacity="0.6"/>
        <circle cx="144" cy="32" r="2" fill="#fff" opacity="0.5"/>
        <circle cx="48" cy="70" r="2" fill="#fff" opacity="0.4"/>
        <circle cx="150" cy="56" r="3" fill="#fff" opacity="0.6"/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LifestyleOats — bowl of oats
// ─────────────────────────────────────────────────────────────
function LifestyleOats() {
  return (
    <div style={{position:'absolute',inset:0,background:'linear-gradient(160deg, #f4e4c1 0%, #c4a878 100%)',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:'70%',background:'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.4), transparent 60%)'}}/>
      <svg viewBox="0 0 200 200" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} preserveAspectRatio="xMidYMid meet">
        {/* bowl shadow */}
        <ellipse cx="100" cy="160" rx="80" ry="10" fill="rgba(0,0,0,0.15)"/>
        {/* bowl */}
        <path d="M30 110 Q30 160 100 160 Q170 160 170 110 Z" fill="#fdfaf2" stroke="#0e0e10" strokeWidth="2"/>
        {/* bowl rim */}
        <ellipse cx="100" cy="110" rx="70" ry="14" fill="#e8dcc0" stroke="#0e0e10" strokeWidth="2"/>
        {/* oats inside */}
        <ellipse cx="100" cy="108" rx="62" ry="10" fill="#d4b888"/>
        {[[80,102],[100,105],[120,103],[88,110],[112,110],[72,108],[128,107],[96,99],[108,99]].map(([cx,cy],i)=>(
          <ellipse key={i} cx={cx} cy={cy} rx="6" ry="3" fill="#e8c898" stroke="#0e0e10" strokeWidth="0.6"/>
        ))}
        {/* spoon */}
        <ellipse cx="138" cy="106" rx="10" ry="7" transform="rotate(-30 138 106)" fill="#c4a878" stroke="#0e0e10" strokeWidth="1.5"/>
        <rect x="145" y="80" width="3" height="28" transform="rotate(-30 145 80)" fill="#c4a878" stroke="#0e0e10" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

Object.assign(window, { AthletePortrait, Avatar, PhotoCard, IngredientStill, FounderPortrait, LifestyleShake, LifestyleOats });
