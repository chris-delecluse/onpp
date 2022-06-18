create table if not exists question_description_item_image
(
    id   serial primary key,
    path varchar(512) not null
);

create table if not exists question_description_item_text
(
    id      serial primary key,
    content text not null
);

create table if not exists question
(
    id             serial primary key,
    final_question varchar(512) not null
);

create table if not exists question_solution
(
    id           serial primary key,
    question_id  int references question (id),
    answer_index int not null
);

create table if not exists user_answer
(
    id           serial primary key,
    question_id  int references question (id),
    user_name    varchar(512) not null,
    answer_index int          not null
);

create table if not exists user_answer_result
(
    id             serial primary key,
    user_answer_id int references user_answer (id),
    result         bool not null
);

create table if not exists question_description_item
(
    id          serial primary key,
    question_id int references question (id),
    idx         int not null,
    item_type   int not null,
    item_id     int not null
);

create table if not exists question_answer_item
(
    id          serial primary key,
    question_id int references question (id),
    content     varchar(512),
    index       int not null
);
