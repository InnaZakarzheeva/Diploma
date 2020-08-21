import React from 'react';
import {Wrapper} from '../../config/styles';
import Button from '../../components/Button';
import {styles, Header} from './styles';
import {FlatList} from 'react-native';
import ConversationItem from './components/ConversationItem';
import {Actions} from 'react-native-router-flux';
import colors from '../../config/constants';
import Plus from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const chats = [
  {
    id: '1234',
    name: '',
  },
  {
    id: '5678',
    name: 'Conversation 2',
  },
  {
    id: '1111',
    name: '',
  },
  {
    id: '2222',
    name: 'Conversation 4',
  },
];

export default class AllConversationScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Button style={styles.label} title="CHATS" disabled={true} />
          <Button onPress={() => {}} style={styles.theme}>
            <Icon name="moon-outline" color={colors.white} size={25} />
          </Button>
          <Button onPress={() => {}} style={styles.theme}>
            <Icon name="exit-outline" color={colors.white} size={25} />
          </Button>
        </Header>
        <FlatList
          data={chats}
          renderItem={({item}) => <ConversationItem chat={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.conversationsList}
        />
        <Button
          style={styles.addConversationButton}
          onPress={() => Actions.share()}
          position={{position: 'absolute', bottom: 35, right: 35}}>
          <Plus name="plus" color={colors.white} size={40} />
        </Button>
      </Wrapper>
    );
  }
}
