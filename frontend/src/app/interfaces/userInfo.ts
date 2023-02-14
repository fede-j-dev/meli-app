export interface UserResponseInfo {
  res: UserInfo;
}

export interface UserInfo {
  apellido: string;
  id_usuario: number;
  imagen: string;
  nivel: string;
  nombre: string;
}

export interface Level {
  descripción: string;
  id_nivel: string;
  isError: boolean;
  isLoading: boolean;
}

export interface LevelResponse {
  descripción: string;
  id_nivel: string;
}

export interface RestrictionsResponse {
  mensaje: string;
  tipo: string;
}

export interface Restrictions {
  mensaje: string;
  tipo: string;
  isError: boolean;
  isLoading: boolean;
}
