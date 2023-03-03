import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="footer-top py-40 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start justify-between">
            <div className="lg:col-span-1 w-full">
              <Link to="/">
                <svg
                  width="130"
                  height="27"
                  viewBox="0 0 130 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1107_2726)">
                    <path
                      d="M129.77 20.1089V23.326H127.071C124.191 23.2354 122.652 21.6804 122.652 18.7595V11.412H120.768V8.58987H122.652V5.43038H126.635V8.55696H129.679V11.3709H126.635V18.3646C126.635 19.3108 126.824 20.0677 128.28 20.0677L129.77 20.1089Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M104.897 15.9867V15.7728C104.854 14.8265 104.998 13.8809 105.321 12.9904C105.644 12.0999 106.14 11.2819 106.779 10.5833C107.419 9.88464 108.19 9.31915 109.049 8.91919C109.908 8.51924 110.837 8.29269 111.784 8.25253C111.973 8.25253 112.17 8.25253 112.36 8.25253C116.12 8.25253 119.419 10.4411 119.419 15.6576V16.7684H108.97C109.077 19.1709 110.377 20.5285 112.565 20.5285C114.449 20.5285 115.33 19.7057 115.585 18.5044H119.345C118.884 21.6392 116.383 23.3835 112.425 23.3835C108.081 23.3506 104.897 20.6025 104.897 15.9867ZM115.503 14.2506C115.363 12.062 114.26 11.0089 112.343 11.0089C110.426 11.0089 109.323 12.1937 109.052 14.2506H115.503Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M88.6386 15.9867V15.7728C88.5955 14.8278 88.739 13.8836 89.061 12.9941C89.383 12.1046 89.8772 11.2873 90.5152 10.5889C91.1533 9.89047 91.9227 9.32465 92.7795 8.92377C93.6364 8.52288 94.5638 8.29479 95.5088 8.25253C95.6981 8.25253 95.8955 8.25253 96.0848 8.25253C99.8449 8.25253 103.153 10.4411 103.153 15.6576V16.7684H92.7114C92.8183 19.1709 94.1183 20.5285 96.3069 20.5285C98.1911 20.5285 99.0715 19.7057 99.3266 18.5044H103.087C102.618 21.6392 100.116 23.3835 96.1588 23.3835C91.8228 23.3506 88.6386 20.6025 88.6386 15.9867ZM99.2443 14.2506C99.1044 12.062 98.0019 11.0089 96.0848 11.0089C94.1677 11.0089 93.0981 12.2266 92.7936 14.2424L99.2443 14.2506Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M65.8228 8.55696H70.0354L72.6107 18.3152L75.4329 8.55696H78.724L81.2746 18.3152L83.9898 8.55696H87.8487L83.274 23.0544H79.3247L76.8563 13.9544L74.2152 23.0544H70.2164L65.8228 8.55696Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M52.436 18.4962H56.1962C56.369 19.8044 57.0189 20.5532 58.7468 20.5532C60.2936 20.5532 61.0095 19.969 61.0095 18.9734C61.0095 17.9778 60.1867 17.5582 58.0803 17.262C54.2215 16.6778 52.7322 15.5671 52.7322 12.7367C52.7322 9.71709 55.4968 8.21962 58.4917 8.21962C61.7088 8.21962 64.136 9.38797 64.4816 12.7203H60.7708C60.7472 12.4626 60.6727 12.2123 60.5517 11.9836C60.4307 11.755 60.2656 11.5525 60.0659 11.3881C59.8662 11.2236 59.6359 11.1003 59.3883 11.0253C59.1408 10.9503 58.8808 10.9252 58.6234 10.9513H58.5C57.2 10.9513 56.443 11.5601 56.443 12.4487C56.443 13.3373 57.1424 13.724 59.2652 14.0285C62.8689 14.5715 64.8848 15.4848 64.8848 18.5867C64.8848 21.6886 62.6057 23.3506 58.7879 23.3506C54.9702 23.3506 52.543 21.631 52.436 18.4962Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M36.4576 8.55696H40.4399V10.8525C40.8888 10.0099 41.5701 9.31394 42.4029 8.84721C43.2357 8.38048 44.185 8.16266 45.138 8.21962C47.9602 8.21962 50.0089 9.93924 50.0089 13.8639V23.0873H46.076V14.4399C46.076 12.4734 45.3108 11.5354 43.5336 11.5354C43.158 11.5027 42.7796 11.5445 42.4201 11.6585C42.0607 11.7724 41.7273 11.9562 41.4391 12.1993C41.1509 12.4424 40.9135 12.74 40.7406 13.0751C40.5678 13.4102 40.4628 13.7761 40.4317 14.1519C40.4111 14.3268 40.4111 14.5036 40.4317 14.6785V23.0544H36.4576V8.55696Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M28.7728 4.91203C28.7584 4.51498 28.8621 4.12258 29.0708 3.7845C29.2795 3.44642 29.5838 3.17787 29.9453 3.01286C30.3067 2.84784 30.7089 2.79377 31.1011 2.8575C31.4933 2.92123 31.8577 3.09989 32.1483 3.37086C32.4388 3.64183 32.6425 3.99292 32.7334 4.37969C32.8243 4.76646 32.7984 5.17151 32.659 5.54355C32.5196 5.9156 32.2729 6.23792 31.9502 6.46969C31.6275 6.70147 31.2433 6.83228 30.8462 6.84557H30.7722C30.5257 6.86117 30.2786 6.82796 30.045 6.74784C29.8114 6.66771 29.596 6.54226 29.411 6.37867C29.226 6.21508 29.0751 6.01658 28.967 5.79455C28.8589 5.57252 28.7957 5.33133 28.781 5.08481C28.7742 5.02749 28.7715 4.96975 28.7728 4.91203ZM28.7728 8.55697H32.7962V23.0544H28.7893L28.7728 8.55697Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M13.6089 3.24178H26.3291V6.75507H18.1013V11.9962H24.6177V15.3779H18.0931V23.0544H13.6089V3.24178Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M5.93228 9.72532C5.93228 10.9677 5.93228 12.4816 4.22089 13.0987C5.97342 13.6994 5.93228 14.9747 5.93228 16.3076V21.2443C5.93228 22.1823 6.31076 22.75 6.98544 22.8899C7.13369 22.9399 7.28988 22.9622 7.4462 22.9557H9.09177V26.2468H6.37658C3.48038 26.2468 1.88418 24.6013 1.88418 21.5487V15.707C1.86364 15.4071 1.7314 15.1257 1.51357 14.9186C1.29574 14.7114 1.00816 14.5934 0.707595 14.588H0V11.7H0.707595C1.01415 11.696 1.30739 11.574 1.52646 11.3596C1.74554 11.1451 1.87363 10.8545 1.88418 10.5481V4.62405C1.88418 1.62089 3.44747 0 6.37658 0H9.11646V3.24177H7.47089C7.31437 3.24222 7.1589 3.26721 7.01013 3.31582C6.33544 3.48861 5.95696 4.0481 5.95696 4.96139L5.93228 9.72532Z"
                      fill="#ffffff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1107_2726">
                      <rect width="130" height="26.3291" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-1 w-full">
              <p className="text-xl font-bold text-white mb-5">Pages</p>
              <ul className="text-white font-normal text-base flex flex-col gap-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Podcast</Link>
                </li>
                <li>
                  <Link to="/">Host</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1 w-full md:mt-5 lg:mt-0 mt-3">
              <p className="text-xl font-bold text-white mb-5">Reach Us</p>
              <ul className="text-white font-normal text-base flex flex-col gap-3">
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1 w-full md:mt-5 lg:mt-0 mt-3">
              <p className="text-xl font-bold text-white mb-5">Subscribe</p>
              <ul className="text-white font-normal text-base flex flex-col gap-7">
                <li>
                  <img
                    src="/images/logos/Apple-w.svg"
                    alt="apple podcast"
                    className="h-7"
                  />
                </li>
                <li>
                  <img
                    src="/images/logos/Google-w.svg"
                    alt="google podcast"
                    className="h-7"
                  />
                </li>
                <li>
                  <img
                    src="/images/logos/Soundcloud.svg"
                    alt="sound podcast"
                    className="h-7"
                  />
                </li>
                <li>
                  <img
                    src="/images/logos/spotify-w.svg"
                    alt="spotify podcast"
                    className="h-7"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-blue text-center py-4">
        <p className="text-base font-bold text-center text-white">
          &copy; Copyright Finsweet 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
