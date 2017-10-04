webpackJsonp([1],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_SET_LANGUAGE = 'APP_SET_LANGUAGE';
var setLanguage = function setLanguage(lang) {
  return {
    type: APP_SET_LANGUAGE,
    payload: lang
  };
};

var types = { APP_SET_LANGUAGE: APP_SET_LANGUAGE };

exports.types = types;
exports.default = { setLanguage: setLanguage };

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(701);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(703)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(289);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(155);

var _reactRedux = __webpack_require__(98);

var _reducers = __webpack_require__(339);

var _reducers2 = _interopRequireDefault(_reducers);

var _store = __webpack_require__(351);

var _store2 = _interopRequireDefault(_store);

var _ContentProvider = __webpack_require__(360);

var _ContentProvider2 = _interopRequireDefault(_ContentProvider);

var _App = __webpack_require__(364);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(287);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)(_reducers2.default, { logger: "development" === 'development' });

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store, 'data-qa-node': 'Provider',
    'data-qa-file': 'index'
  },
  _react2.default.createElement(
    _ContentProvider2.default,
    {
      'data-qa-node': 'ContentProvider',
      'data-qa-file': 'index'
    },
    _react2.default.createElement(_App2.default, {
      'data-qa-node': 'App',
      'data-qa-file': 'index'
    })
  )
), document.getElementById('app'));

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(100);

var _app = __webpack_require__(340);

var _app2 = _interopRequireDefault(_app);

var _todos = __webpack_require__(341);

var _todos2 = _interopRequireDefault(_todos);

var _mocks = __webpack_require__(348);

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ app: _app2.default, todos: _todos2.default, mocks: _mocks2.default });

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _processReducer = __webpack_require__(101);

var _processReducer2 = _interopRequireDefault(_processReducer);

var _app = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APP_SET_LANGUAGE = _app.types.APP_SET_LANGUAGE;


var INIT_STATE = { language: 'en' };

var appReducers = _defineProperty({}, APP_SET_LANGUAGE, function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, { language: payload });
});

exports.default = (0, _processReducer2.default)(appReducers, INIT_STATE);

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todosReducers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _processReducer = __webpack_require__(101);

var _processReducer2 = _interopRequireDefault(_processReducer);

var _todos = __webpack_require__(342);

var _todos2 = __webpack_require__(344);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_TODO = _todos2.types.ADD_TODO,
    TOGGLE_TODO = _todos2.types.TOGGLE_TODO,
    SET_FILTER = _todos2.types.SET_FILTER;

var INIT_STATE = { filter: _todos.FILTER_TYPES.all, list: [] };

var todosReducers = (_todosReducers = {}, _defineProperty(_todosReducers, ADD_TODO, function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, { list: (0, _todos.addTodo)(state.list, payload) });
}), _defineProperty(_todosReducers, TOGGLE_TODO, function (state, _ref2) {
  var meta = _ref2.meta;
  return _extends({}, state, {
    list: (0, _todos.toggleTodo)(state.list, meta.id)
  });
}), _defineProperty(_todosReducers, SET_FILTER, function (state, _ref3) {
  var payload = _ref3.payload;
  return _extends({}, state, { filter: payload });
}), _todosReducers);

exports.default = (0, _processReducer2.default)(todosReducers, INIT_STATE);

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTodo = exports.addTodo = exports.getVisibleTodos = exports.FILTER_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _filters;

var _tools = __webpack_require__(343);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FILTER_TYPES = (0, _tools.Enum)('all', 'active', 'completed');

var ACTIVE = FILTER_TYPES.active,
    COMPLETED = FILTER_TYPES.completed;


var filters = (_filters = {}, _defineProperty(_filters, COMPLETED, function (todos) {
  return todos.filter(function (t) {
    return t.completed;
  });
}), _defineProperty(_filters, ACTIVE, function (todos) {
  return todos.filter(function (t) {
    return !t.completed;
  });
}), _filters);

var serializeTodo = function serializeTodo(_ref) {
  var id = _ref.id,
      text = _ref.text,
      _ref$completed = _ref.completed,
      completed = _ref$completed === undefined ? false : _ref$completed;
  return {
    id: id,
    text: text,
    completed: completed
  };
};

var getVisibleTodos = function getVisibleTodos() {
  var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filter = arguments[1];
  return filters[filter] ? filters[filter](todos) : todos;
};

var addTodo = function addTodo(todos, todo) {
  return [].concat(_toConsumableArray(todos), [serializeTodo(todo)]);
};

