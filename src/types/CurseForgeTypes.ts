type ModLoaderType = 0 | 1 | 2 | 3 | 4 | 5

export interface SearchArgs {
    gameVersion: string;
    searchFilter: string;
    modLoaderType: ModLoaderType;
}

export interface VersionType {
    data: [{
        id: number;
        name: string;
        slug: string;
    }]
}

export interface Versions {
    data: [{
        type: number;
        versions: string[];
    }]
}