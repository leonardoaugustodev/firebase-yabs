export interface IRecord {
    id: number;
    date: number;
    payee?: string;
    category_id: string;
    account_id: string;
    description?: string;
    outflow?: number;
    inflow?: number;
    code?: string;
    created_date: number;
    updated_date?: number;
}