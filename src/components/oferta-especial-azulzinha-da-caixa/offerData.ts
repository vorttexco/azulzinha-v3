export type AnticipationMode = "com" | "sem";

export interface EquipmentTier {
  faturamento: string;
  quantity: string;
  types: string;
}

export interface SegmentRatePair {
  debito: string;
  credito: string;
}

export interface SegmentRate {
  segment: string;
  com: SegmentRatePair;
  sem: SegmentRatePair;
}

const SMART_PRO_TEF = "azulzinha smart, azulzinha pro ou azulzinha tef";
const CLOVER_SMART_PRO_TEF =
  "Clover Flex, azulzinha smart, azulzinha pro ou azulzinha tef";

const EQUIPMENT_TIERS: Record<AnticipationMode, EquipmentTier[]> = {
  com: [
    {
      faturamento: "De R$ 10 mil a R$ 20 mil",
      quantity: "1 Máquina",
      types: SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 20 mil a R$ 50 mil",
      quantity: "1 Máquina",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 50 mil a R$ 100 mil",
      quantity: "Até 2 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 100 mil a R$ 250 mil",
      quantity: "Até 3 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 250 mil a R$ 400 mil",
      quantity: "Até 4 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "Acima de R$ 400 mil",
      quantity: "Até 5 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
  ],
  sem: [
    {
      faturamento: "De R$ 20 mil a R$ 30 mil",
      quantity: "1 Máquina",
      types: SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 30 mil a R$ 100 mil",
      quantity: "1 Máquina",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 100 mil a R$ 250 mil",
      quantity: "Até 2 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "De R$ 250 mil a R$ 400 mil",
      quantity: "Até 3 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
    {
      faturamento: "Acima de R$ 400 mil",
      quantity: "Até 4 Máquinas",
      types: CLOVER_SMART_PRO_TEF,
    },
  ],
};

const UNAVAILABLE: SegmentRatePair = { debito: "-", credito: "-" };

const SEGMENT_RATES: SegmentRate[] = [
  {
    segment: "Atacadista de gás",
    com: { debito: "0,89%", credito: "3,48%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Casa noturna",
    com: { debito: "0,89%", credito: "3,68%" },
    sem: { debito: "1,09%", credito: "2,19%" },
  },
  {
    segment: "Clínica de Estética",
    com: { debito: "0,89%", credito: "3,68%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Confeitaria",
    com: { debito: "0,89%", credito: "3,48%" },
    sem: { debito: "1,09%", credito: "1,99%" },
  },
  {
    segment: "Fast food",
    com: { debito: "0,89%", credito: "3,68%" },
    sem: { debito: "1,09%", credito: "2,09%" },
  },
  {
    segment: "Loja de autopeças",
    com: { debito: "0,89%", credito: "3,58%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Loja de construção",
    com: { debito: "0,89%", credito: "3,58%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Loja de roupas e calçados",
    com: { debito: "0,89%", credito: "3,48%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Pet shop",
    com: { debito: "0,99%", credito: "3,58%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Posto de combustível",
    com: { debito: "0,89%", credito: "3,78%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Ramo de saúde",
    com: { debito: "0,89%", credito: "3,48%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Restaurante ou bar",
    com: { debito: "0,89%", credito: "3,68%" },
    sem: { debito: "1,09%", credito: "2,19%" },
  },
  {
    segment: "Serviços de educação",
    com: { debito: "0,79%", credito: "2,78%" },
    sem: UNAVAILABLE,
  },
  {
    segment: "Supermercado",
    com: { debito: "0,89%", credito: "3,48%" },
    sem: { debito: "1,09%", credito: "1,99%" },
  },
  {
    segment: "Turismo",
    com: { debito: "0,89%", credito: "3,78%" },
    sem: UNAVAILABLE,
  },
];

export function equipmentTiers(mode: AnticipationMode): EquipmentTier[] {
  return EQUIPMENT_TIERS[mode];
}

export function segmentRates(): SegmentRate[] {
  return SEGMENT_RATES;
}
