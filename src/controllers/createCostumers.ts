export async function createCostumers(req: any, res: any) {
    try {
        const { db } = req.app;

        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone || !address) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await db.collection('costumers').insertOne({
            name,
            email,
            phone,
            address
        });

        if (!result.result.ok) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json(result.ops[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}