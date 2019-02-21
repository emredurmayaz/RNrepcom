const apiPath = "http://192.168.1.45:4000";

export default async function getToken(username, password) {
   
    try {
      let response = await fetch(
        apiPath+"/users/authenticate",{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
          }
      );
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
