export const createActionType = (actionType: string) => {
  return {
    REQUEST: `${actionType}_REQUEST`,
    SUCCESS: `${actionType}_SUCCESS`,
    ERROR: `${actionType}_ERROR`,
  };
};
