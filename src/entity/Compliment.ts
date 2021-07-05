import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliment")
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  sender_user_id: string;

  @JoinColumn({ name: "sender_user_id" })
  @ManyToOne(() => User)
  senderUser: User;

  @Column()
  receiver_user_id: string;

  @JoinColumn({ name: "receiver_user_id" })
  @ManyToOne(() => User)
  receiverUser: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    };
  };

}

export { Compliment };