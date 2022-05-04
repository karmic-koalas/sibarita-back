# Sibarita API Docs

## /api/companies

### GET all companies.
input:
> apihost.foo/api/companies

output[ARRAY]:

```json
{
    "name ": "string" 
    "nickname ": "string" 
    "description ": "string"
    "contact ": {
	"phone ": "number"
   	"email ": "string"
    }
}
```

### GET find by company name.
input:
> apihost.foo/api/companies/example

output:

```json
{
    "name ": "string" 
    "nickname ": "string" 
    "description ": "string"
    "contact ": {
	"phone ": "number"
   	"email ": "string"
    }
}
```

## /api/bookings

### GET all bookings
input:
> apihost.foo/api/bookings

output[ARRAY]:

```json
{
"client": "string",
"owner": "string",
"bookingToken": "string",
"bookingDate": "string",
"tablesInBooking": "String[]"
}
```

### GET booking by bookingToken
input:
> apihost.foo/api/bookings/example-foo-bar

output:

```json
{
    "client": "string",
    "owner": "string",
    "bookingToken": "string",
    "bookingDate": "string",
    "tablesInBooking": "String[]"
}
```
