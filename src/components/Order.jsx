import { useState } from 'react';
import '../styles/order_style.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Order = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedPrice, setConfirmedPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const menuItems = {
    coffee: [
      {
        name: "Cappuccino",
        price: 100,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Espresso with steamed milk and a deep layer of foam"
      },
      {
        name: "Macchiato",
        price: 100,
        image: "https://images.unsplash.com/photo-1679148404766-a8bf879695e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2NoaWF0b3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Espresso with a small amount of steamed milk"
      },
      {
        name: "Americano",
        price: 90,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vfGVufDB8fDB8fHww",
        description: "Espresso with hot water for a smoother taste"
      },
      {
        name: "Latte",
        price: 110,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Espresso with steamed milk and a light layer of foam"
      }
    ],
    pastry: [
      {
        name: "Croissant",
        price: 80,
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Buttery, flaky pastry perfect with coffee"
      },
      {
        name: "Blueberry Muffin",
        price: 70,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Sweet muffin bursting with blueberries"
      },
      {
        name: "Chocolate Cookie",
        price: 60,
        image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich chocolate cookie with chunks"
      },
      {
        name: "Cinnamon Roll",
        price: 95,
        image: "https://images.unsplash.com/photo-1639695854242-1385cdd69a08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sweet, spiced pastry with cream cheese icing"
      }
    ]
  };

  const addToOrder = (name, price) => {
    setCurrentOrder(prevOrder => {
      const itemIndex = prevOrder.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        const updatedOrder = [...prevOrder];
        updatedOrder[itemIndex].quantity++;
        return updatedOrder;
      } else {
        return [...prevOrder, { name, price, quantity: 1 }];
      }
    });
  };

  const getTotalPrice = () => {
    return currentOrder.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleNewOrder = () => {
    setShowConfirmation(false);
    document.getElementById('fullName').value = '';
    document.getElementById('phoneNumber').value = '';
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (!fullName || !phoneNumber) {
      alert('Please fill in your name and phone number.');
      return;
    }

    if (currentOrder.length === 0) {
      alert('Please add at least one item to your order.');
      return;
    }

    if (phoneNumber.length !== 11) {
      alert('Please enter a valid 11-digit phone number.');
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        customer_name: fullName,
        phone_number: phoneNumber,
        order_items: currentOrder,
        total_amount: getTotalPrice()
      };

      const response = await fetch(`${API_BASE_URL}/save_order.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (result.success) {
        setConfirmedPrice(getTotalPrice());
        setShowConfirmation(true);
        setCurrentOrder([]);
        // Clear form
        document.getElementById('fullName').value = '';
        document.getElementById('phoneNumber').value = '';
      } else {
        alert('Error placing order: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="order-container">
            <h2 className="text-center mb-4">Order</h2>
            
            {!showConfirmation ? (
              <div className="row">
                <div className="col-md-8">
                  {/* Coffee Menu */}
                  <div className="menu-category">
                    <h3>Coffee Menu</h3>
                    <div className="row">
                      {menuItems.coffee.map((item, index) => (
                        <div key={index} className="col-md-6 mb-4">
                          <div className="menu-item">
                            <img src={item.image} className="menu-item-img" alt={item.name} />
                            <div className="menu-item-body">
                              <h5 className="menu-item-title">{item.name}</h5>
                              <p className="mb-2">{item.description}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="menu-item-price">₱{item.price}</span>
                                <button 
                                  className="add-to-order" 
                                  onClick={() => addToOrder(item.name, item.price)}
                                >
                                  Add to Order
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pastry Menu */}
                  <div className="menu-category">
                    <h3>Pastry Menu</h3>
                    <div className="row">
                      {menuItems.pastry.map((item, index) => (
                        <div key={index} className="col-md-6 mb-4">
                          <div className="menu-item">
                            <img src={item.image} className="menu-item-img" alt={item.name} />
                            <div className="menu-item-body">
                              <h5 className="menu-item-title">{item.name}</h5>
                              <p className="mb-2">{item.description}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="menu-item-price">₱{item.price}</span>
                                <button 
                                  className="add-to-order" 
                                  onClick={() => addToOrder(item.name, item.price)}
                                >
                                  Add to Order
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  {/* Customer Details */}
                  <div className="customer-details">
                    <h3>Customer Details</h3>
                    <form id="customer-form">
                      <div className="row">
                        <div className="form-group col-md-12 mb-3">
                          <label htmlFor="fullName" className="form-label">Full Name</label>
                          <input type="text" className="form-control" id="fullName" required />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phoneNumber" 
                            pattern="[0-9]{11}" 
                            maxLength="11" 
                            required 
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  
                  {/* Current Order Summary */}
                  <div className="current-order">
                    <h3>Your Order</h3>
                    <div id="order-summary">
                      {currentOrder.length === 0 ? (
                        <div className="empty-order text-center py-3">
                          <p>Your order is empty</p>
                          <p className="small">Add items from the menu</p>
                        </div>
                      ) : (
                        currentOrder.map((item, index) => (
                          <div key={index} className="order-item">
                            <div className="order-item-details">
                              <span>{item.name} x {item.quantity}</span>
                              <span>₱{item.price * item.quantity}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="total-display mt-3">
                      <p className="mb-0 fw-bold">Total:</p>
                      <p className="total-price mb-0">₱{getTotalPrice()}</p>
                    </div>
                    <button 
                      id="place-order" 
                      className="place-order-btn mt-3"
                      onClick={handlePlaceOrder}
                      disabled={loading}
                    >
                      {loading ? 'Placing Order...' : 'Place Order'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div id="order-confirmation" className="order-confirmation">
                <h3 className="text-success">Order Confirmed!</h3>
                <p>Your order will be ready soon.</p>
                <p>Total: <span id="confirmed-price" className="fw-bold">₱{confirmedPrice}</span></p>
                <button id="new-order" className="new-order-btn" onClick={handleNewOrder}>
                  Place Another Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;