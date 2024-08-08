import { Router } from 'express';
import { createResource, listResources, getResource, updateResource, deleteResource } from '../controllers/resource';

const router = Router();

// Create a resource
router.post('/', async (req, res) => {
    const resource = await createResource(req.body);
    res.json(resource);
});

// List resources
router.get('/', async (req, res) => {
    const resources = await listResources();
    res.json(resources);
});

// Get details of a resource
router.get('/:id', async (req, res) => {
    const resource = await getResource(Number(req.params.id));
    if (resource) {
        res.json(resource);
    } else {
        res.status(404).json({ error: 'Resource not found' });
    }
});

// Update resource details
router.put('/:id', async (req, res) => {
    await updateResource(Number(req.params.id), req.body);
    res.json({ message: 'Resource updated successfully' });
});

// Delete a resource
router.delete('/:id', async (req, res) => {
    await deleteResource(Number(req.params.id));
    res.json({ message: 'Resource deleted successfully' });
});

export default router;