import { collection, config, fields } from "@keystatic/core";

export default config({
  ui: {
    brand: {
      name: "Notatki z programowania",
      /*
       * hack for displaying svg in keystatic panel (you can create your own component with brand
       * logo and render it instead)
       */
      mark: () => (
        <>
          <style>{`
            .kui\\:reset img[src^="blob:"] {
              width: 100% !important;
            }
          `}</style>
          <a
            href="/"
            style={{
              fontSize: 14,
              padding: "4px 10px",
              borderRadius: 6,
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "sans-serif"
            }}
          >
            Blog
          </a>
        </>
      ),
    },
  },

  storage:
    process.env.NODE_ENV === "production"
      ? { kind: "github", repo: "karolskolasinski/notatkizprogramowania" }
      : { kind: "local" },

  collections: {
    posts: collection({
      label: "Posty na blogu",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Tytuł",
            validation: {
              isRequired: true,
            },
          },
        }),

        description: fields.text({
          label: "Opis",
          multiline: true,
          validation: {
            isRequired: true,
          },
        }),

        pubDate: fields.date({
          label: "Data publikacji",
          validation: {
            isRequired: true,
          },
        }),

        updatedDate: fields.date({
          label: "Data aktualizacji",
          description: "Pozostaw puste, jeśli wpis nie był aktualizowany.",
        }),

        categories: fields.array(
          fields.relationship({
            label: "Kategoria",
            collection: "categories",
            validation: {
              isRequired: true,
            },
          }),
          {
            label: "Kategorie",
            validation: {
              length: {
                min: 1,
              },
            },
            itemLabel: (props) => props.value ?? "Wybierz kategorię",
          },
        ),

        content: fields.mdx({
          label: "Treść",
          extension: "md",
          options: {
            image: {
              directory: "src/assets/posts",
              publicPath: "@assets/posts/",
            },
          },
        }),
      },
    }),

    categories: collection({
      label: "Categories",
      slugField: "name",
      path: "src/content/categories/*",
      format: { data: "json" },

      schema: {
        name: fields.slug({
          name: {
            label: "Nazwa",
            validation: {
              isRequired: true,
            },
          },
        }),

        order: fields.number({
          label: "Kolejność",
          validation: {
            isRequired: true,
            min: 0,
          },
        }),

        description: fields.text({
          label: "Opis",
          multiline: true,
          validation: {
            isRequired: true,
          },
        }),

        color: fields.text({
          label: "Kolor (HEX)",
          validation: {
            isRequired: true,
            pattern: {
              regex: /^#[0-9A-Fa-f]{6}$/,
              message: "Niepoprawny format koloru HEX",
            },
          },
        }),

        icon: fields.image({
          label: "Ikona",
          directory: "src/assets/categories",
          publicPath: "@assets/categories/",
          validation: {
            isRequired: true,
          },
        }),
      },
    }),
  },
});
