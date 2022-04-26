import '../home-page/home-page.styles.css';
import Navbar from '../navbar/navbar.component';

const HomePage = () => {
  return <>
      <Navbar/>
  <div className="container-fluid bg-light pt-4">
    <div className="row justify-content-center">
      <div className="col-md-4 pt-4">
       
         <div className="make">Make</div>
         <div className="remote-work">remote work</div>
         <p className="pt-4 team-p ">
           Get your team to sync, no matter your location.
           Streamline processes, create team rituals, and watch productivity soar.
         </p>

        <div className="pt-4">
        <button className="btn  border-dark learn-more text-white" style={{borderRadius:'10px',
        backgroundColor:'black'
        }}>learn more</button>
        </div>
        <div className="row icon-footer">
          <div className="col-3">
            <img src="../images/client-databiz.svg" alt="" className='img-fluid'/>
          </div>
          <div className="col-3">
            <img src="../images/client-audiophile.svg" alt="" className='img-fluid'/>
          </div>
          <div className="col-3">
          <img src="../images/client-maker.svg" alt="" className='img-fluid'/>
          </div>
          <div className="col-3">
          <img src="../images/client-meet.svg" alt=""className='img-fluid' />
          </div>
        </div>
       
      </div>
      <div className="col-md-5 pt-4">
        <img src="../images/image-hero-desktop.png" alt="an image is here" className="img-fluid" style={{
          height: '500px'
        }} />
      </div>
    </div>
  </div>
  </>
}
export default HomePage;