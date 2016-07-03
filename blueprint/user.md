FORMAT: 1A


# 测试信息c
#  user [/user]
## 获取用户信息 [GET /user/info{?id,age,username,password}]
Gets a single note by its unique identifier.


+ Parameters
    
    + id(number,optional)
        + Default: 20
    + age(number,optional)
        + Default: 20
    + username(number,optional)
        + Default: 20
    + password(number,optional)
        + Default: 20

+ Response 200 (application/json)

    + Attributes

        + id: abc123
        + title: This is a note
        + content: This is the note content.
        + tags: todo, home (array[string])




## Get a note [POST /user/login]
Gets a single note by its unique identifier.

+ Response 200 (application/json)

    + Attributes

        + id: abc123
        + title: This is a note
        + content: This is the note content.
        + tags: todo, home (array[string])




# custer [/custer]

## 获取用户信息 [GET /info{?id,age,username,password}]
Gets a single note by its unique identifier.


+ Parameters
    
    + id(number,optional)
        + Default: 20
    + age(number,optional)
        + Default: 20
    + username(number,optional)
        + Default: 20
    + password(number,optional)
        + Default: 20

+ Response 200 (application/json)

    + Attributes

        + id: abc123
        + title: This is a note
        + content: This is the note content.
        + tags: todo, home (array[string])




## Get a note [POST /custer/login]
Gets a single note by its unique identifier.

+ Response 200 (application/json)

    + Attributes

        + id: abc123
        + title: This is a note
        + content: This is the note content.
        + tags: todo, home (array[string])
