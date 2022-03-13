create table roles
(
    id       binary(16) DEFAULT (UUID_TO_BIN(UUID(), TRUE)) NOT NULL,
    user_id  binary(16) null,
    name     varchar(12) not null,
    constraint roles_pk
        primary key (id),
    constraint roles_users_id_fk
        foreign key (user_id) references users (id)
);

