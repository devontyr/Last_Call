/**
 * Backend databse utililty functions
 */

import knex from "./knex";

export async function saveFunction(user, crush) {
    console.log("in save function", user);
    const review = await knex("emailTable").insert({
        userEmail: user,
        crushEmail: crush,
    });
    return { data: review };
}

export async function getFunction(user) {
    const review = await knex("emailTable").where({
        userEmail: user,
    });

    return review;
}
