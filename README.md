# Currency Exchanger - The Low-Budget Forex App
#### By _**Marcus Lorenzo**_
##### Github Pages Link: [https://marcusanthonylorenzo.github.io/currency-exchanger/](https://marcusanthonylorenzo.github.io/currency-exchanger/)
---

| **_Overview_:** |
|---|
#### A forex app, for those who like to move money, globally.
**Notes:**
- I've used an open API key so that people can easily use the app on my GitHub Pages.
- Only updates exchange rate from 00:01am on the day.


#### Technologies Used:
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)  ![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
---

#### Description: Overall, this application works, and can easily introduce a new drop-down selection in lieu of just the "almighty US Dollar"	:dollar: to have more accessibility. I will still need to improve my error handling as I am not quite sure how to present specific error number codes from .catch to the DOM.

##### **My primary objectives** outside of the prompt were:
- Be more dynamic with the DOM and the API object together.
- Try to use objects to store data via key/value rather than just pure variables or arrays.
- Always DRY.

##### **My ultimate objective was** to:
- Make an app thats capable enough to convert any currency minus crypto.
- Make an app capable of easily configuring components (to easily add more features later).
- Use arrow functions as often as possible.

---

| **_Setup & Installation_:** |
|---|
#### :warning: **Please make sure** that in order to run the project correctly:

##### 	:exclamation: You will need an API key :old_key: for this project to work. Please retrieve one [HERE](https://www.exchangerate-api.com/).
- Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
- Follow the prompt, and create a password. You will be sent a confirmation email which you must use to activate your account. (It may be found in your "promotions" or "spam" folder, if not your primary folder.)
- Once clicking the activation link, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
- In the instructions below, we will store and .gitignore your key in a `.env` file and in your code it will be assigned to `process.env.API_KEY`.

##### 	:exclamation: Once you've received this repo on your computer:
- Install the node_modules directory (node: `npm install` or yarn: `yarn install`).
- Install package to load environment variables from .env with `npm install dotenv-webpack@2.0.0 --save-dev`.
- Bundle the code, and run the program via server. (node: `npm run start` or yarn: `yarn run start`).

####   More detailed instructions provided below:

|   via CLI   |  via Download  |
|---|---|
| Download install Git Bash (Windows), use the terminal in your text editor, or open Terminal(Mac) | Simply download the ZIP via the green "Code" button to right of the "Add file" button at the main repo page. 
 Open Git Bash or Terminal and type: `cd desktop` | Go to your zip file and extract to desired location on computer. 
 Next, clone `https://github.com/marcusanthonylorenzo/currency-exchanger` | Go to specified extraction folder, and open index.html in your broswer. 
 Once completed, open this new directory in your text editor | 
 In the root directory, create an `.env` file; inside, type `API_KEY= {insert your API key here}`. In your CLI, run `npm install dotenv-webpack@2.0.0 --save-dev` to be able to access your .env variables in your code. | **Note**: downloading not cloning will not allow you to push any changes to the repo. 
 In the CLI, install node_modules directory via `npm install` or `yarn install`, then bundle and start local server via `npm run start` or `yarn run start` to run project. |


#### Running Tests:
- To view tests via Jest, in your CLI type `npm run test`.

#### Known Bugs:
* None at present time.

---


| **_Design Plan_ (Specs):** |
|---|
#### Create:
- [x] USA Rate (some sort of indicator).
- [x] Drop-down Country Selector "Converted amount" x 5
- [x] class for fetching API and error handling.
- [ ] If time: Drop-down Country Selector "Exchange from".
- [ ] One of those "swappy" things to swap to-and-from currencies.
- [?] Return Error in output.

#### Objects/Classes, Properties:
- Currency
  - .getExchangeRate();
     - fetch()

#### Collections/Groupings:
- none at present moment.

#### Behaviours/Interactivity:
- Exchange.getRate()
- convertCash()

Errors:
- display <div class=errors/><h4/>error.message<p/>I'm sorry...
- Async functions?

UI:
- Select country for conversion.
- Display output.
- error display


---
| **_License_:** |
|---|

[MIT](https://github.com/marcusanthonylorenzo/currency-exchanger/blob/add-license-1/LICENSE)

Copyright (c) 2022 _Marcus Lorenzo_


#### Thanks for viewing!
