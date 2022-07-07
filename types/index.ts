export interface User {
  displayName: string;
  email: string;
  photoURL: string;
}

export interface UserContextType {
  user: null | User;
  setUser: Function;
}

export interface SettingsContextType {
  timer: number;
  rest: number;
  setTimer: Function;
  setRest: Function;
}
