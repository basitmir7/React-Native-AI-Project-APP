import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomIcon = props => {
  const {iconName = '', color = '', size = 12, isPressable =true } = props || {};
  return (
    <TouchableOpacity disabled = {!isPressable}>
      <AntDesign name={iconName} style={{color: color, fontSize: size}} />
    </TouchableOpacity>
  );
};

export default CustomIcon;
