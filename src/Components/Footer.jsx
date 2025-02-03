import React from 'react';

const Footer = () => {
  return (
    <div class="bg-[#000000] pt-9" id='contact'>
  <div class="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
    <div class="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
      <div class="md:w-[316px]">
        <p class="text-[18px] font-medium text-white">
        <h1 class="text-white font-extrabold">
          <span class="text-rose-600">YOUR</span>LOGO
        </h1>
        </p>
        <p class="mt-[18px] text-[15px] font-normal text-white/[80%]">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi
          placeat eaque nesciunt alias beatae id, at dicta.</p>
        <div class="mt-[18px] flex gap-4">

        <div class="flex items-center justify-center gap-x-5 ">
        <a href="https://www.linkedin.com" class="hover:scale-110"  loading="lazy" aria-label="Find us on LinkedIn" decoding="async" data-nimg="1">
            <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" decoding="async" data-nimg="1">
                <path
                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a href="https://www.x.com" aria-label="Find us on Twitter" >
            <svg class="h-6 w-6 text-white" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a href="https://www.facebook.com" aria-label="Find us on Facebook" >
            <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a href="https://www.instagram.com" aria-label="Find us on Instagram" >
            <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                    fill="currentColor"></path>
                <path
                    d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                    fill="currentColor"></path>
            </svg>

        </a>

        </div>

    
    </div>

      </div>
      <div class="md:w-[316px]">
        <div class="mt-[23px] flex">
          <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                fill="white"></path>
            </svg>
          </div>
          <div class="ml-[18px]">
            <a href="tel:+911800123444" class="font-Inter text-[16px] font-medium text-white">+91 1800123444</a>
            <p class="font-Inter text-[14px] font-medium text-white">Support Number</p>
          </div>
        </div>
        <div class="mt-[23px] flex">
          <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                fill="white"></path>
            </svg>
          </div>
          <div class="ml-[18px]">
            <a href="mailto:help@lorem.com" class="font-Inter text-[16px] font-medium text-[#fff]">help@lorem.com</a>
            <p class="font-Inter text-[14px] font-medium text-[#fff]">Support Email</p>
          </div>
        </div>
        <div class="mt-[23px] flex">
          <div class="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                fill="white"></path>
            </svg>
          </div>
          <div class="ml-[18px]">
            <a href="#home" class="font-Inter text-[16px] font-medium text-[#fff]">Sub Nerul, Mumbia,
              India, 123456</a>
            <p class="font-Inter text-[14px] font-medium text-white">Address</p>
          </div> 
        </div>
      </div>
      <div class="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
        <div class="">
          <p class="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
          <ul>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="#home">Home</a></li>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="#about-us">About us</a></li>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="#roadmap">Roadmap</a></li>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="#buy-our-coin">Buy our Coin</a></li>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/terms-and-conditions">Terms and conditions</a></li>
            <li class="mt-[15px]"><a
                class="text-deutziawhite hover:text-yellow-500/80 font-inter text-[15px] font-normal hover:font-semibold"
                href="/privacy-policy">Privcay policy</a></li>
          </ul>
        </div>
        {/* <div class="mt-6 flex flex-col gap-4 sm:mt-0">
          <p class="text-deutziawhite font-inter text-[18px] font-medium">Download the app</p>
          <div class="flex gap-4 sm:flex-col">
            <a target="_blank"
              href="#"><img alt="facebook icon" loading="lazy" width="168" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} src="https://www.englishyaari.com/img/google-store.svg" /></a><a
              target="_blank"
              href="#"><img alt="facebook icon" loading="lazy" width="168" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} src="https://www.englishyaari.com/img/apple-store.svg" /></a>
          </div>
        </div> */}
      </div>
    </div>
    <hr class="mt-[30px] text-white" />
    <div class="flex items-center justify-center pb-8 pt-[9px] md:py-8">
      <p class="text-[10px] font-normal text-white md:text-[12px]">
        © Copyright
        2025
       All Rights Reserved.
      </p>
    </div>
  </div>
</div>
  );
};

export default Footer;
