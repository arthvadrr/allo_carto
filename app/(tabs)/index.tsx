import { Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';
import styles from '../styles';

export default function HomeScreen() {
  const { text } = styles;

  return (
    <View>
      <Text style={text}>Welcome</Text>
      <LinkButton screen="deck" params={{ id: 'jane', href: '/' }}>
        Review a Deck
      </LinkButton>
    </View>
  );
}

