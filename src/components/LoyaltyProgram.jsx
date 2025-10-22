import '../styles/loyalty_program_style.css';

const LoyaltyProgram = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our loyalty program!');
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4">
            <div className="card benefits-card h-100">
              <div className="card-body">
                <h3 className="card-title">Program Benefits</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success"></i> Earn 1 point for every $1 spent
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success"></i> Free birthday drink
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success"></i> Exclusive member-only offers
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success"></i> Free Wi-Fi extended access
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success"></i> Skip the line during busy hours
                  </li>
                </ul>
                <div className="mt-4">
                  <h5>Reward Tiers</h5>
                  <div className="progress mb-2" style={{ height: '20px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '30%' }}>50 pts</div>
                    <div className="progress-bar bg-info" style={{ width: '30%' }}>100 pts</div>
                    <div className="progress-bar bg-danger" style={{ width: '40%' }}>200 pts</div>
                  </div>
                  <small className="text-muted">Bronze - Silver - Gold</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="card-form-container">
              <div className="card-header bg-white">
                <h3 className="mb-0">Join Our Loyalty Program</h3>
                <p className="text-muted">Fill out the form below to start earning rewards</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                    <div className="form-text">For text alerts about special offers</div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Favorite Drink</label>
                    <select className="form-select">
                      <option selected>Select your favorite...</option>
                      <option>Cappuccino</option>
                      <option>Macchiato</option>
                      <option>Americano</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">How often do you visit us?</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="visitFrequency" id="daily" />
                      <label className="form-check-label" htmlFor="daily">Daily</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="visitFrequency" id="weekly" />
                      <label className="form-check-label" htmlFor="weekly">Weekly</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="visitFrequency" id="monthly" />
                      <label className="form-check-label" htmlFor="monthly">Monthly</label>
                    </div>
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="offers" />
                    <label className="form-check-label" htmlFor="offers">Send me special offers and updates</label>
                  </div>
                  
                  <button type="submit" className="btn btn-coffee btn-lg w-100">Join Now</button>
                </form>
              </div>
            </div>
            
            <div className="mt-3 text-center">
              <p>Already a member? <a href="#" className="text-decoration-none">Sign in to your account</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;