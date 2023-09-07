import * as api from "./api.js";

const endpoints = {
  allFunFacts: "/data/facts?sortBy=_createdOn%20desc",
  factById: "/data/facts/",
  updateFact: "/data/facts/",
  deleteFact: "/data/facts/",
  createFact: "/data/facts/",
};

export async function getAllFunFacts() {
  return api.get(endpoints.allFunFacts);
}

export async function getFactById(id) {
  return api.get(endpoints.factById + id);
}

export async function updateFactById(id, data) {
  return api.put(endpoints.updateFact + id, data);
}

export async function deleteFactById(id) {
  return api.del(endpoints.deleteFact + id);
}

export async function createFunFact(data) {
  return api.post(endpoints.createFact, data);
}


