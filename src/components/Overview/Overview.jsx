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
                  <div className="overview-l-main">

                  <div className="overview-l item-1">
                    <div className="item" id='item-1'></div>
                  </div>

                  <div className="overview-l item-2">
                  <div className="item" id='item-2'></div>
                  </div>

                  <div className="overview-l item-3">
                  <div className="item" id='item-3'></div>
                  </div>

                  </div>
             <div className="overview-r"></div>
            </div>
        </div>
        <div className="spacer"></div>
    </>
  )
}

export default Overview