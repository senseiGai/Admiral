import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type FontWeight = "light" | "regular" | "medium" | "bold";

interface CustomTextProps extends RNTextProps {
    weight?: FontWeight;
}

const fontFamilyMap: Record<FontWeight, string> = {
    light: "Montserrat-Light",
    regular: "Montserrat-Regular",
    medium: "Montserrat-Medium",
    bold: "Montserrat-Bold",
};

const Text: React.FC<CustomTextProps> = ({
    style,
    weight = "light",
    ...props
}) => {
    const fontFamily = fontFamilyMap[weight] || "Montserrat-Regular";

    return <RNText style={[{ fontFamily }, style]} {...props} />;
};

export default Text;