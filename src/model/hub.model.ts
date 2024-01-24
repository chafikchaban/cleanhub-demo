export type HubsResponse = Array<HubPayload>; 

export interface HubPayload {
  uuid: string;
  state: HubState;
  category: string;
  stage: HubStage;
  name: string;
  displayName: string;
  slug: string;
  type: string;
  location: string;
  externalId: string;
  recoveredQuantity: number;
  recoveredQuantityUnit: string;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: string;
  pageMode: HubPageMode;
  hubUnassignedRecoveryList: Array<HubUnassignedRecoveryPayload>;
  referenceQuantityUnit: string;
  parentHubName: string;
  logo: HubLogoPayload;
  cardDescription: string;
  cardImage: HubImagePayload;
  thankYouNote: string;
  portfolioAssignedQuantityPercentage: number;
  unassignedQuantityPercentage: number;
  unassignedQuantityTotal: number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
}

export type HubState =
  | "DEMO"
  | "ACTIVE";

export type HubStage =
  | "PILOT"
  | "FULLY_ONBOARDED";

export type HubPageMode =
  | "RELEASED";

export interface HubUnassignedRecoveryPayload {
  uuid: string;
  createdAt: string;
  state: string;
  unassignedQuantity: number;
  assignedQuantity: number;
  quantityUnit: string;
}

export interface HubLogoPayload {
  directLink: string;
  thumbnailDirectLink: string;
}

export interface HubImagePayload {
  directLink: string;
  thumbnailDirectLink: string;
}