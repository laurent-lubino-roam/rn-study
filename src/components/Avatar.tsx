import {ImageURISource, Image, ImageStyle} from 'react-native';
import React from 'react';

type AvatarProps = {
  src: ImageURISource;
  size?: number;
  style?: ImageStyle;
};

const Avatar = ({src, size = 64, style}: AvatarProps) => {
  const avatarStyle: ImageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <Image source={src} style={[avatarStyle, style]} resizeMode="cover" />;
};

export default Avatar;
