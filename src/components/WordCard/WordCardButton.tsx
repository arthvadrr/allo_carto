import { colors } from '@/src/app/styles';
import { ReactElement, ReactNode, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { CardMistake, WordCardContext, WordCardStateProps } from './wordCardContext';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * Typing
 */
interface WordCardButtonProps extends PressableProps {
  SVGElement?: ReactElement;
  children?: ReactNode;
}

/**
 * WordCardButton Component
 * Handles checking/next card actions
 */
export default function WordCardButton({
  children,
  SVGElement,
  style,
  ...props
}: WordCardButtonProps) {
  const { cardState, setCardState } = useContext(WordCardContext);
  const [pressableStateStyle, setPressableStateStyle] = useState<ViewStyle | null>({});
  const [textStateStyle, setTextStateStyle] = useState<TextStyle | null>({});
  /**
   * Style vars
   */
  const {
    containerStyles,
    pressableStyles,
    successPressable,
    warningPressable,
    errorPressable,
    warningText,
    errorText,
    textStyles,
    successText,
  } = wordCardButtonStyles;

  /**
   * Eval current style
   */
  useLayoutEffect(() => {
    switch (cardState.progress) {
      case 'SUCCESS': {
        setPressableStateStyle(successPressable);
        setTextStateStyle(successText);
        break;
      }
      case 'WARNING': {
        setPressableStateStyle(warningPressable);
        setTextStateStyle(warningText);
        break;
      }
      case 'DANGER':
        setPressableStateStyle(errorPressable);
        setTextStateStyle(errorText);
        break;
      case 'PENDING':
        setPressableStateStyle({});
        setTextStateStyle({});
        break;
    }
  }, [
    successText,
    warningText,
    errorText,
    successPressable,
    warningPressable,
    errorPressable,
    cardState.progress,
  ]);

  /**
   * State/prop vars
   */
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
   * Check the user's answer
   */
  const checkAnswer = useCallback(() => {
    let updates: Partial<WordCardStateProps> | null = null;
    let mistake: CardMistake = 'NONE';

    if (cardState.stage === 'READY') {
      /**
       * Did the user get the wrong article?
       */
      if (
        cardState.correctArticle &&
        cardState.correctArticle !== cardState.selectedArticle
      ) {
        mistake = 'ARTICLE';
      }

      /**
       * Did the user get the wrong word? Both article and word?
       */
      if (cardState.correctWord !== cardState.selectedWord) {
        mistake = mistake === 'ARTICLE' ? 'BOTH' : 'WORD';
      }

      /**
       * If we have a mistake, trigger warning state
       * Else we can show the user they got it right.
       */
      if (mistake !== 'NONE') {
        updates = { progress: 'WARNING', mistake };
      } else {
        updates = { progress: 'SUCCESS', stage: 'CORRECT' };
      }
      /**
       * Else if we were already showing the user the other
       * side of the card, mark this one completed.
       */
    } else if (cardState.stage === 'CORRECT') {
      updates = { progress: 'SUCCESS', stage: 'COMPLETED' };
      /**
       * Else if the user got it wrong and
       * ran out of attempts. Progress the
       * card without upping the word score.
       */
    } else if (cardState.stage === 'INCORRECT') {
      updates = { progress: 'DANGER', stage: 'COMPLETED' }
    }

    if (cardState.attempts > 0 && mistake !== 'NONE') {
      updates = { progress: 'DANGER', stage: 'INCORRECT' }
    }

    if (updates) {
      setCardState(prev => ({
        ...prev,
        ...updates,
        attempts: prev.attempts + 1,
      }));
    }

  }, [
    cardState.attempts,
    cardState.stage,
    cardState.correctArticle,
    cardState.selectedArticle,
    cardState.selectedWord,
    cardState.correctWord,
    setCardState,
  ]);

  /**
   * Action handlers
   */
  const handlePressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
    checkAnswer();
  }, [checkAnswer]);

  /**
   * Handle pressed button style only side effects
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

  }, [isPressed, shadowOffsetHeight, top]);

  /**
   * Render the WordCard
   */
  return (
    <Animated.View style={[containerStyles, animatedContainerStyle]}>
      <AnimatedPressable
        {...props}
        disabled={cardState.progress === 'WARNING'}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          pressableStyles,
          pressableStateStyle,
          animatedShadowStyle,
        ]}
      >
        {SVGElement}
        <Text
          style={[
            textStyles,
            textStateStyle,
          ]}>
          {children}
        </Text>
      </AnimatedPressable>
    </Animated.View>
  );
};

/**
 * Styles
 */
const wordCardButtonStyles = StyleSheet.create({
  containerStyles: {
    margin: 24
  },
  pressableStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.dark.border,
    backgroundColor: colors.dark.primary,
    borderRadius: 16,
    borderWidth: 2,
    padding: 14,
    gap: 16,
    shadowColor: colors.dark.border,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textStyles: {
    color: colors.light.text,
    fontWeight: '800',
    fontSize: 16,
  },
  successPressable: {
    backgroundColor: colors.light.success,
    shadowColor: colors.light.border,
  },
  warningPressable: {
    backgroundColor: colors.light.warning,
    borderColor: colors.light.warning,
    shadowColor: colors.dark.warning,
  },
  errorPressable: {
    backgroundColor: colors.light.error,
    borderColor: colors.light.error,
    shadowColor: colors.dark.error,
  },
  successText: {
    color: colors.dark.text
  },
  warningText: {
    color: colors.dark.warning,
  },
  errorText: {
    color: colors.dark.error,
  },
});
