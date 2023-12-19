import { createParamDecorator, ExecutionContext, SetMetadata } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { PublicKey } from "./auth.constants";

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    }
);

export const Public = () => SetMetadata(PublicKey, true);
