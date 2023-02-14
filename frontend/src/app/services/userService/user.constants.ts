export const initialUserData = {
  apellido: undefined,
  id_usuario: undefined,
  imagen: undefined,
  nivel: undefined,
  nombre: undefined,
};

export const purchasesLoading = {
  data: [],
  limit: undefined,
  offset: undefined,
  total: undefined,
  isError: false,
  isLoading: true,
};

export const purchasesError = {
  data: [],
  limit: undefined,
  offset: undefined,
  total: undefined,
  isError: true,
  isLoading: false,
};

export const levelLoading = {
  descripción: undefined,
  id_nivel: undefined,
  isLoading: true,
  isError: false,
};

export const levelError = {
  descripción: undefined,
  id_nivel: undefined,
  isLoading: false,
  isError: true,
};

export const restrictionsLoading = {
  mensaje: undefined,
  tipo: undefined,
  isError: false,
  isLoading: true,
};

export const restrictionsError = {
  mensaje: undefined,
  tipo: undefined,
  isError: true,
  isLoading: false,
};
