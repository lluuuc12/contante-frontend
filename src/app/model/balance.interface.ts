import { ITipobalance } from "./tipobalance.interface";

export interface IBalance {
  id: number;
  titulo: string;
  descripcion: string;
  grupotipoasientos: number;
  gruposubcuentas: number;
  grupotipocuentas: number;
  grupocuentas: number;
  grupotipoapuntes: number;
  tipobalance: ITipobalance;
}
