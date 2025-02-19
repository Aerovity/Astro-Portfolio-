---
title: "Getting Started"
description: "Embarking on my blogging journey."
date: "19 February 2025"
---

Today marks the beginning of my blogging journey, and I'm excited to share my first steps with you. For my portfolio and blog, I am using the [Astro Nano](https://astro.build/themes/details/astronano/) and (faisalmujawar148 on github)theme, which provides a minimalistic and efficient framework to showcase my work and write posts.

The basic configuration of my new blog is quite straightforward.

### Customizing the Base Site

First, I edited the `src/consts.ts` file to set up the basic information:

```ts
// src/consts.ts

export const SITE: Site = {
  NAME: "My Awesome Blog",
  EMAIL: "myemail@example.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

Here’s a breakdown of what each field means:

| Field | Required | Description |
| :---- | :------- | :---------- |
| NAME | Yes | Displayed in the header and footer. Used in SEO and RSS. |
| EMAIL | Yes | Displayed in the contact section. |
| NUM_POSTS_ON_HOMEPAGE | Yes | Limits the number of posts on the home page. |
| NUM_WORKS_ON_HOMEPAGE | Yes | Limits the number of works on the home page. |
| NUM_PROJECTS_ON_HOMEPAGE | Yes | Limits the number of projects on the home page. |

### Setting Up Page Metadata

Next, I customized the metadata for my homepage:

```ts
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my awesome blog, where I share my thoughts and projects.",
};
```

This metadata helps with SEO and ensures that my page has a meaningful title and description.

| Field | Required | Description |
| :---- | :------- | :---------- |
| TITLE | Yes | Displayed in the browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS. |

### Adding Social Media Links

I also added my social media profiles to the contact section:

```ts
// src/consts.ts

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://twitter.com/myprofile",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/myprofile"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/myprofile",
  }
];
```

Each social media link includes:

| Field | Required | Description |
| :---- | :------- | :---------- |
| NAME | Yes | Displayed in the contact section as a link. |
| HREF | Yes | External URL to the social media profile. |

### Blog Collection

The `blog` collection is located in `src/content/blog`.

Working with the `blog` collection:

```
📁 /src/content/blog
└── 📁 post-1
      └── 📄 index.md
└── 📁 post-2
      └── 📄 index.mdx
```

In the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a JSX compatible markdown `.mdx` file. The folder name represents the slug:

- `https://example.com/blog/post-1`
- `https://example.com/blog/post-2`

All content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. ---

```mdx
---
title: "My cool new title"
description: "A description of my content."
date: "Mar 22 2024"
draft: false
---
```

Metadata fields:

| Field       | Required | Type    | Remarks                                          |
| :---------- | :------- | :------ | :----------------------------------------------- |
| title       | Yes      | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes      | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes      | string  | Must be a valid date string (able to be parsed). |
| draft       | No*      | boolean | If `draft: true`, content will not be published. |

All that's left to do is write your content under the metadata.

```mdx
---
title: "My cool new title"
description: "A description of my content."
date: "Mar 22 2024"
draft: false
---

### Woot

This is a paragraph.
```

🎉 Congrats, you are now a blogger.

---

This setup forms the foundation of my blog. Stay tuned for more updates as I continue to build and share my experiences here. Happy blogging!
