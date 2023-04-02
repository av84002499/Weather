export type Autocomplete = {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
};

export type CurrentCondition = {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: unknown;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: 'C' | 'F';
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: 'F' | 'C';
      UnitType: number;
    };
  };
  MobileLink: string;
  Link: string;
};

export type FiveDayForecast = {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate?: unknown;
    EndEpochDate?: unknown;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: DailyForecast[];
};

export type DailyForecast = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: 'C' | 'F';
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: 'C' | 'F';
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
};

export type GeoPosition = {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
  };
  TimeZone: {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: string;
  };
  GeoPosition: {
    Latitude: number;
    Longitude: number;
    Elevation: {
      Metric: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
  };
  IsAlias: boolean;
  SupplementalAdminAreas: unknown[];
  DataSets: string[];
};
