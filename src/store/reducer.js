export function reducer(state, action) {
  switch (action.type) {
    case 'add-new-message':
      return {
        ...state,
        allMessages: [...state.allMessages, action.payload],
      };
    case 'delete-all':
      return { ...state, messages: [] };
    case 'delete-one':
      let newMessages = state.allMessages.filter(
        (msg) => msg.id !== action.payload
      );
      return { ...state, messages: newMessages };
    case 'is-running':
      return { ...state, isRunning: action.payload };
    case 'set-snackbar':
      return { ...state, snackbar: action.payload };
    case 'set-select':
      return { ...state, select: action.payload };
    default:
      return;
  }
}
