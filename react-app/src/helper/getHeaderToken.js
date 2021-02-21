const getHeaderToken = () => {
  return { 'x-token': localStorage.getItem('token') };
};

export default getHeaderToken;
