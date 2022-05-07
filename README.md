# Sibarita API Docs

## /companies

### GET all companies.
input:
> apihost.foo/companies

output[ARRAY]:

```json
{
  "name": "string",
  "nickname": "string",
  "description": "string",
  "image": "string",
  "contact": {
    "phone": "number",
    "email": "string"
  },
  "address": {
    "street": "string",
    "number": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "cp": "string"
  },
  "schedule": {
    "monday": {
      "_0000": "boolean",
      "-----": "-------",
      "_2330": "boolean"
    },
    "tuesday": {
      "_0000": "boolean",
      "-----": "-------",
      "_2330": "boolean"
    }
  }
}
```

### GET find by company name.
input:
> apihost.foo/companies/example

output:

```json
{
  "name": "string",
  "nickname": "string",
  "description": "string",
  "image": "string",
  "contact": {
    "phone": "number",
    "email": "string"
  },
  "address": {
    "street": "string",
    "number": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "cp": "string"
  },
  "schedule": {
    "monday": {
      "_0000": "boolean",
      "-----": "-------",
      "_2330": "boolean"
    },
    "tuesday": {
      "_0000": "boolean",
      "-----": "-------",
      "_2330": "boolean"
    }
  }
}
```

## /bookings

### GET booking by bookingToken
input:
> apihost.foo/bookings/example-foo-bar

output:

```json
{
  "client": "string",
  "owner": "string",
  "bookingToken": "string",
  "bookingDate": {
    "day": "ddmmyyyy",
    "hour": "hhmm"
  },
  "numPerson": "[String]"
}
```

### POST booking by bookingToken
input:
> apihost.foo/bookings/example-foo-bar

```json
{
  "client": "string",
  "owner": "string",
  "bookingDate": {
    "day": "ddmmyyyy",
    "hour": "hhmm"
  },
  "numPerson": "[String]"
}
```

output:

```json
{
  "client": "string",
  "owner": "string",
  "bookingToken": "string",
  "bookingDate": {
    "day": "ddmmyyyy",
    "hour": "hhmm"
  },
  "numPerson": "[String]"
}
```
