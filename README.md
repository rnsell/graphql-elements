# graphql-elements

Graphql api of the atomic elements for fun use

## Quick Start

- Run `npm i` to install dependencies
- Run `npm start` to start the server
- Visit http://localhost:10000/graphql to use the graphql interface

## Example Query

```
query {
  elements {
    ... on Element {
      atomicNumber
      name
    }
    ... on NobleGas {
      otherNobleGasses {
        atomicNumber
        name
      }
    }
  }
}
```
