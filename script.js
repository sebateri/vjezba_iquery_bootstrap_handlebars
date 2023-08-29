const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);
const context = { title: "My New Post", body: "This is my first post!" };
const html = template(context);

console.log(html)

document.querySelector("body").innerHTML = html
