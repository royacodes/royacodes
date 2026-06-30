# HTTP QUERY Is Now an Official HTTP Method: Why It Matters for API Design

*Published after the standardization of RFC 10008 (June 2026).*

## Introduction

The HTTP ecosystem has evolved once again with the official standardization of the **HTTP QUERY** method in **RFC 10008**, published by the IETF in June 2026.

Although QUERY may seem like a small addition to the HTTP method family, it addresses a long-standing gap in API design: performing **safe, read-only queries that require a request body**.

Rather than changing how APIs work, QUERY makes their intent more explicit, leading to cleaner semantics and a better developer experience.

---

## The Problem with GET and POST

For years, developers have relied on two methods for retrieving data:

- **GET** for simple resource retrieval.
- **POST** for complex search or filtering operations.

While GET is the correct semantic choice for reading data, it comes with practical limitations:

- URL length restrictions
- Difficulty representing deeply nested filters
- Query parameters exposed in URLs
- Poor support for complex JSON payloads

As a result, many APIs adopted patterns such as:

```http
POST /users/search
```

Even though these endpoints only retrieve data, they use POST simply because it allows a request body.

This works in practice, but it blurs the intended semantics of HTTP.

---

## Enter HTTP QUERY

The new **QUERY** method fills this gap.

Like GET, QUERY is designed for **safe** operations—it does not modify server state.

Unlike GET, it allows clients to include a request body containing complex query criteria.

Example:

```http
QUERY /users
Content-Type: application/json

{
  "department": "Engineering",
  "experience": {
    "min": 5
  },
  "skills": ["Go", "Rust"]
}
```

The request clearly communicates that the client is asking the server to execute a query rather than create or update resources.

---

## Benefits

### Better HTTP Semantics

The HTTP method now accurately reflects the operation.

- GET → Retrieve a resource
- QUERY → Execute a read-only query
- POST → Create or process data

### Cleaner API Design

Search endpoints no longer need to overload POST.

The API becomes easier to understand for both developers and API consumers.

### Improved Documentation

The intent of each endpoint becomes immediately obvious, reducing ambiguity.

### Better Long-Term Evolution

A dedicated method enables frameworks, API gateways, caches, and developer tools to gradually add QUERY-specific support instead of treating every complex search as a POST request.

---

## Current Adoption

Although QUERY is now an official HTTP standard, ecosystem support is still in its early stages.

Before using QUERY in production, verify that your:

- HTTP clients
- Web frameworks
- API gateways
- Reverse proxies
- Load balancers
- Security tools

properly recognize and forward QUERY requests.

For the foreseeable future, many production APIs will continue using POST for complex search operations while support for QUERY matures.

---

## Conclusion

The standardization of HTTP QUERY is not a revolutionary change—it is a refinement of HTTP itself.

By providing a dedicated method for safe, body-based query operations, HTTP becomes more expressive and API designs become easier to understand, document, and maintain.

Sometimes, the biggest improvements come from making things more explicit.

---

## References

- RFC 10008 – HTTP QUERY Method
- IETF HTTP Working Group
