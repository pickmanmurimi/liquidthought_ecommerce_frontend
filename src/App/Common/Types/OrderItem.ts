/**
 * OrderItem
 */
import {Item} from "@/App/Common/Types/Item";

export type OrderItem = {
    item: Item,
    id: number,
    quantity: number,
}