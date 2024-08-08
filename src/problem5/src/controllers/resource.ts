import { openDb } from '../database';
import { Resource } from '../models/resource';

export async function createResource(resource: Partial<Resource>): Promise<{
    score?: number;
    id: number | undefined;
    username?: string
}> {
    const db = await openDb();
    const result = await db.run(
        'INSERT INTO resources (username, score) VALUES (?, ?)',
        [resource.username, resource.score || 0]
    );
    return { id: result.lastID, ...resource };
}

export async function listResources(): Promise<Resource[]> {
    const db = await openDb();
    return db.all('SELECT * FROM resources ORDER BY score DESC');
}

export async function getResource(id: number): Promise<Resource | undefined> {
    const db = await openDb();
    return db.get('SELECT * FROM resources WHERE id = ?', [id]);
}

export async function updateResource(id: number, resource: Partial<Resource>): Promise<void> {
    const db = await openDb();
    await db.run(
        'UPDATE resources SET username = ?, score = ? WHERE id = ?',
        [resource.username, resource.score, id]
    );
}

export async function deleteResource(id: number): Promise<void> {
    const db = await openDb();
    await db.run('DELETE FROM resources WHERE id = ?', [id]);
}