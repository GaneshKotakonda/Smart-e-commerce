import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import AppText from '../Texts/AppText';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/AppColors';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  onPress?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  style,
  textStyle,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      onPress={onPress}
      {...rest}
    >
      <AppText
        variant="bold"
        style={[styles.text, textStyle]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    height: vs(40),
    borderWidth:1,
borderRadius: s(30),
   backgroundColor: AppColors.black,
justifyContent: 'center',
    alignItems: 'center',
    marginTop: s(10)
  },
  text: {
    
    
    alignSelf: 'center',
    color:AppColors.white
  },
});
