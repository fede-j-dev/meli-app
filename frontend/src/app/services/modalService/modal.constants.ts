export const shipmentIsLoading = {
  isError: false,
  isLoading: true,
  res: {
    estado: undefined,
    id_envio: undefined,
  },
};

export const paymentIsLoading = {
  isError: false,
  isLoading: true,
  res: {
    estado: undefined,
    id_transaccion: undefined,
  },
};

export const paymentError = {
  isError: true,
  isLoading: false,
  res: {
    estado: undefined,
    id_transaccion: undefined,
  },
};

export const shipmentError = {
  isError: true,
  isLoading: false,
  res: {
    estado: undefined,
    id_envio: undefined,
  },
};

export const productDataMock = {
  titulo: undefined,
  cantidad: undefined,
  fecha: undefined,
  id_compra: undefined,
  id_envio: undefined,
  id_transaccion: undefined,
  imagen: undefined,
  precio: undefined,
  vendedor: undefined,
};
