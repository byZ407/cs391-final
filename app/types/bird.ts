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