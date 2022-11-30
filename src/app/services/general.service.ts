import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GeneralService {
  vuelo = {
    PricedItinerary: {
      '-SequenceNumber': '1',
      AirItinerary: {
        '-DirectionInd': 'OneWay',
        OriginDestinationOptions: {
          OriginDestinationOption: [
            {
              '-ElapsedTime': '650',
              FlightSegment: [
                {
                  '-DepartureDateTime': '2019-10-14 07:15:00',
                  '-ArrivalDateTime': '2019-10-14 12:20:00',
                  '-StopQuantity': '0',
                  '-FlightNumber': '718',
                  '-ResBookDesigCode': 'N',
                  '-ElapsedTime': '305',
                  DepartureAirport: {
                    '-LocationCode': 'BOG',
                    '-TerminalID': '1',
                  },
                  ArrivalAirport: {
                    '-LocationCode': 'MEX',
                    '-TerminalID': '2',
                  },
                  OperatingAirline: {
                    '-Code': 'AM',
                    '-FlightNumber': '718',
                  },
                  Equipment: {
                    '-AirEquipType': '7S8',
                  },
                  MarketingAirline: {
                    '-Code': 'AM',
                  },
                  MarriageGrp: 'O',
                  DepartureTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  ArrivalTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  TPA_Extensions: {
                    eTicket: {
                      '-Ind': 'true',
                    },
                    Mileage: {
                      '-Amount': '1962',
                    },
                  },
                },
                {
                  '-DepartureDateTime': '2019-10-14T15:25:00',
                  '-ArrivalDateTime': '2019-10-14T18:05:00',
                  '-StopQuantity': '0',
                  '-FlightNumber': '470',
                  '-ResBookDesigCode': 'N',
                  '-ElapsedTime': '160',
                  DepartureAirport: {
                    '-LocationCode': 'MEX',
                    '-TerminalID': '2',
                  },
                  ArrivalAirport: {
                    '-LocationCode': 'IAH',
                    '-TerminalID': 'D',
                  },
                  OperatingAirline: {
                    '-CompanyShortName': 'AEROLITORAL DBA AEROMEXICO CONNECT',
                    '-Code': 'AM',
                    '-FlightNumber': '470',
                  },
                  Equipment: {
                    '-AirEquipType': 'E90',
                  },
                  MarketingAirline: {
                    '-Code': 'AM',
                  },
                  MarriageGrp: 'I',
                  DepartureTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  ArrivalTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  TPA_Extensions: {
                    eTicket: {
                      '-Ind': 'true',
                    },
                    Mileage: {
                      '-Amount': '763',
                    },
                  },
                },
              ],
            },
            {
              '-ElapsedTime': '585',
              FlightSegment: [
                {
                  '-DepartureDateTime': '2019-10-17T13:10:00',
                  '-ArrivalDateTime': '2019-10-17T15:30:00',
                  '-StopQuantity': '0',
                  '-FlightNumber': '419',
                  '-ResBookDesigCode': 'R',
                  '-ElapsedTime': '140',
                  DepartureAirport: {
                    '-LocationCode': 'IAH',
                    '-TerminalID': 'D',
                  },
                  ArrivalAirport: {
                    '-LocationCode': 'MEX',
                    '-TerminalID': '2',
                  },
                  OperatingAirline: {
                    '-CompanyShortName': 'AEROLITORAL DBA AEROMEXICO CONNECT',
                    '-Code': 'AM',
                    '-FlightNumber': '419',
                  },
                  Equipment: {
                    '-AirEquipType': 'E90',
                  },
                  MarketingAirline: {
                    '-Code': 'AM',
                  },
                  MarriageGrp: 'O',
                  DepartureTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  ArrivalTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  TPA_Extensions: {
                    eTicket: {
                      '-Ind': 'true',
                    },
                    Mileage: {
                      '-Amount': '763',
                    },
                  },
                },
                {
                  '-DepartureDateTime': '2019-10-17T18:05:00',
                  '-ArrivalDateTime': '2019-10-17T22:55:00',
                  '-StopQuantity': '0',
                  '-FlightNumber': '708',
                  '-ResBookDesigCode': 'R',
                  '-ElapsedTime': '290',
                  DepartureAirport: {
                    '-LocationCode': 'MEX',
                    '-TerminalID': '2',
                  },
                  ArrivalAirport: {
                    '-LocationCode': 'BOG',
                    '-TerminalID': '1',
                  },
                  OperatingAirline: {
                    '-Code': 'AM',
                    '-FlightNumber': '708',
                  },
                  Equipment: {
                    '-AirEquipType': '7S8',
                  },
                  MarketingAirline: {
                    '-Code': 'AM',
                  },
                  MarriageGrp: 'I',
                  DepartureTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  ArrivalTimeZone: {
                    '-GMTOffset': '-5',
                  },
                  TPA_Extensions: {
                    eTicket: {
                      '-Ind': 'true',
                    },
                    Mileage: {
                      '-Amount': '1962',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      AirItineraryPricingInfo: {
        '-PricingSource': 'ADVJR1',
        '-PricingSubSource': 'MIP',
        '-FareReturned': 'true',
        '-LastTicketDate': '2019-07-05',
        '-PrivateFareType': '@',
        ItinTotalFare: {
          BaseFare: {
            '-Amount': '358.00',
          },
          FareConstruction: {
            '-Amount': '358.40',
          },
          EquivFare: {
            '-Amount': '1147700',
          },
          Taxes: {
            Tax: {
              '-TaxCode': 'TOTALTAX',
              '-Amount': '534030',
            },
          },
          TotalFare: {
            '-Amount': '1681730',
          },
        },
        PTC_FareBreakdowns: {
          PTC_FareBreakdown: {
            '-PrivateFareType': '@',
            PassengerTypeQuantity: {
              '-Code': 'ADT',
              '-Quantity': '1',
            },
            FareBasisCodes: {
              FareBasisCode: [
                {
                  '-PrivateFareType': '@',
                  '-BookingCode': 'N',
                  '-DepartureAirportCode': 'BOG',
                  '-ArrivalAirportCode': 'MEX',
                  '-FareComponentBeginAirport': 'BOG',
                  '-FareComponentEndAirport': 'IAH',
                  '-FareComponentDirectionality': 'FROM',
                  '-FareComponentVendorCode': 'ATP',
                  '-GovCarrier': 'AM',
                  '#text': 'NNNN6XCI/PV777',
                },
                {
                  '-PrivateFareType': '@',
                  '-BookingCode': 'N',
                  '-AvailabilityBreak': 'true',
                  '-DepartureAirportCode': 'MEX',
                  '-ArrivalAirportCode': 'IAH',
                  '-GovCarrier': 'AM',
                  '#text': 'NNNN6XCI/PV777',
                },
                {
                  '-PrivateFareType': '@',
                  '-BookingCode': 'R',
                  '-DepartureAirportCode': 'IAH',
                  '-ArrivalAirportCode': 'MEX',
                  '-FareComponentBeginAirport': 'IAH',
                  '-FareComponentEndAirport': 'BOG',
                  '-FareComponentDirectionality': 'TO',
                  '-FareComponentVendorCode': 'ATP',
                  '-GovCarrier': 'AM',
                  '#text': 'RNNN6XCI/PV777',
                },
                {
                  '-PrivateFareType': '@',
                  '-BookingCode': 'R',
                  '-AvailabilityBreak': 'true',
                  '-DepartureAirportCode': 'MEX',
                  '-ArrivalAirportCode': 'BOG',
                  '-GovCarrier': 'AM',
                  '#text': 'RNNN6XCI/PV777',
                },
              ],
            },
            PassengerFare: {
              BaseFare: {
                '-Amount': '358.00',
              },
              FareConstruction: {
                '-Amount': '358.40',
              },
              EquivFare: {
                '-Amount': '1147700',
              },
              Taxes: {
                Tax: [
                  {
                    '-TaxCode': 'YRI',
                    '-Amount': '2600',
                  },
                  {
                    '-TaxCode': 'YRI',
                    '-Amount': '2600',
                  },
                  {
                    '-TaxCode': 'CO',
                    '-Amount': '125100',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'DG',
                    '-Amount': '89100',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'YS7',
                    '-Amount': '109030',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'AY',
                    '-Amount': '18000',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'US2',
                    '-Amount': '59700',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'US2',
                    '-Amount': '59700',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XA',
                    '-Amount': '12700',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XY2',
                    '-Amount': '22500',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'YC',
                    '-Amount': '18500',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XF',
                    '-Amount': '14500',
                    '-CountryCode': 'US',
                  },
                ],
                TaxSummary: [
                  {
                    '-TaxCode': 'YRI',
                    '-Amount': '5200',
                  },
                  {
                    '-TaxCode': 'YS7',
                    '-Amount': '109030',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'CO',
                    '-Amount': '125100',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'DG',
                    '-Amount': '89100',
                    '-CountryCode': 'CO',
                  },
                  {
                    '-TaxCode': 'US2',
                    '-Amount': '119400',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'YC',
                    '-Amount': '18500',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XY2',
                    '-Amount': '22500',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XA',
                    '-Amount': '12700',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'AY',
                    '-Amount': '18000',
                    '-CountryCode': 'US',
                  },
                  {
                    '-TaxCode': 'XF',
                    '-Amount': '14500',
                    '-CountryCode': 'US',
                  },
                ],
                TotalTax: {
                  '-Amount': '534030',
                },
              },
              TotalFare: {
                '-Amount': '1681730',
              },
              TPA_Extensions: {
                Surcharges: [
                  {
                    '-Ind': 'F',
                    '-Type': 'FUEL',
                    '#text': '100.00',
                  },
                  {
                    '-Ind': 'F',
                    '-Type': 'FUEL',
                    '#text': '100.00',
                  },
                ],
                FareComponents: {
                  FareComponent: [
                    {
                      '-ProgramID': '78018',
                      '-ProgramCode': 'ROW',
                      '-ProgramDescription': 'INTERNACIONAL',
                      '-ProgramSystemCode': '1',
                      '-BrandID': 'SL',
                      '-BrandName': 'CLASICA',
                      Segment: [
                        {
                          '-LegIndex': '1',
                          '-FlightIndex': '1',
                        },
                        {
                          '-LegIndex': '1',
                          '-FlightIndex': '2',
                        },
                      ],
                    },
                    {
                      '-ProgramID': '78018',
                      '-ProgramCode': 'ROW',
                      '-ProgramDescription': 'INTERNACIONAL',
                      '-ProgramSystemCode': '1',
                      '-BrandID': 'SL',
                      '-BrandName': 'CLASICA',
                      Segment: [
                        {
                          '-LegIndex': '2',
                          '-FlightIndex': '1',
                        },
                        {
                          '-LegIndex': '2',
                          '-FlightIndex': '2',
                        },
                      ],
                    },
                  ],
                },
                Messages: {
                  Message: [
                    {
                      '-AirlineCode': 'AM',
                      '-Type': 'N',
                      '-FailCode': '0',
                      '-Info': 'NONEND/NONTRANS/ONLY/AM/PV777',
                    },
                    {
                      '-Type': 'W',
                      '-FailCode': '0',
                      '-Info':
                        'PRIVATE FARE APPLIED - CHECK RULES FOR CORRECT TICKETING',
                    },
                    {
                      '-Type': 'W',
                      '-FailCode': '0',
                      '-Info': 'VALIDATING CARRIER - AM',
                    },
                  ],
                },
                BaggageInformationList: {
                  BaggageInformation: [
                    {
                      '-ProvisionType': 'A',
                      '-AirlineCode': 'AM',
                      Segment: [
                        {
                          '-Id': '0',
                        },
                        {
                          '-Id': '1',
                        },
                      ],
                      Allowance: {
                        '-Pieces': '1',
                      },
                    },
                    {
                      '-ProvisionType': 'A',
                      '-AirlineCode': 'AM',
                      Segment: [
                        {
                          '-Id': '2',
                        },
                        {
                          '-Id': '3',
                        },
                      ],
                      Allowance: {
                        '-Pieces': '1',
                      },
                    },
                  ],
                },
                CommissionData: {
                  '-Cat35CommissionPercentage': '6.00',
                  '-Cat35CommissionAmount': '0',
                  '-Cat35MarkupAmount': '0',
                  '-CommissionAmountInEquivalent': '0',
                  '-CommissionSource': 'C',
                },
              },
            },
            Endorsements: {
              '-NonRefundableIndicator': 'true',
            },
            TPA_Extensions: {
              FareCalcLine: {
                '-Info':
                  'BOG AM X/MEX AM HOU Q BOGHOU100.00 94.40AM X/MEX AM BOG Q HOUBOG100.00 64.00NUC358.40END ROE1.00 XFIAH4.5',
              },
            },
            FareInfos: {
              FareInfo: [
                {
                  FareReference: 'N',
                  TPA_Extensions: {
                    SeatsRemaining: {
                      '-Number': '8',
                      '-BelowMin': 'false',
                    },
                    Cabin: {
                      '-Cabin': 'Y',
                    },
                    Meal: {
                      '-Code': 'HB',
                    },
                  },
                },
                {
                  FareReference: 'N',
                  TPA_Extensions: {
                    SeatsRemaining: {
                      '-Number': '8',
                      '-BelowMin': 'false',
                    },
                    Cabin: {
                      '-Cabin': 'Y',
                    },
                    Meal: {
                      '-Code': 'OC',
                    },
                  },
                },
                {
                  FareReference: 'R',
                  TPA_Extensions: {
                    SeatsRemaining: {
                      '-Number': '9',
                      '-BelowMin': 'false',
                    },
                    Cabin: {
                      '-Cabin': 'Y',
                    },
                    Meal: {
                      '-Code': 'OC',
                    },
                  },
                },
                {
                  FareReference: 'R',
                  TPA_Extensions: {
                    SeatsRemaining: {
                      '-Number': '9',
                      '-BelowMin': 'false',
                    },
                    Cabin: {
                      '-Cabin': 'Y',
                    },
                    Meal: {
                      '-Code': 'HC',
                    },
                  },
                },
              ],
            },
          },
        },
        FareInfos: {
          FareInfo: [
            {
              FareReference: 'N',
              TPA_Extensions: {
                SeatsRemaining: {
                  '-Number': '8',
                  '-BelowMin': 'false',
                },
                Cabin: {
                  '-Cabin': 'Y',
                },
                Meal: {
                  '-Code': 'HB',
                },
              },
            },
            {
              FareReference: 'N',
              TPA_Extensions: {
                SeatsRemaining: {
                  '-Number': '8',
                  '-BelowMin': 'false',
                },
                Cabin: {
                  '-Cabin': 'Y',
                },
                Meal: {
                  '-Code': 'OC',
                },
              },
            },
            {
              FareReference: 'R',
              TPA_Extensions: {
                SeatsRemaining: {
                  '-Number': '9',
                  '-BelowMin': 'false',
                },
                Cabin: {
                  '-Cabin': 'Y',
                },
                Meal: {
                  '-Code': 'OC',
                },
              },
            },
            {
              FareReference: 'R',
              TPA_Extensions: {
                SeatsRemaining: {
                  '-Number': '9',
                  '-BelowMin': 'false',
                },
                Cabin: {
                  '-Cabin': 'Y',
                },
                Meal: {
                  '-Code': 'HC',
                },
              },
            },
          ],
        },
        TPA_Extensions: {
          DivideInParty: {
            '-Indicator': 'false',
          },
          ValidatingCarrier: {
            '-SettlementMethod': 'BSP',
            '-NewVcxProcess': 'true',
            Default: {
              '-Code': 'AM',
            },
          },
        },
      },
      TicketingInfo: {
        '-TicketType': 'eTicket',
        '-ValidInterline': 'Yes',
      },
      TPA_Extensions: {
        AdditionalFares: {
          AirItineraryPricingInfo: {
            '-PricingSource': 'ADVJR1',
            '-PricingSubSource': 'MIP',
            '-FareReturned': 'false',
            '-FareStatus': 'A',
          },
        },
        ValidatingCarrier: {
          '-Code': 'AM',
        },
        DiversitySwapper: {
          '-WeighedPriceAmount': '4315990',
        },
      },
    },
  };
  
  constructor() {}

  getall () {
    return this.vuelo;
  }
}
