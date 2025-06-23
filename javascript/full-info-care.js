import { supabase } from "../src/connection.js";

const { data, error } = await supabase
    .from("care-info")
    .select("*")
      .order("id", { ascending: true })

document.querySelector("#all-content").innerHTML = data.map(post =>
    `
   <article class="each-content">
      ${post.image_filename ? `
      <div class="image-container">
        <img src="assets/${post.image_filename}" alt="${post.image_filename} class=images">
      </div>
      ` : ''}
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </article>

    <img src="assets/circular-element.svg" alt="Circular graphic element" class="pink-element-content">
    `
).join('')
