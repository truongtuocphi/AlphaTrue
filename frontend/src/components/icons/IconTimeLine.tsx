interface IconTimeLineProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconTimeLine: React.FC<IconTimeLineProps> = ({
  width = "48",
  height = "169",
  color = "#0054FB",
  ...props
}) => {
  return (
    <svg
      width="48"
      height="169"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 24.1209V129.966C48 130.624 47.8281 131.272 47.4951 131.833L27.2229 167.129C25.7833 169.624 22.2059 169.624 20.7771 167.129L0.494181 131.833C0.171889 131.272 0 130.624 0 129.966V24.1209C0 10.7972 10.7431 0 24 0C37.2569 0 48 10.7972 48 24.1209Z"
        fill={color}
      />
      <g clipPath="url(#clip0_712_843)">
        <path
          d="M32.23 35.7899H34.52C35.63 35.7899 36.54 34.8899 36.54 33.7699C36.54 33.4199 36.45 33.0699 36.27 32.7599L32.31 25.8999H28.82L32.78 32.7599C34.15 35.1299 32.23 35.7899 32.23 35.7899Z"
          fill="white"
        />
        <path
          d="M28.52 25.4H36.54C36.54 23.73 35.19 22.37 33.51 22.37H26.77L21.94 30.74C21.94 30.81 21.76 32.75 24.27 32.76L28.52 25.4Z"
          fill="white"
        />
        <path
          d="M21.94 30.75L20.78 32.77C20.22 33.74 20.56 34.97 21.52 35.53C21.83 35.71 22.17 35.8 22.53 35.8H32.24C32.24 35.8 34.15 35.15 32.78 32.77H24.28C21.77 32.77 21.94 30.82 21.95 30.76L21.94 30.75Z"
          fill="white"
        />
        <path
          d="M27.21 17.08L26.02 15.01C25.46 14.05 24.23 13.71 23.26 14.27C22.95 14.45 22.7 14.7 22.52 15.01L12.27 32.76C11.71 33.72 12.04 34.96 13.01 35.51C13.32 35.69 13.66 35.78 14.02 35.78L24.27 18.03C25.59 15.74 27.21 17.07 27.21 17.07V17.08Z"
          fill="white"
        />
        <path
          d="M27.21 17.08C27.21 17.08 25.59 15.75 24.27 18.04L26.48 21.87H29.97L27.2 17.08H27.21Z"
          fill="white"
        />
        <path
          d="M32.23 35.7899H34.52C35.63 35.7899 36.54 34.8899 36.54 33.7699C36.54 33.4199 36.45 33.0699 36.27 32.7599L32.31 25.8999H28.82L32.78 32.7599C34.15 35.1299 32.23 35.7899 32.23 35.7899Z"
          fill="white"
        />
        <path
          d="M28.52 25.4H36.54C36.54 23.73 35.19 22.37 33.51 22.37H26.77L21.94 30.74C21.94 30.81 21.76 32.75 24.27 32.76L28.52 25.4Z"
          fill="white"
        />
        <path
          d="M21.94 30.75L20.78 32.77C20.22 33.74 20.56 34.97 21.52 35.53C21.83 35.71 22.17 35.8 22.53 35.8H32.24C32.24 35.8 34.15 35.15 32.78 32.77H24.28C21.77 32.77 21.94 30.82 21.95 30.76L21.94 30.75Z"
          fill="white"
        />
        <path
          d="M27.21 17.08L26.02 15.01C25.46 14.05 24.23 13.71 23.26 14.27C22.95 14.45 22.7 14.7 22.52 15.01L12.27 32.76C11.71 33.72 12.04 34.96 13.01 35.51C13.32 35.69 13.66 35.78 14.02 35.78L24.27 18.03C25.59 15.74 27.21 17.07 27.21 17.07V17.08Z"
          fill="white"
        />
        <path
          d="M27.21 17.08C27.21 17.08 25.59 15.75 24.27 18.04L26.48 21.87H29.97L27.2 17.08H27.21Z"
          fill="white"
        />
      </g>
      <path
        d="M26.7385 53.57V67.79H24.0385V57.37L20.6885 58.73V56.01L26.7385 53.57ZM21.0816 91.79L24.5116 86.92C24.3449 86.9467 24.1349 86.96 23.8816 86.96C22.4749 86.96 21.3149 86.5167 20.4016 85.63C19.4882 84.7367 19.0316 83.63 19.0316 82.31C19.0316 80.9434 19.5316 79.8067 20.5316 78.9C21.5316 77.9934 22.7849 77.54 24.2916 77.54C25.2782 77.54 26.1716 77.7434 26.9716 78.15C27.7782 78.5567 28.4082 79.1234 28.8616 79.85C29.3216 80.57 29.5516 81.3734 29.5516 82.26C29.5516 83.4134 29.1082 84.6534 28.2216 85.98L24.3416 91.79H21.0816ZM22.5316 83.95C22.9982 84.3767 23.5849 84.59 24.2916 84.59C24.9982 84.59 25.5816 84.3767 26.0416 83.95C26.5082 83.5167 26.7416 82.9634 26.7416 82.29C26.7416 81.6167 26.5082 81.0667 26.0416 80.64C25.5816 80.2067 24.9982 79.99 24.2916 79.99C23.5849 79.99 22.9982 80.2067 22.5316 80.64C22.0716 81.0667 21.8416 81.6167 21.8416 82.29C21.8416 82.9634 22.0716 83.5167 22.5316 83.95ZM21.0816 115.79L24.5116 110.92C24.3449 110.947 24.1349 110.96 23.8816 110.96C22.4749 110.96 21.3149 110.517 20.4016 109.63C19.4882 108.737 19.0316 107.63 19.0316 106.31C19.0316 104.943 19.5316 103.807 20.5316 102.9C21.5316 101.993 22.7849 101.54 24.2916 101.54C25.2782 101.54 26.1716 101.743 26.9716 102.15C27.7782 102.557 28.4082 103.123 28.8616 103.85C29.3216 104.57 29.5516 105.373 29.5516 106.26C29.5516 107.413 29.1082 108.653 28.2216 109.98L24.3416 115.79H21.0816ZM22.5316 107.95C22.9982 108.377 23.5849 108.59 24.2916 108.59C24.9982 108.59 25.5816 108.377 26.0416 107.95C26.5082 107.517 26.7416 106.963 26.7416 106.29C26.7416 105.617 26.5082 105.067 26.0416 104.64C25.5816 104.207 24.9982 103.99 24.2916 103.99C23.5849 103.99 22.9982 104.207 22.5316 104.64C22.0716 105.067 21.8416 105.617 21.8416 106.29C21.8416 106.963 22.0716 107.517 22.5316 107.95ZM24.2695 125.54C25.1028 125.54 25.8861 125.707 26.6195 126.04C27.3528 126.373 27.9928 126.847 28.5395 127.46C29.0861 128.067 29.5161 128.83 29.8295 129.75C30.1495 130.67 30.3095 131.683 30.3095 132.79C30.3095 133.897 30.1495 134.91 29.8295 135.83C29.5161 136.75 29.0861 137.517 28.5395 138.13C27.9928 138.737 27.3528 139.207 26.6195 139.54C25.8861 139.873 25.1028 140.04 24.2695 140.04C23.4295 140.04 22.6428 139.873 21.9095 139.54C21.1828 139.207 20.5461 138.737 19.9995 138.13C19.4528 137.517 19.0228 136.75 18.7095 135.83C18.3961 134.91 18.2395 133.897 18.2395 132.79C18.2395 131.683 18.3961 130.67 18.7095 129.75C19.0228 128.83 19.4528 128.067 19.9995 127.46C20.5461 126.847 21.1828 126.373 21.9095 126.04C22.6428 125.707 23.4295 125.54 24.2695 125.54ZM24.2695 128.13C23.3361 128.13 22.5661 128.54 21.9595 129.36C21.3528 130.173 21.0495 131.317 21.0495 132.79C21.0495 134.263 21.3528 135.41 21.9595 136.23C22.5661 137.043 23.3361 137.45 24.2695 137.45C25.2095 137.45 25.9795 137.043 26.5795 136.23C27.1861 135.417 27.4895 134.27 27.4895 132.79C27.4895 131.31 27.1861 130.163 26.5795 129.35C25.9795 128.537 25.2095 128.13 24.2695 128.13Z"
        fill="white"
      />
      <defs>
        <clipPath id="clip0_712_843">
          <rect
            width="24.54"
            height="21.79"
            fill="white"
            transform="translate(12 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTimeLine;
