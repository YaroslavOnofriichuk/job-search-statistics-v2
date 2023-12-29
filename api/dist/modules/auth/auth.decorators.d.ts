import { PublicKey } from "./auth.constants";
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const Public: () => import("@nestjs/common").CustomDecorator<typeof PublicKey>;
