import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCompliment1625395256829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliment",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "sender_user_id",
                        type: "uuid"
                    },
                    {
                        name: "receiver_user_id",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKComplimentUserSender",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["sender_user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKComplimentUserReceiver",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["receiver_user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKComplimentTag",
                        referencedTableName: "tag",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }


                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliment");
    }

}
