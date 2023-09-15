"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
var graphql_1 = require("graphql");
var plugin = function (schema, documents, config, info) {
    var result = [];
    Object.entries(schema.getTypeMap()).forEach(function (_a) {
        var name = _a[0], type = _a[1];
        if (type instanceof graphql_1.GraphQLEnumType && !name.startsWith("__")) {
            var values = type.getValues().map(function (enumElm) { return enumElm.value; });
            result.push("export const ".concat(name, " = ").concat(JSON.stringify(values), " as const"));
        }
    });
    return "\n" + result.join("\n") + "\n";
};
exports.plugin = plugin;
