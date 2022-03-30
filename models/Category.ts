export interface ICategory {
    id: number;
    name: string;
    is_active: boolean;
    parent_id: string;
    color_hex: string;
    icon: string;
    deactivated_date: number;
    created_date: number;
    updated_date: number;
}