(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,a)=>{const s=a(475),{lightningChart:r,PointShape:n,PalettedFill:o,LUT:i,regularColorSteps:l,Themes:d}=s,{createProgressiveTraceGenerator:h}=a(27),p=r().ChartXY({}).setTitle("2D points value palette coloring").setPadding({right:20}),u=new o({lookUpProperty:"value",lut:new i({units:"trace dist (y)",interpolate:!0,steps:l(0,10,p.getTheme().examples.intensityColorPalette).map(((e,t,a)=>t===a.length-1?{...e,color:e.color.setA(0)}:e))})});h().setNumberOfPoints(1e3).generate().toPromise().then((e=>{const t=p.addPointSeries({pointShape:n.Circle}).setName("Outliers").setPointSize(3).setPointFillStyle(u).setIndividualPointValueEnabled(!0),a=[];e.forEach((e=>a.push(...new Array(Math.round(50*Math.random())).fill(0).map(((t,a)=>{const s=e.y+10*(2*Math.random()-1);return{x:e.x,y:s,value:Math.abs(s-e.y)}}))))),t.add(a),p.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName("Trace stroke").add(e).setStrokeStyle((e=>e.setThickness(5))),p.addLegendBox().add(p).setAutoDispose({type:"max-width",maxWidth:.2})}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);