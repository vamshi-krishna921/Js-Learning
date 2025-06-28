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

//* async returns a promise always

async function greet() {
  return "Namaste";
}
greet().then((res) => console.log(res)); //Namaste

let greet1 = async () => {
  return "Hello";
};
greet1().then((res) => console.log(res)); //Hello

//* await is used inside async used to pause the execution os async fn until promise is settled.

function rand() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random() + 10;
      console.log(random.toFixed());
      reject();
    }, 1000);
  });
}
async function randCall() {
  await rand();
  await rand();
  await rand();
  await rand();
  rand();
}
randCall();
// output : after 1 sec promsie is resolved and output comes one after another 
// 10
// 11
// 10
// 11
// 11