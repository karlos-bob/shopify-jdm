const STOREFRONT_API_VERSION = '2026-01';

const COLLECTION_PRODUCTS_QUERY = `
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
`;

export async function fetchCollectionProducts({
  storeDomain,
  storefrontToken,
  collectionHandle,
  first = 4,
}) {
  const endpoint = `https://${storeDomain}/api/${STOREFRONT_API_VERSION}/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontToken,
    },
    body: JSON.stringify({
      query: COLLECTION_PRODUCTS_QUERY,
      variables: {
        handle: collectionHandle,
        first,
      },
    }),
  });

  const payload = await response.json();

  if (!response.ok || payload.errors) {
    throw new Error(JSON.stringify(payload.errors || payload));
  }

  return payload.data.collection;
}

async function runExample() {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;
  const collectionHandle = process.env.SHOPIFY_COLLECTION_HANDLE || 'jdm-legends';

  if (!storeDomain || !storefrontToken) {
    throw new Error(
      'Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_TOKEN before running this example.'
    );
  }

  const collection = await fetchCollectionProducts({
    storeDomain,
    storefrontToken,
    collectionHandle,
    first: 4,
  });

  console.log(JSON.stringify(collection, null, 2));
}

if (typeof process !== 'undefined' && import.meta.url === `file://${process.argv[1]}`) {
  runExample().catch((error) => {
    console.error('Storefront GraphQL example failed:', error);
    process.exitCode = 1;
  });
}
