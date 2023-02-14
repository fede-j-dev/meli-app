export interface ProductData {
  titulo: string;
  cantidad: number;
  fecha: string;
  id_compra: number;
  id_envio: number;
  id_transaccion: number;
  imagen: string;
  precio: Precio;
  vendedor: Vendedor;
}

export interface Precio {
  total: number;
  moneda: string;
}

export interface Vendedor {
  id: number;
  nickname: string;
}

export interface ItemShipment {
  isError: boolean;
  isLoading: boolean;
  res: ShipmentState;
}

export interface ShipmentState {
  estado: string;
  id_envio: number;
}

export interface ItemPayment {
  isError: boolean;
  isLoading: boolean;
  res: PaymentState;
}

export interface PaymentState {
  estado: string;
  id_transaccion: number;
}

export interface PurchasesResponse {
  isError: boolean;
  isLoading: boolean;
  data: ProductData[];
  limit: string;
  offset: number;
  total: number;
}

export interface PurchasesApiResponse {
  data: ProductData[];
  limit: string;
  offset: number;
  total: number;
}
