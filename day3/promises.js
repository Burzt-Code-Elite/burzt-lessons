// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(`Success! Random number: ${randomNumber}`);
      } else {
        reject(`Error! Random number: ${randomNumber}`);
      }
    }, 1000);
  });
  
  // Promises Chaining
  myPromise
    .then((result) => {
      console.log(result);
      return "Chaining Step 1";
    })
    .then((result) => {
      console.log(result);
      return "Chaining Step 2";
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Error handling with Promises
  const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      // Simulate an API request
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve({ username: "john_doe", email: "john@example.com" });
        } else {
          reject("Failed to fetch user data.");
        }
      }, 1000);
    });
  };
  
  fetchUserData()
    .then((user) => {
      console.log("User data:", user);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // setTimeout and setInterval
  const timerId = setInterval(() => {
    console.log("Interval: Hello, world!");
  }, 1000);
  
  setTimeout(() => {
    clearInterval(timerId);
    console.log("Interval stopped after 5 seconds.");
  }, 5000);
  
  // Async/await
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  fetchData();
  
  // try...catch for Error handling
  const divide = (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  console.log("Result:", divide(10, 2));
  console.log("Result:", divide(8, 0));
  
  // Weather App (Project) - Code for fetching weather data would be extensive
  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data for ${city}.`);
      }
      const data = await response.json();
      console.log(`Weather in ${city}:`, data.weather[0].description);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  fetchWeatherData("New York");
  