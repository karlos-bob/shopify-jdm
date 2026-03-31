# Storefront GraphQL Sample

This repository is primarily a Shopify theme project built with Liquid, custom sections, and storefront template customization.

Because the main storefront implementation in this project focuses on Liquid-based theme development, this file provides a small standalone `Storefront API` example that demonstrates how collection data can be fetched with GraphQL.

## Files

- `storefront-graphql-example.js` - a minimal JavaScript example that calls the Shopify Storefront GraphQL API

## What the sample demonstrates

- a Storefront GraphQL query for a collection by handle
- fetching product titles, handles, images, and prices
- a small reusable function for requesting collection products
- API versioning and Storefront token usage

## Query shape

```graphql
query CollectionProducts($handle: String!, $first: Int!) {
  collection(handle: $handle) {
    title
    handle
    products(first: $first) {
      nodes {
        id
        title
        handle
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
```

## Environment variables

To run the JavaScript example, set:

```bash
export SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"
export SHOPIFY_STOREFRONT_TOKEN="your-public-storefront-token"
export SHOPIFY_COLLECTION_HANDLE="jdm-legends"
```

## Run the sample

```bash
node storefront-graphql-example.js
```

## Notes

- This example is intentionally small and isolated.
- The main project itself is a Liquid-based Shopify storefront, not a headless React storefront.
- If a Shopify plan or store configuration limits Storefront API token access, this sample still serves as a concise GraphQL code example for review purposes.
