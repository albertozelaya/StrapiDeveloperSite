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
    btnColor: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    api: Attribute.Relation<'apis.api-card', 'oneToOne', 'api::api.api'>;
    categories: Attribute.Relation<
      'apis.api-card',
      'oneToMany',
      'api::cat.cat'
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'apis.api-card': ApisApiCard;
      'categories.category': CategoriesCategory;
      'components.hero': ComponentsHero;
    }
  }
}
