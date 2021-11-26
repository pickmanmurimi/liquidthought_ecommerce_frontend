import {OrderItem} from "@Modules/Orders/Types/OrderItem";
import {Address} from "@Modules/Checkout/Types/Address";

/**
 * Order
 */
export type Order = {
    id: number,
    uuid: string,
    address: Address,
    created_at: string,
    orderItems: Array<OrderItem>,
}