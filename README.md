# Content Ops Starter

![Content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)

Content Ops starter made for customization with a flexible content model and component library.

**⚡ View Goudeau Property Solutions:** replace-with-your-live-site-url

## Table of Contents

- [Deploying](#deploying)
- [Develop locally or with a visual editor](#develop-locally-or-with-a-visual-editor)
- [Building for production](#building-for-production)
- [Setting Up Algolia Search](#setting-up-algolia-search)
- [Next Steps](#next-steps)
- [Support](#support)

## Deploying

This project can be deployed to any static hosting or platform that supports Next.js. Configure your hosting provider to build the project with:

```txt
npm run build
```

## Develop locally or with a visual editor

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory and start the dev server:

```txt
npm install
npm run dev
```

If you use a visual editing tool (for example Stackbit), follow that tool's setup instructions to enable editor features. Local development is supported without any specific vendor tooling.

## Building for production

To build a static site for production, run the following command

```shell
npm run build
```

## Setting Up Algolia Search

This starter includes Algolia search integration. To set it up:

1. Create an [Algolia](https://www.algolia.com/) account
2. Create a new application and index
3. Set the following environment variables:
   - `NEXT_PUBLIC_ALGOLIA_APP_ID` - Your Algolia application ID
   - `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` - Your Algolia search-only API key
   - `NEXT_PUBLIC_ALGOLIA_INDEX_NAME` - Your index name

## Next Steps

Here are a few suggestions on what to do next:

- Review the project files and customize `content/` to update pages and data.
- Run the development server and preview changes locally with `npm run dev`.

## Support

If you get stuck along the way, consult your chosen platform's support resources or open an issue in your project repository.
