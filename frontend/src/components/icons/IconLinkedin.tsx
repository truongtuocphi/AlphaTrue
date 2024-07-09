interface IconLinkedinProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconLinkedin: React.FC<IconLinkedinProps> = ({
  width = "1em",
  height = "1em",
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill={color}
      height={height}
      width={width}
      {...props}
    >
      <path
        width={width}
        height={height}
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
      />
    </svg>
  );
};

export default IconLinkedin;
