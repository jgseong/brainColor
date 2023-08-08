import { json } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';
import { nanoid } from 'nanoid';

import { connectionString } from '$lib/dburl.js';
const uri = connectionString;

export async function GET({request}) {
  const client = new MongoClient(uri);
  let scoreList = [];
  try {
    await client.connect();
    const db = client.db('brainColor');

    /* 데이터 가져오기 처리 코드 작성하기 */
    scoreList = await db.collection('score')
                        .find()
                        .sort( {score: -1} )
                        .limit(10)
                        .toArray();
    return json({ list: scoreList });
  } catch (e) {
    return error(500, e.message);
  } finally {
    await client.close();
    console.log('데이터베이스 close');
  }
}

export async function PUT({request}) {
  const client = new MongoClient(uri);
  let rtn = {};
  let score = await request.json();

  /* 입력 형식 체크 */
  if (!score.name || !score.score) {
    throw error(500, '잘못된 형식입니다.');
  }
  score['_id'] = nanoid();

  try {
    await client.connect();
    const db = client.db('brainColor');

    /* 데이터 저장하기 코드 작성하기 */
    rtn = await db.collection('score').insertOne(score); // data 삽입

    return json({result: rtn});
  } catch (e) {
    return error(e.status, e.message);
  } finally {
    await client.close();
    console.log('데이터베이스 close');
  }
}