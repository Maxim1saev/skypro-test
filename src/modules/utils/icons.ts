export const addToBasket = (
  className: string
) => `<svg class="${className}"  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C11.355 20.428 10.626 19.833 9.85499 19.2H9.84499C7.12999 16.98 4.05299 14.468 2.69399 11.458C2.24751 10.4997 2.0109 9.45712 1.99998 8.4C1.997 6.94948 2.57876 5.55898 3.6138 4.54276C4.64884 3.52654 6.04978 2.97039 7.49999 3C8.68062 3.00186 9.83583 3.34308 10.828 3.983C11.264 4.26596 11.6584 4.60825 12 5C12.3435 4.60979 12.738 4.2677 13.173 3.983C14.1647 3.34295 15.3197 3.00171 16.5 3C17.9502 2.97039 19.3511 3.52654 20.3862 4.54276C21.4212 5.55898 22.003 6.94948 22 8.4C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.49999 5C6.5685 4.98834 5.67006 5.34484 4.99999 5.992C4.35438 6.62616 3.99355 7.49504 3.99991 8.4C4.01132 9.1705 4.18582 9.92985 4.51199 10.628C5.1535 11.9267 6.0191 13.102 7.06899 14.1C8.05999 15.1 9.19999 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.039H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.974 13.1236 18.8397 11.9485 19.481 10.65C19.8131 9.9458 19.9901 9.1785 20 8.4C20.0042 7.49783 19.6435 6.63229 19 6C18.3312 5.34992 17.4326 4.99048 16.5 5C15.3619 4.99032 14.2739 5.46736 13.51 6.311L12 8.051L10.49 6.311C9.72606 5.46736 8.63807 4.99032 7.49999 5Z"/>
</svg>`;

export const addToFavorite = (
  className: string,
  id: string
) => `<svg class="${className}" id="${id}" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_29)">
<path d="M7.00001 8V6C7.00001 4.67392 7.06232 2.93768 8.00001 2C8.93769 1.06232 10.6739 1 12 1C13.3261 1 15.0623 1.06232 16 2C16.9377 2.93768 17 4.67392 17 6V8H20C20.2652 8 20.8125 7.81246 21 8C21.1875 8.18754 21 8.73478 21 9V21C21 21.2652 21.1875 21.8125 21 22C20.8125 22.1875 20.2652 22 20 22H4.00001C3.73479 22 3.18754 22.1875 3.00001 22C2.81247 21.8125 3.00001 21.2652 3.00001 21V9C3.00001 8.73478 2.81247 8.18754 3.00001 8C3.18754 7.81246 3.73479 8 4.00001 8H7.00001ZM7.00001 10H5.00001V20H19V10H17V12H15V10H9.00001V12H7.00001V10ZM9.00001 8H15V6C15 5.20435 14.5626 4.56261 14 4C13.4374 3.43739 12.7957 3 12 3C11.2044 3 10.5626 3.43739 10 4C9.4374 4.56261 9.00001 5.20435 9.00001 6V8Z"/>
</g>
<defs>
<clipPath id="clip0_1_29">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;
