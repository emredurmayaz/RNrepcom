const apiPath = "http://localhost:4000";
const DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YzZhYjM0NDVhNmUyYjMwODRlOTZlZjAiLCJpYXQiOjE1NTA0OTY1OTN9.idlPoRW4NORdHWxD3kFyVmlWe231DDQ74AgRZA_rctI"

export async function getAll(route) {
    try {
      let response = await fetch(
        apiPath + route,{
            method: "GET",
            headers: {
              'Authorization': 'Bearer ' + DEMO_TOKEN
            }
          }
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  