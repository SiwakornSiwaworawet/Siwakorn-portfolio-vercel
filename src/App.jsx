import React, { useState } from 'react'

// ดึงรูปภาพเข้ามาแบบระบบ Vite Pipeline
import intern01 from './assets/img/intern01.jpg'
import intern02 from './assets/img/intern02.jpg'
import intern03 from './assets/img/intern03.jpg'
import intern04 from './assets/img/intern04.jpg'
import intern05 from './assets/img/intern05.jpg'

import watarun01 from './assets/img/watarun01.jpg'
import watarun02 from './assets/img/watarun02.jpg'
import watarun03 from './assets/img/watarun03.jpg'

import KH02 from './assets/img/KH02.jpg'
import KH03 from './assets/img/KH03.jpg'
import KH04 from './assets/img/KH04.jpg'
import KH05 from './assets/img/KH05.jpg'

import vawt01 from './assets/img/vawt01.jpg'
import vawt02 from './assets/img/vawt02.jpg'
import vawt03 from './assets/img/vawt03.jpg'
import vawt04 from './assets/img/vawt04.jpg'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentGroup, setCurrentGroup] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleries = {
    ces: [intern01, intern02, intern03, intern04, intern05],
    watarun: [watarun03, watarun01, watarun02],
    surveying: [KH02, KH03, KH05, KH04],
    vawt: [vawt01, vawt02, vawt03, vawt04]
  }

  const openModal = (group, index) => {
    setCurrentGroup(galleries[group] || [])
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + currentGroup.length) % currentGroup.length)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % currentGroup.length)
  }

  // ตัวแปรสีถอดรหัสมาจากเว็บพี่เขาเป๊ะ ๆ
  const colors = {
    bg: '#ffffff',
    dark: '#1e293b',
    muted: '#64748b',
    sageDark: '#4d6150', // สีเขียวเสจเข้มแบบพี่เขา
    sageLight: 'rgba(135, 169, 142, 0.25)', // สีเขียวเสจอ่อนแบบโปร่งแสง
    border: '#e2e8f0'
  }

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.dark, minHeight: '100vh', fontFamily: 'system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* 🧭 แถบ Navigation ด้านบนสไตล์พี่เขา */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${colors.border}`, zIndex: 50, padding: '16px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'between', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: colors.sageDark }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="8" width="18" height="13" rx="1"></rect>
                <path d="M7 8V5a5 5 0 0 1 10 0v3"></path>
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '1.05rem', fontWeight: '700', color: colors.dark, margin: 0, trackingTight: '-0.025em' }}>Siwakorn</h1>
              <p style={{ fontSize: '10px', color: colors.muted, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Civil Engineering Student</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#skills" style={{ fontSize: '0.85rem', color: colors.muted, textDecoration: 'none', fontWeight: '500' }}>Skills</a>
            <a href="#work-experience" style={{ fontSize: '0.85rem', color: colors.muted, textDecoration: 'none', fontWeight: '500' }}>Experience</a>
            <a href="#projects" style={{ fontSize: '0.85rem', color: colors.muted, textDecoration: 'none', fontWeight: '500' }}>Projects</a>
          </div>
        </div>
      </nav>

      {/* 🔝 ส่วนต้อนรับด้านบนสุด (Hero Section) */}
      <section style={{ backgroundColor: '#f8fafc', padding: '140px 24px 80px 24px', borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: colors.sageDark, margin: 0, lineHeight: '1.1' }}>
            Hello, I'm<br />Siwakorn!
          </h1>
          <p style={{ color: colors.muted, fontSize: '1.15rem', margin: 0, maxWidth: '600px' }}>
            Civil Engineering — Focus on Scan-to-FEM structures, data analysis and high-precision survey workflows.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="#contact" style={{ display: 'inline-block', border: `2px solid ${colors.dark}`, color: colors.dark, padding: '12px 32px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', letterSpacing: '0.05em', transition: 'all 0.2s' }}>
              CONTACT ME
            </a>
          </div>
        </div>
      </section>

      {/* 🛠️ ส่วนเนื้อหาเว็บบอร์ดหลัก */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' }}>
        
        {/* SECTION 1: SKILLS */}
        <section id="skills" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
          <h2 style={{ color: colors.sageDark, fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Engineering & Design Software', detail: 'AutoCAD, Revit, Civil 3D' },
              { title: 'Structural Analysis', detail: 'SAP2000, Abaqus, VisualFEA (CBT), SUTStructor' },
              { title: 'Project Management', detail: 'Microsoft Project' },
              { title: 'Computational Tools', detail: 'MATLAB' },
              { title: 'Documentation', detail: 'Microsoft Excel, Microsoft Word' }
            ].map((skill, index) => (
              <div key={index} style={{ border: `1px solid ${colors.border}`, padding: '20px', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                <h3 style={{ fontSize: '0.85rem', color: colors.muted, marginTop: 0, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.title}</h3>
                <p style={{ fontSize: '1.05rem', fontWeight: '600', color: colors.dark, margin: 0 }}>{skill.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: colors.border, margin: '60px 0' }} />

        {/* SECTION 2: WORK EXPERIENCE */}
        <section id="work-experience" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
          <p style={{ fontSize: '2.2rem', color: colors.sageDark, fontWeight: '800', margin: '0 0 32px 0', trackingWide: '0.05em' }}>Work Experience</p>
          
          <div style={{ border: `1px solid ${colors.border}`, padding: '32px', borderRadius: '12px', backgroundColor: '#ffffff', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', borderBottom: `1px solid ${colors.border}`, paddingBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: colors.colorsageDark, color: colors.sageDark }}>01 \ SITE ENGINEER INTERN</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '4px 0 0 0' }}>Site Engineer Intern at <span style={{ color: colors.sageDark }}>CES</span></h3>
              </div>
              <span style={{ color: colors.muted, fontSize: '0.9rem', fontWeight: '500' }}>June 2025 - Aug 2025 (2 months)</span>
            </div>
            
            <p style={{ color: colors.dark, fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
              <strong>Project:</strong> Turnkey Construction for Thanakorn Vegetable Oil Products Co., Ltd. (Tank Car Loading Facility, Retaining Wall, and Truck Parking Area)
            </p>

            <h4 style={{ color: colors.sageDark, fontWeight: '700', margin: '0 0 8px 0' }}>Accomplishments:</h4>
            <ul style={{ paddingLeft: '20px', color: colors.muted, fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '28px' }}>
              <li>Performed slope and elevation analysis for <strong>32,600–35,000 sq.m.</strong> areas, collecting <strong>700+ elevation points</strong>.</li>
              <li>Calculated accurate quantity take-offs for concrete, rebar, and formwork.</li>
              <li>Verified concrete volumes for slabs, ramps, and trenches against design specs.</li>
              <li>Inspected reinforcement installations and coordinated corrective actions onsite.</li>
            </ul>

            {/* 📸 กริดรูปภาพฝึกงานแบบเหลื่อมสไตล์เว็บพี่เขา */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {galleries.ces.slice(0, 4).map((img, idx) => (
                  <div key={idx} onClick={() => openModal('ces', idx)} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer', border: `1px solid ${colors.border}` }}>
                    <img src={img} alt="Internship" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                  </div>
                ))}
              </div>
              <div onClick={() => openModal('ces', 4)} style={{ overflow: 'hidden', borderRadius: '12px', cursor: 'pointer', border: `1px solid ${colors.border}`, position: 'relative' }}>
                <div style={{ absolute: 'absolute', inset: 0, backgroundColor: colors.sageDark, opacity: 0.1, zIndex: 1, pointerEvents: 'none' }} />
                <img src={galleries.ces[4]} alt="Internship Large" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: colors.muted, marginTop: '12px', margin: '12px 0 0 0' }}><em>Click on an image to view full size</em></p>
          </div>
        </section>

        <div style={{ height: '1px', backgroundColor: colors.border, margin: '60px 0' }} />

        {/* SECTION 3: PROJECTS & CASE STUDIES */}
        <section id="projects" style={{ scrollMarginTop: '100px' }}>
          <h2 style={{ color: colors.sageDark, fontSize: '2.2rem', fontWeight: '800', marginBottom: '8px' }}>Projects & Case Studies</h2>
          <p style={{ color: colors.muted, fontSize: '0.95rem', marginBottom: '32px' }}>Deep dives into structural analysis, workflows, and technical achievements.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '24px' }}>
            
            {/* CARD 1: WAT ARUN */}
            <div style={{ border: `1px solid ${colors.border}`, borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#f1f5f9', overflow: 'hidden' }} onClick={() => openModal('watarun', 0)}>
                <img src={galleries.watarun[0]} alt="Wat Arun" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', color: colors.sageDark, fontWeight: '700', textTransform: 'uppercase', trackingWide: '0.05rem' }}>Heritage Structure Assessment</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '4px', marginBottom: '8px' }}>Structural Monitoring of Wat Arun</h3>
                <p style={{ fontSize: '0.875rem', color: colors.muted, lineHeight: '1.5', marginBottom: '16px' }}>
                  Non-invasive assessment using 3D laser scanning and Scan-to-FEM workflow under defined seismic loading conditions.
                </p>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: 'auto' }}>
                  <iframe src="https://www.youtube.com/embed/r96UBTjSwyY" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} title="Wat Arun"></iframe>
                </div>
              </div>
            </div>

            {/* CARD 2: RC DESIGN */}
            <div style={{ border: `1px solid ${colors.border}`, borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', color: colors.sageDark, fontWeight: '700', textTransform: 'uppercase', trackingWide: '0.05rem' }}>Strength Design Method</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '4px', marginBottom: '8px' }}>Reinforced Concrete Office Design</h3>
                <p style={{ fontSize: '0.875rem', color: colors.muted, lineHeight: '1.5', marginBottom: '16px' }}>
                  Full element design of slabs, beams, columns, and foundations for a 2-storey home office utilizing SAP2000.
                </p>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginTop: 'auto' }}>
                  <iframe src="https://www.youtube.com/embed/flXTO_AkzQQ" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} title="RC Design"></iframe>
                </div>
              </div>
            </div>

            {/* CARD 3: SURVEY CAMP */}
            <div style={{ border: `1px solid ${colors.border}`, borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#f1f5f9', overflow: 'hidden' }} onClick={() => openModal('surveying', 0)}>
                <img src={galleries.surveying[0]} alt="Surveying" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '10px', color: colors.sageDark, fontWeight: '700', textTransform: 'uppercase', trackingWide: '0.05rem' }}>Khao Yai Field Camp</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '4px', marginBottom: '8px' }}>Topographical Surveying Workflows</h3>
                <p style={{ fontSize: '0.875rem', color: colors.muted, lineHeight: '1.5', margin: 0 }}>
                  Established robust horizontal control via traverse computation, achieving an accuracy ratio of 1:30,000.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 🧾 ส่วนท้ายเว็บสไตล์คลาสสิกสะอาดยกมาจากเทมเพลตพี่เขา */}
      <footer id="contact" style={{ backgroundColor: colors.dark, color: '#ffffff', padding: '60px 24px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '12px' }}>Let's Build Something Great Together</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
            Open to discussing structural modeling, site engineering roles, or innovative engineering projects.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: '40px 0 0 0' }}>
            © 2026 Siwakorn Sivaworawet. All rights reserved. | Powered by React & Vite
          </p>
        </div>
      </footer>

      {/* 🖼️ ระบบ Lightbox Modal สำหรับแสดงรูปภาพ */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: 'fixed', zIndex: 9999, left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ position: 'absolute', top: '20px', right: '35px', color: colors.dark, fontSize: '40px', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>
          {currentGroup.length > 1 && (
            <button onClick={prevImage} style={{ position: 'absolute', left: '5%', color: colors.dark, fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}>&#10094;</button>
          )}
          <img src={currentGroup[currentIndex]} alt="View" style={{ maxWidth: '85%', maxHeight: '80vh', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', border: `1px solid ${colors.border}` }} />
          {currentGroup.length > 1 && (
            <button onClick={nextImage} style={{ position: 'absolute', right: '5%', color: colors.dark, fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}>&#10095;</button>
          )}
          <div style={{ color: colors.muted, marginTop: '16px', fontSize: '0.9rem', fontWeight: '600' }}>
            {currentIndex + 1} / {currentGroup.length}
          </div>
        </div>
      )}

    </div>
  )
}

export default App