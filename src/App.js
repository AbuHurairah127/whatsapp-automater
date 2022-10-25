import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
const App = () => {
  const [data, setData] = useState({
    phone: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
    for (let i = 0; i < data.message.length; i++) {
      if (data.message[i] === " ") {
        data.message[i] = "%20";
      }
    }
  };
  return (
    <div className="App">
      <Header />
      <main
        style={{
          backgroundColor: "#d8f3dc",
          width: "100%",
          minHeight: "91vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <textarea
              style={{
                marginTop: 25,
                width: "50%",
                outline: "none",
                minHeight: 200,
                fontFamily: "sans-serif",
                borderRadius: 8,
                padding: 5,
              }}
              type="text"
              value={data.message}
              name="message"
              onChange={(e) => onChangeHandler(e)}
              placeholder="Type your message here e.g Assalam u Alaikum! Abu Hurairah Here..."
            />
            <input
              style={{
                marginTop: 25,
                width: "50%",
                height: 40,
                borderRadius: 8,
                outline: "none",
                padding: 5,
                border: "1px solid black",
              }}
              type="number"
              name="phone"
              value={data.phone}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter the whatsapp no."
            />
            <p
              style={{
                color: "red",
              }}
            >
              Enter the number as 923207443537
              <br />
              Please Don't Enter as 03207443537 or +923207443537
            </p>
            <button
              type="submit"
              style={{
                backgroundColor: "#1b4332",
                color: "white",
                border: 0,
                width: "50vw",
                paddingTop: 12,
                paddingBottom: 12,
                borderRadius: 100,
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
