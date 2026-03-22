'use client'

import { useScroll, useTransform, motion, useSpring } from "framer-motion"
import React, { useRef } from "react"
import { Search, PenTool, Code2, Rocket, Headset, Terminal, Cpu, Activity } from "lucide-react"
import { useTranslation } from "@/contexts/LanguageContext"

export default function PremiumTimeline() {
  const { t } = useTranslation()

  const timelineData = [
    {
      phase: "01",
      title: t.timeline.phases[0].title,
      tagline: t.timeline.phases[0].tagline,
      icon: <Search className="size-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            {t.timeline.phases[0].description}
          </p>
          <div className="flex gap-2">
            {t.timeline.phases[0].tags?.map((tag, i) => (
              <span key={i} className={`text-[9px] font-mono px-2 py-1 border rounded ${i === 0 ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-gray-500 border-white/10'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      phase: "02",
      title: t.timeline.phases[1].title,
      tagline: t.timeline.phases[1].tagline,
      icon: <PenTool className="size-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            {t.timeline.phases[1].description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-blue-500/50" /></div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-blue-500/50" /></div>
          </div>
        </div>
      ),
    },
    {
      phase: "03",
      title: t.timeline.phases[2].title,
      tagline: t.timeline.phases[2].tagline,
      icon: <Code2 className="size-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-[#050505] border border-white/5 p-4 rounded-lg font-mono text-[10px] text-gray-500 italic">
            <span className="text-blue-500">const</span> build = <span className="text-yellow-500">async</span> () ={">"} {"{"} <br />
            &nbsp;&nbsp;await <span className="text-purple-500">Datafuse</span>.optimize(); <br />
            &nbsp;&nbsp;return <span className="text-green-500">"SUCCESS"</span>; <br />
            {"}"}
          </div>
          <p className="text-gray-400 text-sm font-light">{t.timeline.phases[2].description}</p>
        </div>
      ),
    },
    {
      phase: "04",
      title: t.timeline.phases[3].title,
      tagline: t.timeline.phases[3].tagline,
      icon: <Rocket className="size-5" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-[10px] font-mono mb-2">
            <span className="text-blue-400">{t.timeline.phases[3].uptime}</span>
            <span className="text-green-500">99.99%</span>
          </div>
          <div className="flex gap-1 items-end h-8">
            {[40, 60, 35, 90, 55, 70, 45].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      ),
    }
  ]
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="processus" className="bg-[#020203] py-40 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-32">
          <div className="flex items-center gap-3 font-mono text-[10px] text-blue-500 tracking-[0.4em] uppercase mb-6">
            <Activity size={14} />
            <span>{t.timeline.badge}</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
            {t.timeline.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-700">{t.timeline.subtitle}</span>
          </h2>
        </div>

        <div className="relative">
          {/* Rail de progression vertical */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 w-[2px] h-full bg-white/[0.03]">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-600 via-blue-400 to-transparent shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="space-y-32">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                  <motion.div 
                    whileInView={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                    viewport={{ once: true }}
                    className="size-14 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center text-blue-500 shadow-xl shadow-black group"
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-500/5 animate-pulse" />
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content Logic */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:ml-auto md:pl-24'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-blue-500 tracking-widest uppercase opacity-60">
                        {item.tagline} // PHASE_{item.phase}
                      </span>
                      <h3 className="text-3xl font-bold text-white mt-2 tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500 group relative">
                      {/* Decorative border glow */}
                      <div className="absolute inset-0 rounded-[2rem] border border-blue-500/0 group-hover:border-blue-500/20 transition-colors pointer-events-none" />
                      
                      <div className="relative z-10 text-left">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Number Watermark (Desktop only) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[120px] font-bold text-white/[0.02] pointer-events-none ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
                  {item.phase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}