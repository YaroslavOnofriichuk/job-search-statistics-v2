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
    ssl: {
        rejectUnauthorized: boolean;
        ca: string;
    };
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
    ssl: {
        rejectUnauthorized: boolean;
        ca: string;
    };
}>;
export declare const dataSource: DataSource;
