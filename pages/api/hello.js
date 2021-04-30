// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}


// export default async (req, res) => {
//   if (req.method === "GET") {
//     const dataRes = await fetch("");
//     const data = await dataRes.json();

//     return res.send(data);
//   }

//   if (req.method === "POST") {
//     return res.send("Data has been received");
//   }

// }