let x;
let y;
let f = n => n * 100

x = 1;
y = f(x);
console.log(y); // 100

x = 2;
y = f(x);
console.log(y); // 200

x = 3;
y = f(x);
console.log(y); // 300


let x;
let y;
let onXChange = function(cb) {
  // ...
}

onXChange(() => {
  y = f(x);
  console.log(y);
})

x = 1;
x = 2;
x = 3;