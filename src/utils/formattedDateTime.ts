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

// export function formattedDateTime(date: string) {
//   return new Date(date).toLocaleString('pt-BR', {
//     day: '2-digit',
//     month: "2-digit",
//     year: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"
//   })
// }
