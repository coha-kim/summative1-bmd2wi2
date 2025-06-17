import { supabase } from "../src/connection.js";

const { data, error } = await supabase
    .from("care-info")
    .select("*")

document.querySelector("#each-content").innerHTML = data.map(post =>
    `
    <article>
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    </article>
    `
).join('')
