import React from 'react';
import './sponsor.css';
const SponsorCarousel = () => {
  return (
    <div className="demo-row">
      <div className="container" id="id-sponsors">
        <div className="text-center">
          <h2 style={{ margin: '20px 0', color: '#fff' }}>Platinum Sponsors</h2>
        </div>
        <div id="sponsor-carousel" className="carousel slide">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#sponsor-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#sponsor-carousel" data-slide-to="1"></li>
            <li data-target="#sponsor-carousel" data-slide-to="2"></li>
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/nucor-logo.svg" style={{ width: '200px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-mil.png" style={{ width: '155px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-timberline.jpg" style={{ width: '200px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logo-ppg.jpg" style={{ width: '200px' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo1.jpg" style={{ width: '160px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo2.jpg" style={{ width: '160px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo3.jpg" style={{ width: '160px' }} />
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="sponsor-feature">
                    <img alt="" src="https://itagroup.hs.llnwd.net/o40/csg/pse-demo/channel-incentive/logos/logo4.jpg" style={{ width: '160px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;
