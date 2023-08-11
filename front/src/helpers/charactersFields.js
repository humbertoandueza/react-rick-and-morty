export const getValuesFilter =  
  localStorage.getItem('filters') 
    ? JSON.parse(localStorage.getItem('filters'))
    : { 
      search: '',
      status: '',
      gender: '',
    }

