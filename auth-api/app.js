import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/status', (req, res) => {
    return res.json({ 
        service: 'Auth-API',
        httpStatus: 200,
        status: 'UP',
     });
});

app.use(express.json());

app.listen(PORT, () => console.log(`microservices auth-api running at ${PORT}`));
