import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type FontWeight = "light" | "regular" | "medium" | "bold";
type FontFamily = "sf" | "montserrat";

interface CustomTextProps extends RNTextProps {
    weight?: FontWeight;
    font?: FontFamily;
}

const sfProFontMap: Record<FontWeight, string> = {
    light: "SF-Pro-Display-Light",
    regular: "SF-Pro-Display-Regular",
    medium: "SF-Pro-Display-Medium",
    bold: "SF-Pro-Display-Bold",
};

const montserratFontMap: Record<FontWeight, string> = {
    light: "Montserrat-Light",
    regular: "Montserrat-Regular",
    medium: "Montserrat-Medium",
    bold: "Montserrat-Bold",
};

const Text: React.FC<CustomTextProps> = ({
    style,
    weight = "regular",
    font = "montserrat",
    ...props
}) => {
    const fontMap = font === "sf" ? sfProFontMap : montserratFontMap;
    const fontFamily = fontMap[weight];

    return <RNText style={[{ fontFamily }, style]} {...props} />;
};

export default Text;