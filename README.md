# Terribly Tiny Word Counter
#### https://terribly-tiny-top-words.herokuapp.com/

Takes a number N as input and returns the top N words and their respective frequencies.

![Alt text](ttt1.PNG?raw=true "Title")

# Tech
  - Front-end : React.js
  - Back-end : Node.js, Express, MongoDB (Hosted on mLab)
   
# Back-end
  - freqCtrl.js - Fetch file from http://terriblytinytales.com/test.txt, and store it in a MongoDB collection. Remove any prior versions. Fetching happens at time of initial page load, this improves speed of subsequent queries.
- Create a hashmap of word-frequency pairs using a javascript object; words are stored as object keys, frequencies as key values.
- sort on frequency and return top N to front-end.

# Front-end
- FrequencyGenerator.js - the top level componenet containing state. Sends an Ajax request to fetch and store file on server before the child components are rendered on the page. Displays a spinner while file is being fetched. Has the following child components :
   - InputBox.js - gets user input. Sends an Ajax request to back-end every time the user enters a number in the input box. Requested count is sent as a query param. No submit button needed. Updates state of parent component via context passing.
  -  FrequencyTable.js - parses responses from backend and displays frequencies; has one child component - TableRow.js
 
# Deployment 

The React.js build folder is placed in the server folder and deployed on Heroku.
During development, requests to api were proxied from the front-end to the back-end server
 
 License
----

MIT

&copy; 2018 Pranaya Tomar