var toggleTodo = function toggleTodo(todos, id) {
  return todos.map(function (t) {
    return t.id !== id ? t : _extends({}, t, { completed: !t.completed });
  });
};

exports.FILTER_TYPES = FILTER_TYPES;
exports.getVisibleTodos = getVisibleTodos;
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.default = { FILTER_TYPES: FILTER_TYPES, getVisibleTodos: getVisibleTodos, addTodo: addTodo, toggleTodo: toggleTodo };

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enum = exports.execute = exports.validate = undefined;

var _lodash = __webpack_require__(25);

var validate = function validate(condition) {
  return new Promise(function (resolve, reject) {
    return condition ? resolve() : reject();
  });
};

var execute = function execute(commands) {
  return function (commandName, options) {
    return new Promise(function (resolve, reject) {
      var command = commands[commandName];
      if (command) {
        resolve(command(options));
      } else {
        reject(commandName, options);
      }
    });
  };
};

var Enum = function Enum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _lodash.zipObject)(args.map(function (value) {
    return (0, _lodash.snakeCase)(value);
  }), args);
};

exports.validate = validate;
exports.execute = execute;
exports.Enum = Enum;
exports.default = { validate: validate, execute: execute, Enum: Enum };

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTodo = exports.setFilter = exports.addTodo = exports.types = undefined;

var _v = __webpack_require__(345);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TODO = 'ADD_TODO';
var addTodo = function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: (0, _v2.default)(),
      text: text
    }
  };
};

var SET_FILTER = 'SET_FILTER';
var setFilter = function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

var TOGGLE_TODO = 'TOGGLE_TODO';
var toggleTodo = function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    meta: { id: id }
  };
};

var types = { ADD_TODO: ADD_TODO, SET_FILTER: SET_FILTER, TOGGLE_TODO: TOGGLE_TODO };

exports.types = types;
exports.addTodo = addTodo;
exports.setFilter = setFilter;
exports.toggleTodo = toggleTodo;
exports.default = { types: types, addTodo: addTodo, setFilter: setFilter, toggleTodo: toggleTodo };

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockReducers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _processReducer = __webpack_require__(101);

var _processReducer2 = _interopRequireDefault(_processReducer);

var _mocks = __webpack_require__(349);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INIT_STATE = { fetching: false, enitity: '', list: [] };

var FETCH_USERS_INIT = _mocks.types.FETCH_USERS_INIT,
    FETCH_USERS_COMMIT = _mocks.types.FETCH_USERS_COMMIT,
    FETCH_USERS_ROLLBACK = _mocks.types.FETCH_USERS_ROLLBACK,
    FETCH_POSTS_INIT = _mocks.types.FETCH_POSTS_INIT,
    FETCH_POSTS_COMMIT = _mocks.types.FETCH_POSTS_COMMIT,
    FETCH_POSTS_ROLLBACK = _mocks.types.FETCH_POSTS_ROLLBACK,
    FETCH_ALBUMS_INIT = _mocks.types.FETCH_ALBUMS_INIT,
    FETCH_ALBUMS_COMMIT = _mocks.types.FETCH_ALBUMS_COMMIT,
    FETCH_ALBUMS_ROLLBACK = _mocks.types.FETCH_ALBUMS_ROLLBACK;


var fetchInit = function fetchInit(entity) {
  return function (state) {
    return _extends({}, state, { fetching: true, entity: entity });
  };
};
var fetchCommit = function fetchCommit(state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, { fetching: false, list: payload });
};
var fetchRollback = function fetchRollback(state, _ref2) {
  var meta = _ref2.meta;
  return _extends({}, state, {
    fetching: false,
    error: meta.error
  });
};

var mockReducers = (_mockReducers = {}, _defineProperty(_mockReducers, FETCH_USERS_INIT, fetchInit('User')), _defineProperty(_mockReducers, FETCH_USERS_COMMIT, fetchCommit), _defineProperty(_mockReducers, FETCH_USERS_ROLLBACK, fetchRollback), _defineProperty(_mockReducers, FETCH_POSTS_INIT, fetchInit('Posts')), _defineProperty(_mockReducers, FETCH_POSTS_COMMIT, fetchCommit), _defineProperty(_mockReducers, FETCH_POSTS_ROLLBACK, fetchRollback), _defineProperty(_mockReducers, FETCH_ALBUMS_INIT, fetchInit('Albums')), _defineProperty(_mockReducers, FETCH_ALBUMS_COMMIT, fetchCommit), _defineProperty(_mockReducers, FETCH_ALBUMS_ROLLBACK, fetchRollback), _mockReducers);

