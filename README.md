### Study Notes
[Internet Protocols & API Design](https://github.com/getfutureproof/fp_guides_wiki/wiki/Internet-Protocols-&-API-Design)

# Exercises
We are building a neighbourhood collaboration site and we want to make a system to keep track of people, houses, and addresses of those houses.
   - Each person has a name, age and number of people in their household
   - Each house has an address and an owner
   - Each address has a postcode and street address

The REST API will need to enable users to:
   - Store people, houses and addresses
   - Look up a house, it’s address and owner
   - Look up people in our neighbourhood within certain age brackets and with specific household sizes

***

1. Consider the type of data we will be storing and therefore the type of database we should implement (SQL vs NoSQL)
2. Create a schema for this database
3. Consider the requests our API should be capable of handling
4. List the routes you will need with their HTTP verb and path
5. Determine the responses that should be returned and the content types of these requests and responses

Create documentation for your API on a tool of your choice eg.
- in a GitHub Readme
- [Apiary](https://apiary.io/)
- [Insomnia](https://insomnia.rest/)
- [Postman](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/)

If not using a README.md file for your documentation, create a GitHub repo with a README.md containing a link to the documentation
When first making the repo, make a working branch so you can PR back to master/main later on and request review!