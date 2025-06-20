# How to Run this Project
- Install Dependencies
    - npm install
- Environment Variable File
    - Create .env file on the root folder that contains the following varibles
        - DATABASEHOSTNAME=
        - DATABASENAME=
        - DATABASEPASSWORD=
        - DATABASEPORT=
        - DATABASEUSERNAME=
        - JWT_SECRET=
- Start up program
    - npm run start
# Backend Code Challenge

Create a backend API using Node.js, Graphql, Typescript, Apollo Graphql Server and Typegraphql.
	
- Key Requirements
	- **Lenguage**: Typescript/Javascript
	- **Database**: Connect to Mysql Database 
	- **Bussiness Logic**:  Bussiness logic should ONLY be applied using Typescript/Javascript code and native functions(avoid using knex to filter out)
	- **API Structure**:  Adhere to the specified data return formats
- Additional considerations:
	-  **Security**: Use JWT tokens to store claims data from user session, use it to authorize requests to the backend API, endpoints should read claims from session and fetch the correct information from the user session


# Database connectionstring

The connection string will be shared on zoho vault at the challenge time (please check the spam folder) and the entry key will be shared in the instructions email.

# Challenges
## Owner Access Token (JWT token) 

Complete the Authentication query, lookup owner information based on Email and OwnerNumber provided as parameters to the endpoint and generate an access token that contains the owner information, return the token as the response of the endpoint.

- JWT Token Example
	- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwib3duZXJJZCI6OS45OTE5MTkxOTE5MTkxOTJlKzI1LCJvd25lck51bWJlciI6IjEwMDAwMzAwMzAwMzAwIiwiZW1haWwiOiJqb2huZG9lQG1haWwuY29tIiwidXNlclJvbGVzIjpbeyJyb2xlIjoiUExBVElOVU0ifV19.oZJnqvDJcP17HaJX_fuVaBbpmo1ap_0Lvn37t8HsSTk
- Visit this website to decode it
		-	https://jwt.io/
- JWT Payload format

        - ownerId
        - ownerNumber
        - email
        - userRoles 


## Owner profile
Complete the Owner Profile query, using the decoded access token fetch the correct owner profile.

	- Number
	- GivenName+surname
	- Email
	- Roles
		- role

## Owner Available points 1
Create an endpoint that reads **contractusage table** from an owner and calculates and returns the correct amount of points base on the following rules.
- Allowed usage type (4,11,12,13,14,15)
- Based on startDate and endDate  return points from this year and next year
- contract should not be delinquent 
- contract should be active
- contract should not be Relase type
- contract usage details should return total points group by usage type
- total amount of points should be across all contract from the owner
return response in the following format

		- Total Amount of Points Remainig
			- Contract Usage Details
				- Usage Type Description
				- Total Amount of Points

## Owner Available points 2
Create an endpoint that reads **contractusage table** from an owner and calculates and returns the correct amount of points base on the following rules.
- Allowed usage type (27)
- Based on startDate and endDate return points from this year and next year
- contract should not be delinquent 
- contract should be active
- contract usage details should return total points group by usage type
- total amount of points should be across all contract from the owner
- response should included an array of deeded info from the owner contracts
return response in the following format

		- Total Amount of Points Remainig
			- Contract Usage Details
				- Usage Type Description
				- Total Amount of Points
		- Deeded Ownership
			- resortName
			- season
			- villa type

##  Owner Reservation History
Create and endpoint that returns the complete history of reservations

- Upcoming reservations  end date should be after or equal to today
- Past reservations are all the reservations that their check in and check out date is in the past from today
- Response should be in the following format

			- Upcoming Reservations
				 - Reservation Id
				- Site Name
				- Check in Date
				- Check out Date
				- status
			- Past Reservations
				 - Reservation Id
				- Site Name
				- Check in Date
				- Check out Date
				- status