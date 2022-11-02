/**
 * Backend databse utililty functions
 */

import knex from "./knex";


export async function saveFunction(param1) {
  console.log("in save function", param1)
  const review = await knex("demoTable").insert({
    exampleColumn: param1,
  });
  return {data: review};
}

export async function getFunction(param1) {
  const review = await knex("demoTable")
  return review;
}
