# User
Posts new user to 'bricks_and_builds_users' database. 
Logs in existing user and returns JWT token and user_id.

## URL

Route to post new user/ login:
https://morning-inlet-85919.herokuapp.com/api/users [+ /login]

## Method:

POST

## URL Params

## Required:

None

## Data Params

None

## Success Response:

Code: 201 Created

## Error Response:

Code: 400 Bad Request

## Sample Call:

  ```
  fetch('https://morning-inlet-85919.herokuapp.com/api/users' [+ '/login'], {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ user_name, password }),
  });
  ```

# Favorites
Return all favorites belonging to a user.
Adds favorite to database.
Deletes favorite from database.

## URL

Route to get favorites, by user_id (GET):
https://morning-inlet-85919.herokuapp.com/api/rooms/:user_id

Route to add favorite (POST):
https://morning-inlet-85919.herokuapp.com/api/favorites

Route to delete room, by favorites_id (DELETE):
https://morning-inlet-85919.herokuapp.com/api/favorites/delete/:favorites_id

## Method:

GET / POST / DELETE

## URL Params

## Required:

None

## Data Params

None

## Success Response:

New Favorite:
Code: 201 Created

Delete Favorite:
Code: 204 No Content

## Error Response:

Code: 400 Bad Request

# Inventory
Return inventory data by user_id.
Add inventory data from database.
Deletes inventory data from database.

## URL

Route to get inventory data, by user_id (GET):
https://morning-inlet-85919.herokuapp.com/api/inventory/:user_id

Route to add inventory data (POST):
https://morning-inlet-85919.herokuapp.com/api/inventory

Route to delete inventory data, by inventory_id (DELETE):
https://morning-inlet-85919.herokuapp.com/api/inventory/delete/:inventory_id

## Method:

GET / POST / DELETE

## URL Params

## Required:

None

## Data Params

None

## Success Response:

New Inventory Data:
Code: 201 Created

Delete Inventory Data:
Code: 204 No Content

## Error Response:

Code: 400 Bad Request

# Rebrickable
Return set info data by set_id.
Return alternate build set info data by set_id.

## URL

Route to get inventory data, by user_id (GET):
https://morning-inlet-85919.herokuapp.com/api/rebrickable/:searchTerm

Route to add inventory data (POST):
https://morning-inlet-85919.herokuapp.com/api/rebrickable/alternates/:searchTerm

## Method:

GET 

## URL Params

## Required:

None

## Data Params

None

## Success Response:

## Error Response:

Code: 400 Bad Request