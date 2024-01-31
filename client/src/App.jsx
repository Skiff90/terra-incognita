// client/src/App.jsx
import React from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const userId = "1"; // Replace with the actual user ID

  return (
    <div className="App">
      <UserDetails userId={userId} />
    </div>
  );
}

export default App;
