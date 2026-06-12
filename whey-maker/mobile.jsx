// Mobile PDP — 390w (iPhone 15 Pro width)
function MobilePDP() {
  const [flavor, setFlavor] = React.useState('Vanilla Buttercream');
  const [plan, setPlan] = React.useState('subscribe');
  const [openFaq, setOpenFaq] = React.useState(-1);
  const [thumb, setThumb] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const price = plan === 'subscribe' ? 102 : 120;

  return (
    <div className="pdp-scroll wm" style={{paddingBottom:84}}>
      {/* Status bar */}
      <div style={{height:44,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',fontSize:14,fontWeight:600,background:'var(--paper)',position:'sticky',top:0,zIndex:80}}>
        <span>9:41</span>
        <span style={{display:'flex',alignItems:'center',gap:6,fontSize:12}}>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="5" width="3" height="6" rx="0.5"/><rect x="8" y="3" width="3" height="8" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5"/><rect x="2" y="2" width="15" height="7" rx="1" fill="currentColor"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
        </span>
      </div>

      {/* Promo */}
      <div style={{background:'var(--pink)',color:'#fff',padding:'8px 0',overflow:'hidden'}}>
        <div className="ticker">
          {[1,2].map(k => <React.Fragment key={k}>
            {['FREE SHIP $100+','SUB &amp; SAVE 15%','$3.19 / MEAL','BUILT BY AN AT'].map((m,i)=>(
              <span key={i} className="mono" style={{fontSize:10,letterSpacing:'0.15em'}}>◆ {m}</span>
            ))}
          </React.Fragment>)}
        </div>
      </div>

      {/* Nav */}
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 20px',background:'var(--paper)',borderBottom:'1px solid var(--line)'}}>
        <Icon.Menu/>
        <div className="display" style={{fontSize:18}}>NEVELS<span className="pink">.</span></div>
        <div style={{display:'flex',gap:16}}><Icon.Search size={20}/><Icon.Cart size={20}/></div>
      </nav>

      {/* Gallery */}
      <div style={{background:'var(--paper-2)',aspectRatio:'1/1',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-80,right:-80,width:260,height:260,background:'radial-gradient(circle, rgba(0,198,224,0.2), transparent 65%)',borderRadius:'50%'}}/>
        <div style={{position:'absolute',bottom:-60,left:-60,width:200,height:200,background:'radial-gradient(circle, rgba(0,198,224,0.15), transparent 65%)',borderRadius:'50%'}}/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src="assets/bag-vanilla.png" alt="" style={{maxWidth:'78%',maxHeight:'85%',objectFit:'contain',filter:'drop-shadow(0 20px 30px rgba(0,0,0,0.18))'}}/>
        </div>
        <div style={{position:'absolute',top:16,left:16,display:'flex',gap:6,zIndex:2}}>
          <span className="chip chip-pink" style={{fontSize:9}}>New drop</span>
          <span className="chip chip-dark" style={{fontSize:9}}>12 lb</span>
        </div>
        {/* Pagination dots */}
        <div style={{position:'absolute',bottom:14,left:0,right:0,display:'flex',justifyContent:'center',gap:6}}>
          {[0,1,2,3,4].map(i=>(
            <div key={i} style={{width:i===thumb?18:6,height:6,borderRadius:100,background:i===thumb?'var(--ink)':'rgba(0,0,0,0.25)',transition:'all .2s'}}/>
          ))}
        </div>
      </div>

      {/* Thumb strip */}
      <div style={{display:'flex',gap:8,padding:'12px 20px',overflowX:'auto'}}>
        {[
          {src:'assets/bag-vanilla.png', contain:true, bg:'var(--paper-2)'},
          {src:'assets/product/back.jpg'},
          {src:'assets/product/side-a.jpg'},
          {src:'assets/product/turn-a.jpg'},
          {src:'assets/product/turn-b.jpg'},
        ].map((t, i)=>(
          <div key={i} onClick={()=>setThumb(i)} style={{width:56,height:56,border:thumb===i?'2px solid var(--ink)':'1px solid var(--line)',borderRadius:6,flexShrink:0,background:t.bg||'#fff',padding:t.contain?3:0,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
            <img src={t.src} alt="" style={{width:'100%',height:'100%',objectFit:t.contain?'contain':'cover'}} loading="lazy"/>
          </div>
        ))}
      </div>

      {/* Title block */}
      <div style={{padding:'8px 20px 24px'}}>
        <div className="eyebrow" style={{marginBottom:6}}>Premium mass gainer · 12 lb</div>
        <h1 className="display" style={{fontSize:52,margin:'0 0 8px',lineHeight:0.88}}>Whey <span className="pink">Maker</span></h1>
        <div style={{fontSize:14,color:'var(--ink-3)',marginBottom:12,lineHeight:1.45}}>
          A complete meal in a shake. <b style={{color:'var(--ink)'}}>1,250 cal, 60 g protein, 238 g carbs</b>. Built by an AT.
        </div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Stars n={5} size={13}/>
          <span style={{fontSize:12,color:'var(--ink-3)'}}>4.9 · <u>248 reviews</u></span>
        </div>
      </div>

      {/* Flavor */}
      <div style={{padding:'0 20px 20px'}}>
        <div className="eyebrow" style={{marginBottom:8}}>Flavor · {flavor}</div>
        <div style={{display:'flex',gap:8}}>
          {[
            {name:'Vanilla', full:'Vanilla Buttercream', color:'#f7e8c8'},
            {name:'Chocolate', full:'Chocolate', color:'#3e2419'},
            {name:'Strawberry', full:'Strawberry', color:'#ffc4d6', soon:true},
          ].map(f => (
            <button key={f.name} onClick={()=>!f.soon && setFlavor(f.full)} style={{flex:1,border:flavor===f.full?'2px solid var(--ink)':'1px solid var(--line)',background:'var(--paper)',borderRadius:8,padding:'10px 8px',display:'flex',flexDirection:'column',alignItems:'center',gap:6,opacity:f.soon?0.5:1}}>
              <span style={{width:26,height:26,borderRadius:'50%',background:f.color,border:'1px solid rgba(0,0,0,0.15)'}}/>
              <span style={{fontSize:11,fontWeight:600}}>{f.name}{f.soon && <div style={{fontSize:8,color:'var(--ink-3)',fontWeight:400}}>Soon</div>}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Plan */}
      <div style={{padding:'0 20px 20px',display:'flex',flexDirection:'column',gap:8}}>
        <button onClick={()=>setPlan('subscribe')} style={{textAlign:'left',padding:14,borderRadius:8,border:plan==='subscribe'?'2px solid var(--pink)':'1px solid var(--line)',background:plan==='subscribe'?'rgba(0,198,224,0.04)':'var(--paper)',display:'flex',alignItems:'center',gap:12}}>
          <span style={{width:16,height:16,borderRadius:'50%',border:'2px solid var(--pink)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{plan==='subscribe' && <span style={{width:7,height:7,borderRadius:'50%',background:'var(--pink)'}}/>}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,fontSize:13,display:'flex',alignItems:'center',gap:6}}>Subscribe & save <span style={{background:'var(--pink)',color:'#fff',fontSize:9,padding:'2px 6px',borderRadius:100}}>−15%</span></div>
            <div style={{fontSize:11,color:'var(--ink-3)'}}>Every 30 days · cancel anytime</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{fontWeight:700,fontSize:13}}>$102</div>
            <div style={{fontSize:10,color:'var(--ink-4)',textDecoration:'line-through'}}>$120</div>
          </div>
        </button>
        <button onClick={()=>setPlan('once')} style={{textAlign:'left',padding:14,borderRadius:8,border:plan==='once'?'2px solid var(--ink)':'1px solid var(--line)',background:'var(--paper)',display:'flex',alignItems:'center',gap:12}}>
          <span style={{width:16,height:16,borderRadius:'50%',border:'2px solid var(--ink)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{plan==='once' && <span style={{width:7,height:7,borderRadius:'50%',background:'var(--ink)'}}/>}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,fontSize:13}}>One-time purchase</div>
            <div style={{fontSize:11,color:'var(--ink-3)'}}>Ships tomorrow</div>
          </div>
          <div style={{fontWeight:700,fontSize:13}}>$120</div>
        </button>
      </div>

      {/* Qty + ATC — matches desktop buy box */}
      <div style={{padding:'0 20px 14px',display:'flex',gap:8}}>
        <div style={{display:'flex',alignItems:'center',border:'1.5px solid var(--ink)',borderRadius:6,overflow:'hidden'}}>
          <button onClick={()=>setQty(Math.max(1,qty-1))} style={{padding:'12px 12px',background:'transparent',border:'none',cursor:'pointer'}}><Icon.Minus size={14}/></button>
          <span style={{padding:'0 6px',fontWeight:700,minWidth:18,textAlign:'center',fontSize:14}}>{qty}</span>
          <button onClick={()=>setQty(qty+1)} style={{padding:'12px 12px',background:'transparent',border:'none',cursor:'pointer'}}><Icon.Plus size={14}/></button>
        </div>
        <button className="btn btn-pink" style={{flex:1,letterSpacing:'0.1em',fontSize:14,padding:'14px 16px'}}>
          Add to cart — ${(price*qty).toFixed(2)}
        </button>
      </div>

      {/* Per-meal callout */}
      <div style={{margin:'0 20px 20px',padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px dashed var(--line)',borderBottom:'1px dashed var(--line)'}}>
        <div>
          <div style={{fontSize:13,fontWeight:600}}>32 meals per bag</div>
          <div style={{fontSize:11,color:'var(--ink-3)'}} className="mono">312 g · 4 scoops</div>
        </div>
        <div className="display pink" style={{fontSize:24}}>$3.19<span style={{fontSize:12,color:'var(--ink-3)'}}>/meal</span></div>
      </div>

      {/* Trust bullets */}
      <div style={{padding:'0 20px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,fontSize:11}}>
        {[['Ships 1–2 days', Icon.Truck],['30-day returns', Icon.Shield],['Third-party tested', Icon.Flask],['Made in USA', Icon.Leaf]].map(([t,I],i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:6,color:'var(--ink-2)'}}><I size={14}/>{t}</div>
        ))}
      </div>

      <TrustBar dense/>

      {/* MEAL FRAMING */}
      <section style={{padding:'48px 20px',background:'var(--paper-2)',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:48,margin:'10px 0 14px'}}>A <span className="pink">meal</span> in a shake.</h2>
        <p style={{fontSize:14,color:'var(--ink-2)',lineHeight:1.5,marginBottom:20}}>Most shakes leave an athlete 800 cal short. Whey Maker is built as a full meal — real whole-food carbs, four protein sources, zero junk.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[['1,250','calories'],['60g','protein'],['238g','carbs'],['12g','fat']].map(([n,l])=>(
            <div key={l} style={{background:'#fff',border:'1px solid var(--line)',borderRadius:8,padding:'14px 12px'}}>
              <div className="display" style={{fontSize:32,lineHeight:1}}>{n}</div>
              <div className="eyebrow" style={{marginTop:2}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:16,padding:20,background:'var(--ink)',color:'#fff',borderRadius:10,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 20% 30%, rgba(0,198,224,0.3), transparent 50%)'}}/>
          <div style={{position:'relative'}}>
            <div className="eyebrow" style={{color:'var(--ink-4)'}}>One shake =</div>
            <div className="display" style={{fontSize:40,marginTop:8,lineHeight:0.95}}>2.6 bowls<br/><span className="pink">of oats</span>.</div>
          </div>
        </div>
      </section>

      {/* Ingredients — mobile */}
      <section style={{padding:'48px 20px',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 20px'}}>Every ingredient.<br/>Every <span className="pink">milligram</span>.</h2>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {[
            {n:'Grass-fed whey isolate', amt:'45 g', kind:'whey', why:'90% protein. Rare in mass gainers.'},
            {n:'Cluster dextrin', amt:'140 g', kind:'cluster', why:'Highly-branched carb. No sugar spike.'},
            {n:'Organic sweet potato', amt:'40 g', kind:'sweetpotato', why:'Real whole-food carb, not maltodextrin.'},
            {n:'Micellar casein', amt:'8 g', kind:'casein', why:'Slow-release protein, 6-8 hrs.'},
            {n:'Beef collagen', amt:'7 g', kind:'collagen', why:'Joints & tendons for young athletes.'},
          ].map((ing, i) => (
            <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,padding:14,display:'flex',gap:12,alignItems:'center'}}>
              <IngredientStill kind={ing.kind} size={56}/>
              <div style={{flex:1}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <div className="display" style={{fontSize:18,lineHeight:1}}>{ing.n}</div>
                  <span className="mono pink" style={{fontSize:11,fontWeight:700}}>{ing.amt}</span>
                </div>
                <div style={{fontSize:12,color:'var(--ink-2)',marginTop:4,lineHeight:1.4}}>{ing.why}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn" style={{width:'100%',marginTop:16}}>See full supplement facts <Icon.Chevron dir="right"/></button>
      </section>

      {/* Comparison */}
      <section style={{padding:'48px 20px',background:'var(--paper-2)',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 20px'}}>How we <span className="hl-pink">stack up</span>.</h2>
        <ComparisonGrid mobile/>
        <div style={{fontSize:11,color:'var(--ink-3)',marginTop:8,textAlign:'center'}} className="mono">Swipe to see all 4 competitors →</div>
      </section>

      {/* Math */}
      <section style={{padding:'48px 20px',background:'var(--ink)',color:'#fff',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 14px',color:'#fff'}}>Gaining weight is<br/>a <span className="pink">math problem</span>.</h2>
        <p style={{fontSize:13,color:'#c9c9cf',marginBottom:22,lineHeight:1.5}}>"Just eat more" isn't a plan. Here's what adding one shake per day actually looks like on paper.</p>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {[
            {l:'maintenance intake',v:'3,000',u:'cal / day',op:'+'},
            {l:'one whey maker',v:'1,250',u:'cal / day',op:'×',c:'var(--pink)'},
            {l:'seven days',v:'7',u:'days',op:'='},
            {l:'weekly gain',v:'~2.5',u:'lb / week',c:'var(--teal)',last:true},
          ].map((r,i)=>(
            <React.Fragment key={i}>
              <div style={{border:'1px solid #2a2a2e',borderRadius:10,padding:16,background:'#141418',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div className="eyebrow" style={{color:'var(--ink-4)'}}>{r.l}</div>
                  <div className="display" style={{fontSize:36,lineHeight:1,marginTop:4,color:r.c||'#fff'}}>{r.v}</div>
                </div>
                <div className="mono" style={{fontSize:11,color:'#999',letterSpacing:'0.08em',textTransform:'uppercase'}}>{r.u}</div>
              </div>
              {r.op && <div className="display" style={{fontSize:32,color:'#444',textAlign:'center'}}>{r.op}</div>}
            </React.Fragment>
          ))}
        </div>
        <div style={{fontSize:10,color:'#777',marginTop:16}} className="mono">* 3,500 cal ≈ 1 lb gained · varies by training load</div>
      </section>

      {/* Athletes */}
      <section style={{padding:'48px 20px',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 20px'}}>Used by athletes.<br/>Trusted by <span className="hl-teal">parents</span>.</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[
            {src:'assets/athletes/austin-alexander.jpg', sport:'Football · 2025', meta:'215 → 247'},
            {src:'assets/athletes/ej-walker.jpg', sport:'SC signee', meta:'211 → 245'},
            {src:'assets/athletes/cam-thomas.jpg', sport:'LB · 2026', meta:'205 → 217'},
            {src:'assets/athletes/nevels-fitness.jpg', sport:'Nevels Fitness', meta:'214 → 242'},
          ].map((a, i) => (
            <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,overflow:'hidden',background:'#fff'}}>
              <img src={a.src} alt="" style={{width:'100%',aspectRatio:'4/5',objectFit:'cover',display:'block'}} loading="lazy"/>
              <div style={{padding:'10px 12px',fontSize:10,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.04em',textTransform:'uppercase',display:'flex',justifyContent:'space-between',gap:6}}>
                <span>{a.sport}</span><span style={{color:'var(--ink)'}}>{a.meta}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{border:'1px solid var(--line)',borderRadius:10,padding:14,marginTop:14,background:'var(--paper-2)'}}>
          <div style={{aspectRatio:'16/9',marginBottom:12,position:'relative'}}>
            <ImgSlot id="m-parent-video" placeholder={"Parent video\nKim M."} dark radius={6} style={{width:'100%',height:'100%'}}/>
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
              <div style={{background:'var(--pink)',color:'#fff',borderRadius:'50%',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 18px rgba(0,198,224,0.5)'}}><Icon.Play size={18}/></div>
            </div>
          </div>
          <div className="eyebrow" style={{marginBottom:6}}>Parent video · Kim M.</div>
          <div style={{fontSize:15,lineHeight:1.4,fontWeight:500}}>"My son gained <b className="hl-pink">25 lbs in one semester</b>. Coaches noticed first."</div>
        </div>
      </section>

      {/* Founder */}
      <section style={{padding:'48px 20px',background:'var(--paper-2)',borderBottom:'1px solid var(--line)'}}>
        <div style={{aspectRatio:'4/5',marginBottom:20,position:'relative'}}>
          <ImgSlot id="m-founder" placeholder={"Founder portrait\nJordan in gym"} dark style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',top:18,left:18,fontFamily:'Caveat, cursive',fontSize:20,color:'#00c6e0',transform:'rotate(-4deg)',pointerEvents:'none'}}>Jordan</div>
        </div>
        <h2 className="display" style={{fontSize:36,margin:'10px 0 14px',lineHeight:0.95}}>"Nothing on the shelf was <span className="hl-teal">good enough</span> for my kids."</h2>
        <p style={{fontSize:14,color:'var(--ink-2)',lineHeight:1.5}}>Jordan spent a decade as an athletic trainer watching kids try to gain weight on shakes full of maltodextrin and Yellow #5. So he built the one he wished existed.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginTop:20,paddingTop:20,borderTop:'1px solid var(--line-2)'}}>
          <div><div className="display" style={{fontSize:26}}>10 yr</div><div className="eyebrow" style={{fontSize:9}}>Training</div></div>
          <div><div className="display" style={{fontSize:26}}>400+</div><div className="eyebrow" style={{fontSize:9}}>Athletes</div></div>
          <div><div className="display" style={{fontSize:26}}>TX</div><div className="eyebrow" style={{fontSize:9}}>Made</div></div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'48px 20px',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 20px'}}>Ask anything.</h2>
        {[
          ['Is this safe for my 13-year-old?', 'Yes. Food-first formula, no stimulants, no proprietary blends, no banned substances. Consult your pediatrician before starting any supplement.'],
          ['When should they take it?', 'One shake per day, post-training or between meals. Mix with 16 oz whole milk or water.'],
          ['Will they get fat?', 'Paired with training, no. The 60 g protein + cluster dextrin drives muscle synthesis, not just fat gain.'],
          ['Can I mix with milk?', 'Yes — we recommend it. 4 scoops + 16 oz whole milk = ~1,550 cal, 70 g protein.'],
          ['What if the flavor is off?', '30-day full-bag guarantee. Send it back for a full refund — even half-empty.'],
          ['How does subscription work?', 'Ships every 30/45/60 days — your pick. Skip, pause, cancel anytime.'],
        ].map(([q,a],i)=>(
          <div key={i} style={{borderTop:i===0?'1px solid var(--line)':'none',borderBottom:'1px solid var(--line)'}}>
            <button onClick={()=>setOpenFaq(openFaq===i?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',background:'transparent',border:'none',textAlign:'left',gap:12}}>
              <span style={{fontSize:14,fontWeight:600}}>{q}</span>
              <span style={{flexShrink:0,transform:openFaq===i?'rotate(45deg)':'none',transition:'transform .2s'}}><Icon.Plus size={16}/></span>
            </button>
            {openFaq===i && <div style={{paddingBottom:16,fontSize:13,color:'var(--ink-2)',lineHeight:1.5}}>{a}</div>}
          </div>
        ))}
      </section>

      {/* Reviews summary */}
      <section style={{padding:'48px 20px',background:'var(--paper-2)',borderBottom:'1px solid var(--line)'}}>
        <h2 className="display" style={{fontSize:44,margin:'10px 0 16px'}}>248 reviews.<br/><span className="pink">4.9</span>/5.</h2>
        <Stars n={5} size={18}/>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:20}}>
          {[
            {n:'Marissa C.', t:'My kid finally hit 160', b:'Couldn\'t break 140. Three months + real lunches and he\'s up to 162.', stars:5},
            {n:'Tony R.', t:'Actually tastes like vanilla', b:'Doesn\'t taste like chalk and Splenda. Mixes clean in the shaker.', stars:5},
            {n:'Kimberly D.', t:'Worth the price', b:'$120 for clean ingredients is the right trade for my son.', stars:5},
          ].map((r,i)=>(
            <div key={i} style={{background:'#fff',border:'1px solid var(--line)',borderRadius:10,padding:16}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                <Stars n={r.stars} size={12}/>
                <span style={{fontSize:10,color:'var(--ink-3)'}} className="mono">Verified</span>
              </div>
              <div className="display" style={{fontSize:18,marginBottom:6}}>{r.t}</div>
              <div style={{fontSize:12,color:'var(--ink-2)',lineHeight:1.5,marginBottom:8}}>{r.b}</div>
              <div style={{display:'flex',alignItems:'center',gap:8,fontSize:11,color:'var(--ink-3)'}}>
                <Avatar name={r.n} size={26}/>
                <span style={{fontWeight:600,color:'var(--ink-2)',fontSize:12}}>{r.n}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn" style={{width:'100%',marginTop:14}}>Read all 248 reviews</button>
      </section>

      {/* Final CTA */}
      <section style={{padding:'64px 20px',background:'var(--ink)',color:'#fff',textAlign:'center'}}>
        <div className="eyebrow" style={{color:'var(--ink-4)'}}>Ship it.</div>
        <h2 className="display" style={{fontSize:72,margin:'14px 0',lineHeight:0.9,color:'#fff'}}>Start <span className="pink">gaining</span>.</h2>
        <div style={{fontSize:14,color:'#c9c9cf',marginBottom:24}}>32 real meals. $3.19 each. Cancel whenever.</div>
        <button className="btn btn-pink btn-lg" style={{width:'100%'}}>Add to cart — $102</button>
      </section>

      <Footer mobile/>

      {/* Sticky ATC footer */}
      <div style={{position:'sticky',bottom:0,left:0,right:0,background:'rgba(250,247,240,0.95)',backdropFilter:'blur(12px)',borderTop:'1px solid var(--line)',padding:'12px 16px 22px',display:'flex',gap:10,alignItems:'center',zIndex:70}}>
        <div style={{width:44,height:44,background:'var(--paper-2)',borderRadius:8,padding:4,flexShrink:0}}>
          <img src="assets/bag-vanilla.png" style={{width:'100%',height:'100%',objectFit:'contain'}}/>
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:11,color:'var(--ink-3)'}} className="mono">{plan==='subscribe'?'SUBSCRIBE':'ONE-TIME'} · {flavor.split(' ')[0]}</div>
          <div style={{fontSize:14,fontWeight:700}}>${price}.00 <span style={{color:'var(--ink-3)',fontWeight:400,fontSize:11}}>· $3.19/meal</span></div>
        </div>
        <button className="btn btn-pink" style={{padding:'12px 18px',fontSize:14}}>Add to cart</button>
      </div>

      {/* Home bar */}
      <div style={{position:'absolute',bottom:4,left:0,right:0,display:'flex',justifyContent:'center',pointerEvents:'none'}}>
        <div style={{width:140,height:4,background:'var(--ink)',borderRadius:100,opacity:0.35}}/>
      </div>
    </div>
  );
}

window.MobilePDP = MobilePDP;
