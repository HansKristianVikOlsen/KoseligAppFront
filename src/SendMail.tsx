let url =
  "https://koseligmelding.azurewebsites.net/api/Function1?code=0t299dVD2VzOH8CiPQ9zAz0ncYboGQBJqeA/l5QXmwaJPSzPPHUSlg==";

//url = "http://localhost:7071/api/Function1";

export function SendMail(MailAdress) {
  return fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "content-type": "application/json"
    },
    body: MailAdress
  });
}
//
//"Access-Control-Allow-Origin": "http://localhost:7071/api/Function1"
//
