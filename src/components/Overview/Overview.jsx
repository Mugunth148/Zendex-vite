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
                    <div className="item" id='item-1'>
                      <h2 id="card-head">Frontend Developing</h2>
                      <p id='card-para'>Crafting User-Friendly Experiences: Building interactive and responsive web applications that engage users across platforms. Leveraging the latest technologies to bring designs to life and create seamless digital journeys.</p>
                    </div>
                  </div>

                  <div className="overview-l item-2">
                  <div className="item" id='item-2'>
                    <h2 id="card-head">UI/UX Designing</h2>
                     <p id='card-para'>Designing Delightful User Experiences: Combining creativity and empathy to craft visually appealing interfaces and intuitive interactions. Balancing aesthetics with functionality to ensure users enjoy a seamless and engaging digital journey.</p>
                  </div>
                  </div>

                  <div className="overview-l item-3">
                  <div className="item" id='item-3'>
                    <h2 id="card-head">3D Graphics Artist</h2>
                      <p id='card-para'>Bringing Imagination to Reality: Transforming concepts into immersive 3D worlds and captivating visuals. Creating lifelike scenes, characters, and environments that transport viewers to extraordinary realms of imagination</p>
                  </div>
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