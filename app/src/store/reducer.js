export function reducer(state, action) {
  console.log(state)
  let newState;
  switch (action.type) {
    case 'add-new-message':
      newState = [...state, action.payload];
      return newState;
    case 'delete-all':
      newState = [];
      return newState;
    case 'change-text':
      newState = state.map((msg) =>
        action.payload.id === msg.id
          ? { ...msg, message: action.payload.text }
          : msg
      );
      return newState;
    case 'change-level':
      newState = state.map((msg) =>
        action.payload.id === msg.id
          ? {
              ...msg,
              level: action.payload.level,
            }
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
        action.payload === msg.id
          ? { ...msg, edit: !msg.edit }
          : { ...msg, edit: false }
      );
      return newState;
    default:
      return newState;
  }
}
