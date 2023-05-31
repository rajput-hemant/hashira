export const anilistAdvancedQuery = () =>
  `query (
  $page: Int
  $id: Int
  $type: MediaType
  $isAdult: Boolean = false
  $search: String
  $format: [MediaFormat]
  $status: MediaStatus
  $size: Int
  $countryOfOrigin: CountryCode
  $source: MediaSource
  $season: MediaSeason
  $seasonYear: Int
  $year: String
  $onList: Boolean
  $yearLesser: FuzzyDateInt
  $yearGreater: FuzzyDateInt
  $episodeLesser: Int
  $episodeGreater: Int
  $durationLesser: Int
  $durationGreater: Int
  $chapterLesser: Int
  $chapterGreater: Int
  $volumeLesser: Int
  $volumeGreater: Int
  $licensedBy: [String]
  $isLicensed: Boolean
  $genres: [String]
  $excludedGenres: [String]
  $tags: [String]
  $excludedTags: [String]
  $minimumTagRank: Int
  $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
) {
  Page(page: $page, perPage: $size) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(
      id: $id
      type: $type
      season: $season
      format_in: $format
      status: $status
      countryOfOrigin: $countryOfOrigin
      source: $source
      search: $search
      onList: $onList
      seasonYear: $seasonYear
      startDate_like: $year
      startDate_lesser: $yearLesser
      startDate_greater: $yearGreater
      episodes_lesser: $episodeLesser
      episodes_greater: $episodeGreater
      duration_lesser: $durationLesser
      duration_greater: $durationGreater
      chapters_lesser: $chapterLesser
      chapters_greater: $chapterGreater
      volumes_lesser: $volumeLesser
      volumes_greater: $volumeGreater
      licensedBy_in: $licensedBy
      isLicensed: $isLicensed
      genre_in: $genres
      genre_not_in: $excludedGenres
      tag_in: $tags
      tag_not_in: $excludedTags
      minimumTagRank: $minimumTagRank
      sort: $sort
      isAdult: $isAdult
    ) {
      id
      idMal
      status(version: 2)
      title {
        userPreferred
        romaji
        english
        native
      }
      bannerImage
      coverImage {
        extraLarge
        large
        medium
        color
      }
      episodes
      season
      popularity
      description
      format
      seasonYear
      genres
      averageScore
      countryOfOrigin
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}
`;

export const anilistSearchQuery = (
  query: string,
  page: number,
  perPage: number,
  type: "ANIME" | "MANGA" = "ANIME"
) =>
  `query (
  $page: Int = ${page}
  $id: Int
  $type: MediaType = ${type}
  $search: String = "${query}"
  $isAdult: Boolean = false
  $size: Int = ${perPage}
) {
  Page(page: $page, perPage: $size) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(id: $id, type: $type, search: $search, isAdult: $isAdult) {
      id
      idMal
      status(version: 2)
      title {
        userPreferred
        romaji
        english
        native
      }
      bannerImage
      popularity
      coverImage {
        extraLarge
        large
        medium
        color
      }
      episodes
      format
      season
      description
      seasonYear
      chapters
      volumes
      averageScore
      genres
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}
`;

export const anilistMediaDetailQuery = (id: string) =>
  `query ($id: Int = ${id}) {
  Media(id: $id) {
    id
    idMal
    title {
      english
      native
      romaji
    }
    synonyms
    countryOfOrigin
    isLicensed
    isAdult
    externalLinks {
      url
      site
      type
      language
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    trailer {
      id
      site
      thumbnail
    }
    genres
    source
    averageScore
    popularity
    meanScore
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    characters(sort: ROLE) {
      edges {
        role
        node {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
        }
        voiceActors(sort: LANGUAGE) {
          id
          languageV2
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
    }
    recommendations {
      edges {
        node {
          id
          mediaRecommendation {
            id
            idMal
            title {
              romaji
              english
              native
              userPreferred
            }
            status
            episodes
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            format
            chapters
            meanScore
            nextAiringEpisode {
              episode
              timeUntilAiring
              airingAt
            }
          }
        }
      }
    }
    relations {
      edges {
        id
        relationType
        node {
          id
          idMal
          status
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          title {
            romaji
            english
            native
            userPreferred
          }
          episodes
          chapters
          format
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
          }
          meanScore
        }
      }
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }
}
`;

export const anilistTrendingQuery = (
  page: number = 1,
  perPage: number = 20,
  type: "ANIME" | "MANGA" = "ANIME"
) =>
  `query (
  $page: Int = ${page}
  $id: Int
  $type: MediaType = ${type}
  $isAdult: Boolean = false
  $size: Int = ${perPage}
  $sort: [MediaSort] = [TRENDING_DESC, POPULARITY_DESC]
) {
  Page(page: $page, perPage: $size) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(id: $id, type: $type, isAdult: $isAdult, sort: $sort) {
      id
      idMal
      status(version: 2)
      title {
        userPreferred
        romaji
        english
        native
      }
      genres
      trailer {
        id
        site
        thumbnail
      }
      description
      format
      bannerImage
      coverImage {
        extraLarge
        large
        medium
        color
      }
      episodes
      meanScore
      duration
      season
      seasonYear
      averageScore
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}
`;

export const anilistPopularQuery = (
  page: number = 1,
  perPage: number = 20,
  type: "ANIME" | "MANGA" = "ANIME"
) =>
  `query (
  $page: Int = ${page}
  $id: Int
  $type: MediaType = ${type}
  $isAdult: Boolean = false
  $size: Int = ${perPage}
  $sort: [MediaSort] = [POPULARITY_DESC]
) {
  Page(page: $page, perPage: $size) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(id: $id, type: $type, isAdult: $isAdult, sort: $sort) {
      id
      idMal
      status(version: 2)
      title {
        userPreferred
        romaji
        english
        native
      }
      trailer {
        id
        site
        thumbnail
      }
      format
      genres
      bannerImage
      description
      coverImage {
        extraLarge
        large
        medium
        color
      }
      episodes
      meanScore
      duration
      season
      seasonYear
      averageScore
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}`;
