import React from 'react'

function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#f8fafc' }}>Sivakorn Sivaworawet</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', margin: 0 }}>Civil Engineering Portfolio | KMUTT</p>
      </header>

      <main style={{ marginTop: '40px' }}>
        <section style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #38bdf8' }}>
          <h2 style={{ color: '#38bdf8', marginTop: 0 }}>🏗️ Thesis Project & Research</h2>
          <p style={{ fontWeight: 'bold', margin: '10px 0' }}>Scan-to-FEM Workflow of Wat Arun Central Prang</p>
          <p style={{ color: '#cbd5e1', fontSize: '14px' }}>การวิเคราะห์การตอบสนองทางโครงสร้างภายใต้สภาวะแรงกระทำจากแผ่นดินไหว</p>
        </section>

        <section style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #38bdf8' }}>
          <h2 style={{ color: '#38bdf8', marginTop: 0 }}>💻 Technical Skills</h2>
          <p style={{ color: '#cbd5e1' }}><strong>Simulation:</strong> Abaqus (Finite Element Analysis / FEA), Macro-modeling approach</p>
          <p style={{ color: '#cbd5e1' }}><strong>Engineering Tools:</strong> AutoCAD, Structural Analysis Platforms</p>
        </section>
      </main>
    </div>
  )
}

export default App