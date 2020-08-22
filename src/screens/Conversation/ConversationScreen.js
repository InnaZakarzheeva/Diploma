import React from 'react';
import {Wrapper} from '../../config/styles';
import Button from '../../components/Button';
import {styles, ChatWrapper} from './styles';
import {GiftedChat, MessageText} from 'react-native-gifted-chat';
import MessageBubble from './components/MessageBubble';
import InputToolbarComponent from './components/InputToolbarComponent';
import OuterBubble from './components/OuterBubble';
import InnerBubble from './components/InnerBubble';

export default class ConversationScreen extends React.Component {
  state = {
    messages: [
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
        _id: 2,
        text: 'How are you?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Me',
        },
      },
    ],
  };

  renderBubble = (props) => <MessageBubble props={props} />;

  renderInputToolbar = (props) => <InputToolbarComponent props={props} />;

  renderMessageText = (props) => {
    const {currentMessage} = props;
    const {
      user: {_id},
    } = currentMessage;
    switch (_id) {
      case 1:
        return (
          <InnerBubble>
            <MessageText {...props} />
          </InnerBubble>
        );
      case 2:
        return (
          <OuterBubble>
            <MessageText {...props} />
          </OuterBubble>
        );
      default:
        return <MessageText {...props} />;
    }
  };

  onSend = (message) => {
    this.setState({
      messages: this.state.messages.concat(message),
    });
  };

  render() {
    const {nameOfConversation} = this.props;
    const {messages} = this.state;
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
            onSend={(message) => this.onSend(message)}
            renderAvatar={null}
            alwaysShowSend
            renderBubble={this.renderBubble}
            renderMessageText={this.renderMessageText}
            renderInputToolbar={this.renderInputToolbar}
            renderTime={() => {}}
            renderDay={() => {}}
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
