# IBAN Validator
  
## API

### Usage

The API is written with the help of **Node.js and Express**. It has two routes:

> - **/api/check/:number**
> *(**':number'** argument is the IBAN number that should be validated)*
> - **/api/checkList**
> *(pass a JSON array of IBANs to check)*

## User interface
The UI is programmed using React.js library. The main functionalities of the API are easily reachable and usable. You can find to choices of validation:

 - **Validate only one IBAN number**
 - **Validate a list of IBANs from a .txt file**

After validation you will be presented with the results immediately.
## How to run this application
To run this application locally, all you need to do is have a ready-and-set Node.js environment. If you do, the next steps would be:

 1. Open a CMD prompt with Node.js compatibility
 2. Navigate to root folder of this application (same directory as *index.js* file)
 3. Type `npm run start` command
 4. In the browser you will find this application hiding under the address `localhost:3000` (unless you change the port yourself, it should be set to 3000, and the API port is set to 3001)
 5. That's it! Happy validation :)
