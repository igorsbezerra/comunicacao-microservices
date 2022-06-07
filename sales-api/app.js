import express from 'express'

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());

app.get('/api/status', (req, res) => {
    return res.json({
        service: 'Sales-API',
        httpStatus: 200,
        status: 'UP',
    })
});

app.listen(PORT, () => console.log(`microservices sales-api running at ${PORT}`));