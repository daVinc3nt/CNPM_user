"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOperation = exports.RemarkRequestOperation = exports.UploadOperation = exports.FlashCardOperation = exports.PracticeOperation = exports.FTagOperation = exports.TagOperation = exports.RecordOperation = exports.TestOperation = exports.QuizOperation = exports.AccountOperation = exports.AuthOperation = void 0;
var axios_1 = require("axios");
var interfaces_1 = require("./interfaces");
var FormData = require("form-data");
var AuthOperation = /** @class */ (function () {
    function AuthOperation() {
        this.baseUrl = 'https://abc/v1/auth';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    AuthOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    AuthOperation.prototype.signup = function (payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/signup?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_1 = _c.sent();
                        console.log("Error signing up: ", (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_1 === null || error_1 === void 0 ? void 0 : error_1.request);
                        return [2 /*return*/, { success: (_b = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _b === void 0 ? void 0 : _b.data, request: error_1 === null || error_1 === void 0 ? void 0 : error_1.request, status: error_1.response ? error_1.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthOperation.prototype.login = function (payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_2 = _c.sent();
                        console.log("Error logging in: ", (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_2 === null || error_2 === void 0 ? void 0 : error_2.request);
                        return [2 /*return*/, { success: (_b = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _b === void 0 ? void 0 : _b.data, request: error_2 === null || error_2 === void 0 ? void 0 : error_2.request, status: error_2.response ? error_2.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthOperation.prototype.verifyOtp = function (payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/otp/verify?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_3 = _c.sent();
                        console.log("Error verifying otp: ", (_a = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_3 === null || error_3 === void 0 ? void 0 : error_3.request);
                        return [2 /*return*/, { success: (_b = error_3 === null || error_3 === void 0 ? void 0 : error_3.response) === null || _b === void 0 ? void 0 : _b.data, request: error_3 === null || error_3 === void 0 ? void 0 : error_3.request, status: error_3.response ? error_3.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthOperation.prototype.resendOTP = function (payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/otp/resend?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_4 = _c.sent();
                        console.log("Error verifying otp: ", (_a = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_4 === null || error_4 === void 0 ? void 0 : error_4.request);
                        return [2 /*return*/, { success: (_b = error_4 === null || error_4 === void 0 ? void 0 : error_4.response) === null || _b === void 0 ? void 0 : _b.data, request: error_4 === null || error_4 === void 0 ? void 0 : error_4.request, status: error_4.response ? error_4.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthOperation.prototype.refreshToken = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/token/refresh?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_5 = _c.sent();
                        console.log("Error logging in: ", (_a = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_5 === null || error_5 === void 0 ? void 0 : error_5.request);
                        return [2 /*return*/, { success: (_b = error_5 === null || error_5 === void 0 ? void 0 : error_5.response) === null || _b === void 0 ? void 0 : _b.data, request: error_5 === null || error_5 === void 0 ? void 0 : error_5.request, status: error_5.response ? error_5.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AuthOperation;
}());
exports.AuthOperation = AuthOperation;
var AccountOperation = /** @class */ (function () {
    function AccountOperation() {
        this.baseUrl = 'https://abc/v1/accounts';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    AccountOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    AccountOperation.prototype.search = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_6 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_6 === null || error_6 === void 0 ? void 0 : error_6.request);
                        return [2 /*return*/, { success: (_b = error_6 === null || error_6 === void 0 ? void 0 : error_6.response) === null || _b === void 0 ? void 0 : _b.data, request: error_6 === null || error_6 === void 0 ? void 0 : error_6.request, status: error_6.response ? error_6.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_7;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_7 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_7 === null || error_7 === void 0 ? void 0 : error_7.request);
                        return [2 /*return*/, { success: (_b = error_7 === null || error_7 === void 0 ? void 0 : error_7.response) === null || _b === void 0 ? void 0 : _b.data, request: error_7 === null || error_7 === void 0 ? void 0 : error_7.request, status: error_7.response ? error_7.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.update = function (id, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_8;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_8 = _c.sent();
                        console.log("Error updating account: ", (_a = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_8 === null || error_8 === void 0 ? void 0 : error_8.request);
                        return [2 /*return*/, { success: (_b = error_8 === null || error_8 === void 0 ? void 0 : error_8.response) === null || _b === void 0 ? void 0 : _b.data, request: error_8 === null || error_8 === void 0 ? void 0 : error_8.request, status: error_8.response ? error_8.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.updateAvatar = function (id, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_9;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append('avatar', payload.avatar);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/avatar/update/").concat(id, "?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_9 = _c.sent();
                        console.log("Error updating avatar: ", (_a = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_9 === null || error_9 === void 0 ? void 0 : error_9.request);
                        return [2 /*return*/, { success: (_b = error_9 === null || error_9 === void 0 ? void 0 : error_9.response) === null || _b === void 0 ? void 0 : _b.data, request: error_9 === null || error_9 === void 0 ? void 0 : error_9.request, status: error_9.response ? error_9.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // will return image url in data
    AccountOperation.prototype.getAvatar = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_10;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/avatar/get/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_10 = _c.sent();
                        console.log("Error getting avatar: ", (_a = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_10 === null || error_10 === void 0 ? void 0 : error_10.request);
                        return [2 /*return*/, { success: (_b = error_10 === null || error_10 === void 0 ? void 0 : error_10.response) === null || _b === void 0 ? void 0 : _b.data, request: error_10 === null || error_10 === void 0 ? void 0 : error_10.request, status: error_10.response ? error_10.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // get total amount number of accounts
    AccountOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_11;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_11 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_11 === null || error_11 === void 0 ? void 0 : error_11.request);
                        return [2 /*return*/, { success: (_b = error_11 === null || error_11 === void 0 ? void 0 : error_11.response) === null || _b === void 0 ? void 0 : _b.data, request: error_11 === null || error_11 === void 0 ? void 0 : error_11.request, status: error_11.response ? error_11.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.getAuthenticatedInfo = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_12;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/"), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_12 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_12 === null || error_12 === void 0 ? void 0 : error_12.request);
                        return [2 /*return*/, { success: (_b = error_12 === null || error_12 === void 0 ? void 0 : error_12.response) === null || _b === void 0 ? void 0 : _b.data, request: error_12 === null || error_12 === void 0 ? void 0 : error_12.request, status: error_12.response ? error_12.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.resetPassword = function (email) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_13;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/password/reset?").concat(this.langQuery), email, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_13 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_13 === null || error_13 === void 0 ? void 0 : error_13.request);
                        return [2 /*return*/, { success: (_b = error_13 === null || error_13 === void 0 ? void 0 : error_13.response) === null || _b === void 0 ? void 0 : _b.data, request: error_13 === null || error_13 === void 0 ? void 0 : error_13.request, status: error_13.response ? error_13.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.checkExist = function (email) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_14;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/check?").concat(this.langQuery), email, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_14 = _b.sent();
                        console.log("Error searching accounts: ", error_14.message);
                        console.error("Request that caused the error: ", error_14 === null || error_14 === void 0 ? void 0 : error_14.request);
                        return [2 /*return*/, { success: (_a = error_14 === null || error_14 === void 0 ? void 0 : error_14.response) === null || _a === void 0 ? void 0 : _a.data, request: error_14 === null || error_14 === void 0 ? void 0 : error_14.request, status: error_14.response ? error_14.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountOperation.prototype.verifyOtpForResetPassword = function (payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_15;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/otp/verify?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; }
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_15 = _c.sent();
                        console.log("Error verifying otp: ", (_a = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_15 === null || error_15 === void 0 ? void 0 : error_15.request);
                        return [2 /*return*/, { success: (_b = error_15 === null || error_15 === void 0 ? void 0 : error_15.response) === null || _b === void 0 ? void 0 : _b.data, request: error_15 === null || error_15 === void 0 ? void 0 : error_15.request, status: error_15.response ? error_15.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AccountOperation;
}());
exports.AccountOperation = AccountOperation;
var QuizOperation = /** @class */ (function () {
    function QuizOperation() {
        this.baseUrl = 'https://abc/v1/quizzes';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    QuizOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    QuizOperation.prototype.create = function (payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_16;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append('file', payload.file);
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_16 = _b.sent();
                        console.error("Request that caused the error: ", error_16 === null || error_16 === void 0 ? void 0 : error_16.request);
                        return [2 /*return*/, { success: (_a = error_16 === null || error_16 === void 0 ? void 0 : error_16.response) === null || _a === void 0 ? void 0 : _a.data, request: error_16 === null || error_16 === void 0 ? void 0 : error_16.request, status: error_16.response ? error_16.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get all quizzes
    QuizOperation.prototype.search = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_17;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_17 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_17 === null || error_17 === void 0 ? void 0 : error_17.request);
                        return [2 /*return*/, { success: (_b = error_17 === null || error_17 === void 0 ? void 0 : error_17.response) === null || _b === void 0 ? void 0 : _b.data, request: error_17 === null || error_17 === void 0 ? void 0 : error_17.request, status: error_17.response ? error_17.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_18;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_18 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_18 === null || error_18 === void 0 ? void 0 : error_18.request);
                        return [2 /*return*/, { success: (_b = error_18 === null || error_18 === void 0 ? void 0 : error_18.response) === null || _b === void 0 ? void 0 : _b.data, request: error_18 === null || error_18 === void 0 ? void 0 : error_18.request, status: error_18.response ? error_18.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizOperation.prototype.update = function (id, payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_19;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append('file', payload.file);
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_19 = _b.sent();
                        console.error("Request that caused the error: ", error_19 === null || error_19 === void 0 ? void 0 : error_19.request);
                        return [2 /*return*/, { success: (_a = error_19 === null || error_19 === void 0 ? void 0 : error_19.response) === null || _a === void 0 ? void 0 : _a.data, request: error_19 === null || error_19 === void 0 ? void 0 : error_19.request, status: error_19.response ? error_19.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_20;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_20 = _c.sent();
                        console.log("Error updating account: ", (_a = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_20 === null || error_20 === void 0 ? void 0 : error_20.request);
                        return [2 /*return*/, { success: (_b = error_20 === null || error_20 === void 0 ? void 0 : error_20.response) === null || _b === void 0 ? void 0 : _b.data, request: error_20 === null || error_20 === void 0 ? void 0 : error_20.request, status: error_20.response ? error_20.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    QuizOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_21;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_21 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_21 === null || error_21 === void 0 ? void 0 : error_21.request);
                        return [2 /*return*/, { success: (_b = error_21 === null || error_21 === void 0 ? void 0 : error_21.response) === null || _b === void 0 ? void 0 : _b.data, request: error_21 === null || error_21 === void 0 ? void 0 : error_21.request, status: error_21.response ? error_21.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return QuizOperation;
}());
exports.QuizOperation = QuizOperation;
var TestOperation = /** @class */ (function () {
    function TestOperation() {
        this.baseUrl = 'https://abc/v1/tests';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    TestOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    TestOperation.prototype.createFullTest = function (payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, response, error_22;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        for (i = 0; i < payload.files.length; i++) {
                            formData.append('file', payload.files[i]);
                        }
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                    'Content-Type': 'multipart/form-data'
                                },
                                maxBodyLength: 10000000,
                                maxContentLength: 10000000
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_22 = _b.sent();
                        console.error("Request that caused the error: ", error_22 === null || error_22 === void 0 ? void 0 : error_22.request);
                        return [2 /*return*/, { success: (_a = error_22 === null || error_22 === void 0 ? void 0 : error_22.response) === null || _a === void 0 ? void 0 : _a.data, request: error_22 === null || error_22 === void 0 ? void 0 : error_22.request, status: error_22.response ? error_22.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.createFromQuizIds = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_23;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create_from_quiz_ids?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_23 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_23 === null || error_23 === void 0 ? void 0 : error_23.request);
                        return [2 /*return*/, { success: (_b = error_23 === null || error_23 === void 0 ? void 0 : error_23.response) === null || _b === void 0 ? void 0 : _b.data, request: error_23 === null || error_23 === void 0 ? void 0 : error_23.request, status: error_23.response ? error_23.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get custome tests
    TestOperation.prototype.search = function (option, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_24;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?option=").concat(option, "&").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_24 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_24 === null || error_24 === void 0 ? void 0 : error_24.request);
                        return [2 /*return*/, { success: (_b = error_24 === null || error_24 === void 0 ? void 0 : error_24.response) === null || _b === void 0 ? void 0 : _b.data, request: error_24 === null || error_24 === void 0 ? void 0 : error_24.request, status: error_24.response ? error_24.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_25;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_25 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_25 === null || error_25 === void 0 ? void 0 : error_25.request);
                        return [2 /*return*/, { success: (_b = error_25 === null || error_25 === void 0 ? void 0 : error_25.response) === null || _b === void 0 ? void 0 : _b.data, request: error_25 === null || error_25 === void 0 ? void 0 : error_25.request, status: error_25.response ? error_25.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.update = function (id, payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, response, error_26;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        for (i = 0; i < payload.files.length; i++) {
                            formData.append('file', payload.files[i]);
                        }
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token),
                                    'Content-Type': 'multipart/form-data'
                                },
                                maxBodyLength: 10000000,
                                maxContentLength: 10000000
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_26 = _b.sent();
                        console.error("Request that caused the error: ", error_26 === null || error_26 === void 0 ? void 0 : error_26.request);
                        return [2 /*return*/, { success: (_a = error_26 === null || error_26 === void 0 ? void 0 : error_26.response) === null || _a === void 0 ? void 0 : _a.data, request: error_26 === null || error_26 === void 0 ? void 0 : error_26.request, status: error_26.response ? error_26.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_27;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_27 = _c.sent();
                        console.log("Error updating account: ", (_a = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_27 === null || error_27 === void 0 ? void 0 : error_27.request);
                        return [2 /*return*/, { success: (_b = error_27 === null || error_27 === void 0 ? void 0 : error_27.response) === null || _b === void 0 ? void 0 : _b.data, request: error_27 === null || error_27 === void 0 ? void 0 : error_27.request, status: error_27.response ? error_27.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.countRecordByTestId = function (testId, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_28;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/records/count/").concat(testId, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_28 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_28 === null || error_28 === void 0 ? void 0 : error_28.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_28 === null || error_28 === void 0 ? void 0 : error_28.request);
                        return [2 /*return*/, { success: (_b = error_28 === null || error_28 === void 0 ? void 0 : error_28.response) === null || _b === void 0 ? void 0 : _b.data, request: error_28 === null || error_28 === void 0 ? void 0 : error_28.request, status: error_28.response ? error_28.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_29;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_29 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_29 === null || error_29 === void 0 ? void 0 : error_29.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_29 === null || error_29 === void 0 ? void 0 : error_29.request);
                        return [2 /*return*/, { success: (_b = error_29 === null || error_29 === void 0 ? void 0 : error_29.response) === null || _b === void 0 ? void 0 : _b.data, request: error_29 === null || error_29 === void 0 ? void 0 : error_29.request, status: error_29.response ? error_29.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TestOperation;
}());
exports.TestOperation = TestOperation;
var RecordOperation = /** @class */ (function () {
    function RecordOperation() {
        this.baseUrl = 'https://abc/v1/records';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    RecordOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    RecordOperation.prototype.init = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_30;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/init?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_30 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_30 === null || error_30 === void 0 ? void 0 : error_30.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_30 === null || error_30 === void 0 ? void 0 : error_30.request);
                        return [2 /*return*/, { success: (_b = error_30 === null || error_30 === void 0 ? void 0 : error_30.response) === null || _b === void 0 ? void 0 : _b.data, request: error_30 === null || error_30 === void 0 ? void 0 : error_30.request, status: error_30.response ? error_30.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.search = function (payload, option, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_31;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?option=").concat(option, "&").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_31 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_31 === null || error_31 === void 0 ? void 0 : error_31.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_31 === null || error_31 === void 0 ? void 0 : error_31.request);
                        return [2 /*return*/, { success: (_b = error_31 === null || error_31 === void 0 ? void 0 : error_31.response) === null || _b === void 0 ? void 0 : _b.data, request: error_31 === null || error_31 === void 0 ? void 0 : error_31.request, status: error_31.response ? error_31.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_32;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_32 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_32 === null || error_32 === void 0 ? void 0 : error_32.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_32 === null || error_32 === void 0 ? void 0 : error_32.request);
                        return [2 /*return*/, { success: (_b = error_32 === null || error_32 === void 0 ? void 0 : error_32.response) === null || _b === void 0 ? void 0 : _b.data, request: error_32 === null || error_32 === void 0 ? void 0 : error_32.request, status: error_32.response ? error_32.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.update = function (id, payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, i, response, error_33;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        for (i = 0; i < payload.writingFiles.length; i++) {
                            formData.append('writingFile', payload.writingFiles[i]);
                        }
                        for (i = 0; i < payload.speakingFiles.length; i++) {
                            formData.append('speakingFile', payload.speakingFiles[i]);
                        }
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_33 = _b.sent();
                        console.error("Request that caused the error: ", error_33 === null || error_33 === void 0 ? void 0 : error_33.request);
                        return [2 /*return*/, { success: (_a = error_33 === null || error_33 === void 0 ? void 0 : error_33.response) === null || _a === void 0 ? void 0 : _a.data, request: error_33 === null || error_33 === void 0 ? void 0 : error_33.request, status: error_33.response ? error_33.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.updateConfig = function (id, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_34;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/config/update/").concat(id, "?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_34 = _c.sent();
                        console.log("Error updating account: ", (_a = error_34 === null || error_34 === void 0 ? void 0 : error_34.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_34 === null || error_34 === void 0 ? void 0 : error_34.request);
                        return [2 /*return*/, { success: (_b = error_34 === null || error_34 === void 0 ? void 0 : error_34.response) === null || _b === void 0 ? void 0 : _b.data, request: error_34 === null || error_34 === void 0 ? void 0 : error_34.request, status: error_34.response ? error_34.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_35;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_35 = _c.sent();
                        console.log("Error updating account: ", (_a = error_35 === null || error_35 === void 0 ? void 0 : error_35.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_35 === null || error_35 === void 0 ? void 0 : error_35.request);
                        return [2 /*return*/, { success: (_b = error_35 === null || error_35 === void 0 ? void 0 : error_35.response) === null || _b === void 0 ? void 0 : _b.data, request: error_35 === null || error_35 === void 0 ? void 0 : error_35.request, status: error_35.response ? error_35.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.getTestStat = function (testId, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_36;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/stat/").concat(testId, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_36 = _c.sent();
                        console.log("Error updating account: ", (_a = error_36 === null || error_36 === void 0 ? void 0 : error_36.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_36 === null || error_36 === void 0 ? void 0 : error_36.request);
                        return [2 /*return*/, { success: (_b = error_36 === null || error_36 === void 0 ? void 0 : error_36.response) === null || _b === void 0 ? void 0 : _b.data, request: error_36 === null || error_36 === void 0 ? void 0 : error_36.request, status: error_36.response ? error_36.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.getWritingAnswer = function (writingAnswerId, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_37;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/writing/answer/").concat(writingAnswerId, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_37 = _c.sent();
                        console.log("Error updating account: ", (_a = error_37 === null || error_37 === void 0 ? void 0 : error_37.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_37 === null || error_37 === void 0 ? void 0 : error_37.request);
                        return [2 /*return*/, { success: (_b = error_37 === null || error_37 === void 0 ? void 0 : error_37.response) === null || _b === void 0 ? void 0 : _b.data, request: error_37 === null || error_37 === void 0 ? void 0 : error_37.request, status: error_37.response ? error_37.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.createWritingRemark = function (writingAnswerId, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_38;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/writing/remark/").concat(writingAnswerId, "?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_38 = _c.sent();
                        console.log("Error updating account: ", (_a = error_38 === null || error_38 === void 0 ? void 0 : error_38.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_38 === null || error_38 === void 0 ? void 0 : error_38.request);
                        return [2 /*return*/, { success: (_b = error_38 === null || error_38 === void 0 ? void 0 : error_38.response) === null || _b === void 0 ? void 0 : _b.data, request: error_38 === null || error_38 === void 0 ? void 0 : error_38.request, status: error_38.response ? error_38.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordOperation.prototype.count = function (token, accountId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var query, response, error_39;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        query = "";
                        if (accountId) {
                            query = "accountId=".concat(accountId, "&");
                        }
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(query).concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_39 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_39 === null || error_39 === void 0 ? void 0 : error_39.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_39 === null || error_39 === void 0 ? void 0 : error_39.request);
                        return [2 /*return*/, { success: (_b = error_39 === null || error_39 === void 0 ? void 0 : error_39.response) === null || _b === void 0 ? void 0 : _b.data, request: error_39 === null || error_39 === void 0 ? void 0 : error_39.request, status: error_39.response ? error_39.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RecordOperation;
}());
exports.RecordOperation = RecordOperation;
var TagOperation = /** @class */ (function () {
    function TagOperation() {
        this.baseUrl = 'https://abc/v1/tags';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    TagOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    TagOperation.prototype.create = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_40;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_40 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_40 === null || error_40 === void 0 ? void 0 : error_40.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_40 === null || error_40 === void 0 ? void 0 : error_40.request);
                        return [2 /*return*/, { success: (_b = error_40 === null || error_40 === void 0 ? void 0 : error_40.response) === null || _b === void 0 ? void 0 : _b.data, request: error_40 === null || error_40 === void 0 ? void 0 : error_40.request, status: error_40.response ? error_40.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get tags
    TagOperation.prototype.search = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_41;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_41 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_41 === null || error_41 === void 0 ? void 0 : error_41.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_41 === null || error_41 === void 0 ? void 0 : error_41.request);
                        return [2 /*return*/, { success: (_b = error_41 === null || error_41 === void 0 ? void 0 : error_41.response) === null || _b === void 0 ? void 0 : _b.data, request: error_41 === null || error_41 === void 0 ? void 0 : error_41.request, status: error_41.response ? error_41.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagOperation.prototype.update = function (id, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_42;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_42 = _c.sent();
                        console.log("Error updating account: ", (_a = error_42 === null || error_42 === void 0 ? void 0 : error_42.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_42 === null || error_42 === void 0 ? void 0 : error_42.request);
                        return [2 /*return*/, { success: (_b = error_42 === null || error_42 === void 0 ? void 0 : error_42.response) === null || _b === void 0 ? void 0 : _b.data, request: error_42 === null || error_42 === void 0 ? void 0 : error_42.request, status: error_42.response ? error_42.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_43;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_43 = _c.sent();
                        console.log("Error updating account: ", (_a = error_43 === null || error_43 === void 0 ? void 0 : error_43.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_43 === null || error_43 === void 0 ? void 0 : error_43.request);
                        return [2 /*return*/, { success: (_b = error_43 === null || error_43 === void 0 ? void 0 : error_43.response) === null || _b === void 0 ? void 0 : _b.data, request: error_43 === null || error_43 === void 0 ? void 0 : error_43.request, status: error_43.response ? error_43.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_44;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_44 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_44 === null || error_44 === void 0 ? void 0 : error_44.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_44 === null || error_44 === void 0 ? void 0 : error_44.request);
                        return [2 /*return*/, { success: (_b = error_44 === null || error_44 === void 0 ? void 0 : error_44.response) === null || _b === void 0 ? void 0 : _b.data, request: error_44 === null || error_44 === void 0 ? void 0 : error_44.request, status: error_44.response ? error_44.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TagOperation;
}());
exports.TagOperation = TagOperation;
var FTagOperation = /** @class */ (function () {
    function FTagOperation() {
        this.baseUrl = 'https://abc/v1/ftags';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    FTagOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    FTagOperation.prototype.create = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_45;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_45 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_45 === null || error_45 === void 0 ? void 0 : error_45.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_45 === null || error_45 === void 0 ? void 0 : error_45.request);
                        return [2 /*return*/, { success: (_b = error_45 === null || error_45 === void 0 ? void 0 : error_45.response) === null || _b === void 0 ? void 0 : _b.data, request: error_45 === null || error_45 === void 0 ? void 0 : error_45.request, status: error_45.response ? error_45.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get ftags
    FTagOperation.prototype.search = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_46;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_46 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_46 === null || error_46 === void 0 ? void 0 : error_46.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_46 === null || error_46 === void 0 ? void 0 : error_46.request);
                        return [2 /*return*/, { success: (_b = error_46 === null || error_46 === void 0 ? void 0 : error_46.response) === null || _b === void 0 ? void 0 : _b.data, request: error_46 === null || error_46 === void 0 ? void 0 : error_46.request, status: error_46.response ? error_46.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FTagOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_47;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_47 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_47 === null || error_47 === void 0 ? void 0 : error_47.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_47 === null || error_47 === void 0 ? void 0 : error_47.request);
                        return [2 /*return*/, { success: (_b = error_47 === null || error_47 === void 0 ? void 0 : error_47.response) === null || _b === void 0 ? void 0 : _b.data, request: error_47 === null || error_47 === void 0 ? void 0 : error_47.request, status: error_47.response ? error_47.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FTagOperation.prototype.update = function (id, payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_48;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_48 = _c.sent();
                        console.log("Error updating account: ", (_a = error_48 === null || error_48 === void 0 ? void 0 : error_48.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_48 === null || error_48 === void 0 ? void 0 : error_48.request);
                        return [2 /*return*/, { success: (_b = error_48 === null || error_48 === void 0 ? void 0 : error_48.response) === null || _b === void 0 ? void 0 : _b.data, request: error_48 === null || error_48 === void 0 ? void 0 : error_48.request, status: error_48.response ? error_48.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FTagOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_49;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_49 = _c.sent();
                        console.log("Error updating account: ", (_a = error_49 === null || error_49 === void 0 ? void 0 : error_49.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_49 === null || error_49 === void 0 ? void 0 : error_49.request);
                        return [2 /*return*/, { success: (_b = error_49 === null || error_49 === void 0 ? void 0 : error_49.response) === null || _b === void 0 ? void 0 : _b.data, request: error_49 === null || error_49 === void 0 ? void 0 : error_49.request, status: error_49.response ? error_49.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FTagOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_50;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_50 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_50 === null || error_50 === void 0 ? void 0 : error_50.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_50 === null || error_50 === void 0 ? void 0 : error_50.request);
                        return [2 /*return*/, { success: (_b = error_50 === null || error_50 === void 0 ? void 0 : error_50.response) === null || _b === void 0 ? void 0 : _b.data, request: error_50 === null || error_50 === void 0 ? void 0 : error_50.request, status: error_50.response ? error_50.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FTagOperation;
}());
exports.FTagOperation = FTagOperation;
var PracticeOperation = /** @class */ (function () {
    function PracticeOperation() {
        this.baseUrl = 'https://abc/v1/practices';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    PracticeOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    PracticeOperation.prototype.create = function (payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, response, error_51;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        for (i = 0; i < payload.files.length; i++) {
                            formData.append('file', payload.files[i]);
                        }
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_51 = _b.sent();
                        console.error("Request that caused the error: ", error_51 === null || error_51 === void 0 ? void 0 : error_51.request);
                        return [2 /*return*/, { success: (_a = error_51 === null || error_51 === void 0 ? void 0 : error_51.response) === null || _a === void 0 ? void 0 : _a.data, request: error_51 === null || error_51 === void 0 ? void 0 : error_51.request, status: error_51.response ? error_51.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get search by tag id
    PracticeOperation.prototype.search = function (skill, tagId, page, size, hasPublished, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var query, response, error_52;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        query = "";
                        if (skill) {
                            query += "&skill=".concat(skill);
                        }
                        if (tagId) {
                            query += "&tagId=".concat(tagId);
                        }
                        query += "&hasPublished=".concat(hasPublished);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search?page=").concat(page, "&size=").concat(size).concat(query, "&").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_52 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_52 === null || error_52 === void 0 ? void 0 : error_52.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_52 === null || error_52 === void 0 ? void 0 : error_52.request);
                        return [2 /*return*/, { success: (_b = error_52 === null || error_52 === void 0 ? void 0 : error_52.response) === null || _b === void 0 ? void 0 : _b.data, request: error_52 === null || error_52 === void 0 ? void 0 : error_52.request, status: error_52.response ? error_52.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PracticeOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_53;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_53 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_53 === null || error_53 === void 0 ? void 0 : error_53.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_53 === null || error_53 === void 0 ? void 0 : error_53.request);
                        return [2 /*return*/, { success: (_b = error_53 === null || error_53 === void 0 ? void 0 : error_53.response) === null || _b === void 0 ? void 0 : _b.data, request: error_53 === null || error_53 === void 0 ? void 0 : error_53.request, status: error_53.response ? error_53.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PracticeOperation;
}());
exports.PracticeOperation = PracticeOperation;
// flash card
var FlashCardOperation = /** @class */ (function () {
    function FlashCardOperation() {
        this.baseUrl = 'https://abc/v1/flashcards';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    FlashCardOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    FlashCardOperation.prototype.create = function (payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_54;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append("file", payload.file);
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_54 = _b.sent();
                        console.error("Request that caused the error: ", error_54 === null || error_54 === void 0 ? void 0 : error_54.request);
                        return [2 /*return*/, { success: (_a = error_54 === null || error_54 === void 0 ? void 0 : error_54.response) === null || _a === void 0 ? void 0 : _a.data, request: error_54 === null || error_54 === void 0 ? void 0 : error_54.request, status: error_54.response ? error_54.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.bulkCreate = function (payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, i, response, error_55;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        for (i = 0; i < payload.files.length; i++) {
                            formData.append('file', payload.files[i]);
                        }
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/bulk_create?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_55 = _b.sent();
                        console.error("Request that caused the error: ", error_55 === null || error_55 === void 0 ? void 0 : error_55.request);
                        return [2 /*return*/, { success: (_a = error_55 === null || error_55 === void 0 ? void 0 : error_55.response) === null || _a === void 0 ? void 0 : _a.data, request: error_55 === null || error_55 === void 0 ? void 0 : error_55.request, status: error_55.response ? error_55.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.search = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_56;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_56 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_56 === null || error_56 === void 0 ? void 0 : error_56.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_56 === null || error_56 === void 0 ? void 0 : error_56.request);
                        return [2 /*return*/, { success: (_b = error_56 === null || error_56 === void 0 ? void 0 : error_56.response) === null || _b === void 0 ? void 0 : _b.data, request: error_56 === null || error_56 === void 0 ? void 0 : error_56.request, status: error_56.response ? error_56.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.findOne = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_57;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/search/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_57 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_57 === null || error_57 === void 0 ? void 0 : error_57.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_57 === null || error_57 === void 0 ? void 0 : error_57.request);
                        return [2 /*return*/, { success: (_b = error_57 === null || error_57 === void 0 ? void 0 : error_57.response) === null || _b === void 0 ? void 0 : _b.data, request: error_57 === null || error_57 === void 0 ? void 0 : error_57.request, status: error_57.response ? error_57.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.update = function (id, payload, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_58;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        formData = new FormData();
                        formData.append("file", payload.file);
                        formData.append('data', JSON.stringify(payload.data));
                        return [4 /*yield*/, axios_1.default.put("".concat(this.baseUrl, "/update/").concat(id, "?").concat(this.langQuery), formData, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_58 = _b.sent();
                        console.error("Request that caused the error: ", error_58 === null || error_58 === void 0 ? void 0 : error_58.request);
                        return [2 /*return*/, { success: (_a = error_58 === null || error_58 === void 0 ? void 0 : error_58.response) === null || _a === void 0 ? void 0 : _a.data, request: error_58 === null || error_58 === void 0 ? void 0 : error_58.request, status: error_58.response ? error_58.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_59;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_59 = _c.sent();
                        console.log("Error updating account: ", (_a = error_59 === null || error_59 === void 0 ? void 0 : error_59.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_59 === null || error_59 === void 0 ? void 0 : error_59.request);
                        return [2 /*return*/, { success: (_b = error_59 === null || error_59 === void 0 ? void 0 : error_59.response) === null || _b === void 0 ? void 0 : _b.data, request: error_59 === null || error_59 === void 0 ? void 0 : error_59.request, status: error_59.response ? error_59.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FlashCardOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_60;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_60 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_60 === null || error_60 === void 0 ? void 0 : error_60.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_60 === null || error_60 === void 0 ? void 0 : error_60.request);
                        return [2 /*return*/, { success: (_b = error_60 === null || error_60 === void 0 ? void 0 : error_60.response) === null || _b === void 0 ? void 0 : _b.data, request: error_60 === null || error_60 === void 0 ? void 0 : error_60.request, status: error_60.response ? error_60.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FlashCardOperation;
}());
exports.FlashCardOperation = FlashCardOperation;
// upload
var UploadOperation = /** @class */ (function () {
    function UploadOperation() {
        this.baseUrl = 'https://abc/v1/upload';
    }
    UploadOperation.prototype.search = function (filepath, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_61;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "?path=").concat(filepath), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_61 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_61 === null || error_61 === void 0 ? void 0 : error_61.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_61 === null || error_61 === void 0 ? void 0 : error_61.request);
                        return [2 /*return*/, { success: (_b = error_61 === null || error_61 === void 0 ? void 0 : error_61.response) === null || _b === void 0 ? void 0 : _b.data, request: error_61 === null || error_61 === void 0 ? void 0 : error_61.request, status: error_61.response ? error_61.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UploadOperation;
}());
exports.UploadOperation = UploadOperation;
// remark request
var RemarkRequestOperation = /** @class */ (function () {
    function RemarkRequestOperation() {
        this.baseUrl = 'https://abc/v1/remark_requests';
        this.langQuery = "lang=".concat(interfaces_1.LangVersion.vi);
    }
    RemarkRequestOperation.prototype.setLanguage = function (lang) {
        this.langQuery = "lang=".concat(lang);
    };
    RemarkRequestOperation.prototype.search = function (payload, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_62;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/search?").concat(this.langQuery), payload, {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_62 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_62 === null || error_62 === void 0 ? void 0 : error_62.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_62 === null || error_62 === void 0 ? void 0 : error_62.request);
                        return [2 /*return*/, { success: (_b = error_62 === null || error_62 === void 0 ? void 0 : error_62.response) === null || _b === void 0 ? void 0 : _b.data, request: error_62 === null || error_62 === void 0 ? void 0 : error_62.request, status: error_62.response ? error_62.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemarkRequestOperation.prototype.delete = function (id, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_63;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.delete("".concat(this.baseUrl, "/delete/").concat(id, "?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_63 = _c.sent();
                        console.log("Error updating account: ", (_a = error_63 === null || error_63 === void 0 ? void 0 : error_63.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_63 === null || error_63 === void 0 ? void 0 : error_63.request);
                        return [2 /*return*/, { success: (_b = error_63 === null || error_63 === void 0 ? void 0 : error_63.response) === null || _b === void 0 ? void 0 : _b.data, request: error_63 === null || error_63 === void 0 ? void 0 : error_63.request, status: error_63.response ? error_63.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemarkRequestOperation.prototype.count = function (token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_64;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/count?").concat(this.langQuery), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                                headers: {
                                    Authorization: "Bearer ".concat(token)
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_64 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_64 === null || error_64 === void 0 ? void 0 : error_64.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_64 === null || error_64 === void 0 ? void 0 : error_64.request);
                        return [2 /*return*/, { success: (_b = error_64 === null || error_64 === void 0 ? void 0 : error_64.response) === null || _b === void 0 ? void 0 : _b.data, request: error_64 === null || error_64 === void 0 ? void 0 : error_64.request, status: error_64.response ? error_64.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RemarkRequestOperation;
}());
exports.RemarkRequestOperation = RemarkRequestOperation;
var AppOperation = /** @class */ (function () {
    function AppOperation() {
        this.baseUrl = 'https://abc/v1';
    }
    AppOperation.prototype.getPrivilegeConfig = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response, error_65;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(this.baseUrl, "/privilege_config"), {
                                withCredentials: true,
                                validateStatus: function (status) { return status >= 200 && status <= 500; },
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, {
                                success: response.data.success,
                                message: response.data.message,
                                data: response.data.data,
                                status: response.status
                            }];
                    case 2:
                        error_65 = _c.sent();
                        console.log("Error searching accounts: ", (_a = error_65 === null || error_65 === void 0 ? void 0 : error_65.response) === null || _a === void 0 ? void 0 : _a.data);
                        console.error("Request that caused the error: ", error_65 === null || error_65 === void 0 ? void 0 : error_65.request);
                        return [2 /*return*/, { success: (_b = error_65 === null || error_65 === void 0 ? void 0 : error_65.response) === null || _b === void 0 ? void 0 : _b.data, request: error_65 === null || error_65 === void 0 ? void 0 : error_65.request, status: error_65.response ? error_65.response.status : null }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AppOperation;
}());
exports.AppOperation = AppOperation;
