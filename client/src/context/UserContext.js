import React, { createContext, useReducer, useContext, useEffect } from "react";

const UserStateContext = createContext();
const UserDispatchContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false };
    case "SET_ROLE":
      return { ...state, role: action.role };
    case "GET_USERS":
      return { ...state, users: action.users };
    case "GET_USER":
      return { ...state, user: action.user };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
    role: null
  });

  useEffect(() => {
    if (state.role === "admin") onUsersLoad();
  }, [state.isAuthenticated, state.role]);

  useEffect(() => {
    onProfileLoad();
  }, []);

  const onProfileLoad = async () => {
    const user = await getUser();
    dispatch({ type: "SET_ROLE", role: !user ? null : user.role });
  };

  const onUsersLoad = async () => {
    const users = await getUsersList();
    dispatch({ type: "GET_USERS", users: users });
  };

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export {
  UserProvider,
  useUserState,
  useUserDispatch,
  loginUser,
  signOut,
  createUser,
  updateUser,
  deleteUser
};

// ###########################################################

async function loginUser(userDispatch, username, password) {
  const data = { username, password };
  try {
    let doc = await fetch("http://localhost:5000/auth", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    doc = await doc.json();
    if (!doc) {
      return userDispatch({ type: "LOGIN_FAILURE" });
    }
    localStorage.setItem("id_token", "Bearer " + doc.token);
    await userDispatch({
      type: "LOGIN_SUCCESS"
    });
    return userDispatch({
      type: "SET_ROLE",
      role: doc.user.role
    });
  } catch (e) {
    return userDispatch({ type: "LOGIN_FAILURE" });
  }
}

async function signOut(dispatch) {
  const token = localStorage.removeItem("id_token");
  let data = await fetch("http://localhost:5000/auth/logout", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: token
    }
  });
  if (data.status === 200) {
    dispatch({ type: "SIGN_OUT_SUCCESS" });
  }
}

async function getUsersList(offset = 0, limit = 0) {
  const token = localStorage.getItem("id_token");
  if (!token) return;
  let data = await fetch(
    `http://localhost:5000/admin/getUsers?offset=${offset}&${limit}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: token
      }
    }
  );
  data = await data.json();
  return data ? data.users : null;
}

// async function findUser(id) {
//   const token = localStorage.getItem("id_token");
//   let data = await fetch(`http://localhost:5000/admin/getUser/${id}`, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       Authorization: token
//     }
//   });
//   data = await data.json();
//   return data ? data.user : null;
// }

async function createUser(data) {
  const token = localStorage.getItem("id_token");
  switch (data.role) {
    case "1":
      data.role = "admin";
      break;
    case "2":
      data.role = "pm";
      break;
    case "3":
      data.role = "dev";
      break;
    default:
      return;
  }
  switch (data.gender) {
    case "1":
      data.gender = "Male";
      break;
    case "2":
      data.gender = "Female";
      break;
    default:
      return;
  }
  let doc = await fetch(`http://localhost:5000/admin/createUser`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  });
  doc = await doc.json();
  if (doc) {
    return false;
  }
  return doc;
}

async function updateUser(id, data) {
  const token = localStorage.getItem("id_token");
  switch (data.role) {
    case 1:
      data.role = "admin";
      break;
    case 2:
      data.role = "pm";
      break;
    case 3:
      data.role = "dev";
      break;
    default:
      return;
  }

  switch (data.gender) {
    case 1:
      data.gender = "Male";
      break;
    case 2:
      data.gender = "Female";
      break;
    default:
      return;
  }
  console.log(data);

  const userData = JSON.stringify(data);
  let doc = await fetch(`http://localhost:5000/admin/updateUser/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: userData
  });
  doc = await doc.json();
  console.log(doc);
  return doc ? doc.user : null;
}

async function deleteUser(id) {
  const token = localStorage.getItem("id_token");
  let doc = await fetch(`http://localhost:5000/admin/deleteUser/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  doc = await doc.json();
  console.log(doc);
  return doc ? doc.user : null;
}

async function getUser() {
  if (!localStorage.getItem("id_token")) return;
  let user = await fetch("http://localhost:5000/auth/getUser", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: localStorage.getItem("id_token")
    }
  });
  user = await user.json();
  return user ? user.user : null;
}
