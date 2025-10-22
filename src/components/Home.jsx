import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home_style.css';

const Home = () => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const target = document.querySelector('#menu-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div style={{marginTop: '75px' }}></div>
      <section className="introduction">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Start Your Day With Coffee</h1>
          <div className="row justify-content-center mb-4">
            <div className="col-md-3 col-6 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Coffee" 
                className="img-fluid coffee-image" 
              />
            </div>
            <div className="col-md-3 col-6">
              <img 
                src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Macchiato" 
                className="img-fluid coffee-image" 
              />
            </div>
          </div>
          <a href="#menu-section" className="order-btn" onClick={scrollToMenu}>
            Order Now!
          </a>
        </div>
      </section>

      <section id="menu-section" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Menu</h2>
          <div className="row">
            {/* Cappuccino */}
            <div className="col-md-6 mb-5">
              <div className="coffee-card card">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXYaZ0GB5tWk4VO93M7GK020GyEIK_oqkUQ&s" 
                  className="card-img-top" 
                  alt="Cappuccino" 
                />
                <div className="card-body">
                  <h3 className="card-title">Cappuccino</h3>
                  <p className="price">₱100</p>
                  <p className="card-text">Espresso with steamed milk and a deep layer of foam</p>
                  <Link to="/order" className="card-order-btn">Order Now</Link>
                </div>
              </div>
            </div>

            {/* Macchiato */}
            <div className="col-md-6 mb-5">
              <div className="coffee-card card">
                <img 
                  src="https://images.unsplash.com/photo-1550247611-e651810312fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBtYWNjaGlhdG98ZW58MHx8MHx8fDA%3D" 
                  className="card-img-top" 
                  alt="Macchiato" 
                />
                <div className="card-body">
                  <h3 className="card-title">Macchiato</h3>
                  <p className="price">₱100</p>
                  <p className="card-text">Espresso with a small amount of foamed milk</p>
                  <Link to="/order" className="card-order-btn">Order Now</Link>
                </div>
              </div>
            </div>

            {/* Americano */}
            <div className="col-md-6 mb-5">
              <div className="coffee-card card">
                <img 
                  src="https://t4.ftcdn.net/jpg/01/05/90/77/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" 
                  className="card-img-top" 
                  alt="Americano" 
                />
                <div className="card-body">
                  <h3 className="card-title">Americano</h3>
                  <p className="price">₱90</p>
                  <p className="card-text">Espresso shots topped with hot water</p>
                  <Link to="/order" className="card-order-btn">Order Now</Link>
                </div>
              </div>
            </div>

            {/* Latte */}
            <div className="col-md-6 mb-5">
              <div className="coffee-card card">
                <img 
                  src="https://cornercoffeestore.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg" 
                  className="card-img-top" 
                  alt="Latte" 
                />
                <div className="card-body">
                  <h3 className="card-title">Latte</h3>
                  <p className="price">₱110</p>
                  <p className="card-text">Espresso with steamed milk and a light layer of foam</p>
                  <Link to="/order" className="card-order-btn">Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;