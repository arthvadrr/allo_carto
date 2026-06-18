import { deckAtlas, DeckChapter, DeckPlace } from "@/data/french/deckAtlas";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../app/colors";
import LinkButton from "./LinkButton";

/**
 * Place Select View component
 */
export default function PlaceSelectView() {
  const {
    placeSelectStyle,
    chapterContainerStyle,
    chapterTitleContainerStyle,
    chapterTitleStyle,
    placeImageBackgroundStyle
  } = styles;

  const { chapters } = deckAtlas;

  /**
   * Render the card grid
   */
  return (
    <View style={placeSelectStyle}>
      {
        /**
         * Map the chapters
         */
        chapters.map((chapter: DeckChapter, index) => {

          /**
           * Destructure the chapters
           */
          const { id, name, places } = chapter;

          /**
           * Render the individual chapter sections
           */
          return (
            <View style={chapterContainerStyle} key={id}>
              <View style={chapterTitleContainerStyle}>
                <Text>Chapter: {index + 1}</Text>
                <Text style={chapterTitleStyle}>{name}</Text>
              </View>
              {
                /**
                 * Map the places
                 */
                places.map((place: DeckPlace) => {

                  /**
                   * Destructure the place data
                   */
                  const { id, name, image } = place;

                  /**
                   * Render the place view/card
                   */
                  return (
                    <View key={id}>
                      <ImageBackground
                        source={image}
                        style={placeImageBackgroundStyle}
                      >
                        <Text>{name}</Text>
                      </ImageBackground>
                      <LinkButton
                        screen={''}
                        params={{ href: '/' }}
                      />
                    </View>
                  )
                })
              }
            </View>
          )
        })
      }
    </View>
  );
}

/**
 * Styles
 * TODO: styles
 */
const styles = StyleSheet.create({
  chapterContainerStyle: {
    display: 'flex',
    gap: 12,
    padding: 16,
  },
  placeSelectStyle: {
    display: 'flex',
    gap: 8,
  },
  chapterTitleContainerStyle: {

  },
  chapterTitleStyle: {
    textAlign: 'center',
    width: '100%',
    color: colors.light.text,
  },
  placeImageBackgroundStyle: {
    height: 200
  }
})
