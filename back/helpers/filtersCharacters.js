const getFilters = (query) => {
  const { name, status, gender, page = 1, limit = 10 } = query;

  const filters = {};
  if (name) filters.name = { $regex: name, $options: 'i' };
  if (status) filters.status = { $regex: status, $options: 'i' };
  if (gender) filters.gender = { $regex: gender, $options: 'i' };

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  return { options, filters }
}

const getPagination = (docs, req) => {
  const nextPage = docs.nextPage ? `${req.baseUrl}?page=${docs.nextPage}` : null;
  const prevPage = docs.prevPage ? `${req.baseUrl}?page=${docs.prevPage}` : null;

  const pageInfo = {
    count: docs.totalDocs,
    pages: docs.totalPages,
    next: nextPage,
    prev: prevPage,
  };
  return {
    info: pageInfo,
    results: docs.docs,
  }
}

module.exports = {
  getFilters,
  getPagination
}