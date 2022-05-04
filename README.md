# Sibarita API Docs

### GET method to all companies.
input:
> apihost.foo/api/companies

output:


```
{
    name : string 
    nickname : string 
    description : string
    contact : {
	phone : number
   	email : string
    }
}[]
```

### GET method to find one company.
input:
> apihost.foo/api/companies/example

output:

```
{
    name : string 
    nickname : string 
    description : string
    contact : {
	phone : number
   	email : string
    }
}
```
<!--type Tbooking = {

    token : string
    tables : Ttable
    date : string
    
}

type Ttable = {

    name: string;
    bussy : boolean
    size : number

}-->
