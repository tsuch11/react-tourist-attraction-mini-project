## react-tourist-attraction-mini-project

ค้นหาสถานที่ท่องเที่ยวจาก Server ด้วย Keyword — React (Vite + TailwindCSS) + Express

### Server

```bash
cd server
npm install
npm start
```

- Endpoint: `http://localhost:4001`
- `GET /trips?keywords=<คำค้นหา>` — คืนสถานที่ท่องเที่ยวที่ตรงกับ keyword (title, description, tags)

### Client

```bash
cd client
npm install
npm run dev
```

เปิด `http://localhost:5173`
