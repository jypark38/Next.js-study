import { MongoClient } from "mongodb";

const url = "mongodb+srv://jury124:qkrwodud12@jypark38.fz1xu9r.mongodb.net/forum?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

// 개발중에는 파일을 저장하면 모든 JS파일을 다시 읽고 지나간다
// 개발 단계에 글로벌 변수를 만들어놓고 하라는 뜻
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  // 변수에 저장해놓으면 매번 실행안된다
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
