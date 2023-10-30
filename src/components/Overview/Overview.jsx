/* eslint-disable react/no-unescaped-entities */
import './Overview.scss';
import OverviewText from '../../animations/overview text/OverviewText';

function Overview() {
 
   return (
    <>
        <div className="overview">
            <div className="overview-header">
                <span id='overview-bg'>Overview</span>
                  <h1>Overview</h1>
            </div>
            <OverviewText /> 
            
            <div className="content-1"></div>
            <div className="content-2"></div>
            <div className="content-3"></div>
            </div>
         
    </>
  )
}


export default Overview