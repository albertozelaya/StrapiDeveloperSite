"use strict";

/**
 * page controller
 */

const MediaFilter = {
  fields: ["url"],
};

module.exports = {
  getPageBySlug: async (ctx) => {
    const { slug } = ctx.params;

    console.log("page.js -> #11 -> slug ~", JSON.stringify(slug, null, 2));

    const resp = await strapi.entityService.findMany("api::page.page", {
      filters: {
        slug,
      },
      populate: {
        components: {
          on: {
            "apis.api-card": {
              populate: {
                logo: MediaFilter,
              },
            },

            "components.hero": {
              populate: {
                bgImage: MediaFilter,
                heroImg: MediaFilter,
              },
            },
          },
        },
      },
    });

    if (resp.length === 0) {
      return ctx.notFound();
    }

    return {
      data: resp[0],
    };
  },
};
