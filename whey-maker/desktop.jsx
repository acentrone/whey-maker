// Desktop PDP — 1440w
function DesktopPDP() {
  const [flavor, setFlavor] = React.useState('Vanilla Buttercream');
  const [plan, setPlan] = React.useState('subscribe');
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('ingredients');
  const [openFaq, setOpenFaq] = React.useState(0);

  const price = plan === 'subscribe' ? 102 : 120;

  return (
    <div className="pdp-scroll wm">
      <PromoTicker/>

      {/* Top nav */}
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 40px',background:'var(--paper)',borderBottom:'1px solid var(--line)',position:'sticky',top:0,zIndex:50}}>
        <div style={{display:'flex',alignItems:'center',gap:40}}>
          <div className="display" style={{fontSize:24,letterSpacing:'0.02em'}}>NEVELS<span style={{color:'var(--pink)'}}>.</span>NUTRITION</div>
          <div style={{display:'flex',gap:28,fontSize:13,fontWeight:500}}>
            {['Shop','Science','Athletes','Learn','FAQ'].map(l => <span key={l}>{l}</span>)}
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:20,color:'var(--ink-2)'}}>
          <Icon.Search/>
          <span style={{fontSize:13}}>Account</span>
          <div style={{display:'flex',alignItems:'center',gap:6,padding:'8px 12px',border:'1px solid var(--ink)',borderRadius:100,fontSize:12,fontWeight:600}}>
            <Icon.Cart size={16}/> Cart · 0
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div style={{padding:'14px 40px',fontSize:11,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase'}}>
        Shop › Mass Gainers › <span style={{color:'var(--ink)'}}>Whey Maker</span>
      </div>

      {/* HERO */}
      <section style={{display:'grid',gridTemplateColumns:'96px 1fr 480px',gap:32,padding:'12px 40px 72px',alignItems:'flex-start'}}>
        {/* Thumb column */}
        <div style={{display:'flex',flexDirection:'column',gap:10,position:'sticky',top:90}}>
          {[
            {label:'front', active:true, src:'assets/bag-vanilla.png', contain:true, bg:'var(--paper-2)'},
            {label:'back', src:'assets/product/back.jpg'},
            {label:'side', src:'assets/product/side-a.jpg'},
            {label:'turn', src:'assets/product/turn-a.jpg'},
            {label:'turn', src:'assets/product/turn-b.jpg'},
          ].map((t, i) => (
            <div key={i} style={{width:84,height:84,border:t.active?'2px solid var(--ink)':'1px solid var(--line)',borderRadius:6,background:t.bg||'#fff',padding:t.contain?4:0,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',position:'relative',overflow:'hidden'}}>
              <img src={t.src} alt="" style={{width:'100%',height:'100%',objectFit:t.contain?'contain':'cover'}} loading="lazy"/>
            </div>
          ))}
        </div>

        {/* Main gallery */}
        <div>
          <div style={{background:'var(--paper-2)',borderRadius:12,aspectRatio:'1/1',position:'relative',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {/* Decorative spray of hot pink like the bag */}
            <div style={{position:'absolute',top:-120,right:-120,width:400,height:400,background:'radial-gradient(circle, rgba(0,198,224,0.18), transparent 65%)',borderRadius:'50%'}}/>
            <div style={{position:'absolute',bottom:-80,left:-80,width:300,height:300,background:'radial-gradient(circle, rgba(0,198,224,0.15), transparent 65%)',borderRadius:'50%'}}/>
            <img src="assets/bag-vanilla.png" alt="Whey Maker vanilla buttercream mass gainer — 12 lb bag" style={{maxWidth:'75%',maxHeight:'85%',objectFit:'contain',filter:'drop-shadow(0 30px 40px rgba(0,0,0,0.18))',position:'relative',zIndex:1}}/>

            <div style={{position:'absolute',top:20,left:20,display:'flex',gap:8,zIndex:2}}>
              <span className="chip chip-pink">New drop</span>
              <span className="chip chip-dark">12 lb</span>
            </div>
            <div style={{position:'absolute',bottom:20,right:20,display:'flex',gap:8,zIndex:2}}>
              <span className="chip">Vanilla Buttercream</span>
            </div>
          </div>

          {/* Secondary imagery row */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
            <div style={{aspectRatio:'1.2/1',borderRadius:12,overflow:'hidden',background:'#fff',border:'1px solid var(--line)'}}>
              <img src="assets/product/back.jpg" alt="Back label" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
            </div>
            <div style={{aspectRatio:'1.2/1',borderRadius:12,overflow:'hidden',background:'#fff',border:'1px solid var(--line)'}}>
              <img src="assets/product/side-a.jpg" alt="Side detail" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
            </div>
          </div>
        </div>

        {/* Buy box */}
        <div style={{position:'sticky',top:90}}>
          <div className="eyebrow" style={{marginBottom:10}}>Premium mass gainer · 12 lb</div>
          <h1 className="display" style={{fontSize:72,margin:'0 0 6px',lineHeight:0.88}}>Whey <span className="pink">Maker</span></h1>
          <div style={{fontSize:15,color:'var(--ink-3)',marginBottom:14,lineHeight:1.45,maxWidth:420}}>
            A complete meal in a shake. <b style={{color:'var(--ink)'}}>1,250 calories, 60 g protein, 238 g carbs</b> per serving — built for athletes by an athletic trainer.
          </div>

          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <Stars n={5}/>
            <span style={{fontSize:13,color:'var(--ink-3)'}}>4.9 · <u>248 verified reviews</u></span>
          </div>

          {/* Flavor */}
          <div style={{marginBottom:18}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
              <span className="eyebrow">Flavor</span>
              <span style={{fontSize:12,color:'var(--ink-3)'}}>{flavor}</span>
            </div>
            <div style={{display:'flex',gap:8}}>
              {[
                {name:'Vanilla Buttercream', color:'#f7e8c8'},
                {name:'Chocolate', color:'#3e2419'},
                {name:'Strawberry', color:'#ffc4d6', soon:true},
              ].map(f => (
                <button key={f.name} onClick={()=>!f.soon && setFlavor(f.name)} style={{flex:1,border:flavor===f.name?'2px solid var(--ink)':'1px solid var(--line)',background:'var(--paper)',borderRadius:8,padding:'10px 12px',display:'flex',alignItems:'center',gap:10,cursor:f.soon?'not-allowed':'pointer',opacity:f.soon?0.5:1,textAlign:'left'}}>
                  <span style={{width:22,height:22,borderRadius:'50%',background:f.color,border:'1px solid rgba(0,0,0,0.15)'}}/>
                  <span style={{fontSize:12,fontWeight:600,lineHeight:1.2}}>{f.name}{f.soon && <div style={{fontSize:9,color:'var(--ink-3)',fontWeight:400}}>Coming soon</div>}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div style={{marginBottom:18}}>
            <div className="eyebrow" style={{marginBottom:8}}>Purchase plan</div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <button onClick={()=>setPlan('subscribe')} style={{textAlign:'left',padding:16,borderRadius:8,border:plan==='subscribe'?'2px solid var(--pink)':'1px solid var(--line)',background:plan==='subscribe'?'rgba(0,198,224,0.04)':'var(--paper)',cursor:'pointer',position:'relative',display:'flex',alignItems:'center',gap:14}}>
                <span style={{width:18,height:18,borderRadius:'50%',border:'2px solid var(--pink)',display:'flex',alignItems:'center',justifyContent:'center'}}>{plan==='subscribe' && <span style={{width:8,height:8,borderRadius:'50%',background:'var(--pink)'}}/>}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:14,display:'flex',alignItems:'center',gap:8}}>Subscribe & save <span style={{background:'var(--pink)',color:'#fff',fontSize:10,padding:'2px 7px',borderRadius:100,letterSpacing:'0.05em'}}>−15%</span></div>
                  <div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>Every 30 days · skip, pause, cancel anytime</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontWeight:700}}>$102.00</div>
                  <div style={{fontSize:11,color:'var(--ink-4)',textDecoration:'line-through'}}>$120.00</div>
                </div>
              </button>
              <button onClick={()=>setPlan('once')} style={{textAlign:'left',padding:16,borderRadius:8,border:plan==='once'?'2px solid var(--ink)':'1px solid var(--line)',background:'var(--paper)',cursor:'pointer',display:'flex',alignItems:'center',gap:14}}>
                <span style={{width:18,height:18,borderRadius:'50%',border:'2px solid var(--ink)',display:'flex',alignItems:'center',justifyContent:'center'}}>{plan==='once' && <span style={{width:8,height:8,borderRadius:'50%',background:'var(--ink)'}}/>}</span>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:14}}>One-time purchase</div>
                  <div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>Pay once · ships tomorrow</div>
                </div>
                <div style={{fontWeight:700}}>$120.00</div>
              </button>
            </div>
          </div>

          {/* Qty + ATC */}
          <div style={{display:'flex',gap:10,marginBottom:10}}>
            <div style={{display:'flex',alignItems:'center',border:'1.5px solid var(--ink)',borderRadius:6,overflow:'hidden'}}>
              <button onClick={()=>setQty(Math.max(1,qty-1))} style={{padding:'14px 14px',background:'transparent',border:'none',cursor:'pointer'}}><Icon.Minus/></button>
              <span style={{padding:'0 8px',fontWeight:700,minWidth:20,textAlign:'center'}}>{qty}</span>
              <button onClick={()=>setQty(qty+1)} style={{padding:'14px 14px',background:'transparent',border:'none',cursor:'pointer'}}><Icon.Plus/></button>
            </div>
            <button className="btn btn-pink btn-lg" style={{flex:1,letterSpacing:'0.12em'}}>
              Add to cart — ${(price*qty).toFixed(2)}
            </button>
          </div>

          {/* Price breakdown */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 0',borderTop:'1px dashed var(--line)',borderBottom:'1px dashed var(--line)',marginBottom:16}}>
            <div>
              <div style={{fontSize:13,fontWeight:600}}>32 meals per bag</div>
              <div style={{fontSize:11,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace"}}>312 g per serving · 4 scoops</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div className="display" style={{fontSize:28,color:'var(--pink)'}}>$3.19<span style={{fontSize:14,color:'var(--ink-3)'}}>/meal</span></div>
            </div>
          </div>

          {/* Trust bullets */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,fontSize:12}}>
            {[
              ['Ships in 1–2 days', Icon.Truck],
              ['30-day returns', Icon.Shield],
              ['Third-party tested', Icon.Flask],
              ['Made in USA', Icon.Leaf],
            ].map(([t, I], i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:8,color:'var(--ink-2)'}}>
                <I size={16}/>{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar/>

      {/* Meal framing — hero strip */}
      <section className="wm-bound" style={{padding:'64px 40px',background:'var(--paper-2)',borderBottom:'1px solid var(--line)'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:48,alignItems:'center'}}>
          <div>
            <h2 className="display" style={{fontSize:88,margin:'10px 0 18px'}}>A <span className="pink">meal</span><br/>in a shake.</h2>
            <p style={{fontSize:18,color:'var(--ink-2)',maxWidth:500,lineHeight:1.5}}>
              Most "protein shakes" leave an athlete still 800 calories short of where they need to be. Whey Maker is built as a full meal — real whole-food carbs, four protein sources, zero junk.
            </p>
            <div style={{display:'flex',gap:32,marginTop:32}}>
              {[['1,250','calories'],['60 g','protein'],['238 g','carbs'],['12 g','fat']].map(([n,l])=>(
                <div key={l}><div className="display" style={{fontSize:44,lineHeight:1}}>{n}</div><div className="eyebrow" style={{marginTop:4}}>{l}</div></div>
              ))}
            </div>
          </div>
          <div style={{aspectRatio:'4/5',position:'relative'}}>
            <ImgSlot id="d-meal-shake" placeholder={"Lifestyle — kid drinking shake post-workout\n1,250 cal"} style={{width:'100%',height:'100%'}}/>
            <div style={{position:'absolute',top:18,right:18,background:'#fff',padding:'4px 10px',borderRadius:100,fontSize:10,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.12em',textTransform:'uppercase',fontWeight:600,zIndex:2,pointerEvents:'none'}}>1,250 cal · 1 shake</div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <IngredientsSection/>

      {/* Comparison */}
      <section className="sec wm-bound">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:32}}>
          <div>
            <h2 className="display" style={{fontSize:72,margin:'10px 0 0'}}>How we <span className="hl-pink">stack up</span>.</h2>
          </div>
          <div style={{fontSize:13,color:'var(--ink-3)',maxWidth:340}}>Compared head-to-head on the four specs that matter most when you're trying to actually put weight on an athlete.</div>
        </div>
        <ComparisonGrid/>
      </section>

      {/* Math */}
      <section className="sec sec-dark wm-bound">
        <h2 className="display" style={{fontSize:72,margin:'10px 0 8px',color:'#fff'}}>Gaining weight is<br/>a <span className="pink">math problem</span>.</h2>
        <p style={{fontSize:16,color:'#c9c9cf',maxWidth:620,marginBottom:48}}>Most kids get told to "just eat more." That's not a plan. Here's what the numbers look like when you add one shake per day on top of real meals.</p>

        <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr auto 1fr auto 1fr',gap:16,alignItems:'center'}}>
          {[
            ['maintenance intake','3,000', 'cal / day', 'var(--ink-4)'],
            ['+',null,null,null],
            ['one whey maker','1,250','cal / day','var(--pink)'],
            ['×',null,null,null],
            ['seven days','7','days','var(--ink-4)'],
            ['=',null,null,null],
            ['weekly gain','~2.5','lb / week','var(--teal)'],
          ].map((item, i) => item[1]===null ? (
            <div key={i} className="display" style={{fontSize:48,color:'#333',textAlign:'center'}}>{item[0]}</div>
          ) : (
            <div key={i} style={{border:'1px solid #2a2a2e',borderRadius:10,padding:'24px 18px',background:'#141418'}}>
              <div className="eyebrow" style={{color:'var(--ink-4)'}}>{item[0]}</div>
              <div className="display" style={{fontSize:56,lineHeight:1,marginTop:10,color:item[3]}}>{item[1]}</div>
              <div style={{fontSize:12,color:'#999',marginTop:4,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.08em',textTransform:'uppercase'}}>{item[2]}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:11,color:'#777',marginTop:28,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.08em',textTransform:'uppercase'}}>* based on 3,500 cal surplus ≈ 1 lb gained · results vary with training load</div>
      </section>

      {/* Athletes */}
      <AthletesSection/>

      {/* Founder */}
      <section className="sec wm-bound" style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:56,alignItems:'center',background:'var(--paper-2)'}}>
        <div style={{aspectRatio:'4/5',position:'relative'}}>
          <ImgSlot id="d-founder" placeholder={"Founder portrait\nJordan Nevels — in gym"} dark style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',top:24,left:24,fontFamily:'Caveat, cursive',fontSize:22,color:'#00c6e0',transform:'rotate(-4deg)',pointerEvents:'none'}}>Jordan</div>
        </div>
        <div>
          <h2 className="display" style={{fontSize:68,margin:'10px 0 16px'}}>"I made this because nothing on the shelf was <span className="hl-teal">good enough</span> for my kids."</h2>
          <p style={{fontSize:16,color:'var(--ink-2)',lineHeight:1.55,maxWidth:540}}>Jordan Nevels spent a decade as an athletic trainer watching middle schoolers try to gain weight on shakes full of maltodextrin, sucralose, and Yellow #5. So he built the one he wished existed.</p>
          <div style={{display:'flex',gap:32,marginTop:24,paddingTop:24,borderTop:'1px solid var(--line-2)'}}>
            <div><div className="display" style={{fontSize:36}}>10 yr</div><div className="eyebrow" style={{marginTop:2}}>Athletic training</div></div>
            <div><div className="display" style={{fontSize:36}}>400+</div><div className="eyebrow" style={{marginTop:2}}>Athletes coached</div></div>
            <div><div className="display" style={{fontSize:36}}>TX</div><div className="eyebrow" style={{marginTop:2}}>Made &amp; shipped</div></div>
          </div>
          <div style={{marginTop:28,fontFamily:'Caveat, cursive',fontSize:32,lineHeight:1}}>— Jordan</div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection/>

      {/* Reviews summary */}
      <ReviewsSection/>

      {/* Sticky bottom CTA before footer */}
      <section className="sec wm-bound" style={{background:'var(--ink)',color:'#fff',textAlign:'center',padding:'88px 40px'}}>
        <div className="eyebrow" style={{color:'var(--ink-4)'}}>Ship it.</div>
        <h2 className="display" style={{fontSize:120,margin:'16px 0',lineHeight:0.9,color:'#fff'}}>Start <span className="pink">gaining</span>.</h2>
        <div style={{fontSize:16,color:'#c9c9cf',maxWidth:520,margin:'0 auto 32px'}}>32 real meals. $3.19 each on subscription. Cancel whenever. Ships from Texas in 1–2 days.</div>
        <button className="btn btn-pink btn-lg" style={{fontSize:20,padding:'22px 40px'}}>Add to cart — $102.00</button>
      </section>

      <Footer/>
    </div>
  );
}

// --- Sub-sections extracted for clarity ---
function IngredientsSection() {
  const ingredients = [
    {n:'Grass-fed whey isolate', amt:'45 g', kind:'whey', why:'90% protein, lowest-lactose form. Rare in mass gainers — most brands use cheaper concentrate.', src:'Pasture-raised, WI dairies'},
    {n:'Cluster dextrin', amt:'140 g', kind:'cluster', why:'Japanese-patented highly-branched carb. No sugar spike. Steady 2-hour energy release.', src:'Japan'},
    {n:'Organic sweet potato', amt:'40 g', kind:'sweetpotato', why:'A real whole-food carb — not maltodextrin filler. Vitamin A, potassium, fiber.', src:'Organic, North Carolina'},
    {n:'Non-GMO micellar casein', amt:'8 g', kind:'casein', why:'Slow-release protein. Keeps amino acids elevated for 6-8 hours after your shake.', src:'Non-GMO dairy'},
    {n:'Grass-fed beef collagen', amt:'7 g', kind:'collagen', why:'Joint, tendon and connective tissue support — critical for young athletes in growth spurts.', src:'Pasture-raised beef'},
    {n:'Natural cocoa / madagascar vanilla', amt:'—', kind:'cocoa', why:'Real flavor from real food. No sucralose, no acesulfame-K, no Yellow #5.', src:'Sourced whole'},
  ];
  return (
    <section className="sec wm-bound" style={{padding:'88px 40px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:40}}>
        <div>
          <h2 className="display" style={{fontSize:88,margin:'12px 0 0',maxWidth:800}}>Every ingredient.<br/>Every <span className="pink">milligram</span>.</h2>
        </div>
        <div style={{fontSize:13,color:'var(--ink-3)',maxWidth:320}}>What you put in your body matters. So we tell you exactly what's in this bag — and where it came from.</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'380px 1fr',gap:40}}>
        {/* Supplement facts panel */}
        <div style={{border:'2px solid var(--ink)',borderRadius:8,padding:22,background:'#fff',position:'sticky',top:90,alignSelf:'start'}}>
          <div className="display" style={{fontSize:32,borderBottom:'8px solid var(--ink)',paddingBottom:4}}>Supplement Facts</div>
          <div style={{fontSize:12,padding:'6px 0',borderBottom:'1px solid var(--ink)'}}>Serving size: 4 scoops (312 g)<br/>Servings per container: 32</div>
          <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0',fontSize:11,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace",borderBottom:'1px solid var(--ink)'}}>
            <span>Amount per serving</span><span>% DV*</span>
          </div>
          {[
            ['Calories', '1,250', '', true],
            ['Total Fat', '12 g', '15%'],
            ['  Saturated Fat', '4 g', '20%'],
            ['Cholesterol', '90 mg', '30%'],
            ['Sodium', '380 mg', '17%'],
            ['Total Carbohydrate', '238 g', '86%', true],
            ['  Cluster Dextrin', '140 g', '†'],
            ['  Sweet Potato', '40 g', '†'],
            ['  Dietary Fiber', '6 g', '21%'],
            ['  Total Sugars', '6 g', ''],
            ['Protein', '60 g', '120%', true],
            ['  Whey Isolate', '45 g', '†'],
            ['  Casein', '8 g', '†'],
            ['  Beef Collagen', '7 g', '†'],
            ['Calcium', '450 mg', '35%'],
            ['Iron', '4 mg', '22%'],
            ['Potassium', '680 mg', '14%'],
          ].map((r,i) => (
            <div key={i} style={{display:'flex',justifyContent:'space-between',fontSize:13,padding:'7px 0',borderBottom: r[3]?'2px solid var(--ink)':'1px solid var(--line)',fontWeight:r[3]?700:400,color:r[0].startsWith('  ')?'var(--ink-3)':'var(--ink)'}}>
              <span>{r[0]}</span><span style={{fontVariantNumeric:'tabular-nums'}}>{r[1]}  <span style={{color:'var(--ink-3)',marginLeft:8}}>{r[2]}</span></span>
            </div>
          ))}
          <div style={{fontSize:10,color:'var(--ink-3)',marginTop:10,lineHeight:1.4}}>* Percent Daily Values based on a 2,000 cal diet. <br/>† Daily Value not established.</div>
        </div>

        {/* Ingredient cards */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          {ingredients.map((ing, i) => (
            <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,padding:20,background:'var(--paper)',display:'flex',flexDirection:'column',gap:10,position:'relative'}}>
              <div style={{display:'flex',gap:14,alignItems:'flex-start'}}>
                <IngredientStill kind={ing.kind} size={70}/>
                <div style={{flex:1}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:8}}>
                    <div className="display" style={{fontSize:22,lineHeight:1}}>{ing.n}</div>
                    <span className="mono" style={{fontSize:11,color:'var(--pink)',fontWeight:700,whiteSpace:'nowrap'}}>{ing.amt}</span>
                  </div>
                  <div style={{fontSize:13,color:'var(--ink-2)',marginTop:8,lineHeight:1.5}}>{ing.why}</div>
                </div>
              </div>
              <div style={{marginTop:'auto',paddingTop:10,borderTop:'1px dashed var(--line)',display:'flex',justifyContent:'space-between',fontSize:11,fontFamily:"'JetBrains Mono',monospace",color:'var(--ink-3)',letterSpacing:'0.06em',textTransform:'uppercase'}}>
                <span>Source</span><span>{ing.src}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AthletesSection() {
  const athletes = [
    {src:'assets/athletes/austin-alexander.jpg', sport:'Football · 2025 · 4★', meta:'215 → 247 lbs'},
    {src:'assets/athletes/ej-walker.jpg', sport:'South Carolina signee', meta:'211 → 245 lbs'},
    {src:'assets/athletes/cam-thomas.jpg', sport:'Football · LB · 2026', meta:'205 → 217 lbs'},
    {src:'assets/athletes/nevels-fitness.jpg', sport:'Nevels Fitness', meta:'214 → 242 lbs · 40 time 4.89 → 4.72'},
  ];
  return (
    <section className="sec wm-bound" style={{padding:'88px 40px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:40}}>
        <div>
          <h2 className="display" style={{fontSize:88,margin:'12px 0 0'}}>Used by athletes.<br/>Trusted by <span className="hl-teal">parents</span>.</h2>
        </div>
        <div style={{fontSize:13,color:'var(--ink-3)',maxWidth:300}}>Before-and-afters from Jordan's own gym. Real kids, real timeframes, real food on the side.</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:16,marginBottom:24}}>
        {athletes.map((a, i) => (
          <div key={i} style={{border:'1px solid var(--line)',borderRadius:10,overflow:'hidden',background:'#fff'}}>
            <img src={a.src} alt="" style={{width:'100%',aspectRatio:'4/5',objectFit:'cover',display:'block'}} loading="lazy"/>
            <div style={{padding:'12px 16px',fontSize:11,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.06em',textTransform:'uppercase',display:'flex',justifyContent:'space-between',gap:8,flexWrap:'wrap'}}>
              <span>{a.sport}</span><span style={{color:'var(--ink)'}}>{a.meta}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{border:'1px solid var(--line)',borderRadius:12,padding:20,display:'grid',gridTemplateColumns:'240px 1fr',gap:24,alignItems:'center',background:'var(--paper-2)'}}>
        <div style={{aspectRatio:'16/10',position:'relative'}}>
          <ImgSlot id="d-parent-video" placeholder={"Parent video\nKim M."} dark style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
            <div style={{background:'var(--pink)',color:'#fff',borderRadius:'50%',width:56,height:56,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 8px 24px rgba(0,198,224,0.5)'}}><Icon.Play size={24}/></div>
          </div>
          <div style={{position:'absolute',bottom:8,right:10,fontSize:10,color:'#fff',background:'rgba(0,0,0,0.6)',padding:'2px 6px',borderRadius:4,fontFamily:"'JetBrains Mono',monospace",pointerEvents:'none'}}>2:14</div>
        </div>
        <div>
          <div className="eyebrow" style={{marginBottom:8}}>Parent testimonial · Kim M.</div>
          <div style={{fontSize:22,lineHeight:1.35,fontWeight:500}}>"My son gained <b className="hl-pink">25 pounds in one semester</b>. He eats real food and this — nothing else changed. His coaches noticed first."</div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = React.useState(0);
  const items = [
    ['Is this safe for my 13-year-old?', 'Yes. Whey Maker is formulated to be a food-first mass gainer — the protein and carb sources are the same whole foods your kid already eats, just concentrated and convenient. No stimulants, no proprietary blends, no banned substances. That said: consult your pediatrician before any supplement.'],
    ['When and how should they take it?', 'One shake per day, typically post-training or between meals. Mix with 16 oz of whole milk or water. The goal is addition, not replacement — this is extra calories on top of real meals.'],
    ['Will they just get fat?', 'Paired with training, no. The 60 g of protein and cluster-dextrin carbs are dosed to drive muscle synthesis and replenish glycogen, not just spike body fat. Athletes in our test group gained lean mass at roughly a 3:1 ratio.'],
    ['Can I mix it with milk?', 'Yes, and we recommend it for the extra calcium and calories. One 4-scoop serving + 16 oz whole milk = roughly 1,550 calories and 70 g protein.'],
    ['What if my athlete doesn\u2019t like the flavor?', '30-day full-bag guarantee. Send it back (even half-empty) for a full refund. We\'d rather you find the flavor that works than force it.'],
    ['How does the subscription work?', 'Ships every 30, 45, or 60 days — you pick. Skip, pause, or cancel anytime from your account. No minimums, no gotchas.'],
    ['Is it third-party tested?', 'Every batch. Heavy metals, pesticides, and protein content are verified by Eurofins Labs — certificates available on request per batch number.'],
    ['Where do you ship?', 'All 50 US states. Orders ship within 24 hours from our Austin warehouse; 1–2 day delivery to most addresses in TX, OK, AR, LA, NM.'],
  ];
  return (
    <section className="sec wm-bound" style={{padding:'88px 40px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:48}}>
        <div>
          <h2 className="display" style={{fontSize:72,margin:'12px 0 16px'}}>Ask anything.</h2>
          <p style={{fontSize:14,color:'var(--ink-3)',maxWidth:280,lineHeight:1.5}}>Can't find your answer? Text Jordan directly — seriously. <b style={{color:'var(--pink)'}}>(512) 555-0143</b></p>
        </div>
        <div>
          {items.map(([q,a],i)=>(
            <div key={i} style={{borderTop:i===0?'1px solid var(--line)':'none',borderBottom:'1px solid var(--line)'}}>
              <button onClick={()=>setOpen(open===i?-1:i)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'22px 0',background:'transparent',border:'none',cursor:'pointer',textAlign:'left'}}>
                <span style={{fontSize:18,fontWeight:600}}>{q}</span>
                <span style={{transform:open===i?'rotate(45deg)':'none',transition:'transform .2s'}}><Icon.Plus size={20}/></span>
              </button>
              {open===i && <div style={{paddingBottom:24,fontSize:15,color:'var(--ink-2)',maxWidth:640,lineHeight:1.55}}>{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="sec wm-bound" style={{padding:'88px 40px',background:'var(--paper-2)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:48,alignItems:'flex-start'}}>
        <div>
          <h2 className="display" style={{fontSize:72,margin:'12px 0 20px'}}>248 reviews.<br/><span className="pink">4.9</span> / 5.</h2>
          <div style={{display:'flex',gap:6,alignItems:'center',marginBottom:8}}><Stars n={5} size={20}/></div>
          {[[5,216],[4,24],[3,5],[2,2],[1,1]].map(([s,c])=>(
            <div key={s} style={{display:'flex',alignItems:'center',gap:10,fontSize:12,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>
              <span style={{width:14}}>{s}★</span>
              <div style={{flex:1,height:6,background:'var(--paper-3)',borderRadius:100,overflow:'hidden'}}>
                <div style={{width:`${c/248*100}%`,height:'100%',background:'var(--pink)'}}/>
              </div>
              <span style={{width:30,textAlign:'right',color:'var(--ink-3)'}}>{c}</span>
            </div>
          ))}
          <button className="btn" style={{marginTop:16,width:'100%'}}>Write a review</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          {[
            {n:'Marissa C.', when:'2 wks ago', t:'My kid finally hit 160', b:'He\'s a freshman wrestler who couldn\'t break 140. Three months on Whey Maker + real lunches and he\'s up to 162 — his coach asked what changed.', stars:5, tag:'Verified buyer'},
            {n:'Tony R.', when:'1 mo ago', t:'Actually tastes like vanilla', b:'I\'ve been through every mass gainer on the market. This one doesn\'t taste like chalk and Splenda. Mixes clean in the shaker, no chunks.', stars:5, tag:'Subscriber'},
            {n:'Kimberly D.', when:'1 mo ago', t:'Worth the price for real ingredients', b:'I was paying $30 for Serious Mass and giving up on what was in it. $120 for actually-clean ingredients is the right trade for my son.', stars:5, tag:'Parent'},
            {n:'Chris W.', when:'2 mo ago', t:'Ships fast, settles clean', b:'Ordered Tuesday, here Thursday. Doesn\'t foam up or separate overnight in the fridge. Only knock: want it in a chocolate-peanut-butter flavor.', stars:4, tag:'Verified buyer'},
          ].map((r,i)=>(
            <div key={i} style={{background:'#fff',border:'1px solid var(--line)',borderRadius:10,padding:20}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <Stars n={r.stars}/>
                <span style={{fontSize:11,color:'var(--ink-3)',fontFamily:"'JetBrains Mono',monospace"}}>{r.when}</span>
              </div>
              <div className="display" style={{fontSize:22,marginBottom:8}}>{r.t}</div>
              <div style={{fontSize:13,color:'var(--ink-2)',lineHeight:1.5}}>{r.b}</div>
              <div style={{marginTop:14,paddingTop:12,borderTop:'1px dashed var(--line)',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:11,color:'var(--ink-3)'}}>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <Avatar name={r.n} size={32}/>
                  <span style={{fontWeight:600,color:'var(--ink-2)',fontSize:13}}>{r.n}</span>
                </div>
                <span className="mono" style={{letterSpacing:'0.06em'}}>{r.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.DesktopPDP = DesktopPDP;
