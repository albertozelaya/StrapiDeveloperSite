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

    // console.log("page.js -> #11 -> slug ~", JSON.stringify(slug, null, 2));

    const resp = await strapi.entityService.findMany("api::page.page", {
      filters: {
        slug,
      },
      populate: {
        components: {
          on: {
            "apis.card-repeatable": {
              populate: {
                //pa llenar todo
                cards: {
                  populate: {
                    logo: MediaFilter,
                    api: {
                      populate: {
                        hero: {
                          populate: {
                            bgImage: MediaFilter,
                            heroImg: MediaFilter,
                          },
                        },
                        slideImg: MediaFilter,
                        cardGriadient: { populate: "*" },
                      },
                    },
                    categories: { populate: "*" },
                  },
                },
              },
            },
            "solutions.solution-card-repeatable": {
              populate: {
                cardSolution: {
                  populate: {
                    logo: MediaFilter,
                    cardImg: MediaFilter,
                    api: {
                      populate: {
                        hero: {
                          populate: {
                            bgImage: MediaFilter,
                            heroImg: MediaFilter,
                          },
                        },
                        slideImg: MediaFilter,
                        // cardGriadient: { populate: "*" },
                      },
                      "components.card-gradient": { populate: "*" },
                    },
                    categories: { populate: "*" },
                  },
                },
              },
            },
            "landing.landing-repeatable": {
              populate: {
                landingCard: {
                  populate: "*",
                },
              },
            },
            "about-us.acordeon-repeat": {
              populate: "*",
            },
            "about-us.hero-promotion-form": {
              populate: {
                bgImage: MediaFilter,
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
