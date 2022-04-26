import '../navbar/navbar.styles.css'
const Navbar = () => {
  return <>
    <nav>
      <header>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-8">
            <div className="d-flex">
              <div id='snap'>Snap</div>
              <div className='d-flex pt-3'>
              <div>feature</div>
              <div>company</div>
              <div>career</div>
              <div>about</div>
              </div>
            </div>
            </div>
          <div className="col-4 pt-3">
            <div className="d-flex">
              <div className='sign-btn'>sign up</div>
              <div className='sign-btn'>sign in</div>
            </div>
          </div>
          </div>
        </div>
      </header>
    </nav>
  </>
}

export default Navbar;