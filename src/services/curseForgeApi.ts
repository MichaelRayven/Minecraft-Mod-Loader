import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SearchArgs, Versions, VersionType } from '../types/CurseForgeTypes'

export const curseForgeApi = createApi({
    reducerPath: 'versionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.curseforge.com/v1/",
        prepareHeaders: (headers, { getState }) => {
            headers.set('Accept', 'application/json')
            headers.set('x-api-key', '') 
            return headers
        }
    }),
    endpoints: (builder) => ({
        getVersions: builder.query<Versions, void>({
          query: () => `games/432/versions`
        }),
        getVersionTypes: builder.query<VersionType, void>({
          query: () => `games/432/version-types`
        }),
        searchMods: builder.query<any, SearchArgs>({
          query: ({
            gameVersion,
            searchFilter,
            modLoaderType
          }) => `mods/search?gameId=432&gameVersion=${gameVersion}&searchFilter=${searchFilter}&modLoaderType=${modLoaderType}&pageSize=${25}`,
        }),
    }),
})

export const { useGetVersionTypesQuery, useGetVersionsQuery } = curseForgeApi