import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";



export function formattedDateTimeToNow(rowDate: string): string {
  const date = new Date(rowDate)
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  })
}

export function formatteDateTime(rowDate: string): string {
  const date = new Date(rowDate)
  return format(date, "dd/MM/yyyy 'ás' hh'h'mm", {
    locale: ptBR
  })
}
