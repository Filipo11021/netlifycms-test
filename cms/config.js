const config = {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "Filipo11021/netlifycms-test",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};

export default config;
