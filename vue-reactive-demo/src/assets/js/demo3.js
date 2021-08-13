let x;
let y;
let z;
let f = (n) => n * 100;

let active;
let watch = function(cb) {
  active = cb;
  active();
  active = null;
};

// 创建任务队列
let queue = [];

// 创建添加任务的方法
let queueJob = (job) => {
  // 过滤已经添加的任务
  if (!queue.includes(job)) {
    queue.push(job); // 添加任务
    nextTick(flushJobs); // 推入微任务
  }
};

// 创建执行任务的方法
let flushJobs = () => {
  let job;
  // 依次取出队列的任务赋值给job并执行，直到清空队列
  while ((job = queue.shift()) !== undefined) {
    job();
  }
};

// 创建Promise
let nextTick = (cb) => Promise.resolve().then(cb);

class Dep {
  deps = new Set();

  // 收集依赖
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }

  // 通知依赖更新
  notify() {
    this.deps.forEach(dep => queueJob(dep));
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
y = ref(2);
z = ref(3);

// 考虑到我们会依赖很多变量，因此将onXChange改成watch比较符合语义
watch(() => {
  document.write(`
    <p>
      x: ${f(x.value)}; y: ${f(y.value)}; z: ${f(z.value)}
    </p>
  `)
});

x.value = 2;
y.value = 3;
z.value = 4;