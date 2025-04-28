/*
 * bird.ts
 * Interface defining the structure of bird observation data from the eBird API
 * Such as common name, scientific name, location, observation date
 * Responsible: Yunzhe Bi
 */

export interface BirdObservationData {
    speciesCode: string;
    comName: string;
    sciName: string;
    obsDt: string;
    howMany: number;
    locName: string;
    locId: string;
    lat: number;
    lng: number;
    subId: string;
    obsValid: boolean;
    obsReviewed: boolean;
    locationPrivate: boolean;
}