import { MongoClient } from "mongodb";

const url = "mongodb+srv://jury124:qkrwodud12@jypark38.fz1xu9r.mongodb.net/forum?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
// connectDB 변수를 하나 만들어서 MongoClient.connect의 결과를 저장해두고 필요할때 사용하기
let connectDB;

// 개발중에는 파일을 저장하면 모든 JS파일을 다시 읽고 지나간다
// 그래서 MongoClient.connect가 동시에 여러개 실행될 수 있다. -> DB 입출력이 느려짐
// 이걸 방지하려면 개발중인 상태면 global 전역변수에 보관하는것.

// 개발 단계에 글로벌 변수를 만들어놓고 하라는 뜻
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  // 프로덕션 상태일 땐 global을 안쓰는게 좋으니까 else문 추가
  // 변수에 저장해놓으면 매번 실행안된다
  connectDB = new MongoClient(url, options).connect();
}

// await connectDB를 하면 됨.
export { connectDB };
