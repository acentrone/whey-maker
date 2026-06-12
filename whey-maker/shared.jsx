// Shared PDP components — desktop & mobile pull from these.

// ---- Shopify-style SVG icons (simple strokes) ----
const Icon = {
  Star: ({filled=true, size=14}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.2">
      <path d="M8 1.5l2 4.2 4.6.6-3.3 3.2.8 4.6L8 11.9l-4.1 2.2.8-4.6L1.4 6.3l4.6-.6z"/>
    </svg>
  ),
  Check: ({size=14}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3 3 7-7"/></svg>
  ),
  X: ({size=14}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>
  ),
  Cart: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2l2.5 11h11l2-8H6"/><circle cx="9" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/>
    </svg>
  ),
  Search: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/></svg>
  ),
  Menu: ({size=20}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  ),
  Plus: ({size=16}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M8 3v10M3 8h10"/></svg>
  ),
  Minus: ({size=16}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 8h10"/></svg>
  ),
  Leaf: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4c-9 0-14 5-14 12 0 2 .5 3 1 4"/><path d="M20 4c0 7-4 13-13 15"/></svg>
  ),
  Flask: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/><path d="M7.5 14h9"/></svg>
  ),
  Shield: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L15.5 10"/></svg>
  ),
  Truck: ({size=18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h12v10H2zM14 10h5l3 3v3h-8"/><circle cx="6" cy="17" r="1.5"/><circle cx="18" cy="17" r="1.5"/></svg>
  ),
  Chevron: ({dir='down', size=14}) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{transform: dir==='up'?'rotate(180deg)':dir==='right'?'rotate(-90deg)':dir==='left'?'rotate(90deg)':'none'}}><path d="M4 6l4 4 4-4"/></svg>
  ),
  Play: ({size=24}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
  ),
};

// Stars with given rating
function Stars({n=5, size=14}) {
  return (
    <span className="stars" style={{display:'inline-flex',gap:2,alignItems:'center'}}>
      {Array.from({length:5}).map((_,i)=>(<Icon.Star key={i} filled={i<n} size={size}/>))}
    </span>
  );
}

// ---- Trust strip ----
function TrustBar({dense=false}) {
  const items = [
    ['Grass-fed whey isolate', Icon.Leaf],
    ['Third-party tested', Icon.Flask],
    ['Zero artificial additives', Icon.Shield],
    ['Ships in 1–2 days', Icon.Truck],
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:`repeat(${items.length},1fr)`,background:'var(--ink)',color:'#fff'}}>
      {items.map(([t, I], i)=>(
        <div key={i} style={{padding: dense?'14px 12px':'18px 20px',fontFamily:"'JetBrains Mono',monospace",fontSize:dense?10:11,letterSpacing:'0.1em',textTransform:'uppercase',display:'flex',alignItems:'center',justifyContent:'center',gap:10,borderRight:i<items.length-1?'1px solid #222':''}}>
          <I size={dense?14:16}/>{t}
        </div>
      ))}
    </div>
  );
}

// ---- Promo ticker at top of page ----
function PromoTicker() {
  const msgs = ['FREE SHIPPING OVER $100','SUBSCRIBE & SAVE 15% — CODE: GAIN15','32 MEALS PER BAG — $3.75 / MEAL','BUILT BY AN ATHLETIC TRAINER','SHIPS FROM TEXAS'];
  const row = (
    <>
      {msgs.map((m,i)=>(<span key={i} className="mono" style={{fontSize:11,letterSpacing:'0.15em'}}>◆ {m}</span>))}
    </>
  );
  return (
    <div style={{background:'var(--pink)',color:'#fff',padding:'9px 0',overflow:'hidden',borderBottom:'1px solid var(--pink-2)'}}>
      <div className="ticker">{row}{row}</div>
    </div>
  );
}

// ---- Comparison table ----
function Comparison() {
  const rows = [
    ['Calories per serving', '1,250', '1,250', '750', '400'],
    ['Protein', '60g', '50g', '30g', '40g'],
    ['Primary carb', 'Cluster dextrin + sweet potato', 'Maltodextrin', 'Oats + MCT', 'Tapioca'],
    ['Whey isolate', 'yes', 'no', 'yes', 'no'],
    ['Artificial flavors', 'no', 'yes', 'no', 'no'],
    ['Artificial colors (Yellow #5)', 'no', 'yes', 'no', 'no'],
    ['Grass-fed sourcing', 'yes', 'no', 'no', 'no'],
    ['Made for athletes 11+', 'yes', 'no', 'no', 'no'],
    ['Price per meal', '$3.75', '$2.10', '$4.80', '$3.90'],
  ];
  const cell = (v, isUs) => {
    if (v === 'yes') return <span className="check"><Icon.Check/></span>;
    if (v === 'no') return <span className="x"><Icon.X/></span>;
    return v;
  };
  return (
    <table className="compare">
      <thead>
        <tr className="us"><th></th><th>Whey Maker</th></tr>
      </thead>
      <tbody>
        {/* Render our own header row alongside */}
      </tbody>
    </table>
  );
}