exports.default = (0, _processReducer2.default)(mockReducers, INIT_STATE);

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getPosts = exports.getUsers = exports.types = undefined;

var _mocks = __webpack_require__(350);

var FETCH_USERS_INIT = 'FETCH_USERS_INIT';
var fetchUsersInit = function fetchUsersInit(options) {
  return { type: FETCH_USERS_INIT, meta: { options: options } };
};

var FETCH_USERS_COMMIT = 'FETCH_USERS_COMMIT';
var fetchUsersCommit = function fetchUsersCommit(users) {
  return {
    type: FETCH_USERS_COMMIT,
    payload: users
  };
};

var FETCH_USERS_ROLLBACK = 'FETCH_USERS_ROLLBACK';
var fetchUsersRollback = function fetchUsersRollback(error) {
  return {
    type: FETCH_USERS_ROLLBACK,
    meta: { error: error }
  };
};

var getUsers = function getUsers(options) {
  return function (dipatch) {
    dipatch(fetchUsersInit(options));
    (0, _mocks.getUsers)().then(function (users) {
      return dipatch(fetchUsersCommit(users));
    }).catch(function (error) {
      return dipatch(fetchUsersRollback(error));
    });
  };
};

var FETCH_POSTS_INIT = 'FETCH_POSTS_INIT';
var fetchPostsInit = function fetchPostsInit(options) {
  return { type: FETCH_POSTS_INIT, meta: { options: options } };
};

var FETCH_POSTS_COMMIT = 'FETCH_POSTS_COMMIT';
var fetchPostsCommit = function fetchPostsCommit(posts) {
  return {
    type: FETCH_POSTS_COMMIT,
    payload: posts
  };
};

var FETCH_POSTS_ROLLBACK = 'FETCH_POSTS_ROLLBACK';
var fetchPostsRollback = function fetchPostsRollback(error) {
  return {
    type: FETCH_POSTS_ROLLBACK,
    meta: { error: error }
  };
};

var getPosts = function getPosts(options) {
  return function (dipatch) {
    dipatch(fetchPostsInit(options));
    (0, _mocks.getPosts)().then(function (posts) {
      return dipatch(fetchPostsCommit(posts));
    }).catch(function (error) {
      return dipatch(fetchPostsRollback(error));
    });
  };
};

var FETCH_ALBUMS_INIT = 'FETCH_ALBUMS_INIT';
var fetchAlbumsInit = function fetchAlbumsInit(options) {
  return { type: FETCH_ALBUMS_INIT, meta: { options: options } };
};

var FETCH_ALBUMS_COMMIT = 'FETCH_ALBUMS_COMMIT';
var fetchAlbumsCommit = function fetchAlbumsCommit(albums) {
  return {
    type: FETCH_ALBUMS_COMMIT,
    payload: albums
  };
};

var FETCH_ALBUMS_ROLLBACK = 'FETCH_ALBUMS_ROLLBACK';
var fetchAlbumsRollback = function fetchAlbumsRollback(error) {
  return {
    type: FETCH_ALBUMS_ROLLBACK,
    meta: { error: error }
  };
};

var getAlbums = function getAlbums(options) {
  return function (dipatch) {
    dipatch(fetchAlbumsInit(options));
    (0, _mocks.getAlbums)().then(function (albums) {
      return dipatch(fetchAlbumsCommit(albums));
    }).catch(function (error) {
      return dipatch(fetchAlbumsRollback(error));
    });
  };
};

var types = {
  FETCH_USERS_INIT: FETCH_USERS_INIT,
  FETCH_USERS_COMMIT: FETCH_USERS_COMMIT,
  FETCH_USERS_ROLLBACK: FETCH_USERS_ROLLBACK,
  FETCH_POSTS_INIT: FETCH_POSTS_INIT,
  FETCH_POSTS_COMMIT: FETCH_POSTS_COMMIT,
  FETCH_POSTS_ROLLBACK: FETCH_POSTS_ROLLBACK,
  FETCH_ALBUMS_INIT: FETCH_ALBUMS_INIT,
  FETCH_ALBUMS_COMMIT: FETCH_ALBUMS_COMMIT,
  FETCH_ALBUMS_ROLLBACK: FETCH_ALBUMS_ROLLBACK
};

exports.types = types;
exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.getAlbums = getAlbums;
exports.default = { types: types, getUsers: getUsers, getPosts: getPosts, getAlbums: getAlbums };

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodos = exports.getPhotos = exports.getAlbums = exports.getPosts = exports.getUsers = undefined;

var _lodash = __webpack_require__(25);

