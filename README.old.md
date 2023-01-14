## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Fetch the Weather

Let's use our new-found react skills to create a weather app!

**You will need:**

* Fetch (built-in to JavaScript) or axios (3rd party, remember to `npm install axios`)
* Create forms that store data with local state

## Implement the Fetch API

**Resources**:

- [OpenWeather API](http://openweathermap.org/current)

- [OpenWeather API Documentation](http://openweathermap.org/current)

- [Info on `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

Time to show off! You're going to display the weather on your app.

You'll use the OpenWeather API to fetch weather information from a certain zip code and update your blog to display the current weather.

## Solution

At the end of this exercise, your solution will look something like what's shown here.

<img src="https://res.cloudinary.com/briezh/image/upload/v1556235234/weather_gi72z2.png" class="responsive" />

---

## Steps to Achieve

* Fork and clone this repo
* cd into the new folder and run `npx create-react-app .` to generate a new react app in the repo.
* sign up for an API [here](https://openweathermap.org/price)
* Make a new component called `Weather`.
On your `Weather` page, ask the user to input a zip code.
	* you will need to use a 'controlled form' where your `Weather` component's state controls the value of the input
	* store what the user has typed in your `Weather` component's state.
	* you will need an `onChange` event handler, that updates state as the user types
	* you will need an `onSubmit` event handler, that is invoked when the user submits the form, don't forget to prevent the default behavior of the form submission!
	* You can learn more about forms [here](https://facebook.github.io/react/docs/forms.html).
* when the form is submitted, use the value in state and `fetch()` from the OpenWeather API. (note, you may `npm i axios` and use it instead of fetch, if you prefer)
	* read [here](https://openweathermap.org/current#zip) how to ping the API and get results based on zipcode
* Use the response from the API to display the current temperature, the high and low temperatures, the current weather description, and the name of the city.
	* Note: Our solution uses Fahrenheit. You're free to use Celsius or Kelvins if you'd like.

**Need a Hint or Two?**

<details>
    <summary>Hint 1</summary> 
    <br />
    You'll only need to create and implement the `Weather` component.
</details>
<details>
  <summary>Hint 2</summary>
  <br />
  The `value` of your text fields need to be 'controlled' in your components state
</details>
<details>
  <summary>Hint 3</summary>
  <br />
  The temperature reading comes in units of Kelvin by default - check the API for the `units` parameter to get the reading in Farenheit or Celcius
</details>

## Bonus

Here are some extra ideas to challenge yourself if you have time:

* Icons make every weather app come to life! There's a good way to do this - hunt around in the returned JSON for a recommended icon.
* Spend a little time styling the page. Try to get it close to the example image above!
* Make your current weather into a 5-day forecast
* Make a `Use current location` button so the user can click that instead of providing the location.
