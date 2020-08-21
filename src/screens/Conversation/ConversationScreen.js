import React from 'react';
import {Wrapper} from '../../config/styles';
import Button from '../../components/Button';
import {styles, ChatWrapper} from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import MessageBubble from './components/MessageBubble';
import InputToolbarComponent from './InputToolbarComponent';

const messages = [
  {
    _id: 1,
    text: 'Hello!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'User',
    },
  },
  {
    _id: 1,
    text: 'How are you?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Me',
    },
  },
];

export default class ConversationScreen extends React.Component {
  renderBubble = (props) => <MessageBubble props={props} />;

  renderInputToolbar = (props) => <InputToolbarComponent props={props} />;

  render() {
    const {nameOfConversation} = this.props;
    return (
      <Wrapper>
        <Button
          title={nameOfConversation || 'Conversation'}
          position={{position: 'absolute', top: 45}}
          style={styles.chatHeader}
          disabled={true}
        />
        <ChatWrapper>
          <GiftedChat
            ref={(r) => (this.giftedChat = r)}
            messages={messages}
            // onSend={(message) => this.onSend(message)}
            renderAvatar={null}
            alwaysShowSend
            renderBubble={this.renderBubble}
            renderInputToolbar={this.renderInputToolbar}
            renderTime={() => {}}
            renderDay={() => {}}
            // alignTop
            // loadEarlier={canLoadMore}
            // isLoadingEarlier={isLoading}
            // onLoadEarlier={this.onLoadEarlier}
            minInputToolbarHeight={60}
            maxComposerHeight={40}
            user={{
              _id: 1,
            }}
          />
        </ChatWrapper>
      </Wrapper>
    );
  }
}
