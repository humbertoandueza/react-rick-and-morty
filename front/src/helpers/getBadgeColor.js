export const getBadgeColor = (status) => {
  switch (status) {
    case 'Alive':
      return  'bg-success'
    
    default:
      return  'bg-danger'
  }
}