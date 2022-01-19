/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserAccount
// ====================================================

export interface getUserAccount_getUserAccount {
  __typename: "User";
  id: string | null;
  firstname: string | null;
  lastname: string | null;
}

export interface getUserAccount {
  getUserAccount: getUserAccount_getUserAccount | null;
}

export interface getUserAccountVariables {
  userName: string;
  password: string;
}
