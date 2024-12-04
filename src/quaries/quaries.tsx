import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    allProduct(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      description
      imageUrl
      slug {
        current
      }
      price
      discountedPrice
      isNew
      reviews
      category
    }
  }
`;

// GraphQL query for pagination
export const PRODUCT_QUERY = gql`
  query Products($limit: Int, $offset: Int) {
    allProduct(limit: $limit, offset: $offset) {
      _id
      title
      imageUrl
      slug {
        current
      }
      price
      discountedPrice
      isNew
      category
      reviews
    }
  }
`;

export const NEW_PRODUCT_QUERY = gql`
  query {
    allProduct {
      _id
      imageUrl
      title
      slug {
        current
      }
      price
      discountedPrice
      isNew
      reviews
      category
    }
  }
`;
