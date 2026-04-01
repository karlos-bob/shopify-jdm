# JDM Legends

[Open JDM Legends](https://hk9smu-0h.myshopify.com/)

<img width="898" height="456" alt="image" src="https://github.com/user-attachments/assets/c04cc040-e123-49d8-8dc5-6dd13bad9c88" />

`JDM Legends` is a Shopify storefront concept built on top of a Dawn-style theme foundation and customized with Shopify Liquid, reusable sections, and polished storefront templates.

The goal of the project was to create a small but portfolio-ready automotive storefront that feels closer to a real specialty e-commerce brand than a default theme demo.

## Overview

This project focuses on a boutique JDM car storefront experience:

- custom homepage hero section
- featured collection section for curated inventory
- block-based FAQ accordion section built with Shopify theme blocks
- redesigned collection page
- redesigned product page
- redesigned cart page
- branded header and footer
- styled content pages for `About` and `FAQ`

## Tech Stack

- Shopify Liquid
- Shopify sections and schema settings
- Dawn-style Shopify theme architecture
- HTML and CSS
- Shopify CLI

## Key Features

### Homepage

- custom `JDM Hero` section with configurable text and image
- curated `Collection Spotlight` section linked to a Shopify collection
- custom `FAQ Accordion` section powered by Shopify Blocks
- premium storefront styling with stronger brand identity

## Project Structure

```bash
.
├── assets
├── config
├── layout
├── locales
├── sections
│   ├── jdm-hero.liquid
│   ├── collection-spotlight.liquid
│   ├── faq-accordion.liquid
│   ├── collection.liquid
│   ├── product.liquid
│   ├── cart.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   └── page.liquid
├── snippets
└── templates
```

## Running Locally

### Prerequisites

- Node.js
- Shopify CLI
- Shopify development store

### Start the theme locally

```bash
shopify auth login
shopify theme dev --store your-store.myshopify.com
```

This starts a local preview and syncs theme changes to the connected Shopify development theme.

## Shopify Admin Setup

To make the storefront look complete, create the following content in Shopify Admin:

- a collection with handle `jdm-legends`
- product listings with images, prices, and descriptions
- an `About` page
- an `FAQ` page
- optional navigation menus for header and footer

## Suggested Demo Content

Recommended storefront setup:

- Collection: `JDM Legends`
- Example products: Nissan Silvia S14 Kouki, Toyota AE86, Toyota Chaser JZX100
- Pages: `About`, `FAQ`

## License

This project inherits the repository license in [`LICENSE.md`](./LICENSE.md).
