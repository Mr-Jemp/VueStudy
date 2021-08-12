let x;
let y;
let f = (n) => n * 100;

let active;
let onXChange = function(cb) {
  active = cb;
  active();
};

class Dep {
  deps = new Set();

  // 收集依赖
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }

  // 批量更新
  notify() {
    this.deps.forEach((dep) => dep());
  }
}

let ref = (initValue) => {
  let value = initValue;
  let dep = new Dep();

  return Object.defineProperty({}, "value", {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
    },
  });
};

x = ref(1);

onXChange(() => {
  y = f(x.value);
  console.log('onXChange', y);
});

x.value = 2;
x.value = 3;
