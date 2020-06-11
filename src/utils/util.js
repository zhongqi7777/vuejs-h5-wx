/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, (c) => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy,
  });

  Object.keys(obj).forEach((key) => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach((key) => fn(obj[key], key));
}

export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

export function isPromise(val) {
  return val && typeof val.then === "function";
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`);
}

export function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

export const getBaseURL = () => {
  var baseURL = "";
  var baseDocument = "index.html";

  if (document.getElementsByTagName("base").length > 0) {
    baseURL = document
      .getElementsByTagName("base")[0]
      .href.replace(baseDocument, "");
  } else {
    baseURL =
      location.protocol +
      "//" +
      location.hostname +
      (location.port && ":" + location.port) +
      "/";
  }

  return baseURL;
};

// 函数防抖(debounce)
//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时

// 调用示例

// window.onload = function () {
//   var inputID = document.getElementById("input");
//   //处理防抖的程序
//   function debounce(fun, delayed) {
//     // 使用闭包，让每次调用时点击定时器状态不丢失
//     var timeout = null;
//     return function () {
//       // 如果用户在定时器（上一次操作）执行前再次点击，那么上一次操作将被取消
//       clearTimeout(timeout);
//       var context = this;
//       var args = arguments;
//       timeout = setTimeout(function () {
//         // 使用事件绑定的当前对象，替换处理程序的当前对象
//         // 并将事件绑定的当前对象参数，传递给操作之后的处理程序
//         fun.apply(context, args);
//       }, delayed)
//     }
//   }
//   var Main = debounce(function (e) {
//     //处理操作的主程序
//     console.log('防抖成功！\n获取到的输入值为：', e.target.value)
//   }, 1000)
//   inputID.addEventListener('input', Main);
// }

export function debounce(fun, delayed) {
  // 使用闭包，让每次调用时点击定时器状态不丢失
  var timeout = null;
  return function () {
    // 如果用户在定时器（上一次操作）执行前再次点击，那么上一次操作将被取消
    clearTimeout(timeout);
    var context = this;
    var args = arguments;
    timeout = setTimeout(function () {
      // 使用事件绑定的当前对象，替换处理程序的当前对象
      // 并将事件绑定的当前对象参数，传递给操作之后的处理程序
      fun.apply(context, args);
    }, delayed);
  };
}

// 函数节流(throttle)
//规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数,只有一次生效

//调用示例
// window.onload = function () {
//   var inputID = document.getElementById("input");
//   //处理防抖的程序
//   function throttling(fun, delayed = 500) {
//     // 使用闭包，让每次调用时点击定时器状态不丢失
//     var timeout = null;
//     // 记录第一次点击时的时间戳
//     var start = +new Date();
//     return function () {
//       clearTimeout(timeout);
//       var context = this;
//       var args = arguments;
//       // 记录第一次以后的每次点击的时间戳
//       var end = +new Date();
//       // 当时间到达设置的延时时间则立即调用数据处理函数
//       if (end - start >= delayed) {
//         fun.apply(context, args);
//         // 执行处理函数后，将结束时间设置为开始时间，重新开始记时
//         start = end;
//         // 后续点击没有到达设置的延时，定时器设定延时进行调用
//       } else {
//         timeout = setTimeout(function () {
//           fun.apply(context, args);
//         }, delayed)
//       }
//     }
//   }
//   var Main = throttling(function (e) {
//     //处理操作的主程序
//     console.log('节流成功！\n获取到的输入值为：', e.target.value)
//   }, 3000)
//   inputID.addEventListener('input', Main);
// }

export function throttle(fun, delayed = 500) {
  // 使用闭包，让每次调用时点击定时器状态不丢失
  var timeout = null;
  // 记录第一次点击时的时间戳
  var start = +new Date();
  return function () {
    clearTimeout(timeout);
    var context = this;
    var args = arguments;
    // 记录第一次以后的每次点击的时间戳
    var end = +new Date();
    // 当时间到达设置的延时时间则立即调用数据处理函数
    if (end - start >= delayed) {
      fun.apply(context, args);
      // 执行处理函数后，将结束时间设置为开始时间，重新开始记时
      start = end;
      // 后续点击没有到达设置的延时，定时器设定延时进行调用
    } else {
      timeout = setTimeout(function () {
        fun.apply(context, args);
      }, delayed);
    }
  };
}

//总结 函数防抖(debounce) 函数节流(throttle)
// 1. 函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。
//2. 函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行

//应用场景

//函数防抖(debounce)
// 1. search搜索联想，用户在不断输入值时，用防抖来节约请求资源
// 2. window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

//函数节流(throttle)

// 1. 鼠标不断点击触发，mousedown(单位时间内只触发一次) 例如 订单支付操作/取消操作
// 2. 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
