export async function getCostumers(req, res) {
    try {
        const { db } = req.app
        const { name, email, phone, address } = req.body
        const result = await db.collection('costumers').find({}).toArray()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}