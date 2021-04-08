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
import {connect} from 'react-redux';
import {changeAppTheme} from '../../actions/index';
import ExitModal from '../../components/ExitModal';

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

class AllConversationScreen extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    const {theme} = this.props;
    return (
      <Wrapper style={{backgroundColor: colors[theme].primary}}>
        <Header>
          <Button
            style={styles.label}
            title="CHATS"
            disabled={true}
            theme={theme}
          />
          <Button
            onPress={() => this.props.changeAppTheme()}
            style={styles.theme}
            theme={theme}>
            <Icon name="moon-outline" color={colors[theme].accent} size={25} />
          </Button>
          <Button
            onPress={() => this.setState({isVisible: true})}
            style={styles.theme}
            theme={theme}>
            <Icon name="exit-outline" color={colors[theme].accent} size={25} />
          </Button>
        </Header>
        <FlatList
          data={chats}
          renderItem={({item}) => (
            <ConversationItem chat={item} theme={theme} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.conversationsList}
        />
        <Button
          style={styles.addConversationButton}
          onPress={() => Actions.share()}
          theme={theme}
          position={{position: 'absolute', bottom: 35, right: 35}}>
          <Plus name="plus" color={colors[theme].accent} size={40} />
        </Button>

        <ExitModal
          visible={this.state.isVisible}
          onCancel={() => this.setState({isVisible: false})}
          onExit={() => {
            this.setState({
              isVisible: false,
            });
            Actions.replace('welcome');
          }}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {changeAppTheme})(
  AllConversationScreen,
);
