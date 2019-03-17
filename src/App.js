import React from "react";

const Store = React.createContext();

export function Parent(props) {
  const obj = { text: "Random Text" };

  return <Store.Provider value={obj}>{props.children}</Store.Provider>;
}

export function Child() {
  //return <Consumer>{text => <div>{text}</div>}</Consumer>;
  const hook = React.useContext(Store);
  return <div>{hook.text}</div>;
}
