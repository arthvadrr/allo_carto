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
  const { hoveredLinkButtonStyles, linkButtonStyles } = styles;
  const props = useLinkProps({ screen, params, action, href });
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <Pressable
      {...props}
      {...rest}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={isHovered ? hoveredLinkButtonStyles : linkButtonStyles}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};