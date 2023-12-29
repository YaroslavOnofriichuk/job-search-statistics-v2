"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_constants_1 = require("./auth.constants");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});
const Public = () => (0, common_1.SetMetadata)(auth_constants_1.PublicKey, true);
exports.Public = Public;
//# sourceMappingURL=auth.decorators.js.map