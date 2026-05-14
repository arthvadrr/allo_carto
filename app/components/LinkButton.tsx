import { Text } from '@react-navigation/elements';
import { useLinkProps } from '@react-navigation/native';
import { LinkProps } from 'expo-router';
import { ReactNode, useState } from 'react';
import { Pressable } from 'react-native';
import styles from '../styles';

interface LinkButtonProps {
  screen: string;
  params: LinkProps;
  action?: Readonly<any>;
  href?: string;
  children?: ReactNode;
}

/*
 * TODO: hover styles
 */
export default function LinkButton({ screen, params, action, href, children, ...rest }: LinkButtonProps) {
  const {
    hoveredLinkButtonStyles,
    pressedLinkButtonStyles,
    linkButtonStyles,
  } = styles;
  const props = useLinkProps({ screen, params, action, href });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  let currentStyles: Record<string, any> = linkButtonStyles;

  if (isPressed) {
    currentStyles = { ...linkButtonStyles, ...pressedLinkButtonStyles };
  } else if (isHovered) {
    currentStyles = { ...linkButtonStyles, ...hoveredLinkButtonStyles };
  }

  console.log(isHovered);

  if (isPressed) {

  }

  return (
    <Pressable
      {...props}
      {...rest}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={currentStyles}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};