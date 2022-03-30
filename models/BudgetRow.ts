export interface IBudgetRow {
    id: number;
    budget_id: string;
    budgeted: number;
    category_id: string;
    created_date: number;
    updated_date?: number;
}