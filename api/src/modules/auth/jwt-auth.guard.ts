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
        return ctx.getContext().req;
    }

    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
