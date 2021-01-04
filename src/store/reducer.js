export function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'add-new-message':
      newState = [...state, action.payload];
      return newState;
    case 'change-text':
      newState = state.map((msg) =>
        action.payload.id === msg.id
          ? { ...msg, message: action.payload.text, edit: false }
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
    case 'toggle-message':
      if (action.payload.property === 'edit') {
        newState = state.map((msg) =>
          action.payload.id === msg.id
            ? { ...msg, edit: !msg.edit }
            : { ...msg, edit: false }
        );
      }
      if (action.payload.property === 'delete') {
        newState = state.map((msg) =>
          action.payload.id === msg.id
            ? {
                ...msg,
                confirm: !msg.confirm,
              }
            : msg
        );
      }
      return newState;
    case 'delete':
      if (!action.payload) {
        newState = [];
      }
      if (action.payload) {
        newState = state.filter((msg) => msg.id !== action.payload);
      }
      return newState;
    default:
      return newState;
  }
}
