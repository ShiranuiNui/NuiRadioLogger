export type QSO = {
  call_sign: string;
  time: Date;
  report: string;
  frequency: number;
  mode: string;
  qsl_card_statuses: QSLCardStatuses;
  qsl_remarks?: string;
  remarks?: string;
  my_station_infomations: MyStationInfomations;
};

export type QSLCardStatuses = {
  is_requested_qsl_card: boolean;
  is_sent_qsl_card: boolean;
  is_received_qsl_card: boolean;
};

export type MyStationInfomations = {
  my_call_sign: string;
  qth: string;
  rig: string;
  output: number;
  antenna: string;
};

export const default_qsl_card_statuses: QSLCardStatuses = {
  is_requested_qsl_card: false,
  is_sent_qsl_card: false,
  is_received_qsl_card: false,
};

export const default_mystation_infomations: MyStationInfomations = {
  my_call_sign: "",
  qth: "",
  rig: "",
  output: 0,
  antenna: "",
};

export const default_qso: QSO = {
  call_sign: "",
  time: new Date(),
  report: "",
  frequency: 0,
  mode: "",
  qsl_card_statuses: default_qsl_card_statuses,
  my_station_infomations: default_mystation_infomations,
};
