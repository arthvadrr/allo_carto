import { useAudioPlayer } from 'expo-audio';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Pressable, PressableProps, Text, ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styles from '../styles';

/**
 * Audio Import
 */
const tapAudio = require('../assets/sounds/tap.wav');
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * Typing
 */
interface ActionButtonProps extends PressableProps {
  SVGElement?: ReactElement;
  action?: Function;
  children?: ReactNode;
  props?: any
}

/**
 * LinkButton Component
 * A link that looks like a button
 * https://reactnative.dev/docs/components-and-apis
 */
export default function ActionButton({
  action = () => { },
  children,
  SVGElement,
  style,
  props,
}: ActionButtonProps) {
  /**
   * Sound effect
   */
  const tapPlayer = useAudioPlayer(tapAudio);
  tapPlayer.volume = 0.2;

  /**
   * Style vars
   */
  const {
    linkButton,
    linkText,
    hoveredLinkButton,
    hoveredLinkText,
    pressedLinkText
  } = styles;
  let currentLinkButtonStyles = linkButton;
  let currentLinkTextStyles = linkText;

  /**
   * State/prop vars
   */
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  /**
   * Animation vars
   */
  const top = useSharedValue(0);
  const shadowOffsetHeight = useSharedValue(8);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    top: top.value,
    borderRadius: 8
  }));

  const animatedShadowStyle = useAnimatedStyle(() => ({
    shadowOffset: {
      width: 0,
      height: shadowOffsetHeight.value
    },
  }));

  /**
   * Handle animations on pressed
   */
  useEffect(() => {
    if (isPressed) {
      top.value = withTiming(6, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });

      shadowOffsetHeight.value = withTiming(0, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      top.value = 0;
      shadowOffsetHeight.value = 8;
    }

  }, [isPressed, shadowOffsetHeight, top])

  /**
   * Action handlers
   */
  function handlePressIn() {
    setIsPressed(true);
    tapPlayer.seekTo(0);
    tapPlayer.play();
    action();
  }

  function handlePressOut() {
    setIsPressed(false);
  }

  /**
   * Pressed styles before hovered styles
   */
  if (isPressed) {
    currentLinkTextStyles = { ...linkText, ...pressedLinkText };
  } else if (isHovered) {
    currentLinkButtonStyles = { ...linkButton, ...hoveredLinkButton };
    currentLinkTextStyles = { ...linkText, ...hoveredLinkText };
  }

  return (
    <Animated.View style={[style as ViewStyle, animatedContainerStyle]}>
      <AnimatedPressable
        {...props}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[currentLinkButtonStyles, animatedShadowStyle]}
      >
        {SVGElement}
        <Text style={currentLinkTextStyles}>{children}</Text>
      </AnimatedPressable>
    </Animated.View>
  );
};