var FAKER_API = 'https://jsonplaceholder.typicode.com'; // Using JSONPlaceholder
// For more info: https://github.com/typicode/jsonplaceholder#how-to

var jsonToQueryString = function jsonToQueryString(json) {
  return '?' + (0, _lodash.keys)(json).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
};

var getFake = function getFake(schema) {
  return function (params) {
    return fetch(FAKER_API + '/' + schema + '?' + jsonToQueryString(params)).then(function (res) {
      return res.json();
    });
  };
};

var getUsers = getFake('users');

var getPosts = getFake('posts');

var getAlbums = getFake('albums');

var getPhotos = getFake('photos');

var getTodos = getFake('todos');

exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.getAlbums = getAlbums;
exports.getPhotos = getPhotos;
exports.getTodos = getTodos;
exports.default = { getUsers: getUsers, getPosts: getPosts, getAlbums: getAlbums, getPhotos: getPhotos, getTodos: getTodos };

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(25);

var _redux = __webpack_require__(100);

var _reduxPersist = __webpack_require__(352);

var _reduxLogger = __webpack_require__(358);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(359);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (reducers) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { devTools: false, logger: false };

  var middlewares = (0, _lodash.compact)([_reduxThunk2.default, options.logger && _reduxLogger2.default]);
  var extensions = (0, _lodash.compact)([options.devTools && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _reduxPersist.autoRehydrate)(), _redux.applyMiddleware.apply(undefined, _toConsumableArray(middlewares))]);
  var store = _redux.compose.apply(undefined, _toConsumableArray(extensions))(_redux.createStore)(reducers);
  (0, _reduxPersist.persistStore)(store);
  return store;
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDictionary = exports.content = undefined;

var _react = __webpack_require__(0);

var _lodash = __webpack_require__(25);

var _reactRedux = __webpack_require__(98);

var _propTypes = __webpack_require__(157);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(361);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dictionary = {};
var PARAMS_REG_EXP = '%{(.*?)}';
var paramsRegExp = new RegExp(PARAMS_REG_EXP, 'g');

var content = function content(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var format = options.format,
      params = options.params;

  var text = (0, _lodash.get)(dictionary, path, '');
  var value = params ? text.replace(paramsRegExp, function (replaceText, key) {
    return params[key];
  }) : text;
  return format ? format(value) : value;
};

var setDictionary = function setDictionary(lang) {
  dictionary = _content2.default[lang];
};

var ContentProvider = function (_Component) {
  _inherits(ContentProvider, _Component);

  function ContentProvider(props) {
    _classCallCheck(this, ContentProvider);

    var _this = _possibleConstructorReturn(this, (ContentProvider.__proto__ || Object.getPrototypeOf(ContentProvider)).call(this, props));

    _this.getChildContext = function () {
      return { content: dictionary };
    };

    _this.componentWillReceiveProps = function (nextProps) {
      return setDictionary(nextProps.lang);
    };

    _this.shouldComponentUpdate = function (nextProps) {
      return _this.props.lang !== nextProps.lang;
    };

    _this.render = function () {
      return _react.Children.only(_this.props.children);
    };

    setDictionary(props.lang);
    return _this;
  }
  // you must specify what you’re adding to the context

  // `Children.only` enables us not to add a wrapping <div />


  return ContentProvider;
}(_react.Component);

ContentProvider.propTypes = {
  lang: _propTypes2.default.string
};
ContentProvider.defaultProps = {
  lang: 'en'
};
ContentProvider.childContextTypes = {
  content: _propTypes2.default.shape({}).isRequired
};
exports.content = content;
exports.setDictionary = setDictionary;
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var app = _ref.app;
  return { lang: app.language };
})(ContentProvider);

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en = __webpack_require__(362);

var _en2 = _interopRequireDefault(_en);

var _es = __webpack_require__(363);

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { en: _en2.default, es: _es2.default };

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = {"app":{"title":"Application Demo"},"todo_list":{"title":"ToDo List","filter":"Filters"},"mocks":{"fetching":"Fetching... %{entity}"},"assets":{"title":"Assets","images":"Images","icons":"Material icons"}}

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = {"app":{"title":"Aplicación Demo"},"todo_list":{"title":"Lista de ToDos","filter":"Filtros"},"mocks":{"fetching":"Cargando... %{entity}"},"assets":{"title":"Bienes","images":"Imágenes","icons":"Material icons"}}

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(98);

var _lodash = __webpack_require__(25);

var _react3 = __webpack_require__(51);

var _react4 = _interopRequireDefault(_react3);

var _bounds = __webpack_require__(370);

