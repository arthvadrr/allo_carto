import { Text, View } from "react-native";
import { useCardDeck } from "./CardDeck/useCardDeck";

/**
 * FinishedDeckView component
 */
export default function FinishedDeckView() {
  const { cardDeckState } = useCardDeck();

  /**
   * Render the view
   */
  return (
    <View>
      <Text>Finished deck! {cardDeckState.cardDeck.words.length}</Text>
    </View>
  )
}