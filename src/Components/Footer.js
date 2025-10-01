import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-orange-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">MODEVA</h2>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">WhatsApp:</span> +62 859 9999 999</p>
              <p><span className="font-medium">Email:</span> hello@modeva.com</p>
              <div>
                <p className="font-medium">Address:</p>
                <p>Lorem ipsum street Block B Number 08,</p>
                <p>Jakarta, Indonesia, 12345</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-300 transition-colors">Sale</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Formal Men</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Formal Woman</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Casual Men</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Casual Woman</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Refund and Return</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-300 transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">My Orders</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Vouchers and Discounts</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-700 text-center text-sm">
          <p>All rights reserved</p>
          <p>Copyright 2024 By Modeva Fashion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;