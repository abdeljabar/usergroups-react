export const encodeIri = (iri) => {
  return iri.replaceAll(/\//g, "%2F");
};

export const decodeIri = (iri) => {
  return iri.replaceAll(/%2F/g, "/");
};
