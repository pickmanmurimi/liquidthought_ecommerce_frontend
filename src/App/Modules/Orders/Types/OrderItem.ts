import {Item} from "@/App/Common/Types/Item";

/**
 * Order
 */
export type OrderItem = {
    id: number,
    uuid: string,
    quantity: number,
    item: Item,
}