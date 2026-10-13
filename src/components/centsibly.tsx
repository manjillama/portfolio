import React from 'react';

export default function Centsibly() {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 rounded-lg mb-4">
    <div className="order-2 lg:order-1">
      <img
        className="w-full rounded-lg shadow-md"
        src="/images/centsibly.png"
        alt="centsibly banner"
      />
    </div>
    <div className="order-1 lg:order-2 lg:mb-4 lg:pr-20 flex flex-col justify-center">
      <h5>The budget tracking app that you always wanted.</h5>
      <div className="flex items-center mb-2">
        <h4 className="text-lg font-bold mr-[8px]">Centsibly</h4>
        <a
          href="https://github.com/manjillama/centsibly"
          className="mr-[8px] hover:text-primary-regular inline-block"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[15px] h-[15px]"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://centsibly.vercel.app"
          className="hover:text-primary-regular inline-block"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[15px] h-[15px]"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div>
        {['Budgeting', 'Expense Tracking', 'Income Tracking', 'Personal Finance'].map((project) => (
          <span
            key={project}
            className="text-xs inline-block bg-sky-100 text-blue-900 px-[8px] py-[2px] mr-[4px] rounded-full"
          >
            {project}
          </span>
        ))}
      </div>
      <p className="text-gray-600 text-sm mt-6 mb-0 lg:mb-12">
        &quot;Centsibly&quot; is an open-source budget tracking web app. Join and gain insights into you income and spendings.
      </p>
    </div>

  </div>
}
