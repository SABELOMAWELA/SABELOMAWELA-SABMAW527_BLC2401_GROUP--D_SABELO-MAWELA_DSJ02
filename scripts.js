const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
 result.innerHTML= "NO calculation performed"

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
   const regex = /[a-zA-Z\W_]/g;

try{ 
if (dividend === "" || divider === ""){
  result.innerText = "Division not performed. Both values are required in inputs. Try again"
  return
};

 if (parseInt(divider) == 0){
   result.innerText = "Division not performed. Invalid number provided. Try again"
throw Error("Division not performed. Invalid number provided. Try again"); };

    if (regex.test(dividend)|| regex.test(divider)){
result.classList.add("critical-error")
 result.innerHTML = "Something critical went wrong. Please reload the page"
 }throw new Error("Something critical went wrong. Please reload the page");
 } catch(error){
console.error(error.stack)
}

 });
