# Register User

Returns a json data about a new user

- ### URL:

	`/users/register`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	`username = [string]`

	`email = [string]`

	`password = [string]`

- ### Success Response:

	Code: 201 CREATED

	Content :

	```json
	json
	{ id : 1, 
	 username : "instaplants", 
	 email : "instaplants@hacktiv8.com", 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Inputs aren invalid" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

	`<calling endpoint in runnable format>`

- ### Notes:

# Login User

Returns an access_token

- ### URL:

	`/users/login

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	`username = [string]`

	`email = [string]`

	`password = [string]`

- ### Success Response:

	Code: 201 CREATED

	Content :

	```json
	json
	{ 
	    access_token:
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Invalid Username / Password" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

	`<calling endpoint in runnable format>`

- ### Notes:



# Show Home

Render a homepage

- ### URL:

	`/`

- ### Method:

	`GET`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content:

	

	Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

- ### Notes:

# Show All Plants

Returns json data of all plants

- ### URL:

	`/plants`

- ### Method:

	`GET`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content:

	```json
	json
	[ 
	    { id : 1, 
	 
	    }, 
	    { id : 2, 
	
	]
	```

- ### Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

- ### Notes:

# Show A Plant By Id

Retuns a json data of a specific plant

- ### URL:

	`/plants/:id`

- ### Method:

	`GET`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content:

	```json
	json
	{ id : 2, 
	
	}
	```

- ### Error Response:

	Code: 404 NOT FOUND

	Content: `{ error: "Plants doesn't exist" }`

- ### Sample Call:

- ### Notes:

- # Show All Plants by Genus

	Retuns a json data of all plants based on the genus

	- ### URL:

		`/plants/:genus

	- ### Method:

		`GET`

	- ### URL Params:

		Required:

		genus = [string]`

	- ### Data Params:

		None

	- ### Success Response:

		Code: 200

		Content:

		```json
		json
		{ id : 2, 
		
		}
		```

	- ### Error Response:

		Code: 404 NOT FOUND

		Content: `{ error: "Plants doesn't exist" }`

	- ### Sample Call:

	- ### Notes:
