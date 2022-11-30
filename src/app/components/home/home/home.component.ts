import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  code: any;
  FlightNumber: any;
  AirEquipType: any;
  LocationCode_ida: any;
  Destino_final: any;
  ArrivalDateTime: any;
  ArrivalDateTimeDate: any;
  ArrivalDateTimeTime: any;
  hora_calculada_ida: any;
  hora_calculada_vuelta: any;
  minutos_calculados_ida: any;
  minutos_calculados_vuelta: any;
  months: any = {
    '01': 'enero',
    '02': 'febrero',
    '03': 'marzo',
    '04': 'abril',
    '05': 'mayo',
    '06': 'junio',
    '07': 'julio',
    '08': 'agosto',
    '09': 'septiembre',
    '10': 'octubre',
    '11': 'noviembre',
    '12': 'diciembre',
  };
  mes_llegada_ida: any;
  dia_llegada_ida: any;
  hora_llegada_ida: any;
  minutos_llegada_ida: any;
  DepartureDateTime: any;
  mes_salida_ida: any;
  dia_salida_ida: any;
  hora_salida_ida: any;
  minutos_salida_ida: any;
  DepartureDateTimeDate: any;
  DepartureDateTimeTime: any;

  // variables escala
  locationCode_escala: any;
  mes_salida_escala: any;
  dia_salida_escala: any;
  hora_salida_escala: any;
  minutos_salida_escala: any;
  mes_llegada_escala: any;
  dia_llegada_escala: any;
  hora_llegada_escala: any;
  minutos_llegada_escala: any;
  DepartureDateTime_escala: any;
  numero_vuelo_escala_llegada: any;

  // variables vuelta
  locationCode_vuelta: any;
  mes_salida_vuelta: any;
  dia_salida_vuelta: any;
  hora_salida_vuelta: any;
  minutos_salida_vuelta: any;
  mes_llegada_vuelta: any;
  dia_llegada_vuelta: any;
  hora_llegada_vuelta: any;
  minutos_llegada_vuelta: any;
  DepartureDateTime_vuelta: any;
  ArrivalDateTime_vuelta: any;
  numero_vuelo_salida: any;

 // precios
  tarifa_neta: any;
  costo_total: any;

  constructor(private generalService: GeneralService) {
    console.log('data entrante',
      this.generalService.vuelo.PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[1].OperatingAirline['-FlightNumber']
        
    );


this.tarifa_neta = this.generalService.vuelo.PricedItinerary.AirItineraryPricingInfo.ItinTotalFare.EquivFare['-Amount'];
this.costo_total = this.generalService.vuelo.PricedItinerary.AirItineraryPricingInfo.ItinTotalFare.TotalFare['-Amount'];


    // variables generales

    this.data = this.generalService.vuelo.PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment;
    this.code = this.data[0].OperatingAirline['-Code'];
    this.FlightNumber = this.data[0].OperatingAirline['-FlightNumber'];
    this.LocationCode_ida = this.data[0].DepartureAirport['-LocationCode'];
    this.Destino_final = this.data[1].ArrivalAirport['-LocationCode'];
    this.AirEquipType = this.data[0].Equipment['-AirEquipType'];
    this.locationCode_escala = this.data[0].ArrivalAirport['-LocationCode'];

    // arreglos de salida

    this.DepartureDateTime = this.data[0]['-DepartureDateTime'].split(' ');

    this.DepartureDateTimeDate = this.DepartureDateTime[0];
    this.DepartureDateTimeTime = this.DepartureDateTime[1];
    this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.mes_salida_ida =
      this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.dia_salida_ida = parseInt(this.DepartureDateTimeDate.split('-')[2]);
    this.hora_salida_ida = this.DepartureDateTimeTime.split(':')[0];
    this.minutos_salida_ida = this.DepartureDateTimeTime.split(':')[1];

    // arreglos de llegada
  
    this.ArrivalDateTime = this.data[1]['-ArrivalDateTime'].split('T');

    this.ArrivalDateTimeDate = this.ArrivalDateTime[0];
    this.ArrivalDateTimeTime = this.ArrivalDateTime[1];
    this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.mes_llegada_ida =
      this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.dia_llegada_ida = parseInt(this.ArrivalDateTimeDate.split('-')[2]);
    this.hora_llegada_ida = this.ArrivalDateTimeTime.split(':')[0];
    this.minutos_llegada_ida = this.ArrivalDateTimeTime.split(':')[1];

    // arreglos de llegada escala

    this.ArrivalDateTime = this.data[0]['-ArrivalDateTime'].split(' ');

    this.ArrivalDateTimeDate = this.ArrivalDateTime[0];
    this.ArrivalDateTimeTime = this.ArrivalDateTime[1];
    this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.mes_llegada_escala =
      this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.dia_llegada_escala = parseInt(this.ArrivalDateTimeDate.split('-')[2]);
    this.hora_llegada_escala = this.ArrivalDateTimeTime.split(':')[0];
    this.minutos_llegada_escala = this.ArrivalDateTimeTime.split(':')[1];

    // arreglos de salida escala

    this.DepartureDateTime_escala = this.data[1]['-DepartureDateTime'].split('T');

    this.DepartureDateTimeDate = this.DepartureDateTime_escala[0];
    this.DepartureDateTimeTime = this.DepartureDateTime_escala[1];
    this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.mes_salida_escala = this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.dia_salida_escala = parseInt(this.DepartureDateTimeDate.split('-')[2]);
    this.hora_salida_escala = this.DepartureDateTimeTime.split(':')[0];
    this.minutos_salida_escala = this.DepartureDateTimeTime.split(':')[1];
    this.numero_vuelo_escala_llegada = this.generalService.vuelo.PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[1].OperatingAirline['-FlightNumber']

    // arreglos de llegada vuelta

    this.ArrivalDateTime_vuelta = this.generalService.vuelo.PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[1]['-ArrivalDateTime'
      ].split('T');

    this.ArrivalDateTimeDate = this.ArrivalDateTime_vuelta[0];
    this.ArrivalDateTimeTime = this.ArrivalDateTime_vuelta[1];
    this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.mes_llegada_vuelta = this.months[parseInt(this.ArrivalDateTimeDate.split('-')[1])];
    this.dia_llegada_vuelta = parseInt(this.ArrivalDateTimeDate.split('-')[2]);
    this.hora_llegada_vuelta = this.ArrivalDateTimeTime.split(':')[0];
    this.minutos_llegada_vuelta = this.ArrivalDateTimeTime.split(':')[1];

    // arreglos de salida vuelta
    this.DepartureDateTime_escala = this.generalService.vuelo.PricedItinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0]['-DepartureDateTime'
      ].split('T');

    this.DepartureDateTimeDate = this.DepartureDateTime_escala[0];
    this.DepartureDateTimeTime = this.DepartureDateTime_escala[1];
    this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.mes_salida_vuelta = this.months[parseInt(this.DepartureDateTimeDate.split('-')[1])];
    this.dia_salida_vuelta = parseInt(this.DepartureDateTimeDate.split('-')[2]);
    this.hora_salida_vuelta = this.DepartureDateTimeTime.split(':')[0];
    this.minutos_salida_vuelta = this.DepartureDateTimeTime.split(':')[1];
    this.numero_vuelo_salida = this.data[1].Equipment['-AirEquipType']

    // cantidad de horas calculados
    this.hora_calculada_ida = this.hora_llegada_ida - this.hora_salida_ida;
    this.minutos_calculados_ida = this.minutos_llegada_ida - this.minutos_salida_ida;
    this.hora_calculada_vuelta = this.hora_llegada_vuelta - this.hora_salida_vuelta;
    this.minutos_calculados_vuelta =this.minutos_llegada_vuelta - this.minutos_salida_vuelta;

   
  }

  ngOnInit(): void {}
}
