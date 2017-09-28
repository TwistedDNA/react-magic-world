export const addRule = (newRule) => {
  return {
    type: "ADD_RULE",
    payload: newRule
  }
};