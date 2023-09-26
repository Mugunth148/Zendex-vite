import './Overview.scss';

function Overview() {


  return (
    <>
        <div className="overview">
            <div className="overview-header">
                <span>Overview</span>
                  <h1>Overview</h1>
            </div>
             <div className="overview-content">
                  <div className="overview-1">
                    <div className="section">Frontend</div>
                    <div className="section">UI/UX</div>
                    <div className="section">3D Artist</div>
                  </div>
                  <div className="overview-2">
                    <div className="highlight-container">
                      <div className="highlight">
                        <div className="light">FRontend</div>
                        <div className="light">UI/Ux</div>
                        <div className="light">3D</div>
                      </div>
                    </div>
                  </div>
             </div>
            </div>

    </>
  )
}

export default Overview