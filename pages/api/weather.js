// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_KEY = '1ecee8957cc21a11ca80c92ee63c1841';

const url = `https://api.openweathermap.org/data/2.5/weather?q=Aktobe&appid=${API_KEY}&units=metric`;
const getUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' });
// }

export default async function handler(req, res) {
  const request = async () => {
    const response = await fetch(getUrl(req.query.city));
    const data = await response.json();
    return res.status(200).json(data);
  };

  return request();
}
