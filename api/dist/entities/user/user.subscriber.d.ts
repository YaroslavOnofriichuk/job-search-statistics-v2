import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    listenTo(): typeof User;
    afterInsert(event: InsertEvent<User>): void;
}
