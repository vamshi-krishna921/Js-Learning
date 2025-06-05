let callbackHell = () => {
  setTimeout(() => {
    console.log("Hi, my name is krishna");
    setTimeout(() => {
      console.log("Hi, I am an Indian");
      setTimeout(() => {
        console.log("Hi, I am a student");
        setTimeout(() => {
          console.log("Hi, I am studing in Chaitanya");
          setTimeout(() => {
            console.log("Hi, I do my work sincerely");
            setTimeout(() => {
              console.log("Hi, I am an entrepreneur");
              setTimeout(() => {
                console.log("Hi, I am an local person.");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);  
  }, 1000);
};

callbackHell();

// OUTPUT
// Hi, my name is krishna (after 1 sec)
// Hi, I am an Indian (after 1 sec)
// Hi, I am a student (after 1 sec)
// Hi, I am studing in Chaitanya (after 1 sec)
// Hi, I do my work sincerely (after 1 sec)
// Hi, I am an entrepreneur (after 1 sec)
// Hi, I am an local person. (after 1 sec)
