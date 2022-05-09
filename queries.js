import highlightjs from "highlight.js";
import { Renderer } from "marked";

export async function fetcher(url, query, variables) {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        ...variables,
      },
    }),
  });
}

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeForHTML(input) {
  return input.replace(/([&<>'"])/g, (char) => escapeMap[char]);
}

// Create your custom renderer.
export const renderer = new Renderer();
renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language));
  const highlighted = validLang
    ? highlightjs.highlight(language, code).value
    : escapeForHTML(code);
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

export const endpoint = `https://api-us-east-1.graphcms.com/v2/ckuy9rd5d075f01wcc3f60yst/master`;

export const GET_ALL_POSTS = `
query GetPosts {
    posts(orderBy: createdAt_DESC) {
        id
        slug
        title
}
}
`;

export const GET_POST = `
      query GetPost($slug: String!) {
        post(where: {slug: $slug}) {
          id
          slug
          title
          body
        }
      }
`;
