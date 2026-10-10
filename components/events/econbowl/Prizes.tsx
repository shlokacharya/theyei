import React from 'react'
import CountUpOnce from './../../utility/CountUp'

export default function Prizes() {
  return (
    <div className="bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Cash Prizes
          </h2>
        </div>

        <dl className="mt-10 text-center sm:max-w-3xl items-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col sm:order-2">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-indigo-100 text-indigo-800">
                1st
              </span>
            </dt>
            <dd className="order-1 text-7xl font-extrabold text-white">
              $<CountUpOnce number={300} />
            </dd>
          </div>

          <div className="flex flex-col mt-10 sm:mt-0 sm:order-1">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-indigo-200 text-indigo-800">
                2nd
              </span>
            </dt>
            <dd className="order-1 text-6xl font-extrabold text-gray-200">
              $<CountUpOnce number={200} />
            </dd>
          </div>

          <div className="flex flex-col mt-10 sm:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-indigo-200 text-indigo-800">
                3rd
              </span>
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-300">
              $<CountUpOnce number={100} />
            </dd>
          </div>
        </dl>

        <p className="mt-12 text-sm text-gray-400 text-center max-w-3xl mx-auto">
          Prize amounts have been changed due to funding shortages. We apologize
          for the inconvenience. If you would like to cancel your registration,
          please email{' '}
          <a
            href="mailto:events@theyei.org"
            className="text-indigo-300 underline hover:text-indigo-200"
          >
            events@theyei.org
          </a>
          .
        </p>
      </div>
    </div>
  )
}
