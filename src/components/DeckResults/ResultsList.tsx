import colors from "@/src/app/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import { Word } from "../CardDeck/cardDeckTypes";

/**
 * Typing
 */
interface ResultsListProps {
  isCorrect: boolean;
  wordArr: Word[];
}

/**
 * ResultsList component
 */
export default function ResultsList({ isCorrect, wordArr }: ResultsListProps) {
  const {
    sectionTitleStyle,
    wordRowContainerStyle,
    checkMarKContainerStyle,
    wordRowStyle,
    wordsListStyle,
    frenchWordStyle,
    englishWordStyle,
    successStyle,
    dangerStyle,
    userScoreStyle,
    CEFRStyle
  } = styles;

  /**
   * Is correct or nah?
   */
  const title: string = isCorrect ? 'Correct' : 'Incorrect';
  const iconColor: string = isCorrect ? colors.dark.success : colors.dark.danger;
  const isCorrectStyle: TextStyle = isCorrect ? successStyle : dangerStyle;
  const iconName: ComponentProps<typeof MaterialIcons>["name"] = isCorrect ? 'check' : 'close';

  /**
   * Render the results list
   */
  return (
    <View style={wordsListStyle}>
      <Text style={sectionTitleStyle}>{title}</Text>
      {wordArr.length > 0 && wordArr.map((word: Word) => {
        const {
          frenchWord,
          userScore,
          englishWords,
          CEFR
        } = word;

        /**
         * Map out the words
         */
        return (
          <View key={`${frenchWord}-${userScore}`} style={wordRowContainerStyle}>
            <View style={checkMarKContainerStyle}>
              <MaterialIcons
                name={iconName}
                size={24}
                color={iconColor}
              />
              <View style={wordRowStyle}>
                <Text style={frenchWordStyle}>{frenchWord}</Text>
                <Text style={[englishWordStyle, isCorrectStyle]}>{englishWords.join(', ')}</Text>
              </View>
            </View>
            <View style={userScoreStyle}>
              <Text></Text>
            </View>
            <Text style={[CEFRStyle, { backgroundColor: colors.light.CEFR[CEFR] }]}>{CEFR}</Text>
          </View>
        );
      })}
      {wordArr.length === 0 && <Text>Wow, you need practice!</Text>}
    </View>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  sectionTitleStyle: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.dark.text
  },
  wordRowContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.light.border,
    padding: 4,
  },
  checkMarKContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  wordRowStyle: {
    padding: 2,
  },
  wordsListStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
  frenchWordStyle: {
    fontSize: 16,
    fontWeight: 400
  },
  englishWordStyle: {
    fontSize: 16,
    fontWeight: 700,
  },
  successStyle: {
    color: colors.dark.success
  },
  dangerStyle: {
    color: colors.dark.danger
  },
  userScoreStyle: {

  },
  CEFRStyle: {
    fontSize: 12,
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.light.border
  }
});