var _EmotionCapture = __webpack_require__(371);

var _EmotionCapture2 = _interopRequireDefault(_EmotionCapture);

var _FacesMonitor = __webpack_require__(372);

var _FacesMonitor2 = _interopRequireDefault(_FacesMonitor);

var _Timeline = __webpack_require__(374);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _app = __webpack_require__(168);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(287);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by thram on 21/01/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// Server rendering support
// import { BrowserRouter as Router } from 'react-router-dom';


var FACE_TIMEOUT = 5000;

var MainContainer = (0, _react4.default)('div', 'css-MainContainer-iou4fo0', [{
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '100%',
  'overflow': 'hidden',
  'padding': '2rem',
  'display': '-webkit-box; display: -ms-flexbox; display: flex',
  'WebkitBoxOrient': 'vertical',
  'WebkitBoxDirection': 'normal',
  'msFlexDirection': 'column',
  'flexDirection': 'column'
}]);
var Container = (0, _react4.default)('div', 'css-Container-iou4fo1', [{
  'display': '-webkit-box; display: -ms-flexbox; display: flex',
  'WebkitBoxFlex': '1',
  'msFlex': '1',
  'flex': '1'
}]);

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = { facesHistory: {} }, _this.onCapture = function (faces) {
      var time = new Date().getTime();
      var facesWithId = [];
      var facesHistory = faces.reduce(function (result, face) {
        var faceCenter = { x: face.width / 2, y: face.height / 2 };
        var currentBounds = {
          x: face.location_xy[0] + faceCenter.x,
          y: face.location_xy[1] + faceCenter.y
        };
        var faceId = (0, _lodash.reduce)(_this.state.facesHistory, function (res, value, key) {
          var lastValue = (0, _lodash.last)(value);
          var prevBounds = {
            x: lastValue.location_xy[0],
            y: lastValue.location_xy[1],
            width: lastValue.width,
            height: lastValue.height
          };
          return (0, _bounds.checkBounds)(prevBounds, currentBounds) && time - lastValue.time < FACE_TIMEOUT ? key : res;
        }, undefined);
        var key = faceId || (0, _lodash.uniqueId)('face_');
        var initValue = result[key] || [];
        facesWithId.push(_extends({}, face, { id: key }));
        return _extends({}, result, _defineProperty({}, key, [].concat(_toConsumableArray(initValue), [_extends({}, face, { time: time })])));
      }, _this.state.facesHistory);
      _this.setState({ faces: facesWithId, facesHistory: facesHistory });
    }, _this.render = function () {
      return _react2.default.createElement(
        MainContainer,
        {
          'data-qa-node': 'MainContainer',
          'data-qa-file': 'App'
        },
        _react2.default.createElement(
          Container,
          {
            'data-qa-node': 'Container',
            'data-qa-file': 'App'
          },
          _react2.default.createElement(_EmotionCapture2.default, { onCapture: _this.onCapture, 'data-qa-node': 'EmotionCapture',
            'data-qa-file': 'App'
          }),
          _react2.default.createElement(_FacesMonitor2.default, { faces: _this.state.faces, 'data-qa-node': 'FacesMonitor',
            'data-qa-file': 'App'
          })
        ),
        _react2.default.createElement(_Timeline2.default, { history: _this.state.facesHistory, 'data-qa-node': 'Timeline',
          'data-qa-file': 'App'
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var app = _ref2.app;
  return _extends({}, app);
}, function (dispatch) {
  return {
    setLanguage: function setLanguage(lang) {
      return dispatch(_app2.default.setLanguage(lang));
    }
  };
})(App);

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkBounds = exports.checkMinMax = exports.checkMax = exports.checkMin = undefined;

var _lodash = __webpack_require__(25);

var checkMin = function checkMin(min) {
  return function (value) {
    return value < min ? min : value;
  };
};
var checkMax = function checkMax(max) {
  return function (value) {
    return value > max ? max : value;
  };
};
var checkMinMax = function checkMinMax(min, max) {
  return (0, _lodash.flow)(checkMin(min), checkMax(max));
};

var checkBounds = function checkBounds(bounds1, bounds2) {
  var min = { x: bounds1.x, y: bounds1.y };

  var max = {
    x: bounds1.x + bounds1.width,
    y: bounds1.y + bounds1.height
  };
  var checkMinMaxX = checkMinMax(min.x, max.x);
  var checkMinMaxY = checkMinMax(min.y, max.y);
  return {
    x: checkMinMaxX(bounds2.x),
    y: checkMinMaxY(bounds2.y)
  };
};

exports.checkMin = checkMin;
exports.checkMax = checkMax;
exports.checkMinMax = checkMinMax;
exports.checkBounds = checkBounds;
exports.default = { checkMin: checkMin, checkMax: checkMax, checkMinMax: checkMinMax, checkBounds: checkBounds };

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _react3 = __webpack_require__(51);

var _react4 = _interopRequireDefault(_react3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (0, _react4.default)('div', 'css-Container-a6reab0', [{
  'position': 'relative',
  'WebkitBoxFlex': '1',
  'msFlex': '1',
  'flex': '1'
}]);
var FaceId = (0, _react4.default)('div', 'css-FaceId-a6reab1', [{
  'position': 'absolute',
  'border': 'blue 2px solid'
}, function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height;
  return {
    top: y + 'px',
    left: x + 'px',
    width: width + 'px',
    height: height + 'px'
  };
}]);

var CHECK_TIME = 1000;

var EmotionCapture = function (_Component) {
  _inherits(EmotionCapture, _Component);

  function EmotionCapture() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, EmotionCapture);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EmotionCapture.__proto__ || Object.getPrototypeOf(EmotionCapture)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      faces: [],
      constraints: { audio: false }
    }, _this.setCanvas = function (ref) {
      if (ref) _this.canvas = ref;
    }, _this.setVideo = function (ref) {
      if (ref) _this.video = ref;
    }, _this.setContainer = function (ref) {
      if (ref) _this.container = ref;
    }, _this.checkEmotions = function () {
      _this.takePicture();
      // PREVIEW IMAGE FOR TESTING
      // this.setState({ preview: this.canvas.toDataURL('image/png') });
      _this.canvas.toBlob(function (blob) {
        var data = new FormData();
        data.append('image_buf', blob, 'emotion');
        // const startTime = new Date().getTime();
        fetch('/v1.0.0/predict', { method: 'POST', body: data }).then(function (res) {
          return res.json();
        }).then(function (_ref3) {
          var faces = _ref3.faces;

          // const endTime = new Date().getTime();
          // console.log(endTime - startTime);
          // console.log(faces);
          if (_this.props.onCapture) _this.props.onCapture(faces);
          // this.registerFaces(faces);
          _this.setState({ faces: faces });
        }).catch(function (err) {
          return console.log(err);
        });
      });
    }, _this.takePicture = function () {
      var context = _this.canvas.getContext('2d');
      _this.canvas.width = _this.width;
      _this.canvas.height = _this.height;
      context.drawImage(_this.video, 0, 0, _this.width, _this.height);
    }, _this.startTracking = function () {
      _this.interval = setInterval(_this.checkEmotions, CHECK_TIME);
    }, _this.stopTracking = function () {
      clearInterval(_this.interval);
    }, _this.render = function () {
      return _react2.default.createElement(
        Container,
        { innerRef: _this.setContainer, 'data-qa-node': 'Container',
          'data-qa-file': 'EmotionCapture'
        },
        _react2.default.createElement('video', { ref: _this.setVideo, 'data-qa-node': 'video',
          'data-qa-file': 'EmotionCapture'
        }),
        _react2.default.createElement('canvas', { ref: _this.setCanvas, hidden: true, 'data-qa-node': 'canvas',
          'data-qa-file': 'EmotionCapture'
        }),
        _this.state.preview && _react2.default.createElement('img', { src: _this.state.preview, 'data-qa-node': 'img',
          'data-qa-file': 'EmotionCapture'
        }),
        _this.state.faces.map(function (_ref4, key) {
          var index = _ref4.index,
              location_xy = _ref4.location_xy,
              width = _ref4.width,
              height = _ref4.height;
          return _react2.default.createElement(
            FaceId,
            { key: 'face_id_' + index, x: location_xy[0], y: location_xy[1], width: width, height: height, 'data-qa-node': 'FaceId',
              'data-qa-file': 'EmotionCapture'
            },
            key
          );
        }),
        _react2.default.createElement(
          'button',
          { onClick: _this.startTracking, 'data-qa-node': 'button',
            'data-qa-file': 'EmotionCapture'
          },
          'Start Tracking'
        ),
        _react2.default.createElement(
          'button',
          { onClick: _this.stopTracking, 'data-qa-node': 'button',
            'data-qa-file': 'EmotionCapture'
          },
          'Stop Tracking'
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmotionCapture, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var constraints = this.state.constraints;

      var _container$getBoundin = this.container.getBoundingClientRect(),
          width = _container$getBoundin.width,
          height = _container$getBoundin.height;

      this.height = height;
      this.width = width;
      var getUserMedia = function getUserMedia(params) {
        return new Promise(function (successCallback, errorCallback) {
          return navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
        });
      };

      getUserMedia(_extends({}, constraints, { video: { width: width, height: height } })).then(function (stream) {
        var vendorURL = window.URL || window.webkitURL;
        _this2.video.src = vendorURL.createObjectURL(stream);
        _this2.video.play();
        // this.checkEmotions();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }]);

  return EmotionCapture;
}(_react.Component);

exports.default = EmotionCapture;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _react3 = __webpack_require__(51);

var _react4 = _interopRequireDefault(_react3);

var _Face = __webpack_require__(373);

var _Face2 = _interopRequireDefault(_Face);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Faces = (0, _react4.default)('div', 'css-Faces-cye7p50', [{
  'overflow': 'auto',
  'WebkitBoxFlex': '1',
  'msFlex': '1',
  'flex': '1'
}]);

var FacesMonitor = function FacesMonitor(_ref) {
  var _ref$faces = _ref.faces,
      faces = _ref$faces === undefined ? [] : _ref$faces;
  return _react2.default.createElement(
    Faces,
    {
      'data-qa-node': 'Faces',
      'data-qa-file': 'FacesMonitor'
    },
    faces.map(function (props) {
      return _react2.default.createElement(_Face2.default, _extends({ key: 'face_' + props.index }, props, {
        'data-qa-node': 'Face',
        'data-qa-file': 'FacesMonitor'
      }));
    })
  );
};

exports.default = FacesMonitor;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _react3 = __webpack_require__(51);

var _react4 = _interopRequireDefault(_react3);

var _lodash = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColor = function getColor() {
  var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if ((0, _lodash.inRange)(progress, 0.4)) return '#F04155';
  if ((0, _lodash.inRange)(progress, 0.4, 0.6)) return '#FF823A';
  return '#248F8D';
};
var Container = (0, _react4.default)('div', 'css-Container-m92buf0', [{
  'padding': '.5rem'
}]);
var Emotions = (0, _react4.default)('div', 'css-Emotions-m92buf1', [{
  'display': '-webkit-box; display: -ms-flexbox; display: flex',
  'WebkitBoxAlign': 'center',
  'msFlexAlign': 'center',
  'alignItems': 'center'
}]);
var Label = (0, _react4.default)('div', 'css-Label-m92buf2', [{
  'fontWeight': 'bold',
  'marginRight': '1rem',
  'width': '60px'
}]);

var BarContainer = (0, _react4.default)('div', 'css-BarContainer-m92buf3', [{
  'backgroundColor': '#ddd',
  'WebkitBoxFlex': '1',
  'msFlex': '1',
  'flex': '1'
}]);
var Bar = (0, _react4.default)('div', 'css-Bar-m92buf4', [{
  'height': '10px',
  'WebkitTransition': 'all 500ms ease',
  'transition': 'all 500ms ease',
  'backgroundColor': '#ddd'
}, function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === undefined ? 0 : _ref$value;
  return { width: value * 100 + '%', backgroundColor: getColor(value) };
}]);

var Face = function Face(_ref2) {
  var id = _ref2.id,
      prediction = _ref2.prediction,
      thumbnail = _ref2.thumbnail;
  return _react2.default.createElement(
    Container,
    {
      'data-qa-node': 'Container',
      'data-qa-file': 'Face'
    },
    _react2.default.createElement(
      'div',
      {
        'data-qa-node': 'div',
        'data-qa-file': 'Face'
      },
      _react2.default.createElement('img', { src: thumbnail, alt: 'face', 'data-qa-node': 'img',
        'data-qa-file': 'Face'
      }),
      id
    ),
    prediction.map(function (_ref3) {
      var emotion = _ref3.emotion,
          percent = _ref3.percent;
      return _react2.default.createElement(
        Emotions,
        { key: emotion, 'data-qa-node': 'Emotions',
          'data-qa-file': 'Face'
        },
        _react2.default.createElement(
          Label,
          {
            'data-qa-node': 'Label',
            'data-qa-file': 'Face'
          },
          (0, _lodash.capitalize)(emotion)
        ),
        _react2.default.createElement(
          BarContainer,
          {
            'data-qa-node': 'BarContainer',
            'data-qa-file': 'Face'
          },
          _react2.default.createElement(Bar, { value: percent, 'data-qa-node': 'Bar',
            'data-qa-file': 'Face'
          })
        )
      );
    })
  );
};

exports.default = Face;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recharts = __webpack_require__(375);

var _lodash = __webpack_require__(25);

var _react3 = __webpack_require__(51);

var _react4 = _interopRequireDefault(_react3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (0, _react4.default)('div', 'css-Container-14f37a40', [{
  'WebkitBoxFlex': '1',
  'msFlex': '1',
  'flex': '1'
}]);

var Timeline = function (_Component) {
  _inherits(Timeline, _Component);

  function Timeline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timeline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.state = { current: 'face_1' }, _this.generateData = function (id) {
      var history = _this.props.history;
      // const emotion = 'sad';

      var data = (0, _lodash.reduce)(history, function (result, faceHistory, faceId) {
        var initialTime = void 0;
        return _extends({}, result, _defineProperty({}, faceId, faceHistory.map(function (face) {
          if (!initialTime) initialTime = face.time;
          return _extends({
            time: face.time - initialTime,
            percent: 100
          }, face.prediction.reduce(function (res, _ref2) {
            var emotion = _ref2.emotion,
                percent = _ref2.percent;
            return _extends({}, res, _defineProperty({}, emotion, percent * 100));
          }, {}));
        })));
      }, {});
      return data[id];
    }, _this.render = function () {
      return _react2.default.createElement(
        Container,
        {
          'data-qa-node': 'Container',
          'data-qa-file': 'Timeline'
        },
        _react2.default.createElement(
          'h1',
          {
            'data-qa-node': 'h1',
            'data-qa-file': 'Timeline'
          },
          _this.state.current
        ),
        _react2.default.createElement(
          'select',
          {
            value: _this.state.current,
            onChange: function onChange(ev) {
              return _this.setState({ current: ev.target.value });
            },
            'data-qa-node': 'select',
            'data-qa-file': 'Timeline'
          },
          Object.keys(_this.props.history).map(function (key) {
            return _react2.default.createElement(
              'option',
              { key: 'option_' + key, 'data-qa-node': 'option',
                'data-qa-file': 'Timeline'
              },
              key
            );
          })
        ),
        _react2.default.createElement(
          _recharts.LineChart,
          {
            width: 600,
            height: 300,
            data: _this.generateData(_this.state.current),
            margin: { top: 5, right: 30, left: 20, bottom: 5 },
            'data-qa-node': 'LineChart',
            'data-qa-file': 'Timeline'
          },
          _react2.default.createElement(
            _recharts.XAxis,
            { type: 'number', dataKey: 'time', 'data-qa-node': 'XAxis',
              'data-qa-file': 'Timeline'
            },
            _react2.default.createElement(_recharts.Label, { value: 'ms', position: 'insideBottom', 'data-qa-node': 'Label',
              'data-qa-file': 'Timeline'
            })
          ),
          _react2.default.createElement(
            _recharts.YAxis,
            { type: 'number', unit: '%', dataKey: 'percent', 'data-qa-node': 'YAxis',
              'data-qa-file': 'Timeline'
            },
            _react2.default.createElement(_recharts.Label, { value: '%', position: 'insideLeft', angle: 90, 'data-qa-node': 'Label',
              'data-qa-file': 'Timeline'
            })
          ),
          _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3', 'data-qa-node': 'CartesianGrid',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Tooltip, {
            'data-qa-node': 'Tooltip',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Legend, {
            'data-qa-node': 'Legend',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'angry', stroke: '#CC0C39', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'fear', stroke: '#215A6D', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'happy', stroke: '#92C7A3', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'neutral', stroke: '#EB613B', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'sad', stroke: '#2D2D29', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          }),
          _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'surprise', stroke: '#C8CF02', activeDot: { r: 8 }, 'data-qa-node': 'Line',
            'data-qa-file': 'Timeline'
          })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Timeline;
}(_react.Component);

exports.default = Timeline;

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(702)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "html {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n.material-icons {\n  cursor: default;\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  -moz-user-select: none;\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n  -ms-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -khtml-user-select: none;\n  user-select: none;\n}\n\n.pure-button-success,\n.pure-button-error,\n.pure-button-warning,\n.pure-button-secondary {\n  color: white;\n  border-radius: 4px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.pure-button-success {\n  background: rgb(28, 184, 65); /* this is a green */\n}\n\n.pure-button-error {\n  background: rgb(202, 60, 60); /* this is a maroon */\n}\n\n.pure-button-warning {\n  background: rgb(223, 117, 20); /* this is an orange */\n}\n\n.pure-button-secondary {\n  background: rgb(66, 184, 221); /* this is a light blue */\n}\n", ""]);

// exports


/***/ })

},[288]);
//# sourceMappingURL=app.3ee3746b743e76a4c417.js.map