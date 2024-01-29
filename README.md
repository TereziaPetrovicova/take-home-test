TAKE HOME TEST (notes)

Took me fairly up to 90 mins. I focused on delivering a working solution at the first place, following basic requirements.

Trade-offs I made in sake of timeliness:

Making it simple and straightforward rather than complex

Taking hardcoded JSON data instead of retrieving data from DB

-

For timeliness, I left out features like

Error handling for incorrectly formatted or corrupted JSON, which is crucial in more robust applications. As this is not the case, I assumed the JSON data is correctly formed. The same applies for missing data fields.

Date validation in case the date wouldn´t match the given format or wouldn´t match valid calendar dates.

Input validation for accuracy

Configurability of JSON for handling different input formats or sources (when working with different DBs, preferences of format, etc)


There is more to consider / improve, of course. It all depends on the specificities of the application, environment, user´s needs... context, extent...


HOW TO RUN THE CODE:
1
Make sure to install the latest Node.js on your computer

2
Create a file where you write all required logic, etc. (named birthdayProgram.js for example)

3
In the package.json, add ”type“: ”module“ (because of ES module syntax)

4
Open a terminal, navigate to the directory of your file and run node birthdayProgram.js that will print out matching birthday for the day.