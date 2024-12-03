import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET() {
    const data = await fetchLatestInvoices();
    return Response.json(data);
}
