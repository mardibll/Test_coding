import axios from "axios";

export const login = (data) => {
  const loginData = {
    grant_type: "password",
    client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    client_id: "e78869f77986684a",
    ...data,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("https://soal.staging.id/oauth/token", loginData)
      .then((res) => {
        resolve("Login Berhasil");
        localStorage.setItem("TOKEN", res.data.access_token);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const users = (Token) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://soal.staging.id/api/home", {
        headers: {
          authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
