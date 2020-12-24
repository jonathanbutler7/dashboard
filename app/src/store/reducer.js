export function reducer(state, action) {
  let newState;
  // console.log(state);
  switch (action.type) {
    case 'add-new-message':
      newState = [...state, action.payload];
      return newState;
    case 'delete-all':
      newState = [];
      return newState;
    case 'change-text':
      newState = state.map((msg) =>
        action.payload.timestamp === msg.timestamp
          ? { ...msg, message: action.payload.text }
          : msg
      );
      return newState;
    case 'toggle-delete-confirmation':
      newState = state.map((msg) =>
        action.payload === msg.id
          ? {
              ...msg,
              confirm: !msg.confirm,
            }
          : msg
      );
      return newState;
    case 'delete-message':
      newState = state.filter((msg) => msg.id !== action.payload);
      return newState;
    case 'toggle-edit':
      newState = state.map((msg) =>
        action.payload === msg.id ? { ...msg, edit: !msg.edit } : msg
      );
      return newState;
    default:
      return newState;
  }
}
