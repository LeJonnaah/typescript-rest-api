export async function getCostumer(req:any, res:any) {
    try {
        const { db } = req.app;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await db.collection('costumers').findOne({
            _id: id
        });

        if (!result) {
            return res.status(404).json({ error: 'Costumer not found' });
        }

        res.status(200).json(result);
    } catch (error) {
        
    }
}