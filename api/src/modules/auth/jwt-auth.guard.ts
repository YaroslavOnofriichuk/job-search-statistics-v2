import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { PublicKey } from "./auth.constants";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        console.log("========JwtAuthGuard=canActivate==========")
        const isPublic =
            this.reflector.getAllAndOverride(PublicKey, [
                context.getClass(),
                context.getHandler(),
            ]) ?? false;

        if (isPublic) return true;
        return super.canActivate(context);
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        console.log("========JwtAuthGuard=getRequest==========")
        return ctx.getContext().req;
    }

    handleRequest(err, user, info) {
        console.log("========JwtAuthGuard=handleRequest==========", err, user, info)
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
