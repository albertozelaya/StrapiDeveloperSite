import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAcordeonRepeat extends Schema.Component {
  collectionName: 'components_about_us_acordeon_repeats';
  info: {
    displayName: 'acordeonRepeat';
  };
  attributes: {
    acordeon: Attribute.Component<'components.acordeon', true>;
  };
}

export interface AboutUsHeroPromotionForm extends Schema.Component {
  collectionName: 'components_about_us_hero_promotion_forms';
  info: {
    displayName: 'heroPromotionForm';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    bgColor: Attribute.String;
    bgImage: Attribute.Media;
    btnColor: Attribute.String & Attribute.Required;
  };
}

export interface ApisApiCard extends Schema.Component {
  collectionName: 'components_apis_api_cards';
  info: {
    displayName: 'ApiCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    descCard: Attribute.Text & Attribute.Required;
    bgColor: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    api: Attribute.Relation<'apis.api-card', 'oneToOne', 'api::api.api'>;
    categories: Attribute.Relation<
      'apis.api-card',
      'oneToMany',
      'api::cat.cat'
    >;
  };
}

export interface ApisCardCollection extends Schema.Component {
  collectionName: 'components_apis_card_collections';
  info: {
    displayName: 'cardCollection';
    icon: 'arrowUp';
  };
  attributes: {
    cards: Attribute.Relation<
      'apis.card-collection',
      'oneToMany',
      'api::card.card'
    >;
  };
}

export interface ApisCardRepeatable extends Schema.Component {
  collectionName: 'components_apis_card_repeatables';
  info: {
    displayName: 'cardRepeatable';
    icon: 'chartBubble';
  };
  attributes: {
    cards: Attribute.Component<'apis.api-card', true>;
  };
}

export interface CategoriesCategory extends Schema.Component {
  collectionName: 'components_categories_categories';
  info: {
    displayName: 'category';
    description: '';
  };
  attributes: {
    category: Attribute.Relation<
      'categories.category',
      'oneToOne',
      'api::cat.cat'
    >;
  };
}

export interface ComponentsAcordeon extends Schema.Component {
  collectionName: 'components_components_acordeons';
  info: {
    displayName: 'acordeon';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.RichText & Attribute.Required;
  };
}

export interface ComponentsCardGradient extends Schema.Component {
  collectionName: 'components_components_card_gradients';
  info: {
    displayName: 'cardGradient';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsHero extends Schema.Component {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
    icon: 'archive';
  };
  attributes: {
    bgImage: Attribute.Media;
    bgColor: Attribute.String;
    title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'title'>;
    content: Attribute.Text;
    heroImg: Attribute.Media;
  };
}

export interface ComponentsLandingCard extends Schema.Component {
  collectionName: 'components_components_landing_cards';
  info: {
    displayName: 'landingCard';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    iconComponent: Attribute.String;
  };
}

export interface LandingLandingRepeatable extends Schema.Component {
  collectionName: 'components_landing_landing_repeatables';
  info: {
    displayName: 'landingRepeatable';
    description: '';
  };
  attributes: {
    landingCard: Attribute.Component<'components.landing-card', true>;
  };
}

export interface SolutionsApiSolution extends Schema.Component {
  collectionName: 'components_solutions_api_solutions';
  info: {
    displayName: 'apiSolution';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    descCard: Attribute.Text & Attribute.Required;
    gradientColor: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    api: Attribute.Relation<
      'solutions.api-solution',
      'oneToOne',
      'api::api.api'
    >;
    cardImg: Attribute.Media & Attribute.Required;
    buttonColor: Attribute.String & Attribute.Required;
  };
}

export interface SolutionsSolutionCardRepeatable extends Schema.Component {
  collectionName: 'components_solutions_solution_card_repeatables';
  info: {
    displayName: 'solutionCardRepeatable';
    icon: 'chartBubble';
  };
  attributes: {
    cardSolution: Attribute.Component<'solutions.api-solution', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.acordeon-repeat': AboutUsAcordeonRepeat;
      'about-us.hero-promotion-form': AboutUsHeroPromotionForm;
      'apis.api-card': ApisApiCard;
      'apis.card-collection': ApisCardCollection;
      'apis.card-repeatable': ApisCardRepeatable;
      'categories.category': CategoriesCategory;
      'components.acordeon': ComponentsAcordeon;
      'components.card-gradient': ComponentsCardGradient;
      'components.hero': ComponentsHero;
      'components.landing-card': ComponentsLandingCard;
      'landing.landing-repeatable': LandingLandingRepeatable;
      'solutions.api-solution': SolutionsApiSolution;
      'solutions.solution-card-repeatable': SolutionsSolutionCardRepeatable;
    }
  }
}
