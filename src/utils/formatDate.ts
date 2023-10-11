export const formatDate = (date: string) : string => {
  const formatedDate = new Date(date.replace('Z', ''))

  return formatedDate.toLocaleDateString('pt-BR', {
    month: 'short', day: 'numeric', year: 'numeric'
  })
}
