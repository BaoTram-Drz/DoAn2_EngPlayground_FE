import React, { useState } from "react";
import { styles } from "../styles";
import { LoadingOutlined } from "@ant-design/icons";
import Avatar from "../Avatar";
import axios from "axios";

const EmailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).email
      : ""
  );

  async function getOrCreateUser(email) {
    try {
      const response = await axios.put(
        "https://api.chatengine.io/users/",
        {
          username: email,
          secret: email,
          email: email,
        },
        { headers: { "PRIVATE-KEY": process.env.REACT_APP_CE_PRIVATE_KEY } }
      );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating/getting user:", error);
      throw error;
    }
  }

  async function getOrCreateChat(email) {
    try {
      const response = await axios.put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["admin@gmail.com", email],
          is_direct_chat: true,
        },
        { headers: { "PRIVATE-KEY": process.env.REACT_APP_CE_PRIVATE_KEY } }
      );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating/getting chat:", error);
      throw error;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log("Sending email: " + email);

    try {
      console.log(email);
      const user = await getOrCreateUser(email);
      props.setUser(user);

      const chat = await getOrCreateChat(email);
      props.setChat(chat);

      console.log("Success, ", chat);
    } catch (error) {
      // Handle error
      console.error("Error in handleSubmit:", error);
    } finally {
      setLoading(false);
      window.open("/chat", "_blank");
    }
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0%",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>

      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "1" : "0",
            fontSize: "82px",
            top: "calc(50% - 41px)",
            left: "calc(50% - 41px)",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{ position: "relative", left: "calc(50% - 44px)", top: "10%" }}
        />

        <div style={styles.topText}>
          Welcome to my <br></br> Support
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
        >
          <input
            style={styles.emailInput}
            placeholder={
              localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user")).email
                : ""
            }
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <div style={styles.bottomText}>
          CLICK ENTER TO CONTINUE <br></br> (LINK TO NEXT PAGE)
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
