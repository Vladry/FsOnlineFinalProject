import {ACTIONS} from "./action";

const init = {
  loading: false,
  chatId: -1,
  chats: [],
}

export default (state = init, {payload, type}) => {
  switch (type) {
    case String(ACTIONS.setChatId):
      return {
        ...state,
        chatId: payload.chatId,
      };
    case String(ACTIONS.resetChatId):
      return {
        ...state,
        chatId: -1,
      };
    case String(ACTIONS.getChats.request):
      return {
        ...state,
        loading: true,
      };
    case String(ACTIONS.getChats.success):
      return {
        ...state,
        loading: false,
        chats: payload.chats
      };
    case String(ACTIONS.getChats.fail):
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}