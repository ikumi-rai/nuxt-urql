/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type CacheControlScope =
  | 'PRIVATE'
  | 'PUBLIC';

/** A `Lift` is a chairlift, gondola, tram, funicular, pulley, rope tow, or other means of ascending a mountain. */
export type Lift = {
  __typename?: 'Lift';
  /** The number of people that a `Lift` can hold */
  capacity: Scalars['Int']['output'];
  /** The number of feet in elevation that a `Lift` ascends */
  elevationGain: Scalars['Int']['output'];
  /** The unique identifier for a `Lift` (id: "panorama") */
  id: Scalars['ID']['output'];
  /** The name of a `Lift` */
  name: Scalars['String']['output'];
  /** A boolean describing whether a `Lift` is open for night skiing */
  night: Scalars['Boolean']['output'];
  /** The current status for a `Lift`: `OPEN`, `CLOSED`, `HOLD` */
  status?: Maybe<LiftStatus>;
  /** A list of trails that this `Lift` serves */
  trailAccess: Array<Trail>;
};

/** An enum describing the options for `LiftStatus`: `OPEN`, `CLOSED`, `HOLD` */
export type LiftStatus =
  | 'CLOSED'
  | 'HOLD'
  | 'OPEN';

export type Mutation = {
  __typename?: 'Mutation';
  /** Sets a `Lift` status by sending `id` and `status` */
  setLiftStatus: Lift;
  /** Sets a `Trail` status by sending `id` and `status` */
  setTrailStatus: Trail;
};


export type MutationSetLiftStatusArgs = {
  id: Scalars['ID']['input'];
  status: LiftStatus;
};


export type MutationSetTrailStatusArgs = {
  id: Scalars['ID']['input'];
  status: TrailStatus;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a `Lift` by `id` (id: "panorama") */
  Lift: Lift;
  /** Returns a `Trail` by `id` (id: "old-witch") */
  Trail: Trail;
  /** A list of all `Lift` objects */
  allLifts: Array<Lift>;
  /** A list of all `Trail` objects */
  allTrails: Array<Trail>;
  /** Returns an `Int` of `Lift` objects with optional `LiftStatus` filter */
  liftCount: Scalars['Int']['output'];
  /** Returns a list of `SearchResult` objects based on `term` or `status` */
  search: Array<SearchResult>;
  /** Returns an `Int` of `Trail` objects with optional `TrailStatus` filter */
  trailCount: Scalars['Int']['output'];
};


export type QueryLiftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrailArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAllLiftsArgs = {
  status?: InputMaybe<LiftStatus>;
};


export type QueryAllTrailsArgs = {
  status?: InputMaybe<TrailStatus>;
};


export type QueryLiftCountArgs = {
  status?: InputMaybe<LiftStatus>;
};


export type QuerySearchArgs = {
  status?: InputMaybe<LiftStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrailCountArgs = {
  status?: InputMaybe<TrailStatus>;
};

/** This union type returns one of two types: a `Lift` or a `Trail`. When we search for a letter, we'll return a list of either `Lift` or `Trail` objects. */
export type SearchResult = Lift | Trail;

export type Subscription = {
  __typename?: 'Subscription';
  /** Listens for changes in lift status */
  liftStatusChange?: Maybe<Lift>;
  /** Listens for changes in trail status */
  trailStatusChange?: Maybe<Trail>;
};

/** A `Trail` is a run at a ski resort */
export type Trail = {
  __typename?: 'Trail';
  /** A list of Lifts that provide access to this `Trail` */
  accessedByLifts: Array<Lift>;
  /** The difficulty rating for a `Trail` */
  difficulty: Scalars['String']['output'];
  /** A boolean describing whether or not a `Trail` is groomed */
  groomed: Scalars['Boolean']['output'];
  /** A unique identifier for a `Trail` (id: 'hemmed-slacks') */
  id: Scalars['ID']['output'];
  /** The name of a `Trail` */
  name: Scalars['String']['output'];
  /** A boolean describing whether or not a `Trail` is open for night skiing */
  night: Scalars['Boolean']['output'];
  /** The current status for a `Trail`: OPEN, CLOSED */
  status?: Maybe<TrailStatus>;
  /** A boolean describing whether or not a `Trail` has trees */
  trees: Scalars['Boolean']['output'];
};

/** An enum describing the options for `TrailStatus`: `OPEN`, `CLOSED` */
export type TrailStatus =
  | 'CLOSED'
  | 'OPEN';

export type AllLiftsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLiftsQuery = { __typename?: 'Query', allLifts: Array<(
    { __typename?: 'Lift' }
    & { ' $fragmentRefs'?: { 'LiftList_LiftFragment': LiftList_LiftFragment } }
  )> };

export type LiftList_LiftFragment = { __typename?: 'Lift', id: string, name: string, capacity: number, status?: LiftStatus | null } & { ' $fragmentName'?: 'LiftList_LiftFragment' };

export type SearchLiftQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SearchLiftQuery = { __typename?: 'Query', search: Array<(
    { __typename?: 'Lift' }
    & { ' $fragmentRefs'?: { 'LiftList_LiftFragment': LiftList_LiftFragment } }
  ) | { __typename?: 'Trail' }> };

export type SetLiftStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: LiftStatus;
}>;


export type SetLiftStatusMutation = { __typename?: 'Mutation', setLiftStatus: { __typename?: 'Lift', id: string, status?: LiftStatus | null } };

export const LiftList_LiftFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LiftList_lift"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<LiftList_LiftFragment, unknown>;
export const AllLiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allLifts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allLifts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LiftList_lift"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LiftList_lift"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<AllLiftsQuery, AllLiftsQueryVariables>;
export const SearchLiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchLift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LiftList_lift"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LiftList_lift"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<SearchLiftQuery, SearchLiftQueryVariables>;
export const SetLiftStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setLiftStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LiftStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setLiftStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SetLiftStatusMutation, SetLiftStatusMutationVariables>;

export const CacheControlScope = ["PRIVATE","PUBLIC"] as const
export const LiftStatus = ["CLOSED","HOLD","OPEN"] as const
export const TrailStatus = ["CLOSED","OPEN"] as const
