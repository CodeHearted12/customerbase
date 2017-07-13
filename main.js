for (var i = 0; i < customers.results.length; i++) {
const cust =`

<section class = "border">

    <img class = "pics" src= ${customers.results[i].picture.large}>
    <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <a href="${customers.results[i].email}"></a>
    <div class="">${customers.results[i].location.street}</div>
    <div class="">${customers.results[i].location.city}. ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
    <div class="" >${customers.results [i].phone}</div>
    <div class = "blur">${customers.results[i].id.value}</div>
</section>


`;
document.querySelector('.pro').innerHTML += cust;
  console.log(customers.results[i]);
}
