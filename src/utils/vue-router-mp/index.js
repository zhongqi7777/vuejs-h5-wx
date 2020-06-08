/*!
 * vue-router-mp by @Cweili - https://github.com/Cweili/vue-router-mp
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueRouter = factory());
  }(this, (function () { 'use strict';
  
    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
  
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
  
        return target;
      };
  
      return _extends.apply(this, arguments);
    }
  
    var objectEqual = function equals(a, b) {
      if (!a && !b) return true;
      if (!a || !b) return false;
      if (Object.keys(a).length !== Object.keys(b).length) return false;
      return Object.keys(a).every(function (key) {
        return a[key] === b[key];
      });
    };
  
    var returnSelf = function returnSelf(result) {
      return Promise.resolve(result);
    };
  
    function asyncThrottleCache(fn, wait, _temp) {
      if (wait === void 0) {
        wait = 0;
      }
  
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$key = _ref.key,
          key = _ref$key === void 0 ? function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        return JSON.stringify(args);
      } : _ref$key,
          _ref$serialize = _ref.serialize,
          serialize = _ref$serialize === void 0 ? returnSelf : _ref$serialize,
          _ref$deserialize = _ref.deserialize,
          deserialize = _ref$deserialize === void 0 ? returnSelf : _ref$deserialize;
  
      var cache = {};
      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        } // eslint-disable-line func-names
  
  
        var cacheKey = key.apply(void 0, args);
  
        if (cache[cacheKey]) {
          var cached = cache[cacheKey];
          var e = cached.e,
              r = cached.r,
              f = cached.f;
  
          if (e !== undefined) {
            return Promise.reject(e);
          }
  
          if (f) {
            return deserialize(r);
          }
  
          return new Promise(function (resolve, reject) {
            cached.s.push(resolve);
            cached.j.push(reject);
          });
        }
  
        cache[cacheKey] = {
          s: [],
          j: [],
          t: setTimeout(function () {
            var cached = cache[cacheKey];
  
            if (cached) {
              if (cached.f) {
                delete cache[cacheKey];
              } else {
                cached.t = 0;
              }
            }
          }, wait)
        };
  
        var onFinish = function onFinish(err, result) {
          var cached = cache[cacheKey];
  
          if (cached) {
            var j = cached.j,
                s = cached.s;
            cached.f = true;
  
            if (err) {
              cached.e = err;
              j.map(function (f) {
                return f(err);
              });
            } else {
              serialize(result).then(function (r) {
                cached.r = r;
                s.map(function (f, i) {
                  return deserialize(r).then(f, j[i]);
                });
              }, onFinish);
            }
  
            if (!cached.t) {
              delete cache[cacheKey];
            }
          }
  
          return result;
        };
  
        return fn.apply(this, args).then(function (result) {
          return onFinish(undefined, result);
        }, function (err) {
          onFinish(err);
          return Promise.reject(err);
        });
      };
    }
  
    function runQueue(queue, fn, cb) {
      var step = function step(index) {
        if (index >= queue.length) {
          cb();
        } else if (queue[index]) {
          fn(queue[index], function () {
            step(index + 1);
          });
        } else {
          step(index + 1);
        }
      };
  
      step(0);
    }
  
    function warn(condition, message) {
      if (process.env.NODE_ENV !== 'production' && !condition && typeof console !== 'undefined') {
        console.warn("[vue-router-mp] " + message);
      }
    }
    function isError(err) {
      return Object.prototype.toString.call(err).indexOf('Error') > -1;
    }
  
    var noop = function noop() {};
  
    function transitionTo(router, location, onComplete, onAbort) {
      if (onComplete === void 0) {
        onComplete = noop;
      }
  
      if (onAbort === void 0) {
        onAbort = noop;
      }
  
      var route = router.match(location);
  
      if (!route) {
        onAbort();
        return;
      }
  
      var currentRoute = router.currentRoute;
  
      if (currentRoute && route.fullPath === currentRoute.fullPath) {
        onAbort();
        return;
      }
  
      var abort = function abort(err) {
        if (isError(err)) {
          if (router.errorCbs.length) {
            router.errorCbs.forEach(function (cb) {
              cb(err);
            });
          } else {
            warn(false, 'uncaught error during route navigation:');
            console.error(err);
          }
        }
  
        onAbort(err);
      };
  
      var queue = router.beforeHooks.concat(route.beforeEnter);
      var pending = route;
  
      var iterator = function iterator(hook, next) {
        if (pending !== route) {
          abort();
          return;
        }
  
        try {
          hook(route, currentRoute, function (to) {
            if (to === false || isError(to)) {
              // next(false) -> abort navigation, ensure currentURL
              abort(to);
            } else if (typeof to === 'string' || typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
              // next('/') or next({ path: '/' }) -> redirect
              transitionTo(router, to, onComplete, onAbort);
            } else {
              // confirm transition and pass on the value
              next(to);
            }
          });
        } catch (e) {
          abort(e);
        }
      };
  
      runQueue(queue, iterator, function () {
        if (pending !== route) {
          abort();
          return;
        }
  
        pending = null; // update route
  
        var prev = currentRoute;
        router.currentRoute = route;
        router.afterHooks.forEach(function (hook) {
          if (hook) hook(route, prev);
        });
        onComplete(route);
      });
    }
  
    /* globals wx */
    var t = asyncThrottleCache(function () {
      return Promise.resolve(transitionTo.apply(void 0, arguments));
    }, 50);
    var appHide;
    wx.onAppHide(function () {
      appHide = true;
    });
    var install = (function (router) {
      return function (Vue) {
        Vue.mixin({
          onShow: function onShow() {
            var app = router.app = this.$root;
            var $mp = app.$mp;
  
            if ($mp && $mp.mpType === 'page') {
              appHide = false;
              var currentRoute = router.currentRoute;
              var query = $mp.query,
                  _$mp$page = $mp.page,
                  page = _$mp$page === void 0 ? {} : _$mp$page;
              var route = page.route;
  
              if (route) {
                if (route.indexOf(router.base) !== 0) {
                  route = router.base + route;
                }
  
                if (currentRoute.path !== route || !objectEqual(currentRoute.query, query)) {
                  t(router, {
                    path: route,
                    query: query
                  });
                }
              }
            }
          },
          onUnload: function onUnload() {
            if (appHide) {
              appHide = false;
              router.currentRoute = {};
            }
          }
        });
        Object.defineProperty(Vue.prototype, '$router', {
          get: function get() {
            return router;
          }
        });
        Object.defineProperty(Vue.prototype, '$route', {
          get: function get() {
            return router.currentRoute;
          }
        });
      };
    });
  
    /* globals wx */
    function push(router, location, onComplete, onAbort) {
      return transitionTo(router, location, function (route) {
        if (route) {
          var params = {
            url: decodeURIComponent(route.fullPath),
            fail: onAbort,
            success: onComplete
          };
  
          if (route.isTab) {
            wx.switchTab(params);
          } else if (route.reLaunch) {
            wx.reLaunch(params);
          } else if (route.replace) {
            wx.redirectTo(params);
          } else {
            wx.navigateTo(params);
          }
        }
      }, onAbort);
    }
    function go(delta) {
      wx.navigateBack({
        delta: delta
      });
    }
  
    var has = Object.prototype.hasOwnProperty,
        undef;
    /**
     * Decode a URI encoded string.
     *
     * @param {String} input The URI encoded string.
     * @returns {String} The decoded string.
     * @api private
     */
  
    function decode(input) {
      return decodeURIComponent(input.replace(/\+/g, ' '));
    }
    /**
     * Simple query string parser.
     *
     * @param {String} query The query string that needs to be parsed.
     * @returns {Object}
     * @api public
     */
  
  
    function querystring(query) {
      var parser = /([^=?&]+)=?([^&]*)/g,
          result = {},
          part;
  
      while (part = parser.exec(query)) {
        var key = decode(part[1]),
            value = decode(part[2]); //
        // Prevent overriding of existing properties. This ensures that build-in
        // methods like `toString` or __proto__ are not overriden by malicious
        // querystrings.
        //
  
        if (key in result) continue;
        result[key] = value;
      }
  
      return result;
    }
    /**
     * Transform a query string to an object.
     *
     * @param {Object} obj Object that should be transformed.
     * @param {String} prefix Optional prefix.
     * @returns {String}
     * @api public
     */
  
  
    function querystringify(obj, prefix) {
      prefix = prefix || '';
      var pairs = [],
          value,
          key; //
      // Optionally prefix with a '?' if needed
      //
  
      if ('string' !== typeof prefix) prefix = '?';
  
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key]; //
          // Edge cases where we actually want to encode the value to an empty
          // string instead of the stringified value.
          //
  
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = '';
          }
  
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
      }
  
      return pairs.length ? prefix + pairs.join('&') : '';
    } //
    // Expose the module.
    //
  
  
    var stringify = querystringify;
    var parse = querystring;
    var querystringify_1 = {
      stringify: stringify,
      parse: parse
    };
  
    function parse$1(path) {
      var _path$split = path.split('?'),
          p = _path$split[0],
          q = _path$split[1];
  
      return {
        path: p,
        query: q ? querystringify_1.parse(q) : {}
      };
    }
    function stringify$1(path, query) {
      return (path || '') + querystringify_1.stringify(query, '?');
    }
  
    function createRoute(route, location) {
      if (location === void 0) {
        location = {};
      }
  
      return route && {
        name: route.name,
        meta: route.meta || {},
        path: route.path || '',
        hash: '',
        query: location.query || {},
        params: {},
  
        get fullPath() {
          return stringify$1(route.path, location.query);
        },
  
        beforeEnter: route.beforeEnter,
        replace: location.replace,
        reLaunch: location.reLaunch,
        isTab: location.isTab || route.isTab
      };
    }
  
    function registerHook(list, fn) {
      list.push(fn);
      return function () {
        var i = list.indexOf(fn);
  
        if (i > -1) {
          list.splice(i, 1);
        }
      };
    }
  
    function locationObj(location) {
      return typeof location === 'string' ? {
        path: location
      } : location;
    }
  
    var pathMap = {};
    var nameMap = {};
    var beforeHooks = [];
    var afterHooks = [];
    var errorCbs = [];
  
    function router(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          routes = _ref.routes,
          _ref$base = _ref.base,
          base = _ref$base === void 0 ? '/' : _ref$base;
  
      router.addRoutes(routes);
      router.base = base;
      return router;
    }
  
    router.currentRoute = createRoute({});
    router.beforeHooks = beforeHooks;
    router.afterHooks = afterHooks;
  
    router.beforeEach = function (fn) {
      return registerHook(beforeHooks, fn);
    };
  
    router.afterEach = function (fn) {
      return registerHook(afterHooks, fn);
    };
  
    router.errorCbs = errorCbs;
  
    router.onError = function (fn) {
      return registerHook(errorCbs, fn);
    };
  
    router.push = function (location, onComplete, onAbort) {
      location = locationObj(location);
      return push(router, location, onComplete, onAbort);
    };
  
    router.replace = function (location, onComplete, onAbort) {
      location = locationObj(location);
      location.replace = true;
      return push(router, location, onComplete, onAbort);
    };
  
    router.go = go;
  
    router.back = function () {
      return go(-1);
    };
  
    router.forward = function () {
      return go(1);
    };
  
    router.addRoutes = function (routes) {
      if (routes === void 0) {
        routes = [];
      }
  
      routes.forEach(function (route) {
        pathMap[route.path] = route;
  
        if (route.name) {
          nameMap[route.name] = route;
        }
      });
    };
  
    router.match = function (location) {
      location = locationObj(location);
      var _location = location,
          name = _location.name,
          path = _location.path,
          query = _location.query;
      var p = path;
      var q = query;
      var matched;
  
      if (name) {
        matched = nameMap[name];
      } else if (path) {
        var parsed = parse$1(path);
        p = parsed.path;
        q = _extends({}, parsed.query, query);
        matched = pathMap[p];
      }
  
      warn(matched, 'Can\'t match any router');
      return createRoute(matched, _extends({}, location, {
        name: name,
        path: p,
        query: q
      }));
    };
  
    router.install = install(router);
  
    return router;
  
  })));