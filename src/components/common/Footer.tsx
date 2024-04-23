import React from 'react';

function Footer() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto text-gray-900 py-2 flex justify-between">
        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Good Monday, 2024. </p>
        <div className="order-1 md:order-2">
          <a
            className="px-2 underline"
            href="https://good-monday-js-test.vercel.app/to-do"
            target="_blank"
            rel="noreferrer">
            Task Info
          </a>
          <a
            className="px-2 underline"
            href="https://github.com/HunterJS-bit/goodmonday_js"
            target="_blank"
            rel="noreferrer">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
