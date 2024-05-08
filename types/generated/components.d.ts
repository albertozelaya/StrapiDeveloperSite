import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'apis.api-card': ApisApiCard;
      'apis.card-collection': ApisCardCollection;
      'apis.card-repeatable': ApisCardRepeatable;
      'categories.category': CategoriesCategory;
      'components.hero': ComponentsHero;
      'solutions.api-solution': SolutionsApiSolution;
    }
  }
}