// Cleaner comparison using divs (more control over hi-fi styling)
function ComparisonGrid({mobile=false}) {
  const cols = ['', 'Whey Maker', 'Serious Mass', 'Transparent Labs', 'Huel Black'];
  const rows = [
    ['Calories / serving', '1,250', '1,250', '750', '400'],
    ['Protein', '60 g', '50 g', '30 g', '40 g'],
    ['Carb source', 'Cluster dextrin + sweet potato', 'Maltodextrin', 'Oats + MCT', 'Tapioca'],
    ['Grass-fed whey isolate', 'yes', 'no', 'yes', 'no'],
    ['Artificial flavors / colors', 'no', 'yes', 'no', 'no'],
    ['Cluster dextrin', 'yes', 'no', 'no', 'no'],
    ['Built for athletes 11+', 'yes', 'no', 'no', 'no'],
    ['Price / meal', '$3.75', '$2.10', '$4.80', '$3.90'],
  ];
  const glyph = (v) => {
    if (v === 'yes') return <span style={{color:'var(--success)',display:'inline-flex'}}><Icon.Check size={16}/></span>;
    if (v === 'no') return <span style={{color:'var(--ink-4)',display:'inline-flex'}}><Icon.X size={16}/></span>;
    return v;
  };
  const gridCols = mobile ? '1.2fr 1fr 1fr' : '1.4fr 1fr 1fr 1fr 1fr';
  const showCols = mobile ? [0,1,2] : [0,1,2,3,4];
  return (
    <div style={{border:'1px solid var(--line)',borderRadius:8,overflow:'hidden',background:'#fff'}}>
      <div style={{display:'grid',gridTemplateColumns:gridCols,background:'var(--paper-2)',borderBottom:'2px solid var(--ink)'}}>
        {showCols.map(ci => (
          <div key={ci} className="display" style={{padding:'16px 14px',fontSize:mobile?15:18,background:ci===1?'var(--ink)':'transparent',color:ci===1?'#fff':'var(--ink)'}}>{cols[ci]}</div>
        ))}
      </div>
      {rows.map((row, ri) => (
        <div key={ri} style={{display:'grid',gridTemplateColumns:gridCols,borderBottom: ri<rows.length-1?'1px solid var(--line)':'none',fontSize:mobile?12:14}}>
          {showCols.map(ci => (
            <div key={ci} style={{padding:mobile?'12px 10px':'16px 14px',textAlign:ci===0?'left':'center',background:ci===1?'rgba(0,198,224,0.05)':'',fontWeight:ci===0?500:ci===1?700:400,color:ci===0?'var(--ink-3)':'var(--ink)',borderLeft:ci>0?'1px solid var(--line)':''}}>
              {glyph(row[ci])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ---- Footer ----
function Footer({mobile=false}) {
  return (
    <footer className={mobile ? '' : 'wm-bound'} style={{background:'var(--ink)',color:'var(--paper)',padding: mobile? '48px 24px 32px':'72px 64px 32px'}}>
      <div style={{display:'grid',gridTemplateColumns: mobile?'1fr':'2fr 1fr 1fr 1fr',gap:40,marginBottom:48}}>
        <div>
          <div className="display" style={{fontSize:mobile?40:56,lineHeight:0.9}}>NEVELS<br/>NUTRITION</div>
          <div style={{color:'var(--ink-4)',marginTop:16,fontSize:14,maxWidth:300}}>Real food. Real ingredients. Built in Texas for athletes who show up.</div>
        </div>
        {[
          ['Shop', ['Whey Maker','Whey Maker Light (soon)','Stacks','Apparel']],
          ['Learn', ['How to gain weight','Ingredient sourcing','Athletes','FAQ']],
          ['Company', ['About Jordan','Contact','Wholesale','Press']],
        ].map(([h, items]) => (
          <div key={h}>
            <div className="eyebrow" style={{color:'var(--ink-4)',marginBottom:12}}>{h}</div>
            {items.map(i => <div key={i} style={{fontSize:14,padding:'5px 0',color:'#d4d4d8'}}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{borderTop:'1px solid #2a2a2e',paddingTop:24,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:11,color:'var(--ink-4)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase'}}>
        <div>© 2026 Nevels Nutrition, LLC</div>
        <div>Shipping · Returns · Privacy · Terms</div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// ImgSlot — thin React wrapper around <image-slot> custom element.
// Renders a drag-and-drop image placeholder; user drops a photo later.
// ─────────────────────────────────────────────────────────────
function ImgSlot({id, shape='rounded', radius=12, placeholder='Drop image', style, className, mask, fit='cover', dark=false}) {
  const cls = [className, dark ? 'is-dark' : ''].filter(Boolean).join(' ') || undefined;
  return React.createElement('image-slot', {
    id,
    shape,
    radius: String(radius),
    fit,
    placeholder,
    mask,
    className: cls,
    style,
  });
}

Object.assign(window, { Icon, Stars, TrustBar, PromoTicker, ComparisonGrid, Footer, ImgSlot });
