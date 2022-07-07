import React from "react";
import { UserContextType } from "../types";

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;
