export const NineSliceSpriteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
    >
      <rect
        x="1"
        y="1"
        rx="2"
        ry="2"
        width="30"
        height="30"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />

      <line x1="0" y1="8" x2="32" y2="8" stroke="#fff" strokeWidth="1" />
      <line x1="0" y1="24" x2="32" y2="24" stroke="#fff" strokeWidth="1" />

      <line x1="8" y1="0" x2="8" y2="32" stroke="#fff" strokeWidth="1" />
      <line x1="24" y1="0" x2="24" y2="32" stroke="#fff" strokeWidth="1" />

      <text x="10" y="23" fontFamily="Arial" fontSize="20" fill="#fff">
        9
      </text>
    </svg>
  );
};
