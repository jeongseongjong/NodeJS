# 이미지 갤러리

## multer 미들웨어를 활용한 이미지 업로드 게시판
## mongoDB와 mongoose를 연동하여 데이터 CRUD 구현

## mongoDB의 용어 정리

# db
* RDBMS에서 db와 같은 역할을 하며 main schema
* show dbs : db들의 목록을 확인하는 명령
* use mydb : mydb라는 이름으로 비어있는 schema를 생성하거나
            있으면 사용할 수 있도록 open 하라

# collection
* RDBMS에서 TABLE과 같은 역할을 하며 실제 데이터가 저장되는 작은 공간
* show collections : collection의 목록을 확인, 반드시 use db 실행후
* db.collection.쿼리명령
* db.tbl_books.insert({변수 : 값}) 컬렉션을 생성하고,
 새로운 데이터를 추가하라 만약 컬렉셔이 이미 있으면 기존 컬렉션에 데이터 추가

* db.collection.drop() : 컬렉션을 통째로 삭제
* db.collection.remove({}) : 컬렉션 내의 모든 도큐먼트 삭제
* db.collection.find({}) : 조회 retrive, read

# document
* RDBMS에서 한개의 Record와 같은 역할을 한다.