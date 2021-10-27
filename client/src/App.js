import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Adduser from "./components/Adduser";
import UserList from "./components/UserList";
import { userGet } from "./JS/userSlice/userSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userGet());
  }, [ping]);
  return (
    <div className="App">
      <header>
        <Adduser ping={ping} setping={setping} />
      </header>
      <UserList ping={ping} setping={setping} />
    </div>
  );
}

export default App;
