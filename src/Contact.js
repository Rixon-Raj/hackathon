import React from 'react';
import contactImage from './assets/contact.png';
import fitImage from './assets/fit.png';
import exchangeImage from './assets/exchange.png';
import sellerImage from './assets/seller.png';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 mb-4 d-flex align-items-start">
                <img src={fitImage} alt="Find The Perfect Fit" className="me-3" style={{ width: '60px', height: '60px' }} />
                <div>
                  <h4 className="mb-1">Find The Perfect Fit</h4>
                  <p className="mb-0 text-muted">Browse through our extensive range of products to find the perfect fit for your needs.</p>
                </div>
              </div>
              <div className="col-12 mb-4 d-flex align-items-start">
                <img src={exchangeImage} alt="Free Exchange" className="me-3" style={{ width: '60px', height: '60px' }} />
                <div>
                  <h4 className="mb-1">Free Exchange</h4>
                  <p className="mb-0 text-muted">Enjoy a hassle-free exchange policy if the product does not meet your expectations.</p>
                </div>
              </div>
              <div className="col-12 d-flex align-items-start">
                <img src={sellerImage} alt="Contact Our Seller" className="me-3" style={{ width: '60px', height: '60px' }} />
                <div>
                  <h4 className="mb-1">Contact Our Seller</h4>
                  <p className="mb-0 text-muted">Get in touch with our sellers directly for personalized assistance and support.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-md-6">
            <img src={contactImage} alt="Contact" className="img-fluid rounded" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
