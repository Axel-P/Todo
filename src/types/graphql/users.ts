/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: users
// ====================================================

export interface users_users {
  __typename: "User";
  id: string | null;
  firstname: string | null;
  lastname: string | null;
}

export interface users {
  users: (users_users | null)[] | null;
}
