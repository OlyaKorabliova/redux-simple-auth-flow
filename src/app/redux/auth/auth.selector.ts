export const getAccessToken = (state) => state.auth.token;
export const isSignedIn = (state) => Boolean(state.auth.token);
export const getError = (state) => state.auth.error;
export const getUser = (state) => state.auth.user;
