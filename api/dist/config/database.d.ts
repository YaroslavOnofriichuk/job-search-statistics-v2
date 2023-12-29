import { DataSource } from "typeorm";
export declare const dbConf: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    subscribers: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    autoLoadEntities: boolean;
    synchronize: boolean;
    migrationsRun: boolean;
    logging: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    subscribers: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    autoLoadEntities: boolean;
    synchronize: boolean;
    migrationsRun: boolean;
    logging: boolean;
}>;
export declare const dataSource: DataSource;
