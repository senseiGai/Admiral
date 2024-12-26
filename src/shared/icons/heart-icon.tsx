import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface CustomTextProps {
    isFavorite?: boolean
}

const HeartIcon = ({ isFavorite, ...props }: CustomTextProps) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 16 14"
        fill="none"
        {...props}
    >
        <Path
            d="M8 3.37163C6.44444 -0.158012 1 0.217927 1 4.72921C1 9.24049 8 13 8 13C8 13 15 9.24049 15 4.72921C15 0.217927 9.55556 -0.158012 8 3.37163Z"
            fill='#FFCB00'
            stroke={isFavorite ? '#FF0000' : '#FFFFFF'}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default HeartIcon
