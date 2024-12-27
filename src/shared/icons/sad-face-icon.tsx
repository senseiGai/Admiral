import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SadFaceIcon = () => (
    <Svg
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
    >
        <Circle
            cx={50}
            cy={50}
            r={45}
            stroke="#FFB800"
            strokeWidth={6}
            strokeLinecap="round"
        />
        <Circle
            cx={35}
            cy={40}
            r={4}
            fill="#FFB800"
        />
        <Circle
            cx={65}
            cy={40}
            r={4}
            fill="#FFB800"
        />
        <Path
            d="M30 70C35 65 45 65 50 70C55 65 65 65 70 70"
            stroke="#FFB800"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SadFaceIcon;
