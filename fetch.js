let url = "https://catfact.ninja/fact";
fetch(url)
  .then((Response) => {
    console.log(Response);
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.fact);
    console.log(data.length);
  })
  .catch((err) => {
    console.log("error", err);
  });
