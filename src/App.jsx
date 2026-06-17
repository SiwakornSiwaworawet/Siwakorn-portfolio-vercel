import React, { useState } from 'react'

// ดึงรูปภาพเข้ามาแบบระบบ Vite สากลเพื่อให้บิ้วด์ผ่าน 100%
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

  // คลังรูปภาพที่ผูกกับตัวแปรที่ Import เข้ามาอย่างถูกต้อง
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

  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* 🔝 Hero Header */}
      <header style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px 40px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Siwakorn Sivaworawet
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', fontWeight: '400', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Civil Engineering Student at King Mongkut's University of Technology Thonburi
        </p>

        {/* 🧭 Navigation */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['Skills', 'Work Experience', 'Projects'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              style={{ textDecoration: 'none', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)', backgroundColor: 'rgba(56, 189, 248, 0.05)', padding: '10px 24px', borderRadius: '30px', fontWeight: '500', fontSize: '0.95rem', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.target.style.backgroundColor = 'rgba(56, 189, 248, 0.15)'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseOut={(e) => { e.target.style.backgroundColor = 'rgba(56, 189, 248, 0.05)'; e.target.style.transform = 'translateY(0)' }}
            >
              {item}
            </a>
          ))}
        </nav>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#1e293b' }} />
      </header>

      {/* 🛠️ Main Content */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px 24px' }}>
        
        {/* SECTION 1: SKILLS */}
        <section id="skills" style={{ paddingTop: '40px', marginBottom: '60px' }}>
          <h2 style={{ color: '#38bdf8', fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '8px' }}>🛠️</span> Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Engineering & Design Software', detail: 'AutoCAD, Revit, Civil 3D' },
              { title: 'Structural Analysis', detail: 'SAP2000, Abaqus, VisualFEA (CBT), SUTStructor' },
              { title: 'Project Management', detail: 'Microsoft Project' },
              { title: 'Computational Tools', detail: 'MATLAB' },
              { title: 'Documentation', detail: 'Microsoft Excel, Microsoft Word' }
            ].map((skill, index) => (
              <div key={index} style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1rem', color: '#94a3b8', marginTop: 0, marginBottom: '8px' }}>{skill.title}</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#f8fafc', margin: 0 }}>{skill.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: 'none', height: '1px', backgroundColor: '#1e293b', margin: '40px 0' }} />

        {/* SECTION 2: WORK EXPERIENCE */}
        <section id="work-experience" style={{ paddingTop: '40px', marginBottom: '60px' }}>
          <h2 style={{ color: '#38bdf8', fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '8px' }}>💼</span> Work Experience
          </h2>
          
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Site Engineer Intern at <span style={{ color: '#38bdf8' }}>CES</span></h3>
              <span style={{ color: '#64748b', fontWeight: '500' }}>June 2025 - Aug 2025 (2 months) | Samut Prakan</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginTop: 0, marginBottom: '20px' }}>
              <strong>Project:</strong> Turnkey Construction for Thanakorn Vegetable Oil Products Co., Ltd. (Tank Car Loading Facility, Retaining Wall, and Truck Parking Area)
            </p>

            <h4 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Accomplishments</h4>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '24px' }}>
              <li>Performed slope and elevation analysis for <strong>32,600–35,000 sq.m.</strong> areas, collecting <strong>700+ elevation points</strong>.</li>
              <li>Calculated accurate quantity take-offs for concrete, rebar, and formwork.</li>
              <li>Verified concrete volumes for slabs, ramps, and trenches against design specs.</li>
              <li>Inspected reinforcement installations and coordinated corrective actions onsite.</li>
            </ul>

            {/* 📸 กริดรูปภาพฝึกงาน */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {galleries.ces.slice(0, 4).map((img, idx) => (
                  <div key={idx} onClick={() => openModal('ces', idx)} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#1f2937' }}>
                    <img src={img} alt="Internship" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                  </div>
                ))}
              </div>
              <div onClick={() => openModal('ces', 4)} style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#1f2937' }}>
                <img src={galleries.ces[4]} alt="Internship Large" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b', marginTop: '12px', marginBottom: 0 }}><em>Click on an image to view full size</em></p>
          </div>
        </section>

        <hr style={{ border: 'none', height: '1px', backgroundColor: '#1e293b', margin: '40px 0' }} />

        {/* SECTION 3: PROJECTS */}
        <section id="projects" style={{ paddingTop: '40px' }}>
          <h2 style={{ color: '#38bdf8', fontSize: '1.8rem', fontWeight: '700', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '8px', borderRadius: '8px' }}>🏗️</span> Projects
          </h2>

          {/* PROJECT 1: WAT ARUN */}
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', marginTop: 0, marginBottom: '8px' }}>Structural Health Monitoring of Wat Arun</h3>
            <p style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>Wat Arun Ratchavararam</p>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
              Non-invasive heritage structure assessment using 3D laser scanning and finite element analysis.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div onClick={() => openModal('watarun', 0)} style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                  <img src={galleries.watarun[0]} alt="Wat Arun 03" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                </div>
                <div onClick={() => openModal('watarun', 1)} style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                  <img src={galleries.watarun[1]} alt="Wat Arun 01" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                </div>
              </div>
              <div onClick={() => openModal('watarun', 2)} style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                <img src={galleries.watarun[2]} alt="Wat Arun 02" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
              </div>
            </div>

            <h4 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Key Features</h4>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '24px' }}>
              <li><strong>3D Scanning:</strong> Processed post-earthquake 3D laser scan data.</li>
              <li><strong>Geometry Analysis:</strong> Compared pre-event and post-event geometry.</li>
              <li><strong>Material Testing:</strong> Created masonry prism specimens.</li>
              <li><strong>Simulation:</strong> Built a finite element model for structural analysis.</li>
              <li><strong>Evaluation:</strong> Evaluated settlement and self-weight effects.</li>
            </ul>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <iframe src="https://www.youtube.com/embed/r96UBTjSwyY" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allowFullScreen title="Wat Arun Project"></iframe>
            </div>
          </div>

          {/* PROJECT 2: RC DESIGN */}
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', marginTop: 0, marginBottom: '8px' }}>Reinforced Concrete Design Project</h3>
            <p style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>2-Storey Reinforced Concrete Home Office</p>
            <p style={{ color: '#cbd5e1', marginBottom: '24px' }}>Structural design using the Strength Design Method.</p>

            <h4 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Key Features</h4>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '24px' }}>
              <li><strong>Element Design:</strong> Designed slabs, beams, columns, stairs, and foundations.</li>
              <li><strong>Software Utilization:</strong> Used SAP2000, Excel, and Structural Analyzer.</li>
              <li><strong>Load Analysis:</strong> Calculated loads and internal forces.</li>
              <li><strong>Documentation:</strong> Prepared full structural drawings and report.</li>
            </ul>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <iframe src="https://www.youtube.com/embed/flXTO_AkzQQ" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allowFullScreen title="RC Design Project"></iframe>
            </div>
          </div>

          {/* PROJECT 3: SURVEY CAMP */}
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', marginTop: 0, marginBottom: '8px' }}>Surveying Field Camp 2024</h3>
            <p style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>Khao Yai National Park</p>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
              Completed a comprehensive 10-day surveying field camp covering a 5,500 sq.m. area. The project involved end-to-end surveying workflows, from establishing precise control networks to generating 3D topographical models and executing structural setting out.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div onClick={() => openModal('surveying', 0)} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                    <img src={galleries.surveying[0]} alt="Survey 02" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div onClick={() => openModal('surveying', 1)} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                    <img src={galleries.surveying[1]} alt="Survey 03" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div onClick={() => openModal('surveying', 2)} style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                  <img src={galleries.surveying[2]} alt="Survey 05" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div onClick={() => openModal('surveying', 3)} style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                <img src={galleries.surveying[3]} alt="Survey 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <h4 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Key Accomplishments</h4>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
              <li><strong>Topographical Surveying:</strong> Established robust horizontal and vertical control points via traversing and leveling techniques, collecting over 700 precise elevation data points.</li>
              <li><strong>High-Precision Analysis:</strong> Executed traverse computations and adjustments, achieving an impressive accuracy ratio of 1:30,000, alongside detailed profile and cross-section analysis.</li>
              <li><strong>Earthwork Modeling:</strong> Conducted cut-and-fill analysis using Civil 3D, comparing existing and proposed soil surfaces to calculate accurate earthwork volumes.</li>
              <li><strong>Structural Setting Out:</strong> Successfully integrated 3D architectural house designs onto the finalized topographical map to determine accurate setting-out coordinates for construction.</li>
            </ul>
          </div>

          {/* PROJECT 4: WIND TURBINE */}
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '16px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', marginTop: 0, marginBottom: '8px' }}>Vertical Axis Wind Turbine Design</h3>
            <p style={{ color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>Presented at KMUTT Open House (2024)</p>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
              Designed, analyzed, and optimized a Vertical Axis Wind Turbine (VAWT) presented at the KMUTT Open House (2024). The project's core objective was to generate sufficient power to illuminate a connected light bulb. Development involved writing custom Arduino code to accurately measure RPM and conduct comprehensive wind-velocity tests to optimize performance. Professors selected it as one of the top third-year projects.
            </p>

            <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {galleries.vawt.slice(0, 3).map((img, idx) => (
                  <div key={idx} onClick={() => openModal('vawt', idx)} style={{ aspectRatio: '2/3', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                    <img src={img} alt="Turbine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <div onClick={() => openModal('vawt', 3)} style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                <img src={galleries.vawt[3]} alt="Turbine Large" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <h4 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Key Accomplishments</h4>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>
              <li><strong>Recognition:</strong> Selected by professors as one of the <strong>"Best of 3rd-Year Projects"</strong>.</li>
              <li><strong>Development & Coding:</strong> Developed custom Arduino code to measure RPM and process real-time performance data.</li>
              <li><strong>Testing & Optimization:</strong> Conducted comprehensive wind velocity tests to refine aerodynamic efficiency.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* 🧾 Footer */}
      <footer style={{ backgroundColor: '#090d16', padding: '40px 24px', textAlign: 'center', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '0.9rem' }}>
        <a href="#" style={{ color: '#38bdf8', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>↑ Back to Top</a>
        <p style={{ margin: '0 0 6px 0' }}>© 2026 Siwakorn Siwaworawet. All rights reserved.</p>
        <p style={{ margin: 0 }}>Built with React & Vite | Deployed on Vercel</p>
      </footer>

      {/* 🖼️ Lightbox Modal */}
      {modalOpen && (
        <div 
          onClick={() => setModalOpen(false)}
          style={{ position: 'fixed', zIndex: 9999, left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(3, 7, 18, 0.9)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', justifyYontent: 'center', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{ position: 'absolute', top: '20px', right: '35px', color: '#fff', fontSize: '40px', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>
          
          {currentGroup.length > 1 && (
            <button onClick={prevImage} style={{ position: 'absolute', left: '5%', color: '#fff', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer', userSelect: 'none' }}>&#10094;</button>
          )}

          <img 
            src={currentGroup[currentIndex]} 
            alt="Enlarged view" 
            style={{ maxWidth: '85%', maxHeight: '80vh', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }} 
          />

          {currentGroup.length > 1 && (
            <button onClick={nextImage} style={{ position: 'absolute', right: '5%', color: '#fff', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer', userSelect: 'none' }}>&#10095;</button>
          )}
          
          <div style={{ color: '#94a3b8', marginTop: '16px', backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>
            {currentIndex + 1} / {currentGroup.length}
          </div>
        </div>
      )}

    </div>
  )
}

export default App