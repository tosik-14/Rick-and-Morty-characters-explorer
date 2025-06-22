import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

type IconProps = {
    name: string; //icon name
    size?: number;
    color?: string;
    style?: StyleProp<ImageStyle>;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color, style }) => {

    const source = iconMap[name];
    if (!source) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <Image
            source={source}
            style={[
                { width: size, height: size, tintColor: color },
                style,
            ]}
            resizeMode="contain"
        />
    );


};

const iconMap: Record<string, any> = {
    'status': require('../assets/images/status/unknown.png'),
    'home': require('../assets/images/icons/homeIcon.png'),
    'settings': require('../assets/images/icons/settingsIcon.png'),
    'filter': require('../assets/images/icons/filterIcon.png'),
    'backArrow': require('../assets/images/icons/backArrowIcon.png'),
    'noInet': require('../assets/images/icons/noInternetConnectionIcon.png'),
};

export default Icon;